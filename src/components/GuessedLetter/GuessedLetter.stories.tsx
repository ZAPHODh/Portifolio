import { Meta, StoryFn } from '@storybook/react';
import { GuessedLetter, GuessedLetterProps } from '.';

export default {
  title: 'GuessedLetter',
  component: GuessedLetter,
} as Meta<GuessedLetterProps>;

const Template: StoryFn<typeof GuessedLetter> = (args) => (
  <GuessedLetter {...args} />
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
