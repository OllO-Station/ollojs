import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetWhoisRequest, QueryGetWhoisResponseSDKType, QueryAllWhoisRequest, QueryAllWhoisResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    whois(params: QueryGetWhoisRequest): Promise<QueryGetWhoisResponseSDKType>;
    whoisAll(params?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponseSDKType>;
}
