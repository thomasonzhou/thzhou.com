import { loadingMessages } from "@/data/loadingMessages";
import { useMemo } from "react";

const Loading = ({}) => {
    const messageCount = loadingMessages.length;
    const messageIndex = Math.floor(Math.random() * messageCount);
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <p>The code is loading</p>
            <p>{loadingMessages[messageIndex]}</p>
        </div>
    );
};
export default Loading;
