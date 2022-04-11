import React from "react";
import { useParams } from "react-router-dom";

function BlogPage () {
    let {id} = useParams();
    
    return (
        <>
            <div>Welcome to my BlogPage</div>
            <p> you are on the page number {id}</p>
        </>
    );
};

export default BlogPage;
