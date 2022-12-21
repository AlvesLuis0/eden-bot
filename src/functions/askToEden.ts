import { Message } from "discord.js";
import { Configuration, OpenAIApi } from "openai";
import { myEmbed } from ".";


const config = new Configuration({
  apiKey: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJpbnNlcnRjb2luMjAwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZ2VvaXBfY291bnRyeSI6IkJSIn0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1NeTloeFFwMlF0WEpyNWd1NmNGRGhKYUoifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzOWM3OTU2Yzg5NjllNmYyNTEzZjZlOCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY3MTI5OTY2MSwiZXhwIjoxNjcxOTA0NDYxLCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9mZmxpbmVfYWNjZXNzIn0.iVIXRVY9FigNNBP_0mMuSpb5P6sMLXJTv1coSVhbJx7AgQGN4H4jk9wwIiiv_VDqYJS1wr1IiLrzjU09VK6GtCbJ2u8wxoPgXMnBkvTcmQsc410w5deB_P-R9EnyOM-dozuejhnESFX3MW7GF71PjaNKxQahUs1saRiT-n6eaZa7DYiDPaZovoLJtdje1N7MXR13FbVkT7NfTk8lNKS2REgFW-AUuoBwoEwET2gt3Ukc534dr27dMjoOFIk7KSFqh0MFHUyMzytU1dpWKe-xt9mCi-WwR80ITX1nzOw7KukTBr8nMa3FE3J9-obUCs_6fYisarNELpDcWL4GaF8J2w"
});
const eden = new OpenAIApi(config);


export async function askToEden(ctx:Message<boolean>, question:string) {
  const embed = myEmbed(ctx);

  try {
    const response = await eden.createCompletion({
      model: "text-davinci-002",
      prompt: question,
      temperature: 0,
      max_tokens: 4000
    }, {
      timeout: 30 * 1000
    });

    return embed.setDescription(response.data.choices[0].text);
  }

  catch(error) {
    if(error.response) return embed.setDescription(`Error: ${error.response.data.error.message}`);
    return embed.setDescription(error.message);
  }
}
