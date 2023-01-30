import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

// console.log("hello", process.env)
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  
  secret: process.env.NEXTAUTH_SECRET,
  site: process.env.NEXTAUTH_URL,

  // custom callback configurationt to allow for URLs on different sites
  callbacks: {
    redirect: "https://my.ecrchs.net/api/auth/callback/azure-ad"
    //async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      //if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      //else if (new URL(url).origin === baseUrl) return url
      //return url
    //}
  }

})
