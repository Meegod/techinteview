import './App.css';
import {useState,useEffect} from "react";
import TemplateviewComponent from './TemplateviewComponent';

function App() {

    const[templates,setTemplates]=useState([]);

    



    //when the computer loads it sould get all templates
   useEffect(()=>{

   getTemplates();
   },[]);

     //if the selected category equal to the certain category it should
     //log the category partaining to that selection.......




    const getTemplates = async ()=>{
      const targetUrl='https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'

       const response= await fetch(targetUrl);
       const data= await response.json();
      console.log(data);
       setTemplates(data);
    }


  return (
    <div className="App">

  {templates.map(template=>(
        <TemplateviewComponent temp={template} key={template.name}/>

        ))}















    </div>
  );
}
//Use select option to fetch all the categories and attached an onclick value
// that fetch directly from  the api without stress.......

export default App;
