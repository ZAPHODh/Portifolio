import { Meta, StoryFn } from '@storybook/react';
import { GameOver, GameOverProps } from '.';

export default {
  title: 'GameOver',
  component: GameOver,
} as Meta<GameOverProps>;

const Template: StoryFn<typeof GameOver> = (args) => <GameOver {...args} />;

export const Primary = Template.bind({});
