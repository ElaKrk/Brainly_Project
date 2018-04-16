import React from 'react';
import classNames from 'classnames';

const WIDTH = {
    SMALL: 'small',
    NORMAL: 'normal',
    LARGE: 'large'
};
class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
        });
    }

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    // Render current active tab content
    renderActiveTabContent() {
        const { children } = this.props;
        const { activeTabIndex } = this.state;
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    render() {
        const { border, width = WIDTH.NORMAL, className } = this.props;
        const TabsClass = classNames('brn-switch-tab-container', {
            [`brn-switch-tab--${width}`]: width !== WIDTH.NORMAL,
            [`brn-switch-tab--with-border`]: border
        }, className);

        return (
            <div>
                <div className={TabsClass}>
                    {this.renderChildrenWithTabsApiAsProps()}
                </div>
                <div className="">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
};

Tabs.defaultProps = {
    defaultActiveTabIndex: 0
};

export default Tabs;
export {WIDTH};
