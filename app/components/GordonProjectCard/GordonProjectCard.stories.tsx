import type { Meta, StoryObj } from '@storybook/react';
import GordonProjectCard from './GordonProjectCard';
import "../../globals.css"; // Ensure global styles are applied
const meta = {
    component: GordonProjectCard,
    title: 'Project Card',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    // args: { title, description, imageUrl, technologies, pageUrl, source  }
} satisfies Meta<typeof GordonProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Full-Stack AI Travel Assistant with Multi-Agent Orchestration",
        description:
            " An LLM-powered multi-agent travel assistant that generates itineraries, dining recommendations, and validates user preferences",
        technologies:
            ["LangChain", "LangGraph", "FastAPI", "Docker", "SQLAlchemy"],
        pageUrl: "https://github.com/gordonwky/travelAssistant",
        source: "GitHub",
        imageUrl: "/images/github.png"
    }
};


export const Loading: Story = {
    args: {
        loading: true
    }
};


// export const Pinned: Story = {
// };
