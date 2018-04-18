import React from 'react';
import ContentBoxContent from 'style-guide/src/components/content-box/ContentBoxContent';

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
        const { width = WIDTH.NORMAL, border, className, button } = this.props;
        const TabsClass = classNames('brn-switch-tab-container',
            `brn-switch-tab--${width}`, 
            {[`brn-switch-tab--with-border`]: border },
            className);
        return (
            <div>
                <div className={TabsClass}>
                    {this.renderChildrenWithTabsApiAsProps()}
                </div>
                <ContentBoxContent className="brn-box--flex brn-box--flex-spread brn-content-box__content--padding-top-bottom-medium">
                    <div className="brn-box--width-small">
                        {this.renderActiveTabContent()[0]}
                    </div>
                    <div className="brn-box--width-medium-large">
                        <p> {this.renderActiveTabContent().slice(1)}
                        </p>
                        {button}
                    </div>
                </ContentBoxContent>
            </div>
        );
    }
};

Tabs.defaultProps = {
    defaultActiveTabIndex: 0
};

export default Tabs;
export {WIDTH};
