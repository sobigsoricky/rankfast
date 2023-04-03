import { Configuration, OpenAIApi } from "openai";
import cheerio from "cheerio";
import axios from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const url = req.query.url;
  try {
    const meta = await openai.createChatCompletion({
      model:"gpt-3.5-turbo",
      prompt: [
        {
          role: "user",
          content: `create meta title and description for this page ${url} as json`,
        }
      ],

      // prompt: `create meta title and description for this page ${url} as json`,
      // max_tokens: 1000,
      // temperature: 0,
    });

    // const metaTags = [ description.data, title.data];

    res.status(200).json(meta.data);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
}
