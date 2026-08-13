"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: {
        widgetType: string;
        eventId: string;
        iframeContainerId: string;
        iframeContainerHeight?: number;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

export default function EventbriteWidget() {
  const [eventbriteLoaded, setEventbriteLoaded] = useState(false);

  useEffect(() => {
    if (!eventbriteLoaded || !window.EBWidgets) return;

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: "1997096193475",
      iframeContainerId: "eventbrite-widget-container-1997096193475",
      iframeContainerHeight: 425,

      onOrderComplete: () => {
        console.log("Order complete!");
      },
    });
  }, [eventbriteLoaded]);

  return (
    <>
      <Script
        src="https://www.eventbrite.ca/static/widgets/eb_widgets.js"
        strategy="afterInteractive"
        onLoad={() => setEventbriteLoaded(true)}
      />

      <div id="eventbrite-widget-container-1997096193475" />
    </>
  );
}