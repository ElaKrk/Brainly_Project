import React from 'react';
import ActionListHole from 'style-guide/src/components/action-list/ActionListHole';
import Text, { SIZE as TEXT_SIZE, WEIGHT as TEXT_WEIGHT, COLOR as TEXT_COLOR } from 'style-guide/src/components/text/Text';
import ContentBox, { CONTENT_BOX_SPACING_SIZE } from 'style-guide/src/components/content-box/ContentBox';
import List from 'style-guide/src/components/list/List';
import ListItem from 'style-guide/src/components/list/ListItem';

const LinkListHelp = () => {
    return (
        <ActionListHole grow spaceBellow>
            <Text size={TEXT_SIZE.STANDOUT} weight={TEXT_WEIGHT.BOLD}>
               Help
          </Text>
            <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.LARGE}>
                <List spaced>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.zendesk.com/hc/en-us">
                            FAQ
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.com/pages/terms_of_use">
                            Terms of use
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.com/pages/privacy_policy">
                            Privacy policy
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.com/pages/community_guidelines">
                            Community guidelines
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.com/app/scholarship">
                            Scholarship
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="">
                            Archive
                </Text>
                    </ListItem>
                </List>
            </ContentBox>
        </ActionListHole>
    )
}

export default LinkListHelp;