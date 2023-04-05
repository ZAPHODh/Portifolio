import { Meta, StoryFn } from '@storybook/react';
import { LoseWordle, LoseWordleProps } from '.';

export default {
  title: 'LoseWordle',
  component: LoseWordle,
} as Meta<LoseWordleProps>;

const Template: StoryFn<typeof LoseWordle> = (args) => <LoseWordle {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
