import styled from 'styled-components';

const DiscussionBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 100vw;
    left: 40px;
    top: 145px;
`;

const Question = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 1592px;
background: #FFFFFF;
border: 1px solid #E6E6EA;
border-radius: 12px;
padding: 24px 32px;
`;
const ModuleTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    width: 142px;
    height: 28px;
    background: rgba(40, 237, 178, 0.15);
    border-radius: 5px;
    color: #09C598;
    margin: 10px 0;
`;
const QuestionTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px;
    border-bottom: solid 1px #E6E6EA;
    position: static;
    width: 1528px;
    height: 104px;
    & button{
        background: #FFFFFF;
        border: 1px solid #A5A8B3;
        box-sizing: border-box;
        border-radius: 10px;
        width: 185px;
        height: 42px;
        font-weight: 700;
    }
`;

const QuestionBody = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1528px;
    height: 298px;
    margin: 24px 0;
`;

const QuestionCode = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    width: 1528px;
    height: 158px;
    background: #F8F8F9;
    border: 1px solid #E6E6EA;
    box-sizing: border-box;
    border-radius: 12px;
`;

const QuestionFooter = styled.div`
    display:flex;
    width: 1528px;
    height: 42px;
    border-top: solid 1px #E6E6EA;
    padding: 10px 0;
`;
const AnswerHeader = styled.div`
    display:flex;
`;
const Answers = styled.div``;

export {
 DiscussionBody, Question, Answers, ModuleTitle, QuestionTitle,
 QuestionBody, QuestionCode, QuestionFooter, AnswerHeader,
};
