import { RequestQuery, RequestQuerySDKType } from "../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface InterchainQueryPacketData {
    data: Uint8Array;
    memo: string;
}
export interface InterchainQueryPacketDataSDKType {
    data: Uint8Array;
    memo: string;
}
export interface InterchainQueryPacketAck {
    data: Uint8Array;
}
export interface InterchainQueryPacketAckSDKType {
    data: Uint8Array;
}
export interface CosmosQuery {
    requests: RequestQuery[];
}
export interface CosmosQuerySDKType {
    requests: RequestQuerySDKType[];
}
export declare const InterchainQueryPacketData: {
    encode(message: InterchainQueryPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQueryPacketData;
    fromPartial(object: DeepPartial<InterchainQueryPacketData>): InterchainQueryPacketData;
};
export declare const InterchainQueryPacketAck: {
    encode(message: InterchainQueryPacketAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQueryPacketAck;
    fromPartial(object: DeepPartial<InterchainQueryPacketAck>): InterchainQueryPacketAck;
};
export declare const CosmosQuery: {
    encode(message: CosmosQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmosQuery;
    fromPartial(object: DeepPartial<CosmosQuery>): CosmosQuery;
};
