import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <p>this is the navbar</p>
        <nav>
          <a href="/">experience</a>
          <a href="/">projects</a>
          <a href="/">just for fun</a>
        </nav>
      </div>
    )
  }
}

export default Navbar;