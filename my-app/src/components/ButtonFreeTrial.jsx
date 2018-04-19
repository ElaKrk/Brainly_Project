import React from 'react';
import ButtonPrimary, { BUTTON_PRIMARY_TYPE } from 'style-guide/src/components/buttons/ButtonPrimary';

const ButtonFreeTrial = () => {
  const text = 'Start free trial';

  return (
    <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK} className="brn-element--weight-light">{text}</ButtonPrimary>
  );
};
export default ButtonFreeTrial;
