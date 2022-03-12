import React from 'react';
import {
    CourseTitle, CoursesInfo, AllCoursesTitleDetails, CourseSearcher,
    AllCoursesContainer, CourseInfo,
   } from './coursesStyled';

const CourseModule = ({ actualCourse, modules }) => {
    console.log(actualCourse);
    const modulesList = modules.module;
    const moduleDesc = modules.moduleDescription;
    const questions = modules.totalQuestions;
    const quest = (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.1665 13.9993V17.1377L8.39734 13.9993H12.3332C13.2523 13.9993 13.9998 13.2518 13.9998 12.3327V5.66602C13.9998 4.74685 13.2523 3.99935 12.3332 3.99935H2.33317C1.414 3.99935 0.666504 4.74685 0.666504 5.66602L0.666504 12.3327C0.666504 13.2518 1.414 13.9993 2.33317 13.9993H3.1665ZM2.33317 5.66602H12.3332V12.3327H7.93567L4.83317 14.1943V12.3327H2.33317V5.66602Z" fill="#515561" />
        <path d="M15.6665 0.666016L5.6665 0.666016C4.74734 0.666016 3.99984 1.41352 3.99984 2.33268H13.9998C14.919 2.33268 15.6665 3.08018 15.6665 3.99935V10.666C16.5857 10.666 17.3332 9.91852 17.3332 8.99935V2.33268C17.3332 1.41352 16.5857 0.666016 15.6665 0.666016Z" fill="#515561" />
      </svg>

    );
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
          <CourseTitle>
            <CoursesInfo>
              <AllCoursesTitleDetails>
                <h1>{ actualCourse }</h1>
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
                <div className="course-questions">
                  { quest }
                  <p>123 preguntas</p>
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
                <div className="course-questions">
                  { quest }
                  <p>123 preguntas</p>
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
                <div className="course-questions">
                  { quest }
                  <p>123 preguntas</p>
                </div>
              </CourseInfo>
              { modulesList.map((module, key) => {
                  return (
                    <CourseInfo>
                      <div className="courses-container-box">
                        <div className="course-title-container">
                          <div className="module-index circle green-circle">
                            {key + 1}
                          </div>
                          <h3>{ module }</h3>
                        </div>
                      </div>
                      <div className="course-description-container">
                        <h4>{moduleDesc[key]}</h4>
                      </div>
                      <div className="course-questions">
                        { quest }
                        <p>{questions[key]}</p>
                        &nbsp;
                        <p> preguntas</p>
                      </div>
                    </CourseInfo>
    );
              })}
            </AllCoursesContainer>
          </CourseTitle>
        </div>
      );
    };

export default CourseModule;
