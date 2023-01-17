import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./";

export default {
  title: "Feature/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
