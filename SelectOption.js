import { useState, useEffect } from "react";
import './SelectOption.css';
import useFetchTemplates from './useFetchTemplates';



//Stop here today
function SelectOption(currentPost:{category,name}){
	    const{jobs,loading,error}=useFetchTemplates();
          const [sort_, setSort] = useState({category:"All",order:"Default",date:"Default"});
          console.log(sort_);
          // const[sort,setArrange]=useState({jobs});
          // console.log(sort);



//Algorithm for sorting a function.....
   
     // 1.  Get the jobs/templates
     // 2.  put the template state inside a job for examples

          //...... const[templates,setTemplates]=useState({jobs});
          
        //incase this algorithm dosent work........
          //or use the for in loop
     //first define the variable Y..which represent the loop or the variable
     // for(variable in data):

 // for(Y  in jobs){
             //do this
            //}























	var _category= ["ALL"];
            let x;
            //The forr in lops stores the fetched data into the jobs
            //The job fetch was gotten from the api called
            for (x in jobs) {
         //The function of new set apeends thr all funcion into the existing array in the api
       _category = [...new Set([..._category ,...jobs[x].category])]
                //console.log(...jobs[x].name);
            }
            //setCategory(_category);
            //console.log(_category);


 
const langAndTools = [];
  if (_category) {
    langAndTools.push(..._category);
  }

  useEffect(()=>{
    
  })



  const onSelect_ = (e) => {
       const id =e.target.id;
       if(id =="date"){
        console.log("please lets have fun");
        //call a function...
       }else{
        console.log(id);
        //call a function that would fetch data or rerender 
        //based on the useeffect
       }
      
    }
  

 return(

<div className="form-inline-group">
<span>
  <select className="select" >
{langAndTools.map(_category=>(
    <option className="option"   
     key={_category}>{_category}</option>
 ))}
 </select>
</span>
<span>
  <label> {/*Order*/} </label> 
                <select className="select" id="order" onChange={onSelect_}>
                    <option>Default</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>


</span>
<span>
<label> {/*Order*/} </label>
                <select className="select" id="date" onChange={onSelect_}>
                    <option>Default</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
                </span>

 </div>
	)
}

export default  SelectOption;

//NEXT STEP......
//ORDER .......    ACENDING DESCENDING BASED ON ALPHABET AND DATE
//dependency for my useEffect script  includes the following

//  1......  the ascending id descending id the educatucation,health,ecommerce re-renders
//on each click on loads


// var points= [40,100,1,5,25,10];

//   poits.sort(funtion(a,b){
//     return a-b
//   })
//when the paramaters changes.... i want the items or the name consoled
//to be sorted based on the charactered changed

