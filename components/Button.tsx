interface Props {
  onClick: () => void;
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  isLoading?: boolean;
}

export default function Button(props: Props) {
  return (
    <button
      disabled={props.isLoading}
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
      className={`bg-zinc-900 rounded-sm text-orange-100 hover:bg-orange-100 hover:text-zinc-900 font-bold ${
        props.className
      } ${
        props.size === "sm"
          ? "px-1 text-sm "
          : props.size === "lg"
          ? "py-1 px-4"
          : "py-1 px-3"
      }`}
    >
      {props.isLoading ? "Loading..." : props.text}
    </button>
  );
}
