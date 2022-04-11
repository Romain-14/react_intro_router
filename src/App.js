import "./App.css";
import Home from './containers/Home';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Header from './Header';
import BlogPage from './BlogPage';
import Page404 from './containers/Page404';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blog/:id" element={<BlogPage/>}/>
                <Route path="*" element={<Page404/>}/>

            </Routes>
        </div>
    );
}

export default App;
