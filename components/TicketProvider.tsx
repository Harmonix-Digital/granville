"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Script from "next/script";

const EVENTBRITE_SCRIPT =
  "https://www.eventbrite.ca/static/widgets/eb_widgets.js";

const EVENT_ID = "1997096193475";
const CONTAINER_ID = `eventbrite-widget-container-${EVENT_ID}`;

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: {
        widgetType: "checkout";
        eventId: string;
        iframeContainerId: string;
        iframeContainerHeight?: number;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

type TicketContextValue = {
  openTickets: () => void;
  closeTickets: () => void;
};

const TicketContext = createContext<TicketContextValue | null>(null);

export function useTickets() {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error("useTickets must be used inside TicketProvider");
  }

  return context;
}

export default function TicketProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventbriteLoaded, setEventbriteLoaded] = useState(false);
  const [widgetInitialized, setWidgetInitialized] = useState(false);

  const openTickets = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeTickets = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // ESC closes modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeTickets();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeTickets]);

  // Initialize Eventbrite once the script has loaded
  useEffect(() => {
    if (!eventbriteLoaded || !isOpen || widgetInitialized) {
      return;
    }

    if (!window.EBWidgets) {
      return;
    }

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: EVENT_ID,
      iframeContainerId: CONTAINER_ID,
      iframeContainerHeight: 425,

      onOrderComplete: () => {
        console.log("Eventbrite order complete!");
      },
    });

    setWidgetInitialized(true);
  }, [eventbriteLoaded, isOpen, widgetInitialized]);

  return (
    <TicketContext.Provider value={{ openTickets, closeTickets }}>
      {children}

      <Script
        src={EVENTBRITE_SCRIPT}
        strategy="afterInteractive"
        onLoad={() => setEventbriteLoaded(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tickets-modal-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close tickets"
            onClick={closeTickets}
            className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm"
          />

          {/* Modal */}
          <div
            className="
              relative
              z-10
              flex
              max-h-[95vh]
              w-full
              max-w-2xl
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0b1118]
              shadow-2xl
              shadow-black/50
            "
          >
            {/* Header */}
            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-white/10
                px-5
                py-4
                sm:px-6
              "
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Granville DJ Festival
                </p>

                <h2
                  id="tickets-modal-title"
                  className="mt-1 text-lg font-bold text-white sm:text-xl"
                >
                  Get Your Tickets
                </h2>
              </div>

              <button
                type="button"
                onClick={closeTickets}
                aria-label="Close tickets modal"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-slate-400
                  transition
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400/50
                "
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Eventbrite content */}
            <div className="min-h-[425px] overflow-y-auto bg-white">
              {!eventbriteLoaded && (
                <div className="flex min-h-[425px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-cyan-500" />

                    <p className="mt-4 text-sm text-slate-500">
                      Loading tickets...
                    </p>
                  </div>
                </div>
              )}

              <div
                id={CONTAINER_ID}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </TicketContext.Provider>
  );
}