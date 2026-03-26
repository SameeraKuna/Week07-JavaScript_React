import { createRoot } from 'react-dom/client'
import "./index.css" ;
function Greeting()
{
  return <h1 className='headingMain'>Hello Sameera...... Good Morning!</h1>
};

/*//As a Normal Function
function JsxRules(){
  return (
    <div className="card">
    <nav>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png" alt="React" width={95}/>
      <h1 className="heading">Rules of JSX</h1> 
    </nav>
     
    <ul className="listItem">
        <li>Everything needs one parent</li>
        <li>Every tag must me closed</li>
        <li>Use className, not class</li>
        <li>Use camelCase for attributes</li>
        <li>Use curly braces for JS</li>
    </ul>
   </div>
  ) 
};*/

//Using arrow function
const JsxRules = () =>{
  return (
    <div className="card">
    <nav>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png" alt="React" width={95}/>
      <h1 className="heading">Rules of JSX</h1> 
    </nav>
     
    <ul className="listItem">
        <li>Everything needs one parent</li>
        <li>Every tag must me closed</li>
        <li>Use className, not class</li>
        <li>Use camelCase for attributes</li>
        <li>Use curly braces for JS</li>
    </ul>
   </div>
  ) 
};


createRoot(document.getElementById('root'))
.render(
  <>
<Greeting/>
<JsxRules />

</>);