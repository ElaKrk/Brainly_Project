import React from 'react';
import ButtonPrimary, { BUTTON_PRIMARY_TYPE } from 'style-guide/src/components/buttons/ButtonPrimary';
import classNames from 'classnames';

const ButtonGetBrnPlus = ({ padding, className, ...props }) => {
  const buttonGetBrnPlusClass = classNames('brn-element--weight-light', {
    'brn-button--padding': padding,
  }, className);
  return (
    <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK} className={buttonGetBrnPlusClass}>{props.children}</ButtonPrimary>
  );
};
export default ButtonGetBrnPlus;
