import React from 'react';
import './App.css';

import bg from './assets/layered-waves-haikei.svg' 
import Navbar from './components/Navbar';

type Props = {
  // declare your component's props interface here
}

type State = {
  // declare your component's state interface here
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // initialize your component's state here
    };
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: '#ffc844'}}>
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <h1 style={{ fontSize: '5rem', fontWeight: 'bold', margin: '0', color: '#ffc844' }}
              data-testid="title">
              Title
            </h1>
            <h2 style={{ fontSize: '2rem', fontWeight: 'normal', margin: '1rem 0' }}
              data-testid="subtitle">
              Subtitle, Tag Line and all that jazz.
            </h2>
          </div>
        </div>
        Hello
      </div>
    );
  }
}


export default App;
