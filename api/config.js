const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
    development: {
        APIKey: "9g00irxhS_iLjWNkF7iHDw",
        APISecret: "vJXbqIYZPGZMv5xhwnVKaqs5IKBfOmwAhNuu",
    },
    production: {
        APIKey: "9g00irxhS_iLjWNkF7iHDw",
        APISecret: "vJXbqIYZPGZMv5xhwnVKaqs5IKBfOmwAhNuu",
    },
};

module.exports = config[env];
