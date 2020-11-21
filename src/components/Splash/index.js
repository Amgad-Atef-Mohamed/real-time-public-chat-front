import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import InfiniteLoadingBar from 'components/InfiniteLoadingBar';

const SplashContainer = styled(Flex)`
  height: 100vh;
`;

const Splash = () => (
  <SplashContainer
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    width={1}
    height="100"
  >
    <InfiniteLoadingBar width={300} />
  </SplashContainer>
);

Splash.propTypes = {
  logoUrl: PropTypes.string.isRequired,
};

export default Splash;
