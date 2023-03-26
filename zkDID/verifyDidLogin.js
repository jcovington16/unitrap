import { verifyDidLogin } from '@zcloak/login-verify';

// to sign message
const message = '';

const did = await provider.getCurrentDid();

const signature = await provider.didLogin(message);

// to verify the signature in order to authenticate the user
const result = verifyDidLogin(message, signature, did.authenticationKey);

console.log(result)

export async function verifyDidLogin<T extends 'did_login' | 'did_login$Kilt' = 'did_login'>(
    message: HexString | Uint8Array | string,
    data: RequestRpcs<T>[T][1],
    resolver?: DidResolver
  ): Promise<boolean> {
  ......
  }