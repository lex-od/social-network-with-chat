import { Metadata } from "next";
import Chat from "@/components/screens/ChatsPage/Chat/Chat";
import ChatList from "@/components/screens/ChatsPage/ChatList/ChatList";

export const metadata: Metadata = {
  title: "Chats | Taiga Social",
};

export default function ChatsPage() {
  return (
    <div className="h-full grid grid-cols-[200px_1fr]">
      <ChatList />
      <Chat />
    </div>
  );
}
