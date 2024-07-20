import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noor",
  description:
    "نوور وێبسایتێکی قازانج نەویستە ئامانجمان بڵاوکردنەوەی زۆرترین زانیاریە دەربارەی ئاینی ئیسلام",
};

export default function SignInPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn />
    </div>
  );
}
