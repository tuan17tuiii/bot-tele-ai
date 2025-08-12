import axios from "axios";

export async function apiSave(chatHistory:any) {
  const url = "https://api.deepai.org/save_chat_session";

  // Dữ liệu multipart với boundary giống browser
  const boundary = "----WebKitFormBoundarybAeGzMX0AA6EQBSB";
  const body = [
    `${boundary}\r\nContent-Disposition: form-data; name="uuid"\r\n\r\n52cb095d-b876-477a-8177-5f8cfb3013ff`,
    `${boundary}\r\nContent-Disposition: form-data; name="title"\r\n\r\n`,
    `${boundary}\r\nContent-Disposition: form-data; name="chat_style"\r\n\r\nchat`,
    `${boundary}\r\nContent-Disposition: form-data; name="messages"\r\n\r\n${JSON.stringify(chatHistory)}`,
    `${boundary}--`
  ].join("\r\n");

  const headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,vi;q=0.8",
    "content-type": `multipart/form-data; boundary=${boundary.replace(/^--/, "")}`,
    "origin": "https://deepai.org",
    "priority": "u=1, i",
    "sec-ch-ua": `"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"`,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": `"Windows"`,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    // Cookie nguyên bản từ curl của bạn
    "cookie": `_ga=GA1.1.1188830859.1741792540; __qca=P0-1166216353-1741792541621; _cc_id=8140dd26c42ba55cfa25c9242e147ca4; user_sees_ads=true; csrftoken=FA9c2AHnTMbRmAAjWIzEcJmqjyy4cu2K; sessionid=bfjomrbm78zg31hkp2fd94akaymns6qk; _gcl_au=1.1.1833293723.1753112373; _k_state=MzQ4NzlkYTctYWZkOS00MzRlLWJlNjItMDQzMWU4MGM5MDMxLS04YTY4NjI2Ni1mZDQ5LTQ2MmItODQ4MC1mNzMyNmEyNTY2Zjc=; panoramaId_expiry=1755612075305; panoramaId=785697cc7480f74ef4e1fbfa8e6d16d53938b01fe1b55af2bd5574e73df36c37; panoramaIdType=panoIndiv; __gads=ID=0f44e5994b820a91:T=1741792543:RT=1755007277:S=ALNI_MYOuu9lRIH75rcCUWKbOBjivWyrAA; __gpi=UID=00000ffc90d104b3:T=1741792543:RT=1755007277:S=ALNI_MZ7pfVTvmj_XMsLMlJbUBSOpWJ_6g; __eoi=ID=266d7eb3630496ae:T=1741792543:RT=1755007277:S=AA-AfjZxJqNet9XOpHA8r3Hih3Nw; _ga_GY2GHX2J9Y=GS2.1.s1755007274$o6$g1$t1755007440$j59$l0$h0; cto_bundle=b6zLw19ST0IwVjRqNmVMRnh4ZiUyQjdmUHVUMEN0U0tZYmtVZ0RmZ3d3SWVUSFRvcDhEZ1d6M2U0Z294MUFIWEdjdlJqcGFFSXBkT0x1MDB1WkpRVnFGRVFxMVZmMlFuJTJGMTVDemRqb0lzWm51bHoyJTJCNTJVJTJCZkFLQSUyQlp0bGxoWkJhcTN6S3QlMkZ1eHlTTEltNyUyQnNoZnVmY2Y1TmtFemN3Y0ZMQU5UQml2N2R2WWtOdllWQktDUGtXdnhib0NaVmwwYTdUSlJoRCUyRnduJTJGRmx3WGl0SUwlMkJtT3VDSFZucUQ1b09RYkNxcjJHNCUyRk1uaXZ5d3h6UFE3dlZZMkF5T3h3Zm1iYWpucjhJRw`
  };

  try {
    console.log("body",chatHistory)
    const res = await axios.post(url, body, { headers });
    console.log("✅ Thành công:", res.data);
    return res.data;
  } catch (err:any) {
    console.error("❌ Lỗi:", err.response?.data || err.message);
    return null;
  }
}
