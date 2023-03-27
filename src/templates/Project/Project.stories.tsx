import { Meta, StoryFn } from '@storybook/react';
import { Project, ProjectProps } from '.';

export default {
    title: 'Project',
    component: Project,
} as Meta<ProjectProps>;

const Template: StoryFn<typeof Project> = (args) => <Project {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
