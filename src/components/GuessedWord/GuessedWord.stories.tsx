import { Meta, StoryFn } from '@storybook/react';
import { GuessedWord, GuessedWordProps } from '.';

export default {
  title: 'GuessedWord',
  component: GuessedWord,
} as Meta<GuessedWordProps>;

const Template: StoryFn<typeof GuessedWord> = (args) => (
  <GuessedWord {...args} />
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
