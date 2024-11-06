import http from "node:http";
import fs from "node:fs";
import generator from "generate-password";

function helloWorld() {
  fs.writeFileSync("hello-world.js", `"Hello World"`, "utf-8");

  let helloText = fs.readFileSync("hello-world.js", "utf-8");
  return helloText;
}

console.log(helloWorld());

const server = http.createServer((request, response) => {
  console.log(request);

  response.end(`<h1>Hello Node!!!!</h1>\n`);
});

server.listen(3000, () => {
  console.log("Server started Waiting Response");
});

/*

First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
Second, create a program that reads and console.log data from hello.txt
 */

function readWrite() {
  fs.writeFileSync("welcome.txt", "Hello Node", "utf-8");

  fs.readFile("welcome.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return console.log(data);
  });
}

readWrite();

/*
Create a file named "password-generator"  
(use npm install generate-password : (https://www.npmjs.com/package/generate-password)

Create a function that generates random passwords and console.log() that password.
*/

function generatePassword() {
  let password = generator.generate({
    length: 10,
    strict: true,
  });

  const ourPassword = password;

  fs.writeFileSync("password-generator.txt", ourPassword, "utf-8");
  fs.readFile("password-generator.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return console.log(data);
  });
}

generatePassword();

/*
create a file named email-sender  
npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

Try to send your self email using this
*/

