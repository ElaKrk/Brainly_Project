import React from 'react';
import Header from 'style-guide/src/components/header/Header';
import HeaderContainer from 'style-guide/src/components/header/HeaderContainer';
import HeaderContent from 'style-guide/src/components/header/HeaderContent';
import HeaderLeft from 'style-guide/src/components/header/HeaderLeft';
import HeaderMiddle from 'style-guide/src/components/header/HeaderMiddle';
import HeaderRight from 'style-guide/src/components/header/HeaderRight';
import Link, {COLOR} from 'style-guide/src/components/text/Link';
import ActionList from 'style-guide/src/components/action-list/ActionList';
import ActionListHole from 'style-guide/src/components/action-list/ActionListHole';
import HomeButton from 'home-button/HomeButton';
import RWDHelper, {TYPE as RWD_TYPE} from 'style-guide/src/components/helpers/RwdHelper';
import IconAsButton, {TYPE as ICONBUTT_TYPE, ICON_COLOR} from 'style-guide/src/components/icon-as-button/IconAsButton';
import Icon, {TYPE as ICON_TYPE} from 'style-guide/src/components/icons/Icon';
import ButtonFreeTrial from '../../components/ButtonFreeTrial.jsx';

const Headers = () => {
  return (
        <Header>
          <HeaderContainer>
            <HeaderContent>
              <HeaderLeft>
                <HomeButton />
              </HeaderLeft>
              <HeaderMiddle></HeaderMiddle>
              <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
                <div>
                  <HeaderRight>
                    <ActionList direction="to-right">
                      <ActionListHole>
                        <Link color={COLOR.LIGHT} className="brn-element--margin-right brn-element--weight-light">Log in</Link>
                      </ActionListHole>
                      <ActionListHole>
                      <ButtonFreeTrial/>
                      </ActionListHole>
                    </ActionList>
                  </HeaderRight>
                </div>
              </RWDHelper>
              <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
                <div>
                  <HeaderRight>
                    <IconAsButton type={ICONBUTT_TYPE.MENU} color={ICON_COLOR.LIGHT}>
                      <Icon type={ICON_TYPE.MENU}/>
                    </IconAsButton>
                  </HeaderRight>
                </div>
              </RWDHelper>
            </HeaderContent>
          </HeaderContainer>
        </Header>
  );
};

export default Headers;