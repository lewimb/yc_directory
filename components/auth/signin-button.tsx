import { signIn } from "@/auth";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Login</button>
    </form>
  );
}

export default SignIn;
