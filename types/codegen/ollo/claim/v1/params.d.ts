import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
    decayInformation?: DecayInformation;
    airdropStart?: Date;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    decayInformation?: DecayInformationSDKType;
    airdropStart?: Date;
}
/**
 * DecayInformation defines the information about decay for the airdrop
 * when claimable airdrop amount starts to decrease and when it ends
 */
export interface DecayInformation {
    enabled: boolean;
    decayStart?: Date;
    decayEnd?: Date;
}
/**
 * DecayInformation defines the information about decay for the airdrop
 * when claimable airdrop amount starts to decrease and when it ends
 */
export interface DecayInformationSDKType {
    enabled: boolean;
    decayStart?: Date;
    decayEnd?: Date;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const DecayInformation: {
    encode(message: DecayInformation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecayInformation;
    fromPartial(object: DeepPartial<DecayInformation>): DecayInformation;
};
