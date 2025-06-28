import VideoCall from "../../components/VideoCall";
import ChatBox from "../../components/ChatBox";
import SignAvatar from "../../components/SignAvatar";

function CallRoom() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 min-h-screen">
      <div className="col-span-2">
        <VideoCall />
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <ChatBox />
        <SignAvatar />
      </div>
    </div>
  );
}

export default CallRoom;
