import styled from 'styled-components';

const AllCourseTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 85px 0px 0px;

    position: static;
    width: 1277px;
    height: 247px;
    left: 0px;
    top: 0px;

    background: linear-gradient(99.9deg, #32D5A4 2.1%, #32D5D5 109.65%);

    /* v2.0/Greys/Grey3 */
    border: 1px solid #E6E6EA;
    box-sizing: border-box;
    border-radius: 12px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 20px 0px;
`;
const CoursesInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 24px 20px;
    position: static;
    height: 162px;
    left: 0px;
    top: 85px;
    background: #FFFFFF;
    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
`;

const AllCoursesTitleDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 1229px;
    height: 142px;
    left: 24px;
    top: 0px;
    flex: none;
    margin: 30px 0px;
`;

const CourseSearcher = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 1229px;
    height: 42px;
    left: 0px;
    top: 100px;
    border-radius: 12px;
    margin: 20px 0px;
    & input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 15px;
        position: static;
        width: 1056px;
        height: 42px;
        left: calc(50% - 1056px/2 - 86.5px);
        top: 0px;
        background: #F0F0F3;
        border: 1px solid #E6E6EA;
        box-sizing: border-box;
        border-radius: 8px;
        margin: 0px 14px;
    }
`;

const AllCoursesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 1277px;
    height: 790px;
    left: 0px;
    top: 267px;
    margin: 20px 0px;
`;

const CourseInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 243.4px;
    height: 250px;
    left: calc(50% - 243.4px/2 - 516.8px);
    top: 0px;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #E6E6EA;
    border-radius: 12px;
    margin: 0 10px 15px 0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

const CoursesSeparator = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 1277px;
    height: 250px;
    left: 0px;
    top: 540px;


    /* Inside auto layout */
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 20px 0px;
`;
const CourseTitle = styled.div`
display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 85px 0px 0px;

    position: static;
    width: 1277px;
    height: 247px;
    left: 0px;
    top: 0px;

    /* v2.0/Greys/Grey3 */
    border: 1px solid #E6E6EA;
    box-sizing: border-box;
    border-radius: 12px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 20px 0px;
    background: linear-gradient(91.73deg, #CD252A -0.63%, #E62A4D 13.74%, #AC1C50 97.95%);
`;
export {
 AllCourseTitle, CoursesInfo, AllCoursesTitleDetails,
 CourseSearcher, AllCoursesContainer, CourseInfo, CoursesSeparator, CourseTitle,
};
