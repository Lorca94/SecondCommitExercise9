import React, { useState } from 'react';
import {
  Body, ForumContainer,
} from './principalStyled';
import HeaderContainer from './header/HeaderContainer';
import NavigatorContainer from './navigator/NavigatorContainer';
import CourseList from '../courses/CourseList';
import CourseModule from '../courses/CourseModule';

const Principal = (course) => {
  console.log(course);
  const [actualCourse] = useState('Angular');
  // const coursesLoad = useSelector(courses);
  // const dispatch = useDispatch();
  // const newCourse = useSelector(selectCourse);
  // console.log(newCourse);
  const courses = {
    courses: ['Angular', 'React', 'Spring', 'JavaScript', 'Git', 'Azure'],
    coursesDescription: ['Estudiando Angular', 'Estudiando React',
  'Estudiando Spring', 'Estudiando JavaScript', 'Estudiando GIT', 'Estudiando Azure'],
  };
  const modules = {
    module: ['Modulo 1', 'Modulo 2', 'Modulo 3', 'Modulo 4', 'Modulo 5', 'Modulo 6'],
    moduleDescription: ['Texto en Modulo1', 'Texto en Modulo2',
  'Texto en Modulo3', 'Texto en Modulo4', 'Texto en Modulo5', 'Texto en Modulo6'],
    totalQuestions: [111, 432, 543, 555, 666, 777],
  };
  // const topics = ['Discusion1','Discusion2','Discusión3','Discusión4','Discusion5'];
  // const question = [
  //  'Duda',
  // 'Aqui estaría toda la pregunta del usuario intentando rellenar un poquito de texto esto',
  // 'const codigo = duda del usuario'];
  // const answers = ['Aqui hay una respuesta a la question','import codigoDeAyuda from panas'];
  return (
    <div>
      <HeaderContainer />
      <Body>
        <div className="main">
          <div className="content">
            <NavigatorContainer course={actualCourse} coursesList={courses} />
            <ForumContainer>
              { actualCourse === '' ? <CourseList courses={courses} /> : <CourseModule actualCourse={actualCourse} modules={modules} /> }
            </ForumContainer>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Principal;
