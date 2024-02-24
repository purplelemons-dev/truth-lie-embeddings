// place files you want to import through the `$lib` alias in this folder.

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || "",
    organization: import.meta.env.VITE_OPENAI_ORG || "",
});


