import Image from "next/image";
import Link from "next/link";
import logoImage from "/public/noor-logo.png";

export default function Logo() {
  return (
    <div className="cursor-pointer">
      <Link href={"/"}>
        <Image src={logoImage} alt="noor logo" width={60} height={100} />
      </Link>
    </div>
  );
}
