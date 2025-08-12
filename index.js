"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const api_1 = require("./api");
const api_save_1 = require("./api_save");
const token = "7861580581:AAGvTTcTMS0sAWW09eor9YGEJQKiCa-O06M";
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
// Lưu lịch sử chat để gửi cho API
let chatHistory = [];
bot.on("message", (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const chatId = msg.chat.id;
    const text = msg.text || "";
    console.log("text", text);
    // Thêm tin nhắn user vào lịch sử
    chatHistory.push({ role: "user", content: text });
    try {
        yield (0, api_save_1.apiSave)(chatHistory);
        const aiResponse = yield (0, api_1.callDeepAI)(chatHistory);
        chatHistory.push({ role: "assistant", content: aiResponse || "" });
        bot.sendMessage(chatId, aiResponse || "Bot không trả lời được.");
        yield (0, api_save_1.apiSave)(chatHistory);
        console.log("aiResponse", aiResponse);
        // Thêm phản hồi của bot vào lịch sử
        // chatHistory.push({ role: "assistant", content: aiResponse || "" });
        // Gửi tin nhắn trả lời
    }
    catch (_a) {
        bot.sendMessage(chatId, "❌ Đã có lỗi khi gọi AI.");
    }
}));
