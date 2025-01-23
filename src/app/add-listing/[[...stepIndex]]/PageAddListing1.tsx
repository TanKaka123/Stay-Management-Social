"use client";
import React, { FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import { useForm, Controller, FieldValues, FieldErrors } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { FormFooter } from "../FormFooter";
import { useAddListForm } from "@/contexts/AddListFormProvider";

export interface PageAddListing1Props { }

const registerOptions = {
  "place-name": {
    required: "Place name is required"
  },
  "property-type": {
    required: "Property type is required"
  },
  "rental-form": {
    required: "Property type is required"
  }
}

const PROPERTY_TYPE_OPTIONS = [
  { value: "Hotel", label: "Hotel" },
  { value: "Cottage", label: "Cottage" },
  { value: "Villa", label: "Villa" },
  { value: "Farm stay", label: "Farm stay" },
  { value: "Houseboat", label: "Houseboat" },
  { value: "Lighthouse", label: "Lighthouse" },
];

const RENTAL_FORM_OPTIONS = [
  { value: "Entire place", label: "Entire place" },
  { value: "Private room", label: "Private room" },
  { value: "Share room", label: "Share room" },
]

const PageAddListing1: FC<PageAddListing1Props> = () => {
  const { handleSubmit, register, formState: { errors }, control } = useForm();
  const { onSubmitForm } = useAddListForm();
  const onCompleteForm = (fieldValues: FieldValues) => {
    onSubmitForm();
  }

  const onErrorForm = (errors: FieldErrors<FieldValues>) => {
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

  };

  return (
    <>
      <ToastContainer />

      <form onSubmit={handleSubmit(onCompleteForm, onErrorForm)}>
        <h2 className="text-2xl font-semibold">Choosing listing categories</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="space-y-8 mt-6">
          <FormItem
            label="Choose a property type"
            desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
          >
            <Controller
              name="property-type"
              defaultValue={PROPERTY_TYPE_OPTIONS[0].value}
              control={control}
              rules={registerOptions["property-type"]}
              render={({ field }) => (
                <Select {...field}>
                  {
                    PROPERTY_TYPE_OPTIONS.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>))
                  }
                </Select>
              )}
            />
          </FormItem>
          <FormItem
            label="Place name"
            desc="A catchy name usually includes: House name + Room name + Featured property + Tourist destination"
          >
            <Input
              placeholder="Places name"
              type="text"
              {...register('place-name', registerOptions["place-name"])}
            />
          </FormItem>
          <FormItem
            label="Rental form"
            desc="Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included."
          >
            <Controller
              name="rental-form"
              control={control}
              defaultValue={RENTAL_FORM_OPTIONS[0].value}
              rules={registerOptions['rental-form']}
              render={({ field }) => (
                <Select {...field}>
                  {
                    RENTAL_FORM_OPTIONS.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>))
                  }
                </Select>
              )}
            />
          </FormItem>
        </div>
        {/* --------------------- */}
        <FormFooter />
      </form>
    </>
  );
};

export default PageAddListing1;
