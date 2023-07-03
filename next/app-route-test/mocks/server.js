import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// setting up mock server and pass handlers array
export const server = setupServer(...handlers);

// we can also setup the server this way :
// export const server = setupServer(
//   rest.get("/api/users", (req, res, ctx) => {
//     return res(
//       //return a json file via res function
//       ctx.json([{ id: 1, name: "Alison Burger" }])
//     );
//   }),
//   rest.get("/api/users", (req, res, ctx) => {
//     return res(
//       //return a json file via res function
//       ctx.json([{ id: 1, name: "Alison Burger" }])
//     );
//   }),
//   rest.get("/api/users", (req, res, ctx) => {
//     return res(
//       //return a json file via res function
//       ctx.json([{ id: 1, name: "Alison Burger" }])
//     );
//   })
// );
