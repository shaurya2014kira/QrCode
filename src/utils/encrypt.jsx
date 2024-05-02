import aes from "crypto-js/aes";
import CryptoJS from "crypto-js";


export const encryptMessage = (message) => {
  return aes.encrypt(message, import.meta.env.VITE_SECRETKEY).toString();
};

export const formatData = (data) => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  console.log("userData", data, {
    ...data,
    companyId: userData.companyId,
    userId: userData.userId,
  });
  let dataObject = {
    data: encryptMessage(
      JSON.stringify({
        ...data,
        companyId: userData.companyId,
        userId: userData.userId,
        url: window.location.pathname,
      })
    ),
  };
  return dataObject;
};

export const formatDataPlain = (data) => {
  let dataObject = {
    data: encryptMessage(JSON.stringify(data)),
  };
  return dataObject;
};

export const encryptionData = (text) => {
  const encryptedText = CryptoJS.AES.encrypt(text, import.meta.env.VITE_SECRETKEY).toString();
  console.log("encryptedText",encryptedText,text);
  const urlSafeEncryptedText = encryptedText.replace(/\+/g, 'xMl3Jk')
    .replace(/\//g, 'Por21Ld')
    .replace(/=/g, 'Ml32');
  return urlSafeEncryptedText
}
export const decryptRoutes = (text) => {

  let decodedEncryptedText = text.replace(/xMl3Jk/g, '+')
    .replace(/Por21Ld/g, '/')
    .replace(/Ml32/g, '=');
console.log("decodedEncryptedText",decodedEncryptedText);

  const decryptedBytes = CryptoJS.AES.decrypt(decodedEncryptedText, import.meta.env.VITE_SECRETKEY);
  const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  console.log("decryptedText",decryptedText);
  return decryptedText
}
export const decryptData = (text) => {
  const bytes = CryptoJS.AES.decrypt(text, import.meta.env.VITE_SECRETKEY);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return data;
};
