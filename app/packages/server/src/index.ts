import { serve } from "@hono/node-server";
import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => {
    return c.text("Hello Hono!");
});

serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    (_info) => {},
);
