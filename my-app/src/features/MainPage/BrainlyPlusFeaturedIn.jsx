import React from 'react';
import ContentBox from 'style-guide/src/components/content-box/ContentBox';
import ContentBoxContent, {SIZE, ALIGNMENT} from 'style-guide/src/components/content-box/ContentBoxContent';
import HeaderSecondary, { HEADER_SIZE } from 'style-guide/src/components/text/HeaderPrimary';
import ImageRound, { SIZE as IMAGE_ROUND_SIZE } from '../../components/ImageRound.jsx';
import ImageSquare, { SIZE as IMAGE_SQUARE_SIZE } from '../../components/ImageSquare.jsx';

const BrainlyPlusFeaturedIn = () => {
    return (
        <ContentBox>
            <ContentBoxContent align={ALIGNMENT.CENTER} className="brn-content-box__content brn-content-box__content--padding-small">
                <HeaderSecondary size={HEADER_SIZE.SMALL}>
                    Brainly Plus featured in
        </HeaderSecondary>
                <ContentBoxContent spacedTop={SIZE.XLARGE} className="brn-box--flex brn-box--flex-spread">
                    <ImageRound size={IMAGE_ROUND_SIZE.SMALL} />
                    <ImageSquare size={IMAGE_SQUARE_SIZE.SMALL} />
                    <ImageRound size={IMAGE_ROUND_SIZE.SMALL} />
                    <ImageSquare size={IMAGE_SQUARE_SIZE.SMALL} />
                    <ImageRound size={IMAGE_ROUND_SIZE.SMALL} />
                    <ImageSquare size={IMAGE_SQUARE_SIZE.SMALL} />
                </ContentBoxContent>
            </ContentBoxContent>
        </ContentBox>
    );
};

export default BrainlyPlusFeaturedIn;