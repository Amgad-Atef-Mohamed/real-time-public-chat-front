import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { width } from 'styled-system';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { COLORS, COLORS_VALUES } from 'components/theme/colors';
import { Subheading } from 'components/Text/BackwardTypography';
import DropDown from 'components/DropDown';
import { ShimmerEffect, Rect, Circle } from 'components/ShimmerEffect';
import { NoAnimationFlex } from 'components/ShimmerEffect/NoAnimationContainer';
import UserPreview from 'components/UserPreview';
import Image from 'components/Image';
import Logo from 'static/images/logo.png';

const HeaderStyle = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.greyDark};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid ${props => props.theme.colors.greyLight};
  display: flex;
  flex-direction: row-reverse;
  height: 10vh;
  justify-content: space-between;
  z-index: 2;
  width: calc(100% - 0px);
`;

const HeaderLogo = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors.greyDark};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${width};
  padding: 0;
  position: relative;
  border-left: 1px solid ${props => props.theme.colors.greyLight};
`;

const HeaderLogoImage = styled.img`
  width: calc(100% - 25px);
`;

const UserName = styled(Subheading)`
  color: ${props => props.theme.colors.disabled};
  font-weight: ${props => props.theme.fontWeights.NORMAL};
  margin: 0 ${props => props.theme.space[3]}px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfoContainerLoading = styled(NoAnimationFlex)`
  display: flex;
  align-items: center;
`;

const UserPhotoLoading = styled(Circle)`
  display: flex;
  align-items: center;
`;

const UserNameLoading = styled(Rect)`
  display: flex;
  align-items: center;
  margin-left: ${props => props.theme.space[3]}px;
`;

const Header = props => {
  const { onLogoClick, logout, user } = props;
  const userName = user.name;
  let userDetails;

  if (userName) {
    const items = [
      {
        component: <UserPreview name={userName} showImage={false} />,
      },
      {
        isDivider: true,
      },
      {
        icon: faSignOutAlt,
        text: 'تسجيل الخروج',
        onClick: logout,
      },
    ];

    userDetails = (
      <DropDown
        items={items}
        component={
          <Fragment>
            <Image
              alt="admin"
              bgColor={COLORS_VALUES[COLORS.DISABLED]}
              showImage={false}
              radius={30}
              name={userName}
            />
            <UserName>{userName}</UserName>
          </Fragment>
        }
      />
    );
  } else {
    userDetails = (
      <ShimmerEffect>
        <UserInfoContainerLoading>
          <UserPhotoLoading />
          <UserNameLoading />
        </UserInfoContainerLoading>
      </ShimmerEffect>
    );
  }

  return (
    <HeaderStyle>
      <HeaderLogo width={['35px', '75px', '75px', '75px', '75px']} onClick={onLogoClick}>
        <HeaderLogoImage src={Logo} alt="logo" />
      </HeaderLogo>
      <UserInfoContainer>{userDetails}</UserInfoContainer>
    </HeaderStyle>
  );
};

Header.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
