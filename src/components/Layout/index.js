import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import Header from 'components/Header';

const LayoutContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled(Flex)`
  width: 100%;
  background-color: ${props => props.theme.colors.greyMedium};
`;

const FlexContainer = styled(Flex)`
  flex-direction: row-reverse;
`;

const Layout = props => {
  const { children, history } = props;

  return (
    // <LayoutContainer>
    <>
      <Header
        onLogoClick={() => {
          history.push('/');
        }}
        {...props}
      />
      {/* <FlexContainer> */}
      <ContentContainer>{children}</ContentContainer>
      {/* </FlexContainer> */}
    </>
    // {/*// </LayoutContainer>*/}
  );
};

Layout.propTypes = {
  user: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

Layout.defaultProps = {
  user: undefined,
};

export default Layout;
