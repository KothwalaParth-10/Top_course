import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
function Card(props) {
  let course = props.course
  let likedCourse = props.likedCourse;
  function clickHandler() {
    if (likedCourse.includes(course.id)) {
      props.setLikedCourse((prev) => {
        return prev.filter((cid) => {
          return cid !== course.id;
        })
      })
      toast.warning("liked removed")
    }
    else {
      if (likedCourse.length === 0) {
        props.setLikedCourse([course.id])
      }
      else {
        props.setLikedCourse((prev) => {
          return [...prev, course.id];
        })
      }
      toast.success("liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} alt=""></img>
        <div className="absolute right-2 bottom-[-12px] w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
          <button onClick={clickHandler}>
            {
              likedCourse.includes(course.id) ? (<FcLike className="text-[1.75rem]"></FcLike>) : (<FcLikePlaceholder className="text-[1.75rem]" />)
            }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">{course.title}</p>
        <p className="mt-2 text-white">
          {
             course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card;