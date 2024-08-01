import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Auth from "@/screens/auth/Auth/Auth";

export const metadata: Metadata = {
  title: "Login | Taiga Social",
  ...NO_INDEX_PAGE,
};

export default function LoginPage() {
  return <Auth type="login" />;
}
