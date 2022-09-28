import React from 'react';
import './Course.css'
const Course = (props) => {
    const { courseName, classRoomNo, img, classDuration } = props.course
    const { addAllTime } = props
    return (
        <div className='course-info'>
            <img src={img} alt="" />
            <h2>Course Name: {courseName}</h2>
            <h3>Class Room No: {classRoomNo}</h3>
            <h4>Class Duration: {classDuration}h</h4>
            <button onClick={() => addAllTime(props)} className='btn-add'>Add class</button>
        </div>
    );
};

export default Course;