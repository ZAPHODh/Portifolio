import { Meta, StoryFn } from '@storybook/react';
import { Introduce, IntroduceProps } from '.';

export default {
    title: 'Introduce',
    component: Introduce,
} as Meta<IntroduceProps>;

const Template: StoryFn<typeof Introduce> = (args) => <Introduce {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
