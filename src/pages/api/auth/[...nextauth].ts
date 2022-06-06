import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import InstagramProvider from "next-auth/providers/instagram"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
            authorization: {
                params: {
                    scope: "instagram_basic"
                }
            }
        }),
        InstagramProvider({
            clientId: process.env.INSTAGRAM_ID,
            clientSecret: process.env.INSTAGRAM_SECRET,

        }),
        // ...add more providers here
    ],
})