import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  ForumControls, ControlsContainer, ControlLeft, ControlRight,
} from '../CourseForum/forumStyled';
import { UserInfoContainer } from '../principal/header/headerStyled';
import image from '../../../../public/images/user_image.png';
import {
 DiscussionBody, Question, Answers, ModuleTitle, QuestionTitle, QuestionBody, QuestionCode,
 QuestionFooter, AnswerHeader,
} from './styledDiscussion';

const Discussions = () => {
  const orderedBy = (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00033 13.6673L7.33366 10.334H4.83366V0.333984H3.16699V10.334H0.666992L4.00033 13.6673ZM8.16699 3.66732H15.667V5.33398H8.16699V3.66732ZM8.16699 7.00065H14.0003V8.66732H8.16699V7.00065ZM8.16699 0.333984H17.3337V2.00065H8.16699V0.333984ZM8.16699 10.334H12.3337V12.0007H8.16699V10.334Z" fill="#121625" />
    </svg>
  );

  const answer = (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0.5L2 0.5C0.897 0.5 4.29377e-10 1.397 9.57361e-10 2.5L6.70153e-09 14.5C7.22951e-09 15.603 0.897 16.5 2 16.5L5 16.5L5 20.267L11.277 16.5L18 16.5C19.103 16.5 20 15.603 20 14.5L20 2.5C20 1.397 19.103 0.5 18 0.5ZM18 14.5L10.723 14.5L7 16.733L7 14.5L2 14.5L2 2.5L18 2.5L18 14.5Z" fill="white" />
      <path d="M9 12.5L11 12.5L11 9.5L14 9.5L14 7.5L11 7.5L11 4.5L9 4.5L9 7.5L6 7.5L6 9.5L9 9.5L9 12.5Z" fill="white" />
    </svg>
  );
  const goBack = (
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9999 6.99997L4.41394 6.99997L9.70694 1.70697L8.29294 0.292969L0.585938 7.99997L8.29294 15.707L9.70694 14.293L4.41394 8.99997L18.9999 8.99997L18.9999 6.99997Z" fill="#121625" />
    </svg>
  );
  const addIcon = (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 4L15 4L15 7L12 7L12 9L15 9L15 12L17 12L17 9L20 9L20 7L17 7L17 4ZM2 4C2 6.28 3.72 8 6 8C8.28 8 10 6.28 10 4C10 1.72 8.28 4.26367e-09 6 3.08962e-09C3.72 1.91556e-09 2 1.72 2 4ZM8 4C8 5.178 7.178 6 6 6C4.822 6 4 5.178 4 4C4 2.822 4.822 2 6 2C7.178 2 8 2.822 8 4ZM2 14C2 12.346 3.346 11 5 11L7 11C8.654 11 10 12.346 10 14L10 15L12 15L12 14C12 11.243 9.757 9 7 9L5 9C2.243 9 5.38181e-09 11.243 6.70153e-09 14L7.18021e-09 15L2 15L2 14Z" fill="#121625" />
    </svg>
  );

  const like = (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 19L3 19L3 6L2 6C0.896 6 -1.06809e-08 6.896 -1.23909e-08 8L-2.63306e-08 17C-2.80405e-08 18.104 0.896 19 2 19ZM18 6L11 6L12.122 2.632C12.554 1.337 11.59 -2.75173e-08 10.225 -2.42765e-08L10 -2.37423e-08L5 5.438L5 19L16 19L19.912 10.404C19.937 10.291 19.976 10.114 20 10L20 8C20 6.896 19.104 6 18 6Z" fill="white" />
    </svg>
  );
  const dislike = (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 -4.27361e-08L4.693 -1.11422e-08C3.864 -9.17401e-09 3.112 0.521 2.82 1.298L0.063 8.649C0.021 8.761 -1.37539e-08 8.88 -1.39397e-08 9L-1.70374e-08 11C-1.87458e-08 12.103 0.897 13 2 13L7.612 13L6.49 16.367C6.287 16.975 6.389 17.649 6.764 18.169C7.14 18.689 7.746 19 8.388 19L10 19C10.297 19 10.578 18.868 10.769 18.64L15.469 13L18 13C19.103 13 20 12.103 20 11L20 2C20 0.897 19.103 -4.53549e-08 18 -4.27361e-08ZM9.531 17L8.386 17L9.948 12.316C10.051 12.011 9.999 11.676 9.811 11.415C9.623 11.154 9.321 11 9 11L2 11L2 9.181L4.693 2L14 2L14 11.638L9.531 17ZM16 11L16 2L18 2L18.001 11L16 11Z" fill="#EC555E" />
    </svg>
  );
  const actualCourse = 'Angular';
  // const actualAnswers = 4;
  const actualModule = {
    module: 'Módulo 1',
    title: 'Título de la pregunta explicado por usuario',
    user: '@username',
    created: 24,
    text: 'Mensaje del usuario',
    code: 'Código escrito por el usuario',
    like: 120,
    dislike: 20,
  };
  const messages = {
    user: ['usuario1', 'usuario2', 'usuario3', 'usuario4'],
    created: [12, 13, 14, 15],
    message: [
      'Así lo he conseguido',
      'No encuentro la solución',
      'Todo es cuestión de hacer otro problema',
      'Ya lo tengo',
    ],
    solution: [
      'Solucion del usuario',
      'Solucion del usuario',
      'Solucion del usuario',
      'Solucion del usuario',
      'Solucion del usuario',
    ],
    likes: [300, 200, 100, 50],
    dislikes: [20, 10, 5, 1],
  };
  const actualMessage = 4;
  return (
    <div className="main">
      <ForumControls>
        <ControlsContainer>
          <ControlLeft>
            <button type="button">
              {goBack}
              <p> Volver</p>
            </button>
          </ControlLeft>
          <ControlRight>
            <UserInfoContainer>
              <input type="search" placeholder="Buscar" />
              <div>
                <img src={image} alt="userimage" />
                <h5>UserName</h5>
              </div>
              <KeyboardArrowDownIcon />
            </UserInfoContainer>
          </ControlRight>
        </ControlsContainer>
      </ForumControls>
      <DiscussionBody>
        <Question>
          <ModuleTitle>
            <h5>
              {actualCourse}
              /
              {actualModule.module}
            </h5>
          </ModuleTitle>
          <QuestionTitle>
            <div>
              <h2>{actualModule.title}</h2>
              <p className="discussion-created">
                Subido por
                {actualModule.user}
                &nbsp;
                hace
                {actualModule.created}
                &nbsp;
                días
              </p>
            </div>
            <button type="button">
              { addIcon }
              &nbsp;
              Seguir esta pregunta
            </button>
          </QuestionTitle>
          <QuestionBody>
            { actualModule.text }
            <QuestionCode>
              { actualModule.code }
            </QuestionCode>
          </QuestionBody>
          <QuestionFooter>
            <button className="btn-like" type="button">
              {like}
              &nbsp;
              <h4>{ actualModule.like }</h4>
            </button>
            <div style={{ width: '5px' }} />
            <button className="btn-dislike" type="button">
              {dislike}
              &nbsp;
              <h4>{ actualModule.like }</h4>
            </button>
            <div style={{ width: '5px' }} />
            <button className="btn-new-answer" type="button">
              { answer }
              &nbsp;
              Responder
            </button>
          </QuestionFooter>
        </Question>
        <div className="question-separator">
          <h4>
            {actualMessage}
            &nbsp;
            respuestas
          </h4>
          <button type="button">
            {orderedBy}
            Ordenar por
          </button>
        </div>
        <Answers>
          <Question>
            { messages.user.map((usuario, key) => {
              return (
                <div>
                  <AnswerHeader>
                    <img src={image} alt="userimage" />
                    <div>
                      <h4>{usuario}</h4>
                      Publicado hace&nbsp;
                      {messages.created[key]}
                      &nbsp;días
                    </div>
                  </AnswerHeader>
                  <QuestionBody>
                    {messages.message[key]}
                    <QuestionCode>
                      <p>{messages.solution[key]}</p>
                    </QuestionCode>
                  </QuestionBody>
                  <QuestionFooter>
                    <button className="btn-like" type="button">
                      {like}
                    &nbsp;
                      <h4>{ actualModule.like }</h4>
                    </button>
                    <div style={{ width: '5px' }} />
                    <button className="btn-dislike" type="button">
                      {dislike}
                    &nbsp;
                      <h4>{ actualModule.like }</h4>
                    </button>
                  </QuestionFooter>
                </div>
              );
            })}
          </Question>
        </Answers>
      </DiscussionBody>
    </div>
  );
};

export default Discussions;
