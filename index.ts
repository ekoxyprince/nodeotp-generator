interface Options {
  type: string;
  length: number;
}
type passwordOption = {
  length:number,
  includeSpecialChar:boolean,
}
export class RandomGenerator {
  char: string;
  num: number;
  specialChar:string;
  constructor() {
    this.char = "abcdefghijklmnopqrstuvwxyz";
    this.num = 1234567890;
    this.specialChar = "!@#$%^&*()_-+="
  }
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
  randomChar(length: number) {
    let c: number = this.randomNumber(length);
    let b: string = this.shuffleCharacters(this.char);
    let a: string = b.slice(0, length * 2).concat(String(c));
    return this.shuffleCharacters(a);
  }
  generateRandom(options: Options) {
    if(options.length>12){
      throw new Error(`length of random ${options.type} character cannot exceed 12`)
    }
    let output;
    switch (options.type.toLowerCase()) {
      case "numerical":
        output = this.randomNumber(options.length);
        break;
      case "alphabetical":
        let shuffedChar: string = this.shuffleCharacters(this.char);
        output = shuffedChar.slice(0, options.length);
        break;
      case "alphanumerical":
        let shuffedString: string = this.shuffleCharacters(this.char);
        let reducedString: string = shuffedString.slice(
          0,
          Math.ceil(options.length / 2)
        );
        let randomNumber: number = this.randomNumber(
          Math.floor(options.length / 2)
        );
        let stringVal: string = reducedString.concat(String(randomNumber));
        output = this.shuffleCharacters(stringVal);
        break;
      default:
        output = null;
        break;
    }
    return output;
  }
  generateRandomUid() {
    const z: string = this.randomChar(3);
    const y: string = this.randomChar(2);
    const x: string = this.randomChar(4);
    return x.concat("-").concat(y).concat("-").concat(z);
  }
  generateRandomPassword(options:passwordOption){
    let input:string = this.char.concat(String(this.num))
    let i:string;
    let output;
    switch(options.includeSpecialChar){
      case true:
          i = this.shuffleCharacters(input.concat(this.specialChar))
      break;
      default:
          i  = this.shuffleCharacters(input)
      break;  
    }
    output = i.slice(0,options.length)
    return output
  }
  private ceaserSipherAlgorithm(text:string,shift:number){
   let result:string = ""
   for(let i:number = 0; i<text.length;i++){
     let charCode:number= text.charCodeAt(i)
     if(charCode>=65 && charCode<= 90){
      result+=String.fromCharCode(((charCode-65+shift)%25)+65)
     }else if(charCode>=97&&charCode<=122){
      result+=String.fromCharCode(((charCode-97+shift)%25)+97)
     }else{
       result+= text.charAt(i)
     }
   }
   return result
  }
  ceaserEncryption(text:string,shift:number){
    return this.ceaserSipherAlgorithm(text,shift)
  }
  ceaserDecryption(text:string,shift:number){
    return this.ceaserSipherAlgorithm(text,-shift)
  }
}
