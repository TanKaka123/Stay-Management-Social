"use client";
import React from "react";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";

type AuthFormProps = {
  formType: "login" | "signup";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm = ({ formType, onSubmit }: AuthFormProps) => {
  const isLogin = formType === "login";

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">Email address</span>
        <Input
          type="email"
          placeholder="example@example.com"
          className="mt-1"
        />
      </label>
      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">Password</span>
        <Input type="password" className="mt-1" />
      </label>
      <ButtonPrimary type="submit">{isLogin ? "Login" : "Sign Up"}</ButtonPrimary>
    </form>
  );
};

