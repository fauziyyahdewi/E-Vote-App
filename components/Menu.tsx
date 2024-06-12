import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "./Button";
import Image from "next/image";

export default function Menu() {
  const { data: session } = useSession();

  return (
    <div className="flex container mx-auto justify-between items-center">
      <Link href="/">
        <Image
          alt="logo"
          src={"/images/evote.svg"}
          width={110}
          height={110}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex items-center space-x-3">
        {session ? (
          <>
            <span>{session.user.name}</span>
            <Button onClick={signOut} text="Logout" />
          </>
        ) : (
          <Button onClick={signIn} text="Login" />
        )}
      </div>
    </div>
  );
}
