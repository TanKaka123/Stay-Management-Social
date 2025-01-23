"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react'

type MenuComponentProps = {
    MenuButtonComponent: React.ReactElement
    MeneItemsComponent: React.ReactElement
}

export default function MenuComponent({ MenuButtonComponent, MeneItemsComponent }: MenuComponentProps) {
    return (
        <div className="text-right">
            <Menu>
                <MenuButton >
                    {MenuButtonComponent}
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 rounded-md border  bg-white p-1 text-sm/6  dark:bg-slate-700 border-none mt-1"
                    style={{
                        boxShadow:"rgba(0, 0, 0, 0.5) 3px 3px 8px",
                        zIndex: 1000
                    }}
                >
                    {MeneItemsComponent}
                </MenuItems>
            </Menu>
        </div>
    )
}