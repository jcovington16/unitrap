//verify login result with credential, this function will verify all data for credential.
import { verifyCredentialContent } from '@zcloak/login-verify';
const challenge = '';

const did = await provider.getCurrentDid();

const credential = await provider.requestCredentialContent(challenge);

// verify credential content
const result = await verifyCredentialContent(credential, challenge, did.didUri);

console.log(result);