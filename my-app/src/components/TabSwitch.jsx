// @flow
import * as React from 'react';
import classNames from 'classnames';
import ContentBoxContent from 'style-guide/src/components/content-box/ContentBoxContent';
import Tab from './Tab';

const WIDTH = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

type TabSwitchStateType = {
  activeTabIndex: number,
}

type TabSwitchPropsType = {
  tabElements?: Array<Object>,
  width?: string,
  border?: boolean,
  className?: string,
  button?: React.Node,
}

class TabSwitch extends React.Component<TabSwitchPropsType, TabSwitchStateType> {
  static defaultProps = {
    width: 'normal',
  };
  constructor(props: TabSwitchPropsType) {
    super(props);
    this.state = {
      activeTabIndex: 0,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick = (index: number) => {
    this.setState({
      activeTabIndex: index,
    });
  }

  // Render tabs
  renderTabsWithTabComponent() {
    const { tabElements } = this.props;
    if (tabElements) {
      const tabItems = tabElements.map((tabElement, index) => (
        <Tab
          key={tabElement.name}
          tab={tabElement.name}
          index={index}
          onClick={() => this.handleTabClick(index)}
          active={(index === this.state.activeTabIndex)}
        />
      ));
      return tabItems;
    }
    return [];
  }

  // Render current active tab content
  renderActiveTabContent() {
    const { tabElements } = this.props;
    const { activeTabIndex } = this.state;
    if (tabElements && tabElements[activeTabIndex]) {
      return tabElements[activeTabIndex].content;
    }
    return {};
  }

  render() {
    const {
      width = 'normal', border, className, button,
    } = this.props;
    const TabsClass = classNames(
      'brn-switch-tab-container',
      width ? `brn-switch-tab--${width}` : `brn-switch-tab--${TabSwitch.defaultProps.width}`,
      { 'brn-switch-tab--with-border': border },
      className,
    );

    return (
      <div>
        <div className={TabsClass}>
          {this.renderTabsWithTabComponent()}
        </div>
        <ContentBoxContent className="brn-box--flex brn-box--flex-spread brn-content-box__content--padding-top-bottom-medium">
          <div className="brn-box--width-small">
            {this.renderActiveTabContent().props.children[0]}
          </div>
          <div className="brn-box--width-medium-large">
            <div> {this.renderActiveTabContent().props.children.slice(1)}
            </div>
            {button}
          </div>
        </ContentBoxContent>
      </div>
    );
  }
}

export default TabSwitch;
export { WIDTH };
