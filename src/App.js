import './App.css';
import React from "react";
import { HashRouter } from 'react-router-dom';
import Main from "./components/MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'
import ReactGA from 'react-ga';

const store = ConfigureStore();

ReactGA.initialize('G-C4ELPJLC7M');

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
