import Cards from "./Cards";
import React from "react";

const Home = () => {
  return (
    <div className="App mainsection">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div
            className="flex flex-wrap -m-2"
            style={{
              overflow: "scroll",
              overflowY: "hidden",
              overflowX: "hidden",
            }}
          >
            <Cards />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
