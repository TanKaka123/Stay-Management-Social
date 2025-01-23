import { NUM_OF_FORMS, useAddListForm } from '@/contexts/AddListFormProvider';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
import React from 'react';

type FormFooterProps = {

}

export const FormFooter = ({ }: FormFooterProps) => {
    const { currentStep, onBack } = useAddListForm();
    
    return (
        <div className="flex justify-end space-x-5 mt-6">
            {currentStep !== 1 && <ButtonSecondary onClick={onBack}>Go back</ButtonSecondary>}
            <ButtonPrimary type="submit">
                {currentStep !== NUM_OF_FORMS ? 'Continue' : 'Publish listing'}
            </ButtonPrimary>
        </div>
    );
};