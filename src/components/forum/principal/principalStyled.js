import styled from 'styled-components';

const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: static;
    width: 1284px;
    height: 40px;
    left: 0px;
    top: 0px;
    margin: 0px 40px;
    & button {
        position: static;
        width: 185px;
        height: 42px;
        left: calc(50% - 185px/2 - 437.5px);
        top: -1px;
        background: #E6E6EA;
        border-radius: 10px;
        border: none;
        background: #F8F8F9;
        cursor: pointer;
        & h5{
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            margin: 0px 20px;
        }
    }
`;

const HeaderRight = styled.div`
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
    margin: 0px 40px;
`;
const UserInfoContainer = styled.div`
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
    margin: 0px 40px;
    
    & div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 10px 0 0;
        position: static;
        width: #fff;
        border-radius:91px;
        margin: 0 20px;
        background-color: #fff;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: row;
    position:absolute;
    width:100vw;
    top:70px;
`;

const ForumContainer = styled.div`
    flex:0.8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export {
 Body, HeaderLeft, HeaderRight, UserInfoContainer, ForumContainer,
};
