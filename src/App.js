import React from "react";

import DynamicForm from "./components/dynamic-form/DynamicForm";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function showResults(values) {
  await sleep(500);
  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

function App() {
  return (
    <div className='container'>
      <h2 style={{ textAlign: "center" }}>IEP - 2020-10-11</h2>
      <DynamicForm onSubmit={showResults} />
    </div>
  );
}

export default App;
