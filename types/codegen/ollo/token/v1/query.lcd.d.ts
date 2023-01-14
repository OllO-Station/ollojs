import { LCDClient } from "@osmonauts/lcd";
import { QueryTokenRequest, QueryTokenResponseSDKType, QueryTokensRequest, QueryTokensResponseSDKType, QueryFeesRequest, QueryFeesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryBurnRequest, QueryBurnResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    token(params: QueryTokenRequest): Promise<QueryTokenResponseSDKType>;
    tokens(params: QueryTokensRequest): Promise<QueryTokensResponseSDKType>;
    fees(params: QueryFeesRequest): Promise<QueryFeesResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    burn(_params?: QueryBurnRequest): Promise<QueryBurnResponseSDKType>;
}
