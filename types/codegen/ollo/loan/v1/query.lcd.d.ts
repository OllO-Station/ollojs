import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetLoansRequest, QueryGetLoansResponseSDKType, QueryAllLoansRequest, QueryAllLoansResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    loans(params: QueryGetLoansRequest): Promise<QueryGetLoansResponseSDKType>;
    loansAll(params?: QueryAllLoansRequest): Promise<QueryAllLoansResponseSDKType>;
}
