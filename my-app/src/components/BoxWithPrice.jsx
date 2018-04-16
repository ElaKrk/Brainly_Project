import React from 'react';
import Box, {COLOR as BOX_COLOR, PADDING as BOX_PADDING} from 'style-guide/src/components/box/Box';
import ContentBox, {CONTENT_BOX_SPACING_SIZE} from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent, {ALIGNMENT as CONTENT_BOX_CON_ALIGNMENT} from 'style-guide/src/components/content-box/ContentBoxContent';
import Text, {SIZE as TEXT_SIZE, WEIGHT as TEXT_WEIGHT} from 'style-guide/src/components/text/Text';



const BoxWithPrice = () => {
    
    const price = "$14.95";
    const methodsOfPayment = "credit card, SMS";
    
    return (
        <div>
            <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.XLARGE}>
                <Box full color={BOX_COLOR.DARK} padding={BOX_PADDING.LARGE} className="brn-box--width-small brn-box--sharp-corners">
                    <ContentBox className="sg-text--small">
                        <ContentBoxContent align={CONTENT_BOX_CON_ALIGNMENT.CENTER}>
                            <ContentBox>
                                <Text>From</Text>
                                <Text size={TEXT_SIZE.LARGE} weight={TEXT_WEIGHT.BOLD}>{price}
                                </Text>
                                <Text weight={TEXT_WEIGHT.BOLD}>/month
                                </Text>
                                <Text>{methodsOfPayment}
                                </Text>
                            </ContentBox>
                        </ContentBoxContent>
                    </ContentBox>
                </Box>
            </ContentBox>
        </div>
        
    );
  };
  
  export default BoxWithPrice;