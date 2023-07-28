const openai = require("openai");

const apiKey = "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"; // Replace 'YOUR_API_KEY' with your actual GPT-3 API key.
openai.apiKey = apiKey;

async function getGPT3Response(inputMessage) {
  try {
    const response = await openai.completions.create({
      engine: "text-davinci-002", // You can try other engines as well.
      prompt: inputMessage,
      maxTokens: 150,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error communicating with GPT-3:", error);
    return "An error occurred while processing your request. Please try again.";
  }
}

module.exports = { getGPT3Response };
