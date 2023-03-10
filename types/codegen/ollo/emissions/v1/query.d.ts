import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Emission, EmissionSDKType } from "./emissions";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface QueryAllEmissionsRequest {
    pagination?: PageRequest;
}
export interface QueryAllEmissionsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllEmissionsResponse {
    emissions: Emission[];
    pagination?: PageResponse;
}
export interface QueryAllEmissionsResponseSDKType {
    emissions: EmissionSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryEmissionRequest {
    id: Long;
}
export interface QueryEmissionRequestSDKType {
    id: Long;
}
export interface QueryEmissionResponse {
    emissions?: Emission;
}
export interface QueryEmissionResponseSDKType {
    emissions?: EmissionSDKType;
}
export declare const QueryAllEmissionsRequest: {
    encode(message: QueryAllEmissionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEmissionsRequest;
    fromPartial(object: DeepPartial<QueryAllEmissionsRequest>): QueryAllEmissionsRequest;
};
export declare const QueryAllEmissionsResponse: {
    encode(message: QueryAllEmissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEmissionsResponse;
    fromPartial(object: DeepPartial<QueryAllEmissionsResponse>): QueryAllEmissionsResponse;
};
export declare const QueryEmissionRequest: {
    encode(message: QueryEmissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEmissionRequest;
    fromPartial(object: DeepPartial<QueryEmissionRequest>): QueryEmissionRequest;
};
export declare const QueryEmissionResponse: {
    encode(message: QueryEmissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEmissionResponse;
    fromPartial(object: DeepPartial<QueryEmissionResponse>): QueryEmissionResponse;
};
