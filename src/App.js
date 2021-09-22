import { useState } from "react";
import Card from "./Components/Card";
import "./styles.css";
import InputArea from "./Components/InputArea";
const axios = require("axios");

export default function App() {
  //Handling States
  const [posts, changePosts] = useState([]);
  const [city, setCity] = useState("");

  //The api key
  const api_key = "23491658-d599fc05a722eb26590dc0b54";

  //Getting value of Input
  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  //Calling api on button click
  function handleClick() {
    const url = "https://pixabay.com/api/?key=" + api_key + "&q=" + city;
    axios.get(url).then((res) => {
      // handle success
      const response = res.data.hits;
      changePosts(response);
      setCity("");
    });
  }

  return (
    <div className="App">
      <InputArea
        city={city}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <div className="container">
        {posts.map((post) => (
          <Card post={post} />
        ))}
      </div>
    </div>
  );
}
