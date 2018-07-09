const path = require('path');

module.exports = function(source, map) {
    this.cacheable();

    const filename = path.basename(map.file);
    const sourceStatement = `/*# sourceURL=${filename} */`;
    source = source + '\n' +  sourceStatement;

    this.callback(null, source, map)
};
