"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomGenerator = void 0;
var RandomGenerator = /** @class */ (function () {
    function RandomGenerator() {
    }
    RandomGenerator.prototype.randomNumber = function (length) {
        var randomNumber = Math.floor(Math.random() * 9 * Math.pow(10, (length - 1)) + Math.pow(10, (length - 1)));
        return randomNumber;
    };
    RandomGenerator.prototype.shuffleCharacters = function (input) {
        var _a;
        var characters = input.split("");
        for (var i = characters.length; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [characters[j], characters[i]], characters[i] = _a[0], characters[j] = _a[1];
        }
        return characters.join("");
    };
    RandomGenerator.prototype.generateRandom = function (options) {
        var characters = "abcdefghijklmnopqrstuvwxyz";
        var output;
        switch (options.type.toLowerCase()) {
            case "numerical":
                output = this.randomNumber(options.length);
                break;
            case "alphabetical":
                var shuffedChar = this.shuffleCharacters(characters);
                output = shuffedChar.slice(0, options.length);
                break;
            case "alphanumerical":
                var shuffedString = this.shuffleCharacters(characters);
                var reducedString = shuffedString.slice(0, Math.ceil(options.length / 2));
                var randomNumber = this.randomNumber(Math.floor(options.length / 2));
                var stringVal = reducedString.concat(String(randomNumber));
                output = this.shuffleCharacters(stringVal);
                break;
            default:
                output = null;
                break;
        }
        return output;
    };
    return RandomGenerator;
}());
exports.RandomGenerator = RandomGenerator;
