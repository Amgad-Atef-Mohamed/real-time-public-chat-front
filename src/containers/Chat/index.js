import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage, getMessages } from 'redux-modules/chat/actions';
import Chat from 'components/Chat';

class ChatContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}),
    sendMessage: PropTypes.func,
    getMessages: PropTypes.func,
    isSendMessageFetching: PropTypes.bool,
    isSendMessageSuccess: PropTypes.bool,
    isSendMessageError: PropTypes.bool,
    messages: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    user: undefined,
    sendMessage: () => {},
    getMessages: () => {},
    isSendMessageFetching: false,
    isSendMessageSuccess: false,
    isSendMessageError: false,
    messages: [],
  };

  state = {
    message: '',
  };

  componentDidMount() {
    const { getMessages: getMessagesAction, history } = this.props;

    getMessagesAction(history.push);
  }

  resetSendMessageForm = () => {
    this.setState({
      message: '',
    });
  };

  handleChangeMessage = (type, message) => {
    this.setState({ [type]: message });
  };

  handleSendMessageAction = () => {
    const { sendMessage: sendMessageAction, user } = this.props;
    const { message } = this.state;

    sendMessageAction(message, user.name);
    this.resetSendMessageForm();
  };

  render() {
    const { user, isSendMessageFetching, isSendMessageError, messages } = this.props;
    const { message } = this.state;

    return (
      <Chat
        user={user}
        message={message}
        messages={messages}
        isSendMessageFetching={isSendMessageFetching}
        isSendMessageError={isSendMessageError}
        handleChangeSelect={this.handleChangeSelect}
        handleChangeMessage={this.handleChangeMessage}
        sendMessage={this.handleSendMessageAction}
      />
    );
  }
}
ChatContainer.displayName = 'ChatContainer';

const mapStateToProps = state => ({
  user: state.user.user,
  messages: state.chat.messages,
  isSendMessageFetching: state.chat.sendMessage.isFetching,
  isSendMessageError: state.chat.sendMessage.isFail.isError,
  isSendMessageSuccess: state.chat.sendMessage.isSuccess,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMessages,
      sendMessage,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
