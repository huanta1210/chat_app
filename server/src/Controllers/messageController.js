import Message from "../Models/messageModel";

export const createMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);

    if (!message) return res.status(404).json("Message not found");

    return res.status(201).json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  const { chatId } = req.params;
  try {
    const message = await Message.find({ chatId });

    if (!message) return res.status(404).json("Message not found");

    return res.status(200).json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
