import TelegramBot from "node-telegram-bot-api";
import { callDeepAI } from "./api";
import { apiSave } from "./api_save";

const token: string = "7861580581:AAGvTTcTMS0sAWW09eor9YGEJQKiCa-O06M";
const bot = new TelegramBot(token, { polling: true });

// Lưu lịch sử chat để gửi cho API
let chatHistory: Array<{ role: string; content: string }> = [];

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";
console.log("text",text)
  // Thêm tin nhắn user vào lịch sử
  chatHistory.push({ role: "user", content: text });

  try {
    await apiSave(chatHistory);
    const aiResponse = await callDeepAI(chatHistory);
    chatHistory.push({ role: "assistant", content: aiResponse || "" });
    bot.sendMessage(chatId, aiResponse || "Bot không trả lời được.");
    await apiSave(chatHistory);
console.log("aiResponse",aiResponse)
console.log("test",aiResponse)
    // Thêm phản hồi của bot vào lịch sử
    // chatHistory.push({ role: "assistant", content: aiResponse || "" });

    // Gửi tin nhắn trả lời
  } catch {
    bot.sendMessage(chatId, "❌ Đã có lỗi khi gọi AI.");
  }
});
