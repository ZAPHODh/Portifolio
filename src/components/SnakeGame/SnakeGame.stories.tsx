import { Meta, StoryFn } from '@storybook/react';
import { SnakeGame } from '.';

export default {
  title: 'SnakeGame',
  component: SnakeGame,
} as Meta;

const Template: StoryFn<typeof SnakeGame> = () => <SnakeGame />;

export const Primary = Template.bind({});
