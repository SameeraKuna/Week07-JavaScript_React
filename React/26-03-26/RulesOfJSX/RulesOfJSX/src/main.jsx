import {createRoot} from "react-dom/client";
import "./index.css";
createRoot(document.getElementById("root")).render(
    <>
   <div className="card">
    <nav>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png" alt="React" />
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
    </>
);