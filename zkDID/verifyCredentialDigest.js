import { verifyCredentialDigest } from '@zcloak/login-verify';
//verify login result with credential digest, this verify verify claimerSignature, attestation status, credential owner.
const challenge = '';

const did = await provider.getCurrentDid();

// verify credential digest
const credentialDigest = await provider.requestCredentialDigest(challenge);

const result = await verifyCredentialDigest(credentialDigest, challenge, did.didUri);
