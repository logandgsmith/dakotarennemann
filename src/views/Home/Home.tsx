import React from 'react';
import logo from '../../logo.svg';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    <div>
      This is just text I'm putting here for testing webhooks used to automate the build process
    </div>
    </div>
  );
}

export default Home;
