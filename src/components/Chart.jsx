const Chart = ({ data, type = "bar" }) => {
  // Simple chart component - siz bu yerga Chart.js yoki boshqa kutubxona qo'shishingiz mumkin
  return (
    <div className="chart-placeholder">
      <p>Chart komponenti - Chart.js yoki boshqa kutubxona bilan almashtiriladi</p>
      <div
        style={{
          height: "200px",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Chart: {type}
      </div>
    </div>
  )
}

export default Chart
