import { Configuration, OpenAIApi } from "openai"
import cheerio from "cheerio"
import axios from "axios"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  const url = req.query.url
  try {
    const meta = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      prompt: [
        {
          role: "user",
          content: `Analyze the url ${url} , Meta title should be always less than 60 characters and it should be short and sweet, meta description should be under 130 characters and should persuade the user to open the link subtly. research about the business and create meta title and description for this page as json`,
        },
      ],

      // prompt: `create meta title and description for this page ${url} as json`,
      // max_tokens: 1000,
      // temperature: 0,
    })

    // const metaTags = [ description.data, title.data];

    res.status(200).json(meta.data)
  } catch (error) {
    res.json(error)
    console.log(error)
  }
}
