import { auth } from "@/auth";
import Image from "next/image";
import user from "../public/user-svgrepo-com.svg";
import SignIn from "./auth/signin-button";
import SignOut from "./auth/signout-button";

async function UserAuth() {
  const session = await auth();

  return (
    <ul>
      {!session?.user ? (
        <>
          <li>Create</li>
          <li>
            <SignOut />
          </li>
          <li>
            <Image
              src={!session?.user?.image || user}
              alt={"User avatar"}
            ></Image>
          </li>
        </>
      ) : (
        <li>
          <SignIn />
        </li>
      )}
    </ul>
  );
}

export default UserAuth;
