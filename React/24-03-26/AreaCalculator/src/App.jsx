import { useState } from "react"
import ShapeSelector from "./components/ShapeSelector"
import ShapeInputs from "./components/ShapeInputs"
import ShapeDisplay from "./components/ShapeDisplay"
import AreaResult from "./components/AreaResult"

function App() {
  const [shape, setShape] = useState("")
  const [inputs, setInputs] = useState({})
  const [area, setArea] = useState(null)

  const resetInputs = () => {
    setInputs({})
    setArea(null)
  }

  const calculateArea = () => {
    let result = 0

    switch (shape) {
      case "circle":
        result = Math.PI * inputs.radius * inputs.radius
        break
      case "square":
        result = inputs.side * inputs.side
        break
      case "rectangle":
        result = inputs.length * inputs.width
        break
      case "triangle":
        result = 0.5 * inputs.base * inputs.height
        break
      default:
        return
    }

    setArea(result.toFixed(2))
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Area Calculator</h1>

      <ShapeSelector
        shape={shape}
        setShape={setShape}
        resetInputs={resetInputs}
      />

      <ShapeInputs
        shape={shape}
        inputs={inputs}
        setInputs={setInputs}
      />
      <br />
      
      <ShapeDisplay
        shape={shape}
        inputs={inputs}
      />  

      <br />
      <button onClick={calculateArea}>Calculate Area</button>

      <AreaResult shape={shape} area={area} />
    </div>
  )
}

export default App