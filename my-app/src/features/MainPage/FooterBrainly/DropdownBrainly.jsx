// @flow
import * as React from 'react';
import DropdownContainer from 'style-guide/src/components/dropdowns/DropdownContainer';
// import Dropdown from 'style-guide/src/components/dropdowns/Dropdown';
// import DropdownItem from 'style-guide/src/components/dropdowns/DropdownItem';
// import ActionList, { DIRECTION } from 'style-guide/src/components/action-list/ActionList';
// import Icon, { TYPE as ICON_TYPE, SIZE as ICON_SIZE, COLOR as ICON_COLOR } from
// 'style-guide/src/components/icons/Icon';
import DropdownLabel from './DropdownLabel';

const DropdownBrainly = () => (
  <React.Fragment>
    <DropdownContainer fixed fullWidth label={<DropdownLabel />}>
      <DropdownLabel />
      {/* <DropdownItem text="dsd" />
                    RU:
                    <a class="sg-link" href="https://znanija.com" target="_blank" rel="noopener">
                        Znanija.com
                    </a>
                <DropdownItem text={<DropdownLabel />} />
                <DropdownItem text={<DropdownLabel />} /> */}
    </DropdownContainer>
  </React.Fragment>

);

export default DropdownBrainly;
