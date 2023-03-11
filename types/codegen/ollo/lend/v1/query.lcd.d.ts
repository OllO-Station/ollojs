import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetLoanRequest, QueryGetLoanResponseSDKType, QueryAllLoanRequest, QueryAllLoanResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    loan(params: QueryGetLoanRequest): Promise<QueryGetLoanResponseSDKType>;
    loanAll(params?: QueryAllLoanRequest): Promise<QueryAllLoanResponseSDKType>;
}
