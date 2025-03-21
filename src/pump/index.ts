import { Program } from "@coral-xyz/anchor";
import { BN } from "bn.js"
import { Pump } from "./pump";
import idl from "./idl.json";
import { Connection, PublicKey, TransactionInstruction } from "@solana/web3.js";
import { findOrCreateAssociatedTokenAccountByMint } from "src/program-address";
import { NATIVE_MINT } from "@solana/spl-token";
import { BONDING_CURVE_AMOUNT, CREATION_FEE, fee_bps, PAYMENT_OFFSET, TO_DEX_LIQUIDITY_BPS, TOKEN_OFFSET, TOTAL_SUPPLY } from "./constants";
const program = new Program<Pump>(idl)

export async function initialize(
    connection: Connection,
    admin: PublicKey,
    payer: PublicKey
) {
    const { accountCreationInstruction } = await findOrCreateAssociatedTokenAccountByMint(
        connection,
        NATIVE_MINT,
        admin,
        payer
    )
    const instructions: TransactionInstruction[] = [];

    if (accountCreationInstruction) instructions.push(accountCreationInstruction);
    instructions.push(await program.methods
        .initialize(
            admin,
            new BN(fee_bps),
            CREATION_FEE,
            TOTAL_SUPPLY,
            BONDING_CURVE_AMOUNT,
            TO_DEX_LIQUIDITY_BPS,
            TOKEN_OFFSET,
            PAYMENT_OFFSET,
            admin,
            admin
        )
        .accounts({
            payer,
            payment: NATIVE_MINT
        }).instruction() as TransactionInstruction)

    return {
        instructions
    }
}