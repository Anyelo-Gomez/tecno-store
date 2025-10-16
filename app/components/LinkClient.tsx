"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  route: string;
  name: string;
};

export default function LinkClient(props: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={props.route}
      className={`nav-link ${props.route == pathname ? "fw-bold" : ""}`}
    >
      {props.name}
    </Link>
  );
}
