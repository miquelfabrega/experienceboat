import 'react';

// Custom scroll-driven animation attributes used in lieu of framer-motion
declare module 'react' {
  interface HTMLAttributes<T> {
    whileInView?: string | Record<string, unknown>;
    viewport?: { once?: boolean; margin?: string };
  }
}

// Regiondo booking widget custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'booking-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'widget-id': string },
        HTMLElement
      >;
    }
  }
}
