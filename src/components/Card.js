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
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
    </div>
    )
}

export default Card;