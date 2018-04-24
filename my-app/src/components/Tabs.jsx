/* eslint react/prop-types: 0 */
import React from 'react';
import Text, { SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT } from 'style-guide/src/components/text/Text';

const Tabs = (...props) => (
  <React.Fragment>
    <Text color={TEXT_COLOR.GRAY} size={TEXT_SIZE.SMALL} weight={TEXT_WEIGHT.BOLD}>
      {props.children}
    </Text>
  </React.Fragment>
);


export default Tabs;
