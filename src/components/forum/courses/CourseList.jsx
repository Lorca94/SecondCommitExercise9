import React from 'react';
import {
 AllCourseTitle, CoursesInfo, AllCoursesTitleDetails, CourseSearcher,
 AllCoursesContainer, CourseInfo,
} from './coursesStyled';

const CourseList = ({ courses }) => {
  const coursesList = courses.courses;
  const separator = (
    <svg width="1229" height="1" viewBox="0 0 1229 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 -5.37213e-05L1229 0L1229 1L-4.37115e-08 0.999946L0 -5.37213e-05Z" fill="#E6E6EA" />
    </svg>
  );
  const general = (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.8335 0.333984H3.16683C1.88 0.333984 0.833496 1.38048 0.833496 2.66732V16.6673C0.833496 17.9541 1.88 19.0007 3.16683 19.0007H6.66683V23.3955L13.99 19.0007H21.8335C23.1203 19.0007 24.1668 17.9541 24.1668 16.6673V2.66732C24.1668 1.38048 23.1203 0.333984 21.8335 0.333984ZM21.8335 16.6673H13.3437L9.00016 19.2725V16.6673H3.16683V2.66732H21.8335V16.6673Z" fill="white" />
      <path d="M6.66683 6.16732H18.3335V8.50065H6.66683V6.16732ZM6.66683 10.834H14.8335V13.1673H6.66683V10.834Z" fill="white" />
    </svg>

  );
  return (
    <div>
      <AllCourseTitle>
        <CoursesInfo>
          <AllCoursesTitleDetails>
            <h1>Todos los cursos disponibles</h1>
            { separator }
            <CourseSearcher>
              <input type="search" id="search-courses" placeholder="Buscar Curso" value="" />
            </CourseSearcher>
          </AllCoursesTitleDetails>
        </CoursesInfo>
        <AllCoursesContainer>
          <CourseInfo>
            <div className="course-container-green">
              <div className="course-title-container">
                <div className="circle green-circle">
                  {general}
                </div>
                <h3>General</h3>
              </div>
            </div>
            <div className="course-description-container">
              <h4>Dudas generales</h4>
            </div>
          </CourseInfo>
          <CourseInfo>
            <div className="course-container-red">
              <div className="course-title-container">
                <div className="circle red-circle">
                  {general}
                </div>
                <h3>Errores</h3>
              </div>
            </div>
            <div className="course-description-container">
              <h4>Errores</h4>
            </div>
          </CourseInfo>
          <CourseInfo>
            <div className="course-container-blue">
              <div className="course-title-container">
                <div className="circle blue-circle">
                  {general}
                </div>
                <h3>Proyectos</h3>
              </div>
            </div>
            <div className="course-description-container">
              <h4>Proyectos</h4>
            </div>
          </CourseInfo>
          { coursesList.map((course, key) => {
              return (
                <CourseInfo>
                  <div className="courses-container-box">
                    <div className="course-title-container">
                      <div className="module-index circle green-circle">
                        {key + 1}
                      </div>
                      <h3>{ course }</h3>
                    </div>
                  </div>
                  <div className="course-description-container">
                    <h4>{courses.coursesDescription[key]}</h4>
                  </div>
                </CourseInfo>
);
          })}
        </AllCoursesContainer>
      </AllCourseTitle>
    </div>
  );
};

export default CourseList;
