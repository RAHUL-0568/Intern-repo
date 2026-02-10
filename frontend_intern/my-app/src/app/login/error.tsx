"use client";

export default function Error({ error }:{error:Error}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl text-red-500">
        {error.message}
      </p>
    </div>
    
  );
}
