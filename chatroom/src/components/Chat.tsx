import * as React from "react";
// import { sendMessage } from '../store/action';
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

interface ChatProps {
  messageObjects: IMessageObject[];
  sendMessage: (message: string) => Promise<void>;
  closeConnection: () => Promise<void>;
  userList: string[];
}

const Chat: React.FC<ChatProps> = ({
  messageObjects,
  sendMessage,
  closeConnection,
  userList,
}) => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          {/* Logo  */}
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">QuickChat</div>
          </div>

          {/* Out button */}
          <button
            className="mt-5 p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-md w-40 mx-auto rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-indigo-300"
            onClick={closeConnection}
          >
            Leave
          </button>

          {/* Online other users */}
          <div className="flex flex-col mt-auto">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Members</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                {userList.length}
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-auto max-h-96 overflow-y-auto">
              {userList.map((user, index) => {
                return (
                  <button
                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    key={index}
                  >
                    <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      H
                    </div>
                    <div className="ml-2 text-sm font-semibold">{user}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Chat zone */}
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <ChatMessages messageObjects={messageObjects} />
            <ChatInput sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
