import React from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;

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
                <Card key={courseData.id} courseData={courseData}></Card>
               )) 
            }
        </div>
    )
}

export default Cards;