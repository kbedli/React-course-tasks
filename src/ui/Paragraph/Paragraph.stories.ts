import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta = {
  title: "UI/Paragraph",
  component: Paragraph,

  // tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Click me!",
    color: "blue-600",
    isActive: true,
  },
};

export const Secondary: Story = {
  args: {
    text: "Hola!",
    color: "green-600",
    isActive: false,
  },
};

export const Third: Story = {
  args: {
    text: "Click me!",
    color: "red-600",
    isActive: true,
  },
};
