import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { faUserTie, faKey, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { login } from 'redux-modules/user/actions';
import Card from 'components/Card';
import InputField from 'components/InputField';
import Caution from 'components/Caution';
import Button from 'components/Buttons';
import { COLORS } from 'components/theme/colors';
import Logo from 'static/images/logo.png';

const Container = styled(Flex)`
  height: 100vh;
`;

const LoginFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100px;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

class Login extends Component {
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
    isLoginFetching: PropTypes.bool,
    login: PropTypes.func,
    isLoginError: PropTypes.bool,
    loginErrorMessage: PropTypes.string,
  };

  static defaultProps = {
    isLoginFetching: false,
    login: () => {},
    isLoginError: false,
    loginErrorMessage: undefined,
  };

  state = {
    email: '',
    password: '',
  };

  onUsernameFieldChange = value => {
    this.setState({ email: value });
  };

  onPasswordFieldChange = value => {
    this.setState({ password: value });
  };

  onSubmitLoginForm = e => {
    const { login: loginAction, history } = this.props;
    const { email, password } = this.state;

    e.preventDefault();

    const loginPayLoad = {
      email,
      password,
    };
    const { push } = history;

    loginAction(loginPayLoad, push);
  };

  render() {
    const { isLoginFetching, isLoginError, loginErrorMessage } = this.props;
    const { email, password } = this.state;

    return (
      <Container flexDirection="column" alignItems="center" justifyContent="center">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LogoImage src={Logo} alt="logo" />
        <Card
          overflow="hidden"
          minHeight="250px"
          maxWidth="350px"
          width={[5 / 6, 2 / 3, 1 / 2, 1 / 2]}
          p={3}
        >
          <LoginFormContainer>
            <InputField
              type="text"
              placeholder="الايميل الاكترونى"
              width={1}
              icon={faUserTie}
              value={email}
              onChange={this.onUsernameFieldChange}
              mb={2}
              autoComplete="on"
            />
            <InputField
              type="password"
              placeholder="كلمة المرور"
              width={1}
              icon={faKey}
              value={password}
              onChange={this.onPasswordFieldChange}
              mb={isLoginError ? 2 : 5}
              autoComplete="on"
            />
            {isLoginError && (
              <Caution
                bgColor={COLORS.LIGHT_RED}
                textColor={COLORS.WHITE}
                borderColorProp={COLORS.ERROR}
                mb={isLoginError ? 3 : 2}
              >
                {loginErrorMessage}
              </Caution>
            )}
            <Button
              type="submit"
              primary
              color={COLORS.BRANDING_BLUE}
              icon={faChevronLeft}
              onClick={this.onSubmitLoginForm}
              isLoading={isLoginFetching}
            >
              تسجيل الدخول
            </Button>
          </LoginFormContainer>
        </Card>
      </Container>
    );
  }
}
Login.displayName = 'Login';

const mapStateToProps = state => ({
  isLoginFetching: state.user.login.isFetching,
  isLoginError: state.user.login.isFail.isError,
  loginErrorMessage: state.user.login.isFail.message,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
