import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { faUserTie, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { register } from 'redux-modules/user/actions';
import Card from 'components/Card';
import InputField from 'components/InputField';
import Caution from 'components/Caution';
import Button from 'components/Buttons';
import { COLORS } from 'components/theme/colors';

const Container = styled(Flex)`
  height: 100vh;
`;

const RegisterFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Register extends Component {
  static propTypes = {
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
    register: PropTypes.func,
    isRegisterFetching: PropTypes.bool,
    isRegisterError: PropTypes.bool,
    registerErrorMessage: PropTypes.string,
  };

  static defaultProps = {
    register: () => {},
    isRegisterFetching: false,
    isRegisterError: false,
    registerErrorMessage: undefined,
  };

  state = {
    name: '',
    email: '',
  };

  onFieldChange = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  onSubmitForm = e => {
    const { register: registerAction, history } = this.props;
    const { name, email } = this.state;

    e.preventDefault();

    const payLoad = {
      name,
      email,
    };
    const { push } = history;

    registerAction(payLoad, push);
  };

  render() {
    const { isRegisterFetching, isRegisterError, registerErrorMessage } = this.props;
    const { name, email } = this.state;

    return (
      <Container flexDirection="column" alignItems="center" justifyContent="center">
        <Helmet>
          <title>Registration Form</title>
        </Helmet>
        <Card
          overflow="hidden"
          minHeight="250px"
          maxWidth="350px"
          width={[5 / 6, 2 / 3, 1 / 2, 1 / 2]}
          p={3}
        >
          <RegisterFormContainer>
            <InputField
              type="text"
              placeholder="أسم المستخدم"
              width={1}
              icon={faUserTie}
              value={name}
              onChange={value => this.onFieldChange('name', value)}
              mb={2}
              autoComplete="on"
            />
            <InputField
              type="email"
              placeholder="الايميل الاكترونى"
              width={1}
              icon={faUserTie}
              value={email}
              onChange={value => this.onFieldChange('email', value)}
              mb={2}
              autoComplete="on"
            />

            {isRegisterError && (
              <Caution
                bgColor={COLORS.LIGHT_RED}
                textColor={COLORS.WHITE}
                borderColorProp={COLORS.ERROR}
                mb={isRegisterError ? 3 : 2}
              >
                {registerErrorMessage}
              </Caution>
            )}
            <Button
              type="submit"
              primary
              color={COLORS.BRANDING_BLUE}
              icon={faChevronLeft}
              onClick={this.onSubmitForm}
              isLoading={isRegisterFetching}
            >
              تسجيل
            </Button>
          </RegisterFormContainer>
        </Card>
      </Container>
    );
  }
}
Register.displayName = 'Register';

const mapStateToProps = state => ({
  isRegisterFetching: state.user.register.isFetching,
  isRegisterError: state.user.register.isFail.isError,
  registerErrorMessage: state.user.register.isFail.message,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      register,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
