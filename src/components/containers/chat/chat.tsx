import ChatAI from "./chatAI";
import ChatUser from "./chatUser";

const Chat = () => {
    return (
        <section
            className="w-full">
            <ChatAI/>
            <ChatUser/>
        </section>
    )
}

export default Chat;