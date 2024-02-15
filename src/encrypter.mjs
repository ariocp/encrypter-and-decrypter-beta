export class Encrypter {
    constructor() {
        this.data = "ariocp";
        this.salt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-_+=[]{}|/?<>.:;'\"`~^0123456789";
    }

    encrypt() {
        let encryptedData = "";
        const dataLength = this.data.length;
        const saltLength = this.salt.length;

        for (let i = 0; i < dataLength; i++) {
            const char = this.data[i];
            const charIndex = this.salt.indexOf(char);

            if (charIndex !== -1) {
                const randomIndex = Math.floor(Math.random() * saltLength);
                encryptedData += this.salt[randomIndex];
            } else {
                encryptedData += char;
            }
        }

        while (encryptedData.length < 14) {
            const randomIndex = Math.floor(Math.random() * saltLength);
            encryptedData += this.salt[randomIndex];
        }

        return "x-" + encryptedData.slice(0, 14);
    }
}
