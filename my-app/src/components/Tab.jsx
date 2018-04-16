import React from 'react';
import Text, { SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT } from 'style-guide/src/components/text/Text';

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
        return (
            <Text color={TEXT_COLOR.GRAY} size={TEXT_SIZE.SMALL} weight={TEXT_WEIGHT.BOLD} className={`brn-switch-tab__tab ${this.props.isActive ? 'brn-switch-tab__tab--active' : ''}`} onClick={this.handleTabClick}>{this.props.name}</Text>
        );
    }
}

export default Tab;