import React, { useState, useEffect } from "react";
import { Stage } from "./component/Stage";
import axios from "axios";
import { Section } from "./component/Section";
import { Info } from "./component/Info";

export const GlobalContext = React.createContext();

function App() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios.get("./chairs.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ count, setCount, price, setPrice }}>
        <Stage /> 
        <Info/>
        <div className="flex justify-center items-center mt-10">
          <Section chairs={data} section={"B"} />
          <Section chairs={data} section={"A"} />
          <Section chairs={data} section={"C"} />
        </div>
        <div className="flex justify-center items-center mt-5">
          <Section chairs={data} section={"D"} />
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
