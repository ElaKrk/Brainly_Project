import React from 'react';
import ButtonSecondary from 'style-guide/src/components/buttons/ButtonSecondary';

const ButtonGetBrainlyPlus = () => {
    
    const text = "Get brainly plus now";
    
    return (
        <ButtonSecondary buttonType="dark" className="brn-element--weight-light">{text}</ButtonSecondary>
    )
}
export default ButtonGetBrainlyPlus;