var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

// public key
config.web.secret = 'topsecret'