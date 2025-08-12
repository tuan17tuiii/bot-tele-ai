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
exports.callDeepAI = callDeepAI;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
// Hàm gọi API DeepAI
function callDeepAI(chatHistory) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://api.deepai.org/hacking_is_a_serious_crime";
        const formData = new form_data_1.default();
        formData.append("chat_style", "gpt-chat");
        formData.append("chatHistory", JSON.stringify(chatHistory));
        formData.append("model", "standard");
        formData.append("hacker_is_stinky", "very_stinky");
        const headers = Object.assign(Object.assign({}, formData.getHeaders()), { "accept": "*/*", "api-key": "tryit-54355934755-c339fdef3b9e2fa822809543f59e2c99", "origin": "https://deepai.org", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" });
        try {
            const response = yield axios_1.default.post(url, formData, { headers });
            return response.data;
        }
        catch (error) {
            console.error("❌ Lỗi gọi API DeepAI:", error);
            return "Bot không trả lời được.";
            throw error;
        }
    });
}
