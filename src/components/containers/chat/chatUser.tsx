import { useRequest } from "@/context/requestContext";

const ChatUser = () => {
    const { requestData, setRequestData} = useRequest();

    return(
        <textarea 
            className='w-full border-2 min-h-[100px] p-4'
            value={requestData.text}
            data-cy="userChat"
            onChange={(e) => setRequestData({...requestData, text: e.target.value})}
            >
        </textarea>
    )
}

export default ChatUser;