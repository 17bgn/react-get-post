import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get Request - string
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request - string
  const data = "hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //post Request - form
  const [formData, setFormData] = useState("");
  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="app">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br></br>
      <br></br>
      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>
      <br></br>
      <form onSubmit={postFormFromFrontend}>
        <label>SongName:</label>
        <br></br>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <br></br> <br></br>
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};

export default App;
