import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    const [likedCourses, setLikedCourses] = useState([]);


    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    } 

    return (
        <div>
            {
               getCourses().map((courseData) => (
                <Card likedCourses={likedCourses} setLikedCourses={setLikedCourses} key={courseData.id} courseData={courseData}></Card>
               )) 
            }
        </div>
    )
}

export default Cards;