export default function MessageBubble({ sender, content, time, isSelf }) {
  return (
    <div className={`message-bubble ${isSelf ? 'sent' : 'received'}`}>
      {!isSelf && <div className="message-sender">{sender}</div>}
      <div>{content}</div>
      <div className="message-time">{time}</div>
    </div>
  );
}
