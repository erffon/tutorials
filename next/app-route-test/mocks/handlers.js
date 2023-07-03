// creating API endpoint handlers
import { rest } from "msw";

export const handlers = [
  // setup GET request
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      //return a json file via res function
      ctx.json([{ id: 1, name: "Alison Burger" }])
    );
  }),
];
