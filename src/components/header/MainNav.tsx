import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "../../app/(client-components)/(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import Button from "@/shared/Button";
import MenuComponent from "@/shared/Menu";
import { MenuItem } from "@headlessui/react";

export interface MainNav1Props {
  className?: string;
}

type UserNavType = {
  type: 'divider'
} | {
  type: 'menu_item',
  content: string,
  href?: string,
}

const USER_NAV: UserNavType[] = [
  {
    type: 'menu_item',
    content: 'Login',
    href: '/login'
  },
  {
    type: 'menu_item',
    content: 'Sign up',
    href: '/signup'
  },
  {
    type: 'divider',
  },
  {
    type: 'menu_item',
    content: 'TO DO',
    href: '/signup'
  }
]

const MainNav: FC<MainNav1Props> = ({ className = "" }) => {
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container h-20 relative flex justify-between">
        <div className="hidden md:flex justify-start flex-1 space-x-4 sm:space-x-10">
          <Logo className="w-24 self-center" />
          <Navigation />
        </div>

        <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3 ">
          <div className="self-center flex-1">
            <HeroSearchForm2MobileFactory />
          </div>
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5 items-center gap-2">
            <SwitchDarkMode />
            {/* <SearchDropdown className="flex items-center" /> */}
            <div className="px-1" />
            <MenuComponent
              MenuButtonComponent={
                <div className="flex items-center gap-4 border rounded-full border-slate-400 px-2 py-2" >
                  <IoReorderThreeOutline className="text-2xl" />
                  <FaUserCircle className="text-2xl" />
                </div>
              }
              MeneItemsComponent={<>
                {
                  USER_NAV.map((navItem, idx) => {
                    if (navItem.type === 'divider') {
                      return <div key={idx} className="border-solid border-t-[1px] h-1 border-slate-200 dark:border-slate-500" />
                    }
                    if (navItem.type === 'menu_item') {
                      return (
                        <MenuItem key={idx}>
                          <Button href={navItem.href} className="text-xs font-normal w-full flex" alignItems='justify-start' sizeClass="px-3 py-2">
                            {navItem.content}
                          </Button>
                        </MenuItem>
                      )

                    }
                  })
                }
              </>}
            />
          </div>
          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div >
  );
};

export default MainNav;
