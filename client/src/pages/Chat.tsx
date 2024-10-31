import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Chat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <SideBar />

        <div className="flex-1 relative">
          <header className="bg-white p-4 text-gray-700">
            <h1 className="text-2xl font-semibold">Alice</h1>
          </header>

          <div className="h-screen overflow-y-auto p-4 pb-36">
            <div className="flex mb-4 cursor-pointer">
              <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                <img
                  src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                <p className="text-gray-700">Hey Bob, how's it going?</p>
              </div>
            </div>
            <div className="flex justify-end mb-4 cursor-pointer">
              <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                <p>
                  Hi Alice! I'm good, just finished a great book. How about you?
                </p>
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                <img
                  src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="My Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>

          <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-full">
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button onClick={toggleEmojiPicker} className="ml-2">
                😊
              </button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
                Send
              </button>

              {showEmojiPicker && (
                <div className="absolute bottom-12 right-0">
                  <EmojiPicker />
                </div>
              )}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Chat;
