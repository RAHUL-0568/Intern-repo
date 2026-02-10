import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LogoutPage() {
  async function logout() {
    "use server";

    const cookieStore = await  cookies();

    // delete the auth cookie
    cookieStore.delete("session_token");

    redirect("/login");
  }

  return (
    <div>
      The session Cookie will be deleted
    <form action={logout}>
      <button
        type="submit"
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </form></div>
  );
}
