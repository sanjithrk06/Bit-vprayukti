const nodemailer = require("nodemailer");

const html = `
    <h1>Hello World!</h1>
    <p>Isn't Nodemailer useful?</p>
`;

const transporter = nodemailer.createTransport({
    service: "gmail",
    // port: 1025,
    // secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "sanjithlap123@gmail.com",
        pass: "mejbfscdstzyhosy",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
    from: "sanjithlap123@gmail.com", // sender address
    to: "sanjithkarthi2004@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);