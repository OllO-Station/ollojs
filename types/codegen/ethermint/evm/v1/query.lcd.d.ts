import { MsgEthereumTxResponseSDKType } from "./tx";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountRequest, QueryAccountResponseSDKType, QueryCosmosAccountRequest, QueryCosmosAccountResponseSDKType, QueryValidatorAccountRequest, QueryValidatorAccountResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QueryStorageRequest, QueryStorageResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, EthCallRequest, EstimateGasResponseSDKType, QueryTraceTxRequest, QueryTraceTxResponseSDKType, QueryTraceBlockRequest, QueryTraceBlockResponseSDKType, QueryBaseFeeRequest, QueryBaseFeeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    account(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
    cosmosAccount(params: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponseSDKType>;
    validatorAccount(params: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponseSDKType>;
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    storage(params: QueryStorageRequest): Promise<QueryStorageResponseSDKType>;
    code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    ethCall(params: EthCallRequest): Promise<MsgEthereumTxResponseSDKType>;
    estimateGas(params: EthCallRequest): Promise<EstimateGasResponseSDKType>;
    traceTx(params: QueryTraceTxRequest): Promise<QueryTraceTxResponseSDKType>;
    traceBlock(params: QueryTraceBlockRequest): Promise<QueryTraceBlockResponseSDKType>;
    baseFee(_params?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponseSDKType>;
}
