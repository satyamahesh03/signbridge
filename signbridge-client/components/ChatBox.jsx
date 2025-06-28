function ChatBox() {
  return (
    <div className="bg-white shadow p-4 rounded-xl h-[30vh]">
      <h2 className="text-lg font-semibold mb-2">Chat</h2>
      <input
        type="text"
        className="w-full border p-2 rounded"
        placeholder="Type to translate..."
      />
    </div>
  );
}

export default ChatBox;
