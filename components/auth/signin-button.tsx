import { signIn } from "next-auth/react";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <button type="submit">Login</button>
    </form>
  );
}

export default SignIn;
