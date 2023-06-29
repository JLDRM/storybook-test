import type { Meta, StoryObj } from '@storybook/react';

import InputField from '../components/InputField/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Example/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string', description: 'Input label' },
    children: { control: 'ReactNode', description: 'The html input element' },
    htmlFor: { control: 'string', description: 'Value for htmlFor attribute of the label' },
    error: { control: 'any', description: 'Error slice from RHF formstate errors' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  render: (args) => (
    <InputField {...args}>
      <input type="text" />
    </InputField>
  ),
  args: {
    label: 'Name:*',
    htmlFor: 'userName',
    error: '',
  },
};

export const Error: Story = {
  render: (args) => (
    <InputField {...args}>
      <input type="text" />
    </InputField>
  ),
  args: {
    label: 'Name:*',
    htmlFor: 'userName',
    error: { message: 'Name is required' },
  },
};
