import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Router from "./route/router"

const App = () => {
  return (
    <div className="">
      <Router />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)