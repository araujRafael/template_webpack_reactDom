import React from "react"
import ReactDOM  from "react-dom"

const name = 'Rafael'

ReactDOM.render(
  <div>Olá {name}</div>,
  document.querySelector("#root")  
)