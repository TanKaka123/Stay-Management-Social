"use client";
import React, { FC } from "react";
import NextLink from "next/link";
import { AuthForm } from "@/components/AuthForm";

const PageLogin: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className={`nc-PageLogin`}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <AuthForm formType="login" onSubmit={handleSubmit} />
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user?{" "}
            <NextLink href="/signup" className="font-semibold underline">
              Create an account
            </NextLink>{" "}
            or{" "}
            <NextLink href={{host: "/forgot-password"}} className="text-sm underline font-medium">
              Forgot password?
            </NextLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
