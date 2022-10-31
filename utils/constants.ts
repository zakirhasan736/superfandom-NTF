export const STX_NETWORK =
    String(process.env.NEXT_PUBLIC_STX_NETWORK) || 'testnet';
export const STX_RECIPIENT_ADDR = String(
    process.env.NEXT_PUBLIC_STX_RECIPIENT_ADDR
);
export const METAMASK_RECIPIENT_ADDR = String(
    process.env.NEXT_PUBLIC_ETH_RECIPIENT_ADDR
);
export const ETH_NETWORK =
    String(process.env.NEXT_PUBLIC_ETH_NETWORK) || 'test';

export const STX_ENABLED =
    String(process.env.NEXT_PUBLIC_STX_ENABLED) === 'true';

export const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
export const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID;

export const API_BASE_URL = String(process.env.NEXT_PUBLIC_API_BASE_URL);
