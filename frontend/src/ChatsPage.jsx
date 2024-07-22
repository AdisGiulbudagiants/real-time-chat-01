/* eslint-disable react/prop-types */
import { PrettyChatWindow } from "react-chat-engine-pretty"
// import { ChatEngine } from "react-chat-engine"

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )
}

export default ChatsPage
