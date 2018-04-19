import React from 'react';
import ActionListHole from 'style-guide/src/components/action-list/ActionListHole';
import Text, { SIZE as TEXT_SIZE, WEIGHT as TEXT_WEIGHT, COLOR as TEXT_COLOR } from 'style-guide/src/components/text/Text';
import ActionList from 'style-guide/src/components/action-list/ActionList';
import ContentBoxActions from 'style-guide/src/components/content-box/ContentBoxActions';
import DropdownBrainly from './DropdownBrainly';

const GetApp = () => {
    return (
        <ActionListHole grow spaceBellow>
            <DropdownBrainly />
            {/* <ContentBoxActions spacedBottom>
                <ActionList>
                    <ActionListHole>
                    <a href="https://bnc.lt/m/NHJ6ija4Gq" class="sg-hide-for-small-only brn-mobile-store__button
                         brn-mobile-store__button--ios brn-mobile-store__button--ios-us">
                        Download iOS App
                    </a>
                    </ActionListHole>
                </ActionList>
            </ContentBoxActions>
            <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.co/about.html">
                This site is using cookies under <a href="https://brainly.com/pages/cookie_policy" rel="nofollow" class="sg-link"> cookie policy </a>.
                You can specify conditions of storing and accessing cookies in your browser
            </Text> */}
        </ActionListHole>
    )
}

export default GetApp;