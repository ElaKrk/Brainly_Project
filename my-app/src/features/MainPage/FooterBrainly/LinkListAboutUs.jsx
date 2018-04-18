import React from 'react';
import ActionListHole from 'style-guide/src/components/action-list/ActionListHole';
import Text, { SIZE as TEXT_SIZE, WEIGHT as TEXT_WEIGHT, COLOR as TEXT_COLOR } from 'style-guide/src/components/text/Text';
import ContentBox, { CONTENT_BOX_SPACING_SIZE } from 'style-guide/src/components/content-box/ContentBox';
import List from 'style-guide/src/components/list/List';
import ListItem from 'style-guide/src/components/list/ListItem';

const LinkListAboutUs = () => {
    return (
        <ActionListHole grow spaceBellow>
            <Text size={TEXT_SIZE.STANDOUT} weight={TEXT_WEIGHT.BOLD}>
                About us
          </Text>
            <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.LARGE}>
                <List spaced>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.co/about.html">
                            About us
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.co/team.html">
                            Team
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.co/work-with-us.html">
                            Work with us
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://brainly.com/contact/index">
                            Contact
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="">
                            Mobile apps
                </Text>
                    </ListItem>
                    <ListItem>
                        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY_SECONDARY} weight={TEXT_WEIGHT.BOLD} href="https://blog.brainly.co/">
                            Blog
                </Text>
                    </ListItem>
                </List>
            </ContentBox>
        </ActionListHole>
    )
}

export default LinkListAboutUs;