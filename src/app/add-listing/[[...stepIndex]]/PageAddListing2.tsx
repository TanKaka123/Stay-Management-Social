"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import { FormFooter } from "../FormFooter";
import { Controller, FieldValues, RegisterOptions, useForm } from "react-hook-form";
import { useAddListForm } from "@/contexts/AddListFormProvider";
import { ToastContainer, toast } from "react-toastify";

export interface PageAddListing2Props { }

const registerOptions: Record<string, RegisterOptions> = {
  "country-region": {
    required: "country/region is required"
  },
  "street": {
    required: "Street is required",
  },
  "room-number": {

  },
  "city": {
    required: "City is required",
  },
  "postal-code": {
    required: "Postal code is required",
  },
}

const COUNTRY_REGION = [
  { value: "Viet Nam", label: "Viet Nam" },
  { value: "Thailand", label: "Thailand" },
  { value: "France", label: "France" },
  { value: "Singapore", label: "Singapore" },
  { value: "Jappan", label: "Jappan" },
  { value: "Korea", label: "Korea" },
];

const PageAddListing2: FC<PageAddListing2Props> = () => {
  const { handleSubmit, register, formState: { errors }, control } = useForm();
  const { onSubmitForm } = useAddListForm();

  const onCompleteForm = React.useCallback((fieldValues: FieldValues) => {
    onSubmitForm();
  }, [onSubmitForm]);

  const onFormError = React.useCallback(() => {
    const flatErrorMessages = Object.values(errors).map(e => e ? e.message?.toString() : '');
    flatErrorMessages.forEach((message) => {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }, [errors]);

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onCompleteForm, onFormError)}>
        <h2 className="text-2xl font-semibold">Your place location</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8 mt-6">
          <FormItem label="Country/Region">
            <Controller
              name="country-region"
              defaultValue={COUNTRY_REGION[0].value}
              control={control}
              rules={{}}
              render={({ field }) => (
                <Select {...field}>
                  {
                    COUNTRY_REGION.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>))
                  }
                </Select>
              )}
            />
          </FormItem>
          <FormItem label="Street">
            <Input
              placeholder="Enter your street (e.g., Main St, Elm Ave)"
              {...register("street", registerOptions["street"])}
            />
          </FormItem>
          <FormItem label="Room number (optional)">
            <Input
              placeholder="Enter your room/apartment number"
              {...register("room-number", registerOptions["room-number"])}
            />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            <FormItem label="City">
              <Input
                placeholder="Enter your city (e.g., New York, Los Angeles)"
                {...register("city", registerOptions["city"])}
              />
            </FormItem>
            <FormItem label="State">
              <Input
                placeholder="Enter your state (e.g., California, Texas)"
                {...register("state", registerOptions["state"])}
              />
            </FormItem>
            <FormItem label="Postal code">
              <Input
                placeholder="Enter your postal code (e.g., 90210)"
                {...register("postal-code", registerOptions["postal-code"])}
                type="number"
              />
            </FormItem>
          </div>
          <div>
            <Label>Detailed address</Label>
            <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              1110 Pennsylvania Avenue NW, Washington, DC 20230
            </span>
            <div className="mt-4">
              <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
                <div className="rounded-xl overflow-hidden">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={15}
                    defaultCenter={{
                      lat: 55.9607277,
                      lng: 36.2172614,
                    }}
                  >
                    <LocationMarker lat={55.9607277} lng={36.2172614} />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormFooter />
      </form>
    </>
  );
};

export default PageAddListing2;
