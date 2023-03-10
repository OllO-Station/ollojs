import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ClaimRecord, ClaimRecordSDKType, InitialClaim, InitialClaimSDKType } from "./claim";
import { Goal, GoalSDKType } from "./goal";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    airdropSupply?: Coin;
    claimRecords: ClaimRecord[];
    goals: Goal[];
    initialClaim?: InitialClaim;
    params?: Params;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateSDKType {
    airdrop_supply?: CoinSDKType;
    claim_records: ClaimRecordSDKType[];
    goals: GoalSDKType[];
    initial_claim?: InitialClaimSDKType;
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
