

function Clock() {
  return (
    <div style={{textAlign : "center"}}>
        <p>{new Date().getDate()} . {new Date().getMonth()} . {new Date().getFullYear()}</p>
        <p>{new Date().getHours()} : {new Date().getMinutes()}</p>
    </div>
  )
}

export default Clock