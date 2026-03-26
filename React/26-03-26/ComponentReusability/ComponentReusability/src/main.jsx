/*import { createRoot } from 'react-dom/client'
import "./index.css" ;

function Header(){
  return (
    <nav>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png" alt="React" width={95}/>
      <h1 className="heading">Rules of JSX</h1> 
    </nav>
  )
}

function MainContent(){
  return(
     <ul className="listItem">
        <li>Everything needs one parent</li>
        <li>Every tag must me closed</li>
        <li>Use className, not class</li>
        <li>Use camelCase for attributes</li>
        <li>Use curly braces for JS</li>
    </ul>
  )
}

function Footer(){
  return <p className='footer'>Component Reusability........</p>
}

function JsxRules(){
  return (
    <div className="card">
      <Header />
      <MainContent />
      <Footer />
   </div>
  ) 
}

createRoot(document.getElementById('root'))
.render( <>
<JsxRules />
<JsxRules />
<JsxRules />
<JsxRules />
<JsxRules />
</>);*/

/*Let's build a child component inside the MainContent Component and render the info card for three times*/
import { createRoot } from 'react-dom/client'
import "./index.css" ;

function InfoCard(){
  return <h5>Hello I'm info for info card</h5>
}

function Header(){
  return (
    <nav>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png" alt="React" width={95}/>
      <h1 className="heading">Rules of JSX</h1> 
    </nav>
  )
}

function MainContent(){
  return(
     <ul className="listItem">
        <li>Everything needs one parent</li>
        <li>Every tag must me closed</li>
        <li>Use className, not class</li>
        <li>Use camelCase for attributes</li>
        <li>Use curly braces for JS</li>
        <InfoCard />
        <InfoCard />
        <InfoCard />
    </ul>
  )
}

function Footer(){
  return <p className='footer'>Component Reusability........</p>
}

function JsxRules(){
  return (
    <div className="card">
      <Header />
      <MainContent />
      <Footer />
   </div>
  ) 
}

createRoot(document.getElementById('root'))
.render( <>
<JsxRules />
<JsxRules />
<JsxRules />
<JsxRules />
<JsxRules />
</>);