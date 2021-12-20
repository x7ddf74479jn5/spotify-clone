import type { ClientSafeProvider } from "next-auth/react";
import { signIn } from "next-auth/react";
import type { VFC } from "react";
import type { TNextAuthProviders } from "src/types/auth";

type LoginProps = {
  providers: TNextAuthProviders;
};

export const Login: VFC<LoginProps> = ({ providers }) => {
  if (!providers) throw new Error();

  const handleSignIn = (provider: ClientSafeProvider) => {
    signIn(provider.id, { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/fPuEa9V.png" alt="" className="mb-5 w-52" />
      {Object.values(providers).map((provider) => (
        <div className="" key={provider.name}>
          <button onClick={() => handleSignIn(provider)} className="p-5 text-white rounded-full bg-[#18D860]">
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};
