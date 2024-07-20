import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex gap-3 text-white text-[17px] sm:text-[19px] ">
          <li>
            <Link href={"/posts"}>پۆستەکان</Link>
          </li>
          <li>
            <Link href={"/farmwda"}>فەرموودەکان</Link>
          </li>

          <li>
            <Link href={"/ayah"}>ئایەتەکان</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
