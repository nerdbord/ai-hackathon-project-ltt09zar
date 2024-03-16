import OpenAI from "openai";
import React from "react";

export async function useOpenAI() {
  React.useEffect(() => {
    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "What is the meaning of life?",
        },
      ],
    };

    try {
      fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(APIBody),
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          const jsonData = JSON.parse(data);
          console.log("jsonData", jsonData);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);
}
