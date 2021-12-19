import type { DefaultUser } from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken?: string | undefined;
    refreshToken?: string | undefined;
    username?: string | undefined;
    accessTokenExpires?: number | undefined;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User extends DefaultUser {
    accessToken?: string | undefined;
    refreshToken?: string | undefined;
    username?: string | undefined;
  }
}
