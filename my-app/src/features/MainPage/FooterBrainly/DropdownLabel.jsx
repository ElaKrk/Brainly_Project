import React from 'react';
import ActionList from 'style-guide/src/components/action-list/ActionList';
import ActionListHole from 'style-guide/src/components/action-list/ActionListHole';
import Icon, { TYPE as ICON_TYPE } from 'style-guide/src/components/icons/Icon';
import Link from 'style-guide/src/components/text/Link';

const DropdownLabel = () => (
  <ActionList>
    <ActionListHole>
      <Icon type={ICON_TYPE.PLANET} color="gray" size="16" />
    </ActionListHole>
    <ActionListHole>
                Brainly.com
    </ActionListHole>
  </ActionList>
);

export const DropdownItemOne = () => (
  <React.Fragment>
            RU:
            <Link href="https://znanija.com" target="_blank" rel="noopener">
                Znanija.com
            </Link>
  </React.Fragment>
);

export default DropdownLabel;
