import React from 'react';
import moment from 'moment';
import './message.css';
import { Flex } from '@rebass/grid';

export default function MessageCard(props) {
  const { data } = props;
  console.log('data', data)
  const friendlyTimestamp = moment(data.timestamp).format('llll');
  return (
    <Flex width={1} flexDirection={data.isMine ? 'row-reverse' : 'row'} key={data._id}>
      <div className={['message', `${data.isMine ? 'mine' : ''}`].join(' ')}>
        <div className="timestamp">{friendlyTimestamp}</div>

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            <span className={data.isMine ? 'username-is-mine-color' : 'username-color'}>
              {data.name}
            </span>
            <div>{data.message}</div>
          </div>
        </div>
      </div>
    </Flex>
  );
}
