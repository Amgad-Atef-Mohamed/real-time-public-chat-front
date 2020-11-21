import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';
import { COLORS } from 'components/theme/colors';
import InputField from 'components/InputField';
import Button from 'components/Buttons';
import MessageCard from 'components/MessageCard';
import './chat.css';

const { DISABLED, BRANDING_GREEN } = COLORS;

const Chat = props => {
  const {
    user,
    message,
    messages,
    isSendMessageFetching,
    handleChangeMessage,
    sendMessage,
  } = props;

  return (
    <Flex flexDirection="column" height="100%" flexWrap="wrap" width={[1, 1, 1, 1]}>
      <div className="messenger">
        <div className="scrollable sidebar">
          <div className="message-list">
            <div className="message-list-container">
              {messages.map(sentMessage => (
                <MessageCard
                  data={{
                    message: sentMessage.message,
                    timestamp: sentMessage.createdAt,
                    isMine: user.name === sentMessage.name,
                    name: sentMessage.name
                  }}
                />
              ))}
              {/* <Flex width={[1, 1, 1, 1]} flexWrap="wrap" flexDirection="row" px={1} mb={2}> */}
              <InputField
                type="text"
                placeholder="محتوي الرسالة"
                borderColor={DISABLED}
                width={1}
                value={message}
                onChange={val => handleChangeMessage('message', val)}
                mb={2}
                autoComplete="on"
              />
              <Flex flexDirection="row-reverse" width={1}>
                <Button
                  primary
                  reverse
                  color={BRANDING_GREEN}
                  onClick={sendMessage}
                  disabled={!message}
                  isLoading={isSendMessageFetching}
                >
                  Send
                </Button>
              </Flex>
              {/* </Flex> */}
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
};
Chat.displayName = 'Chat';

Chat.propTypes = {
  user: PropTypes.shape({}),
  message: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({})),
  isSendMessageFetching: PropTypes.bool,
  handleChangeMessage: PropTypes.func,
  sendMessage: PropTypes.func,
};

Chat.defaultProps = {
  user: PropTypes.shape({}),
  message: '',
  messages: [],
  isSendMessageFetching: false,
  handleChangeMessage: () => {},
  sendMessage: () => {},
};

export default Chat;
