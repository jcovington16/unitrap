// import ZkidWalletProvider
import { ZkidWalletProvider } from "@zcloak/login-providers";
import { ArweaveDidResolver } from "@zcloak/did-resolver";

import {
  verifyCredentialContent,
  verifyCredentialDigest,
  verifyDidLogin>
  } from '@zcloak/login-verify';

// init zkid wallet provider, make sure zkid wallet is install
const provider = new ZkidWalletProvider();

// init zkid did resolver
const resolver = new ArweaveDidResolver({ server: "https://did-service.zkid.app" });

async function main() {
  // API for checking authorization status: can be used to check whether the User has permitted the authorization to this website. 
  const isAuth = await provider.isAuth();
  
  // API for request authorization: If the authorization has not been permitted yet, request authorization from the User
  await provider.requestAuth();
  
  // API for getting user DID: Get current DID of User from the zkID Wallet
  const currentDid = await provider.getCurrentDid();

  // Create a message to sign    
  const message = 'Test_String';
  
  const signature = await provider.sign(message);
  
  const verifyDidLoginResult = await verifyDidLogin(message, signature, resolver);
  
  
  const challenge = 'Some_Random_Challenge';
    
  // API for obtaining a credential Digest Disclosure from the User     
  const credentialDigest = await provider.requestCredentialDigest(challenge);
  
  const credentialDigestResult = await verifyCredentialDigest(credentialDigest, challenge, currentDid.didUri, resolver);
  
  // API for getting a credential Selective Disclosure from the User (e.g. disclose `name` and `age`)    
  const credential = await provider.requestCredentialContent(challenge, ['name', 'age']);
  
  const credentialContentResult = await verifyCredentialContent(credential, challenge, currentDid.didUri, resolver);
  
}
