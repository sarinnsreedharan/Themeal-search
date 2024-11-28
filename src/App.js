import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [apiData, setAPiData] = useState({});

  const updateDebounceText = debounce(async (text) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`,
      );
      if (response.data) {
        setAPiData(response.data.meals[0]);
      }
    } catch (error) {
      console.log(error);
    }
  });

  function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  function handleInputChange(e) {
    updateDebounceText(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange}></input>
      {apiData !== null && <Card data={apiData} />}
    </div>
  );
}

export default App;
