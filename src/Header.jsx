import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          {/* <Link to="/contact">Contact</Link> */}
          <a href="/contact">Contact</a>
      </nav>
    )
  }
}

export default Header