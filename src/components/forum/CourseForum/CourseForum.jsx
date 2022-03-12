import React from 'react';
import { ThumbUp } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
 Forum, ForumBody, ForumControls, ForumHeader,
 ControlsContainer, ControlLeft, ControlRight,
 TitleContainer, TitleDescription, TitleActions,
 TrendingDiscussions, PinnedDiscussions,
} from './forumStyled';
import image from '../../../../public/images/user_image.png';
import icon from '../../../../public/images/AngularIcon.png';
import { UserInfoContainer } from '../principal/header/headerStyled';

const CourseForum = () => {
  const quest = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.1665 13.9993V17.1377L8.39734 13.9993H12.3332C13.2523 13.9993 13.9998 13.2518 13.9998 12.3327V5.66602C13.9998 4.74685 13.2523 3.99935 12.3332 3.99935H2.33317C1.414 3.99935 0.666504 4.74685 0.666504 5.66602L0.666504 12.3327C0.666504 13.2518 1.414 13.9993 2.33317 13.9993H3.1665ZM2.33317 5.66602H12.3332V12.3327H7.93567L4.83317 14.1943V12.3327H2.33317V5.66602Z" fill="#515561" />
      <path d="M15.6665 0.666016L5.6665 0.666016C4.74734 0.666016 3.99984 1.41352 3.99984 2.33268H13.9998C14.919 2.33268 15.6665 3.08018 15.6665 3.99935V10.666C16.5857 10.666 17.3332 9.91852 17.3332 8.99935V2.33268C17.3332 1.41352 16.5857 0.666016 15.6665 0.666016Z" fill="#515561" />
    </svg>
  );
  const goBack = (
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9999 6.99997L4.41394 6.99997L9.70694 1.70697L8.29294 0.292969L0.585938 7.99997L8.29294 15.707L9.70694 14.293L4.41394 8.99997L18.9999 8.99997L18.9999 6.99997Z" fill="#121625" />
    </svg>
  );
  const follow = (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.294 8.792L15.994 13.084L14.702 11.792L13.288 13.206L15.994 15.91L21.706 10.208L20.294 8.792ZM4 8.5C4 10.78 5.72 12.5 8 12.5C10.28 12.5 12 10.78 12 8.5C12 6.22 10.28 4.5 8 4.5C5.72 4.5 4 6.22 4 8.5ZM10 8.5C10 9.678 9.178 10.5 8 10.5C6.822 10.5 6 9.678 6 8.5C6 7.322 6.822 6.5 8 6.5C9.178 6.5 10 7.322 10 8.5ZM4 18.5C4 16.846 5.346 15.5 7 15.5L9 15.5C10.654 15.5 12 16.846 12 18.5L12 19.5L14 19.5L14 18.5C14 15.743 11.757 13.5 9 13.5L7 13.5C4.243 13.5 2 15.743 2 18.5L2 19.5L4 19.5L4 18.5Z" fill="#32D5A4" />
    </svg>
  );
  const question = (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0.5L2 0.5C0.897 0.5 4.29377e-10 1.397 9.57361e-10 2.5L6.70153e-09 14.5C7.22951e-09 15.603 0.897 16.5 2 16.5L5 16.5L5 20.267L11.277 16.5L18 16.5C19.103 16.5 20 15.603 20 14.5L20 2.5C20 1.397 19.103 0.5 18 0.5ZM18 14.5L10.723 14.5L7 16.733L7 14.5L2 14.5L2 2.5L18 2.5L18 14.5Z" fill="white" />
      <path d="M9 12.5L11 12.5L11 9.5L14 9.5L14 7.5L11 7.5L11 4.5L9 4.5L9 7.5L6 7.5L6 9.5L9 9.5L9 12.5Z" fill="white" />
    </svg>
  );
  const setIcon = (
    <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 20.5L8 18.5L8 15.5L13 15.5C13.553 15.5 14 15.053 14 14.5L14 12.914C14 12.388 13.786 11.872 13.414 11.5L12 10.086L12 6.5C12.553 6.5 13 6.053 13 5.5L13 2.5C13 1.397 12.103 0.5 11 0.5L3 0.5C1.897 0.5 1 1.397 1 2.5L1 5.5C1 6.053 1.448 6.5 2 6.5L2 10.086L0.586 11.5C0.213 11.872 -1.61785e-09 12.388 -1.68944e-09 12.914L-1.90528e-09 14.5C-1.98053e-09 15.053 0.448 15.5 1 15.5L6 15.5L6 18.5L7 20.5ZM3 2.5L11 2.5L11 4.5L3 4.5L3 2.5ZM2 12.914L3.707 11.207C3.895 11.02 4 10.766 4 10.5L4 6.5L10 6.5L10 10.5C10 10.766 10.105 11.02 10.293 11.207L12 12.914L12 13.5L2 13.5L2 12.914Z" fill="#121625" />
    </svg>
  );
  const greenSet = (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 8.65435V3.99935H9.16667V2.33268C9.16667 1.41268 8.42 0.666016 7.5 0.666016L2.5 0.666016C1.58 0.666016 0.833333 1.41268 0.833333 2.33268L0.833333 3.99935H2.5V8.65435L0.244167 10.0768C0.0875002 10.2327 0 10.4443 0 10.666L0 12.3327C0 12.7935 0.373333 13.166 0.833333 13.166H4.16667V15.666L5 17.3327L5.83333 15.666V13.166H9.16667C9.6275 13.166 10 12.7935 10 12.3327V10.666C10 10.4443 9.9125 10.2327 9.75583 10.0768L7.5 8.65435Z" fill="#32D5A4" />
    </svg>
  );
  const totalQuestions = 142;
  const actualCourse = 'Angular';
  const actualModule = 'Modulo 1';
  const courseDescription = 'Aprendiendo a utilizar el frameWork';
  const fixedDiscussion = {
    description: [
      'Descripcion de la discusion 1',
      'Descripcion de la discusion 2',
      'Descripcion de la discusion 3',
    ],
    likes: [200, 250, 120, 100, 90, 500],
    createdBy: ['User1', 'User2', 'User3', 'User4', 'User5', 'User6'],
    dayAgo: [18, 15, 10, 1, 3, 5],
  };
  const { description } = fixedDiscussion;
  return (
    <Forum>
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
      <ForumHeader>
        <TitleContainer>
          <img src={icon} alt="logo" />
          <TitleDescription>
            <div className="module-title">
              <h3>
                {actualCourse}
                /
                {actualModule}
              </h3>
            </div>
            <div className="module-title">
              <h5>{courseDescription}</h5>
            </div>
            <div className="title-question">
              {quest}
              {totalQuestions}
              <p>PREGUNTAS</p>
            </div>
          </TitleDescription>
          <TitleActions>
            <button type="button" className="btn-follow">
              {follow}
              <div style={{ width: '5px' }} />
              Siguiendo
            </button>
            <button type="button" className="btn-new-question">
              {question}
              <div style={{ width: '5px' }} />
              Añadir pregunta
            </button>
            <button type="button" className="btn-set">{setIcon}</button>
          </TitleActions>
        </TitleContainer>
      </ForumHeader>
      <ForumBody>
        <div className="body-container">
          <PinnedDiscussions>
            <div className="discussion-title">
              <h3>Discusiones fijadas</h3>
            </div>
            { description.map((discusion, key) => {
              return (
                <div className="discussion-selector">
                  <div className="discussion-like">
                    <ThumbUp style={{ color: '#09C598' }} />
                    <p>{fixedDiscussion.likes[key]}</p>
                  </div>
                  <div className="discussion-info">
                    <p className="moderator-info">
                      {greenSet}
                      &nbsp;
                      FIJADO POR MODERADOR
                    </p>
                    <h4>
                      {discusion}
                    </h4>
                    <p className="discussion-created">
                      Publicado por&nbsp;
                      {fixedDiscussion.createdBy[key]}
                    </p>
                  </div>
                  <div className="discussion-answers">
                    <img src={image} alt="answer-user" />
                    <img src={image} alt="answer-user" />
                    <div style={{ width: '8px' }} />
                    {quest}
                    3
                  </div>
                </div>

              );
            })}
          </PinnedDiscussions>
          <TrendingDiscussions>
            <div className="discussion-group ">
              <div className="discussion-group-title group-selected">
                <h3>En Tendencia</h3>
              </div>
              <div className="discussion-group-title">
                <h3>Más recientes</h3>
              </div>
            </div>
            { description.map((discusion, key) => {
              return (
                <div className="discussion-selector">
                  <div className="discussion-like">
                    <ThumbUp style={{ color: '#09C598' }} />
                    <p>{fixedDiscussion.likes[key]}</p>
                  </div>
                  <div className="discussion-info">
                    <p id="moderator-info">
                      {greenSet}
                      &nbsp;
                      FIJADO POR MODERADOR
                    </p>
                    <h4>
                      {discusion}
                    </h4>
                    <p id="discussion-created">
                      Publicado por&nbsp;
                      {fixedDiscussion.createdBy[key]}
                    </p>
                  </div>
                  <div className="discussion-answers">
                    <img src={image} alt="answer-user" />
                    <img src={image} alt="answer-user" />
                    <div style={{ width: '8px' }} />
                    {quest}
                    3
                  </div>
                </div>
              );
            })}
          </TrendingDiscussions>
        </div>
      </ForumBody>
    </Forum>
  );
};

export default CourseForum;
