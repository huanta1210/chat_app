import Chat from "../Models/chatModel";

export const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;
  try {
    const chat = await Chat.findOne({ members: { $all: [firstId, secondId] } });

    if (chat) return res.status(200).json(chat);

    const newChat = new Chat({ members: [firstId, secondId] });

    const response = await newChat.save();

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export const findUserChats = async (req, res) => {
  const userId = req.params.userId;
  try {
    const chats = await Chat.find({ members: { $in: [userId] } });

    return res.status(200).json(chats);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  const { secondId, firstId } = req.params;
  try {
    const chat = await Chat.find({ members: { $all: [secondId, firstId] } });
    return res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
