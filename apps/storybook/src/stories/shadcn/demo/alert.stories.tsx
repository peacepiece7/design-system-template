import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@repo/ui-shadcn';
import { RocketIcon } from '@radix-ui/react-icons';
import { Story } from '@storybook/blocks';
import { withActions } from '@storybook/addon-actions/decorator';
import CustomDocument from '../../../components/CustomDocument';

const meta = {
  title: 'shadcn/demo/alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
    docs: {
      page: () => <CustomDocument documentsURL="https://ui.shadcn.com/docs/components/alert" />,
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
  args: {
    // type: 'single',
    // disabled: false,
    // asChild: false,
    // collapsible: true,
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // argTypes: {
  //   type: {
  //     options: ['single', 'multiple'],
  //     control: { type: 'select' },
  //   },
  //   collapsible: {
  //     control: { type: 'boolean' },
  //     description: 'type : "single" 일 때만 사용 가능합니다.',
  //     if: { arg: 'type', neq: 'multiple' },
  //   },
  //   asChild: {
  //     description: 'true시 AccordionContent가 첫번째 자식 태그로 랜더링됩니다. (\\<Slot />)',
  //     control: { type: 'boolean' },
  //   },
  // },
  decorators: [
    (Story) => (
      <div className="min-w-[500px]">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    return (
      <Alert {...args}>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>
    );
  },
};
