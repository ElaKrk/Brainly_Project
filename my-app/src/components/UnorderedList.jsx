// @flow
import * as React from 'react';
import classNames from 'classnames';

const PADDING = {
  SMALL: 'small',
  LARGE: 'large',
};

type UnorderedListPropsType = {
  spaced?: boolean,
  padding?: string,
  className?: string,
  liElements?: Array<string>,
}

const UnorderedList = ({
  spaced, padding, className, ...props
}:
UnorderedListPropsType) => {
  const unorderedListClass = classNames(
    padding ? `brn-un-list-padding-left--${padding}` : `brn-un-list-padding-left--${UnorderedList.defaultProps.padding}`,
    className,
  );

  const unorderedListElClass = classNames(
    { 'brn-list__element--spaced': spaced },
    className,
  );

  const { liElements } = props;
  if (liElements) {
    const listItems = liElements.map(liElement => (
      <li className={unorderedListElClass} key={liElement.toString()}>
        {liElement}
      </li>));
    return (
      <ul className={unorderedListClass}>{listItems}</ul>
    );
  }

  return (<ul className={unorderedListClass} />);
};

UnorderedList.defaultProps = {
  padding: PADDING.SMALL,
  className: undefined,
  spaced: undefined,
  liElements: [],
};

export default UnorderedList;
export { PADDING };
