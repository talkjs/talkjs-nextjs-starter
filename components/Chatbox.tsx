// Marks the file as a Next.js Client Component, so that it will only be rendered on the client,
// as the TalkJS JavaScript SDK, which the React SDK uses, can only run in the browser.
// See https://nextjs.org/docs/app/building-your-application/rendering/client-components
"use client";

import { useCallback } from 'react';
import Talk from 'talkjs';
import { Session, Chatbox } from '@talkjs/react';
import { getConversationId } from '@/utils/getConversationId';

function ChatboxUI() {
  const appId = process.env.NEXT_PUBLIC_TALKJS_APP_ID;
  if (!appId) throw new Error( 'Environment variable NEXT_PUBLIC_TALKJS_APP_ID is not defined. To fix this, add your TalkJS App ID to an .env file in the root of your project.');

  // Current user, replace with your own user data
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: 'michael',
        name: 'Michael',
        email: 'michael@example.com',
        photoUrl: 'https://talkjs.com/new-web/avatar-5.jpg',
        welcomeMessage: 'Hi!',
      }),
    []
  );

  const syncConversation = useCallback((session: Talk.Session) => {
    const conversationId = getConversationId() || 'new_conversation';
    const conversation = session.getOrCreateConversation(conversationId);

    // Other user, replace with your own user data
    const other = new Talk.User({
      id: 'alice',
      name: 'Alice',
      email: 'alice@example.com',
      photoUrl: 'https://talkjs.com/new-web/avatar-12.jpg',
      welcomeMessage: 'Hey, how are you?',
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    <Session appId={appId} syncUser={syncUser}>
      <Chatbox
        syncConversation={syncConversation}
        style={{ width: '100%', height: '500px' }}
      ></Chatbox>
    </Session>
  );
}

export default ChatboxUI;
