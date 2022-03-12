import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../../../../public/images/ob_logo.png';
import image from '../../../../../public/images/user_image.png';
import {
 HeaderLeft, HeaderRight, UserInfoContainer, Header,
} from './headerStyled';

const HeaderContainer = () => {
  return (
    <div>
      <Header>
        <HeaderLeft>
          <img src={logo} alt="logo" />
          <button type="button">
            <h5>OpenBootCamp</h5>
          </button>
        </HeaderLeft>
        <HeaderRight>
          <UserInfoContainer>
            <input type="search" placeholder="Buscar" />
            <div>
              <img src={image} alt="userimage" />
              <h5>UserName</h5>
            </div>
            <KeyboardArrowDownIcon />
          </UserInfoContainer>
        </HeaderRight>
      </Header>
    </div>
  );
};

export default HeaderContainer;
