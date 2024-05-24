import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
import prisma from "@/prisma/client";

const createTodoSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validateSchema = createTodoSchema.safeParse(body);

    if (!validateSchema.success) {
        return NextResponse.json(validateSchema.error.errors, { status: 400 })
    }

    const newTodo = await prisma.toDo.create({
        data: {
            title: body.title,
            description: body.description
        }
    });

    return NextResponse.json(newTodo, {status :201} )

}