"use client";

import PopupUI from "@/components/Popup";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ChatboxUI from "@/components/Chatbox";
import DocsIcon from "@/components/Icons/DocsIcon";
import ShieldIcon from "@/components/Icons/ShieldIcon";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import GlobeIcon from "@/components/Icons/GlobeIcon";
import ResourceLinks from "@/components/ResourceLinks";

const popupResources = [
  { 
    label: "API Reference",
    href: "https://talkjs.com/docs/Reference/React_SDK/Components/Popup/",
    icon: <DocsIcon className="w-4 h-4" />,
  },
    { label: "Authentication", href: "https://talkjs.com/docs/Features/Security_Settings/Authentication/", icon: <ShieldIcon className="w-4 h-4"/> },
  {
    label: "GitHub",
    href: "https://github.com/taljs/talkjs-vercel",
    icon: <GitHubIcon className="w-4 h-4" />,
  },
  {
    label: "Go to TalkJS.com",
    href: "https://talkjs.com",
    icon: <GlobeIcon className="w-4 h-4" />,
  },
];

const title = "Popup UI";
const description = (
  <div>
    <p>
      A floating chat window users can open on demand, shown in the bottom-right corner.
    </p>
    <p className="mt-2">
      Popups are most suited for larger screens. On mobile, use a{" "}
      <a href="/chatbox" className="text-blue-500 hover:underline">
        Chatbox
      </a>{" "}
      instead.
    </p>
  </div>
);

export default function PopupPage() {
  const largeScreen = useMediaQuery("(min-width: 768px)");

  if (largeScreen) {
    // Larger screens / Desktop
    return (
      <main className="px-8 md:flex md:space-x-8">
        <div className="flex flex-col w-64 flex-shrink-0 min-h-[500px] border-r border-gray-200 py-10 pr-6 h-screen text-gray-900">
          <h1 className="text-3xl font-semibold mb-3">{title}</h1>
          <div className="mb-6 text-gray-600">{description}</div>

          <div className="mt-auto mb-26">
            <ResourceLinks resources={popupResources} />
          </div>
        </div>


        <section className="flex-grow rounded-lg p-6">
          <PopupUI />
        </section>
      </main>
    );
  }

  // Smaller screens / mobile
  return (
    <main className="px-8 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h1>
        <div className="text-gray-600">{description}</div>
      </div>

      <section className="rounded-lg pt-6">
        <ChatboxUI />
        <div className="py-12">
          <div className="border-t border-neutral-200 p-4">
            <ResourceLinks resources={popupResources} />
          </div>
        </div>
      </section>
    </main>
  );
}
