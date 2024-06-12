import Head from "next/head";
import Link from "next/link";
import { getProviders, useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Login({ providers }: any) {
  const { data: session } = useSession();
  const router = useRouter();
  const handleLoginButton = (e: any) => {
    e.preventDefault();
    signIn();
  };

  if (session) {
    router.push("/");
  }
  const googleIcon = (
    <svg
      className="mr-2 -ml-1 w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      data-prefix="fab"
      data-icon="google"
      role="img">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  );
  const githubIcon = (
    <svg
      className="mr-2 -ml-1 w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-prefix="fab"
      data-icon="github"
      role="img">
      <path
        fill="#181717"
        d="M12 .297C5.373.297 0 5.67 0 12.3c0 5.305 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.166c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.494.997.108-.774.42-1.305.763-1.605-2.665-.306-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.306-.54-1.538.105-3.205 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.006-.403 11.52 11.52 0 013.006.403c2.28-1.552 3.3-1.23 3.3-1.23.645 1.667.24 2.9.12 3.205.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.617-5.475 5.92.42.36.81 1.096.81 2.214v3.293c0 .325.21.695.82.577C20.565 22.092 24 17.603 24 12.3 24 5.67 18.627.297 12 .297z"></path>
    </svg>
  );
  return (
    <div className="flex flex-col border-1 border-zinc-900 items-center justify-center container h-screen m-auto">
      <Head>
        <title>Login</title>
      </Head>

      <h1 className="font-bold text-4xl py-5">Login</h1>
      {/* <h1 className="text-2xl font-bold">Login</h1> */}
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name} className="w-1/3">
          <button
            onClick={() => signIn(provider.id)}
            className="inline-flex justify-center items-center bg-white text-zinc-900 py-2 w-full border-2 border-zinc-900 font-medium hover:bg-zinc-900 hover:text-white">
            {provider.name === "Google" ? googleIcon : githubIcon}
            Login Dengan {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
