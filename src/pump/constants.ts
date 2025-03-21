import { BN } from "bn.js";

export const LAMPORTS_PER_SOL = new BN(1_000_000_000);
export const TOTAL_SUPPLY = new BN(1_000_000_000).mul(LAMPORTS_PER_SOL);
export const BONDING_CURVE_AMOUNT = new BN(800_000_000).mul(LAMPORTS_PER_SOL);
export const BASIS_POINTS = new BN(10000);

export const TOKEN_OFFSET = new BN('266666666').mul(LAMPORTS_PER_SOL);
export const PAYMENT_OFFSET = new BN('333333333');
export const CREATION_FEE = LAMPORTS_PER_SOL.div(new BN(10));
export const TO_DEX_LIQUIDITY_BPS = new BN(9500);

export const fee_bps = 100;