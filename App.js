import { useState, useEffect } from "react";
import TemplateviewComponent from "./TemplateviewComponent";
import Body from './Body';
import Header from './Header';
import useFetchTemplates from './useFetchTemplates';
import './App.css';


import axios from "axios";

 function App() {
    const{jobs,loading,error}=useFetchTemplates();
    console.log("i am a job",jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost,indexOfLastPost);
  console.log(currentPosts);

  return (
    <div className="App">
       <Header/>

{/*loading && <h1 className="loading">Loading.....</h1>}*/}



              

      {currentPosts.map((currentPost) => (
        <TemplateviewComponent
          currentPost={currentPost}
          key={currentPost.name}
        />
      ))}

    </div>
  );
}
export default App;
