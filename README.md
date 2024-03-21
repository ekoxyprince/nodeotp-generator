This is an OTP generator library which helps make generation of string numbers or mixture of both for creating OTP and random ids.
## Installation
To install:
Run run npm install --save nodeotp-generator
after which the package is installed and saved.
## Usage
To Use:
first start by importing the random generator:
const {RandomGenerator} = require("nodeotp-generator")

Then create an instance of the class:
const random = new RandomGenerator()

After which you call the generateRandom method:
const generated number = random.generateRandom(option)
option => 
type: the type of random values you hope to generate 
consists mainly of three types that is:
1. Numerical:this generates only number values
2. Alphabetical: this generates only text or string values
3. Alphanumerical: this generates a mixture both text and number values.
length: this is the length of the random value you want to generate 
there is no limit to the length but 8 is the most recommeded value.
## Contributing

You are free to add new methods and contribution to this project.

## License

ISC licensed.

