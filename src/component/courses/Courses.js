import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from '../course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    const [timeset, setTime] = useState([])
    const [breakTimeTotal, setBreakTime] = useState([])
    const addAllTime = (course) => {
        const newTime = [...timeset, course]
        setTime(newTime);
    }

    let total = 0;
    let breakTimePrevious = 0;
    for (const time of timeset) {
        total = total + parseInt(time.course.classDuration)
    }


    const addBreakTime = () => {
        breakTimePrevious = breakTimePrevious
    }


    const notify = () => toast("Successfully Finished Today's class!");
    return (
        <div className="container">
            <div className="course-container">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        addAllTime={addAllTime}

                    ></Course>)
                }
            </div>
            <div className="report-container">
                <div className='first-info-section'>
                    <h3>Name: Chayon Ghosh</h3>
                    <h5>Institute: Daffodil Internation University</h5>
                    <h5>Depertment: CSE</h5>
                </div>
                <div>
                    <h3>Add A Break</h3>
                    <div className='btn-set'>
                        <button onClick={() => addBreakTime}> 0.5h</button>
                        <button>1h</button>
                        <button>1.5h</button>
                        <button>2h</button>
                    </div>
                </div>
                <div>
                    <h3>Final Report</h3>
                    <div className='common-total'>
                        <h4>Total class Time:  {total}h</h4>
                    </div>
                    <div className='common-total'>
                        <h4>Break Time:{ }</h4>
                    </div>
                </div>
                <div>
                    <button onClick={notify} className='btn-report'>Todays Class Report</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Courses;