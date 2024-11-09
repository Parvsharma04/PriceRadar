import React from "react";
import SearchBar from "../components/search.jsx"; // Make sure this path is correct

const Home = () => {
  return (
    <>
      <div className="h-100% bg-[#6833ff] flex justify-center p-4">
        <div className="text-center">
          <h1 className="mb-6 md:font-bold text-6xl">Welcome to Mobile Price Comparator</h1>
          
          {/* Render the SearchBar component */}
          <SearchBar />
          
          <p className="mt-4 text-lg">Search for your favorite mobile and compare prices</p>
        </div>
      </div>
    </>
  );
};

export default Home;
