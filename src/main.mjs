import { Encrypter } from "./encrypter.mjs";

const encrypter = new Encrypter();
const encryptedData = encrypter.encrypt();
console.log(encryptedData);
