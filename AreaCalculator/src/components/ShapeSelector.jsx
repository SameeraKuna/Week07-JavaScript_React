function ShapeSelector({ shape, setShape, resetInputs }) {
  return (
    <select
      value={shape}
      onChange={(e) => {
        setShape(e.target.value)
        resetInputs()
      }}
    >
      <option value="">Select Shape</option>
      <option value="circle">Circle</option>
      <option value="square">Square</option>
      <option value="rectangle">Rectangle</option>
      <option value="triangle">Triangle</option>
    </select>
  )
}

export default ShapeSelector