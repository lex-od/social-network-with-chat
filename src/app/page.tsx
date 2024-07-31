import { Metadata } from "next";
import Chat from "@/components/screens/ChatsPage/Chat/Chat";
import ChatList from "@/components/screens/ChatsPage/ChatList/ChatList";
import CurrentUser from "@/components/layouts/CurrentUser";

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
