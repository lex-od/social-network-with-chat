import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import AuthForm from "@/components/organisms/AuthForm/AuthForm";

export const metadata: Metadata = {
  title: "Register | Taiga Social",
  ...NO_INDEX_PAGE,
};

export default function RegisterPage() {
  return <AuthForm type="register" />;
}
