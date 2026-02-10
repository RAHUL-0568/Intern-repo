//therer will be product in url



// export default function (){
//     return <h4> Product</h4>
// }

export default async  function product ({params}:{params:{id:string}}){
    const {id}= await params;
    return <h1>product : {id}</h1>

}

