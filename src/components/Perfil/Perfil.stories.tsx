import { Meta, StoryFn } from '@storybook/react';
import { Perfil, PerfilProps } from '.';

export default {
    title: 'Perfil',
    component: Perfil,
} as Meta<PerfilProps>;

const Template: StoryFn<typeof Perfil> = (args) => <Perfil {...args} />;

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }
