import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import {createTodoSchema} from '../../validationSchema'

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validateSchema = createTodoSchema.safeParse(body);

    if (!validateSchema.success) {
        return NextResponse.json(validateSchema.error.format(), { status: 400 })
    }

    const newTodo = await prisma.toDo.create({
        data: {
            title: body.title,
            description: body.description
        }
    });

    return NextResponse.json(newTodo, {status :201} )

}
