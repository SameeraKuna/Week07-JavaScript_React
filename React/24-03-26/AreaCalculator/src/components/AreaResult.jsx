function AreaResult({ shape, area }) {
  if (!area) return null

  return (
    <div>
      <h3>Shape Selected: {shape.toUpperCase()}</h3>
      <h3>Area: {area} sq units</h3>
    </div>
  )
}

export default AreaResult