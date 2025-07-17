import XIcon from "@/components/Icons/XIcon";

export default function PopupCard() {
  return (
    <a
      href="/popup"
      className="group flex flex-col h-full rounded-2xl p-6 bg-neutral-800 border border-white/10 hover:border-white/20 hover:shadow-[0_6px_30px_rgba(0,0,0,0.25)] hover:scale-[1.015] transition-all duration-300"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="inline-block px-3 py-3 font-semibold rounded-2xl bg-white text-black fill-black text-base">
          <img src="/popup.svg" alt="Close" className="w-4 h-4" />
        </div>
        <div className="text-lg font-semibold text-white">Popup</div>
      </div>

      {/* Remove extra divs and avoid h-full */}
      <div className="p-1">
        <div className="flex justify-end -mt-2">
          <div className="flex flex-col gap-2 items-end">
            {/* Chatbox UI */}
            <div className="w-32 h-34 rounded bg-white flex flex-col justify-between">
              {/* Header */}
              <div className="h-6 bg-gray-200 rounded-t px-2 flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-white" />
                <div className="h-1 w-1/2 rounded bg-white" />
              </div>

              {/* Chat 1 */}
              <div className="flex gap-1 px-2">
                <div className="h-2 w-2 rounded-full bg-gray-900" />
                <div className="p-1.5 bg-gray-200 rounded w-1/2 flex flex-col gap-0.5">
                  <div className="w-full h-0.5 bg-gray-900 rounded" />
                  <div className="w-full h-0.5 bg-gray-900 rounded" />
                  <div className="w-1/2 h-0.5 bg-gray-900 rounded" />
                </div>
              </div>

              {/* Chat 2 */}
              <div className="flex gap-1 px-2 justify-end">
                <div className="h-2 w-2 rounded-full bg-gray-900 order-2" />
                <div className="p-1.5 bg-blue-500 rounded w-1/2 flex flex-col gap-0.5 order-1">
                  <div className="w-full h-0.5 bg-white rounded" />
                  <div className="w-full h-0.5 bg-white rounded" />
                  <div className="w-1/2 h-0.5 bg-white rounded" />
                </div>
              </div>

              {/* Chat 3 */}
              <div className="flex gap-1 px-2">
                <div className="h-2 w-2 rounded-full bg-gray-900" />
                <div className="p-1.5 bg-gray-200 rounded w-1/2 flex flex-col gap-0.5">
                  <div className="w-full h-0.5 bg-gray-900 rounded" />
                  <div className="w-2/3 h-0.5 bg-gray-900 rounded" />
                </div>
              </div>

              {/* Input Field */}
              <div className="h-6 bg-gray-200 rounded-b flex items-center justify-between px-2 gap-2">
                <div className="h-2 grow rounded bg-white" />
                <div className="h-2 w-2 rounded-full bg-blue-500" />
              </div>
            </div>

            {/* Popup Close Button */}
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <XIcon className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Description paragraph */}
      <p className="text-neutral-200 text-sm">
        A floating chat window users can open on demand, shown in the bottom-right corner.
      </p>
    </a>
  );
}
