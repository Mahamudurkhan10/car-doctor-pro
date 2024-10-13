import { ConnectDB } from "@/lib/ConnectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    const newUser = await request.json();
    console.log("Received Data:", newUser);  // Debugging step
    
    try {
        const db = await ConnectDB();
        const userCollection = db.collection("users");
        await userCollection.createIndex({ email: 1 }, { unique: true });   
        // Check if user already exists
        const exist = await userCollection.findOne({email: newUser.email });
        if (exist) {
            return new NextResponse(
                JSON.stringify({ message: "User already exists" }),
                { status: 400 }
            );
        }

        // Hash the password asynchronously
        const hashedPassword = await bcrypt.hash(newUser.password, 14);

        // Insert new user with hashed password
        const resp = await userCollection.insertOne({
            ...newUser,
            password: hashedPassword,
        });

        console.log("Inserted Data:", resp);  // Debugging step
        return new NextResponse(
            JSON.stringify({ message: "User created successfully" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500 }
        );
    }
};
