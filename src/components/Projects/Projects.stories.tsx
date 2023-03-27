import { Meta, StoryFn } from '@storybook/react';
import { Projects, ProjectsProps } from '.';

export default {
  title: 'Projects',
  component: Projects,
} as Meta<ProjectsProps>;

const Template: StoryFn<typeof Projects> = (args) => <Projects {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
