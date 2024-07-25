import React from "react"
import useFetch from "../component/useFetch";

function App() {

  const { data, loading, error } = useFetch('http://localhost:8000/test/')

  if (loading) return console.log("loading...");
  if (error) return console.log(error);

  return (
    <>
      <div className="text-blue-500 text-3xl font-bold">
        hello react...
        {data}
      </div>
    </>
  )
}

export default App
