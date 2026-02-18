"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacters = getCharacters;
var fs = require("fs");
var path = require("path");
function getCharacters() {
    var spritesPath = path.join(process.cwd(), 'public', 'sprites');
    if (!fs.existsSync(spritesPath))
        return [];
    var entries = fs.readdirSync(spritesPath, { withFileTypes: true });
    return entries
        .filter(function (entry) { return entry.isDirectory(); })
        .map(function (dir) { return dir.name; });
}
