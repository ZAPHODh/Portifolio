import { Meta, StoryFn } from '@storybook/react';
import { Tecnologies } from '.';

export default {
    title: 'Tecnologies',
    component: Tecnologies,
} as Meta;

const Template: StoryFn<typeof Tecnologies> = () => <Tecnologies />;

export const Primary = Template.bind({});
//default values
