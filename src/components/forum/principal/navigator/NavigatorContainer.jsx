import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navigator from './navigatorStyled';
import angular from '../../../../../public/images/angular2.png';
import react from '../../../../../public/images/react2.png';
import spring from '../../../../../public/images/spring.png';
import js from '../../../../../public/images/js.png';
import azure from '../../../../../public/images/azure.png';
import git from '../../../../../public/images/git.png';

const NavigatorContainer = ({ actualCourse }) => {
  const [selected, setSelected] = useState(actualCourse);
  function getCourse(course) {
    setSelected(course);
  }
  const courses = [
    (
      <div className="courses-list">
        <button onClick={() => getCourse('Angular')} type="button">
          <img src={angular} alt="logo-tech" />
          <h5>Angular</h5>
        </button>
      </div>
    ),
    (
      <div className="courses-list">
        <button onClick={() => getCourse('React')} type="button">
          <img src={react} alt="logo-tech" />
          <h5>React JS</h5>
        </button>
      </div>
    ),
    (
      <div className="courses-list">
        <button onClick={() => getCourse('Spring')} type="button">
          <img src={spring} alt="logo-tech" />
          <h5>Spring</h5>
        </button>
      </div>
    ),
    (
      <div className="courses-list">
        <button onClick={() => getCourse('JavaScript')} type="button">
          <img src={js} alt="logo-tech" />
          <h5>JavaScript</h5>
        </button>
      </div>
    ),
    (
      <div className="courses-list">
        <button onClick={() => getCourse('Git')} type="button">
          <img src={git} alt="logo-tech" />
          <h5>Git</h5>
        </button>
      </div>
    ),
    (
      <div className="courses-list">
        <button onClick={() => getCourse('Azure')} type="button">
          <img src={azure} alt="logo-tech" />
          <h5>Azure</h5>
        </button>
      </div>
    ),
  ];

  if (selected === 'Angular') {
    courses[0] = (
      <div className="courses-list selected">
        <img src={angular} alt="logo-tech" />
        <h5>Angular</h5>
      </div>
    );
  }
  if (selected === 'React') {
    courses[1] = (
      <div className="courses-list selected">
        <img src={react} alt="logo-tech" />
        <h5>React</h5>
      </div>
    );
  }
  if (selected === 'Spring') {
    courses[2] = (
      <div className="courses-list selected">
        <img src={spring} alt="logo-tech" />
        <h5>Spring</h5>
      </div>
    );
  }
  if (selected === 'JavaScript') {
    courses[3] = (
      <div className="courses-list selected">
        <img src={js} alt="logo-tech" />
        <h5>JavaScript</h5>
      </div>
    );
  }
  if (selected === 'Git') {
    courses[4] = (
      <div className="courses-list selected">
        <img src={git} alt="logo-tech" />
        <h5>Git</h5>
      </div>
    );
  }
  if (selected === 'Azure') {
    courses[5] = (
      <div className="courses-list selected">
        <img src={azure} alt="logo-tech" />
        <h5>Azure</h5>
      </div>
    );
  }
  const principal = (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 22.04H22V0.0399998H0V22.04Z" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_659_41287" transform="scale(0.015625)" />
        </pattern>
        <image id="image0_659_41287" width="64" height="64" xlinkHref="data:image/png;base64,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" />
      </defs>
    </svg>

  );
  return (
    <div>
      <Navigator>
        <div className="navigator-selected">
          {principal}
          <h4>Página principal</h4>
        </div>
        <hr />
        <div className="navigator-unselected">
          <div className="unselected-title">
            <h4>Cursos</h4>
            {' '}
            <KeyboardArrowUpIcon />
          </div>
          { courses.map((course) => {
       return (
         course
       );
     })}
        </div>
      </Navigator>

    </div>
  );
};

export default NavigatorContainer;
