import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import NcModal from "@/shared/NcModal";
import Textarea from "@/shared/Textarea";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import { Tab } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Label from "../Label";
import ModalSelectDate from "../ModalSelectDate";
import ModalSelectGuests from "../ModalSelectGuests";
import { SideMenuCheckout } from "../SideMenuCheckout";
import React from "react";
import { GuestsObject } from "@/app/(client-components)/type";
import Image from "next/image";
import visaPng from "@/images/vis.png";
import mastercardPng from "@/images/mastercard.svg";
import { CheckoutSuccessfulModal } from "../modal/CheckoutSuccessfulModal";

const INIT_END_DATE = new Date("2023/02/23");
const INIT_START_DATE = new Date("2023/02/06");
const GUEST: GuestsObject = {
    guestAdults: 2,
    guestChildren: 1,
    guestInfants: 1,
};
export const CheckoutForm = () => {
    const [isOpenModalSuccess, setIsOpenModalSuccess] = React.useState<boolean>(false)
    return (
        <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
            <h2 className="text-3xl lg:text-4xl font-semibold">
                Confirm and payment
            </h2>
            <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
            <div>
                <div>
                    <h3 className="text-2xl font-semibold">Your trip</h3>
                    <NcModal
                        renderTrigger={(openModal) => (
                            <span
                                onClick={() => openModal()}
                                className="block lg:hidden underline  mt-1 cursor-pointer"
                            >
                                View booking details
                            </span>
                        )}
                        renderContent={() => <SideMenuCheckout />}
                        modalTitle="Booking details"
                    />
                </div>
                <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700 overflow-hidden z-10">
                    <ModalSelectDate
                        renderChildren={({ openModal }) => (
                            <button
                                onClick={openModal}
                                className="text-left flex-1 p-5 flex justify-between space-x-5 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                                type="button"
                            >
                                <div className="flex flex-col">
                                    <span className="text-sm text-neutral-400">Date</span>
                                    <span className="mt-1.5 text-lg font-semibold">
                                        {converSelectedDateToString([INIT_END_DATE, INIT_START_DATE])}
                                    </span>
                                </div>
                                <PencilSquareIcon className="w-6 h-6 text-neutral-6000 dark:text-neutral-400" />
                            </button>
                        )}
                    />

                    <ModalSelectGuests
                        renderChildren={({ openModal }) => (
                            <button
                                type="button"
                                onClick={openModal}
                                className="text-left flex-1 p-5 flex justify-between space-x-5 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                            >
                                <div className="flex flex-col">
                                    <span className="text-sm text-neutral-400">Guests</span>
                                    <span className="mt-1.5 text-lg font-semibold">
                                        <span className="line-clamp-1">
                                            {`${(GUEST.guestAdults || 0) +
                                                (GUEST.guestChildren || 0)
                                                } Guests, ${GUEST.guestInfants || 0} Infants`}
                                        </span>
                                    </span>
                                </div>
                                <PencilSquareIcon className="w-6 h-6 text-neutral-6000 dark:text-neutral-400" />
                            </button>
                        )}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold">Pay with</h3>
                <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-5"></div>

                <div className="mt-6">
                    <Tab.Group>
                        <Tab.List className="flex my-5 gap-1">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${selected
                                            ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900"
                                            : "text-neutral-6000 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                            }`}
                                    >
                                        Paypal
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`px-4 py-1.5 sm:px-6 sm:py-2.5  rounded-full flex items-center justify-center focus:outline-none  ${selected
                                            ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900"
                                            : " text-neutral-6000 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                            }`}
                                    >
                                        <span className="mr-2.5">Credit card</span>
                                        <Image className="w-8" src={visaPng} alt="visa" />
                                        <Image
                                            className="w-8"
                                            src={mastercardPng}
                                            alt="mastercard"
                                        />
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>

                        <Tab.Panels>
                            <Tab.Panel className="space-y-5">
                                <div className="space-y-1">
                                    <Label>Card number </Label>
                                    <Input defaultValue="012 345 678" />
                                </div>
                                <div className="space-y-1">
                                    <Label>Card holder </Label>
                                    <Input defaultValue="NGUYEN VAN A" />
                                </div>
                                <div className="flex space-x-5  ">
                                    <div className="flex-1 space-y-1">
                                        <Label>Expiration date </Label>
                                        <Input type="date" defaultValue="MM/YY" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <Label>CVC </Label>
                                        <Input />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label>Messager for author </Label>
                                    <Textarea placeholder="..." />
                                    <span className="text-sm text-neutral-500 block">
                                        Write a few sentences about yourself.
                                    </span>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel className="space-y-5">
                                <div className="space-y-1">
                                    <Label>Email </Label>
                                    <Input type="email" defaultValue="example@gmail.com" />
                                </div>
                                <div className="space-y-1">
                                    <Label>Password </Label>
                                    <Input type="password" defaultValue="***" />
                                </div>
                                <div className="space-y-1">
                                    <Label>Messager for author </Label>
                                    <Textarea placeholder="..." />
                                    <span className="text-sm text-neutral-500 block">
                                        Write a few sentences about yourself.
                                    </span>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                    <div className="pt-8">
                        <ButtonPrimary onClick={()=>setIsOpenModalSuccess(true)}>Confirm and pay</ButtonPrimary>
                        <CheckoutSuccessfulModal isOpen={isOpenModalSuccess} onClose={()=>setIsOpenModalSuccess(false)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}