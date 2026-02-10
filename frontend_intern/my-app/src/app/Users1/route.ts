
export const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "ballu" },
];

export async function GET() {
  return Response.json(users);
}

export async function  POST(request:Request){
  const User = await request.json;

   const newuser={
    id:users.length+1,
    name:User.name,
   }
   users.push(newuser)

   return Response.json(newuser,{status:201})
}