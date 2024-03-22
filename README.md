This is an OTP generator library which helps make generation of string numbers or mixture of both for creating OTP and random ids. can be used for generating random userId and strong passwords for jwts, sessions and dummy password for dummy database users.
## Installation
To install:
Run run npm install --save nodeotp-generator
after which the package is installed and saved.
## Usage
**To Use**:
- first start by importing the random generator:<br>
`const {RandomGenerator} = require("nodeotp-generator")`

- Then create an instance of the class:<br>
`const random = new RandomGenerator()`

### RandomOtp Generator: 
After which you call the generateRandom method:<br>
`const generated number = random.generateRandom(option)`
 #### Options 
- **type**: the type of random values you hope to generate 
consists mainly of three types that is:
1. Numerical:this generates only number values
2. Alphabetical: this generates only text or string values
3. Alphanumerical: this generates a mixture both text and number values.
- **length**: this is the length of the random value you want to generate 
there is no limit to the length but 8 is the most recommeded value.

### Random Password Generation: 
After which you call the generateRandom method:<br>
`const generated number = random.generateRandomPassword(option)`
 #### Options 
- **includeSpecialChar**: if the password generated should contain special characters:
1. true: if it must include a special character
2. false| null : if it must not contain a special character

### Generating UserIds: 
After which you call the generateRandom method:<br>
`const generated number = random.generateRandomUid()`<br>
This returns the generated user id.

## Contributing

You are free to add new methods and contribution to this project.

## License

ISC licensed.

