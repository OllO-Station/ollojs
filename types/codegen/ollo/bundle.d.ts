import * as _172 from "./claim/v1/claim";
import * as _173 from "./claim/v1/events";
import * as _174 from "./claim/v1/genesis";
import * as _175 from "./claim/v1/goal";
import * as _176 from "./claim/v1/params";
import * as _177 from "./claim/v1/query";
import * as _178 from "./claim/v1/tx";
import * as _179 from "./emissions/v1/emissions";
import * as _180 from "./emissions/v1/genesis";
import * as _181 from "./emissions/v1/params";
import * as _182 from "./emissions/v1/query";
import * as _183 from "./emissions/v1/tx";
import * as _184 from "./epoch/v1/epoch";
import * as _185 from "./epoch/v1/events";
import * as _186 from "./epoch/v1/genesis";
import * as _187 from "./epoch/v1/query";
import * as _188 from "./farming/v1/farming";
import * as _189 from "./farming/v1/genesis";
import * as _190 from "./farming/v1/params";
import * as _191 from "./farming/v1/proposal";
import * as _192 from "./farming/v1/query";
import * as _193 from "./farming/v1/tx";
import * as _194 from "./fees/v1/fees";
import * as _195 from "./fees/v1/genesis";
import * as _196 from "./fees/v1/params";
import * as _197 from "./fees/v1/proprosal";
import * as _198 from "./fees/v1/query";
import * as _199 from "./grants/v1/events";
import * as _200 from "./grants/v1/genesis";
import * as _201 from "./grants/v1/grants";
import * as _202 from "./grants/v1/params";
import * as _203 from "./grants/v1/query";
import * as _204 from "./grants/v1/tx";
import * as _205 from "./icq/v1/events";
import * as _206 from "./icq/v1/genesis";
import * as _207 from "./icq/v1/icq";
import * as _208 from "./icq/v1/packet";
import * as _209 from "./icq/v1/params";
import * as _210 from "./icq/v1/query";
import * as _211 from "./icq/v1/tx";
import * as _212 from "./incentive/v1/deposit";
import * as _213 from "./incentive/v1/events";
import * as _214 from "./incentive/v1/genesis";
import * as _215 from "./incentive/v1/incentive";
import * as _216 from "./incentive/v1/mm";
import * as _217 from "./incentive/v1/params";
import * as _218 from "./incentive/v1/proprosal";
import * as _219 from "./incentive/v1/query";
import * as _220 from "./incentive/v1/tx";
import * as _221 from "./liquidity/v1/basic";
import * as _222 from "./liquidity/v1/events";
import * as _223 from "./liquidity/v1/genesis";
import * as _224 from "./liquidity/v1/liquidity";
import * as _225 from "./liquidity/v1/order";
import * as _226 from "./liquidity/v1/pair";
import * as _227 from "./liquidity/v1/params";
import * as _228 from "./liquidity/v1/pool";
import * as _229 from "./liquidity/v1/proprosal";
import * as _230 from "./liquidity/v1/query";
import * as _231 from "./liquidity/v1/ranged";
import * as _232 from "./liquidity/v1/tx";
import * as _233 from "./loan/v1/borrow";
import * as _234 from "./loan/v1/events";
import * as _235 from "./loan/v1/genesis";
import * as _236 from "./loan/v1/loan";
import * as _237 from "./loan/v1/loans";
import * as _238 from "./loan/v1/packet";
import * as _239 from "./loan/v1/params";
import * as _240 from "./loan/v1/query";
import * as _241 from "./loan/v1/tx";
import * as _242 from "./lock/v1/events";
import * as _243 from "./lock/v1/genesis";
import * as _244 from "./lock/v1/lock";
import * as _245 from "./lock/v1/params";
import * as _246 from "./lock/v1/query";
import * as _247 from "./lock/v1/tx";
import * as _248 from "./market/v1/genesis";
import * as _249 from "./market/v1/packet";
import * as _250 from "./market/v1/params";
import * as _251 from "./market/v1/query";
import * as _253 from "./mint/v1/events";
import * as _254 from "./mint/v1/genesis";
import * as _255 from "./mint/v1/mint";
import * as _256 from "./mint/v1/params";
import * as _257 from "./mint/v1/query";
import * as _259 from "./nft/v1/genesis";
import * as _260 from "./nft/v1/nft";
import * as _261 from "./nft/v1/params";
import * as _262 from "./nft/v1/query";
import * as _263 from "./nft/v1/tx";
import * as _264 from "./ons/v1/genesis";
import * as _265 from "./ons/v1/packet";
import * as _266 from "./ons/v1/params";
import * as _267 from "./ons/v1/query";
import * as _268 from "./ons/v1/tx";
import * as _269 from "./ons/v1/whois";
import * as _270 from "./prices/v1/band";
import * as _271 from "./prices/v1/events";
import * as _272 from "./prices/v1/genesis";
import * as _273 from "./prices/v1/packet";
import * as _274 from "./prices/v1/params";
import * as _275 from "./prices/v1/prices";
import * as _276 from "./prices/v1/query";
import * as _277 from "./prices/v1/tx";
import * as _278 from "./ratelimit/v1/events";
import * as _279 from "./ratelimit/v1/genesis";
import * as _280 from "./ratelimit/v1/params";
import * as _281 from "./ratelimit/v1/query";
import * as _282 from "./reserve/v1/events";
import * as _283 from "./reserve/v1/genesis";
import * as _284 from "./reserve/v1/metadata";
import * as _285 from "./reserve/v1/params";
import * as _286 from "./reserve/v1/query";
import * as _287 from "./reserve/v1/reserve";
import * as _288 from "./reserve/v1/tx";
import * as _289 from "./token/v1/genesis";
import * as _290 from "./token/v1/params";
import * as _291 from "./token/v1/query";
import * as _292 from "./token/v1/token";
import * as _293 from "./token/v1/tx";
import * as _294 from "./vault/v1/events";
import * as _295 from "./vault/v1/genesis";
import * as _296 from "./vault/v1/params";
import * as _297 from "./vault/v1/query";
import * as _298 from "./vault/v1/tx";
import * as _299 from "./vault/v1/vault";
import * as _460 from "./claim/v1/query.lcd";
import * as _461 from "./emissions/v1/query.lcd";
import * as _462 from "./epoch/v1/query.lcd";
import * as _463 from "./farming/v1/query.lcd";
import * as _464 from "./fees/v1/query.lcd";
import * as _465 from "./grants/v1/query.lcd";
import * as _466 from "./icq/v1/query.lcd";
import * as _467 from "./incentive/v1/query.lcd";
import * as _468 from "./liquidity/v1/query.lcd";
import * as _469 from "./loan/v1/query.lcd";
import * as _470 from "./lock/v1/query.lcd";
import * as _471 from "./market/v1/query.lcd";
import * as _472 from "./mint/v1/query.lcd";
import * as _473 from "./nft/v1/query.lcd";
import * as _474 from "./ons/v1/query.lcd";
import * as _475 from "./prices/v1/query.lcd";
import * as _476 from "./ratelimit/v1/query.lcd";
import * as _477 from "./reserve/v1/query.lcd";
import * as _478 from "./token/v1/query.lcd";
import * as _479 from "./vault/v1/query.lcd";
import * as _480 from "./claim/v1/query.rpc.Query";
import * as _481 from "./emissions/v1/query.rpc.Query";
import * as _482 from "./epoch/v1/query.rpc.Query";
import * as _483 from "./farming/v1/query.rpc.Query";
import * as _484 from "./fees/v1/query.rpc.Query";
import * as _485 from "./grants/v1/query.rpc.Query";
import * as _486 from "./icq/v1/query.rpc.Query";
import * as _487 from "./incentive/v1/query.rpc.Query";
import * as _488 from "./liquidity/v1/query.rpc.Query";
import * as _489 from "./loan/v1/query.rpc.Query";
import * as _490 from "./lock/v1/query.rpc.Query";
import * as _491 from "./market/v1/query.rpc.Query";
import * as _492 from "./mint/v1/query.rpc.Query";
import * as _493 from "./nft/v1/query.rpc.Query";
import * as _494 from "./ons/v1/query.rpc.Query";
import * as _495 from "./prices/v1/query.rpc.Query";
import * as _496 from "./ratelimit/v1/query.rpc.Query";
import * as _497 from "./reserve/v1/query.rpc.Query";
import * as _498 from "./token/v1/query.rpc.Query";
import * as _499 from "./vault/v1/query.rpc.Query";
import * as _500 from "./claim/v1/tx.rpc.msg";
import * as _501 from "./emissions/v1/tx.rpc.msg";
import * as _502 from "./farming/v1/tx.rpc.msg";
import * as _503 from "./grants/v1/tx.rpc.msg";
import * as _504 from "./incentive/v1/tx.rpc.msg";
import * as _505 from "./liquidity/v1/tx.rpc.msg";
import * as _506 from "./loan/v1/tx.rpc.msg";
import * as _507 from "./lock/v1/tx.rpc.msg";
import * as _508 from "./nft/v1/tx.rpc.msg";
import * as _509 from "./ons/v1/tx.rpc.msg";
import * as _510 from "./prices/v1/tx.rpc.msg";
import * as _511 from "./reserve/v1/tx.rpc.msg";
import * as _512 from "./token/v1/tx.rpc.msg";
import * as _513 from "./vault/v1/tx.rpc.msg";
export declare namespace ollo {
    namespace claim {
        const v1: {
            MsgClientImpl: typeof _500.MsgClientImpl;
            QueryClientImpl: typeof _480.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                claimRecord(request: _177.QueryGetClaimRecordRequest): Promise<_177.QueryGetClaimRecordResponse>;
                claimRecordAll(request?: _177.QueryAllClaimRecordRequest): Promise<_177.QueryAllClaimRecordResponse>;
                goal(request: _177.QueryGetGoalRequest): Promise<_177.QueryGetGoalResponse>;
                goalAll(request?: _177.QueryAllGoalRequest): Promise<_177.QueryAllGoalResponse>;
                airdropSupply(request?: _177.QueryGetAirdropSupplyRequest): Promise<_177.QueryGetAirdropSupplyResponse>;
                initialClaim(request?: _177.QueryGetInitialClaimRequest): Promise<_177.QueryGetInitialClaimResponse>;
            };
            LCDQueryClient: typeof _460.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _178.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _178.MsgClaim): {
                        typeUrl: string;
                        value: _178.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _178.MsgClaim): {
                        typeUrl: string;
                        value: _178.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/ollo.claim.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ claimer, goalId }: _178.MsgClaim) => {
                        claimer: string;
                        goal_id: string;
                    };
                    fromAmino: ({ claimer, goal_id }: {
                        claimer: string;
                        goal_id: string;
                    }) => _178.MsgClaim;
                };
            };
            MsgClaim: {
                encode(message: _178.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgClaim;
                fromPartial(object: {
                    claimer?: string;
                    goalId?: string | number | import("long");
                }): _178.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _178.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgClaimResponse;
                fromPartial(object: {
                    claimed?: string;
                }): _178.MsgClaimResponse;
            };
            QueryParamsRequest: {
                encode(_: _177.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsRequest;
                fromPartial(_: {}): _177.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _177.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        decayInformation?: {
                            enabled?: boolean;
                            decayStart?: Date;
                            decayEnd?: Date;
                        };
                        airdropStart?: Date;
                    };
                }): _177.QueryParamsResponse;
            };
            QueryGetClaimRecordRequest: {
                encode(message: _177.QueryGetClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetClaimRecordRequest;
                fromPartial(object: {
                    address?: string;
                }): _177.QueryGetClaimRecordRequest;
            };
            QueryGetClaimRecordResponse: {
                encode(message: _177.QueryGetClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetClaimRecordResponse;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        claimable?: string;
                        completedGoals?: (string | number | import("long"))[];
                        claimedGoals?: (string | number | import("long"))[];
                    };
                }): _177.QueryGetClaimRecordResponse;
            };
            QueryAllClaimRecordRequest: {
                encode(message: _177.QueryAllClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryAllClaimRecordRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _177.QueryAllClaimRecordRequest;
            };
            QueryAllClaimRecordResponse: {
                encode(message: _177.QueryAllClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryAllClaimRecordResponse;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        claimable?: string;
                        completedGoals?: (string | number | import("long"))[];
                        claimedGoals?: (string | number | import("long"))[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _177.QueryAllClaimRecordResponse;
            };
            QueryGetGoalRequest: {
                encode(message: _177.QueryGetGoalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetGoalRequest;
                fromPartial(object: {
                    goalID?: string | number | import("long");
                }): _177.QueryGetGoalRequest;
            };
            QueryGetGoalResponse: {
                encode(message: _177.QueryGetGoalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetGoalResponse;
                fromPartial(object: {
                    Goal?: {
                        id?: string | number | import("long");
                        description?: string;
                        weight?: string;
                    };
                }): _177.QueryGetGoalResponse;
            };
            QueryAllGoalRequest: {
                encode(message: _177.QueryAllGoalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryAllGoalRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _177.QueryAllGoalRequest;
            };
            QueryAllGoalResponse: {
                encode(message: _177.QueryAllGoalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryAllGoalResponse;
                fromPartial(object: {
                    Goal?: {
                        id?: string | number | import("long");
                        description?: string;
                        weight?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _177.QueryAllGoalResponse;
            };
            QueryGetAirdropSupplyRequest: {
                encode(_: _177.QueryGetAirdropSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetAirdropSupplyRequest;
                fromPartial(_: {}): _177.QueryGetAirdropSupplyRequest;
            };
            QueryGetAirdropSupplyResponse: {
                encode(message: _177.QueryGetAirdropSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetAirdropSupplyResponse;
                fromPartial(object: {
                    AirdropSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _177.QueryGetAirdropSupplyResponse;
            };
            QueryGetInitialClaimRequest: {
                encode(_: _177.QueryGetInitialClaimRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetInitialClaimRequest;
                fromPartial(_: {}): _177.QueryGetInitialClaimRequest;
            };
            QueryGetInitialClaimResponse: {
                encode(message: _177.QueryGetInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryGetInitialClaimResponse;
                fromPartial(object: {
                    InitialClaim?: {
                        enabled?: boolean;
                        goalId?: string | number | import("long");
                    };
                }): _177.QueryGetInitialClaimResponse;
            };
            Params: {
                encode(message: _176.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Params;
                fromPartial(object: {
                    decayInformation?: {
                        enabled?: boolean;
                        decayStart?: Date;
                        decayEnd?: Date;
                    };
                    airdropStart?: Date;
                }): _176.Params;
            };
            DecayInformation: {
                encode(message: _176.DecayInformation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.DecayInformation;
                fromPartial(object: {
                    enabled?: boolean;
                    decayStart?: Date;
                    decayEnd?: Date;
                }): _176.DecayInformation;
            };
            Goal: {
                encode(message: _175.Goal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Goal;
                fromPartial(object: {
                    id?: string | number | import("long");
                    description?: string;
                    weight?: string;
                }): _175.Goal;
            };
            GenesisState: {
                encode(message: _174.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.GenesisState;
                fromPartial(object: {
                    airdropSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    claimRecords?: {
                        address?: string;
                        claimable?: string;
                        completedGoals?: (string | number | import("long"))[];
                        claimedGoals?: (string | number | import("long"))[];
                    }[];
                    goals?: {
                        id?: string | number | import("long");
                        description?: string;
                        weight?: string;
                    }[];
                    initialClaim?: {
                        enabled?: boolean;
                        goalId?: string | number | import("long");
                    };
                    params?: {
                        decayInformation?: {
                            enabled?: boolean;
                            decayStart?: Date;
                            decayEnd?: Date;
                        };
                        airdropStart?: Date;
                    };
                }): _174.GenesisState;
            };
            EventGoalCompleted: {
                encode(message: _173.EventGoalCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EventGoalCompleted;
                fromPartial(object: {
                    goalID?: string | number | import("long");
                    address?: string;
                }): _173.EventGoalCompleted;
            };
            EventGoalClaimed: {
                encode(message: _173.EventGoalClaimed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EventGoalClaimed;
                fromPartial(object: {
                    goalID?: string | number | import("long");
                    claimer?: string;
                }): _173.EventGoalClaimed;
            };
            claimActionFromJSON(object: any): _172.ClaimAction;
            claimActionToJSON(object: _172.ClaimAction): string;
            claimStatusFromJSON(object: any): _172.ClaimStatus;
            claimStatusToJSON(object: _172.ClaimStatus): string;
            ClaimAction: typeof _172.ClaimAction;
            ClaimActionSDKType: typeof _172.ClaimAction;
            ClaimStatus: typeof _172.ClaimStatus;
            ClaimStatusSDKType: typeof _172.ClaimStatus;
            InitialClaim: {
                encode(message: _172.InitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.InitialClaim;
                fromPartial(object: {
                    enabled?: boolean;
                    goalId?: string | number | import("long");
                }): _172.InitialClaim;
            };
            ClaimRecord: {
                encode(message: _172.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ClaimRecord;
                fromPartial(object: {
                    address?: string;
                    claimable?: string;
                    completedGoals?: (string | number | import("long"))[];
                    claimedGoals?: (string | number | import("long"))[];
                }): _172.ClaimRecord;
            };
        };
    }
    namespace emissions {
        const v1: {
            MsgClientImpl: typeof _501.MsgClientImpl;
            QueryClientImpl: typeof _481.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryEmission(request: _182.QueryEmissionRequest): Promise<_182.QueryEmissionResponse>;
                queryAllEmissions(request?: _182.QueryAllEmissionsRequest): Promise<_182.QueryAllEmissionsResponse>;
            };
            LCDQueryClient: typeof _461.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    msgCreate(value: _183.MsgCreateRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDeposit(value: _183.MsgDepositRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgWithdraw(value: _183.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDraw(value: _183.MsgDrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgRepay(value: _183.MsgRepayRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgClose(value: _183.MsgCloseRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    msgCreate(value: _183.MsgCreateRequest): {
                        typeUrl: string;
                        value: _183.MsgCreateRequest;
                    };
                    msgDeposit(value: _183.MsgDepositRequest): {
                        typeUrl: string;
                        value: _183.MsgDepositRequest;
                    };
                    msgWithdraw(value: _183.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _183.MsgWithdrawRequest;
                    };
                    msgDraw(value: _183.MsgDrawRequest): {
                        typeUrl: string;
                        value: _183.MsgDrawRequest;
                    };
                    msgRepay(value: _183.MsgRepayRequest): {
                        typeUrl: string;
                        value: _183.MsgRepayRequest;
                    };
                    msgClose(value: _183.MsgCloseRequest): {
                        typeUrl: string;
                        value: _183.MsgCloseRequest;
                    };
                };
                fromPartial: {
                    msgCreate(value: _183.MsgCreateRequest): {
                        typeUrl: string;
                        value: _183.MsgCreateRequest;
                    };
                    msgDeposit(value: _183.MsgDepositRequest): {
                        typeUrl: string;
                        value: _183.MsgDepositRequest;
                    };
                    msgWithdraw(value: _183.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _183.MsgWithdrawRequest;
                    };
                    msgDraw(value: _183.MsgDrawRequest): {
                        typeUrl: string;
                        value: _183.MsgDrawRequest;
                    };
                    msgRepay(value: _183.MsgRepayRequest): {
                        typeUrl: string;
                        value: _183.MsgRepayRequest;
                    };
                    msgClose(value: _183.MsgCloseRequest): {
                        typeUrl: string;
                        value: _183.MsgCloseRequest;
                    };
                };
            };
            AminoConverter: {
                "/ollo.emissions.v1.MsgCreateRequest": {
                    aminoType: string;
                    toAmino: ({ from, amountIn, amountOut }: _183.MsgCreateRequest) => {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    };
                    fromAmino: ({ from, amount_in, amount_out }: {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    }) => _183.MsgCreateRequest;
                };
                "/ollo.emissions.v1.MsgDepositRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _183.MsgDepositRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _183.MsgDepositRequest;
                };
                "/ollo.emissions.v1.MsgWithdrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _183.MsgWithdrawRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _183.MsgWithdrawRequest;
                };
                "/ollo.emissions.v1.MsgDrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _183.MsgDrawRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _183.MsgDrawRequest;
                };
                "/ollo.emissions.v1.MsgRepayRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _183.MsgRepayRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _183.MsgRepayRequest;
                };
                "/ollo.emissions.v1.MsgCloseRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId }: _183.MsgCloseRequest) => {
                        from: string;
                        user_emission_id: string;
                    };
                    fromAmino: ({ from, user_emission_id }: {
                        from: string;
                        user_emission_id: string;
                    }) => _183.MsgCloseRequest;
                };
            };
            MsgCreateRequest: {
                encode(message: _183.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgCreateRequest;
                fromPartial(object: {
                    from?: string;
                    amountIn?: string;
                    amountOut?: string;
                }): _183.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _183.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgCreateResponse;
                fromPartial(_: {}): _183.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _183.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgDepositRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _183.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _183.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgDepositResponse;
                fromPartial(_: {}): _183.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _183.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgWithdrawRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _183.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _183.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgWithdrawResponse;
                fromPartial(_: {}): _183.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _183.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgDrawRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _183.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _183.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgDrawResponse;
                fromPartial(_: {}): _183.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _183.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgRepayRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _183.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _183.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgRepayResponse;
                fromPartial(_: {}): _183.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _183.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgCloseRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                }): _183.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _183.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgCloseResponse;
                fromPartial(_: {}): _183.MsgCloseResponse;
            };
            QueryAllEmissionsRequest: {
                encode(message: _182.QueryAllEmissionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryAllEmissionsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _182.QueryAllEmissionsRequest;
            };
            QueryAllEmissionsResponse: {
                encode(message: _182.QueryAllEmissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryAllEmissionsResponse;
                fromPartial(object: {
                    emissions?: {
                        id?: string | number | import("long");
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                        createdAt?: Date;
                        interestAccumulated?: string;
                        closingFeeAccumulated?: string;
                        blockHeight?: string | number | import("long");
                        blockTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _182.QueryAllEmissionsResponse;
            };
            QueryEmissionRequest: {
                encode(message: _182.QueryEmissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryEmissionRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _182.QueryEmissionRequest;
            };
            QueryEmissionResponse: {
                encode(message: _182.QueryEmissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryEmissionResponse;
                fromPartial(object: {
                    emissions?: {
                        id?: string | number | import("long");
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                        createdAt?: Date;
                        interestAccumulated?: string;
                        closingFeeAccumulated?: string;
                        blockHeight?: string | number | import("long");
                        blockTime?: Date;
                    };
                }): _182.QueryEmissionResponse;
            };
            Params: {
                encode(_: _181.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Params;
                fromPartial(_: {}): _181.Params;
            };
            GenesisState: {
                encode(_: _180.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GenesisState;
                fromPartial(_: {}): _180.GenesisState;
            };
            Emission: {
                encode(message: _179.Emission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Emission;
                fromPartial(object: {
                    id?: string | number | import("long");
                    owner?: string;
                    amountIn?: string;
                    amountOut?: string;
                    createdAt?: Date;
                    interestAccumulated?: string;
                    closingFeeAccumulated?: string;
                    blockHeight?: string | number | import("long");
                    blockTime?: Date;
                }): _179.Emission;
            };
            EmissionsEmission: {
                encode(message: _179.EmissionsEmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EmissionsEmission;
                fromPartial(object: {
                    id?: string | number | import("long");
                    amountIn?: string;
                    amountOut?: string;
                    createdAt?: Date;
                }): _179.EmissionsEmission;
            };
            EmissionsEmissionRewards: {
                encode(message: _179.EmissionsEmissionRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EmissionsEmissionRewards;
                fromPartial(object: {
                    user?: string;
                    blockHeight?: string | number | import("long");
                    amount?: string;
                }): _179.EmissionsEmissionRewards;
            };
        };
    }
    namespace epoch {
        const v1: {
            QueryClientImpl: typeof _482.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochs(request?: _187.QueryEpochsRequest): Promise<_187.QueryEpochsResponse>;
                epoch(request: _187.QueryEpochRequest): Promise<_187.QueryEpochResponse>;
                currentEpoch(request: _187.QueryCurrentEpochRequest): Promise<_187.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _462.LCDQueryClient;
            QueryEpochsRequest: {
                encode(_: _187.QueryEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryEpochsRequest;
                fromPartial(_: {}): _187.QueryEpochsRequest;
            };
            QueryEpochsResponse: {
                encode(message: _187.QueryEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryEpochsResponse;
                fromPartial(object: {
                    epochs?: {
                        id?: string;
                        start?: Date;
                        duration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        currentEpochNumber?: string | number | import("long");
                        currentEpochStart?: Date;
                        epochStarted?: boolean;
                        currentEpochStartHeight?: string | number | import("long");
                    }[];
                }): _187.QueryEpochsResponse;
            };
            QueryEpochRequest: {
                encode(message: _187.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryEpochRequest;
                fromPartial(object: {
                    id?: string;
                }): _187.QueryEpochRequest;
            };
            QueryEpochResponse: {
                encode(message: _187.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryEpochResponse;
                fromPartial(object: {
                    epoch?: {
                        id?: string;
                        start?: Date;
                        duration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        currentEpochNumber?: string | number | import("long");
                        currentEpochStart?: Date;
                        epochStarted?: boolean;
                        currentEpochStartHeight?: string | number | import("long");
                    };
                }): _187.QueryEpochResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _187.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryCurrentEpochRequest;
                fromPartial(object: {
                    id?: string;
                }): _187.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _187.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryCurrentEpochResponse;
                fromPartial(object: {
                    epoch?: {
                        id?: string;
                        start?: Date;
                        duration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        currentEpochNumber?: string | number | import("long");
                        currentEpochStart?: Date;
                        epochStarted?: boolean;
                        currentEpochStartHeight?: string | number | import("long");
                    };
                }): _187.QueryCurrentEpochResponse;
            };
            GenesisState: {
                encode(message: _186.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GenesisState;
                fromPartial(object: {
                    epochs?: {
                        id?: string;
                        start?: Date;
                        duration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        currentEpochNumber?: string | number | import("long");
                        currentEpochStart?: Date;
                        epochStarted?: boolean;
                        currentEpochStartHeight?: string | number | import("long");
                    }[];
                }): _186.GenesisState;
            };
            EventEpochStarted: {
                encode(message: _185.EventEpochStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.EventEpochStarted;
                fromPartial(object: {
                    epochId?: string | number | import("long");
                }): _185.EventEpochStarted;
            };
            EventEpochEnded: {
                encode(message: _185.EventEpochEnded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.EventEpochEnded;
                fromPartial(object: {
                    epochId?: string | number | import("long");
                }): _185.EventEpochEnded;
            };
            Epoch: {
                encode(message: _184.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Epoch;
                fromPartial(object: {
                    id?: string;
                    start?: Date;
                    duration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    currentEpochNumber?: string | number | import("long");
                    currentEpochStart?: Date;
                    epochStarted?: boolean;
                    currentEpochStartHeight?: string | number | import("long");
                }): _184.Epoch;
            };
        };
    }
    namespace farming {
        const v1: {
            MsgClientImpl: typeof _502.MsgClientImpl;
            QueryClientImpl: typeof _483.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                plans(request: _192.QueryPlansRequest): Promise<_192.QueryPlansResponse>;
                plan(request: _192.QueryPlanRequest): Promise<_192.QueryPlanResponse>;
                stakings(request: _192.QueryStakingsRequest): Promise<_192.QueryStakingsResponse>;
                totalStakings(request: _192.QueryTotalStakingsRequest): Promise<_192.QueryTotalStakingsResponse>;
                rewards(request: _192.QueryRewardsRequest): Promise<_192.QueryRewardsResponse>;
                currentEpochDays(request?: _192.QueryCurrentEpochDaysRequest): Promise<_192.QueryCurrentEpochDaysResponse>;
            };
            LCDQueryClient: typeof _463.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedAmountPlan(value: _193.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRatioPlan(value: _193.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    stake(value: _193.MsgStake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unstake(value: _193.MsgUnstake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    harvest(value: _193.MsgHarvest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePlan(value: _193.MsgRemovePlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    advanceEpoch(value: _193.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedAmountPlan(value: _193.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _193.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _193.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _193.MsgCreateRatioPlan;
                    };
                    stake(value: _193.MsgStake): {
                        typeUrl: string;
                        value: _193.MsgStake;
                    };
                    unstake(value: _193.MsgUnstake): {
                        typeUrl: string;
                        value: _193.MsgUnstake;
                    };
                    harvest(value: _193.MsgHarvest): {
                        typeUrl: string;
                        value: _193.MsgHarvest;
                    };
                    removePlan(value: _193.MsgRemovePlan): {
                        typeUrl: string;
                        value: _193.MsgRemovePlan;
                    };
                    advanceEpoch(value: _193.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _193.MsgAdvanceEpoch;
                    };
                };
                fromPartial: {
                    createFixedAmountPlan(value: _193.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _193.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _193.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _193.MsgCreateRatioPlan;
                    };
                    stake(value: _193.MsgStake): {
                        typeUrl: string;
                        value: _193.MsgStake;
                    };
                    unstake(value: _193.MsgUnstake): {
                        typeUrl: string;
                        value: _193.MsgUnstake;
                    };
                    harvest(value: _193.MsgHarvest): {
                        typeUrl: string;
                        value: _193.MsgHarvest;
                    };
                    removePlan(value: _193.MsgRemovePlan): {
                        typeUrl: string;
                        value: _193.MsgRemovePlan;
                    };
                    advanceEpoch(value: _193.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _193.MsgAdvanceEpoch;
                    };
                };
            };
            AminoConverter: {
                "/ollo.farming.v1.MsgCreateFixedAmountPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochAmount }: _193.MsgCreateFixedAmountPlan) => {
                        name: string;
                        creator: string;
                        staking_coin_weights: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                        epoch_amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ name, creator, staking_coin_weights, start_time, end_time, epoch_amount }: {
                        name: string;
                        creator: string;
                        staking_coin_weights: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                        epoch_amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _193.MsgCreateFixedAmountPlan;
                };
                "/ollo.farming.v1.MsgCreateRatioPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochRatio }: _193.MsgCreateRatioPlan) => {
                        name: string;
                        creator: string;
                        staking_coin_weights: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                        epoch_ratio: string;
                    };
                    fromAmino: ({ name, creator, staking_coin_weights, start_time, end_time, epoch_ratio }: {
                        name: string;
                        creator: string;
                        staking_coin_weights: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                        epoch_ratio: string;
                    }) => _193.MsgCreateRatioPlan;
                };
                "/ollo.farming.v1.MsgStake": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoins }: _193.MsgStake) => {
                        farmer: string;
                        staking_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ farmer, staking_coins }: {
                        farmer: string;
                        staking_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _193.MsgStake;
                };
                "/ollo.farming.v1.MsgUnstake": {
                    aminoType: string;
                    toAmino: ({ farmer, unstakingCoins }: _193.MsgUnstake) => {
                        farmer: string;
                        unstaking_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ farmer, unstaking_coins }: {
                        farmer: string;
                        unstaking_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _193.MsgUnstake;
                };
                "/ollo.farming.v1.MsgHarvest": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoinDenoms }: _193.MsgHarvest) => {
                        farmer: string;
                        staking_coin_denoms: string[];
                    };
                    fromAmino: ({ farmer, staking_coin_denoms }: {
                        farmer: string;
                        staking_coin_denoms: string[];
                    }) => _193.MsgHarvest;
                };
                "/ollo.farming.v1.MsgRemovePlan": {
                    aminoType: string;
                    toAmino: ({ creator, planId }: _193.MsgRemovePlan) => {
                        creator: string;
                        plan_id: string;
                    };
                    fromAmino: ({ creator, plan_id }: {
                        creator: string;
                        plan_id: string;
                    }) => _193.MsgRemovePlan;
                };
                "/ollo.farming.v1.MsgAdvanceEpoch": {
                    aminoType: string;
                    toAmino: ({ requester }: _193.MsgAdvanceEpoch) => {
                        requester: string;
                    };
                    fromAmino: ({ requester }: {
                        requester: string;
                    }) => _193.MsgAdvanceEpoch;
                };
            };
            MsgCreateFixedAmountPlan: {
                encode(message: _193.MsgCreateFixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgCreateFixedAmountPlan;
                fromPartial(object: {
                    name?: string;
                    creator?: string;
                    stakingCoinWeights?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    endTime?: Date;
                    epochAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _193.MsgCreateFixedAmountPlan;
            };
            MsgCreateFixedAmountPlanResponse: {
                encode(_: _193.MsgCreateFixedAmountPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgCreateFixedAmountPlanResponse;
                fromPartial(_: {}): _193.MsgCreateFixedAmountPlanResponse;
            };
            MsgCreateRatioPlan: {
                encode(message: _193.MsgCreateRatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgCreateRatioPlan;
                fromPartial(object: {
                    name?: string;
                    creator?: string;
                    stakingCoinWeights?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    endTime?: Date;
                    epochRatio?: string;
                }): _193.MsgCreateRatioPlan;
            };
            MsgCreateRatioPlanResponse: {
                encode(_: _193.MsgCreateRatioPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgCreateRatioPlanResponse;
                fromPartial(_: {}): _193.MsgCreateRatioPlanResponse;
            };
            MsgStake: {
                encode(message: _193.MsgStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgStake;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _193.MsgStake;
            };
            MsgStakeResponse: {
                encode(_: _193.MsgStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgStakeResponse;
                fromPartial(_: {}): _193.MsgStakeResponse;
            };
            MsgUnstake: {
                encode(message: _193.MsgUnstake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgUnstake;
                fromPartial(object: {
                    farmer?: string;
                    unstakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _193.MsgUnstake;
            };
            MsgUnstakeResponse: {
                encode(_: _193.MsgUnstakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgUnstakeResponse;
                fromPartial(_: {}): _193.MsgUnstakeResponse;
            };
            MsgHarvest: {
                encode(message: _193.MsgHarvest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgHarvest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenoms?: string[];
                }): _193.MsgHarvest;
            };
            MsgHarvestResponse: {
                encode(_: _193.MsgHarvestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgHarvestResponse;
                fromPartial(_: {}): _193.MsgHarvestResponse;
            };
            MsgRemovePlan: {
                encode(message: _193.MsgRemovePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgRemovePlan;
                fromPartial(object: {
                    creator?: string;
                    planId?: string | number | import("long");
                }): _193.MsgRemovePlan;
            };
            MsgRemovePlanResponse: {
                encode(_: _193.MsgRemovePlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgRemovePlanResponse;
                fromPartial(_: {}): _193.MsgRemovePlanResponse;
            };
            MsgAdvanceEpoch: {
                encode(message: _193.MsgAdvanceEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgAdvanceEpoch;
                fromPartial(object: {
                    requester?: string;
                }): _193.MsgAdvanceEpoch;
            };
            MsgAdvanceEpochResponse: {
                encode(_: _193.MsgAdvanceEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgAdvanceEpochResponse;
                fromPartial(_: {}): _193.MsgAdvanceEpochResponse;
            };
            QueryParamsRequest: {
                encode(_: _192.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryParamsRequest;
                fromPartial(_: {}): _192.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _192.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        privatePlanCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        nextEpochDays?: number;
                        farmingFeeCollector?: string;
                        delayedStakingGasFee?: string | number | import("long");
                        maxNumPrivatePlans?: number;
                    };
                }): _192.QueryParamsResponse;
            };
            QueryPlansRequest: {
                encode(message: _192.QueryPlansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryPlansRequest;
                fromPartial(object: {
                    type?: string;
                    farmingPoolAddress?: string;
                    terminationAddress?: string;
                    stakingCoinDenom?: string;
                    terminated?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _192.QueryPlansRequest;
            };
            QueryPlansResponse: {
                encode(message: _192.QueryPlansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryPlansResponse;
                fromPartial(object: {
                    plans?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _192.QueryPlansResponse;
            };
            QueryPlanRequest: {
                encode(message: _192.QueryPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryPlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _192.QueryPlanRequest;
            };
            QueryPlanResponse: {
                encode(message: _192.QueryPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryPlanResponse;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _192.QueryPlanResponse;
            };
            QueryStakingsRequest: {
                encode(message: _192.QueryStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryStakingsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _192.QueryStakingsRequest;
            };
            QueryStakingsResponse: {
                encode(message: _192.QueryStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryStakingsResponse;
                fromPartial(object: {
                    stakedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    queuedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _192.QueryStakingsResponse;
            };
            QueryTotalStakingsRequest: {
                encode(message: _192.QueryTotalStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryTotalStakingsRequest;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                }): _192.QueryTotalStakingsRequest;
            };
            QueryTotalStakingsResponse: {
                encode(message: _192.QueryTotalStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryTotalStakingsResponse;
                fromPartial(object: {
                    amount?: string;
                }): _192.QueryTotalStakingsResponse;
            };
            QueryRewardsRequest: {
                encode(message: _192.QueryRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryRewardsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _192.QueryRewardsRequest;
            };
            QueryRewardsResponse: {
                encode(message: _192.QueryRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _192.QueryRewardsResponse;
            };
            QueryCurrentEpochDaysRequest: {
                encode(_: _192.QueryCurrentEpochDaysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryCurrentEpochDaysRequest;
                fromPartial(_: {}): _192.QueryCurrentEpochDaysRequest;
            };
            QueryCurrentEpochDaysResponse: {
                encode(message: _192.QueryCurrentEpochDaysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryCurrentEpochDaysResponse;
                fromPartial(object: {
                    currentEpochDays?: number;
                }): _192.QueryCurrentEpochDaysResponse;
            };
            PublicPlanProposal: {
                encode(message: _191.PublicPlanProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PublicPlanProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    addPlanRequests?: {
                        name?: string;
                        farmingPoolAddress?: string;
                        terminationAddress?: string;
                        stakingCoinWeights?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: Date;
                        endTime?: Date;
                        epochAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        epochRatio?: string;
                    }[];
                    modifyPlanRequests?: {
                        planId?: string | number | import("long");
                        name?: string;
                        farmingPoolAddress?: string;
                        terminationAddress?: string;
                        stakingCoinWeights?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: Date;
                        endTime?: Date;
                        epochAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        epochRatio?: string;
                    }[];
                    deletePlanRequests?: {
                        planId?: string | number | import("long");
                    }[];
                }): _191.PublicPlanProposal;
            };
            AddPlanRequest: {
                encode(message: _191.AddPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.AddPlanRequest;
                fromPartial(object: {
                    name?: string;
                    farmingPoolAddress?: string;
                    terminationAddress?: string;
                    stakingCoinWeights?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    endTime?: Date;
                    epochAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochRatio?: string;
                }): _191.AddPlanRequest;
            };
            ModifyPlanRequest: {
                encode(message: _191.ModifyPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ModifyPlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                    name?: string;
                    farmingPoolAddress?: string;
                    terminationAddress?: string;
                    stakingCoinWeights?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    endTime?: Date;
                    epochAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochRatio?: string;
                }): _191.ModifyPlanRequest;
            };
            DeletePlanRequest: {
                encode(message: _191.DeletePlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.DeletePlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _191.DeletePlanRequest;
            };
            Params: {
                encode(message: _190.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Params;
                fromPartial(object: {
                    privatePlanCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    nextEpochDays?: number;
                    farmingFeeCollector?: string;
                    delayedStakingGasFee?: string | number | import("long");
                    maxNumPrivatePlans?: number;
                }): _190.Params;
            };
            GenesisState: {
                encode(message: _189.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.GenesisState;
                fromPartial(object: {
                    params?: {
                        privatePlanCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        nextEpochDays?: number;
                        farmingFeeCollector?: string;
                        delayedStakingGasFee?: string | number | import("long");
                        maxNumPrivatePlans?: number;
                    };
                    globalPlanId?: string | number | import("long");
                    planRecords?: {
                        plan?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        farmingPoolCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    stakingRecords?: {
                        stakingCoinDenom?: string;
                        farmer?: string;
                        staking?: {
                            amount?: string;
                            startingEpoch?: string | number | import("long");
                        };
                    }[];
                    queuedStakingRecords?: {
                        stakingCoinDenom?: string;
                        farmer?: string;
                        queuedStaking?: {
                            amount?: string;
                        };
                    }[];
                    historicalRewardsRecords?: {
                        stakingCoinDenom?: string;
                        epoch?: string | number | import("long");
                        historicalRewards?: {
                            cumulativeUnitRewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    outstandingRewardsRecords?: {
                        stakingCoinDenom?: string;
                        outstandingRewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    currentEpochRecords?: {
                        stakingCoinDenom?: string;
                        currentEpoch?: string | number | import("long");
                    }[];
                    totalStakingsRecords?: {
                        stakingCoinDenom?: string;
                        amount?: string;
                        stakingReserveCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    rewardPoolCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    lastEpochTime?: Date;
                    currentEpochDays?: number;
                }): _189.GenesisState;
            };
            PlanRecord: {
                encode(message: _189.PlanRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.PlanRecord;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    farmingPoolCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _189.PlanRecord;
            };
            StakingRecord: {
                encode(message: _189.StakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.StakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    staking?: {
                        amount?: string;
                        startingEpoch?: string | number | import("long");
                    };
                }): _189.StakingRecord;
            };
            QueuedStakingRecord: {
                encode(message: _189.QueuedStakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueuedStakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    queuedStaking?: {
                        amount?: string;
                    };
                }): _189.QueuedStakingRecord;
            };
            TotalStakingsRecord: {
                encode(message: _189.TotalStakingsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.TotalStakingsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    amount?: string;
                    stakingReserveCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _189.TotalStakingsRecord;
            };
            HistoricalRewardsRecord: {
                encode(message: _189.HistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.HistoricalRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    epoch?: string | number | import("long");
                    historicalRewards?: {
                        cumulativeUnitRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _189.HistoricalRewardsRecord;
            };
            OutstandingRewardsRecord: {
                encode(message: _189.OutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.OutstandingRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    outstandingRewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _189.OutstandingRewardsRecord;
            };
            CurrentEpochRecord: {
                encode(message: _189.CurrentEpochRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.CurrentEpochRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    currentEpoch?: string | number | import("long");
                }): _189.CurrentEpochRecord;
            };
            planTypeFromJSON(object: any): _188.PlanType;
            planTypeToJSON(object: _188.PlanType): string;
            addressTypeFromJSON(object: any): _188.AddressType;
            addressTypeToJSON(object: _188.AddressType): string;
            PlanType: typeof _188.PlanType;
            PlanTypeSDKType: typeof _188.PlanType;
            AddressType: typeof _188.AddressType;
            AddressTypeSDKType: typeof _188.AddressType;
            BasePlan: {
                encode(message: _188.BasePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.BasePlan;
                fromPartial(object: {
                    id?: string | number | import("long");
                    name?: string;
                    type?: _188.PlanType;
                    farmingPoolAddress?: string;
                    terminationAddress?: string;
                    stakingCoinWeights?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    endTime?: Date;
                    terminated?: boolean;
                    lastDistributionTime?: Date;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _188.BasePlan;
            };
            FixedAmountPlan: {
                encode(message: _188.FixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.FixedAmountPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _188.PlanType;
                        farmingPoolAddress?: string;
                        terminationAddress?: string;
                        stakingCoinWeights?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: Date;
                        endTime?: Date;
                        terminated?: boolean;
                        lastDistributionTime?: Date;
                        distributedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    epochAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _188.FixedAmountPlan;
            };
            RatioPlan: {
                encode(message: _188.RatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.RatioPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _188.PlanType;
                        farmingPoolAddress?: string;
                        terminationAddress?: string;
                        stakingCoinWeights?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: Date;
                        endTime?: Date;
                        terminated?: boolean;
                        lastDistributionTime?: Date;
                        distributedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    epochRatio?: string;
                }): _188.RatioPlan;
            };
            Staking: {
                encode(message: _188.Staking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Staking;
                fromPartial(object: {
                    amount?: string;
                    startingEpoch?: string | number | import("long");
                }): _188.Staking;
            };
            QueuedStaking: {
                encode(message: _188.QueuedStaking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueuedStaking;
                fromPartial(object: {
                    amount?: string;
                }): _188.QueuedStaking;
            };
            TotalStakings: {
                encode(message: _188.TotalStakings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.TotalStakings;
                fromPartial(object: {
                    amount?: string;
                }): _188.TotalStakings;
            };
            HistoricalRewards: {
                encode(message: _188.HistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.HistoricalRewards;
                fromPartial(object: {
                    cumulativeUnitRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _188.HistoricalRewards;
            };
            OutstandingRewards: {
                encode(message: _188.OutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.OutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _188.OutstandingRewards;
            };
        };
    }
    namespace fees {
        const v1: {
            QueryClientImpl: typeof _484.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _198.QueryFeeTokensRequest): Promise<_198.QueryFeeTokensResponse>;
                denomSpotPrice(request: _198.QueryDenomSpotPriceRequest): Promise<_198.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _198.QueryDenomPoolIdRequest): Promise<_198.QueryDenomPoolIdResponse>;
                baseDenom(request?: _198.QueryBaseDenomRequest): Promise<_198.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _464.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _198.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryFeeTokensRequest;
                fromPartial(_: {}): _198.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _198.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryFeeTokensResponse;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    }[];
                }): _198.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _198.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryDenomSpotPriceRequest;
                fromPartial(object: {
                    denom?: string;
                }): _198.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _198.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryDenomSpotPriceResponse;
                fromPartial(object: {
                    denom?: string;
                    price?: string;
                }): _198.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _198.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryDenomPoolIdRequest;
                fromPartial(object: {
                    denom?: string;
                }): _198.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _198.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryDenomPoolIdResponse;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                }): _198.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _198.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryBaseDenomRequest;
                fromPartial(_: {}): _198.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _198.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryBaseDenomResponse;
                fromPartial(object: {
                    baseDenom?: string;
                }): _198.QueryBaseDenomResponse;
            };
            ProposalSetFeeToken: {
                encode(message: _197.ProposalSetFeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ProposalSetFeeToken;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feeToken?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    };
                }): _197.ProposalSetFeeToken;
            };
            Params: {
                encode(_: _196.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Params;
                fromPartial(_: {}): _196.Params;
            };
            GenesisState: {
                encode(message: _195.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.GenesisState;
                fromPartial(object: {
                    baseDenom?: string;
                    feeTokens?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    }[];
                }): _195.GenesisState;
            };
            FeeToken: {
                encode(message: _194.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.FeeToken;
                fromPartial(object: {
                    denom?: string;
                    poolId?: string | number | import("long");
                }): _194.FeeToken;
            };
        };
    }
    namespace grants {
        const v1: {
            MsgClientImpl: typeof _503.MsgClientImpl;
            QueryClientImpl: typeof _485.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _203.QueryParamsRequest): Promise<_203.QueryParamsResponse>;
                auctions(request: _203.QueryAuctionsRequest): Promise<_203.QueryAuctionsResponse>;
                auction(request: _203.QueryAuctionRequest): Promise<_203.QueryAuctionResponse>;
                allowedBidder(request: _203.QueryAllowedBidderRequest): Promise<_203.QueryAllowedBidderResponse>;
                allowedBidders(request: _203.QueryAllowedBiddersRequest): Promise<_203.QueryAllowedBiddersResponse>;
                bids(request: _203.QueryBidsRequest): Promise<_203.QueryBidsResponse>;
                bid(request: _203.QueryBidRequest): Promise<_203.QueryBidResponse>;
                vestings(request: _203.QueryVestingsRequest): Promise<_203.QueryVestingsResponse>;
            };
            LCDQueryClient: typeof _465.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedPriceAuction(value: _204.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatchAuction(value: _204.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAuction(value: _204.MsgCancelAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    placeBid(value: _204.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyBid(value: _204.MsgModifyBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBidder(value: _204.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedPriceAuction(value: _204.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _204.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _204.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _204.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _204.MsgCancelAuction): {
                        typeUrl: string;
                        value: _204.MsgCancelAuction;
                    };
                    placeBid(value: _204.MsgPlaceBid): {
                        typeUrl: string;
                        value: _204.MsgPlaceBid;
                    };
                    modifyBid(value: _204.MsgModifyBid): {
                        typeUrl: string;
                        value: _204.MsgModifyBid;
                    };
                    addAllowedBidder(value: _204.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _204.MsgAddAllowedBidder;
                    };
                };
                fromPartial: {
                    createFixedPriceAuction(value: _204.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _204.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _204.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _204.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _204.MsgCancelAuction): {
                        typeUrl: string;
                        value: _204.MsgCancelAuction;
                    };
                    placeBid(value: _204.MsgPlaceBid): {
                        typeUrl: string;
                        value: _204.MsgPlaceBid;
                    };
                    modifyBid(value: _204.MsgModifyBid): {
                        typeUrl: string;
                        value: _204.MsgModifyBid;
                    };
                    addAllowedBidder(value: _204.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _204.MsgAddAllowedBidder;
                    };
                };
            };
            AminoConverter: {
                "/ollo.grants.v1.MsgCreateFixedPriceAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, sellingCoin, payingCoinDenom, vestingSchedules, startTime, endTime }: _204.MsgCreateFixedPriceAuction) => {
                        auctioneer: string;
                        start_price: string;
                        selling_coin: {
                            denom: string;
                            amount: string;
                        };
                        paying_coin_denom: string;
                        vesting_schedules: {
                            release_time: {
                                seconds: string;
                                nanos: number;
                            };
                            weight: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ auctioneer, start_price, selling_coin, paying_coin_denom, vesting_schedules, start_time, end_time }: {
                        auctioneer: string;
                        start_price: string;
                        selling_coin: {
                            denom: string;
                            amount: string;
                        };
                        paying_coin_denom: string;
                        vesting_schedules: {
                            release_time: {
                                seconds: string;
                                nanos: number;
                            };
                            weight: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _204.MsgCreateFixedPriceAuction;
                };
                "/ollo.grants.v1.MsgCreateBatchAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, minBidPrice, sellingCoin, payingCoinDenom, vestingSchedules, maxExtendedRound, extendedRoundRate, startTime, endTime }: _204.MsgCreateBatchAuction) => {
                        auctioneer: string;
                        start_price: string;
                        min_bid_price: string;
                        selling_coin: {
                            denom: string;
                            amount: string;
                        };
                        paying_coin_denom: string;
                        vesting_schedules: {
                            release_time: {
                                seconds: string;
                                nanos: number;
                            };
                            weight: string;
                        }[];
                        max_extended_round: number;
                        extended_round_rate: string;
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ auctioneer, start_price, min_bid_price, selling_coin, paying_coin_denom, vesting_schedules, max_extended_round, extended_round_rate, start_time, end_time }: {
                        auctioneer: string;
                        start_price: string;
                        min_bid_price: string;
                        selling_coin: {
                            denom: string;
                            amount: string;
                        };
                        paying_coin_denom: string;
                        vesting_schedules: {
                            release_time: {
                                seconds: string;
                                nanos: number;
                            };
                            weight: string;
                        }[];
                        max_extended_round: number;
                        extended_round_rate: string;
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        end_time: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _204.MsgCreateBatchAuction;
                };
                "/ollo.grants.v1.MsgCancelAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, auctionId }: _204.MsgCancelAuction) => {
                        auctioneer: string;
                        auction_id: string;
                    };
                    fromAmino: ({ auctioneer, auction_id }: {
                        auctioneer: string;
                        auction_id: string;
                    }) => _204.MsgCancelAuction;
                };
                "/ollo.grants.v1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidType, price, coin }: _204.MsgPlaceBid) => {
                        auction_id: string;
                        bidder: string;
                        bid_type: number;
                        price: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ auction_id, bidder, bid_type, price, coin }: {
                        auction_id: string;
                        bidder: string;
                        bid_type: number;
                        price: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _204.MsgPlaceBid;
                };
                "/ollo.grants.v1.MsgModifyBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidId, price, coin }: _204.MsgModifyBid) => {
                        auction_id: string;
                        bidder: string;
                        bid_id: string;
                        price: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ auction_id, bidder, bid_id, price, coin }: {
                        auction_id: string;
                        bidder: string;
                        bid_id: string;
                        price: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _204.MsgModifyBid;
                };
                "/ollo.grants.v1.MsgAddAllowedBidder": {
                    aminoType: string;
                    toAmino: ({ auctionId, allowedBidder }: _204.MsgAddAllowedBidder) => {
                        auction_id: string;
                        allowed_bidder: {
                            bidder: string;
                            max_bid_amount: string;
                        };
                    };
                    fromAmino: ({ auction_id, allowed_bidder }: {
                        auction_id: string;
                        allowed_bidder: {
                            bidder: string;
                            max_bid_amount: string;
                        };
                    }) => _204.MsgAddAllowedBidder;
                };
            };
            MsgCreateFixedPriceAuction: {
                encode(message: _204.MsgCreateFixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgCreateFixedPriceAuction;
                fromPartial(object: {
                    auctioneer?: string;
                    startPrice?: string;
                    sellingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    payingCoinDenom?: string;
                    vestingSchedules?: {
                        releaseTime?: Date;
                        weight?: string;
                    }[];
                    startTime?: Date;
                    endTime?: Date;
                }): _204.MsgCreateFixedPriceAuction;
            };
            MsgCreateFixedPriceAuctionResponse: {
                encode(_: _204.MsgCreateFixedPriceAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgCreateFixedPriceAuctionResponse;
                fromPartial(_: {}): _204.MsgCreateFixedPriceAuctionResponse;
            };
            MsgCreateBatchAuction: {
                encode(message: _204.MsgCreateBatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgCreateBatchAuction;
                fromPartial(object: {
                    auctioneer?: string;
                    startPrice?: string;
                    minBidPrice?: string;
                    sellingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    payingCoinDenom?: string;
                    vestingSchedules?: {
                        releaseTime?: Date;
                        weight?: string;
                    }[];
                    maxExtendedRound?: number;
                    extendedRoundRate?: string;
                    startTime?: Date;
                    endTime?: Date;
                }): _204.MsgCreateBatchAuction;
            };
            MsgCreateBatchAuctionResponse: {
                encode(_: _204.MsgCreateBatchAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgCreateBatchAuctionResponse;
                fromPartial(_: {}): _204.MsgCreateBatchAuctionResponse;
            };
            MsgCancelAuction: {
                encode(message: _204.MsgCancelAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgCancelAuction;
                fromPartial(object: {
                    auctioneer?: string;
                    auctionId?: string | number | import("long");
                }): _204.MsgCancelAuction;
            };
            MsgCancelAuctionResponse: {
                encode(_: _204.MsgCancelAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgCancelAuctionResponse;
                fromPartial(_: {}): _204.MsgCancelAuctionResponse;
            };
            MsgPlaceBid: {
                encode(message: _204.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgPlaceBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidType?: _201.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _204.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _204.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgPlaceBidResponse;
                fromPartial(_: {}): _204.MsgPlaceBidResponse;
            };
            MsgModifyBid: {
                encode(message: _204.MsgModifyBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgModifyBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidId?: string | number | import("long");
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _204.MsgModifyBid;
            };
            MsgModifyBidResponse: {
                encode(_: _204.MsgModifyBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgModifyBidResponse;
                fromPartial(_: {}): _204.MsgModifyBidResponse;
            };
            MsgAddAllowedBidder: {
                encode(message: _204.MsgAddAllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgAddAllowedBidder;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _204.MsgAddAllowedBidder;
            };
            MsgAddAllowedBidderResponse: {
                encode(_: _204.MsgAddAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgAddAllowedBidderResponse;
                fromPartial(_: {}): _204.MsgAddAllowedBidderResponse;
            };
            QueryParamsRequest: {
                encode(_: _203.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsRequest;
                fromPartial(_: {}): _203.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _203.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        auctionCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        placeBidFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        extendedPeriod?: number;
                    };
                }): _203.QueryParamsResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _203.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAuctionsRequest;
                fromPartial(object: {
                    status?: string;
                    type?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _203.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _203.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAuctionsResponse;
                fromPartial(object: {
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _203.QueryAuctionsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _203.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAuctionRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _203.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _203.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAuctionResponse;
                fromPartial(object: {
                    auction?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _203.QueryAuctionResponse;
            };
            QueryAllowedBidderRequest: {
                encode(message: _203.QueryAllowedBidderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAllowedBidderRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                }): _203.QueryAllowedBidderRequest;
            };
            QueryAllowedBidderResponse: {
                encode(message: _203.QueryAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAllowedBidderResponse;
                fromPartial(object: {
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _203.QueryAllowedBidderResponse;
            };
            QueryAllowedBiddersRequest: {
                encode(message: _203.QueryAllowedBiddersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAllowedBiddersRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _203.QueryAllowedBiddersRequest;
            };
            QueryAllowedBiddersResponse: {
                encode(message: _203.QueryAllowedBiddersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAllowedBiddersResponse;
                fromPartial(object: {
                    allowedBidders?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _203.QueryAllowedBiddersResponse;
            };
            QueryBidsRequest: {
                encode(message: _203.QueryBidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryBidsRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    isMatched?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _203.QueryBidsRequest;
            };
            QueryBidsResponse: {
                encode(message: _203.QueryBidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryBidsResponse;
                fromPartial(object: {
                    bids?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _201.BidType;
                        price?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        isMatched?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _203.QueryBidsResponse;
            };
            QueryBidRequest: {
                encode(message: _203.QueryBidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryBidRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidId?: string | number | import("long");
                }): _203.QueryBidRequest;
            };
            QueryBidResponse: {
                encode(message: _203.QueryBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryBidResponse;
                fromPartial(object: {
                    bid?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _201.BidType;
                        price?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        isMatched?: boolean;
                    };
                }): _203.QueryBidResponse;
            };
            QueryVestingsRequest: {
                encode(message: _203.QueryVestingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryVestingsRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _203.QueryVestingsRequest;
            };
            QueryVestingsResponse: {
                encode(message: _203.QueryVestingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryVestingsResponse;
                fromPartial(object: {
                    vestings?: {
                        auctionId?: string | number | import("long");
                        auctioneer?: string;
                        payingCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        releaseTime?: Date;
                        released?: boolean;
                    }[];
                }): _203.QueryVestingsResponse;
            };
            Params: {
                encode(message: _202.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Params;
                fromPartial(object: {
                    auctionCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    placeBidFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    extendedPeriod?: number;
                }): _202.Params;
            };
            auctionTypeFromJSON(object: any): _201.AuctionType;
            auctionTypeToJSON(object: _201.AuctionType): string;
            auctionStatusFromJSON(object: any): _201.AuctionStatus;
            auctionStatusToJSON(object: _201.AuctionStatus): string;
            bidTypeFromJSON(object: any): _201.BidType;
            bidTypeToJSON(object: _201.BidType): string;
            addressTypeFromJSON(object: any): _201.AddressType;
            addressTypeToJSON(object: _201.AddressType): string;
            AuctionType: typeof _201.AuctionType;
            AuctionTypeSDKType: typeof _201.AuctionType;
            AuctionStatus: typeof _201.AuctionStatus;
            AuctionStatusSDKType: typeof _201.AuctionStatus;
            BidType: typeof _201.BidType;
            BidTypeSDKType: typeof _201.BidType;
            AddressType: typeof _201.AddressType;
            AddressTypeSDKType: typeof _201.AddressType;
            BaseAuction: {
                encode(message: _201.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.BaseAuction;
                fromPartial(object: {
                    id?: string | number | import("long");
                    type?: _201.AuctionType;
                    auctioneer?: string;
                    sellingReserveAddress?: string;
                    payingReserveAddress?: string;
                    startPrice?: string;
                    sellingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    payingCoinDenom?: string;
                    vestingReserveAddress?: string;
                    vestingSchedules?: {
                        releaseTime?: Date;
                        weight?: string;
                    }[];
                    startTime?: Date;
                    endTimes?: Date[];
                    status?: _201.AuctionStatus;
                }): _201.BaseAuction;
            };
            FixedPriceAuction: {
                encode(message: _201.FixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.FixedPriceAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _201.AuctionType;
                        auctioneer?: string;
                        sellingReserveAddress?: string;
                        payingReserveAddress?: string;
                        startPrice?: string;
                        sellingCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        payingCoinDenom?: string;
                        vestingReserveAddress?: string;
                        vestingSchedules?: {
                            releaseTime?: Date;
                            weight?: string;
                        }[];
                        startTime?: Date;
                        endTimes?: Date[];
                        status?: _201.AuctionStatus;
                    };
                    remainingSellingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _201.FixedPriceAuction;
            };
            BatchAuction: {
                encode(message: _201.BatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.BatchAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _201.AuctionType;
                        auctioneer?: string;
                        sellingReserveAddress?: string;
                        payingReserveAddress?: string;
                        startPrice?: string;
                        sellingCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        payingCoinDenom?: string;
                        vestingReserveAddress?: string;
                        vestingSchedules?: {
                            releaseTime?: Date;
                            weight?: string;
                        }[];
                        startTime?: Date;
                        endTimes?: Date[];
                        status?: _201.AuctionStatus;
                    };
                    minBidPrice?: string;
                    matchedPrice?: string;
                    maxExtendedRound?: number;
                    extendedRoundRate?: string;
                }): _201.BatchAuction;
            };
            VestingSchedule: {
                encode(message: _201.VestingSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.VestingSchedule;
                fromPartial(object: {
                    releaseTime?: Date;
                    weight?: string;
                }): _201.VestingSchedule;
            };
            VestingQueue: {
                encode(message: _201.VestingQueue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.VestingQueue;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    auctioneer?: string;
                    payingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    releaseTime?: Date;
                    released?: boolean;
                }): _201.VestingQueue;
            };
            AllowedBidder: {
                encode(message: _201.AllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.AllowedBidder;
                fromPartial(object: {
                    bidder?: string;
                    maxBidAmount?: string;
                }): _201.AllowedBidder;
            };
            Bid: {
                encode(message: _201.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Bid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    id?: string | number | import("long");
                    type?: _201.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    isMatched?: boolean;
                }): _201.Bid;
            };
            AllowedBidderRecord: {
                encode(message: _201.AllowedBidderRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.AllowedBidderRecord;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _201.AllowedBidderRecord;
            };
            GenesisState: {
                encode(message: _200.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.GenesisState;
                fromPartial(object: {
                    params?: {
                        auctionCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        placeBidFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        extendedPeriod?: number;
                    };
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    allowedBidderRecords?: {
                        auctionId?: string | number | import("long");
                        allowedBidder?: {
                            bidder?: string;
                            maxBidAmount?: string;
                        };
                    }[];
                    bids?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _201.BidType;
                        price?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        isMatched?: boolean;
                    }[];
                    vestingQueues?: {
                        auctionId?: string | number | import("long");
                        auctioneer?: string;
                        payingCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        releaseTime?: Date;
                        released?: boolean;
                    }[];
                }): _200.GenesisState;
            };
            EventPlaceBid: {
                encode(_: _199.EventPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventPlaceBid;
                fromPartial(_: {}): _199.EventPlaceBid;
            };
        };
    }
    namespace icq {
        const v1: {
            QueryClientImpl: typeof _486.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _466.LCDQueryClient;
            MsgCreateIcq: {
                encode(message: _211.MsgCreateIcq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCreateIcq;
                fromPartial(object: {
                    index?: string;
                }): _211.MsgCreateIcq;
            };
            QueryParamsRequest: {
                encode(_: _210.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryParamsRequest;
                fromPartial(_: {}): _210.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _210.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        hostEnabled?: boolean;
                        allowQueries?: string[];
                    };
                }): _210.QueryParamsResponse;
            };
            Params: {
                encode(message: _209.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Params;
                fromPartial(object: {
                    hostEnabled?: boolean;
                    allowQueries?: string[];
                }): _209.Params;
            };
            InterchainQueryPacketData: {
                encode(message: _208.InterchainQueryPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.InterchainQueryPacketData;
                fromPartial(object: {
                    data?: Uint8Array;
                    memo?: string;
                }): _208.InterchainQueryPacketData;
            };
            InterchainQueryPacketAck: {
                encode(message: _208.InterchainQueryPacketAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.InterchainQueryPacketAck;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _208.InterchainQueryPacketAck;
            };
            CosmosQuery: {
                encode(message: _208.CosmosQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.CosmosQuery;
                fromPartial(object: {
                    requests?: {
                        data?: Uint8Array;
                        path?: string;
                        height?: string | number | import("long");
                        prove?: boolean;
                    }[];
                }): _208.CosmosQuery;
            };
            InterchainQuery: {
                encode(message: _207.InterchainQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.InterchainQuery;
                fromPartial(object: {
                    id?: string;
                    connectionId?: string;
                    chainId?: string;
                    queryType?: string;
                    request?: Uint8Array;
                    period?: string;
                    lastHeight?: string;
                    callbackId?: string;
                    ttl?: string | number | import("long");
                    lastEmission?: string;
                }): _207.InterchainQuery;
            };
            DataPoint: {
                encode(message: _207.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.DataPoint;
                fromPartial(object: {
                    id?: string;
                    remoteHeight?: string | number | import("long");
                    localHeight?: string;
                    value?: Uint8Array;
                }): _207.DataPoint;
            };
            GenesisState: {
                encode(message: _206.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.GenesisState;
                fromPartial(object: {
                    hostPort?: string;
                    params?: {
                        hostEnabled?: boolean;
                        allowQueries?: string[];
                    };
                    queries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        period?: string;
                        lastHeight?: string;
                        callbackId?: string;
                        ttl?: string | number | import("long");
                        lastEmission?: string;
                    }[];
                }): _206.GenesisState;
            };
            EventQuery: {
                encode(message: _205.EventQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.EventQuery;
                fromPartial(object: {
                    id?: string;
                }): _205.EventQuery;
            };
        };
    }
    namespace incentive {
        const v1: {
            MsgClientImpl: typeof _504.MsgClientImpl;
            QueryClientImpl: typeof _487.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _219.QueryParamsRequest): Promise<_219.QueryParamsResponse>;
                marketMakers(request: _219.QueryMarketMakersRequest): Promise<_219.QueryMarketMakersResponse>;
                incentive(request: _219.QueryIncentiveRequest): Promise<_219.QueryIncentiveResponse>;
            };
            LCDQueryClient: typeof _467.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    applyMarketMaker(value: _220.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimIncentive(value: _220.MsgClaimIncentive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    applyMarketMaker(value: _220.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: _220.MsgApplyMarketMaker;
                    };
                    claimIncentive(value: _220.MsgClaimIncentive): {
                        typeUrl: string;
                        value: _220.MsgClaimIncentive;
                    };
                };
                fromPartial: {
                    applyMarketMaker(value: _220.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: _220.MsgApplyMarketMaker;
                    };
                    claimIncentive(value: _220.MsgClaimIncentive): {
                        typeUrl: string;
                        value: _220.MsgClaimIncentive;
                    };
                };
            };
            AminoConverter: {
                "/ollo.incentive.v1.MsgApplyMarketMaker": {
                    aminoType: string;
                    toAmino: ({ address, pairIds }: _220.MsgApplyMarketMaker) => {
                        address: string;
                        pair_ids: string[];
                    };
                    fromAmino: ({ address, pair_ids }: {
                        address: string;
                        pair_ids: string[];
                    }) => _220.MsgApplyMarketMaker;
                };
                "/ollo.incentive.v1.MsgClaimIncentive": {
                    aminoType: string;
                    toAmino: ({ address }: _220.MsgClaimIncentive) => {
                        address: string;
                    };
                    fromAmino: ({ address }: {
                        address: string;
                    }) => _220.MsgClaimIncentive;
                };
            };
            MsgApplyMarketMaker: {
                encode(message: _220.MsgApplyMarketMaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.MsgApplyMarketMaker;
                fromPartial(object: {
                    address?: string;
                    pairIds?: (string | number | import("long"))[];
                }): _220.MsgApplyMarketMaker;
            };
            MsgApplyMarketMakerResponse: {
                encode(_: _220.MsgApplyMarketMakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.MsgApplyMarketMakerResponse;
                fromPartial(_: {}): _220.MsgApplyMarketMakerResponse;
            };
            MsgClaimIncentive: {
                encode(message: _220.MsgClaimIncentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.MsgClaimIncentive;
                fromPartial(object: {
                    address?: string;
                }): _220.MsgClaimIncentive;
            };
            MsgClaimIncentiveResponse: {
                encode(_: _220.MsgClaimIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.MsgClaimIncentiveResponse;
                fromPartial(_: {}): _220.MsgClaimIncentiveResponse;
            };
            QueryParamsRequest: {
                encode(_: _219.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryParamsRequest;
                fromPartial(_: {}): _219.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _219.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        incentiveBudgetAddress?: string;
                        depositAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        props?: {
                            minOpenRatio?: string;
                            minOpenDepthRatio?: string;
                            maxDowntime?: number;
                            maxTotalDowntime?: number;
                            minHours?: number;
                            minDays?: number;
                        };
                        incentivePairs?: {
                            pairId?: string | number | import("long");
                            updatedAt?: Date;
                            incentiveWeight?: string;
                            maxSpread?: string;
                            minSpread?: string;
                            minDepth?: string;
                        }[];
                    };
                }): _219.QueryParamsResponse;
            };
            QueryMarketMakersRequest: {
                encode(message: _219.QueryMarketMakersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryMarketMakersRequest;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    eligible?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _219.QueryMarketMakersRequest;
            };
            QueryMarketMakersResponse: {
                encode(message: _219.QueryMarketMakersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryMarketMakersResponse;
                fromPartial(object: {
                    marketMakers?: {
                        address?: string;
                        pairId?: string | number | import("long");
                        eligible?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _219.QueryMarketMakersResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _219.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryIncentiveRequest;
                fromPartial(object: {
                    address?: string;
                }): _219.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _219.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.QueryIncentiveResponse;
                fromPartial(object: {
                    incentive?: {
                        address?: string;
                        claimable?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _219.QueryIncentiveResponse;
            };
            MarketMakerProposal: {
                encode(message: _218.MarketMakerProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.MarketMakerProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    inclusions?: {
                        address?: string;
                        pairId?: string | number | import("long");
                    }[];
                    exclusions?: {
                        address?: string;
                        pairId?: string | number | import("long");
                    }[];
                    rejections?: {
                        address?: string;
                        pairId?: string | number | import("long");
                    }[];
                    distributions?: {
                        address?: string;
                        pairId?: string | number | import("long");
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _218.MarketMakerProposal;
            };
            Params: {
                encode(message: _217.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Params;
                fromPartial(object: {
                    incentiveBudgetAddress?: string;
                    depositAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    props?: {
                        minOpenRatio?: string;
                        minOpenDepthRatio?: string;
                        maxDowntime?: number;
                        maxTotalDowntime?: number;
                        minHours?: number;
                        minDays?: number;
                    };
                    incentivePairs?: {
                        pairId?: string | number | import("long");
                        updatedAt?: Date;
                        incentiveWeight?: string;
                        maxSpread?: string;
                        minSpread?: string;
                        minDepth?: string;
                    }[];
                }): _217.Params;
            };
            MarketMaker: {
                encode(message: _216.MarketMaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MarketMaker;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    eligible?: boolean;
                }): _216.MarketMaker;
            };
            MarketMakerIncl: {
                encode(message: _216.MarketMakerIncl, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MarketMakerIncl;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                }): _216.MarketMakerIncl;
            };
            Incentive: {
                encode(message: _215.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Incentive;
                fromPartial(object: {
                    address?: string;
                    claimable?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _215.Incentive;
            };
            IncentiveProps: {
                encode(message: _215.IncentiveProps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.IncentiveProps;
                fromPartial(object: {
                    minOpenRatio?: string;
                    minOpenDepthRatio?: string;
                    maxDowntime?: number;
                    maxTotalDowntime?: number;
                    minHours?: number;
                    minDays?: number;
                }): _215.IncentiveProps;
            };
            IncentivePair: {
                encode(message: _215.IncentivePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.IncentivePair;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    updatedAt?: Date;
                    incentiveWeight?: string;
                    maxSpread?: string;
                    minSpread?: string;
                    minDepth?: string;
                }): _215.IncentivePair;
            };
            IncentiveDistribution: {
                encode(message: _215.IncentiveDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.IncentiveDistribution;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _215.IncentiveDistribution;
            };
            GenesisState: {
                encode(message: _214.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GenesisState;
                fromPartial(object: {
                    depositRecords?: {
                        address?: string;
                        pairId?: string | number | import("long");
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _214.GenesisState;
            };
            EventNewReward: {
                encode(message: _213.EventNewReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventNewReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _213.EventNewReward;
            };
            Deposit: {
                encode(message: _212.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Deposit;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _212.Deposit;
            };
            DepositRecord: {
                encode(message: _212.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.DepositRecord;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _212.DepositRecord;
            };
        };
    }
    namespace liquidity {
        const v1: {
            MsgClientImpl: typeof _505.MsgClientImpl;
            QueryClientImpl: typeof _488.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _230.QueryParamsRequest): Promise<_230.QueryParamsResponse>;
                pools(request: _230.QueryPoolsRequest): Promise<_230.QueryPoolsResponse>;
                pool(request: _230.QueryPoolRequest): Promise<_230.QueryPoolResponse>;
                poolByReserveAddress(request: _230.QueryPoolByReserveAddressRequest): Promise<_230.QueryPoolResponse>;
                poolByPoolCoinDenom(request: _230.QueryPoolByPoolCoinDenomRequest): Promise<_230.QueryPoolResponse>;
                pairs(request: _230.QueryPairsRequest): Promise<_230.QueryPairsResponse>;
                pair(request: _230.QueryPairRequest): Promise<_230.QueryPairResponse>;
                depositRequests(request: _230.QueryDepositRequestsRequest): Promise<_230.QueryDepositRequestsResponse>;
                depositRequest(request: _230.QueryDepositRequestRequest): Promise<_230.QueryDepositRequestResponse>;
                withdrawRequests(request: _230.QueryWithdrawRequestsRequest): Promise<_230.QueryWithdrawRequestsResponse>;
                withdrawRequest(request: _230.QueryWithdrawRequestRequest): Promise<_230.QueryWithdrawRequestResponse>;
                orders(request: _230.QueryOrdersRequest): Promise<_230.QueryOrdersResponse>;
                order(request: _230.QueryOrderRequest): Promise<_230.QueryOrderResponse>;
                ordersByOrderer(request: _230.QueryOrdersByOrdererRequest): Promise<_230.QueryOrdersResponse>;
                orderBooks(request: _230.QueryOrderBooksRequest): Promise<_230.QueryOrderBooksResponse>;
                numMMOrders(request: _230.QueryNumMMOrdersRequest): Promise<_230.QueryNumMMOrdersResponse>;
            };
            LCDQueryClient: typeof _468.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPair(value: _232.MsgCreatePair): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _232.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRangedPool(value: _232.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _232.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _232.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    limitOrder(value: _232.MsgLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _232.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mMOrder(value: _232.MsgMMOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _232.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAllOrders(value: _232.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPair(value: _232.MsgCreatePair): {
                        typeUrl: string;
                        value: _232.MsgCreatePair;
                    };
                    createPool(value: _232.MsgCreatePool): {
                        typeUrl: string;
                        value: _232.MsgCreatePool;
                    };
                    createRangedPool(value: _232.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: _232.MsgCreateRangedPool;
                    };
                    deposit(value: _232.MsgDeposit): {
                        typeUrl: string;
                        value: _232.MsgDeposit;
                    };
                    withdraw(value: _232.MsgWithdraw): {
                        typeUrl: string;
                        value: _232.MsgWithdraw;
                    };
                    limitOrder(value: _232.MsgLimitOrder): {
                        typeUrl: string;
                        value: _232.MsgLimitOrder;
                    };
                    marketOrder(value: _232.MsgMarketOrder): {
                        typeUrl: string;
                        value: _232.MsgMarketOrder;
                    };
                    mMOrder(value: _232.MsgMMOrder): {
                        typeUrl: string;
                        value: _232.MsgMMOrder;
                    };
                    cancelOrder(value: _232.MsgCancelOrder): {
                        typeUrl: string;
                        value: _232.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _232.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _232.MsgCancelAllOrders;
                    };
                };
                fromPartial: {
                    createPair(value: _232.MsgCreatePair): {
                        typeUrl: string;
                        value: _232.MsgCreatePair;
                    };
                    createPool(value: _232.MsgCreatePool): {
                        typeUrl: string;
                        value: _232.MsgCreatePool;
                    };
                    createRangedPool(value: _232.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: _232.MsgCreateRangedPool;
                    };
                    deposit(value: _232.MsgDeposit): {
                        typeUrl: string;
                        value: _232.MsgDeposit;
                    };
                    withdraw(value: _232.MsgWithdraw): {
                        typeUrl: string;
                        value: _232.MsgWithdraw;
                    };
                    limitOrder(value: _232.MsgLimitOrder): {
                        typeUrl: string;
                        value: _232.MsgLimitOrder;
                    };
                    marketOrder(value: _232.MsgMarketOrder): {
                        typeUrl: string;
                        value: _232.MsgMarketOrder;
                    };
                    mMOrder(value: _232.MsgMMOrder): {
                        typeUrl: string;
                        value: _232.MsgMMOrder;
                    };
                    cancelOrder(value: _232.MsgCancelOrder): {
                        typeUrl: string;
                        value: _232.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _232.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _232.MsgCancelAllOrders;
                    };
                };
            };
            AminoConverter: {
                "/ollo.liquidity.v1.MsgCreatePair": {
                    aminoType: string;
                    toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: _232.MsgCreatePair) => {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    };
                    fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    }) => _232.MsgCreatePair;
                };
                "/ollo.liquidity.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ creator, pairId, depositCoins }: _232.MsgCreatePool) => {
                        creator: string;
                        pair_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ creator, pair_id, deposit_coins }: {
                        creator: string;
                        pair_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _232.MsgCreatePool;
                };
                "/ollo.liquidity.v1.MsgCreateRangedPool": {
                    aminoType: string;
                    toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: _232.MsgCreateRangedPool) => {
                        creator: string;
                        pair_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                        min_price: string;
                        max_price: string;
                        initial_price: string;
                    };
                    fromAmino: ({ creator, pair_id, deposit_coins, min_price, max_price, initial_price }: {
                        creator: string;
                        pair_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                        min_price: string;
                        max_price: string;
                        initial_price: string;
                    }) => _232.MsgCreateRangedPool;
                };
                "/ollo.liquidity.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, poolId, depositCoins }: _232.MsgDeposit) => {
                        depositor: string;
                        pool_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, pool_id, deposit_coins }: {
                        depositor: string;
                        pool_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _232.MsgDeposit;
                };
                "/ollo.liquidity.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ withdrawer, poolId, poolCoin }: _232.MsgWithdraw) => {
                        withdrawer: string;
                        pool_id: string;
                        pool_coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ withdrawer, pool_id, pool_coin }: {
                        withdrawer: string;
                        pool_id: string;
                        pool_coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _232.MsgWithdraw;
                };
                "/ollo.liquidity.v1.MsgLimitOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _232.MsgLimitOrder) => {
                        orderer: string;
                        pair_id: string;
                        direction: number;
                        offer_coin: {
                            denom: string;
                            amount: string;
                        };
                        demand_coin_denom: string;
                        price: string;
                        amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, price, amount, order_lifespan }: {
                        orderer: string;
                        pair_id: string;
                        direction: number;
                        offer_coin: {
                            denom: string;
                            amount: string;
                        };
                        demand_coin_denom: string;
                        price: string;
                        amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _232.MsgLimitOrder;
                };
                "/ollo.liquidity.v1.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: _232.MsgMarketOrder) => {
                        orderer: string;
                        pair_id: string;
                        direction: number;
                        offer_coin: {
                            denom: string;
                            amount: string;
                        };
                        demand_coin_denom: string;
                        amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, amount, order_lifespan }: {
                        orderer: string;
                        pair_id: string;
                        direction: number;
                        offer_coin: {
                            denom: string;
                            amount: string;
                        };
                        demand_coin_denom: string;
                        amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _232.MsgMarketOrder;
                };
                "/ollo.liquidity.v1.MsgMMOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _232.MsgMMOrder) => {
                        orderer: string;
                        pair_id: string;
                        direction: number;
                        offer_coin: {
                            denom: string;
                            amount: string;
                        };
                        demand_coin_denom: string;
                        price: string;
                        amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, price, amount, order_lifespan }: {
                        orderer: string;
                        pair_id: string;
                        direction: number;
                        offer_coin: {
                            denom: string;
                            amount: string;
                        };
                        demand_coin_denom: string;
                        price: string;
                        amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _232.MsgMMOrder;
                };
                "/ollo.liquidity.v1.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, orderId }: _232.MsgCancelOrder) => {
                        orderer: string;
                        pair_id: string;
                        order_id: string;
                    };
                    fromAmino: ({ orderer, pair_id, order_id }: {
                        orderer: string;
                        pair_id: string;
                        order_id: string;
                    }) => _232.MsgCancelOrder;
                };
                "/ollo.liquidity.v1.MsgCancelAllOrders": {
                    aminoType: string;
                    toAmino: ({ orderer, pairIds }: _232.MsgCancelAllOrders) => {
                        orderer: string;
                        pair_ids: string[];
                    };
                    fromAmino: ({ orderer, pair_ids }: {
                        orderer: string;
                        pair_ids: string[];
                    }) => _232.MsgCancelAllOrders;
                };
            };
            MsgCreatePair: {
                encode(message: _232.MsgCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreatePair;
                fromPartial(object: {
                    creator?: string;
                    baseCoinDenom?: string;
                    quoteCoinDenom?: string;
                }): _232.MsgCreatePair;
            };
            MsgCreatePairResponse: {
                encode(_: _232.MsgCreatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreatePairResponse;
                fromPartial(_: {}): _232.MsgCreatePairResponse;
            };
            MsgCreatePool: {
                encode(message: _232.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    pairId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _232.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _232.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreatePoolResponse;
                fromPartial(_: {}): _232.MsgCreatePoolResponse;
            };
            MsgCreateRangedPool: {
                encode(message: _232.MsgCreateRangedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreateRangedPool;
                fromPartial(object: {
                    creator?: string;
                    pairId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    minPrice?: string;
                    maxPrice?: string;
                    initialPrice?: string;
                }): _232.MsgCreateRangedPool;
            };
            MsgCreateRangedPoolResponse: {
                encode(_: _232.MsgCreateRangedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCreateRangedPoolResponse;
                fromPartial(_: {}): _232.MsgCreateRangedPoolResponse;
            };
            MsgDeposit: {
                encode(message: _232.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgDeposit;
                fromPartial(object: {
                    depositor?: string;
                    poolId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _232.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _232.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgDepositResponse;
                fromPartial(_: {}): _232.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _232.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgWithdraw;
                fromPartial(object: {
                    withdrawer?: string;
                    poolId?: string | number | import("long");
                    poolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _232.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _232.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgWithdrawResponse;
                fromPartial(_: {}): _232.MsgWithdrawResponse;
            };
            MsgLimitOrder: {
                encode(message: _232.MsgLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgLimitOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _225.OrderDirection;
                    offerCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    demandCoinDenom?: string;
                    price?: string;
                    amount?: string;
                    orderLifespan?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _232.MsgLimitOrder;
            };
            MsgLimitOrderResponse: {
                encode(_: _232.MsgLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgLimitOrderResponse;
                fromPartial(_: {}): _232.MsgLimitOrderResponse;
            };
            MsgMarketOrder: {
                encode(message: _232.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgMarketOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _225.OrderDirection;
                    offerCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    demandCoinDenom?: string;
                    amount?: string;
                    orderLifespan?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _232.MsgMarketOrder;
            };
            MsgMarketOrderResponse: {
                encode(_: _232.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgMarketOrderResponse;
                fromPartial(_: {}): _232.MsgMarketOrderResponse;
            };
            MsgMMOrder: {
                encode(message: _232.MsgMMOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgMMOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _225.OrderDirection;
                    offerCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    demandCoinDenom?: string;
                    price?: string;
                    amount?: string;
                    orderLifespan?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _232.MsgMMOrder;
            };
            MsgMMOrderResponse: {
                encode(_: _232.MsgMMOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgMMOrderResponse;
                fromPartial(_: {}): _232.MsgMMOrderResponse;
            };
            MsgCancelOrder: {
                encode(message: _232.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCancelOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    orderId?: string | number | import("long");
                }): _232.MsgCancelOrder;
            };
            MsgCancelOrderResponse: {
                encode(_: _232.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCancelOrderResponse;
                fromPartial(_: {}): _232.MsgCancelOrderResponse;
            };
            MsgCancelAllOrders: {
                encode(message: _232.MsgCancelAllOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCancelAllOrders;
                fromPartial(object: {
                    orderer?: string;
                    pairIds?: (string | number | import("long"))[];
                }): _232.MsgCancelAllOrders;
            };
            MsgCancelAllOrdersResponse: {
                encode(_: _232.MsgCancelAllOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgCancelAllOrdersResponse;
                fromPartial(_: {}): _232.MsgCancelAllOrdersResponse;
            };
            RangedPool: {
                encode(_: _231.RangedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.RangedPool;
                fromPartial(_: {}): _231.RangedPool;
            };
            QueryParamsRequest: {
                encode(_: _230.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryParamsRequest;
                fromPartial(_: {}): _230.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _230.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        batchSize?: number;
                        tickPrecision?: number;
                        feeCollectorAddress?: string;
                        dustCollectorAddress?: string;
                        minInitialPoolCoinSupply?: string;
                        pairCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        poolCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        minInitialDepositAmount?: string;
                        maxPriceLimitRatio?: string;
                        maxNumMarketMakingOrderTicks?: number;
                        maxNumMarketMakingOrdersPerPair?: number;
                        maxOrderLifespan?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        swapFeeRate?: string;
                        withdrawFeeRate?: string;
                        depositExtraGas?: string | number | import("long");
                        withdrawExtraGas?: string | number | import("long");
                        orderExtraGas?: string | number | import("long");
                        maxNumActivePoolsPerPair?: number;
                    };
                }): _230.QueryParamsResponse;
            };
            QueryPoolsRequest: {
                encode(message: _230.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPoolsRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    disabled?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _230.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _230.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPoolsResponse;
                fromPartial(object: {
                    pools?: {
                        type?: _228.PoolType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        creator?: string;
                        reserveAddress?: string;
                        poolCoinDenom?: string;
                        poolCoinSupply?: string;
                        minPrice?: string;
                        maxPrice?: string;
                        price?: string;
                        balances?: {
                            baseCoin?: {
                                denom?: string;
                                amount?: string;
                            };
                            quoteCoin?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        lastDepositRequestId?: string | number | import("long");
                        lastWithdrawRequestId?: string | number | import("long");
                        disabled?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _230.QueryPoolsResponse;
            };
            QueryPoolRequest: {
                encode(message: _230.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPoolRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                }): _230.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _230.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        type?: _228.PoolType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        creator?: string;
                        reserveAddress?: string;
                        poolCoinDenom?: string;
                        poolCoinSupply?: string;
                        minPrice?: string;
                        maxPrice?: string;
                        price?: string;
                        balances?: {
                            baseCoin?: {
                                denom?: string;
                                amount?: string;
                            };
                            quoteCoin?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        lastDepositRequestId?: string | number | import("long");
                        lastWithdrawRequestId?: string | number | import("long");
                        disabled?: boolean;
                    };
                }): _230.QueryPoolResponse;
            };
            QueryPoolByReserveAddressRequest: {
                encode(message: _230.QueryPoolByReserveAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPoolByReserveAddressRequest;
                fromPartial(object: {
                    reserveAddress?: string;
                }): _230.QueryPoolByReserveAddressRequest;
            };
            QueryPoolByPoolCoinDenomRequest: {
                encode(message: _230.QueryPoolByPoolCoinDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPoolByPoolCoinDenomRequest;
                fromPartial(object: {
                    poolCoinDenom?: string;
                }): _230.QueryPoolByPoolCoinDenomRequest;
            };
            QueryPairsRequest: {
                encode(message: _230.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPairsRequest;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _230.QueryPairsRequest;
            };
            QueryPairsResponse: {
                encode(message: _230.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPairsResponse;
                fromPartial(object: {
                    pairs?: {
                        id?: string | number | import("long");
                        baseCoinDenom?: string;
                        quoteCoinDenom?: string;
                        escrowAddress?: string;
                        lastOrderId?: string | number | import("long");
                        lastPrice?: string;
                        currentBatchId?: string | number | import("long");
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _230.QueryPairsResponse;
            };
            QueryPairRequest: {
                encode(message: _230.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPairRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                }): _230.QueryPairRequest;
            };
            QueryPairResponse: {
                encode(message: _230.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryPairResponse;
                fromPartial(object: {
                    pair?: {
                        id?: string | number | import("long");
                        baseCoinDenom?: string;
                        quoteCoinDenom?: string;
                        escrowAddress?: string;
                        lastOrderId?: string | number | import("long");
                        lastPrice?: string;
                        currentBatchId?: string | number | import("long");
                    };
                }): _230.QueryPairResponse;
            };
            QueryDepositRequestsRequest: {
                encode(message: _230.QueryDepositRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryDepositRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _230.QueryDepositRequestsRequest;
            };
            QueryDepositRequestsResponse: {
                encode(message: _230.QueryDepositRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryDepositRequestsResponse;
                fromPartial(object: {
                    depositRequests?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        depositor?: string;
                        depositCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        acceptedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        mintedPoolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        status?: _225.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _230.QueryDepositRequestsResponse;
            };
            QueryDepositRequestRequest: {
                encode(message: _230.QueryDepositRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryDepositRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _230.QueryDepositRequestRequest;
            };
            QueryDepositRequestResponse: {
                encode(message: _230.QueryDepositRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryDepositRequestResponse;
                fromPartial(object: {
                    depositRequest?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        depositor?: string;
                        depositCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        acceptedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        mintedPoolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        status?: _225.RequestStatus;
                    };
                }): _230.QueryDepositRequestResponse;
            };
            QueryWithdrawRequestsRequest: {
                encode(message: _230.QueryWithdrawRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryWithdrawRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _230.QueryWithdrawRequestsRequest;
            };
            QueryWithdrawRequestsResponse: {
                encode(message: _230.QueryWithdrawRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryWithdrawRequestsResponse;
                fromPartial(object: {
                    withdrawRequests?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        withdrawer?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawnCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _225.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _230.QueryWithdrawRequestsResponse;
            };
            QueryWithdrawRequestRequest: {
                encode(message: _230.QueryWithdrawRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryWithdrawRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _230.QueryWithdrawRequestRequest;
            };
            QueryWithdrawRequestResponse: {
                encode(message: _230.QueryWithdrawRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryWithdrawRequestResponse;
                fromPartial(object: {
                    withdrawRequest?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        withdrawer?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawnCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _225.RequestStatus;
                    };
                }): _230.QueryWithdrawRequestResponse;
            };
            QueryOrdersRequest: {
                encode(message: _230.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryOrdersRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _230.QueryOrdersRequest;
            };
            QueryOrdersResponse: {
                encode(message: _230.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        type?: _225.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _225.OrderDirection;
                        offerCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        remainingOfferCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        receivedCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        price?: string;
                        amount?: string;
                        openAmount?: string;
                        batchId?: string | number | import("long");
                        expireAt?: Date;
                        status?: _225.OrderStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _230.QueryOrdersResponse;
            };
            QueryOrderRequest: {
                encode(message: _230.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryOrderRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _230.QueryOrderRequest;
            };
            QueryOrderResponse: {
                encode(message: _230.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryOrderResponse;
                fromPartial(object: {
                    order?: {
                        type?: _225.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _225.OrderDirection;
                        offerCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        remainingOfferCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        receivedCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        price?: string;
                        amount?: string;
                        openAmount?: string;
                        batchId?: string | number | import("long");
                        expireAt?: Date;
                        status?: _225.OrderStatus;
                    };
                }): _230.QueryOrderResponse;
            };
            QueryOrdersByOrdererRequest: {
                encode(message: _230.QueryOrdersByOrdererRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryOrdersByOrdererRequest;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _230.QueryOrdersByOrdererRequest;
            };
            QueryOrderBooksRequest: {
                encode(message: _230.QueryOrderBooksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryOrderBooksRequest;
                fromPartial(object: {
                    pairIds?: (string | number | import("long"))[];
                    priceUnitPowers?: number[];
                    numTicks?: number;
                }): _230.QueryOrderBooksRequest;
            };
            QueryOrderBooksResponse: {
                encode(message: _230.QueryOrderBooksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryOrderBooksResponse;
                fromPartial(object: {
                    pairs?: {
                        pairId?: string | number | import("long");
                        basePrice?: string;
                        orderBooks?: {
                            priceUnit?: string;
                            sells?: {
                                price?: string;
                                userOrderAmount?: string;
                                poolOrderAmount?: string;
                            }[];
                            buys?: {
                                price?: string;
                                userOrderAmount?: string;
                                poolOrderAmount?: string;
                            }[];
                        }[];
                    }[];
                }): _230.QueryOrderBooksResponse;
            };
            QueryNumMMOrdersRequest: {
                encode(message: _230.QueryNumMMOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryNumMMOrdersRequest;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                }): _230.QueryNumMMOrdersRequest;
            };
            QueryNumMMOrdersResponse: {
                encode(message: _230.QueryNumMMOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryNumMMOrdersResponse;
                fromPartial(object: {
                    numMarketMakingOrders?: number;
                }): _230.QueryNumMMOrdersResponse;
            };
            PoolResponse: {
                encode(message: _230.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.PoolResponse;
                fromPartial(object: {
                    type?: _228.PoolType;
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    creator?: string;
                    reserveAddress?: string;
                    poolCoinDenom?: string;
                    poolCoinSupply?: string;
                    minPrice?: string;
                    maxPrice?: string;
                    price?: string;
                    balances?: {
                        baseCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        quoteCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    lastDepositRequestId?: string | number | import("long");
                    lastWithdrawRequestId?: string | number | import("long");
                    disabled?: boolean;
                }): _230.PoolResponse;
            };
            PoolBalances: {
                encode(message: _230.PoolBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.PoolBalances;
                fromPartial(object: {
                    baseCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    quoteCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _230.PoolBalances;
            };
            OrderBookPairResponse: {
                encode(message: _230.OrderBookPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.OrderBookPairResponse;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    basePrice?: string;
                    orderBooks?: {
                        priceUnit?: string;
                        sells?: {
                            price?: string;
                            userOrderAmount?: string;
                            poolOrderAmount?: string;
                        }[];
                        buys?: {
                            price?: string;
                            userOrderAmount?: string;
                            poolOrderAmount?: string;
                        }[];
                    }[];
                }): _230.OrderBookPairResponse;
            };
            OrderBookResponse: {
                encode(message: _230.OrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.OrderBookResponse;
                fromPartial(object: {
                    priceUnit?: string;
                    sells?: {
                        price?: string;
                        userOrderAmount?: string;
                        poolOrderAmount?: string;
                    }[];
                    buys?: {
                        price?: string;
                        userOrderAmount?: string;
                        poolOrderAmount?: string;
                    }[];
                }): _230.OrderBookResponse;
            };
            OrderBookTickResponse: {
                encode(message: _230.OrderBookTickResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.OrderBookTickResponse;
                fromPartial(object: {
                    price?: string;
                    userOrderAmount?: string;
                    poolOrderAmount?: string;
                }): _230.OrderBookTickResponse;
            };
            ProprosalSetPoolParams: {
                encode(_: _229.ProprosalSetPoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.ProprosalSetPoolParams;
                fromPartial(_: {}): _229.ProprosalSetPoolParams;
            };
            poolTypeFromJSON(object: any): _228.PoolType;
            poolTypeToJSON(object: _228.PoolType): string;
            PoolType: typeof _228.PoolType;
            PoolTypeSDKType: typeof _228.PoolType;
            Pool: {
                encode(message: _228.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Pool;
                fromPartial(object: {
                    type?: _228.PoolType;
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    creator?: string;
                    reserveAddress?: string;
                    poolCoinDenom?: string;
                    minPrice?: string;
                    maxPrice?: string;
                    lastDepositRequestId?: string | number | import("long");
                    lastWithdrawRequestId?: string | number | import("long");
                    disabled?: boolean;
                }): _228.Pool;
            };
            Params: {
                encode(message: _227.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Params;
                fromPartial(object: {
                    batchSize?: number;
                    tickPrecision?: number;
                    feeCollectorAddress?: string;
                    dustCollectorAddress?: string;
                    minInitialPoolCoinSupply?: string;
                    pairCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    minInitialDepositAmount?: string;
                    maxPriceLimitRatio?: string;
                    maxNumMarketMakingOrderTicks?: number;
                    maxNumMarketMakingOrdersPerPair?: number;
                    maxOrderLifespan?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    swapFeeRate?: string;
                    withdrawFeeRate?: string;
                    depositExtraGas?: string | number | import("long");
                    withdrawExtraGas?: string | number | import("long");
                    orderExtraGas?: string | number | import("long");
                    maxNumActivePoolsPerPair?: number;
                }): _227.Params;
            };
            Pair: {
                encode(message: _226.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Pair;
                fromPartial(object: {
                    id?: string | number | import("long");
                    baseCoinDenom?: string;
                    quoteCoinDenom?: string;
                    escrowAddress?: string;
                    lastOrderId?: string | number | import("long");
                    lastPrice?: string;
                    currentBatchId?: string | number | import("long");
                }): _226.Pair;
            };
            orderTypeFromJSON(object: any): _225.OrderType;
            orderTypeToJSON(object: _225.OrderType): string;
            orderDirectionFromJSON(object: any): _225.OrderDirection;
            orderDirectionToJSON(object: _225.OrderDirection): string;
            requestStatusFromJSON(object: any): _225.RequestStatus;
            requestStatusToJSON(object: _225.RequestStatus): string;
            orderStatusFromJSON(object: any): _225.OrderStatus;
            orderStatusToJSON(object: _225.OrderStatus): string;
            OrderType: typeof _225.OrderType;
            OrderTypeSDKType: typeof _225.OrderType;
            OrderDirection: typeof _225.OrderDirection;
            OrderDirectionSDKType: typeof _225.OrderDirection;
            RequestStatus: typeof _225.RequestStatus;
            RequestStatusSDKType: typeof _225.RequestStatus;
            OrderStatus: typeof _225.OrderStatus;
            OrderStatusSDKType: typeof _225.OrderStatus;
            Order: {
                encode(message: _225.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.Order;
                fromPartial(object: {
                    type?: _225.OrderType;
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    msgHeight?: string | number | import("long");
                    orderer?: string;
                    direction?: _225.OrderDirection;
                    offerCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    remainingOfferCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    receivedCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    price?: string;
                    amount?: string;
                    openAmount?: string;
                    batchId?: string | number | import("long");
                    expireAt?: Date;
                    status?: _225.OrderStatus;
                }): _225.Order;
            };
            DepositRequest: {
                encode(message: _224.DepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.DepositRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                    poolId?: string | number | import("long");
                    msgHeight?: string | number | import("long");
                    depositor?: string;
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    acceptedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    mintedPoolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    status?: _225.RequestStatus;
                }): _224.DepositRequest;
            };
            WithdrawRequest: {
                encode(message: _224.WithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.WithdrawRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                    poolId?: string | number | import("long");
                    msgHeight?: string | number | import("long");
                    withdrawer?: string;
                    poolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    withdrawnCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    status?: _225.RequestStatus;
                }): _224.WithdrawRequest;
            };
            GenesisState: {
                encode(message: _223.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.GenesisState;
                fromPartial(object: {
                    params?: {
                        batchSize?: number;
                        tickPrecision?: number;
                        feeCollectorAddress?: string;
                        dustCollectorAddress?: string;
                        minInitialPoolCoinSupply?: string;
                        pairCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        poolCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        minInitialDepositAmount?: string;
                        maxPriceLimitRatio?: string;
                        maxNumMarketMakingOrderTicks?: number;
                        maxNumMarketMakingOrdersPerPair?: number;
                        maxOrderLifespan?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        swapFeeRate?: string;
                        withdrawFeeRate?: string;
                        depositExtraGas?: string | number | import("long");
                        withdrawExtraGas?: string | number | import("long");
                        orderExtraGas?: string | number | import("long");
                        maxNumActivePoolsPerPair?: number;
                    };
                    lastPairId?: string | number | import("long");
                    lastPoolId?: string | number | import("long");
                    pairs?: {
                        id?: string | number | import("long");
                        baseCoinDenom?: string;
                        quoteCoinDenom?: string;
                        escrowAddress?: string;
                        lastOrderId?: string | number | import("long");
                        lastPrice?: string;
                        currentBatchId?: string | number | import("long");
                    }[];
                    pools?: {
                        type?: _228.PoolType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        creator?: string;
                        reserveAddress?: string;
                        poolCoinDenom?: string;
                        minPrice?: string;
                        maxPrice?: string;
                        lastDepositRequestId?: string | number | import("long");
                        lastWithdrawRequestId?: string | number | import("long");
                        disabled?: boolean;
                    }[];
                    depositRequests?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        depositor?: string;
                        depositCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        acceptedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        mintedPoolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        status?: _225.RequestStatus;
                    }[];
                    withdrawRequests?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        withdrawer?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawnCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _225.RequestStatus;
                    }[];
                    orders?: {
                        type?: _225.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _225.OrderDirection;
                        offerCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        remainingOfferCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        receivedCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        price?: string;
                        amount?: string;
                        openAmount?: string;
                        batchId?: string | number | import("long");
                        expireAt?: Date;
                        status?: _225.OrderStatus;
                    }[];
                    numMarketMakingOrdersRecords?: {
                        orderer?: string;
                        pairId?: string | number | import("long");
                        numMarketMakingOrders?: number;
                    }[];
                }): _223.GenesisState;
            };
            NumMMOrdersRecord: {
                encode(message: _223.NumMMOrdersRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.NumMMOrdersRecord;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    numMarketMakingOrders?: number;
                }): _223.NumMMOrdersRecord;
            };
            EventDepositLiquidity: {
                encode(_: _222.EventDepositLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventDepositLiquidity;
                fromPartial(_: {}): _222.EventDepositLiquidity;
            };
            EventWithdrawLiquidity: {
                encode(_: _222.EventWithdrawLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventWithdrawLiquidity;
                fromPartial(_: {}): _222.EventWithdrawLiquidity;
            };
            EventCreatePool: {
                encode(_: _222.EventCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventCreatePool;
                fromPartial(_: {}): _222.EventCreatePool;
            };
            EventCreatePair: {
                encode(_: _222.EventCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventCreatePair;
                fromPartial(_: {}): _222.EventCreatePair;
            };
            BasicPool: {
                encode(message: _221.BasicPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.BasicPool;
                fromPartial(object: {
                    poolId?: string;
                    pairId?: string | number | import("long");
                    poolCoinDenom?: string;
                    reserveAccountAddress?: string;
                }): _221.BasicPool;
            };
        };
    }
    namespace loan {
        const v1: {
            MsgClientImpl: typeof _506.MsgClientImpl;
            QueryClientImpl: typeof _489.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _240.QueryParamsRequest): Promise<_240.QueryParamsResponse>;
                loans(request: _240.QueryGetLoansRequest): Promise<_240.QueryGetLoansResponse>;
                loansAll(request?: _240.QueryAllLoansRequest): Promise<_240.QueryAllLoansResponse>;
            };
            LCDQueryClient: typeof _469.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    requestLoan(value: _241.MsgRequestLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    approveLoan(value: _241.MsgApproveLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayLoan(value: _241.MsgRepayLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidateLoan(value: _241.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelLoan(value: _241.MsgCancelLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    requestLoan(value: _241.MsgRequestLoan): {
                        typeUrl: string;
                        value: _241.MsgRequestLoan;
                    };
                    approveLoan(value: _241.MsgApproveLoan): {
                        typeUrl: string;
                        value: _241.MsgApproveLoan;
                    };
                    repayLoan(value: _241.MsgRepayLoan): {
                        typeUrl: string;
                        value: _241.MsgRepayLoan;
                    };
                    liquidateLoan(value: _241.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _241.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _241.MsgCancelLoan): {
                        typeUrl: string;
                        value: _241.MsgCancelLoan;
                    };
                };
                fromPartial: {
                    requestLoan(value: _241.MsgRequestLoan): {
                        typeUrl: string;
                        value: _241.MsgRequestLoan;
                    };
                    approveLoan(value: _241.MsgApproveLoan): {
                        typeUrl: string;
                        value: _241.MsgApproveLoan;
                    };
                    repayLoan(value: _241.MsgRepayLoan): {
                        typeUrl: string;
                        value: _241.MsgRepayLoan;
                    };
                    liquidateLoan(value: _241.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _241.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _241.MsgCancelLoan): {
                        typeUrl: string;
                        value: _241.MsgCancelLoan;
                    };
                };
            };
            AminoConverter: {
                "/ollo.loan.v1.MsgRequestLoan": {
                    aminoType: string;
                    toAmino: ({ creator, amount, fee, collateral, deadline }: _241.MsgRequestLoan) => {
                        creator: string;
                        amount: string;
                        fee: string;
                        collateral: string;
                        deadline: string;
                    };
                    fromAmino: ({ creator, amount, fee, collateral, deadline }: {
                        creator: string;
                        amount: string;
                        fee: string;
                        collateral: string;
                        deadline: string;
                    }) => _241.MsgRequestLoan;
                };
                "/ollo.loan.v1.MsgApproveLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _241.MsgApproveLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _241.MsgApproveLoan;
                };
                "/ollo.loan.v1.MsgRepayLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _241.MsgRepayLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _241.MsgRepayLoan;
                };
                "/ollo.loan.v1.MsgLiquidateLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _241.MsgLiquidateLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _241.MsgLiquidateLoan;
                };
                "/ollo.loan.v1.MsgCancelLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _241.MsgCancelLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _241.MsgCancelLoan;
                };
            };
            MsgRequestLoan: {
                encode(message: _241.MsgRequestLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgRequestLoan;
                fromPartial(object: {
                    creator?: string;
                    amount?: string;
                    fee?: string;
                    collateral?: string;
                    deadline?: string;
                }): _241.MsgRequestLoan;
            };
            MsgRequestLoanResponse: {
                encode(_: _241.MsgRequestLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgRequestLoanResponse;
                fromPartial(_: {}): _241.MsgRequestLoanResponse;
            };
            MsgApproveLoan: {
                encode(message: _241.MsgApproveLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgApproveLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _241.MsgApproveLoan;
            };
            MsgApproveLoanResponse: {
                encode(_: _241.MsgApproveLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgApproveLoanResponse;
                fromPartial(_: {}): _241.MsgApproveLoanResponse;
            };
            MsgRepayLoan: {
                encode(message: _241.MsgRepayLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgRepayLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _241.MsgRepayLoan;
            };
            MsgRepayLoanResponse: {
                encode(_: _241.MsgRepayLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgRepayLoanResponse;
                fromPartial(_: {}): _241.MsgRepayLoanResponse;
            };
            MsgLiquidateLoan: {
                encode(message: _241.MsgLiquidateLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgLiquidateLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _241.MsgLiquidateLoan;
            };
            MsgLiquidateLoanResponse: {
                encode(_: _241.MsgLiquidateLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgLiquidateLoanResponse;
                fromPartial(_: {}): _241.MsgLiquidateLoanResponse;
            };
            MsgCancelLoan: {
                encode(message: _241.MsgCancelLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCancelLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _241.MsgCancelLoan;
            };
            MsgCancelLoanResponse: {
                encode(_: _241.MsgCancelLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCancelLoanResponse;
                fromPartial(_: {}): _241.MsgCancelLoanResponse;
            };
            QueryParamsRequest: {
                encode(_: _240.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryParamsRequest;
                fromPartial(_: {}): _240.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _240.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _240.QueryParamsResponse;
            };
            QueryGetLoansRequest: {
                encode(message: _240.QueryGetLoansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryGetLoansRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _240.QueryGetLoansRequest;
            };
            QueryGetLoansResponse: {
                encode(message: _240.QueryGetLoansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryGetLoansResponse;
                fromPartial(object: {
                    Loans?: {
                        id?: string | number | import("long");
                        amount?: string;
                        fee?: string;
                        collateral?: string;
                        deadline?: string;
                        state?: string;
                        borrower?: string;
                        lender?: string;
                    };
                }): _240.QueryGetLoansResponse;
            };
            QueryAllLoansRequest: {
                encode(message: _240.QueryAllLoansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllLoansRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _240.QueryAllLoansRequest;
            };
            QueryAllLoansResponse: {
                encode(message: _240.QueryAllLoansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllLoansResponse;
                fromPartial(object: {
                    Loans?: {
                        id?: string | number | import("long");
                        amount?: string;
                        fee?: string;
                        collateral?: string;
                        deadline?: string;
                        state?: string;
                        borrower?: string;
                        lender?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _240.QueryAllLoansResponse;
            };
            Params: {
                encode(_: _239.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Params;
                fromPartial(_: {}): _239.Params;
            };
            LoanPacketData: {
                encode(message: _238.LoanPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.LoanPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _238.LoanPacketData;
            };
            NoData: {
                encode(_: _238.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.NoData;
                fromPartial(_: {}): _238.NoData;
            };
            Loans: {
                encode(message: _237.Loans, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.Loans;
                fromPartial(object: {
                    id?: string | number | import("long");
                    amount?: string;
                    fee?: string;
                    collateral?: string;
                    deadline?: string;
                    state?: string;
                    borrower?: string;
                    lender?: string;
                }): _237.Loans;
            };
            Loan: {
                encode(message: _236.Loan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Loan;
                fromPartial(object: {
                    lender?: string;
                    createdAt?: Date;
                    amountIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    assetId?: string | number | import("long");
                }): _236.Loan;
            };
            GenesisState: {
                encode(message: _235.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.GenesisState;
                fromPartial(object: {
                    params?: {};
                    loansList?: {
                        id?: string | number | import("long");
                        amount?: string;
                        fee?: string;
                        collateral?: string;
                        deadline?: string;
                        state?: string;
                        borrower?: string;
                        lender?: string;
                    }[];
                    portId?: string;
                }): _235.GenesisState;
            };
            EventLoanCreated: {
                encode(_: _234.EventLoanCreated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.EventLoanCreated;
                fromPartial(_: {}): _234.EventLoanCreated;
            };
            EventLoanLiquidated: {
                encode(_: _234.EventLoanLiquidated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.EventLoanLiquidated;
                fromPartial(_: {}): _234.EventLoanLiquidated;
            };
            EventLoanRepaid: {
                encode(_: _234.EventLoanRepaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.EventLoanRepaid;
                fromPartial(_: {}): _234.EventLoanRepaid;
            };
            Borrow: {
                encode(message: _233.Borrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.Borrow;
                fromPartial(object: {
                    borrower?: string;
                    createdAt?: Date;
                    amountOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    assetId?: string | number | import("long");
                }): _233.Borrow;
            };
        };
    }
    namespace lock {
        const v1: {
            MsgClientImpl: typeof _507.MsgClientImpl;
            QueryClientImpl: typeof _490.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryParams(request?: _246.QueryParamsRequest): Promise<_246.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _470.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    msgCreateLock(value: _247.MsgCreateLockRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDepositAsset(value: _247.MsgDepositAssetRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgWithdrawAsset(value: _247.MsgWithdrawAssetRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgCloseLock(value: _247.MsgCloseLockRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    msgCreateLock(value: _247.MsgCreateLockRequest): {
                        typeUrl: string;
                        value: _247.MsgCreateLockRequest;
                    };
                    msgDepositAsset(value: _247.MsgDepositAssetRequest): {
                        typeUrl: string;
                        value: _247.MsgDepositAssetRequest;
                    };
                    msgWithdrawAsset(value: _247.MsgWithdrawAssetRequest): {
                        typeUrl: string;
                        value: _247.MsgWithdrawAssetRequest;
                    };
                    msgCloseLock(value: _247.MsgCloseLockRequest): {
                        typeUrl: string;
                        value: _247.MsgCloseLockRequest;
                    };
                };
                fromPartial: {
                    msgCreateLock(value: _247.MsgCreateLockRequest): {
                        typeUrl: string;
                        value: _247.MsgCreateLockRequest;
                    };
                    msgDepositAsset(value: _247.MsgDepositAssetRequest): {
                        typeUrl: string;
                        value: _247.MsgDepositAssetRequest;
                    };
                    msgWithdrawAsset(value: _247.MsgWithdrawAssetRequest): {
                        typeUrl: string;
                        value: _247.MsgWithdrawAssetRequest;
                    };
                    msgCloseLock(value: _247.MsgCloseLockRequest): {
                        typeUrl: string;
                        value: _247.MsgCloseLockRequest;
                    };
                };
            };
            AminoConverter: {
                "/ollo.lock.v1.MsgCreateLockRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, amount, assetId }: _247.MsgCreateLockRequest) => {
                        depositor: string;
                        amount: string;
                        asset_id: string;
                    };
                    fromAmino: ({ depositor, amount, asset_id }: {
                        depositor: string;
                        amount: string;
                        asset_id: string;
                    }) => _247.MsgCreateLockRequest;
                };
                "/ollo.lock.v1.MsgDepositAssetRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, lockerId, amount, assetId }: _247.MsgDepositAssetRequest) => {
                        depositor: string;
                        locker_id: string;
                        amount: string;
                        asset_id: string;
                    };
                    fromAmino: ({ depositor, locker_id, amount, asset_id }: {
                        depositor: string;
                        locker_id: string;
                        amount: string;
                        asset_id: string;
                    }) => _247.MsgDepositAssetRequest;
                };
                "/ollo.lock.v1.MsgWithdrawAssetRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, lockerId, amount, assetId }: _247.MsgWithdrawAssetRequest) => {
                        depositor: string;
                        locker_id: string;
                        amount: string;
                        asset_id: string;
                    };
                    fromAmino: ({ depositor, locker_id, amount, asset_id }: {
                        depositor: string;
                        locker_id: string;
                        amount: string;
                        asset_id: string;
                    }) => _247.MsgWithdrawAssetRequest;
                };
                "/ollo.lock.v1.MsgCloseLockRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, lockerId }: _247.MsgCloseLockRequest) => {
                        depositor: string;
                        locker_id: string;
                    };
                    fromAmino: ({ depositor, locker_id }: {
                        depositor: string;
                        locker_id: string;
                    }) => _247.MsgCloseLockRequest;
                };
            };
            MsgCreateLockRequest: {
                encode(message: _247.MsgCreateLockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreateLockRequest;
                fromPartial(object: {
                    depositor?: string;
                    amount?: string;
                    assetId?: string | number | import("long");
                }): _247.MsgCreateLockRequest;
            };
            MsgCreateLockResponse: {
                encode(_: _247.MsgCreateLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreateLockResponse;
                fromPartial(_: {}): _247.MsgCreateLockResponse;
            };
            MsgDepositAssetRequest: {
                encode(message: _247.MsgDepositAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgDepositAssetRequest;
                fromPartial(object: {
                    depositor?: string;
                    lockerId?: string | number | import("long");
                    amount?: string;
                    assetId?: string | number | import("long");
                }): _247.MsgDepositAssetRequest;
            };
            MsgDepositAssetResponse: {
                encode(_: _247.MsgDepositAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgDepositAssetResponse;
                fromPartial(_: {}): _247.MsgDepositAssetResponse;
            };
            MsgWithdrawAssetRequest: {
                encode(message: _247.MsgWithdrawAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgWithdrawAssetRequest;
                fromPartial(object: {
                    depositor?: string;
                    lockerId?: string | number | import("long");
                    amount?: string;
                    assetId?: string | number | import("long");
                }): _247.MsgWithdrawAssetRequest;
            };
            MsgWithdrawAssetResponse: {
                encode(_: _247.MsgWithdrawAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgWithdrawAssetResponse;
                fromPartial(_: {}): _247.MsgWithdrawAssetResponse;
            };
            MsgCloseLockRequest: {
                encode(message: _247.MsgCloseLockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCloseLockRequest;
                fromPartial(object: {
                    depositor?: string;
                    lockerId?: string | number | import("long");
                }): _247.MsgCloseLockRequest;
            };
            MsgCloseLockResponse: {
                encode(_: _247.MsgCloseLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCloseLockResponse;
                fromPartial(_: {}): _247.MsgCloseLockResponse;
            };
            QueryParamsRequest: {
                encode(_: _246.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.QueryParamsRequest;
                fromPartial(_: {}): _246.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _246.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _246.QueryParamsResponse;
            };
            Params: {
                encode(_: _245.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.Params;
                fromPartial(_: {}): _245.Params;
            };
            DurationQuery: {
                encode(message: _244.DurationQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.DurationQuery;
                fromPartial(object: {
                    denom?: string;
                    duration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _244.DurationQuery;
            };
            TimeQuery: {
                encode(message: _244.TimeQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.TimeQuery;
                fromPartial(object: {
                    denom?: string;
                    time?: Date;
                }): _244.TimeQuery;
            };
            DurationLock: {
                encode(message: _244.DurationLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.DurationLock;
                fromPartial(object: {
                    id?: string | number | import("long");
                    depositor?: string;
                    duration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    durationEnd?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _244.DurationLock;
            };
            Lock: {
                encode(message: _244.Lock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Lock;
                fromPartial(object: {
                    id?: string | number | import("long");
                    depositor?: string;
                    balance?: string;
                    createdAt?: Date;
                    locked?: boolean;
                    blockHeight?: string | number | import("long");
                    blockTime?: Date;
                    returnsAccumulated?: string;
                }): _244.Lock;
            };
            GenesisState: {
                encode(message: _243.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.GenesisState;
                fromPartial(object: {
                    params?: {};
                    locks?: {
                        id?: string | number | import("long");
                        depositor?: string;
                        balance?: string;
                        createdAt?: Date;
                        locked?: boolean;
                        blockHeight?: string | number | import("long");
                        blockTime?: Date;
                        returnsAccumulated?: string;
                    }[];
                    lastLockId?: string | number | import("long");
                }): _243.GenesisState;
            };
            EventCreateLock: {
                encode(message: _242.EventCreateLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventCreateLock;
                fromPartial(object: {
                    id?: string;
                }): _242.EventCreateLock;
            };
        };
    }
    namespace market {
        const v1: {
            QueryClientImpl: typeof _491.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _251.QueryParamsRequest): Promise<_251.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _471.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _251.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryParamsRequest;
                fromPartial(_: {}): _251.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _251.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _251.QueryParamsResponse;
            };
            Params: {
                encode(_: _250.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Params;
                fromPartial(_: {}): _250.Params;
            };
            MarketPacketData: {
                encode(message: _249.MarketPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.MarketPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _249.MarketPacketData;
            };
            NoData: {
                encode(_: _249.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.NoData;
                fromPartial(_: {}): _249.NoData;
            };
            GenesisState: {
                encode(message: _248.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.GenesisState;
                fromPartial(object: {
                    params?: {};
                    portId?: string;
                }): _248.GenesisState;
            };
        };
    }
    namespace mint {
        const v1: {
            QueryClientImpl: typeof _492.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
                inflation(request?: _257.QueryInflationRequest): Promise<_257.QueryInflationResponse>;
                annualProvisions(request?: _257.QueryAnnualProvisionsRequest): Promise<_257.QueryAnnualProvisionsResponse>;
                distribution(request?: _257.QueryDistributionRequest): Promise<_257.QueryDistributionResponse>;
                lastBlockTime(request?: _257.QueryLastBlockTimeRequest): Promise<_257.QueryLastBlockTimeResponse>;
            };
            LCDQueryClient: typeof _472.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _257.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryParamsRequest;
                fromPartial(_: {}): _257.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _257.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long");
                        distributionProportions?: {
                            staking?: string;
                            communityPool?: string;
                            poolIncentives?: string;
                            grantsProgram?: string;
                            developerRewards?: string;
                            fundedAddresses?: string;
                        };
                        fundedAddresses?: {
                            address?: string;
                            weight?: string;
                        }[];
                        reduceFactor?: string;
                        mintDistributionEpochStart?: string | number | import("long");
                        genesisEpochProvisions?: string;
                        epochId?: string;
                    };
                }): _257.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _257.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryInflationRequest;
                fromPartial(_: {}): _257.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _257.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _257.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _257.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _257.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _257.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _257.QueryAnnualProvisionsResponse;
            };
            QueryDistributionRequest: {
                encode(_: _257.QueryDistributionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryDistributionRequest;
                fromPartial(_: {}): _257.QueryDistributionRequest;
            };
            QueryDistributionResponse: {
                encode(_: _257.QueryDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryDistributionResponse;
                fromPartial(_: {}): _257.QueryDistributionResponse;
            };
            QueryLastBlockTimeRequest: {
                encode(_: _257.QueryLastBlockTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryLastBlockTimeRequest;
                fromPartial(_: {}): _257.QueryLastBlockTimeRequest;
            };
            QueryLastBlockTimeResponse: {
                encode(message: _257.QueryLastBlockTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryLastBlockTimeResponse;
                fromPartial(object: {
                    lastBlockTime?: Date;
                }): _257.QueryLastBlockTimeResponse;
            };
            Params: {
                encode(message: _256.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: string | number | import("long");
                    distributionProportions?: {
                        staking?: string;
                        communityPool?: string;
                        poolIncentives?: string;
                        grantsProgram?: string;
                        developerRewards?: string;
                        fundedAddresses?: string;
                    };
                    fundedAddresses?: {
                        address?: string;
                        weight?: string;
                    }[];
                    reduceFactor?: string;
                    mintDistributionEpochStart?: string | number | import("long");
                    genesisEpochProvisions?: string;
                    epochId?: string;
                }): _256.Params;
            };
            Minter: {
                encode(message: _255.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _255.Minter;
            };
            WeightedAddress: {
                encode(message: _255.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _255.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _255.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    communityPool?: string;
                    poolIncentives?: string;
                    grantsProgram?: string;
                    developerRewards?: string;
                    fundedAddresses?: string;
                }): _255.DistributionProportions;
            };
            GenesisState: {
                encode(message: _254.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long");
                        distributionProportions?: {
                            staking?: string;
                            communityPool?: string;
                            poolIncentives?: string;
                            grantsProgram?: string;
                            developerRewards?: string;
                            fundedAddresses?: string;
                        };
                        fundedAddresses?: {
                            address?: string;
                            weight?: string;
                        }[];
                        reduceFactor?: string;
                        mintDistributionEpochStart?: string | number | import("long");
                        genesisEpochProvisions?: string;
                        epochId?: string;
                    };
                    lastBlockTime?: Date;
                    lastEpochReduction?: string | number | import("long");
                }): _254.GenesisState;
            };
            EventMint: {
                encode(message: _253.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.EventMint;
                fromPartial(object: {
                    bondedRatio?: string;
                    inflation?: string;
                    annualProvisions?: string;
                    amount?: string;
                }): _253.EventMint;
            };
        };
    }
    namespace nft {
        const v1: {
            MsgClientImpl: typeof _508.MsgClientImpl;
            QueryClientImpl: typeof _493.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                supply(request: _262.QuerySupplyRequest): Promise<_262.QuerySupplyResponse>;
                nFTsOfOwner(request: _262.QueryNFTsOfOwnerRequest): Promise<_262.QueryNFTsOfOwnerResponse>;
                collection(request: _262.QueryCollectionRequest): Promise<_262.QueryCollectionResponse>;
                denom(request: _262.QueryDenomRequest): Promise<_262.QueryDenomResponse>;
                denoms(request?: _262.QueryDenomsRequest): Promise<_262.QueryDenomsResponse>;
                nFT(request: _262.QueryNFTRequest): Promise<_262.QueryNFTResponse>;
                params(request?: _262.QueryParamsRequest): Promise<_262.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _473.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueDenom(value: _263.MsgIssueDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferDenom(value: _263.MsgTransferDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintNFT(value: _263.MsgMintNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnNFT(value: _263.MsgBurnNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editNFT(value: _263.MsgEditNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sendNFT(value: _263.MsgSendNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueDenom(value: _263.MsgIssueDenom): {
                        typeUrl: string;
                        value: _263.MsgIssueDenom;
                    };
                    transferDenom(value: _263.MsgTransferDenom): {
                        typeUrl: string;
                        value: _263.MsgTransferDenom;
                    };
                    mintNFT(value: _263.MsgMintNFT): {
                        typeUrl: string;
                        value: _263.MsgMintNFT;
                    };
                    burnNFT(value: _263.MsgBurnNFT): {
                        typeUrl: string;
                        value: _263.MsgBurnNFT;
                    };
                    editNFT(value: _263.MsgEditNFT): {
                        typeUrl: string;
                        value: _263.MsgEditNFT;
                    };
                    sendNFT(value: _263.MsgSendNFT): {
                        typeUrl: string;
                        value: _263.MsgSendNFT;
                    };
                };
                fromPartial: {
                    issueDenom(value: _263.MsgIssueDenom): {
                        typeUrl: string;
                        value: _263.MsgIssueDenom;
                    };
                    transferDenom(value: _263.MsgTransferDenom): {
                        typeUrl: string;
                        value: _263.MsgTransferDenom;
                    };
                    mintNFT(value: _263.MsgMintNFT): {
                        typeUrl: string;
                        value: _263.MsgMintNFT;
                    };
                    burnNFT(value: _263.MsgBurnNFT): {
                        typeUrl: string;
                        value: _263.MsgBurnNFT;
                    };
                    editNFT(value: _263.MsgEditNFT): {
                        typeUrl: string;
                        value: _263.MsgEditNFT;
                    };
                    sendNFT(value: _263.MsgSendNFT): {
                        typeUrl: string;
                        value: _263.MsgSendNFT;
                    };
                };
            };
            AminoConverter: {
                "/ollo.nft.v1.MsgIssueDenom": {
                    aminoType: string;
                    toAmino: ({ id, name, schema, sender, symbol, mintRestricted, updateRestricted, description, uri, uriHash, data }: _263.MsgIssueDenom) => {
                        id: string;
                        name: string;
                        schema: string;
                        sender: string;
                        symbol: string;
                        mint_restricted: boolean;
                        update_restricted: boolean;
                        description: string;
                        uri: string;
                        uri_hash: string;
                        data: string;
                    };
                    fromAmino: ({ id, name, schema, sender, symbol, mint_restricted, update_restricted, description, uri, uri_hash, data }: {
                        id: string;
                        name: string;
                        schema: string;
                        sender: string;
                        symbol: string;
                        mint_restricted: boolean;
                        update_restricted: boolean;
                        description: string;
                        uri: string;
                        uri_hash: string;
                        data: string;
                    }) => _263.MsgIssueDenom;
                };
                "/ollo.nft.v1.MsgTransferDenom": {
                    aminoType: string;
                    toAmino: ({ id, sender, recipient }: _263.MsgTransferDenom) => {
                        id: string;
                        sender: string;
                        recipient: string;
                    };
                    fromAmino: ({ id, sender, recipient }: {
                        id: string;
                        sender: string;
                        recipient: string;
                    }) => _263.MsgTransferDenom;
                };
                "/ollo.nft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: _263.MsgMintNFT) => {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        recipient: string;
                        uri_hash: string;
                    };
                    fromAmino: ({ id, denom_id, name, uri, data, sender, recipient, uri_hash }: {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        recipient: string;
                        uri_hash: string;
                    }) => _263.MsgMintNFT;
                };
                "/ollo.nft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, sender }: _263.MsgBurnNFT) => {
                        id: string;
                        denom_id: string;
                        sender: string;
                    };
                    fromAmino: ({ id, denom_id, sender }: {
                        id: string;
                        denom_id: string;
                        sender: string;
                    }) => _263.MsgBurnNFT;
                };
                "/ollo.nft.v1.MsgEditNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, uriHash }: _263.MsgEditNFT) => {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        uri_hash: string;
                    };
                    fromAmino: ({ id, denom_id, name, uri, data, sender, uri_hash }: {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        uri_hash: string;
                    }) => _263.MsgEditNFT;
                };
                "/ollo.nft.v1.MsgSendNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: _263.MsgSendNFT) => {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        recipient: string;
                        uri_hash: string;
                    };
                    fromAmino: ({ id, denom_id, name, uri, data, sender, recipient, uri_hash }: {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        recipient: string;
                        uri_hash: string;
                    }) => _263.MsgSendNFT;
                };
            };
            MsgIssueDenom: {
                encode(message: _263.MsgIssueDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgIssueDenom;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    schema?: string;
                    sender?: string;
                    symbol?: string;
                    mintRestricted?: boolean;
                    updateRestricted?: boolean;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: string;
                }): _263.MsgIssueDenom;
            };
            MsgIssueDenomResponse: {
                encode(_: _263.MsgIssueDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgIssueDenomResponse;
                fromPartial(_: {}): _263.MsgIssueDenomResponse;
            };
            MsgTransferDenom: {
                encode(message: _263.MsgTransferDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgTransferDenom;
                fromPartial(object: {
                    id?: string;
                    sender?: string;
                    recipient?: string;
                }): _263.MsgTransferDenom;
            };
            MsgTransferDenomResponse: {
                encode(_: _263.MsgTransferDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgTransferDenomResponse;
                fromPartial(_: {}): _263.MsgTransferDenomResponse;
            };
            MsgMintNFT: {
                encode(message: _263.MsgMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgMintNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    recipient?: string;
                    uriHash?: string;
                }): _263.MsgMintNFT;
            };
            MsgBurnNFT: {
                encode(message: _263.MsgBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgBurnNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    sender?: string;
                }): _263.MsgBurnNFT;
            };
            MsgEditNFT: {
                encode(message: _263.MsgEditNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgEditNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    uriHash?: string;
                }): _263.MsgEditNFT;
            };
            MsgSendNFT: {
                encode(message: _263.MsgSendNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgSendNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    recipient?: string;
                    uriHash?: string;
                }): _263.MsgSendNFT;
            };
            MsgMintNFTResponse: {
                encode(_: _263.MsgMintNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgMintNFTResponse;
                fromPartial(_: {}): _263.MsgMintNFTResponse;
            };
            MsgBurnNFTResponse: {
                encode(_: _263.MsgBurnNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgBurnNFTResponse;
                fromPartial(_: {}): _263.MsgBurnNFTResponse;
            };
            MsgEditNFTResponse: {
                encode(_: _263.MsgEditNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgEditNFTResponse;
                fromPartial(_: {}): _263.MsgEditNFTResponse;
            };
            MsgSendNFTResponse: {
                encode(_: _263.MsgSendNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgSendNFTResponse;
                fromPartial(_: {}): _263.MsgSendNFTResponse;
            };
            QueryParamsRequest: {
                encode(_: _262.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryParamsRequest;
                fromPartial(_: {}): _262.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _262.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _262.QueryParamsResponse;
            };
            QuerySupplyRequest: {
                encode(message: _262.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QuerySupplyRequest;
                fromPartial(object: {
                    denomId?: string;
                    owner?: string;
                }): _262.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _262.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long");
                }): _262.QuerySupplyResponse;
            };
            QueryNFTsOfOwnerRequest: {
                encode(message: _262.QueryNFTsOfOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryNFTsOfOwnerRequest;
                fromPartial(object: {
                    denomId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _262.QueryNFTsOfOwnerRequest;
            };
            QueryNFTsOfOwnerResponse: {
                encode(message: _262.QueryNFTsOfOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryNFTsOfOwnerResponse;
                fromPartial(object: {
                    owner?: {
                        address?: string;
                        idCollections?: {
                            denomId?: string;
                            tokenIds?: string[];
                        }[];
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _262.QueryNFTsOfOwnerResponse;
            };
            QueryCollectionRequest: {
                encode(message: _262.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryCollectionRequest;
                fromPartial(object: {
                    denomId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _262.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _262.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryCollectionResponse;
                fromPartial(object: {
                    collection?: {
                        denom?: {
                            id?: string;
                            name?: string;
                            schema?: string;
                            creator?: string;
                            symbol?: string;
                            mintRestricted?: boolean;
                            updateRestricted?: boolean;
                            description?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: string;
                        };
                        nfts?: {
                            id?: string;
                            name?: string;
                            uri?: string;
                            data?: string;
                            owner?: string;
                            uriHash?: string;
                        }[];
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _262.QueryCollectionResponse;
            };
            QueryDenomRequest: {
                encode(message: _262.QueryDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryDenomRequest;
                fromPartial(object: {
                    denomId?: string;
                }): _262.QueryDenomRequest;
            };
            QueryDenomResponse: {
                encode(message: _262.QueryDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryDenomResponse;
                fromPartial(object: {
                    denom?: {
                        id?: string;
                        name?: string;
                        schema?: string;
                        creator?: string;
                        symbol?: string;
                        mintRestricted?: boolean;
                        updateRestricted?: boolean;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: string;
                    };
                }): _262.QueryDenomResponse;
            };
            QueryDenomsRequest: {
                encode(message: _262.QueryDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryDenomsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _262.QueryDenomsRequest;
            };
            QueryDenomsResponse: {
                encode(message: _262.QueryDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryDenomsResponse;
                fromPartial(object: {
                    denoms?: {
                        id?: string;
                        name?: string;
                        schema?: string;
                        creator?: string;
                        symbol?: string;
                        mintRestricted?: boolean;
                        updateRestricted?: boolean;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _262.QueryDenomsResponse;
            };
            QueryNFTRequest: {
                encode(message: _262.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryNFTRequest;
                fromPartial(object: {
                    denomId?: string;
                    tokenId?: string;
                }): _262.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _262.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        id?: string;
                        name?: string;
                        uri?: string;
                        data?: string;
                        owner?: string;
                        uriHash?: string;
                    };
                }): _262.QueryNFTResponse;
            };
            Params: {
                encode(_: _261.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Params;
                fromPartial(_: {}): _261.Params;
            };
            BaseNFT: {
                encode(message: _260.BaseNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.BaseNFT;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    owner?: string;
                    uriHash?: string;
                }): _260.BaseNFT;
            };
            NFTMetadata: {
                encode(message: _260.NFTMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.NFTMetadata;
                fromPartial(object: {
                    name?: string;
                    data?: string;
                }): _260.NFTMetadata;
            };
            Denom: {
                encode(message: _260.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Denom;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    schema?: string;
                    creator?: string;
                    symbol?: string;
                    mintRestricted?: boolean;
                    updateRestricted?: boolean;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: string;
                }): _260.Denom;
            };
            DenomMetadata: {
                encode(message: _260.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.DenomMetadata;
                fromPartial(object: {
                    creator?: string;
                    schema?: string;
                    mintRestricted?: boolean;
                    updateRestricted?: boolean;
                    data?: string;
                }): _260.DenomMetadata;
            };
            IDCollection: {
                encode(message: _260.IDCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.IDCollection;
                fromPartial(object: {
                    denomId?: string;
                    tokenIds?: string[];
                }): _260.IDCollection;
            };
            Owner: {
                encode(message: _260.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Owner;
                fromPartial(object: {
                    address?: string;
                    idCollections?: {
                        denomId?: string;
                        tokenIds?: string[];
                    }[];
                }): _260.Owner;
            };
            Collection: {
                encode(message: _260.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Collection;
                fromPartial(object: {
                    denom?: {
                        id?: string;
                        name?: string;
                        schema?: string;
                        creator?: string;
                        symbol?: string;
                        mintRestricted?: boolean;
                        updateRestricted?: boolean;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: string;
                    };
                    nfts?: {
                        id?: string;
                        name?: string;
                        uri?: string;
                        data?: string;
                        owner?: string;
                        uriHash?: string;
                    }[];
                }): _260.Collection;
            };
            GenesisState: {
                encode(message: _259.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.GenesisState;
                fromPartial(object: {
                    collections?: {
                        denom?: {
                            id?: string;
                            name?: string;
                            schema?: string;
                            creator?: string;
                            symbol?: string;
                            mintRestricted?: boolean;
                            updateRestricted?: boolean;
                            description?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: string;
                        };
                        nfts?: {
                            id?: string;
                            name?: string;
                            uri?: string;
                            data?: string;
                            owner?: string;
                            uriHash?: string;
                        }[];
                    }[];
                }): _259.GenesisState;
            };
        };
    }
    namespace ons {
        const v1: {
            MsgClientImpl: typeof _509.MsgClientImpl;
            QueryClientImpl: typeof _494.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _267.QueryParamsRequest): Promise<_267.QueryParamsResponse>;
                whois(request: _267.QueryGetWhoisRequest): Promise<_267.QueryGetWhoisResponse>;
                whoisAll(request?: _267.QueryAllWhoisRequest): Promise<_267.QueryAllWhoisResponse>;
            };
            LCDQueryClient: typeof _474.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    buyName(value: _268.MsgBuyName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sellName(value: _268.MsgSellName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setName(value: _268.MsgSetName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteName(value: _268.MsgDeleteName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addThread(value: _268.MsgAddThread): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteThread(value: _268.MsgDeleteThread): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    buyName(value: _268.MsgBuyName): {
                        typeUrl: string;
                        value: _268.MsgBuyName;
                    };
                    sellName(value: _268.MsgSellName): {
                        typeUrl: string;
                        value: _268.MsgSellName;
                    };
                    setName(value: _268.MsgSetName): {
                        typeUrl: string;
                        value: _268.MsgSetName;
                    };
                    deleteName(value: _268.MsgDeleteName): {
                        typeUrl: string;
                        value: _268.MsgDeleteName;
                    };
                    addThread(value: _268.MsgAddThread): {
                        typeUrl: string;
                        value: _268.MsgAddThread;
                    };
                    deleteThread(value: _268.MsgDeleteThread): {
                        typeUrl: string;
                        value: _268.MsgDeleteThread;
                    };
                };
                fromPartial: {
                    buyName(value: _268.MsgBuyName): {
                        typeUrl: string;
                        value: _268.MsgBuyName;
                    };
                    sellName(value: _268.MsgSellName): {
                        typeUrl: string;
                        value: _268.MsgSellName;
                    };
                    setName(value: _268.MsgSetName): {
                        typeUrl: string;
                        value: _268.MsgSetName;
                    };
                    deleteName(value: _268.MsgDeleteName): {
                        typeUrl: string;
                        value: _268.MsgDeleteName;
                    };
                    addThread(value: _268.MsgAddThread): {
                        typeUrl: string;
                        value: _268.MsgAddThread;
                    };
                    deleteThread(value: _268.MsgDeleteThread): {
                        typeUrl: string;
                        value: _268.MsgDeleteThread;
                    };
                };
            };
            AminoConverter: {
                "/ollo.ons.v1.MsgBuyName": {
                    aminoType: string;
                    toAmino: ({ creator, name, bidderAddr, bid }: _268.MsgBuyName) => {
                        creator: string;
                        name: string;
                        bidderAddr: string;
                        bid: string;
                    };
                    fromAmino: ({ creator, name, bidderAddr, bid }: {
                        creator: string;
                        name: string;
                        bidderAddr: string;
                        bid: string;
                    }) => _268.MsgBuyName;
                };
                "/ollo.ons.v1.MsgSellName": {
                    aminoType: string;
                    toAmino: ({ creator, name, sellerAddr, offer }: _268.MsgSellName) => {
                        creator: string;
                        name: string;
                        sellerAddr: string;
                        offer: string;
                    };
                    fromAmino: ({ creator, name, sellerAddr, offer }: {
                        creator: string;
                        name: string;
                        sellerAddr: string;
                        offer: string;
                    }) => _268.MsgSellName;
                };
                "/ollo.ons.v1.MsgSetName": {
                    aminoType: string;
                    toAmino: ({ creatorAddr, name, value }: _268.MsgSetName) => {
                        creatorAddr: string;
                        name: string;
                        value: string;
                    };
                    fromAmino: ({ creatorAddr, name, value }: {
                        creatorAddr: string;
                        name: string;
                        value: string;
                    }) => _268.MsgSetName;
                };
                "/ollo.ons.v1.MsgDeleteName": {
                    aminoType: string;
                    toAmino: ({ creatorAddr, name }: _268.MsgDeleteName) => {
                        creatorAddr: string;
                        name: string;
                    };
                    fromAmino: ({ creatorAddr, name }: {
                        creatorAddr: string;
                        name: string;
                    }) => _268.MsgDeleteName;
                };
                "/ollo.ons.v1.MsgAddThread": {
                    aminoType: string;
                    toAmino: ({ creator, name, thread, addr, offer }: _268.MsgAddThread) => {
                        creator: string;
                        name: string;
                        thread: string;
                        addr: string;
                        offer: string;
                    };
                    fromAmino: ({ creator, name, thread, addr, offer }: {
                        creator: string;
                        name: string;
                        thread: string;
                        addr: string;
                        offer: string;
                    }) => _268.MsgAddThread;
                };
                "/ollo.ons.v1.MsgDeleteThread": {
                    aminoType: string;
                    toAmino: ({ creator, name, thread, addr }: _268.MsgDeleteThread) => {
                        creator: string;
                        name: string;
                        thread: string;
                        addr: string;
                    };
                    fromAmino: ({ creator, name, thread, addr }: {
                        creator: string;
                        name: string;
                        thread: string;
                        addr: string;
                    }) => _268.MsgDeleteThread;
                };
            };
            Whois: {
                encode(message: _269.Whois, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.Whois;
                fromPartial(object: {
                    index?: string;
                    name?: string;
                    value?: string;
                    price?: string;
                    ownerAddr?: string;
                }): _269.Whois;
            };
            MsgBuyName: {
                encode(message: _268.MsgBuyName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgBuyName;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    bidderAddr?: string;
                    bid?: string;
                }): _268.MsgBuyName;
            };
            MsgBuyNameResponse: {
                encode(_: _268.MsgBuyNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgBuyNameResponse;
                fromPartial(_: {}): _268.MsgBuyNameResponse;
            };
            MsgSellName: {
                encode(message: _268.MsgSellName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgSellName;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    sellerAddr?: string;
                    offer?: string;
                }): _268.MsgSellName;
            };
            MsgSellNameResponse: {
                encode(_: _268.MsgSellNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgSellNameResponse;
                fromPartial(_: {}): _268.MsgSellNameResponse;
            };
            MsgSetName: {
                encode(message: _268.MsgSetName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgSetName;
                fromPartial(object: {
                    creatorAddr?: string;
                    name?: string;
                    value?: string;
                }): _268.MsgSetName;
            };
            MsgDeleteName: {
                encode(message: _268.MsgDeleteName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgDeleteName;
                fromPartial(object: {
                    creatorAddr?: string;
                    name?: string;
                }): _268.MsgDeleteName;
            };
            MsgDeleteNameResponse: {
                encode(_: _268.MsgDeleteNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgDeleteNameResponse;
                fromPartial(_: {}): _268.MsgDeleteNameResponse;
            };
            MsgSetNameResponse: {
                encode(_: _268.MsgSetNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgSetNameResponse;
                fromPartial(_: {}): _268.MsgSetNameResponse;
            };
            MsgAddThread: {
                encode(message: _268.MsgAddThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgAddThread;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    thread?: string;
                    addr?: string;
                    offer?: string;
                }): _268.MsgAddThread;
            };
            MsgAddThreadResponse: {
                encode(_: _268.MsgAddThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgAddThreadResponse;
                fromPartial(_: {}): _268.MsgAddThreadResponse;
            };
            MsgDeleteThread: {
                encode(message: _268.MsgDeleteThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgDeleteThread;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    thread?: string;
                    addr?: string;
                }): _268.MsgDeleteThread;
            };
            MsgDeleteThreadResponse: {
                encode(_: _268.MsgDeleteThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgDeleteThreadResponse;
                fromPartial(_: {}): _268.MsgDeleteThreadResponse;
            };
            QueryParamsRequest: {
                encode(_: _267.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.QueryParamsRequest;
                fromPartial(_: {}): _267.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _267.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _267.QueryParamsResponse;
            };
            QueryGetWhoisRequest: {
                encode(message: _267.QueryGetWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.QueryGetWhoisRequest;
                fromPartial(object: {
                    index?: string;
                }): _267.QueryGetWhoisRequest;
            };
            QueryGetWhoisResponse: {
                encode(message: _267.QueryGetWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.QueryGetWhoisResponse;
                fromPartial(object: {
                    whois?: {
                        index?: string;
                        name?: string;
                        value?: string;
                        price?: string;
                        ownerAddr?: string;
                    };
                }): _267.QueryGetWhoisResponse;
            };
            QueryAllWhoisRequest: {
                encode(message: _267.QueryAllWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.QueryAllWhoisRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _267.QueryAllWhoisRequest;
            };
            QueryAllWhoisResponse: {
                encode(message: _267.QueryAllWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.QueryAllWhoisResponse;
                fromPartial(object: {
                    whois?: {
                        index?: string;
                        name?: string;
                        value?: string;
                        price?: string;
                        ownerAddr?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _267.QueryAllWhoisResponse;
            };
            Params: {
                encode(_: _266.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.Params;
                fromPartial(_: {}): _266.Params;
            };
            OnsPacketData: {
                encode(message: _265.OnsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.OnsPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _265.OnsPacketData;
            };
            NoData: {
                encode(_: _265.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.NoData;
                fromPartial(_: {}): _265.NoData;
            };
            GenesisState: {
                encode(message: _264.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.GenesisState;
                fromPartial(object: {
                    params?: {};
                    whoisList?: {
                        index?: string;
                        name?: string;
                        value?: string;
                        price?: string;
                        ownerAddr?: string;
                    }[];
                    portId?: string;
                }): _264.GenesisState;
            };
        };
    }
    namespace prices {
        const v1: {
            MsgClientImpl: typeof _510.MsgClientImpl;
            QueryClientImpl: typeof _495.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _276.QueryParamsRequest): Promise<_276.QueryParamsResponse>;
                bandPricesResult(request: _276.QueryBandPricesRequest): Promise<_276.QueryBandPricesResponse>;
                lastBandPricesId(request?: _276.QueryLastBandPricesIdRequest): Promise<_276.QueryLastBandPricesIdResponse>;
                queryRoundData(request: _276.QueryRoundDataRequest): Promise<_276.QueryRoundDataResponse>;
                latestRoundData(request: _276.QueryLatestRoundDataRequest): Promise<_276.QueryLatestRoundDataResponse>;
                queryAllModuleOwner(request?: _276.QueryModuleOwnerRequest): Promise<_276.QueryModuleOwnerResponse>;
                queryFeedByFeedId(request: _276.QueryFeedByIdRequest): Promise<_276.QueryFeedByIdResponse>;
                queryAccountInfo(request: _276.QueryAccountRequest): Promise<_276.QueryAccountResponse>;
                queryFeedRewardAvailStrategy(request?: _276.QueryFeedRewardAvailStrategiesRequest): Promise<_276.QueryFeedRewardAvailStrategiesResponse>;
            };
            LCDQueryClient: typeof _475.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    bandPricesData(value: _277.MsgBandPricesData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitFeedDataTx(value: _277.MsgFeedData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addModuleOwnerTx(value: _275.MsgModuleOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    moduleOwnershipTransferTx(value: _277.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addFeedTx(value: _277.MsgFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addDataProviderTx(value: _277.MsgAddDataProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeDataProviderTx(value: _277.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSubmissionCountTx(value: _277.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setHeartbeatTriggerTx(value: _277.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeviationThresholdTriggerTx(value: _277.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setFeedRewardTx(value: _277.MsgSetFeedReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestNewRoundTx(value: _277.MsgRequestNewRound): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    feedOwnershipTransferTx(value: _277.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAccountTx(value: _277.MsgAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editAccountTx(value: _277.MsgEditAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    bandPricesData(value: _277.MsgBandPricesData): {
                        typeUrl: string;
                        value: _277.MsgBandPricesData;
                    };
                    submitFeedDataTx(value: _277.MsgFeedData): {
                        typeUrl: string;
                        value: _277.MsgFeedData;
                    };
                    addModuleOwnerTx(value: _275.MsgModuleOwner): {
                        typeUrl: string;
                        value: _275.MsgModuleOwner;
                    };
                    moduleOwnershipTransferTx(value: _277.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: _277.MsgModuleOwnershipTransfer;
                    };
                    addFeedTx(value: _277.MsgFeed): {
                        typeUrl: string;
                        value: _277.MsgFeed;
                    };
                    addDataProviderTx(value: _277.MsgAddDataProvider): {
                        typeUrl: string;
                        value: _277.MsgAddDataProvider;
                    };
                    removeDataProviderTx(value: _277.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: _277.MsgRemoveDataProvider;
                    };
                    setSubmissionCountTx(value: _277.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: _277.MsgSetSubmissionCount;
                    };
                    setHeartbeatTriggerTx(value: _277.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: _277.MsgSetHeartbeatTrigger;
                    };
                    setDeviationThresholdTriggerTx(value: _277.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: _277.MsgSetDeviationThresholdTrigger;
                    };
                    setFeedRewardTx(value: _277.MsgSetFeedReward): {
                        typeUrl: string;
                        value: _277.MsgSetFeedReward;
                    };
                    requestNewRoundTx(value: _277.MsgRequestNewRound): {
                        typeUrl: string;
                        value: _277.MsgRequestNewRound;
                    };
                    feedOwnershipTransferTx(value: _277.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: _277.MsgFeedOwnershipTransfer;
                    };
                    addAccountTx(value: _277.MsgAccount): {
                        typeUrl: string;
                        value: _277.MsgAccount;
                    };
                    editAccountTx(value: _277.MsgEditAccount): {
                        typeUrl: string;
                        value: _277.MsgEditAccount;
                    };
                };
                fromPartial: {
                    bandPricesData(value: _277.MsgBandPricesData): {
                        typeUrl: string;
                        value: _277.MsgBandPricesData;
                    };
                    submitFeedDataTx(value: _277.MsgFeedData): {
                        typeUrl: string;
                        value: _277.MsgFeedData;
                    };
                    addModuleOwnerTx(value: _275.MsgModuleOwner): {
                        typeUrl: string;
                        value: _275.MsgModuleOwner;
                    };
                    moduleOwnershipTransferTx(value: _277.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: _277.MsgModuleOwnershipTransfer;
                    };
                    addFeedTx(value: _277.MsgFeed): {
                        typeUrl: string;
                        value: _277.MsgFeed;
                    };
                    addDataProviderTx(value: _277.MsgAddDataProvider): {
                        typeUrl: string;
                        value: _277.MsgAddDataProvider;
                    };
                    removeDataProviderTx(value: _277.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: _277.MsgRemoveDataProvider;
                    };
                    setSubmissionCountTx(value: _277.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: _277.MsgSetSubmissionCount;
                    };
                    setHeartbeatTriggerTx(value: _277.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: _277.MsgSetHeartbeatTrigger;
                    };
                    setDeviationThresholdTriggerTx(value: _277.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: _277.MsgSetDeviationThresholdTrigger;
                    };
                    setFeedRewardTx(value: _277.MsgSetFeedReward): {
                        typeUrl: string;
                        value: _277.MsgSetFeedReward;
                    };
                    requestNewRoundTx(value: _277.MsgRequestNewRound): {
                        typeUrl: string;
                        value: _277.MsgRequestNewRound;
                    };
                    feedOwnershipTransferTx(value: _277.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: _277.MsgFeedOwnershipTransfer;
                    };
                    addAccountTx(value: _277.MsgAccount): {
                        typeUrl: string;
                        value: _277.MsgAccount;
                    };
                    editAccountTx(value: _277.MsgEditAccount): {
                        typeUrl: string;
                        value: _277.MsgEditAccount;
                    };
                };
            };
            AminoConverter: {
                "/ollo.prices.v1.MsgBandPricesData": {
                    aminoType: string;
                    toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: _277.MsgBandPricesData) => {
                        creator: string;
                        oracle_script_id: string;
                        source_channel: string;
                        calldata: {
                            symbols: string[];
                            multiplier: string;
                        };
                        ask_count: string;
                        min_count: string;
                        fee_limit: {
                            denom: string;
                            amount: string;
                        }[];
                        prepare_gas: string;
                        execute_gas: string;
                        client_id: string;
                    };
                    fromAmino: ({ creator, oracle_script_id, source_channel, calldata, ask_count, min_count, fee_limit, prepare_gas, execute_gas, client_id }: {
                        creator: string;
                        oracle_script_id: string;
                        source_channel: string;
                        calldata: {
                            symbols: string[];
                            multiplier: string;
                        };
                        ask_count: string;
                        min_count: string;
                        fee_limit: {
                            denom: string;
                            amount: string;
                        }[];
                        prepare_gas: string;
                        execute_gas: string;
                        client_id: string;
                    }) => _277.MsgBandPricesData;
                };
                "/ollo.prices.v1.MsgFeedData": {
                    aminoType: string;
                    toAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: _277.MsgFeedData) => {
                        feedId: string;
                        submitter: Uint8Array;
                        observationFeedData: Uint8Array[];
                        observationFeedDataSignatures: Uint8Array[];
                        isFeedDataValid: boolean;
                        cosmosPubKeys: Uint8Array[];
                        txFee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: {
                        feedId: string;
                        submitter: Uint8Array;
                        observationFeedData: Uint8Array[];
                        observationFeedDataSignatures: Uint8Array[];
                        isFeedDataValid: boolean;
                        cosmosPubKeys: Uint8Array[];
                        txFee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _277.MsgFeedData;
                };
                "/ollo.prices.v1.MsgModuleOwner": {
                    aminoType: string;
                    toAmino: ({ address, pubKey, assignerAddress }: _275.MsgModuleOwner) => {
                        address: Uint8Array;
                        pubKey: Uint8Array;
                        assignerAddress: Uint8Array;
                    };
                    fromAmino: ({ address, pubKey, assignerAddress }: {
                        address: Uint8Array;
                        pubKey: Uint8Array;
                        assignerAddress: Uint8Array;
                    }) => _275.MsgModuleOwner;
                };
                "/ollo.prices.v1.MsgModuleOwnershipTransfer": {
                    aminoType: string;
                    toAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: _277.MsgModuleOwnershipTransfer) => {
                        assignerAddress: Uint8Array;
                        newModuleOwnerAddress: Uint8Array;
                        newModuleOwnerPubKey: Uint8Array;
                    };
                    fromAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: {
                        assignerAddress: Uint8Array;
                        newModuleOwnerAddress: Uint8Array;
                        newModuleOwnerPubKey: Uint8Array;
                    }) => _277.MsgModuleOwnershipTransfer;
                };
                "/ollo.prices.v1.MsgFeed": {
                    aminoType: string;
                    toAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: _277.MsgFeed) => {
                        feedId: string;
                        feedOwner: Uint8Array;
                        dataProviders: {
                            address: Uint8Array;
                            pubKey: Uint8Array;
                        }[];
                        submissionCount: number;
                        heartbeatTrigger: number;
                        deviationThresholdTrigger: number;
                        moduleOwnerAddress: Uint8Array;
                        feedReward: {
                            amount: string;
                            strategy: string;
                        };
                        desc: string;
                    };
                    fromAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: {
                        feedId: string;
                        feedOwner: Uint8Array;
                        dataProviders: {
                            address: Uint8Array;
                            pubKey: Uint8Array;
                        }[];
                        submissionCount: number;
                        heartbeatTrigger: number;
                        deviationThresholdTrigger: number;
                        moduleOwnerAddress: Uint8Array;
                        feedReward: {
                            amount: string;
                            strategy: string;
                        };
                        desc: string;
                    }) => _277.MsgFeed;
                };
                "/ollo.prices.v1.MsgAddDataProvider": {
                    aminoType: string;
                    toAmino: ({ feedId, dataProvider, signer }: _277.MsgAddDataProvider) => {
                        feedId: string;
                        dataProvider: {
                            address: Uint8Array;
                            pubKey: Uint8Array;
                        };
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, dataProvider, signer }: {
                        feedId: string;
                        dataProvider: {
                            address: Uint8Array;
                            pubKey: Uint8Array;
                        };
                        signer: Uint8Array;
                    }) => _277.MsgAddDataProvider;
                };
                "/ollo.prices.v1.MsgRemoveDataProvider": {
                    aminoType: string;
                    toAmino: ({ feedId, address, signer }: _277.MsgRemoveDataProvider) => {
                        feedId: string;
                        address: Uint8Array;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, address, signer }: {
                        feedId: string;
                        address: Uint8Array;
                        signer: Uint8Array;
                    }) => _277.MsgRemoveDataProvider;
                };
                "/ollo.prices.v1.MsgSetSubmissionCount": {
                    aminoType: string;
                    toAmino: ({ feedId, submissionCount, signer }: _277.MsgSetSubmissionCount) => {
                        feedId: string;
                        submissionCount: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, submissionCount, signer }: {
                        feedId: string;
                        submissionCount: number;
                        signer: Uint8Array;
                    }) => _277.MsgSetSubmissionCount;
                };
                "/ollo.prices.v1.MsgSetHeartbeatTrigger": {
                    aminoType: string;
                    toAmino: ({ feedId, heartbeatTrigger, signer }: _277.MsgSetHeartbeatTrigger) => {
                        feedId: string;
                        heartbeatTrigger: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, heartbeatTrigger, signer }: {
                        feedId: string;
                        heartbeatTrigger: number;
                        signer: Uint8Array;
                    }) => _277.MsgSetHeartbeatTrigger;
                };
                "/ollo.prices.v1.MsgSetDeviationThresholdTrigger": {
                    aminoType: string;
                    toAmino: ({ feedId, deviationThresholdTrigger, signer }: _277.MsgSetDeviationThresholdTrigger) => {
                        feedId: string;
                        deviationThresholdTrigger: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, deviationThresholdTrigger, signer }: {
                        feedId: string;
                        deviationThresholdTrigger: number;
                        signer: Uint8Array;
                    }) => _277.MsgSetDeviationThresholdTrigger;
                };
                "/ollo.prices.v1.MsgSetFeedReward": {
                    aminoType: string;
                    toAmino: ({ feedId, feedReward, signer }: _277.MsgSetFeedReward) => {
                        feedId: string;
                        feedReward: {
                            amount: string;
                            strategy: string;
                        };
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, feedReward, signer }: {
                        feedId: string;
                        feedReward: {
                            amount: string;
                            strategy: string;
                        };
                        signer: Uint8Array;
                    }) => _277.MsgSetFeedReward;
                };
                "/ollo.prices.v1.MsgRequestNewRound": {
                    aminoType: string;
                    toAmino: ({ feedId, signer }: _277.MsgRequestNewRound) => {
                        feedId: string;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, signer }: {
                        feedId: string;
                        signer: Uint8Array;
                    }) => _277.MsgRequestNewRound;
                };
                "/ollo.prices.v1.MsgFeedOwnershipTransfer": {
                    aminoType: string;
                    toAmino: ({ feedId, newFeedOwnerAddress, signer }: _277.MsgFeedOwnershipTransfer) => {
                        feedId: string;
                        newFeedOwnerAddress: Uint8Array;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, newFeedOwnerAddress, signer }: {
                        feedId: string;
                        newFeedOwnerAddress: Uint8Array;
                        signer: Uint8Array;
                    }) => _277.MsgFeedOwnershipTransfer;
                };
                "/ollo.prices.v1.MsgAccount": {
                    aminoType: string;
                    toAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: _277.MsgAccount) => {
                        submitter: Uint8Array;
                        chainlinkPublicKey: Uint8Array;
                        chainlinkSigningKey: Uint8Array;
                        piggyAddress: Uint8Array;
                    };
                    fromAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: {
                        submitter: Uint8Array;
                        chainlinkPublicKey: Uint8Array;
                        chainlinkSigningKey: Uint8Array;
                        piggyAddress: Uint8Array;
                    }) => _277.MsgAccount;
                };
                "/ollo.prices.v1.MsgEditAccount": {
                    aminoType: string;
                    toAmino: ({ submitter, piggyAddress }: _277.MsgEditAccount) => {
                        submitter: Uint8Array;
                        piggyAddress: Uint8Array;
                    };
                    fromAmino: ({ submitter, piggyAddress }: {
                        submitter: Uint8Array;
                        piggyAddress: Uint8Array;
                    }) => _277.MsgEditAccount;
                };
            };
            MsgBandPricesData: {
                encode(message: _277.MsgBandPricesData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgBandPricesData;
                fromPartial(object: {
                    creator?: string;
                    oracleScriptId?: string | number | import("long");
                    sourceChannel?: string;
                    calldata?: {
                        symbols?: string[];
                        multiplier?: string | number | import("long");
                    };
                    askCount?: string | number | import("long");
                    minCount?: string | number | import("long");
                    feeLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    prepareGas?: string | number | import("long");
                    executeGas?: string | number | import("long");
                    clientId?: string;
                }): _277.MsgBandPricesData;
            };
            MsgBandPricesDataResponse: {
                encode(_: _277.MsgBandPricesDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgBandPricesDataResponse;
                fromPartial(_: {}): _277.MsgBandPricesDataResponse;
            };
            MsgModuleOwnershipTransfer: {
                encode(message: _277.MsgModuleOwnershipTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgModuleOwnershipTransfer;
                fromPartial(object: {
                    assignerAddress?: Uint8Array;
                    newModuleOwnerAddress?: Uint8Array;
                    newModuleOwnerPubKey?: Uint8Array;
                }): _277.MsgModuleOwnershipTransfer;
            };
            MsgFeed: {
                encode(message: _277.MsgFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgFeed;
                fromPartial(object: {
                    feedId?: string;
                    feedOwner?: Uint8Array;
                    dataProviders?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                    }[];
                    submissionCount?: number;
                    heartbeatTrigger?: number;
                    deviationThresholdTrigger?: number;
                    moduleOwnerAddress?: Uint8Array;
                    feedReward?: {
                        amount?: string | number | import("long");
                        strategy?: string;
                    };
                    desc?: string;
                }): _277.MsgFeed;
            };
            MsgAddDataProvider: {
                encode(message: _277.MsgAddDataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgAddDataProvider;
                fromPartial(object: {
                    feedId?: string;
                    dataProvider?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                    };
                    signer?: Uint8Array;
                }): _277.MsgAddDataProvider;
            };
            MsgRemoveDataProvider: {
                encode(message: _277.MsgRemoveDataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgRemoveDataProvider;
                fromPartial(object: {
                    feedId?: string;
                    address?: Uint8Array;
                    signer?: Uint8Array;
                }): _277.MsgRemoveDataProvider;
            };
            MsgSetSubmissionCount: {
                encode(message: _277.MsgSetSubmissionCount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgSetSubmissionCount;
                fromPartial(object: {
                    feedId?: string;
                    submissionCount?: number;
                    signer?: Uint8Array;
                }): _277.MsgSetSubmissionCount;
            };
            MsgSetHeartbeatTrigger: {
                encode(message: _277.MsgSetHeartbeatTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgSetHeartbeatTrigger;
                fromPartial(object: {
                    feedId?: string;
                    heartbeatTrigger?: number;
                    signer?: Uint8Array;
                }): _277.MsgSetHeartbeatTrigger;
            };
            MsgSetDeviationThresholdTrigger: {
                encode(message: _277.MsgSetDeviationThresholdTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgSetDeviationThresholdTrigger;
                fromPartial(object: {
                    feedId?: string;
                    deviationThresholdTrigger?: number;
                    signer?: Uint8Array;
                }): _277.MsgSetDeviationThresholdTrigger;
            };
            MsgSetFeedReward: {
                encode(message: _277.MsgSetFeedReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgSetFeedReward;
                fromPartial(object: {
                    feedId?: string;
                    feedReward?: {
                        amount?: string | number | import("long");
                        strategy?: string;
                    };
                    signer?: Uint8Array;
                }): _277.MsgSetFeedReward;
            };
            MsgFeedOwnershipTransfer: {
                encode(message: _277.MsgFeedOwnershipTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgFeedOwnershipTransfer;
                fromPartial(object: {
                    feedId?: string;
                    newFeedOwnerAddress?: Uint8Array;
                    signer?: Uint8Array;
                }): _277.MsgFeedOwnershipTransfer;
            };
            MsgFeedData: {
                encode(message: _277.MsgFeedData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgFeedData;
                fromPartial(object: {
                    feedId?: string;
                    submitter?: Uint8Array;
                    observationFeedData?: Uint8Array[];
                    observationFeedDataSignatures?: Uint8Array[];
                    isFeedDataValid?: boolean;
                    cosmosPubKeys?: Uint8Array[];
                    txFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _277.MsgFeedData;
            };
            MsgRequestNewRound: {
                encode(message: _277.MsgRequestNewRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgRequestNewRound;
                fromPartial(object: {
                    feedId?: string;
                    signer?: Uint8Array;
                }): _277.MsgRequestNewRound;
            };
            MsgAccount: {
                encode(message: _277.MsgAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgAccount;
                fromPartial(object: {
                    submitter?: Uint8Array;
                    chainlinkPublicKey?: Uint8Array;
                    chainlinkSigningKey?: Uint8Array;
                    piggyAddress?: Uint8Array;
                }): _277.MsgAccount;
            };
            MsgEditAccount: {
                encode(message: _277.MsgEditAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgEditAccount;
                fromPartial(object: {
                    submitter?: Uint8Array;
                    piggyAddress?: Uint8Array;
                }): _277.MsgEditAccount;
            };
            MsgResponse: {
                encode(message: _277.MsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgResponse;
                fromPartial(object: {
                    height?: string | number | import("long");
                    txHash?: string;
                }): _277.MsgResponse;
            };
            OCRFeedDataInStore: {
                encode(message: _277.OCRFeedDataInStore, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.OCRFeedDataInStore;
                fromPartial(object: {
                    feedData?: {
                        feedId?: string;
                        submitter?: Uint8Array;
                        observationFeedData?: Uint8Array[];
                        observationFeedDataSignatures?: Uint8Array[];
                        isFeedDataValid?: boolean;
                        cosmosPubKeys?: Uint8Array[];
                        txFee?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    deserializedOCRReport?: {
                        Context?: Uint8Array;
                        Oracles?: Uint8Array;
                        Observations?: {
                            data?: Uint8Array;
                        }[];
                    };
                    RoundId?: string | number | import("long");
                }): _277.OCRFeedDataInStore;
            };
            QueryParamsRequest: {
                encode(_: _276.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryParamsRequest;
                fromPartial(_: {}): _276.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _276.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _276.QueryParamsResponse;
            };
            QueryBandPricesRequest: {
                encode(message: _276.QueryBandPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryBandPricesRequest;
                fromPartial(object: {
                    requestId?: string | number | import("long");
                }): _276.QueryBandPricesRequest;
            };
            QueryBandPricesResponse: {
                encode(message: _276.QueryBandPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryBandPricesResponse;
                fromPartial(object: {
                    result?: {
                        rates?: (string | number | import("long"))[];
                    };
                }): _276.QueryBandPricesResponse;
            };
            QueryLastBandPricesIdRequest: {
                encode(_: _276.QueryLastBandPricesIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryLastBandPricesIdRequest;
                fromPartial(_: {}): _276.QueryLastBandPricesIdRequest;
            };
            QueryLastBandPricesIdResponse: {
                encode(message: _276.QueryLastBandPricesIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryLastBandPricesIdResponse;
                fromPartial(object: {
                    requestId?: string | number | import("long");
                }): _276.QueryLastBandPricesIdResponse;
            };
            QueryFeedByIdRequest: {
                encode(message: _276.QueryFeedByIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryFeedByIdRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _276.QueryFeedByIdRequest;
            };
            QueryFeedByIdResponse: {
                encode(message: _276.QueryFeedByIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryFeedByIdResponse;
                fromPartial(object: {
                    feed?: {
                        feedId?: string;
                        feedOwner?: Uint8Array;
                        dataProviders?: {
                            address?: Uint8Array;
                            pubKey?: Uint8Array;
                        }[];
                        submissionCount?: number;
                        heartbeatTrigger?: number;
                        deviationThresholdTrigger?: number;
                        moduleOwnerAddress?: Uint8Array;
                        feedReward?: {
                            amount?: string | number | import("long");
                            strategy?: string;
                        };
                        desc?: string;
                    };
                }): _276.QueryFeedByIdResponse;
            };
            QueryModuleOwnerRequest: {
                encode(_: _276.QueryModuleOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryModuleOwnerRequest;
                fromPartial(_: {}): _276.QueryModuleOwnerRequest;
            };
            QueryModuleOwnerResponse: {
                encode(message: _276.QueryModuleOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryModuleOwnerResponse;
                fromPartial(object: {
                    moduleOwner?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                        assignerAddress?: Uint8Array;
                    }[];
                }): _276.QueryModuleOwnerResponse;
            };
            QueryRoundDataRequest: {
                encode(message: _276.QueryRoundDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryRoundDataRequest;
                fromPartial(object: {
                    feedId?: string;
                    roundId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _276.QueryRoundDataRequest;
            };
            QueryRoundDataResponse: {
                encode(message: _276.QueryRoundDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryRoundDataResponse;
                fromPartial(object: {
                    roundData?: {
                        feedId?: string;
                        feedData?: {
                            Context?: Uint8Array;
                            Oracles?: Uint8Array;
                            Observations?: {
                                data?: Uint8Array;
                            }[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _276.QueryRoundDataResponse;
            };
            QueryLatestRoundDataRequest: {
                encode(message: _276.QueryLatestRoundDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryLatestRoundDataRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _276.QueryLatestRoundDataRequest;
            };
            QueryLatestRoundDataResponse: {
                encode(message: _276.QueryLatestRoundDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryLatestRoundDataResponse;
                fromPartial(object: {
                    roundData?: {
                        feedId?: string;
                        feedData?: {
                            Context?: Uint8Array;
                            Oracles?: Uint8Array;
                            Observations?: {
                                data?: Uint8Array;
                            }[];
                        };
                    }[];
                }): _276.QueryLatestRoundDataResponse;
            };
            RoundData: {
                encode(message: _276.RoundData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.RoundData;
                fromPartial(object: {
                    feedId?: string;
                    feedData?: {
                        Context?: Uint8Array;
                        Oracles?: Uint8Array;
                        Observations?: {
                            data?: Uint8Array;
                        }[];
                    };
                }): _276.RoundData;
            };
            QueryAccountRequest: {
                encode(message: _276.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryAccountRequest;
                fromPartial(object: {
                    accountAddress?: Uint8Array;
                }): _276.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _276.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        submitter?: Uint8Array;
                        chainlinkPublicKey?: Uint8Array;
                        chainlinkSigningKey?: Uint8Array;
                        piggyAddress?: Uint8Array;
                    };
                }): _276.QueryAccountResponse;
            };
            QueryFeedRewardAvailStrategiesRequest: {
                encode(_: _276.QueryFeedRewardAvailStrategiesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryFeedRewardAvailStrategiesRequest;
                fromPartial(_: {}): _276.QueryFeedRewardAvailStrategiesRequest;
            };
            QueryFeedRewardAvailStrategiesResponse: {
                encode(message: _276.QueryFeedRewardAvailStrategiesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryFeedRewardAvailStrategiesResponse;
                fromPartial(object: {
                    availStrategies?: string[];
                }): _276.QueryFeedRewardAvailStrategiesResponse;
            };
            DataProvider: {
                encode(message: _275.DataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.DataProvider;
                fromPartial(object: {
                    address?: Uint8Array;
                    pubKey?: Uint8Array;
                }): _275.DataProvider;
            };
            MsgModuleOwner: {
                encode(message: _275.MsgModuleOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.MsgModuleOwner;
                fromPartial(object: {
                    address?: Uint8Array;
                    pubKey?: Uint8Array;
                    assignerAddress?: Uint8Array;
                }): _275.MsgModuleOwner;
            };
            OCRAbiEncoded: {
                encode(message: _275.OCRAbiEncoded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.OCRAbiEncoded;
                fromPartial(object: {
                    Context?: Uint8Array;
                    Oracles?: Uint8Array;
                    Observations?: {
                        data?: Uint8Array;
                    }[];
                }): _275.OCRAbiEncoded;
            };
            Observation: {
                encode(message: _275.Observation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.Observation;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _275.Observation;
            };
            FeedRewardSchema: {
                encode(message: _275.FeedRewardSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.FeedRewardSchema;
                fromPartial(object: {
                    amount?: string | number | import("long");
                    strategy?: string;
                }): _275.FeedRewardSchema;
            };
            Params: {
                encode(_: _274.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.Params;
                fromPartial(_: {}): _274.Params;
            };
            PricesPacketData: {
                encode(message: _273.PricesPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.PricesPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _273.PricesPacketData;
            };
            NoData: {
                encode(_: _273.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.NoData;
                fromPartial(_: {}): _273.NoData;
            };
            GenesisState: {
                encode(message: _272.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.GenesisState;
                fromPartial(object: {
                    params?: {};
                    portId?: string;
                    moduleOwners?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                        assignerAddress?: Uint8Array;
                    }[];
                }): _272.GenesisState;
            };
            MsgNewFeedEvent: {
                encode(message: _271.MsgNewFeedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgNewFeedEvent;
                fromPartial(object: {
                    feedId?: string;
                    dataProviders?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                    }[];
                    feedOwner?: Uint8Array;
                }): _271.MsgNewFeedEvent;
            };
            MsgNewRoundDataEvent: {
                encode(message: _271.MsgNewRoundDataEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgNewRoundDataEvent;
                fromPartial(object: {
                    feedId?: string;
                    roundId?: string | number | import("long");
                    feedData?: Uint8Array[];
                }): _271.MsgNewRoundDataEvent;
            };
            MsgNewRoundRequestEvent: {
                encode(message: _271.MsgNewRoundRequestEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgNewRoundRequestEvent;
                fromPartial(object: {
                    feedId?: string;
                }): _271.MsgNewRoundRequestEvent;
            };
            MsgOraclePaidEvent: {
                encode(message: _271.MsgOraclePaidEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgOraclePaidEvent;
                fromPartial(object: {
                    feedId?: string;
                    account?: Uint8Array;
                    value?: string | number | import("long");
                }): _271.MsgOraclePaidEvent;
            };
            MsgDataProviderSetChangeEvent: {
                encode(message: _271.MsgDataProviderSetChangeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgDataProviderSetChangeEvent;
                fromPartial(object: {
                    feedId?: string;
                    changeType?: string;
                    dataProviderAddr?: Uint8Array;
                    signer?: Uint8Array;
                }): _271.MsgDataProviderSetChangeEvent;
            };
            MsgFeedParameterChangeEvent: {
                encode(message: _271.MsgFeedParameterChangeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgFeedParameterChangeEvent;
                fromPartial(object: {
                    feedId?: string;
                    changeType?: string;
                    newParameterValue?: number;
                    signer?: Uint8Array;
                }): _271.MsgFeedParameterChangeEvent;
            };
            MsgModuleOwnershipTransferEvent: {
                encode(message: _271.MsgModuleOwnershipTransferEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgModuleOwnershipTransferEvent;
                fromPartial(object: {
                    newModuleOwnerAddr?: Uint8Array;
                    signer?: Uint8Array;
                }): _271.MsgModuleOwnershipTransferEvent;
            };
            MsgFeedOwnershipTransferEvent: {
                encode(message: _271.MsgFeedOwnershipTransferEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgFeedOwnershipTransferEvent;
                fromPartial(object: {
                    feedId?: string;
                    newFeedOwnerAddr?: Uint8Array;
                    signer?: Uint8Array;
                }): _271.MsgFeedOwnershipTransferEvent;
            };
            MsgFeedDataValidationFailedEvent: {
                encode(message: _271.MsgFeedDataValidationFailedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgFeedDataValidationFailedEvent;
                fromPartial(object: {
                    feedId?: string;
                    feedOwner?: Uint8Array;
                    dataProviders?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                    }[];
                    submitter?: Uint8Array;
                    feedData?: Uint8Array[];
                    signatures?: Uint8Array[];
                }): _271.MsgFeedDataValidationFailedEvent;
            };
            MsgFeedRewardSchemaChangeEvent: {
                encode(message: _271.MsgFeedRewardSchemaChangeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.MsgFeedRewardSchemaChangeEvent;
                fromPartial(object: {
                    feedId?: string;
                    newStrategy?: string;
                    newBaseAmount?: string | number | import("long");
                    signer?: Uint8Array;
                }): _271.MsgFeedRewardSchemaChangeEvent;
            };
            BandPricesCallData: {
                encode(message: _270.BandPricesCallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.BandPricesCallData;
                fromPartial(object: {
                    symbols?: string[];
                    multiplier?: string | number | import("long");
                }): _270.BandPricesCallData;
            };
            BandPricesResult: {
                encode(message: _270.BandPricesResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.BandPricesResult;
                fromPartial(object: {
                    rates?: (string | number | import("long"))[];
                }): _270.BandPricesResult;
            };
        };
    }
    namespace ratelimit {
        const v1: {
            QueryClientImpl: typeof _496.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _281.QueryParamsRequest): Promise<_281.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _476.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _281.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryParamsRequest;
                fromPartial(_: {}): _281.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _281.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        contractAddress?: string;
                    };
                }): _281.QueryParamsResponse;
            };
            Params: {
                encode(message: _280.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.Params;
                fromPartial(object: {
                    contractAddress?: string;
                }): _280.Params;
            };
            GenesisState: {
                encode(message: _279.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.GenesisState;
                fromPartial(object: {
                    params?: {
                        contractAddress?: string;
                    };
                }): _279.GenesisState;
            };
            EventRevert: {
                encode(message: _278.EventRevert, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.EventRevert;
                fromPartial(object: {
                    id?: string;
                }): _278.EventRevert;
            };
        };
    }
    namespace reserve {
        const v1: {
            MsgClientImpl: typeof _511.MsgClientImpl;
            QueryClientImpl: typeof _497.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _286.QueryParamsRequest): Promise<_286.QueryParamsResponse>;
                getDenoms(request?: _286.QueryGetDenomsRequest): Promise<_286.QueryGetDenomsResponse>;
                getDenom(request: _286.QueryGetDenomRequest): Promise<_286.QueryGetDenomResponse>;
                getDenomWhitelist(request: _286.QueryGetDenomWhitelistRequest): Promise<_286.QueryGetDenomWhitelistResponse>;
                denomsFromCreator(request: _286.QueryDenomsFromCreatorRequest): Promise<_286.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _477.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _288.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintDenom(value: _288.MsgMintDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnDenom(value: _288.MsgBurnDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeDenomAdmin(value: _288.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _288.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _288.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _288.MsgCreateDenom): {
                        typeUrl: string;
                        value: _288.MsgCreateDenom;
                    };
                    mintDenom(value: _288.MsgMintDenom): {
                        typeUrl: string;
                        value: _288.MsgMintDenom;
                    };
                    burnDenom(value: _288.MsgBurnDenom): {
                        typeUrl: string;
                        value: _288.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _288.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _288.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _288.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _288.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _288.MsgForceTransfer): {
                        typeUrl: string;
                        value: _288.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _288.MsgCreateDenom): {
                        typeUrl: string;
                        value: _288.MsgCreateDenom;
                    };
                    mintDenom(value: _288.MsgMintDenom): {
                        typeUrl: string;
                        value: _288.MsgMintDenom;
                    };
                    burnDenom(value: _288.MsgBurnDenom): {
                        typeUrl: string;
                        value: _288.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _288.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _288.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _288.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _288.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _288.MsgForceTransfer): {
                        typeUrl: string;
                        value: _288.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/ollo.reserve.v1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _288.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _288.MsgCreateDenom;
                };
                "/ollo.reserve.v1.MsgMintDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _288.MsgMintDenom) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _288.MsgMintDenom;
                };
                "/ollo.reserve.v1.MsgBurnDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _288.MsgBurnDenom) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _288.MsgBurnDenom;
                };
                "/ollo.reserve.v1.MsgChangeDenomAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _288.MsgChangeDenomAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _288.MsgChangeDenomAdmin;
                };
                "/ollo.reserve.v1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _288.MsgSetDenomMetadata) => {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    };
                    fromAmino: ({ sender, metadata }: {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    }) => _288.MsgSetDenomMetadata;
                };
                "/ollo.reserve.v1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: _288.MsgForceTransfer) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        transferFromAddress: string;
                        transferToAddress: string;
                    };
                    fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        transferFromAddress: string;
                        transferToAddress: string;
                    }) => _288.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                encode(message: _288.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _288.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _288.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _288.MsgCreateDenomResponse;
            };
            MsgMintDenom: {
                encode(message: _288.MsgMintDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgMintDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _288.MsgMintDenom;
            };
            MsgMintDenomResponse: {
                encode(_: _288.MsgMintDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgMintDenomResponse;
                fromPartial(_: {}): _288.MsgMintDenomResponse;
            };
            MsgBurnDenom: {
                encode(message: _288.MsgBurnDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgBurnDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _288.MsgBurnDenom;
            };
            MsgBurnDenomResponse: {
                encode(_: _288.MsgBurnDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgBurnDenomResponse;
                fromPartial(_: {}): _288.MsgBurnDenomResponse;
            };
            MsgChangeDenomAdmin: {
                encode(message: _288.MsgChangeDenomAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgChangeDenomAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _288.MsgChangeDenomAdmin;
            };
            MsgChangeDenomAdminResponse: {
                encode(_: _288.MsgChangeDenomAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgChangeDenomAdminResponse;
                fromPartial(_: {}): _288.MsgChangeDenomAdminResponse;
            };
            MsgForceTransfer: {
                encode(message: _288.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgForceTransfer;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    transferFromAddress?: string;
                    transferToAddress?: string;
                }): _288.MsgForceTransfer;
            };
            MsgForceTransferResponse: {
                encode(_: _288.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgForceTransferResponse;
                fromPartial(_: {}): _288.MsgForceTransferResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _288.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgSetDenomMetadata;
                fromPartial(object: {
                    sender?: string;
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _288.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _288.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgSetDenomMetadataResponse;
                fromPartial(_: {}): _288.MsgSetDenomMetadataResponse;
            };
            DenomWhitelist: {
                encode(message: _287.DenomWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.DenomWhitelist;
                fromPartial(object: {
                    denom?: string;
                    addresses?: string[];
                }): _287.DenomWhitelist;
            };
            QueryParamsRequest: {
                encode(_: _286.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryParamsRequest;
                fromPartial(_: {}): _286.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _286.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _286.QueryParamsResponse;
            };
            QueryGetDenomWhitelistRequest: {
                encode(message: _286.QueryGetDenomWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryGetDenomWhitelistRequest;
                fromPartial(object: {
                    denom?: string;
                }): _286.QueryGetDenomWhitelistRequest;
            };
            QueryGetDenomWhitelistResponse: {
                encode(message: _286.QueryGetDenomWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryGetDenomWhitelistResponse;
                fromPartial(object: {
                    whitelist?: {
                        denom?: string;
                        addresses?: string[];
                    };
                }): _286.QueryGetDenomWhitelistResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _286.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _286.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _286.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _286.QueryDenomsFromCreatorResponse;
            };
            QueryGetDenomsRequest: {
                encode(_: _286.QueryGetDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryGetDenomsRequest;
                fromPartial(_: {}): _286.QueryGetDenomsRequest;
            };
            QueryGetDenomsResponse: {
                encode(message: _286.QueryGetDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryGetDenomsResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _286.QueryGetDenomsResponse;
            };
            QueryGetDenomRequest: {
                encode(message: _286.QueryGetDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryGetDenomRequest;
                fromPartial(object: {
                    denom?: string;
                }): _286.QueryGetDenomRequest;
            };
            QueryGetDenomResponse: {
                encode(_: _286.QueryGetDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.QueryGetDenomResponse;
                fromPartial(_: {}): _286.QueryGetDenomResponse;
            };
            Params: {
                encode(message: _285.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _285.Params;
            };
            DenomUnit: {
                encode(message: _284.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _284.DenomUnit;
            };
            DenomMetadata: {
                encode(message: _284.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.DenomMetadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _284.DenomMetadata;
            };
            GenesisState: {
                encode(message: _283.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.GenesisState;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    factoryDenoms?: {
                        denom?: string;
                        addresses?: string[];
                    }[];
                }): _283.GenesisState;
            };
            EventDenomBurned: {
                encode(message: _282.EventDenomBurned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.EventDenomBurned;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _282.EventDenomBurned;
            };
            EventDenomMinted: {
                encode(message: _282.EventDenomMinted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.EventDenomMinted;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _282.EventDenomMinted;
            };
        };
    }
    namespace token {
        const v1: {
            MsgClientImpl: typeof _512.MsgClientImpl;
            QueryClientImpl: typeof _498.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                token(request: _291.QueryTokenRequest): Promise<_291.QueryTokenResponse>;
                tokens(request: _291.QueryTokensRequest): Promise<_291.QueryTokensResponse>;
                fees(request: _291.QueryFeesRequest): Promise<_291.QueryFeesResponse>;
                params(request?: _291.QueryParamsRequest): Promise<_291.QueryParamsResponse>;
                burn(request?: _291.QueryBurnRequest): Promise<_291.QueryBurnResponse>;
            };
            LCDQueryClient: typeof _478.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueToken(value: _293.MsgIssueToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editToken(value: _293.MsgEditToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintToken(value: _293.MsgMintToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnToken(value: _293.MsgBurnToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenOwner(value: _293.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueToken(value: _293.MsgIssueToken): {
                        typeUrl: string;
                        value: _293.MsgIssueToken;
                    };
                    editToken(value: _293.MsgEditToken): {
                        typeUrl: string;
                        value: _293.MsgEditToken;
                    };
                    mintToken(value: _293.MsgMintToken): {
                        typeUrl: string;
                        value: _293.MsgMintToken;
                    };
                    burnToken(value: _293.MsgBurnToken): {
                        typeUrl: string;
                        value: _293.MsgBurnToken;
                    };
                    transferTokenOwner(value: _293.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _293.MsgTransferTokenOwner;
                    };
                };
                fromPartial: {
                    issueToken(value: _293.MsgIssueToken): {
                        typeUrl: string;
                        value: _293.MsgIssueToken;
                    };
                    editToken(value: _293.MsgEditToken): {
                        typeUrl: string;
                        value: _293.MsgEditToken;
                    };
                    mintToken(value: _293.MsgMintToken): {
                        typeUrl: string;
                        value: _293.MsgMintToken;
                    };
                    burnToken(value: _293.MsgBurnToken): {
                        typeUrl: string;
                        value: _293.MsgBurnToken;
                    };
                    transferTokenOwner(value: _293.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _293.MsgTransferTokenOwner;
                    };
                };
            };
            AminoConverter: {
                "/ollo.token.v1.MsgIssueToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, scale, minUnit, initialSupply, maxSupply, mintable, owner }: _293.MsgIssueToken) => {
                        symbol: string;
                        name: string;
                        scale: number;
                        min_unit: string;
                        initial_supply: string;
                        max_supply: string;
                        mintable: boolean;
                        owner: string;
                    };
                    fromAmino: ({ symbol, name, scale, min_unit, initial_supply, max_supply, mintable, owner }: {
                        symbol: string;
                        name: string;
                        scale: number;
                        min_unit: string;
                        initial_supply: string;
                        max_supply: string;
                        mintable: boolean;
                        owner: string;
                    }) => _293.MsgIssueToken;
                };
                "/ollo.token.v1.MsgEditToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, maxSupply, mintable, owner }: _293.MsgEditToken) => {
                        symbol: string;
                        name: string;
                        max_supply: string;
                        mintable: string;
                        owner: string;
                    };
                    fromAmino: ({ symbol, name, max_supply, mintable, owner }: {
                        symbol: string;
                        name: string;
                        max_supply: string;
                        mintable: string;
                        owner: string;
                    }) => _293.MsgEditToken;
                };
                "/ollo.token.v1.MsgMintToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, to, owner }: _293.MsgMintToken) => {
                        symbol: string;
                        amount: string;
                        to: string;
                        owner: string;
                    };
                    fromAmino: ({ symbol, amount, to, owner }: {
                        symbol: string;
                        amount: string;
                        to: string;
                        owner: string;
                    }) => _293.MsgMintToken;
                };
                "/ollo.token.v1.MsgBurnToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, sender }: _293.MsgBurnToken) => {
                        symbol: string;
                        amount: string;
                        sender: string;
                    };
                    fromAmino: ({ symbol, amount, sender }: {
                        symbol: string;
                        amount: string;
                        sender: string;
                    }) => _293.MsgBurnToken;
                };
                "/ollo.token.v1.MsgTransferTokenOwner": {
                    aminoType: string;
                    toAmino: ({ srcOwner, dstOwner, symbol }: _293.MsgTransferTokenOwner) => {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    };
                    fromAmino: ({ src_owner, dst_owner, symbol }: {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    }) => _293.MsgTransferTokenOwner;
                };
            };
            MsgIssueToken: {
                encode(message: _293.MsgIssueToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgIssueToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _293.MsgIssueToken;
            };
            MsgIssueTokenResponse: {
                encode(_: _293.MsgIssueTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgIssueTokenResponse;
                fromPartial(_: {}): _293.MsgIssueTokenResponse;
            };
            MsgTransferTokenOwner: {
                encode(message: _293.MsgTransferTokenOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgTransferTokenOwner;
                fromPartial(object: {
                    srcOwner?: string;
                    dstOwner?: string;
                    symbol?: string;
                }): _293.MsgTransferTokenOwner;
            };
            MsgTransferTokenOwnerResponse: {
                encode(_: _293.MsgTransferTokenOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgTransferTokenOwnerResponse;
                fromPartial(_: {}): _293.MsgTransferTokenOwnerResponse;
            };
            MsgEditToken: {
                encode(message: _293.MsgEditToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgEditToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    maxSupply?: string | number | import("long");
                    mintable?: string;
                    owner?: string;
                }): _293.MsgEditToken;
            };
            MsgEditTokenResponse: {
                encode(_: _293.MsgEditTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgEditTokenResponse;
                fromPartial(_: {}): _293.MsgEditTokenResponse;
            };
            MsgMintToken: {
                encode(message: _293.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgMintToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    to?: string;
                    owner?: string;
                }): _293.MsgMintToken;
            };
            MsgMintTokenResponse: {
                encode(_: _293.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgMintTokenResponse;
                fromPartial(_: {}): _293.MsgMintTokenResponse;
            };
            MsgBurnToken: {
                encode(message: _293.MsgBurnToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgBurnToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    sender?: string;
                }): _293.MsgBurnToken;
            };
            MsgBurnTokenResponse: {
                encode(_: _293.MsgBurnTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MsgBurnTokenResponse;
                fromPartial(_: {}): _293.MsgBurnTokenResponse;
            };
            Token: {
                encode(message: _292.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.Token;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _292.Token;
            };
            QueryTokenRequest: {
                encode(message: _291.QueryTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryTokenRequest;
                fromPartial(object: {
                    denom?: string;
                }): _291.QueryTokenRequest;
            };
            QueryTokenResponse: {
                encode(message: _291.QueryTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryTokenResponse;
                fromPartial(object: {
                    Token?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _291.QueryTokenResponse;
            };
            QueryTokensRequest: {
                encode(message: _291.QueryTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryTokensRequest;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _291.QueryTokensRequest;
            };
            QueryTokensResponse: {
                encode(message: _291.QueryTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryTokensResponse;
                fromPartial(object: {
                    Tokens?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _291.QueryTokensResponse;
            };
            QueryFeesRequest: {
                encode(message: _291.QueryFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryFeesRequest;
                fromPartial(object: {
                    denom?: string;
                }): _291.QueryFeesRequest;
            };
            QueryFeesResponse: {
                encode(message: _291.QueryFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryFeesResponse;
                fromPartial(object: {
                    exist?: boolean;
                    issueFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    mintFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _291.QueryFeesResponse;
            };
            QueryParamsRequest: {
                encode(_: _291.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryParamsRequest;
                fromPartial(_: {}): _291.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _291.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        tokenTaxRate?: string;
                        issueTokenBaseFee?: {
                            denom?: string;
                            amount?: string;
                        };
                        mintTokenFeeRatio?: string;
                    };
                    res?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _291.QueryParamsResponse;
            };
            QueryBurnRequest: {
                encode(_: _291.QueryBurnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryBurnRequest;
                fromPartial(_: {}): _291.QueryBurnRequest;
            };
            QueryBurnResponse: {
                encode(message: _291.QueryBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.QueryBurnResponse;
                fromPartial(object: {
                    burnedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _291.QueryBurnResponse;
            };
            Params: {
                encode(message: _290.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.Params;
                fromPartial(object: {
                    tokenTaxRate?: string;
                    issueTokenBaseFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    mintTokenFeeRatio?: string;
                }): _290.Params;
            };
            GenesisState: {
                encode(message: _289.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.GenesisState;
                fromPartial(object: {
                    params?: {
                        tokenTaxRate?: string;
                        issueTokenBaseFee?: {
                            denom?: string;
                            amount?: string;
                        };
                        mintTokenFeeRatio?: string;
                    };
                    tokens?: {
                        symbol?: string;
                        name?: string;
                        scale?: number;
                        minUnit?: string;
                        initialSupply?: string | number | import("long");
                        maxSupply?: string | number | import("long");
                        mintable?: boolean;
                        owner?: string;
                    }[];
                    burnedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _289.GenesisState;
            };
        };
    }
    namespace vault {
        const v1: {
            MsgClientImpl: typeof _513.MsgClientImpl;
            QueryClientImpl: typeof _499.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryVault(request: _297.QueryVaultRequest): Promise<_297.QueryVaultResponse>;
                queryAllVaults(request?: _297.QueryAllVaultsRequest): Promise<_297.QueryAllVaultsResponse>;
            };
            LCDQueryClient: typeof _479.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    msgCreate(value: _298.MsgCreateRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDeposit(value: _298.MsgDepositRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgWithdraw(value: _298.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDraw(value: _298.MsgDrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgRepay(value: _298.MsgRepayRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgClose(value: _298.MsgCloseRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    msgCreate(value: _298.MsgCreateRequest): {
                        typeUrl: string;
                        value: _298.MsgCreateRequest;
                    };
                    msgDeposit(value: _298.MsgDepositRequest): {
                        typeUrl: string;
                        value: _298.MsgDepositRequest;
                    };
                    msgWithdraw(value: _298.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _298.MsgWithdrawRequest;
                    };
                    msgDraw(value: _298.MsgDrawRequest): {
                        typeUrl: string;
                        value: _298.MsgDrawRequest;
                    };
                    msgRepay(value: _298.MsgRepayRequest): {
                        typeUrl: string;
                        value: _298.MsgRepayRequest;
                    };
                    msgClose(value: _298.MsgCloseRequest): {
                        typeUrl: string;
                        value: _298.MsgCloseRequest;
                    };
                };
                fromPartial: {
                    msgCreate(value: _298.MsgCreateRequest): {
                        typeUrl: string;
                        value: _298.MsgCreateRequest;
                    };
                    msgDeposit(value: _298.MsgDepositRequest): {
                        typeUrl: string;
                        value: _298.MsgDepositRequest;
                    };
                    msgWithdraw(value: _298.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _298.MsgWithdrawRequest;
                    };
                    msgDraw(value: _298.MsgDrawRequest): {
                        typeUrl: string;
                        value: _298.MsgDrawRequest;
                    };
                    msgRepay(value: _298.MsgRepayRequest): {
                        typeUrl: string;
                        value: _298.MsgRepayRequest;
                    };
                    msgClose(value: _298.MsgCloseRequest): {
                        typeUrl: string;
                        value: _298.MsgCloseRequest;
                    };
                };
            };
            AminoConverter: {
                "/ollo.vault.v1.MsgCreateRequest": {
                    aminoType: string;
                    toAmino: ({ from, amountIn, amountOut }: _298.MsgCreateRequest) => {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    };
                    fromAmino: ({ from, amount_in, amount_out }: {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    }) => _298.MsgCreateRequest;
                };
                "/ollo.vault.v1.MsgDepositRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _298.MsgDepositRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _298.MsgDepositRequest;
                };
                "/ollo.vault.v1.MsgWithdrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _298.MsgWithdrawRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _298.MsgWithdrawRequest;
                };
                "/ollo.vault.v1.MsgDrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _298.MsgDrawRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _298.MsgDrawRequest;
                };
                "/ollo.vault.v1.MsgRepayRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _298.MsgRepayRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _298.MsgRepayRequest;
                };
                "/ollo.vault.v1.MsgCloseRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId }: _298.MsgCloseRequest) => {
                        from: string;
                        user_vault_id: string;
                    };
                    fromAmino: ({ from, user_vault_id }: {
                        from: string;
                        user_vault_id: string;
                    }) => _298.MsgCloseRequest;
                };
            };
            Vault: {
                encode(message: _299.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.Vault;
                fromPartial(object: {
                    id?: string | number | import("long");
                    owner?: string;
                    amountIn?: string;
                    amountOut?: string;
                    createdAt?: Date;
                    interestAccumulated?: string;
                    closingFeeAccumulated?: string;
                    blockHeight?: string | number | import("long");
                    blockTime?: Date;
                }): _299.Vault;
            };
            EmissionsVault: {
                encode(message: _299.EmissionsVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.EmissionsVault;
                fromPartial(object: {
                    id?: string | number | import("long");
                    amountIn?: string;
                    amountOut?: string;
                    createdAt?: Date;
                }): _299.EmissionsVault;
            };
            EmissionsVaultRewards: {
                encode(message: _299.EmissionsVaultRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.EmissionsVaultRewards;
                fromPartial(object: {
                    user?: string;
                    blockHeight?: string | number | import("long");
                    amount?: string;
                }): _299.EmissionsVaultRewards;
            };
            MsgCreateRequest: {
                encode(message: _298.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgCreateRequest;
                fromPartial(object: {
                    from?: string;
                    amountIn?: string;
                    amountOut?: string;
                }): _298.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _298.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgCreateResponse;
                fromPartial(_: {}): _298.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _298.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgDepositRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _298.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _298.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgDepositResponse;
                fromPartial(_: {}): _298.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _298.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgWithdrawRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _298.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _298.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgWithdrawResponse;
                fromPartial(_: {}): _298.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _298.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgDrawRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _298.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _298.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgDrawResponse;
                fromPartial(_: {}): _298.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _298.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgRepayRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _298.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _298.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgRepayResponse;
                fromPartial(_: {}): _298.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _298.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgCloseRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                }): _298.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _298.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.MsgCloseResponse;
                fromPartial(_: {}): _298.MsgCloseResponse;
            };
            QueryAllVaultsRequest: {
                encode(message: _297.QueryAllVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.QueryAllVaultsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _297.QueryAllVaultsRequest;
            };
            QueryAllVaultsResponse: {
                encode(message: _297.QueryAllVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.QueryAllVaultsResponse;
                fromPartial(object: {
                    vault?: {
                        id?: string | number | import("long");
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                        createdAt?: Date;
                        interestAccumulated?: string;
                        closingFeeAccumulated?: string;
                        blockHeight?: string | number | import("long");
                        blockTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _297.QueryAllVaultsResponse;
            };
            QueryVaultRequest: {
                encode(message: _297.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.QueryVaultRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _297.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _297.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.QueryVaultResponse;
                fromPartial(object: {
                    vault?: {
                        id?: string | number | import("long");
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                        createdAt?: Date;
                        interestAccumulated?: string;
                        closingFeeAccumulated?: string;
                        blockHeight?: string | number | import("long");
                        blockTime?: Date;
                    };
                }): _297.QueryVaultResponse;
            };
            Params: {
                encode(_: _296.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.Params;
                fromPartial(_: {}): _296.Params;
            };
            GenesisState: {
                encode(message: _295.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.GenesisState;
                fromPartial(object: {
                    vaults?: {
                        id?: string | number | import("long");
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                        createdAt?: Date;
                        interestAccumulated?: string;
                        closingFeeAccumulated?: string;
                        blockHeight?: string | number | import("long");
                        blockTime?: Date;
                    }[];
                    emissionsVault?: {
                        id?: string | number | import("long");
                        amountIn?: string;
                        amountOut?: string;
                        createdAt?: Date;
                    }[];
                }): _295.GenesisState;
            };
            EventCreateVault: {
                encode(message: _294.EventCreateVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.EventCreateVault;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                }): _294.EventCreateVault;
            };
            EventCloseVault: {
                encode(message: _294.EventCloseVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.EventCloseVault;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                }): _294.EventCloseVault;
            };
            EventDepositCollateral: {
                encode(message: _294.EventDepositCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.EventDepositCollateral;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _294.EventDepositCollateral;
            };
            EventWithdrawCollateral: {
                encode(message: _294.EventWithdrawCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.EventWithdrawCollateral;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _294.EventWithdrawCollateral;
            };
            EventDrawDebt: {
                encode(message: _294.EventDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.EventDrawDebt;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _294.EventDrawDebt;
            };
            EventRepayDebt: {
                encode(message: _294.EventRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.EventRepayDebt;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _294.EventRepayDebt;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ollo: {
                claim: {
                    v1: _500.MsgClientImpl;
                };
                emissions: {
                    v1: _501.MsgClientImpl;
                };
                farming: {
                    v1: _502.MsgClientImpl;
                };
                grants: {
                    v1: _503.MsgClientImpl;
                };
                incentive: {
                    v1: _504.MsgClientImpl;
                };
                liquidity: {
                    v1: _505.MsgClientImpl;
                };
                loan: {
                    v1: _506.MsgClientImpl;
                };
                lock: {
                    v1: _507.MsgClientImpl;
                };
                nft: {
                    v1: _508.MsgClientImpl;
                };
                ons: {
                    v1: _509.MsgClientImpl;
                };
                prices: {
                    v1: _510.MsgClientImpl;
                };
                reserve: {
                    v1: _511.MsgClientImpl;
                };
                token: {
                    v1: _512.MsgClientImpl;
                };
                vault: {
                    v1: _513.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ollo: {
                claim: {
                    v1: {
                        params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                        claimRecord(request: _177.QueryGetClaimRecordRequest): Promise<_177.QueryGetClaimRecordResponse>;
                        claimRecordAll(request?: _177.QueryAllClaimRecordRequest): Promise<_177.QueryAllClaimRecordResponse>;
                        goal(request: _177.QueryGetGoalRequest): Promise<_177.QueryGetGoalResponse>;
                        goalAll(request?: _177.QueryAllGoalRequest): Promise<_177.QueryAllGoalResponse>;
                        airdropSupply(request?: _177.QueryGetAirdropSupplyRequest): Promise<_177.QueryGetAirdropSupplyResponse>;
                        initialClaim(request?: _177.QueryGetInitialClaimRequest): Promise<_177.QueryGetInitialClaimResponse>;
                    };
                };
                emissions: {
                    v1: {
                        queryEmission(request: _182.QueryEmissionRequest): Promise<_182.QueryEmissionResponse>;
                        queryAllEmissions(request?: _182.QueryAllEmissionsRequest): Promise<_182.QueryAllEmissionsResponse>;
                    };
                };
                epoch: {
                    v1: {
                        epochs(request?: _187.QueryEpochsRequest): Promise<_187.QueryEpochsResponse>;
                        epoch(request: _187.QueryEpochRequest): Promise<_187.QueryEpochResponse>;
                        currentEpoch(request: _187.QueryCurrentEpochRequest): Promise<_187.QueryCurrentEpochResponse>;
                    };
                };
                farming: {
                    v1: {
                        params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                        plans(request: _192.QueryPlansRequest): Promise<_192.QueryPlansResponse>;
                        plan(request: _192.QueryPlanRequest): Promise<_192.QueryPlanResponse>;
                        stakings(request: _192.QueryStakingsRequest): Promise<_192.QueryStakingsResponse>;
                        totalStakings(request: _192.QueryTotalStakingsRequest): Promise<_192.QueryTotalStakingsResponse>;
                        rewards(request: _192.QueryRewardsRequest): Promise<_192.QueryRewardsResponse>;
                        currentEpochDays(request?: _192.QueryCurrentEpochDaysRequest): Promise<_192.QueryCurrentEpochDaysResponse>;
                    };
                };
                fees: {
                    v1: {
                        feeTokens(request?: _198.QueryFeeTokensRequest): Promise<_198.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _198.QueryDenomSpotPriceRequest): Promise<_198.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _198.QueryDenomPoolIdRequest): Promise<_198.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _198.QueryBaseDenomRequest): Promise<_198.QueryBaseDenomResponse>;
                    };
                };
                grants: {
                    v1: {
                        params(request?: _203.QueryParamsRequest): Promise<_203.QueryParamsResponse>;
                        auctions(request: _203.QueryAuctionsRequest): Promise<_203.QueryAuctionsResponse>;
                        auction(request: _203.QueryAuctionRequest): Promise<_203.QueryAuctionResponse>;
                        allowedBidder(request: _203.QueryAllowedBidderRequest): Promise<_203.QueryAllowedBidderResponse>;
                        allowedBidders(request: _203.QueryAllowedBiddersRequest): Promise<_203.QueryAllowedBiddersResponse>;
                        bids(request: _203.QueryBidsRequest): Promise<_203.QueryBidsResponse>;
                        bid(request: _203.QueryBidRequest): Promise<_203.QueryBidResponse>;
                        vestings(request: _203.QueryVestingsRequest): Promise<_203.QueryVestingsResponse>;
                    };
                };
                icq: {
                    v1: {
                        params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
                    };
                };
                incentive: {
                    v1: {
                        params(request?: _219.QueryParamsRequest): Promise<_219.QueryParamsResponse>;
                        marketMakers(request: _219.QueryMarketMakersRequest): Promise<_219.QueryMarketMakersResponse>;
                        incentive(request: _219.QueryIncentiveRequest): Promise<_219.QueryIncentiveResponse>;
                    };
                };
                liquidity: {
                    v1: {
                        params(request?: _230.QueryParamsRequest): Promise<_230.QueryParamsResponse>;
                        pools(request: _230.QueryPoolsRequest): Promise<_230.QueryPoolsResponse>;
                        pool(request: _230.QueryPoolRequest): Promise<_230.QueryPoolResponse>;
                        poolByReserveAddress(request: _230.QueryPoolByReserveAddressRequest): Promise<_230.QueryPoolResponse>;
                        poolByPoolCoinDenom(request: _230.QueryPoolByPoolCoinDenomRequest): Promise<_230.QueryPoolResponse>;
                        pairs(request: _230.QueryPairsRequest): Promise<_230.QueryPairsResponse>;
                        pair(request: _230.QueryPairRequest): Promise<_230.QueryPairResponse>;
                        depositRequests(request: _230.QueryDepositRequestsRequest): Promise<_230.QueryDepositRequestsResponse>;
                        depositRequest(request: _230.QueryDepositRequestRequest): Promise<_230.QueryDepositRequestResponse>;
                        withdrawRequests(request: _230.QueryWithdrawRequestsRequest): Promise<_230.QueryWithdrawRequestsResponse>;
                        withdrawRequest(request: _230.QueryWithdrawRequestRequest): Promise<_230.QueryWithdrawRequestResponse>;
                        orders(request: _230.QueryOrdersRequest): Promise<_230.QueryOrdersResponse>;
                        order(request: _230.QueryOrderRequest): Promise<_230.QueryOrderResponse>;
                        ordersByOrderer(request: _230.QueryOrdersByOrdererRequest): Promise<_230.QueryOrdersResponse>;
                        orderBooks(request: _230.QueryOrderBooksRequest): Promise<_230.QueryOrderBooksResponse>;
                        numMMOrders(request: _230.QueryNumMMOrdersRequest): Promise<_230.QueryNumMMOrdersResponse>;
                    };
                };
                loan: {
                    v1: {
                        params(request?: _240.QueryParamsRequest): Promise<_240.QueryParamsResponse>;
                        loans(request: _240.QueryGetLoansRequest): Promise<_240.QueryGetLoansResponse>;
                        loansAll(request?: _240.QueryAllLoansRequest): Promise<_240.QueryAllLoansResponse>;
                    };
                };
                lock: {
                    v1: {
                        queryParams(request?: _246.QueryParamsRequest): Promise<_246.QueryParamsResponse>;
                    };
                };
                market: {
                    v1: {
                        params(request?: _251.QueryParamsRequest): Promise<_251.QueryParamsResponse>;
                    };
                };
                mint: {
                    v1: {
                        params(request?: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
                        inflation(request?: _257.QueryInflationRequest): Promise<_257.QueryInflationResponse>;
                        annualProvisions(request?: _257.QueryAnnualProvisionsRequest): Promise<_257.QueryAnnualProvisionsResponse>;
                        distribution(request?: _257.QueryDistributionRequest): Promise<_257.QueryDistributionResponse>;
                        lastBlockTime(request?: _257.QueryLastBlockTimeRequest): Promise<_257.QueryLastBlockTimeResponse>;
                    };
                };
                nft: {
                    v1: {
                        supply(request: _262.QuerySupplyRequest): Promise<_262.QuerySupplyResponse>;
                        nFTsOfOwner(request: _262.QueryNFTsOfOwnerRequest): Promise<_262.QueryNFTsOfOwnerResponse>;
                        collection(request: _262.QueryCollectionRequest): Promise<_262.QueryCollectionResponse>;
                        denom(request: _262.QueryDenomRequest): Promise<_262.QueryDenomResponse>;
                        denoms(request?: _262.QueryDenomsRequest): Promise<_262.QueryDenomsResponse>;
                        nFT(request: _262.QueryNFTRequest): Promise<_262.QueryNFTResponse>;
                        params(request?: _262.QueryParamsRequest): Promise<_262.QueryParamsResponse>;
                    };
                };
                ons: {
                    v1: {
                        params(request?: _267.QueryParamsRequest): Promise<_267.QueryParamsResponse>;
                        whois(request: _267.QueryGetWhoisRequest): Promise<_267.QueryGetWhoisResponse>;
                        whoisAll(request?: _267.QueryAllWhoisRequest): Promise<_267.QueryAllWhoisResponse>;
                    };
                };
                prices: {
                    v1: {
                        params(request?: _276.QueryParamsRequest): Promise<_276.QueryParamsResponse>;
                        bandPricesResult(request: _276.QueryBandPricesRequest): Promise<_276.QueryBandPricesResponse>;
                        lastBandPricesId(request?: _276.QueryLastBandPricesIdRequest): Promise<_276.QueryLastBandPricesIdResponse>;
                        queryRoundData(request: _276.QueryRoundDataRequest): Promise<_276.QueryRoundDataResponse>;
                        latestRoundData(request: _276.QueryLatestRoundDataRequest): Promise<_276.QueryLatestRoundDataResponse>;
                        queryAllModuleOwner(request?: _276.QueryModuleOwnerRequest): Promise<_276.QueryModuleOwnerResponse>;
                        queryFeedByFeedId(request: _276.QueryFeedByIdRequest): Promise<_276.QueryFeedByIdResponse>;
                        queryAccountInfo(request: _276.QueryAccountRequest): Promise<_276.QueryAccountResponse>;
                        queryFeedRewardAvailStrategy(request?: _276.QueryFeedRewardAvailStrategiesRequest): Promise<_276.QueryFeedRewardAvailStrategiesResponse>;
                    };
                };
                ratelimit: {
                    v1: {
                        params(request?: _281.QueryParamsRequest): Promise<_281.QueryParamsResponse>;
                    };
                };
                reserve: {
                    v1: {
                        params(request?: _286.QueryParamsRequest): Promise<_286.QueryParamsResponse>;
                        getDenoms(request?: _286.QueryGetDenomsRequest): Promise<_286.QueryGetDenomsResponse>;
                        getDenom(request: _286.QueryGetDenomRequest): Promise<_286.QueryGetDenomResponse>;
                        getDenomWhitelist(request: _286.QueryGetDenomWhitelistRequest): Promise<_286.QueryGetDenomWhitelistResponse>;
                        denomsFromCreator(request: _286.QueryDenomsFromCreatorRequest): Promise<_286.QueryDenomsFromCreatorResponse>;
                    };
                };
                token: {
                    v1: {
                        token(request: _291.QueryTokenRequest): Promise<_291.QueryTokenResponse>;
                        tokens(request: _291.QueryTokensRequest): Promise<_291.QueryTokensResponse>;
                        fees(request: _291.QueryFeesRequest): Promise<_291.QueryFeesResponse>;
                        params(request?: _291.QueryParamsRequest): Promise<_291.QueryParamsResponse>;
                        burn(request?: _291.QueryBurnRequest): Promise<_291.QueryBurnResponse>;
                    };
                };
                vault: {
                    v1: {
                        queryVault(request: _297.QueryVaultRequest): Promise<_297.QueryVaultResponse>;
                        queryAllVaults(request?: _297.QueryAllVaultsRequest): Promise<_297.QueryAllVaultsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ollo: {
                claim: {
                    v1: _460.LCDQueryClient;
                };
                emissions: {
                    v1: _461.LCDQueryClient;
                };
                epoch: {
                    v1: _462.LCDQueryClient;
                };
                farming: {
                    v1: _463.LCDQueryClient;
                };
                fees: {
                    v1: _464.LCDQueryClient;
                };
                grants: {
                    v1: _465.LCDQueryClient;
                };
                icq: {
                    v1: _466.LCDQueryClient;
                };
                incentive: {
                    v1: _467.LCDQueryClient;
                };
                liquidity: {
                    v1: _468.LCDQueryClient;
                };
                loan: {
                    v1: _469.LCDQueryClient;
                };
                lock: {
                    v1: _470.LCDQueryClient;
                };
                market: {
                    v1: _471.LCDQueryClient;
                };
                mint: {
                    v1: _472.LCDQueryClient;
                };
                nft: {
                    v1: _473.LCDQueryClient;
                };
                ons: {
                    v1: _474.LCDQueryClient;
                };
                prices: {
                    v1: _475.LCDQueryClient;
                };
                ratelimit: {
                    v1: _476.LCDQueryClient;
                };
                reserve: {
                    v1: _477.LCDQueryClient;
                };
                token: {
                    v1: _478.LCDQueryClient;
                };
                vault: {
                    v1: _479.LCDQueryClient;
                };
            };
        }>;
    };
}
