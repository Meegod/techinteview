 
import Body from './Body';
// import Select from 'react-select'


 function TemplateviewComponent({
  currentPost: { category, name }
}) {




  const langAndTools = [];
  if (category) {
    langAndTools.push(...category);
  }
  console.log(langAndTools);
  const langAndTool =
    langAndTools[Math.floor(Math.random() * langAndTools.length)];
      <Select  langAndTool={langAndTool}/>


  return <div>
  <p>{langAndTool}</p>
  <p><b>{name}</b></p>

 </div>;
}



export default  TemplateviewComponent;
