// @flow
import React from 'react';
import ButtonPrimary, { BUTTON_PRIMARY_TYPE } from 'style-guide/src/components/buttons/ButtonPrimary';
import classNames from 'classnames';

type ButtonGetBrnPlusType = {
  padding?: string,
  className?: string,
  children?: string
}
const ButtonGetBrnPlus = ({ padding, className, ...props }:ButtonGetBrnPlusType) => {
  const buttonGetBrnPlusClass = classNames('brn-element--weight-light', {
    'brn-button--padding': padding,
  }, className);
  return (
    <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK} className={buttonGetBrnPlusClass}>
      {props.children}
    </ButtonPrimary>
  );
};

ButtonGetBrnPlus.defaultProps = {
  padding: undefined,
  className: undefined,
  children: undefined,
};

export default ButtonGetBrnPlus;
