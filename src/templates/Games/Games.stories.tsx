import { Meta, StoryFn } from '@storybook/react';
import { Games, GamesProps } from '.';

export default {
  title: 'Games',
  component: Games,
} as Meta<GamesProps>;

const Template: StoryFn<typeof Games> = (args) => <Games {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
