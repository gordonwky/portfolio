import type { Meta, StoryObj } from "@storybook/react";
import { GordonAnimatedText } from "./GordonAnimatedText";
import "../../globals.css";

const meta: Meta<typeof GordonAnimatedText> = {
    component: GordonAnimatedText,
    title: "Animated Text",
    tags: ["autodocs"],
    excludeStories: /.*Data$/,
    args: { sentence: "I \ndo \ncode \n \n!" },
};

export default meta;
type Story = StoryObj<typeof GordonAnimatedText>;

export const Default: Story = {};

export const Pinned: Story = {};
