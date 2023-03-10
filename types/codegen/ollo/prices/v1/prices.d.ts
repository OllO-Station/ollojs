import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** DataProvider is the type defined for feed data provider */
export interface DataProvider {
    address: Uint8Array;
    pubKey: Uint8Array;
}
/** DataProvider is the type defined for feed data provider */
export interface DataProviderSDKType {
    address: Uint8Array;
    pubKey: Uint8Array;
}
export interface MsgModuleOwner {
    /** address defines the address of the module owner */
    address: Uint8Array;
    /** pubKey defined the public key of the module owner */
    pubKey: Uint8Array;
    /** the module owner who assigned this new module owner */
    assignerAddress: Uint8Array;
}
export interface MsgModuleOwnerSDKType {
    address: Uint8Array;
    pubKey: Uint8Array;
    assignerAddress: Uint8Array;
}
/**
 * this will be the implementation used later will use pseudo OCR ABI encoded
 * data instead because the structure of how the OCR will be generalized is
 * still unknown OCRAbiEncoded implments the OCR data that is ABCI encoded. The
 * use and form will conform to the Chainlink protocol specification.
 */
export interface OCRAbiEncoded {
    /** Context should be a 32-byte array struct. */
    Context: Uint8Array;
    /**
     * Oracles should be a 32-byte record of all participating oracles. Assuming
     * this is data provider address?
     */
    Oracles: Uint8Array;
    /**
     * Observations should be an array on int192 containing the providers'
     * independent observations.
     */
    Observations: Observation[];
}
/**
 * this will be the implementation used later will use pseudo OCR ABI encoded
 * data instead because the structure of how the OCR will be generalized is
 * still unknown OCRAbiEncoded implments the OCR data that is ABCI encoded. The
 * use and form will conform to the Chainlink protocol specification.
 */
export interface OCRAbiEncodedSDKType {
    Context: Uint8Array;
    Oracles: Uint8Array;
    Observations: ObservationSDKType[];
}
export interface Observation {
    data: Uint8Array;
}
export interface ObservationSDKType {
    data: Uint8Array;
}
export interface FeedRewardSchema {
    /**
     * amount is the base value that rewarded to each valid data provider before
     * designated strategy applied amount is not allowed to be zero
     */
    amount: Long;
    /**
     * reward strategy name, must be a registered strategy
     * this is allowed to be empty, in which case every data provider will be
     * rewarded the same amount token
     */
    strategy: string;
}
export interface FeedRewardSchemaSDKType {
    amount: Long;
    strategy: string;
}
export declare const DataProvider: {
    encode(message: DataProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataProvider;
    fromPartial(object: DeepPartial<DataProvider>): DataProvider;
};
export declare const MsgModuleOwner: {
    encode(message: MsgModuleOwner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleOwner;
    fromPartial(object: DeepPartial<MsgModuleOwner>): MsgModuleOwner;
};
export declare const OCRAbiEncoded: {
    encode(message: OCRAbiEncoded, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OCRAbiEncoded;
    fromPartial(object: DeepPartial<OCRAbiEncoded>): OCRAbiEncoded;
};
export declare const Observation: {
    encode(message: Observation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Observation;
    fromPartial(object: DeepPartial<Observation>): Observation;
};
export declare const FeedRewardSchema: {
    encode(message: FeedRewardSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedRewardSchema;
    fromPartial(object: DeepPartial<FeedRewardSchema>): FeedRewardSchema;
};
