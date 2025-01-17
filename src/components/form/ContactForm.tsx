import React, { FC } from "react";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";

const ContactForm: FC = () => {
  return (
    <form className="grid grid-cols-1 gap-6" action="#" method="post">
      <label className="block">
        <Label>Full name</Label>
        <Input placeholder="Example Doe" type="text" className="mt-1" />
      </label>
      <label className="block">
        <Label>Email address</Label>
        <Input type="email" placeholder="example@example.com" className="mt-1" />
      </label>
      <label className="block">
        <Label>Message</Label>
        <Textarea className="mt-1" rows={6} />
      </label>
      <div>
        <ButtonPrimary type="submit">Send Message</ButtonPrimary>
      </div>
    </form>
  );
};

export default ContactForm;
