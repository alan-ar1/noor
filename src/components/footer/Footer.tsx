import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPlay,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
import Tag from "../../../models/tagModel";

import Logo from "../header/Logo";
import FooterTag from "./FooterTag";

export default async function Footer() {
  try {
    const tags: any = await Tag.find().limit(3);
    return (
      <footer className="flex text-white gap-5 flex-wrap justify-around sm:flex-row items-start  w-full p-3 bg-secondry">
        <div className="w-fit">
          <h4>دەربارە</h4>
          <p className="sm:w-44 text-sm text-justify">
            نوور وێبسایتێکی قازانج نەویستە ئامانجمان بڵاوکردنەوەی زۆرترین
            زانیاریە دەربارەی ئاینی ئیسلام
          </p>
        </div>
        <div>
          <h4>تاگە چالاکەکان</h4>
          <ul>
            {tags.map((tag: any) => (
              <FooterTag
                label={tag.option.get("label")}
                key={tag.option.get("label")}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div>
            <Logo />
          </div>
          <div className="flex gap-1">
            <Link className="text-secondry" href={"facebook.com"}>
              <FaFacebook size={25} />
            </Link>
            <Link className="text-secondry" href={"instagram.com"}>
              <FaInstagram size={25} />
            </Link>
            <Link className="text-secondry" href={"telegram.com"}>
              <FaTelegram size={25} />
            </Link>
            <Link className="text-secondry" href={"tiktok.com"}>
              <FaTiktok size={25} />
            </Link>
          </div>
          <div className="flex gap-1 mt-2">
            <FaPlay className="mt-1" />
            <h4 className="text-sm"> دابەزاندنی ئەپی نوور</h4>
          </div>
        </div>
        {/* <div className=" gap-1 mt-2">
          <h4> دروستکردنی وێبسایت: ئالان ئاری </h4>
          <span className="text-sm"> </span>
        </div> */}
      </footer>
    );
  } catch (error) {}
}
