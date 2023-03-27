import { Meta, StoryFn } from '@storybook/react';
import { PageSection, PageSectionProps } from '.';

export default {
    title: 'PageSection',
    component: PageSection,
} as Meta<PageSectionProps>;

const Template: StoryFn<typeof PageSection> = (args) => (
    <PageSection {...args} />
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
