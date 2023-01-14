import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType, QueryDistributionRequest, QueryDistributionResponseSDKType, QueryLastBlockTimeRequest, QueryLastBlockTimeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    inflation(_params?: QueryInflationRequest): Promise<QueryInflationResponseSDKType>;
    annualProvisions(_params?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType>;
    distribution(_params?: QueryDistributionRequest): Promise<QueryDistributionResponseSDKType>;
    lastBlockTime(_params?: QueryLastBlockTimeRequest): Promise<QueryLastBlockTimeResponseSDKType>;
}
