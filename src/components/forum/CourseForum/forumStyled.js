import styled from 'styled-components';

const Forum = styled.div`
    display:flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    background: #F8F8F9;
    overflow-x: hidden;
`;
const ForumControls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px 12px;
    width: 100vw;
    position: fixed;
    height: 70px;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index:100;
    background-color: #fff;
    border-bottom: 1px solid #F8F8F9;
`;
const ForumHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 100px 0px 0px;

    position: absolute;
    width: 100vw;
    height: 205px;
    left: -1px;
    top: 0px;

    /* v2.0/Greys/Black(DarkMode) */
    background: #FFFFFF;

    /* v2.0/Greys/Grey3 */
    border: 1px solid #E6E6EA;
`;

const ForumBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 100vw;
    height: 930px;
    left: 0px;
    top: 290px;
`;

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 1672px;
    height: 40px;
    left: 124px;
    top: 18px;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 40px;`;
const ControlLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: static;
    width: 1284px;
    height: 40px;
    left: 0px;
    top: 0px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 0px 40px;
    & button {
        display:flex;
        align-items: center;
        justify-content: center;
        position: static;
        width: 113px;
        height: 42px;
        background: #E6E6EA;
        border-radius: 10px;
        margin: 0px 40px;
        border-style: none;
        & p {
            font-weight: bolder;
            margin: 0 8px;
        }
    }
`;

    const ControlRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;

    position: static;
    width: 348px;
    height: 40px;
    left: 1324px;
    top: 0px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px 0px;

    position: static;
    width: 1672px;
    height: 159px;
    left: 125px;
    top: 100px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
`;

const TitleActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;

    position: static;
    width: 434px;
    height: 156px;
    left: 1238px;
    top: 34.5px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 42px;
`;
const TitleDescription = styled.div`
    width: 1672px;
    height: 111px;
    left: 0px;
    top: 24px;
`;

const PinnedDiscussions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 24px;
    background: #FFFFFF;
    position: static;
    width: 1592px;
    height: 380px;
    left: 0px;
    top: 470px;
    margin: 40px 0px;
    border: 1px solid #E6E6EA;
    box-sizing: border-box;
    border-radius: 12px;
`;

const TrendingDiscussions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #FFFFFF;
    position: static;
    width: 1592px;
    height: 380px;
    left: 0px;
    top: 470px;
    margin: 20px 0px;
    border: 1px solid #E6E6EA;
    box-sizing: border-box;
    border-radius: 12px;
`;
export {
 Forum, ForumHeader, ForumBody, ForumControls,
 ControlLeft, ControlRight, ControlsContainer,
 TitleContainer, TitleDescription, TitleActions,
 PinnedDiscussions, TrendingDiscussions,
};
