import React from "react";
import "./Body.css";
import Tile from "./Tile";
import useWindowDimensions from "./Dimension";

const Body = () => {
  const { width } = useWindowDimensions();
  console.log(width);
  const marginBro = (width - 500) / 2;

  return (
    <>
      <div className="parent">
        <Tile width={500} color="violet" margin={marginBro} />
        <Tile width={400} color="indigo" margin={marginBro + 50} />
        <Tile width={300} color="blue" margin={marginBro + 100} />
        <Tile width={200} color="green" margin={marginBro + 150} />
        <Tile width={300} color="yellow" margin={marginBro + 100} />
        <Tile width={400} color="orange" margin={marginBro + 50} />
        <Tile width={500} color="red" margin={marginBro} />
      </div>
    </>
  );
};

export default Body;
