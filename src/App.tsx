import { Provider } from '@ez-dux/react/lib/provider';
import React from 'react';

import { initStore } from './store';

function App(): React.ReactElement {
  return (
    <Provider createStore={initStore}>
      <div className="h-full">
        <header className="border-black h-20 p-1 flex align-center">
          <h6 className="text-gray-700 text-lg font-semibold my-auto p-4">
            React - Boilerplate
          </h6>
        </header>
        <div className="border-black h-screen p-4 bg-green-400">
          <p className="text-lg font-semibold">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </div>
        <footer className="bg-black h-40 p-6">
          <h6 className="text-white">Footer</h6>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
