import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetDenomsRequest, QueryGetDenomsResponseSDKType, QueryGetDenomRequest, QueryGetDenomResponseSDKType, QueryGetDenomWhitelistRequest, QueryGetDenomWhitelistResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    getDenoms(_params?: QueryGetDenomsRequest): Promise<QueryGetDenomsResponseSDKType>;
    getDenom(params: QueryGetDenomRequest): Promise<QueryGetDenomResponseSDKType>;
    getDenomWhitelist(params: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponseSDKType>;
    denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType>;
}
