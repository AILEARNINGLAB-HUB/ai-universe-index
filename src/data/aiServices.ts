export interface AIService {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
  featured: boolean;
}

export const aiServices: AIService[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's powerful conversational AI that can help with writing, coding, analysis, and creative tasks.",
    url: "https://chat.openai.com",
    category: "Language Model",
    tags: ["Conversational AI", "Writing", "Coding", "Analysis"],
    pricing: "Freemium",
    featured: true
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant focused on being helpful, harmless, and honest. Excellent for complex reasoning and analysis.",
    url: "https://claude.ai",
    category: "Language Model",
    tags: ["Analysis", "Reasoning", "Safety", "Writing"],
    pricing: "Freemium",
    featured: true
  },
  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google's most capable AI model with multimodal understanding and reasoning capabilities.",
    url: "https://gemini.google.com",
    category: "Language Model",
    tags: ["Multimodal", "Google", "Reasoning", "Integration"],
    pricing: "Freemium",
    featured: true
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    description: "Microsoft's AI assistant integrated across their ecosystem, powered by OpenAI technology.",
    url: "https://copilot.microsoft.com",
    category: "Language Model",
    tags: ["Microsoft", "Integration", "Office", "Productivity"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "AI-powered search engine that provides accurate, real-time answers with source citations.",
    url: "https://perplexity.ai",
    category: "Research",
    tags: ["Search", "Research", "Citations", "Real-time"],
    pricing: "Freemium",
    featured: true
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Leading AI art generator known for producing high-quality, artistic images from text prompts.",
    url: "https://midjourney.com",
    category: "Image Generation",
    tags: ["Art Generation", "Creative", "Discord", "High Quality"],
    pricing: "Paid",
    featured: true
  },
  {
    id: "dalle",
    name: "DALL-E 3",
    description: "OpenAI's advanced image generation model that creates detailed images from text descriptions.",
    url: "https://openai.com/dall-e-3",
    category: "Image Generation",
    tags: ["Image Generation", "OpenAI", "Creative", "Detailed"],
    pricing: "Paid",
    featured: false
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description: "The platform for machine learning, offering thousands of pre-trained models and datasets.",
    url: "https://huggingface.co",
    category: "Platform",
    tags: ["Open Source", "Models", "Datasets", "Community"],
    pricing: "Freemium",
    featured: true
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI-powered code completion tool that helps developers write code faster and more efficiently.",
    url: "https://github.com/features/copilot",
    category: "Code Assistant",
    tags: ["Code Completion", "GitHub", "Programming", "IDE"],
    pricing: "Paid",
    featured: true
  },
  {
    id: "character-ai",
    name: "Character.AI",
    description: "Platform for creating and interacting with AI characters for entertainment and roleplay.",
    url: "https://character.ai",
    category: "Chatbot",
    tags: ["Characters", "Roleplay", "Entertainment", "Social"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "replicate",
    name: "Replicate",
    description: "Run and fine-tune open-source machine learning models in the cloud with simple API.",
    url: "https://replicate.com",
    category: "Platform",
    tags: ["API", "Open Source", "Cloud", "Fine-tuning"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "stability-ai",
    name: "Stability AI",
    description: "Company behind Stable Diffusion, offering open-source AI models for image generation.",
    url: "https://stability.ai",
    category: "Image Generation",
    tags: ["Stable Diffusion", "Open Source", "Image AI", "Research"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "mistral",
    name: "Mistral AI",
    description: "French AI company creating efficient and powerful open-source language models.",
    url: "https://mistral.ai",
    category: "Language Model",
    tags: ["Open Source", "Efficient", "European", "Research"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "cohere",
    name: "Cohere",
    description: "Enterprise-focused language AI platform for businesses to build and deploy language applications.",
    url: "https://cohere.ai",
    category: "Language Model",
    tags: ["Enterprise", "Business", "API", "NLP"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "poe",
    name: "Poe by Quora",
    description: "Platform providing access to multiple AI models including GPT, Claude, and others in one interface.",
    url: "https://poe.com",
    category: "Platform",
    tags: ["Multiple Models", "Quora", "Interface", "Aggregator"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "you-com",
    name: "You.com",
    description: "AI-powered search engine with integrated chatbot and productivity tools.",
    url: "https://you.com",
    category: "Research",
    tags: ["Search Engine", "Chat", "Productivity", "Web Search"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "phind",
    name: "Phind",
    description: "AI search engine specifically designed for developers and technical questions.",
    url: "https://phind.com",
    category: "Research",
    tags: ["Developer", "Technical", "Code Search", "Programming"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "runway",
    name: "Runway ML",
    description: "Creative AI platform offering video editing, image generation, and other multimedia AI tools.",
    url: "https://runwayml.com",
    category: "Image Generation",
    tags: ["Video", "Creative", "Multimedia", "AI Tools"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "anthropic",
    name: "Anthropic",
    description: "AI safety company developing Claude and researching AI alignment and safety.",
    url: "https://anthropic.com",
    category: "Platform",
    tags: ["AI Safety", "Research", "Claude", "Alignment"],
    pricing: "Freemium",
    featured: false
  },
  {
    id: "openai",
    name: "OpenAI",
    description: "Leading AI research company behind GPT models, DALL-E, and other breakthrough AI technologies.",
    url: "https://openai.com",
    category: "Platform",
    tags: ["Research", "GPT", "Innovation", "AGI"],
    pricing: "Freemium",
    featured: true
  }
];