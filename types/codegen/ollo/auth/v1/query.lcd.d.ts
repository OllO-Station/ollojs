import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInterchainAccountAddressRequest, QueryInterchainAccountAddressResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    interchainAccountAddress(params: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponseSDKType>;
}
