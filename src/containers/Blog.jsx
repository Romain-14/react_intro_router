import React, { Component } from "react";
import { Link } from 'react-router-dom'

let page = 2;

class Blog extends Component {
    render() {
        return (
            <>
                <h1>Welcome to my Blog</h1>
                <Link to={`./${page}`}>to page {page}</Link>
            </>
        );
    }
}

export default Blog;
