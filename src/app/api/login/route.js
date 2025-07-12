import User from "@/models/User";
import connectToDB from "@/database";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";

export const dynamic = 'force-dynamic'

export async function POST(req){
    try{
        await connectToDB()
        const {username, password} = await req.json()
        const checkUser = await User.findOne({username})

        if(!checkUser){
            return NextResponse.json({
                success: false,
                message: 'Username is not present ! please try again .'
            })
        }

        const hashpassword = await hash(checkUser.password, 12)
        const checkPassword = await compare(password, hashpassword)

        if(!checkPassword){
            return NextResponse.json({
                success: false,
                message: 'wrong password! please try again . '
            })
        }

        return NextResponse.json({
            success: true,
            message: 'Login successfull !'
        })

    }catch(e){
        console.log(e);

        return NextResponse.json({
            success: false,
            message: 'Something went wrong please try again.'
        })
    }
}