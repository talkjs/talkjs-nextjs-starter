import Footer from "@/components/Footer";
import UICards from "@/components/UICards/UICards";
import DocsIcon from "@/components/Icons/DocsIcon";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import GlobeIcon from "@/components/Icons/GlobeIcon";
import XIcon from "@/components/Icons/XIcon";

export default function Page() {
  const resources = [
    { label: "Docs", href: "https://talkjs.com/docs", icon: <DocsIcon className="w-4 h-4"/> },
    { label: "GitHub", href: "https://github.com/talkjs/talkjs-nextjs-starter", icon: <GitHubIcon className="w-4 h-4"/> },
    { label: "Go to TalkJS.com", href: "https://talkjs.com", icon: <GlobeIcon className="w-4 h-4"/> },
  ];

  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-6 mx-auto mt-12">
        <img className="w-22 h-24" src="./talkjs.svg" alt="TalkJS" />
        <div><XIcon className="w-6 h-6" /></div>
        <img className="w-24 h-24 mb-2" src="./nextjs.svg" alt="Next.js" />
      </div>
      <UICards />
      <Footer resources={resources} />
    </div>
  )
}
