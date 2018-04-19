import React from 'react';
import DropdownContainer from 'style-guide/src/components/dropdowns/DropdownContainer'
import Dropdown from 'style-guide/src/components/dropdowns/Dropdown'
import DropdownItem from 'style-guide/src/components/dropdowns/DropdownItem';
import ActionList from 'style-guide/src/components/action-list/ActionList';
import ActionListHole from 'style-guide/src/components/action-list/ActionListHole';
import Icon, { TYPE as ICON_TYPE, SIZE as ICON_SIZE, COLOR as ICON_COLOR } from 'style-guide/src/components/icons/Icon';
import Link from 'style-guide/src/components/text/Link';

const DropdownLabel = () => {
    return (
        <ActionList>
            <ActionListHole>
                <Icon type="planet" color="gray" size={16} />
            </ActionListHole>
            <ActionListHole>
                Brainly.com
            </ActionListHole>
        </ActionList>
    )
}

export const DropdownItemOne = () => {
    return (
        <React.Fragment>
            RU:
            <Link href="https://znanija.com" target="_blank" rel="noopener">
                Znanija.com
            </Link>
        </React.Fragment>
    )
}

export default DropdownLabel;