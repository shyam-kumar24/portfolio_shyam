
import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Project from "@/models/Project";

export const dynamic = 'force-dynamic'

export async function POST(req){
    try{
        await connectToDB()
        const extractData = await req.json()
        const saveData = await Project.create(extractData)

        if(saveData){
            return NextResponse.json({
                success: true,
                message: 'Data saved successfully'
            })
        }else{
            return NextResponse.json({
                success: false,
                message: 'Something went wrong please try again.'
            })
        }
    }catch(e){
        console.log(e);

        return NextResponse.json({
            success: false,
            message: 'Something went wrong please try again.'
        })
    }
}