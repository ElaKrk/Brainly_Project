import React from 'react';
import Text, { SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT } from 'style-guide/src/components/text/Text';
import classNames from 'classnames';

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.tabIndex);
    }

    render() {
        const TabClass = classNames(
            'brn-switch-tab__tab',
            `${this.props.isActive ? 'brn-switch-tab__tab--active' : ''}`);

        return (
            <Text color={TEXT_COLOR.GRAY} size={TEXT_SIZE.SMALL} weight={TEXT_WEIGHT.BOLD} className={TabClass} onClick={this.handleTabClick}>
            {this.props.name}
            </Text>
        );
    }
}

export default Tab;