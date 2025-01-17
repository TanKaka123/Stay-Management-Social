"use client";
import React from "react";
import { SideMenuCheckout } from "@/components/SideMenuCheckout";
import { CheckoutForm } from "@/components/form/CheckoutForm";

export type CheckOutPagePageMainProps = {
  className?: string;
}

const CheckOutPagePageMain = ({ className = "" }: CheckOutPagePageMainProps) => {
  return (
    <div className={`nc-CheckOutPagePageMain ${className}`}>
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 "><CheckoutForm /></div>
        <div className="hidden lg:block flex-grow">
          <SideMenuCheckout />
        </div>
      </main>
    </div>
  );
};

export default CheckOutPagePageMain;
