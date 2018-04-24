/* eslint react/prop-types: 0 */
import React from 'react';
import classNames from 'classnames';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
};

const UnorderedList = ({
  size = SIZE.SMALL, spaced, padding, className, ...props
}) => {
  const unorderedListClass = classNames({
    [`brn-un-list-padding-left--${size}`]: size,
  }, className);

  const unorderedListElClass = classNames(
    { 'brn-list__element--spaced': spaced },
    className,
  );

  const liElements = props.liElements || [];
  const listItems = liElements.map(liElement =>
    (
      <li className={unorderedListElClass} key={liElement.toString()}>
        {liElement}
      </li>));
  return (
    <ul className={unorderedListClass}>{listItems}</ul>
  );
};

export default UnorderedList;
export { SIZE };
