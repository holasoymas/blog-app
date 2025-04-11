import Link from "next/link"
import React from "react";
import { BaseButtonProps, AuthBtn } from "@/types";

export const BaseButton: React.FC<BaseButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="app-btn"
    >
      {text}
    </Link>
  );
};

export const LoginBtn: React.FC<AuthBtn> = ({ text }) => {
  return (
    <button type="submit" className="login-btn"> {text} </button>
  );
}
