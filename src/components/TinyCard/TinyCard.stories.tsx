import { Meta, StoryFn } from '@storybook/react';
import { TinyCard, TinyCardProps } from '.';

export default {
  title: 'TinyCard',
  component: TinyCard,
} as Meta<TinyCardProps>;

const Template: StoryFn<typeof TinyCard> = (args) => <TinyCard {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
