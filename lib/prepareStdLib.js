var parser = require("./parser.js");
exports.parser = parser;
var codegen = require("./codegen.js");
exports.codegen = codegen;
var sign = codegen.sign;

function compile(s){
    if (s.substr(0, sign.length) != sign) {
        return codegen.run(parser.parse(s));
    } else {
        return s;
    }
}

var fs = require("fs");
var path = require("path");
var code = fs.readFileSync(path.join(path.dirname(module.filename), "./stdlib.lua"), {encoding:'utf-8'});
fs.writeFileSync("./stdlib.lua.js", "module.exports = ((function(){ return '" + new Buffer(compile(code)).toString('base64') + "';})())");
