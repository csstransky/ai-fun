import axios from "axios";

export const postOpenAiCall = async (input: string) => {
  const body = {
    model: "gpt-4.1",
    messages: [input],
    stream: true,
  };
  const url = `${window.location.href}openAI`;
  return axios.post(url, body);
};
