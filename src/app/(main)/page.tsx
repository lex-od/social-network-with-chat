import { Metadata } from "next";
import CurrentUser from "@/components/CurrentUser";
import Chat from "@/screens/ChatsPage/Chat/Chat";
import ChatList from "@/screens/ChatsPage/ChatList/ChatList";

export const metadata: Metadata = {
  title: "Chats | Taiga Social",
};

export default function ChatsPage() {
  return (
    <div className="h-full grid grid-cols-[300px_1fr] grid-rows-[auto_1fr]">
      <CurrentUser />
      <div className="p-4">ChatTitle</div>
      <ChatList />
      <Chat />
    </div>
  );
}
