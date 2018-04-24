import React from 'react';
import Header from '../Header';
import AboutMe from '../AboutMe';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <AboutMe />
        </main>
      </div>
    );
  }
}

export default App;