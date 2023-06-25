import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(apiUrl){
    setLoading(true);
    try {
      const fetchedData = await fetch(apiUrl);
      const output = await fetchedData.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("something went wrong in fetching");
    }
    setLoading(false);

  }
  
  useEffect(() => {
    fetchData(apiUrl);
  }, [])


  return (
  <div>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <Filter filterData = {filterData}></Filter>
    </div>
    <div>
      
      {
        loading ? (<Spinner></Spinner>) : (<Cards courses = {courses}></Cards>)
      }
    </div>
  </div>
  );
};

export default App;
