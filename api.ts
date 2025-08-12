import axios from "axios";
import FormData from "form-data";

// Hàm gọi API DeepAI
export async function callDeepAI(chatHistory: Array<{ role: string; content: string }>): Promise<any> {
  const url = "https://api.deepai.org/hacking_is_a_serious_crime";

  const formData = new FormData();
  formData.append("chat_style", "gpt-chat");
  formData.append("chatHistory", JSON.stringify(chatHistory));
  formData.append("model", "standard");
  formData.append("hacker_is_stinky", "very_stinky");

  const headers = {
    ...formData.getHeaders(), // Bắt buộc để FormData hoạt động
    "accept": "*/*",
    "api-key": "tryit-54355934755-c339fdef3b9e2fa822809543f59e2c99",
    "origin": "https://deepai.org",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  };

  try {
    const response = await axios.post(url, formData, { headers });
    return response.data;
  } catch (error) {
    console.error("❌ Lỗi gọi API DeepAI:", error);
    return "Bot không trả lời được.";
    throw error;
  }
}
