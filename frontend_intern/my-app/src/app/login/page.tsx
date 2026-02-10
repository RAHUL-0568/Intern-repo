import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  async function insert(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");


    const res = await fetch("http://localhost:3000/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if(!res.ok){
      redirect("/loginFailed")
    }


    if (res.ok) {

      const data = await res.json();

      //cookie for Acces token 
      const cookieStore = await cookies();
      cookieStore.set("session_token", data.accesToken, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production",
        maxAge: 60*60*24, 
        path: "/",
      });
      


      redirect("/succesfull");
    }

  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px"
      }}
    >
      <form
        action={insert}   
        style={{
          backgroundColor: "white",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "6px"
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px", color:"black" }}>
          Login Form
        </h3>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required minLength={3}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            color: "black"
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required minLength={3}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            color: "black"
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "4px"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
   