"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {

  const pathName = usePathname();

  return (
    <nav className="d-flex justify-content-center py-3 border-bottom">

      <Link href="/" className={pathName === "/" ? "fw-bold mx-3" : "mx-3 text-primary"}>
        Home
      </Link>

      <Link href="/about" className={pathName === "/about" ? "fw-bold mx-3" : "mx-3 text-primary"}>
        About
      </Link>

      <Link href="/product/1"
        className={pathName.startsWith("/product") ? "fw-bold mx-3" : "mx-3 text-primary"}>
        Products
      </Link>

      <Link href="/users" className={pathName === "/users" ? "fw-bold mx-3" : "mx-3 text-primary"}>
        Users
      </Link>

      <Link href="/add-users" className={pathName === "/add-users" ? "fw-bold mx-3" : "mx-3 text-primary"}>
        addUsers
      </Link>

      <Link href="/login" className={pathName === "/login" ? "fw-bold mx-3" : "mx-3 text-primary"}>
        login
      </Link>

      <Link href="/logout" className={pathName === "/logout" ? "fw-bold mx-3" : "mx-3 text-primary"}>
        logout
      </Link>

    </nav>
  );
}
