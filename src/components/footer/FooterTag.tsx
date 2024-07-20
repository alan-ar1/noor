"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function FooterTag({ label }: any) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <li
      onClick={() => {
        router.replace(`posts?tags=${label}`);
        if (pathname === "/posts") {
          window.location.reload();
        }
      }}
      className="text-white cursor-pointer text-sm"
    >
      #{label}
    </li>
  );
}
