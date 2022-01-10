import { createClient } from "contentful";
// require("dotenv").config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  // accessToken: "EWW7JETeF9WAMEiK-ArLiXBkzPb1xbcmV_7l-GJBj7k",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default client;
