import { signOut } from "@/auth";

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
}

export default SignOut;
