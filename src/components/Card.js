import React, { useState } from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) =>  {
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
   let course = props.courseData; 
    const [readMoreClicked, setReadMoreClicked] = useState(false);
    let description = course.description;
    
   function clickHandler(){
    //for when the course is already liked;
    if(likedCourses.includes(course.id)){
        setLikedCourses((prev) => prev.filter((cid) => cid != course.id));
        toast.warning("like removed");
    } 
    //for when the course is not liked;
    else{
        if(likedCourses == []){
            setLikedCourses([course.id]);
        } else {
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("liked Course")
    }
   }

   function readMoreHandler(){
    setReadMoreClicked(!readMoreClicked);
   }

    return(
        <div>
            <div>
                <img src={course.image.url} />
            </div>
            <div>
                <button onClick={clickHandler}>
                    {
                    likedCourses.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder/>) 
                    }
                </button>
            </div>
            <div>
                <p>
                    {course.title}
                </p>
                <p>
                    {
                        (course.length < 100)  ? (description) : (description.substring(0,100) + "...")
                    }
                    
                </p>
            </div>
        </div>
    )
}

export default Card;