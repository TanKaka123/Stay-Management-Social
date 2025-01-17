import React, { FC } from "react";

const INFO_CONTACT = [
  {
    title: "ADDRESS",
    desc: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  },
  {
    title: "EMAIL",
    desc: "abc.example@example.com",
  },
  {
    title: "PHONE",
    desc: "0398915723",
  },
];

const ContactInfo: FC = () => {
  return (
    <div className="max-w-sm space-y-8">
      {INFO_CONTACT.map((item, index) => (
        <div key={index}>
          <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
            {item.title}
          </h3>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {item.desc}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
