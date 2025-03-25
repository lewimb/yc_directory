import { auth } from "@/auth";
import Image from "next/image";
import user from "../public/user-svgrepo-com.svg";
import SignIn from "./auth/signin-button";
import SignOut from "./auth/signout-button";

async function UserAuth() {
  const session = await auth();

  return (
    <ul className="flex gap-8 items-center">
      {session?.user ? (
        <>
          <li className="text-xl font-semibold">Create</li>
          <li className="text-xl font-semibold text-red-500">
            <SignOut />
          </li>
          <li>
            <Image
              src={session?.user?.image || user}
              alt={"User avatar"}
              width={36}
              className="rounded-full"
            />
          </li>
        </>
      ) : (
        <li className="text-xl font-semibold">
          <SignIn />
        </li>
      )}
    </ul>
  );
}

export default UserAuth;
