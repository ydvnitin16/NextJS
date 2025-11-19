import { NextResponse } from "next/server"

export async function GET(request) {
    console.log('POST reached successfull!')
    return NextResponse.json({status: 200})
}