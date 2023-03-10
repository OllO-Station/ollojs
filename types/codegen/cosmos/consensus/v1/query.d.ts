import { ConsensusParams, ConsensusParamsSDKType } from "../../../tendermint/types/params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/consensus_param parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/consensus_param parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/consensus_param parameters. */
export interface QueryParamsResponse {
    params?: ConsensusParams;
}
/** QueryParamsResponse defines the response type for querying x/consensus_param parameters. */
export interface QueryParamsResponseSDKType {
    params?: ConsensusParamsSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
