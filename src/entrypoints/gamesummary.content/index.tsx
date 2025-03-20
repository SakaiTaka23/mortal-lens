import ReactDOM from 'react-dom/client';
import { createIntegratedUi } from 'wxt/client';
import { defineContentScript } from 'wxt/sandbox';

import { App } from './App';

export default defineContentScript({
  matches: ['https://mjai.ekyu.moe/killerducky/*'],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
        return root;
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root?.unmount();
      },
    });

    // Call mount to add the UI to the DOM
    ui.mount();
  },
});
