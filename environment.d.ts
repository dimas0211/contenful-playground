declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_ACCESS_TOKEN: string;
      NODE_ENV: "development" | "production";
      CONTENTFUL_SPACE: string;
      CONTENTFUL_ENV_ACCESS_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
