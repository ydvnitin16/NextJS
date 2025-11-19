import { NextResponse } from "next/server"

export async function POST(request) {
    console.log('GET Rewrite successfull!')
    return NextResponse.json({status: 200})
}