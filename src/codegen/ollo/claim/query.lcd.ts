import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAirdropsRequest, QueryAirdropsResponseSDKType, QueryAirdropRequest, QueryAirdropResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.airdrops = this.airdrops.bind(this);
    this.airdrop = this.airdrop.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
  }
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/claim/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Airdrops returns all airdrops. */


  async airdrops(params: QueryAirdropsRequest = {
    pagination: undefined
  }): Promise<QueryAirdropsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/claim/airdrops`;
    return await this.req.get<QueryAirdropsResponseSDKType>(endpoint, options);
  }
  /* Airdrop returns the specific airdrop. */


  async airdrop(params: QueryAirdropRequest): Promise<QueryAirdropResponseSDKType> {
    const endpoint = `ollo/claim/airdrops/${params.airdropId}`;
    return await this.req.get<QueryAirdropResponseSDKType>(endpoint);
  }
  /* ClaimRecord returns the claim record for the recipient address. */


  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType> {
    const endpoint = `ollo/claim/airdrops/${params.airdropId}/claim_records/${params.recipient}`;
    return await this.req.get<QueryClaimRecordResponseSDKType>(endpoint);
  }

}