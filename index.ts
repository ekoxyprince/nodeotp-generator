interface Options {
  type: string;
  length: number;
}
export class RandomGenerator {
  randomNumber(length: number) {
    let randomNumber: number = Math.floor(
      Math.random() * 9 * 10 ** (length - 1) + 10 ** (length - 1)
    );
    return randomNumber;
  }
  shuffleCharacters(input: string) {
    let characters = input.split("");
    for (let i: number = characters.length; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join("");
  }
  generateRandom(options: Options) {
      let characters: string = "abcdefghijklmnopqrstuvwxyz";
      let output;
   switch (options.type.toLowerCase()) {
    case "numerical":
        output = this.randomNumber(options.length);
        break;
    case "alphabetical":
        let shuffedChar: string = this.shuffleCharacters(characters);
        output = shuffedChar.slice(0,options.length);
        break;
     case "alphanumerical":
        let shuffedString:string = this.shuffleCharacters(characters)
        let reducedString:string = shuffedString.slice(0,Math.ceil(options.length/2))
        let randomNumber:number = this.randomNumber(Math.floor(options.length/2))
        let stringVal:string = reducedString.concat(String(randomNumber))
        output= this.shuffleCharacters(stringVal)
     break;
    default:
        output = null
        break;
   }
   return output
  }
}

