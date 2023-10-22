import { ecsign, toRpcSig, keccakFromString } from 'ethereumjs-util';
// @ts-ignore
import BN from 'bn.js';

async function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {
  const messageHash = keccakFromString(`\x19Ethereum Signed Message:\n${message.length}${message}`, 256);
  const signature = ecsign(messageHash, privateKey);
  return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), 'hex');
}

async function main() {
  // Define the message you want to sign
  const message = Buffer.from('{"action":"create","created_at":"1697909681","identity":"askcasmir","platform":"twitter","prev":null,"uuid":"db0ba17d-51fd-41dc-86cd-5a2db5000c71"}');

  // Replace 'XXX' with your own private key (in hexadecimal form)
  const privateKeyHex = '520938349f7ff6c4f84e1da21ce28d353d7cc1ebb254a6cbe82ffb8c6e1769db';
  const secretKey = Buffer.from(privateKeyHex, 'hex');

  // Generate the signature
  const signature = await personalSign(message, secretKey);

  // Log the hexadecimal representation of the signature
  console.log(`Signature: 0x${signature.toString('hex')}`);

  // Log the base64 representation of the signature
  console.log(`Signature(base64): ${signature.toString('base64')}`);
}

main();
