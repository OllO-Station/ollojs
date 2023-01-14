import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetClaimRecordRequest, QueryGetClaimRecordResponseSDKType, QueryAllClaimRecordRequest, QueryAllClaimRecordResponseSDKType, QueryGetGoalRequest, QueryGetGoalResponseSDKType, QueryAllGoalRequest, QueryAllGoalResponseSDKType, QueryGetAirdropSupplyRequest, QueryGetAirdropSupplyResponseSDKType, QueryGetInitialClaimRequest, QueryGetInitialClaimResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimRecordAll = this.claimRecordAll.bind(this);
    this.goal = this.goal.bind(this);
    this.goalAll = this.goalAll.bind(this);
    this.airdropSupply = this.airdropSupply.bind(this);
    this.initialClaim = this.initialClaim.bind(this);
  }
  /* Parameters queries the parameters of the module */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/claim/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a ClaimRecord by address. */


  async claimRecord(params: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponseSDKType> {
    const endpoint = `ollo/claim/v1/claim_record/${params.address}`;
    return await this.req.get<QueryGetClaimRecordResponseSDKType>(endpoint);
  }
  /* Queries a list of ClaimRecord items. */


  async claimRecordAll(params: QueryAllClaimRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllClaimRecordResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/claim/v1/claim_record`;
    return await this.req.get<QueryAllClaimRecordResponseSDKType>(endpoint, options);
  }
  /* Queries a Goal by ID. */


  async goal(params: QueryGetGoalRequest): Promise<QueryGetGoalResponseSDKType> {
    const endpoint = `ollo/claim/v1/goal/${params.goalID}`;
    return await this.req.get<QueryGetGoalResponseSDKType>(endpoint);
  }
  /* Queries a list of Goal items. */


  async goalAll(params: QueryAllGoalRequest = {
    pagination: undefined
  }): Promise<QueryAllGoalResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/claim/v1/goal`;
    return await this.req.get<QueryAllGoalResponseSDKType>(endpoint, options);
  }
  /* Queries a AirdropSupply by index. */


  async airdropSupply(_params: QueryGetAirdropSupplyRequest = {}): Promise<QueryGetAirdropSupplyResponseSDKType> {
    const endpoint = `ollo/claim/v1/airdrop_supply`;
    return await this.req.get<QueryGetAirdropSupplyResponseSDKType>(endpoint);
  }
  /* Queries a InitialClaim by index. */


  async initialClaim(_params: QueryGetInitialClaimRequest = {}): Promise<QueryGetInitialClaimResponseSDKType> {
    const endpoint = `ollo/claim/v1/initial_claim`;
    return await this.req.get<QueryGetInitialClaimResponseSDKType>(endpoint);
  }

}