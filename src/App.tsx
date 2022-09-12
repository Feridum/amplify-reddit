import React from 'react';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Routes} from "./routing/Routes";
import { Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
      <Authenticator.Provider>
          <AmplifyProvider>
            <Routes/>
          </AmplifyProvider>
      </Authenticator.Provider>
  );
}

export default App;
