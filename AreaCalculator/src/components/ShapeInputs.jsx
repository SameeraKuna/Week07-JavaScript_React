function ShapeInputs({ shape, inputs, setInputs }) {
  if (!shape) return null

  return (
    <div style={{ marginTop: "20px" }}>
      {shape === "circle" && (
        <input
          type="number"
          placeholder="Enter radius"
          value={inputs.radius || ""}
          onChange={(e) =>
            setInputs({ radius: Number(e.target.value) })
          }
        />
      )}

      {shape === "square" && (
        <input
          type="number"
          placeholder="Enter side"
          value={inputs.side || ""}
          onChange={(e) =>
            setInputs({ side: Number(e.target.value) })
          }
        />
      )}

      {shape === "rectangle" && (
        <>
          <input
            type="number"
            placeholder="Enter length"
            value={inputs.length || ""}
            onChange={(e) =>
              setInputs({ ...inputs, length: Number(e.target.value) })
            }
          />
          <br />
          <input
            type="number"
            placeholder="Enter width"
            value={inputs.width || ""}
            onChange={(e) =>
              setInputs({ ...inputs, width: Number(e.target.value) })
            }
          />
        </>
      )}

      {shape === "triangle" && (
        <>
          <input
            type="number"
            placeholder="Enter base"
            value={inputs.base || ""}
            onChange={(e) =>
              setInputs({ ...inputs, base: Number(e.target.value) })
            }
          />
          <br />
          <input
            type="number"
            placeholder="Enter height"
            value={inputs.height || ""}
            onChange={(e) =>
              setInputs({ ...inputs, height: Number(e.target.value) })
            }
          />
        </>
      )}
    </div>
  )
}

export default ShapeInputs