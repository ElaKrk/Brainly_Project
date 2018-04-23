/* eslint react/prop-types: 0 */
import React from 'react';
import classNames from 'classnames';
import ContentBoxContent from 'style-guide/src/components/content-box/ContentBoxContent';
import Text, { SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT } from 'style-guide/src/components/text/Text';

const WIDTH = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

class TabSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    event.preventDefault();
    const { tabIndex } = event.target;
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ?
        this.props.defaultActiveTabIndex : tabIndex,
    });
  }

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  renderChildrenWithTabsApiAsProps() {
    const tabElements = this.props.tabElements || [];
    const tabItems = tabElements.map((tabElement, index) => (
      <Text
        key={tabElement.props.children.toString()}
        color={TEXT_COLOR.GRAY}
        size={TEXT_SIZE.SMALL}
        weight={TEXT_WEIGHT.BOLD}
        className={classNames(
          'brn-switch-tab__tab',
          `${(index === this.state.activeTabIndex) ? 'brn-switch-tab__tab--active' : ''}`,
        )}
        onClick={this.handleTabClick}
        tabIndex={index}
      >
        {tabElement.props.name}
      </Text>
    ));
    return tabItems;
  }

  // Render current active tab content
  renderActiveTabContent() {
    const { tabElements } = this.props;
    const { activeTabIndex } = this.state;
    if (tabElements[activeTabIndex]) {
      return tabElements[activeTabIndex].props.children;
    }
    return '';
  }

  render() {
    const {
      width = WIDTH.NORMAL, border, className, button,
    } = this.props;
    const TabsClass = classNames(
      'brn-switch-tab-container',
      `brn-switch-tab--${width}`,
      { 'brn-switch-tab--with-border': border },
      className,
    );

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
            <div> {this.renderActiveTabContent().slice(1)}
            </div>
            {button}
          </div>
        </ContentBoxContent>
      </div>
    );
  }
}

TabSwitch.defaultProps = {
  defaultActiveTabIndex: 0,
};

export default TabSwitch;
export { WIDTH };
