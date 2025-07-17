"use client";

import ChatboxUI from "@/components/Chatbox";
import ShieldIcon from "@/components/Icons/ShieldIcon";
import DocsIcon from "@/components/Icons/DocsIcon";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import GlobeIcon from "@/components/Icons/GlobeIcon";
import ResourceLinks from "@/components/ResourceLinks";

const chatboxResources = [
  { label: "API Reference", href: "https://talkjs.com/docs/Reference/React_SDK/Components/Chatbox/", icon: <DocsIcon className="w-4 h-4" /> },
  { label: "Authentication", href: "https://talkjs.com/docs/Features/Security_Settings/Authentication/", icon: <ShieldIcon className="w-4 h-4"/> },
  { label: "GitHub", href: "https://github.com/taljs/talkjs-vercel", icon: <GitHubIcon className="w-4 h-4" /> },
  { label: "Go to TalkJS.com", href: "https://talkjs.com", icon: <GlobeIcon className="w-4 h-4" /> },
];

const title = "Chatbox UI";
const description = "A compact message window you can embed next to a booking, order, or user profile.";

export default function ChatboxPage() {
  return (
    <main className="px-8 flex flex-col md:flex-row md:space-x-8">
      
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 flex-shrink-0 min-h-[500px] border-r border-gray-200 h-screen pt-10 pr-6 h-screen text-gray-900">
        <h1 className="text-3xl font-semibold mb-3">{title}</h1>
        <div className="mb-6 text-gray-600">{description}</div>
        <div className="mt-auto mb-36">
          <ResourceLinks resources={chatboxResources} />
        </div>
      </div>

      {/* Main section (shared between mobile + desktop) */}
      <section className="flex-grow rounded-lg md:p-6">
        {/* Title + description for mobile */}
        <div className="my-6 md:hidden">
          <h1 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h1>
          <div className="text-gray-600">{description}</div>
        </div>

        <div className="pt-6">
          <ChatboxUI />
        </div>

        {/* Resource links for mobile */}
        <div className="py-12 md:hidden">
          <div className="border-t border-neutral-200 pt-6">
            <ResourceLinks resources={chatboxResources} />
          </div>
        </div>
      </section>
    </main>
  );
}
