import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                // username: { label: "Username", type: "text", placeholder: "jsmith" },
                // password: {  label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                await connect()
                try {
                    const user = await User.findOne({ email: credentials.email })
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                        if (isPasswordCorrect) {
                            return user
                        } else {
                            throw new Error("Wrong Credentials")
                        }
                    }
                    else {
                        throw new Error("User not found")
                    }
                } catch (err: any) {
                    throw new Error(err)
                }
            }
        })
    ],
    pages:{
        error:"/dashboard/login"
    }
})

export { handler as GET, handler as POST }