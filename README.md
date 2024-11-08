# node_checkpoint

# Node.js Hello World and Utility Scripts

This repository contains a simple Node.js application that demonstrates various basic functionalities, including file creation, reading/writing files, generating passwords, and sending emails.

## Features

1. **Hello World Script**: Creates and reads a file containing "Hello World".
2. **Welcome Message**: Creates and reads a file named `welcome.txt` that contains "Hello Node".
3. **Password Generator**: Generates random passwords and saves them to a file named `password-generator.txt`.
4. **Email Sender**: Sends an email using Node.js and the `nodemailer` library.

## Requirements

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- Packages:
  - `generate-password`
  - `nodemailer`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Goldmyn/node_checkpoint
   cd your-repository
   ```

2. Install the required packages:

   ```bash
   npm install generate-password nodemailer
   ```

3. Replace the email configuration placeholders in the email-sending script with your own Gmail address and app password.

## Usage

1. **Start the Server**:

   Run the main script to start the server:

   ```bash
   node index.js
   ```

   The server will start and listen on port 3000. You can access it in your browser at `http://localhost:3000`.

2. **File Operations**:

   - Running the script will create several files:
     - `hello-world.js`
     - `welcome.txt`
     - `password-generator.txt`

   Each created file will contain the relevant text or generated passwords.

3. **Sending Emails**:

   The email functionality will send an email to the specified address. Ensure that you've configured your Gmail account to allow less secure apps or used an app password if you have 2-Step Verification enabled.

## Code Explanation

### Hello World Functionality

```javascript
function helloWorld() {
  fs.writeFileSync("hello-world.js", `"Hello World"`, "utf-8");
  let helloText = fs.readFileSync("hello-world.js", "utf-8");
  return helloText;
}
```

### Welcome Message

```javascript
function readWrite() {
  fs.writeFileSync("welcome.txt", "Hello Node", "utf-8");
  fs.readFile("welcome.txt", "utf-8", (err, data) => {...});
}
```

### Password Generation

```javascript
function generatePassword() {
  let password = generator.generate({ length: 10, strict: true });
  fs.writeFileSync("password-generator.txt", ourPassword, "utf-8");
  ...
}
```

### Sending Email

```javascript
var transporter = nodemailer.createTransport({...});
transporter.sendMail(mailOptions, function (error, info) {...});
```

## Conclusion

This project serves as a basic introduction to file handling, web servers, password generation, and email sending in Node.js.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
