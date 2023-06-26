import React from "react";
import "../index.css";
const Filter = (props) =>{
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(categoryTitle){
        setCategory(categoryTitle);
    }
    return(
        <div>
            {
            filterData.map((data) => (
             <button className="filterBtn" onClick={() => filterHandler(data.title)} key={data.id}>{data.title}</button>)) 
            }   
        </div>
    )
}

export default Filter;