import { useState, useEffect } from "react";
import useFetchTemplates from './useFetchTemplates';
import SelectOption  from './SelectOption';

function Header(){


  //const cardContext_ = useContext(ServiceContext);
    //how is this stuf working...
  const{jobs,loading,error}=useFetchTemplates();
  const [currentPage, setCurrentPage] = useState(3);
  const [postsPerPage] = useState(1);
  const[category,setCategory]=useState([]);

 
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost,indexOfLastPost);
  console.log(currentPosts);

 

            

    return (

    	<div>
    		{currentPosts.map((currentPost) => (
        <SelectOption
          currentPost={currentPost}
          category={currentPost.category}
          key={currentPost.name}
        />
      ))}


    	</div>
          
         


    )

    
}

export default Header;

 