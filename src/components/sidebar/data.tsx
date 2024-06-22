
import { DocIcon } from "./icons/DocIcon";
import { AIImageIcon } from "./icons/AIImageIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { AIVideoIcon } from "./icons/AIVideoIcon";
import { AIAudioIcon } from "./icons/AIAudioIcon";
import { AiChatBotIcon } from "./icons/AiChatBotIcon";
import { AIAutoIcon } from "./icons/AIAutoIcon";
import { FreeAiIcon } from "./icons/FreeAiIcon";
import { AppsIcon } from "./icons/AppsIcon";

export const data = [
  {
    section: "Apps",
    content: [
      {
        title: "All Apps",
        icon: <AppsIcon />,
        link: "/",
      },
      {
        title: "Profile",
        icon: <ProfileIcon />,
        link: "/profile",
      },
    ],
  },
  {
    section: "Categories",
    content: [
      {
        title: "AI Image",
        icon: <AIImageIcon />,
        link: "/ai-image",
      },
      {
        title: "AI Video",
        icon: <AIVideoIcon />,
        link: "/ai-video",
      },
      {
        title: "AI Audio",
        icon: <AIAudioIcon />,
        link: "/ai-audio",
      },
      {
        title: "AI ChatBot",
        icon: <AiChatBotIcon />,
        link: "/ai-chatbot",
      },
      {
        title: "AI-automate(RAG)",
        icon: <AIAutoIcon />,
        link: "/ai-auto",
      },
      {
        title: "Free Service",
        icon: <FreeAiIcon />,
        link: "/free-ai",
      },
    ],
  },
  {
    section: "Guides",
    content: [
      {
        title: "Documentation",
        icon: <DocIcon />,
        link: "/documentation",
      },
      {
        title: "Support",
        icon: <DocIcon />,
        link: "/support",
      },
    ],
  },
];