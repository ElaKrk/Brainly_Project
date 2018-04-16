import React from 'react';
import Text, {SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT} from 'style-guide/src/components/text/Text';
import classNames from 'classnames';

const WIDTH = {
    SMALL: { className: 'small' },
    NORMAL: { className: 'normal' },
    LARGE: { className: 'large' },
};

const tabOne = "Students";
const tabTwo = "Parents";
const tabThree = "Homeschoolers";


//     render() {
//         const { size = SIZE.NORMAL, border = false, className, ...additionalProps } = this.props;
//         const { currentTab } = this.state;

//         const switchTabsClass = classNames(getSwitchTabsClass(), className)

//         return (
//             <div {...additionalProps} className={switchTabsClass} border={border ? BORDER_SIZE : false}>
//                 <Link href="#" color={LINK_COLOR.GRAY} className="brn-switch-tab__tab" onTabClick={this.onTabClick}>tabTwo</Link>
//             </div>
//             <div>
//                 <ContentBoxContent className={this.contentDisplay}> FIRST
//                 </ContentBoxContent>

//                 <ContentBoxContent className={this.contentDisplay}> SECOND
//                 </ContentBoxContent>
                
//                 <ContentBoxContent className={this.contentDisplay}> THIRD
//                 </ContentBoxContent>
//             </div>
//         )
//     }
// }


const StudentsTabContent = "I used Brainly Plus so I can graduate at the same time as my firend. It is so wonderful and helpful in different ways. Seriously it is like a group study with all the people in world. And most important thing is that, when you have any difficulties in any subject, you are 100% guaranteed to get answer with in a minutes. Thank you so much!";
const ParentsTabContent = "I used ...";
const HomeschoolersTabContent = "I used Brainly Plus ...";

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
        onClick : this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  // Render current active tab content
  renderActiveTabContent() {
    const {children} = this.props;
    const {activeTabIndex} = this.state;
    if(children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    const {border = false, width = WIDTH.NORMAL, className} = this.props;
    const TabsClass = classNames('brn-switch-tab-container', {
      [`brn-swithc-tab--${width}`]: width !== WIDTH.NORMAL,
      [`brn-swithc-tab--with-border`]: border
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

class TabsContainer extends React.Component {
  render() {
    return(
      <Tabs>
        <Tab name={tabOne}>
            <p> {StudentsTabContent}
            </p>
        </Tab>
        <Tab name={tabTwo}>
            <p> {ParentsTabContent}
            </p>
        </Tab>
        <Tab name={tabThree}>
            <p> {HomeschoolersTabContent}
            </p>
        </Tab>
      </Tabs>
    );
  }
}

export default TabsContainer;
export {WIDTH};
