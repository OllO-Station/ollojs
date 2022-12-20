import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAirdropsRequest, QueryAirdropsResponseSDKType, QueryAirdropRequest, QueryAirdropResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    airdrops(params?: QueryAirdropsRequest): Promise<QueryAirdropsResponseSDKType>;
    airdrop(params: QueryAirdropRequest): Promise<QueryAirdropResponseSDKType>;
    claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
}
