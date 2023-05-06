import React from 'react';
import ReactDOM from "react-dom/client";

export const render = (App: () => JSX.Element) => (element: HTMLElement | null): (() => void) => {
  const rootElement = ReactDOM.createRoot(element as HTMLElement);

  rootElement.render(<App />);

  return (): void => {
    if (element) {
      setTimeout(() => rootElement.unmount());
    } else {
      throw new Error('Need a component!');
    }
  };
}
