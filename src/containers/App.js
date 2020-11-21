import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loadable from 'react-loadable';
import ls from 'local-storage';
import { createGlobalStyle } from 'styled-components';
import ROUTES from 'routes';
import { loginSuccess } from 'redux-modules/user/actions';
import { COOKIES_KEYS } from 'utils/constants';
import Layout from 'components/Layout';
import Splash from 'components/Splash';
import Loading from 'components/Loading';
import Logo from 'static/images/logo.png';
import { englishFont, arabicFont } from '../static/fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: english-font;
    src: url(${englishFont});
  }
  @font-face {
    font-family: arabic-font;
    src: url(${arabicFont});
  }

  input, textarea, select, button {
    font-family: 'english-font';

    :lang(ar) {
      font-family: 'arabic-font';
    }
  }

  body {
    font-family: 'english-font';
    background-color: ${props => props.theme.colors.greyDark};
    margin: 0;

    :lang(ar) {
      font-family: 'arabic-font';
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid ${props => props.theme.colors.greyDark};
    -webkit-text-fill-color: ${props => props.theme.colors.brandingOrange};
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.colors.greyLight} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  textarea {
    resize: none;
  }
`;

const LoginContainer = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
});

const registrationContainer = Loadable({
  loader: () => import('./Register'),
  loading: Loading,
});

const setPasswordContainer = Loadable({
  loader: () => import('./SetPassword'),
  loading: Loading,
});

const NotificationsContainer = Loadable({
  loader: () => import('./Chat'),
  loading: Loading,
});

class App extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({}),
    loginSuccess: PropTypes.func,
  };

  static defaultProps = {
    user: undefined,
    loginSuccess: () => {},
  };

  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { history, loginSuccess: loginSuccessAction } = this.props;
    const { PLAIN_USER } = COOKIES_KEYS;
    const { LOGIN, NOTIFICATIONS, REGISTER, SET_PASSWORD } = ROUTES;
    const isUserLoggedIn = ls.get(PLAIN_USER);
    const plainUser = ls.get(PLAIN_USER);
    const {
      location: { pathname },
    } = window;

    if (isUserLoggedIn) {
      const user = plainUser;

      loginSuccessAction(user);

      if ([LOGIN, REGISTER, SET_PASSWORD].includes(pathname)) {
        history.push(NOTIFICATIONS);

        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1500);
      }
    }

    if (![LOGIN, REGISTER, SET_PASSWORD].includes(pathname)) {
      history.push(pathname);

      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1500);
    } else {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1500);
    }
  }

  logout = () => {
    const { history } = this.props;
    const { LOGIN } = ROUTES;

    history.push(LOGIN);
  };

  render() {
    const { history, user } = this.props;
    const { isLoading } = this.state;
    const { REGISTER, SET_PASSWORD, LOGIN, NOTIFICATIONS } = ROUTES;

    let content;

    if (isLoading) {
      content = <Splash logoUrl={Logo} />;
    } else {
      content = (
        <Switch>
          <Route exact path={LOGIN} component={LoginContainer} />
          <Route exact path={REGISTER} component={registrationContainer} />
          <Route exact path={SET_PASSWORD} component={setPasswordContainer} />
          <Layout logout={this.logout} history={history} user={user}>
            <Switch>
              <Route exact path={NOTIFICATIONS} component={NotificationsContainer} />
              <Redirect to={NOTIFICATIONS} />
            </Switch>
          </Layout>
        </Switch>
      );
    }
    return (
      <>
        <GlobalStyle />
        {content}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loginSuccess }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
