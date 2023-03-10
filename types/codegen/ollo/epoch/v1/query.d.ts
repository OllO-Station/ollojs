import { Epoch, EpochSDKType } from "./epoch";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * * message QueryParamsRequest {} *\/
 * **\/
 * * // QueryParamsResponse is response type for the Query/Params RPC method. *\/
 * * message QueryParamsResponse { *\/
 * *   // params holds all the parameters of this module. *\/
 * *   ollo.epoch.v1.Params params = 1 [ (gogoproto.nullable) = false ]; *\/
 * * } *\/
 */
export interface QueryEpochsRequest {
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * * message QueryParamsRequest {} *\/
 * **\/
 * * // QueryParamsResponse is response type for the Query/Params RPC method. *\/
 * * message QueryParamsResponse { *\/
 * *   // params holds all the parameters of this module. *\/
 * *   ollo.epoch.v1.Params params = 1 [ (gogoproto.nullable) = false ]; *\/
 * * } *\/
 */
export interface QueryEpochsRequestSDKType {
}
export interface QueryEpochsResponse {
    epochs: Epoch[];
}
export interface QueryEpochsResponseSDKType {
    epochs: EpochSDKType[];
}
export interface QueryEpochRequest {
    id: string;
}
export interface QueryEpochRequestSDKType {
    id: string;
}
export interface QueryEpochResponse {
    epoch?: Epoch;
}
export interface QueryEpochResponseSDKType {
    epoch?: EpochSDKType;
}
export interface QueryCurrentEpochRequest {
    id: string;
}
export interface QueryCurrentEpochRequestSDKType {
    id: string;
}
export interface QueryCurrentEpochResponse {
    epoch?: Epoch;
}
export interface QueryCurrentEpochResponseSDKType {
    epoch?: EpochSDKType;
}
export declare const QueryEpochsRequest: {
    encode(_: QueryEpochsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsRequest;
    fromPartial(_: DeepPartial<QueryEpochsRequest>): QueryEpochsRequest;
};
export declare const QueryEpochsResponse: {
    encode(message: QueryEpochsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsResponse;
    fromPartial(object: DeepPartial<QueryEpochsResponse>): QueryEpochsResponse;
};
export declare const QueryEpochRequest: {
    encode(message: QueryEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochRequest;
    fromPartial(object: DeepPartial<QueryEpochRequest>): QueryEpochRequest;
};
export declare const QueryEpochResponse: {
    encode(message: QueryEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochResponse;
    fromPartial(object: DeepPartial<QueryEpochResponse>): QueryEpochResponse;
};
export declare const QueryCurrentEpochRequest: {
    encode(message: QueryCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    encode(message: QueryCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
};
