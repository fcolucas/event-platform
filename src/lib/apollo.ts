import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o7u1db110d01z7dtucgqx1/master",
  cache: new InMemoryCache(),
});
