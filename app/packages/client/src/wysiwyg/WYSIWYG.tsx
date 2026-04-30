import { useState } from "react";
import Editor from "react-simple-wysiwyg";
import sanitizeHtml from "sanitize-html";

const configSanitizeHtml = (input: string) => sanitizeHtml(input);

export const WYSIWYG = () => {
    const [html, setHtml] = useState("");
    // const [showParsedHtml, setShowParsedHtml] = useState(false);
    // const [parsedHtml, setParsedHtml] = useState("");

    const handleChange = (input: string) => {
        setHtml(configSanitizeHtml(input));
    };

    return (
        <Editor
            containerProps={{ style: { whiteSpace: "pre-line" } }}
            value={html}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};
