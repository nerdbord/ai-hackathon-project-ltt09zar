const API_URL = "https://training.nerdbord.io/api/v1/openai/chat/completions";
const API_TOKEN = import.meta.env.VITE_OPENAI_API_KEY;

export const useOpenAI = () => {
    console.log("Calling OpenAI");
    fetch(API_URL, {
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
                    content: "Hello!",
                },
            ],
        })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content)
    }).catch((error) => {
        console.log('Something bad happened');
        console.log(error);
    });
};
