/* eslint react/prop-types: 0 */
import React from 'react';
import classNames from 'classnames';

import Text, { SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT } from 'style-guide/src/components/text/Text';

const Tab = ({
  index, tab, className, active, ...props
}) => {
  const tabClass = classNames(
    'brn-switch-tab__tab',
    (active) ? 'brn-switch-tab__tab--active' : '',
    className,
  );
  return (
    <div key={tab} tabIndex={index} className={tabClass} {...props}>
      <Text
        color={TEXT_COLOR.GRAY}
        size={TEXT_SIZE.SMALL}
        weight={TEXT_WEIGHT.BOLD}
      >
        {tab}
      </Text>
    </div>
  );
};


export default Tab;
