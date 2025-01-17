import ButtonPrimary from "@/shared/ButtonPrimary";
import React from "react";

type CheckoutSuccessfulModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CheckoutSuccessfulModal = ({ isOpen, onClose }: CheckoutSuccessfulModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div
          id="default-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
          onClick={handleBackdropClick} // Click outside handler
        >
          <div
            className="flex flex-col sm:rounded-2xl space-y-10 px-0 sm:p-6 xl:p-8 bg-white dark:bg-black"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          >
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Congratulation 🎉
            </h2>

            <div>
              <ButtonPrimary href="/">Explore more stays</ButtonPrimary>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
