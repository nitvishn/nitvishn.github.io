import './App.css';
import React from "react";
import { HashRouter } from 'react-router-dom';
import Main from "./components/MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Main></Main>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
