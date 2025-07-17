export default function InboxCard() {
  return (
    <a
      href="/inbox"
      className="group flex flex-col h-full rounded-2xl p-6 bg-neutral-800 border border-white/10 hover:border-white/20 hover:shadow-[0_6px_30px_rgba(0,0,0,0.25)] hover:scale-[1.015] transition-all duration-300"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="inline-block px-3 py-3 font-semibold rounded-2xl bg-white text-black fill-black text-base">
          <img src="/inbox.svg" alt="Close" className="w-4 h-4" />
        </div>
        <div className="text-lg font-semibold text-white">Inbox</div>
      </div>

      {/* Widget Preview */}
      <div className="flex justify-center items-center -mt-2 h-full">
        <div className="flex items-start gap-2">
          {/* Sidebar */}
          <div className="w-20 bg-white rounded overflow-hidden">
            {/* Sidebar Header */}
            <div className="h-6 bg-gray-200 px-2 flex items-center gap-1">
              <div className="h-2 w-4 bg-white rounded relative">
                <div className="absolute w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>

              {/* Sidebar Items */}
            <div className="h-6 bg-gray-100 px-2 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-gray-900"></div>
              <div className="h-1 w-1/2 rounded bg-gray-900"></div>
            </div>
            <div className="h-6 bg-blue-500 px-2 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-1 w-1/2 rounded bg-white"></div>
            </div>
            <div className="h-6 bg-gray-100 px-2 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-gray-900"></div>
              <div className="h-1 w-1/2 rounded bg-gray-900"></div>
            </div>

          </div>

          {/* Conversation Pane */}
          <div className="w-32 h-40 bg-white rounded flex flex-col justify-between overflow-hidden">
            {/* Header */}
            <div className="h-6 bg-gray-200 px-2 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-1 w-1/2 rounded bg-white"></div>
            </div>

            {/* Message 1 (sent) */}
            <div className="flex gap-1 px-2 justify-end">
              <div className="order-2 h-2 w-2 rounded-full bg-gray-900"></div>
              <div className="order-1 p-1.5 bg-blue-500 rounded w-1/2 flex flex-col gap-0.5">
                <div className="h-0.5 w-full bg-white rounded"></div>
                <div className="h-0.5 w-full bg-white rounded"></div>
                <div className="h-0.5 w-1/2 bg-white rounded"></div>
              </div>
            </div>

            {/* Message 2 (received) */}
            <div className="flex gap-1 px-2">
              <div className="h-2 w-2 rounded-full bg-gray-900"></div>
              <div className="p-1.5 bg-gray-200 rounded w-1/2 flex flex-col gap-0.5">
                <div className="h-0.5 w-full bg-gray-900 rounded"></div>
                <div className="h-0.5 w-full bg-gray-900 rounded"></div>
                <div className="h-0.5 w-1/2 bg-gray-900 rounded"></div>
              </div>
            </div>

            {/* Message 3 (sent) */}
            <div className="flex gap-1 px-2 justify-end">
              <div className="order-2 h-2 w-2 rounded-full bg-gray-900"></div>
              <div className="order-1 p-1.5 bg-blue-500 rounded w-1/2 flex flex-col gap-0.5">
                <div className="h-0.5 w-full bg-white rounded"></div>
                <div className="h-0.5 w-2/3 bg-white rounded"></div>
              </div>
            </div>

            {/* Input field */}
            <div className="h-6 bg-gray-200 rounded-b px-2 flex items-center justify-between gap-2">
              <div className="h-2 flex-grow bg-white rounded"></div>
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-neutral-200 mt-4 text-sm">
        A full messaging center, with sidebar and conversation view. Ideal for support or community messaging.
      </p>
    </a>
  );
}
