import { Meta, StoryFn } from '@storybook/react';
import { GuessedWordRound, GuessedWordRoundProps } from '.';

export default {
  title: 'GuessedWordRound',
  component: GuessedWordRound,
} as Meta<GuessedWordRoundProps>;

const Template: StoryFn<typeof GuessedWordRound> = (args) => (
  <GuessedWordRound {...args} />
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
