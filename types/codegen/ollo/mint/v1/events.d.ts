import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** EventMint is emitted when new coins are minted by the minter */
export interface EventMint {
    bondedRatio: string;
    inflation: string;
    annualProvisions: string;
    amount: string;
}
/** EventMint is emitted when new coins are minted by the minter */
export interface EventMintSDKType {
    bondedRatio: string;
    inflation: string;
    annualProvisions: string;
    amount: string;
}
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMint;
    fromPartial(object: DeepPartial<EventMint>): EventMint;
};
