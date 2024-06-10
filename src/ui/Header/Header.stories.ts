import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "UI/Header",
  component: Header,

  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click me!",
  },
};

export const Secondary: Story = {
  args: {
    children: "Hola!",
  },
};
