    var path = require('path');

    module.exports = {

        module: {
            rules: [{
                test: /\.bpmn$/,
                use: {
                    loader: 'raw-loader'
                }
            }]
        }
    };