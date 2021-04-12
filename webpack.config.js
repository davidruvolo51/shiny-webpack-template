////////////////////////////////////////////////////////////////////////////////
// FILE: webpack.config.js
// AUTHOR: David Ruvolo
// CREATED: 2021-04-12
// MODIFIED: 2021-04-12
// PURPOSE: loads dev or prod configuration based on script param `env`
// DEPENDENCIES: see common
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

const { merge } = require("webpack-merge");
const commonConfig = require("./config/webpack.common");

module.exports = (env) => {
    const e = env.prod ? "prod" : "dev";
    const config = require("./config/webpack." + e);
    return merge(commonConfig, config);
}
