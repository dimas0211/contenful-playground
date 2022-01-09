const contentfulManagement = require("contentful-management");

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-GOkpuysNMY_rDcsPUIq5Hr8bcMIKLA7yNml7G7xKk6Y",
  });

  return contentfulClient
    .getSpace("92s4f0wqi8pg")
    .then((space) => space.getEnvironment("master"));
};
