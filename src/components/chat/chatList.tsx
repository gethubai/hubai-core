import React, { useEffect, useRef } from 'react';

type ChatListProps = {
  children: React.ReactNode;
  messagesCount: number;
  onMessageScrollBehavior?: 'scrollToTop' | 'scrollToBottom' | 'none';
};

export function ChatList({
  children,
  messagesCount,
  onMessageScrollBehavior,
}: ChatListProps) {
  const chatListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interactiveList = chatListRef.current;

    const handleScroll = () => {
      if (interactiveList) {
        const { scrollHeight } = interactiveList;
        interactiveList.scrollTop =
          onMessageScrollBehavior === 'scrollToTop' ? 0 : scrollHeight;
      }
    };

    if (onMessageScrollBehavior !== 'none') handleScroll();
  }, [messagesCount, onMessageScrollBehavior]);

  return (
    <div id="chat-list" className="chat-list" ref={chatListRef}>
      <div className="monaco-list">
        <div className="monaco-scrollable-element">
          <div className="monaco-list-rows">{children}</div>
        </div>
      </div>
    </div>
  );
}
