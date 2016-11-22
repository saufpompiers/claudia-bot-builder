'use strict';

module.exports = function alexaReply(botResponse, botName) {
  if (typeof botResponse === 'string')
    return {
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: botResponse
        },
        card: {
          type: 'Simple',
          title: botName,
          content: botResponse
        },
        shouldEndSession: false
      }
    };

  return botResponse;
};