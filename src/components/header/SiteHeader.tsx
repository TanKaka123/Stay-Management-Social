"use client";
import React from "react";
import { useThemeMode } from "@/utils/useThemeMode";
import MainNav from "./MainNav";
import { usePathname } from "next/navigation";

const PAGE_HIDE_FOOTER = ["/messages"];

const SiteHeader = () => {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useThemeMode();
 

  return (
    <>
      <div
        className={`nc-Header ${PAGE_HIDE_FOOTER.includes(pathName) ? 'static' : 'sticky'} top-0 w-full left-0 right-0 z-40 nc-header-bg shadow-sm dark:border-b dark:border-neutral-700`}
      >
        <MainNav />
      </div>
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
