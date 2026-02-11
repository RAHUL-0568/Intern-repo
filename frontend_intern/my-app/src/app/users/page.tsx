import { cookies } from "next/headers";

type User = {
  id: number;
  name: string;
  email: string;
  created_at:string;
};


export default async function UserPage() { 
  
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;


  const response = await fetch("http://localhost:3000/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return <p className="p-4 text-red-500">Failed to fetch users.Please Login first</p>;
    
  }

  const users = await response.json();

  return (
    // <ul className="space-y-4 p-4">
    //   {users.lenghth===0 && <p> Users not found </p>}
    //   {users.map((user: User) => (
    //     <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
    //       <strong>Username:</strong> {user.name} <br />
    //       <strong>Email:</strong> {user.email}<br/>
    //       <strong>created at:</strong>{user.created_at}
    //     </li>
    //   ))}
    // </ul>

<table
  style={{
    width: "100%",
    border: "5px solid #ccc",
    borderCollapse: "collapse",
  }}
>
  <thead>
    <tr>
      <th style={{textAlign: "center", border: "5px solid #ccc", padding: "8px" }}>Name</th>
      <th style={{textAlign: "center", border: "5px solid #ccc", padding: "8px" }}>Email</th>
      <th style={{textAlign: "center", border: "5px solid #ccc", padding: "8px" }}>Created At</th>
    </tr>
  </thead>

  <tbody>
    {users.map((user: User) => (
      <tr key={user.id}>
        <td style={{ textAlign: "center",border: "1px solid #ccc", padding: "8px" }}>
          {user.name}
        </td>
        <td style={{ textAlign: "center",border: "1px solid #ccc", padding: "8px" }}>
          {user.email}
        </td>
        <td style={{ textAlign: "center",border: "1px solid #ccc", padding: "8px" }}>
          {user.created_at}
        </td>
      </tr>
    ))}
  </tbody>
</table>


   );
}