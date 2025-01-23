"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

type AddListFormProviderProps = {
    children: React.ReactElement
}

type AddListFormContextType = {
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    onSubmitForm: () => void,
    onBack: () => void
}

const AddListFormContext = React.createContext<AddListFormContextType>({} as AddListFormContextType);
export const NUM_OF_FORMS = 10;

export const AddListFormProvider = ({ children }: AddListFormProviderProps) => {
    const params = useParams();
    const router = useRouter();
    const stepInex = params?.stepIndex ?? 1;

    const [currentStep, setCurrentStep] = React.useState<number>(parseInt(stepInex));

    const onSubmitForm = React.useCallback(() => {
        if (currentStep < NUM_OF_FORMS) {
            setCurrentStep(prev => prev + 1);
        }
    }, [currentStep, setCurrentStep]);

    const onBack = React.useCallback(() => {
        setCurrentStep(prev => prev > 1 ? prev - 1 : prev);
    }, [setCurrentStep]);

    // handle move to page ( back or next )
    React.useEffect(() => {
        if (currentStep.toString() !== stepInex) {
            router.push(`/add-listing/${currentStep}` as any);
        }
    }, [currentStep])


    const value = React.useMemo(() => ({
        currentStep,
        setCurrentStep,
        onSubmitForm,
        onBack
    }), [currentStep, setCurrentStep, onSubmitForm]);

    return (
        <AddListFormContext.Provider value={value}>
            {children}
        </AddListFormContext.Provider>
    )
}

export const useAddListForm = () => {
    return React.useContext(AddListFormContext)
}