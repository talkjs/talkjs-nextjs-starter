import InboxCard from "@/components/UICards/InboxCard";
import ChatboxCard from "@/components/UICards/ChatboxCard";
import PopupCard from "@/components/UICards/PopupCard";

export default function UICards() {
  
    return (

<section className="relative py-24 px-10 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Pre-built, fully customizable chat UIs
        </h2>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          Launch a professional, responsive chat interface out of the box with TalkJS for Next.js. Components are flexible and production-ready—adapt to your brand without building from scratch.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative z-10 ">
        <ChatboxCard />
        <InboxCard />
        <PopupCard />
      </div>
    </section>
    );
}
