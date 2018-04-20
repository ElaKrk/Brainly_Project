import React from 'react';
import Footer from 'style-guide/src/components/footer/Footer';
import ActionList, { DIRECTION } from 'style-guide/src/components/action-list/ActionList';
import LinkListAboutUs from './LinkListAboutUs';
import LinkListHelp from './LinkListHelp';
import GetApp from './GetApp';

const FooterBrainly = () => (
  <Footer>
    <ActionList toTop direction={DIRECTION.SPACE_BETWEEN}>
      <LinkListAboutUs />
      <LinkListHelp />
      <GetApp />
    </ActionList>
  </Footer>
);

export default FooterBrainly;
