import dotenv from 'dotenv';
import { adjectives, none } from "./words";
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
dotenv.config();

export const secretGenerator = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]}${none[randomNumber]}`
}

export const sendMail = (email) => {
    const options = {
        auth: {
          api_user: process.env.SENDGRID_USERNAME,
          api_key: process.env.SENDGRID_PASSWORD
        }
      }
      const client = nodemailer.createTransport(sgTransport(options));
      return client.sendMail(email);
};
 
export const sendSecretMail = (address, secret) => {
    const email = {
        from:"wjdrms1919@gmail.com",
        to: address,
        subject: "Login Secret for SantosGram",
        html: `Hello, your login secret is ${secret}. <br/> Copy paste on the app/website to log in`
    }

    return sendMail(email);
}; 
