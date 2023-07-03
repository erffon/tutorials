import { NextResponse } from "next/server";

// GET api endpoint
export async function GET(req) {
  return NextResponse.json([
    {
      id: 1,
      username: "Alison Burger",
    },
    {
      id: 2,
      username: "Freddi Mercury",
    },
    {
      id: 3,
      username: "Thomas Shelby",
    },
  ]);
}
