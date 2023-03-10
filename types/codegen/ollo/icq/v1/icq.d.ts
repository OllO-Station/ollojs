import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface InterchainQuery {
    id: string;
    connectionId: string;
    chainId: string;
    queryType: string;
    request: Uint8Array;
    period: string;
    lastHeight: string;
    callbackId: string;
    ttl: Long;
    lastEmission: string;
}
export interface InterchainQuerySDKType {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    period: string;
    last_height: string;
    callback_id: string;
    ttl: Long;
    last_emission: string;
}
export interface DataPoint {
    id: string;
    remoteHeight: Long;
    localHeight: string;
    value: Uint8Array;
}
export interface DataPointSDKType {
    id: string;
    remote_height: Long;
    local_height: string;
    value: Uint8Array;
}
export declare const InterchainQuery: {
    encode(message: InterchainQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQuery;
    fromPartial(object: DeepPartial<InterchainQuery>): InterchainQuery;
};
export declare const DataPoint: {
    encode(message: DataPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint;
    fromPartial(object: DeepPartial<DataPoint>): DataPoint;
};
