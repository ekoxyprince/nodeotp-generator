"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomGenerator = void 0;
var RandomGenerator = /** @class */ (function () {
    function RandomGenerator() {
        this.char = "abcdefghijklmnopqrstuvwxyz";
        this.num = 1234567890;
        this.specialChar = "!@#$%^&*()_-+=";
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
    RandomGenerator.prototype.randomChar = function (length) {
        var c = this.randomNumber(length);
        var b = this.shuffleCharacters(this.char);
        var a = b.slice(0, length * 2).concat(String(c));
        return this.shuffleCharacters(a);
    };
    RandomGenerator.prototype.generateRandom = function (options) {
        var output;
        switch (options.type.toLowerCase()) {
            case "numerical":
                output = this.randomNumber(options.length);
                break;
            case "alphabetical":
                var shuffedChar = this.shuffleCharacters(this.char);
                output = shuffedChar.slice(0, options.length);
                break;
            case "alphanumerical":
                var shuffedString = this.shuffleCharacters(this.char);
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
    RandomGenerator.prototype.generateRandomUid = function () {
        var z = this.randomChar(3);
        var y = this.randomChar(2);
        var x = this.randomChar(4);
        return x.concat("-").concat(y).concat("-").concat(z);
    };
    RandomGenerator.prototype.generateRandomPassword = function (options) {
        var input = this.char.concat(String(this.num));
        var i;
        var output;
        switch (options.includeSpecialChar) {
            case true:
                i = this.shuffleCharacters(input.concat(this.specialChar));
                break;
            default:
                i = this.shuffleCharacters(input);
                break;
        }
        output = i.slice(0, options.length);
        return output;
    };
    return RandomGenerator;
}());
exports.RandomGenerator = RandomGenerator;
