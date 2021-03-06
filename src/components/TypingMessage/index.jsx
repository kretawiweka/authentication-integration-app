import React from 'react';
import TypingAnimation from '../TypingAnimation';

const TypingMessage = ({ user }) => {
  return (
    <div className="typing-message">
      <div className="message-item">
        <div className="message-avatar-container">
          <img
            src={user.picture}
            alt={user.name}
            className={'message-avatar'}
          ></img>
        </div>

        <TypingAnimation></TypingAnimation>
      </div>
    </div>
  );
};

export default TypingMessage;
