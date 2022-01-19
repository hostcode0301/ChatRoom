import * as React from "react";

interface ChatMessagesProps {
  messageObjects: IMessageObject[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messageObjects }) => {
  const messagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // const {scrollHeight, clientHeight} = messagesRef.current?.scrollHeight;

    console.log("Scoll height: " + messagesRef.current?.scrollHeight);
    console.log("Client height: " + messagesRef.current?.clientHeight);
    messagesRef.current?.scrollTo({
      left: 0,
      top:
        messagesRef.current?.scrollHeight - messagesRef.current?.clientHeight,
      behavior: "smooth",
    });
  }, [messageObjects]);

  return (
    <div
      className="flex flex-col h-full overflow-x-auto mb-4 messages_container"
      ref={messagesRef}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">
          {messageObjects.map((mess, index) =>
            mess.user !== localStorage.getItem("user") ? (
              <div className="col-start-1 col-end-8 p-3 rounded-lg" key={index}>
                <div>
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      B
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>{mess.message}</div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <p className="w-fit font-light text-gray-500 text-sm">
                    {mess.user}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="col-start-6 col-end-13 p-3 rounded-lg"
                key={index}
              >
                <div>
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>{mess.message}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse">
                  <p className="w-fit font-light text-gray-500 text-sm">
                    {mess.user}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
