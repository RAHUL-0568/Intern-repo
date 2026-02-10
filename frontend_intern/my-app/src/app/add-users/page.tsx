
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Page() {

  async function insert(formData:FormData) {
    "use server";

    const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

   
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    

    if(!name){
      throw new Error("Name is required")
    }
   
    if(!email){
      throw new Error ("email is required")
    }
    if(!password){
      throw new Error ("password is required")
    }


    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
       cache: "no-store",
      body: JSON.stringify({ name, email,password }),
    });

     
if (res.status === 409) {
  throw new Error("Username or Email already exists");
}

if (!res.ok) {
  throw new Error("user must be Logged in First");
}

 
    redirect("/users")
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
        <h3 style={{ textAlign: "center", marginBottom: "20px",color:"black" }}>
          User Insertion Form
        </h3>

        <input
          name="name"
          placeholder="Name"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            color: "black"
          }}
        />

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
          Add User
        </button>
      </form>
    </div>
  );
}
