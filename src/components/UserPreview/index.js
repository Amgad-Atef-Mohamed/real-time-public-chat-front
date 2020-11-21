import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { COLORS, COLORS_VALUES } from 'components/theme/colors';
import Image from 'components/Image';
import Text from 'components/Text';

const UserBlockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  min-width: 200px;
`;

const UserName = styled(Text)`
  color: ${props => props.theme.colors.disabled};
  font-weight: ${props => props.theme.fontWeights.NORMAL};
  margin: 0;
`;

const FlexContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UserPreview = ({ photo, name }) => (
  <UserBlockContainer>
    <Image
      bgColor={COLORS_VALUES[COLORS.DISABLED]}
      src={photo}
      alt="user"
      id="user-img--preview"
      radius={30}
      name={name}
      ml={3}
    />
    <FlexContainer>
      <UserName>{name}</UserName>
    </FlexContainer>
  </UserBlockContainer>
);

UserPreview.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
};

UserPreview.defaultProps = {
  photo: undefined,
};

export default UserPreview;
