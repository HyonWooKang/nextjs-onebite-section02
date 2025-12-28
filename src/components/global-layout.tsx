import Link from "next/link";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <Link href={"/"}>📚 ONEBITE BOOKS</Link>
      </header>
      <main>{children}</main>
      <footer>제작 @spencer</footer>
    </div>
  );
}
