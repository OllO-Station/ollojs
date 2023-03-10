import { MsgEthereumTx, MsgEthereumTxSDKType } from "./tx";
import { TraceConfig, TraceConfigSDKType, Log, LogSDKType, Params, ParamsSDKType } from "./evm";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
    /** code_hash is the hex-formatted code bytes from the EOA. */
    codeHash: string;
    /** nonce is the account's sequence number. */
    nonce: Long;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
    balance: string;
    code_hash: string;
    nonce: Long;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestSDKType {
    address: string;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
    /** cosmos_address is the cosmos address of the account. */
    cosmosAddress: string;
    /** sequence is the account's sequence number. */
    sequence: Long;
    /** account_number is the account number */
    accountNumber: Long;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseSDKType {
    cosmos_address: string;
    sequence: Long;
    account_number: Long;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
    /** cons_address is the validator cons address to query the account for. */
    consAddress: string;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestSDKType {
    cons_address: string;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
    /** account_address is the cosmos address of the account in bech32 format. */
    accountAddress: string;
    /** sequence is the account's sequence number. */
    sequence: Long;
    /** account_number is the account number */
    accountNumber: Long;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseSDKType {
    account_address: string;
    sequence: Long;
    account_number: Long;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the ethereum hex address to query the balance for. */
    address: string;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
    address: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
    balance: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
    /** address is the ethereum hex address to query the storage state for. */
    address: string;
    /** key defines the key of the storage state */
    key: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestSDKType {
    address: string;
    key: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
    /** value defines the storage state value hash associated with the given key. */
    value: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseSDKType {
    value: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
    /** address is the ethereum hex address to query the code for. */
    address: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
    address: string;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
    /** code represents the code bytes from an ethereum address. */
    code: Uint8Array;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseSDKType {
    code: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
    /** hash is the ethereum transaction hex hash to query the logs for. */
    hash: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestSDKType {
    hash: string;
    pagination?: PageRequestSDKType;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
    /** logs represents the ethereum logs generated from the given transaction. */
    logs: Log[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseSDKType {
    logs: LogSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
    /** args uses the same json format as the json rpc api. */
    args: Uint8Array;
    /** gas_cap defines the default gas cap to be used */
    gasCap: Long;
    /** proposer_address of the requested block in hex format */
    proposerAddress: Uint8Array;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chainId: Long;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestSDKType {
    args: Uint8Array;
    gas_cap: Long;
    proposer_address: Uint8Array;
    chain_id: Long;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
    /** gas returns the estimated gas */
    gas: Long;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseSDKType {
    gas: Long;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
    /** msg is the MsgEthereumTx for the requested transaction */
    msg?: MsgEthereumTx;
    /** trace_config holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /**
     * predecessors is an array of transactions included in the same block
     * need to be replayed first to get correct context for tracing.
     */
    predecessors: MsgEthereumTx[];
    /** block_number of requested transaction */
    blockNumber: Long;
    /** block_hash of requested transaction */
    blockHash: string;
    /** block_time of requested transaction */
    blockTime?: Date;
    /** proposer_address is the proposer of the requested block */
    proposerAddress: Uint8Array;
    /** chain_id is the the eip155 chain id parsed from the requested block header */
    chainId: Long;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestSDKType {
    msg?: MsgEthereumTxSDKType;
    trace_config?: TraceConfigSDKType;
    predecessors: MsgEthereumTxSDKType[];
    block_number: Long;
    block_hash: string;
    block_time?: Date;
    proposer_address: Uint8Array;
    chain_id: Long;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
    /** data is the response serialized in bytes */
    data: Uint8Array;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseSDKType {
    data: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
    /** txs is an array of messages in the block */
    txs: MsgEthereumTx[];
    /** trace_config holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /** block_number of the traced block */
    blockNumber: Long;
    /** block_hash (hex) of the traced block */
    blockHash: string;
    /** block_time of the traced block */
    blockTime?: Date;
    /** proposer_address is the address of the requested block */
    proposerAddress: Uint8Array;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chainId: Long;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestSDKType {
    txs: MsgEthereumTxSDKType[];
    trace_config?: TraceConfigSDKType;
    block_number: Long;
    block_hash: string;
    block_time?: Date;
    proposer_address: Uint8Array;
    chain_id: Long;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
    /** data is the response serialized in bytes */
    data: Uint8Array;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseSDKType {
    data: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestSDKType {
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    /** base_fee is the EIP1559 base fee */
    baseFee: string;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseSDKType {
    base_fee: string;
}
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryCosmosAccountRequest: {
    encode(message: QueryCosmosAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountRequest;
    fromPartial(object: DeepPartial<QueryCosmosAccountRequest>): QueryCosmosAccountRequest;
};
export declare const QueryCosmosAccountResponse: {
    encode(message: QueryCosmosAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountResponse;
    fromPartial(object: DeepPartial<QueryCosmosAccountResponse>): QueryCosmosAccountResponse;
};
export declare const QueryValidatorAccountRequest: {
    encode(message: QueryValidatorAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountRequest;
    fromPartial(object: DeepPartial<QueryValidatorAccountRequest>): QueryValidatorAccountRequest;
};
export declare const QueryValidatorAccountResponse: {
    encode(message: QueryValidatorAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountResponse;
    fromPartial(object: DeepPartial<QueryValidatorAccountResponse>): QueryValidatorAccountResponse;
};
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryStorageRequest: {
    encode(message: QueryStorageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageRequest;
    fromPartial(object: DeepPartial<QueryStorageRequest>): QueryStorageRequest;
};
export declare const QueryStorageResponse: {
    encode(message: QueryStorageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageResponse;
    fromPartial(object: DeepPartial<QueryStorageResponse>): QueryStorageResponse;
};
export declare const QueryCodeRequest: {
    encode(message: QueryCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest;
    fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse;
    fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse;
};
export declare const QueryTxLogsRequest: {
    encode(message: QueryTxLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsRequest;
    fromPartial(object: DeepPartial<QueryTxLogsRequest>): QueryTxLogsRequest;
};
export declare const QueryTxLogsResponse: {
    encode(message: QueryTxLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsResponse;
    fromPartial(object: DeepPartial<QueryTxLogsResponse>): QueryTxLogsResponse;
};
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
export declare const EthCallRequest: {
    encode(message: EthCallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EthCallRequest;
    fromPartial(object: DeepPartial<EthCallRequest>): EthCallRequest;
};
export declare const EstimateGasResponse: {
    encode(message: EstimateGasResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateGasResponse;
    fromPartial(object: DeepPartial<EstimateGasResponse>): EstimateGasResponse;
};
export declare const QueryTraceTxRequest: {
    encode(message: QueryTraceTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxRequest;
    fromPartial(object: DeepPartial<QueryTraceTxRequest>): QueryTraceTxRequest;
};
export declare const QueryTraceTxResponse: {
    encode(message: QueryTraceTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxResponse;
    fromPartial(object: DeepPartial<QueryTraceTxResponse>): QueryTraceTxResponse;
};
export declare const QueryTraceBlockRequest: {
    encode(message: QueryTraceBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockRequest;
    fromPartial(object: DeepPartial<QueryTraceBlockRequest>): QueryTraceBlockRequest;
};
export declare const QueryTraceBlockResponse: {
    encode(message: QueryTraceBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockResponse;
    fromPartial(object: DeepPartial<QueryTraceBlockResponse>): QueryTraceBlockResponse;
};
export declare const QueryBaseFeeRequest: {
    encode(_: QueryBaseFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeRequest;
    fromPartial(_: DeepPartial<QueryBaseFeeRequest>): QueryBaseFeeRequest;
};
export declare const QueryBaseFeeResponse: {
    encode(message: QueryBaseFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeResponse;
    fromPartial(object: DeepPartial<QueryBaseFeeResponse>): QueryBaseFeeResponse;
};
