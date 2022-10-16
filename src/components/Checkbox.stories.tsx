import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex itens-center gap-2'>
                    {Story()}
                    <Text size="sm"> Lembrar-me de mim</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}