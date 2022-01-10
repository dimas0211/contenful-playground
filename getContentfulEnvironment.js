const dotenv = require("dotenv").config().parsed;

const contentfulManagement = require("contentful-management");
const accessToken = `${dotenv.CONTENTFUL_ENV_ACCESS_TOKEN}`;
const space = `${dotenv.CONTENTFUL_SPACE}`;

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: accessToken,
  });

  return contentfulClient
    .getSpace(space)
    .then((space) => space.getEnvironment("master"));
};
