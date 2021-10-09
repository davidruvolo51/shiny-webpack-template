////////////////////////////////////////////////////////////////////////////////
// FILE: webpack.dev.js
// AUTHOR: David Ruvolo
// CREATED: 2021-04-12
// MODIFIED: 2021-10-09
// PURPOSE: configuration for dev environment
// DEPENDENCIES: see below + common config
// STATUS: working
// COMMENTS: The property `writeToDisk` is used as it is unclear of it is
// possible to access webpack's environment using `addResourcePath`. It's far
// easier to write files to disk.
////////////////////////////////////////////////////////////////////////////////

// config
module.exports = {
    mode: "development",
    output: {
        filename: "index.js",
    },
    devServer: {
        port: 1234,
        hot: true,
        devMiddleware: {
            writeToDisk: true // for use in shiny-dev
        }
    }
}
