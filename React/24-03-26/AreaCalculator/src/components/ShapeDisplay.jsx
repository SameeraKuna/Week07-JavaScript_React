function ShapeDisplay({ shape, inputs }) {
  if (!shape) return null

  const strokeColor = "white"
  const fillOpacity = 0.85

  return (
    <div style={{ marginTop: "20px", background: "#1e1e1e", padding: "16px" }}>
      <svg width="320" height="260">

        {/* ARROW MARKER DEFINITION */}
        <defs>
            {/* LEFT arrow: < */}
            <marker
                id="arrowStart"
                markerWidth="10"
                markerHeight="10"
                refX="0"
                refY="5"
                orient="auto"
            >
                <path
                d="M10,0 L0,5 L10,10"
                fill="white"
                />
            </marker>

            {/* RIGHT arrow: > */}
            <marker
                id="arrowEnd"
                markerWidth="10"
                markerHeight="10"
                refX="10"
                refY="5"
                orient="auto"
            >
                <path
                d="M0,0 L10,5 L0,10"
                fill="white"
                />
            </marker>
        </defs>

        {/* ================= CIRCLE ================= */}
        {shape === "circle" && inputs.radius && (
          <>
            <circle
              cx="160"
              cy="130"
              r="60"
              fill="#5dade2"
              fillOpacity={fillOpacity}
              stroke={strokeColor}
              strokeWidth="2"
            />

            {/* Radius line */}
            <line
              x1="160"
              y1="130"
              x2="220"
              y2="130"
              stroke={strokeColor}
              strokeWidth="2"
              strokeDasharray="4"
              markerEnd="url(#arrowEnd)"
            />

            <text
              x="190"
              y="110"
              fill={strokeColor}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              r = {inputs.radius}
            </text>
          </>
        )}

        {/* ================= SQUARE ================= */}
        {shape === "square" && inputs.side && (
          <>
            <rect
              x="100"
              y="80"
              width="120"
              height="120"
              fill="#58d68d"
              fillOpacity={fillOpacity}
              stroke={strokeColor}
              strokeWidth="2"
            />

            {/* Side measurement */}
            <line
              x1="100"
              y1="60"
              x2="220"
              y2="60"
              stroke={strokeColor}
              strokeWidth="2"
              markerStart="url(#arrowStart)"
              markerEnd="url(#arrowEnd)"
            />

            <text
              x="160"
              y="45"
              fill={strokeColor}
              textAnchor="middle"
            >
              side = {inputs.side}
            </text>
          </>
        )}

        {/* ================= RECTANGLE ================= */}
        {shape === "rectangle" && inputs.length && inputs.width && (
          <>
            <rect
              x="80"
              y="100"
              width="160"
              height="80"
              fill="#ec7063"
              fillOpacity={fillOpacity}
              stroke={strokeColor}
              strokeWidth="2"
            />

            {/* Length */}
            <line
              x1="80"
              y1="80"
              x2="240"
              y2="80"
              stroke={strokeColor}
              strokeWidth="2"
              markerStart="url(#arrowStart)"
              markerEnd="url(#arrowEnd)"
            />

            <text
              x="160"
              y="65"
              fill={strokeColor}
              textAnchor="middle"
            >
              length = {inputs.length}
            </text>

            {/* Width */}
            <line
              x1="60"
              y1="100"
              x2="60"
              y2="180"
              stroke={strokeColor}
              strokeWidth="2"
              markerStart="url(#arrowStart)"
              markerEnd="url(#arrowEnd)"
            />

            <text
              x="40"
              y="140"
              fill={strokeColor}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              width = {inputs.width}
            </text>
          </>
        )}

        {/* ================= TRIANGLE ================= */}
        {shape === "triangle" && inputs.base && inputs.height && (
          <>
            {/* Triangle */}
            <polygon
              points="160,40 80,200 240,200"
              fill="#f4d03f"
              fillOpacity={fillOpacity}
              stroke={strokeColor}
              strokeWidth="2"
            />

            {/* HEIGHT STROKE */}
            <line
              x1="160"
              y1="40"
              x2="160"
              y2="200"
              stroke={strokeColor}
              strokeWidth="2"
              strokeDasharray="4"
            />

            <text
              x="170"
              y="120"
              fill={strokeColor}
              dominantBaseline="middle"
            >
              height = {inputs.height}
            </text>

            {/* BASE STROKE */}
            <line
              x1="80"
              y1="220"
              x2="240"
              y2="220"
              stroke={strokeColor}
              strokeWidth="2"
              markerStart="url(#arrowStart)"
              markerEnd="url(#arrowEnd)"
            />

            <text
              x="160"
              y="240"
              fill={strokeColor}
              textAnchor="middle"
            >
              base = {inputs.base}
            </text>
          </>
        )}
      </svg>
    </div>
  )
}

export default ShapeDisplay