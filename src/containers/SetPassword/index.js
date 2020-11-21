import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { faUserTie, faKey, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { setPassword } from 'redux-modules/user/actions';
import Card from 'components/Card';
import InputField from 'components/InputField';
import Caution from 'components/Caution';
import Button from 'components/Buttons';
import { COLORS } from 'components/theme/colors';

const Container = styled(Flex)`
  height: 100vh;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class SetPasswordComponent extends Component {
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
    setPassword: PropTypes.func,
    isSetPasswordFetching: PropTypes.bool,
    isSetPasswordError: PropTypes.bool,
    setPasswordErrorMessage: PropTypes.string,
  };

  static defaultProps = {
    setPassword: () => {},
    isSetPasswordFetching: false,
    isSetPasswordError: false,
    setPasswordErrorMessage: undefined,
  };

  state = {
    password: '',
    confirmationPassword: '',
    OTP: '',
  };

  onFieldChange = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  onSubmitForm = e => {
    const { setPassword: setPasswordAction, history, location: { search } } = this.props;
    const { OTP, password, confirmationPassword } = this.state;
    const query = new URLSearchParams(search);
    e.preventDefault();

    const payLoad = {
      email: query.get('email'),
      OTP,
      password,
      confirmationPassword,
    };
    const { push } = history;

    setPasswordAction(payLoad, push);
  };

  render() {
    const { isSetPasswordFetching, isSetPasswordError, setPasswordErrorMessage } = this.props;
    const { OTP, password, confirmationPassword } = this.state;

    return (
      <Container flexDirection="column" alignItems="center" justifyContent="center">
        <Helmet>
          <title>Set Password</title>
        </Helmet>
        <Card
          overflow="hidden"
          minHeight="250px"
          maxWidth="350px"
          width={[5 / 6, 2 / 3, 1 / 2, 1 / 2]}
          p={3}
        >
          <FormContainer>
            <InputField
              type="number"
              placeholder="كود التامين"
              width={1}
              icon={faUserTie}
              value={OTP}
              onChange={value => this.onFieldChange('OTP', value)}
              mb={2}
              autoComplete="on"
            />
            <InputField
              type="password"
              placeholder="كلمة المرور"
              width={1}
              icon={faKey}
              value={password}
              onChange={value => this.onFieldChange('password', value)}
              mb={isSetPasswordError ? 2 : 5}
              autoComplete="on"
            />
            <InputField
              type="password"
              placeholder="تاكيد كلمة المرور"
              width={1}
              icon={faKey}
              value={confirmationPassword}
              onChange={value => this.onFieldChange('confirmationPassword', value)}
              mb={isSetPasswordError ? 2 : 5}
              autoComplete="on"
            />
            {isSetPasswordError && (
              <Caution
                bgColor={COLORS.LIGHT_RED}
                textColor={COLORS.WHITE}
                borderColorProp={COLORS.ERROR}
                mb={isSetPasswordError ? 3 : 2}
              >
                {setPasswordErrorMessage}
              </Caution>
            )}
            <Button
              type="submit"
              primary
              color={COLORS.BRANDING_BLUE}
              icon={faChevronLeft}
              onClick={this.onSubmitForm}
              isLoading={isSetPasswordFetching}
            >
              حفظ
            </Button>
          </FormContainer>
        </Card>
      </Container>
    );
  }
}
SetPasswordComponent.displayName = 'SetPasswordComponent';

const mapStateToProps = state => ({
  isSetPasswordFetching: state.user.setPassword.isFetching,
  isSetPasswordError: state.user.setPassword.isFail.isError,
  setPasswordErrorMessage: state.user.setPassword.isFail.message,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPassword,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SetPasswordComponent);
