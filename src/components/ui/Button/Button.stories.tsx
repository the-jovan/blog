import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    label: {
      control: "primary",
    },
    args: {
      variant: {
        control: "blue",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "secondary",
  args: {
    variant: "blue",
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "tertiary",
  args: {
    variant: "green",
  },
};
