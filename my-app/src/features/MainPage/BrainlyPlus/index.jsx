import React from 'react';
import ContentBox from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent from 'style-guide/src/components/content-box/ContentBoxContent';
import ContentBoxTitle from 'style-guide/src/components/content-box/ContentBoxTitle';
import HeaderPrimary ,{HEADER_TYPE, HEADER_SIZE} from 'style-guide/src/components/text/HeaderPrimary';
import TextBit from 'style-guide/src/components/text/TextBit';

const BrainlyPlus = () => {
  return (
    <ContentBox className="brn-content-box--light">
        <ContentBoxContent className="brn-content-box__content">
            <ContentBoxTitle>
                <TextBit size="small" color="dark">Get answers to all your questions</TextBit>
               
                <HeaderPrimary type={HEADER_TYPE.CAPITAL} size={HEADER_SIZE.SMALL}>
                    Get help with school work
                </HeaderPrimary>
            </ContentBoxTitle>
        </ContentBoxContent>
    </ContentBox>
  );
};

export default BrainlyPlus;