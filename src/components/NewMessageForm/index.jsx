import React from 'react';

const NewMessageForm = ({
  newMessage,
  handleNewMessageChange,
  handleStartTyping,
  handleStopTyping,
  handleSendMessage
}) => {
  return (
    <div className="new-message-form">
      <form className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Aa"
          className="new-message-input-field"
          onKeyPress={handleStartTyping}
          onKeyUp={handleStopTyping}
        />
        <button
          type="submit"
          onClick={handleSendMessage}
          className="send-message-button"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default NewMessageForm;
