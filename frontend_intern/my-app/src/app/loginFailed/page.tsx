import Link from "next/link";

export default function LoginError() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ color: "red" }}>Invalid Login Credentials</h1>
      <h2>Please try again</h2>

      <Link href="/login">
        <button
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "10px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Retry
        </button>
      </Link>
    </div>
  );
}
