import React, { Component } from 'react';


type Props = {
  // declare your component's props interface here
}

type State = {
  // declare your component's state interface here
}

class Navbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <nav data-testid="navbar"  style={{position: 'fixed', backgroundColor: '#ffc844', width: "100vw", height: "4rem"}}>
        ProductTitle
      </nav>
    );
  }
}

export default Navbar;