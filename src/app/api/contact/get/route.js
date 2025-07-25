
import connectToDB from "@/database";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(req){
    try{

        await connectToDB()
        const extractData = await Contact.find()

        if(extractData){
            return NextResponse.json({
                success: true,
                data: extractData
            })
        }else{
            return NextResponse.json({
                success: false,
                message: 'Something went wrong !'
            })
        }
    }catch(e){
        console.log(e);

        return NextResponse.json({
            success: false,
            message: 'Something went wrong !'
        })
    }
}