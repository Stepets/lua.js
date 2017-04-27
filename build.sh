#!/bin/bash
cd lib
node prepareStdLib.js
cd ../
node_modules/.bin/webpack
java -jar closure-compiler-v20170409.jar --js dist/luajs.js --js_output_file dist/lua.js
