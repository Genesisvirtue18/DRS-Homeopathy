import { client } from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    const data = await client.fetch(`
      *[_type == "hairTest"] | order(_createdAt desc)
    `);

    return NextResponse.json(data);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to fetch data",
      },
      {
        status: 500,
      }
    );
  }
}