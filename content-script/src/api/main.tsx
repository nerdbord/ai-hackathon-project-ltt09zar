const API_URL = "https://training.nerdbord.io/api/v1/openai/chat/completions";
const API_TOKEN = import.meta.env.VITE_OPENAI_API_KEY;

type OpenAIRequestType = {
    message: string;
    option: 'irrelevant and impactful';
}

const callOpenAI = async (message: string) => {
    const fetchResponse = fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": API_TOKEN,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant.",
                },
                {
                    role: "user",
                    content: `Act as a shopping assistant, helping making informed purchases. ${message}`,
                },
            ]
        })
    });

    const chatResponse = await fetchResponse.then((response) => response.json())
        .then((data) => data.choices[0].message.content)
        .catch((error) => {
            console.log('Something bad happened');
            console.log(error);
        });

    return chatResponse;
}

export const askOpenAI = async (question: string, productName: string) => {
    if (!question) {
        return "I'm sorry, but you didn't ask anything."
    }

    return await callOpenAI(`${question} Product: ${productName}. Answer in max two sentences.`);
}

export const useOpenAI = async ({ message, option }: OpenAIRequestType) => {
    if (!message) {
        return "";
    }
    switch (option) {
        case 'irrelevant and impactful':
            return await callOpenAI(`Eliminate irrelevant and impactful content from the this text: ${message}`);
        default:
            return "";
    }
};
