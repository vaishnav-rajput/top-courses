import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) =>  {
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
   let course = props.courseData; 

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

    return(
        <div>
            <div>
                <img src={course.image.url} />
            </div>
            <div>
                <button onClick={clickHandler}>
                    {
                    likedCourses.includes(course.id) ? (<FcLike/>) : <FcLikePlaceholder/> 
                    }
                </button>
            </div>
            <div>
                <p>
                    {course.title}
                </p>
                <p>
                    {course.description}
                </p>
            </div>
        </div>
    )
}

export default Card;