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
import * as _188 from "./farming/v1/events";
import * as _189 from "./farming/v1/farming";
import * as _190 from "./farming/v1/genesis";
import * as _191 from "./farming/v1/params";
import * as _192 from "./farming/v1/proposal";
import * as _193 from "./farming/v1/query";
import * as _194 from "./farming/v1/tx";
import * as _195 from "./fees/v1/fees";
import * as _196 from "./fees/v1/genesis";
import * as _197 from "./fees/v1/params";
import * as _198 from "./fees/v1/proprosal";
import * as _199 from "./fees/v1/query";
import * as _200 from "./grants/v1/events";
import * as _201 from "./grants/v1/genesis";
import * as _202 from "./grants/v1/grants";
import * as _203 from "./grants/v1/params";
import * as _204 from "./grants/v1/query";
import * as _205 from "./grants/v1/tx";
import * as _206 from "./icq/v1/events";
import * as _207 from "./icq/v1/genesis";
import * as _208 from "./icq/v1/icq";
import * as _209 from "./icq/v1/packet";
import * as _210 from "./icq/v1/params";
import * as _211 from "./icq/v1/query";
import * as _212 from "./icq/v1/tx";
import * as _213 from "./incentive/v1/deposit";
import * as _214 from "./incentive/v1/events";
import * as _215 from "./incentive/v1/genesis";
import * as _216 from "./incentive/v1/incentive";
import * as _217 from "./incentive/v1/mm";
import * as _218 from "./incentive/v1/params";
import * as _219 from "./incentive/v1/proprosal";
import * as _220 from "./incentive/v1/query";
import * as _221 from "./incentive/v1/tx";
import * as _222 from "./lend/v1/borrow";
import * as _223 from "./lend/v1/events";
import * as _224 from "./lend/v1/genesis";
import * as _225 from "./lend/v1/loan";
import * as _226 from "./lend/v1/params";
import * as _227 from "./lend/v1/proprosal";
import * as _228 from "./lend/v1/query";
import * as _229 from "./lend/v1/tx";
import * as _230 from "./liquidity/v1/events";
import * as _231 from "./liquidity/v1/genesis";
import * as _232 from "./liquidity/v1/liquidity";
import * as _233 from "./liquidity/v1/order";
import * as _234 from "./liquidity/v1/pair";
import * as _235 from "./liquidity/v1/params";
import * as _236 from "./liquidity/v1/pool";
import * as _237 from "./liquidity/v1/proprosal";
import * as _238 from "./liquidity/v1/query";
import * as _239 from "./liquidity/v1/ranged";
import * as _240 from "./liquidity/v1/stable";
import * as _241 from "./liquidity/v1/tx";
import * as _242 from "./lock/v1/events";
import * as _243 from "./lock/v1/genesis";
import * as _244 from "./lock/v1/lock";
import * as _245 from "./lock/v1/params";
import * as _246 from "./lock/v1/query";
import * as _247 from "./lock/v1/tx";
import * as _248 from "./market/v1/events";
import * as _249 from "./market/v1/genesis";
import * as _250 from "./market/v1/listing";
import * as _251 from "./market/v1/market";
import * as _252 from "./market/v1/packet";
import * as _253 from "./market/v1/params";
import * as _254 from "./market/v1/proprosal";
import * as _255 from "./market/v1/query";
import * as _257 from "./mint/v1/events";
import * as _258 from "./mint/v1/genesis";
import * as _259 from "./mint/v1/mint";
import * as _260 from "./mint/v1/params";
import * as _261 from "./mint/v1/query";
import * as _263 from "./nft/v1/events";
import * as _264 from "./nft/v1/genesis";
import * as _265 from "./nft/v1/nft";
import * as _266 from "./nft/v1/packet";
import * as _267 from "./nft/v1/params";
import * as _268 from "./nft/v1/query";
import * as _269 from "./nft/v1/tx";
import * as _270 from "./ons/v1/did";
import * as _271 from "./ons/v1/events";
import * as _272 from "./ons/v1/genesis";
import * as _273 from "./ons/v1/listing";
import * as _274 from "./ons/v1/ons";
import * as _275 from "./ons/v1/packet";
import * as _276 from "./ons/v1/params";
import * as _277 from "./ons/v1/proprosal";
import * as _278 from "./ons/v1/query";
import * as _279 from "./ons/v1/thread";
import * as _280 from "./ons/v1/tx";
import * as _281 from "./ons/v1/whois";
import * as _282 from "./prices/v1/band";
import * as _283 from "./prices/v1/events";
import * as _284 from "./prices/v1/feed";
import * as _285 from "./prices/v1/genesis";
import * as _286 from "./prices/v1/packet";
import * as _287 from "./prices/v1/params";
import * as _288 from "./prices/v1/prices";
import * as _289 from "./prices/v1/proprosal";
import * as _290 from "./prices/v1/query";
import * as _291 from "./prices/v1/store";
import * as _292 from "./prices/v1/tx";
import * as _293 from "./ratelimit/v1/events";
import * as _294 from "./ratelimit/v1/genesis";
import * as _295 from "./ratelimit/v1/params";
import * as _296 from "./ratelimit/v1/query";
import * as _297 from "./reserve/v1/events";
import * as _298 from "./reserve/v1/genesis";
import * as _299 from "./reserve/v1/metadata";
import * as _300 from "./reserve/v1/params";
import * as _301 from "./reserve/v1/query";
import * as _302 from "./reserve/v1/reserve";
import * as _303 from "./reserve/v1/tx";
import * as _304 from "./token/v1/events";
import * as _305 from "./token/v1/genesis";
import * as _306 from "./token/v1/params";
import * as _307 from "./token/v1/query";
import * as _308 from "./token/v1/token";
import * as _309 from "./token/v1/tx";
import * as _310 from "./vault/v1/events";
import * as _311 from "./vault/v1/genesis";
import * as _312 from "./vault/v1/params";
import * as _313 from "./vault/v1/query";
import * as _314 from "./vault/v1/tx";
import * as _315 from "./vault/v1/vault";
import * as _472 from "./claim/v1/query.lcd";
import * as _473 from "./emissions/v1/query.lcd";
import * as _474 from "./epoch/v1/query.lcd";
import * as _475 from "./farming/v1/query.lcd";
import * as _476 from "./fees/v1/query.lcd";
import * as _477 from "./grants/v1/query.lcd";
import * as _478 from "./icq/v1/query.lcd";
import * as _479 from "./incentive/v1/query.lcd";
import * as _480 from "./lend/v1/query.lcd";
import * as _481 from "./liquidity/v1/query.lcd";
import * as _482 from "./lock/v1/query.lcd";
import * as _483 from "./market/v1/query.lcd";
import * as _484 from "./mint/v1/query.lcd";
import * as _485 from "./nft/v1/query.lcd";
import * as _486 from "./ons/v1/query.lcd";
import * as _487 from "./prices/v1/query.lcd";
import * as _488 from "./ratelimit/v1/query.lcd";
import * as _489 from "./reserve/v1/query.lcd";
import * as _490 from "./token/v1/query.lcd";
import * as _491 from "./vault/v1/query.lcd";
import * as _492 from "./claim/v1/query.rpc.Query";
import * as _493 from "./emissions/v1/query.rpc.Query";
import * as _494 from "./epoch/v1/query.rpc.Query";
import * as _495 from "./farming/v1/query.rpc.Query";
import * as _496 from "./fees/v1/query.rpc.Query";
import * as _497 from "./grants/v1/query.rpc.Query";
import * as _498 from "./icq/v1/query.rpc.Query";
import * as _499 from "./incentive/v1/query.rpc.Query";
import * as _500 from "./lend/v1/query.rpc.Query";
import * as _501 from "./liquidity/v1/query.rpc.Query";
import * as _502 from "./lock/v1/query.rpc.Query";
import * as _503 from "./market/v1/query.rpc.Query";
import * as _504 from "./mint/v1/query.rpc.Query";
import * as _505 from "./nft/v1/query.rpc.Query";
import * as _506 from "./ons/v1/query.rpc.Query";
import * as _507 from "./prices/v1/query.rpc.Query";
import * as _508 from "./ratelimit/v1/query.rpc.Query";
import * as _509 from "./reserve/v1/query.rpc.Query";
import * as _510 from "./token/v1/query.rpc.Query";
import * as _511 from "./vault/v1/query.rpc.Query";
import * as _512 from "./claim/v1/tx.rpc.msg";
import * as _513 from "./emissions/v1/tx.rpc.msg";
import * as _514 from "./farming/v1/tx.rpc.msg";
import * as _515 from "./grants/v1/tx.rpc.msg";
import * as _516 from "./incentive/v1/tx.rpc.msg";
import * as _517 from "./lend/v1/tx.rpc.msg";
import * as _518 from "./liquidity/v1/tx.rpc.msg";
import * as _519 from "./lock/v1/tx.rpc.msg";
import * as _520 from "./nft/v1/tx.rpc.msg";
import * as _521 from "./ons/v1/tx.rpc.msg";
import * as _522 from "./prices/v1/tx.rpc.msg";
import * as _523 from "./reserve/v1/tx.rpc.msg";
import * as _524 from "./token/v1/tx.rpc.msg";
import * as _525 from "./vault/v1/tx.rpc.msg";
export declare namespace ollo {
    namespace claim {
        const v1: {
            MsgClientImpl: typeof _512.MsgClientImpl;
            QueryClientImpl: typeof _492.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                claimRecord(request: _177.QueryGetClaimRecordRequest): Promise<_177.QueryGetClaimRecordResponse>;
                claimRecordAll(request?: _177.QueryAllClaimRecordRequest): Promise<_177.QueryAllClaimRecordResponse>;
                goal(request: _177.QueryGetGoalRequest): Promise<_177.QueryGetGoalResponse>;
                goalAll(request?: _177.QueryAllGoalRequest): Promise<_177.QueryAllGoalResponse>;
                airdropSupply(request?: _177.QueryGetAirdropSupplyRequest): Promise<_177.QueryGetAirdropSupplyResponse>;
                initialClaim(request?: _177.QueryGetInitialClaimRequest): Promise<_177.QueryGetInitialClaimResponse>;
            };
            LCDQueryClient: typeof _472.LCDQueryClient;
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
            MsgClientImpl: typeof _513.MsgClientImpl;
            QueryClientImpl: typeof _493.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryEmission(request: _182.QueryEmissionRequest): Promise<_182.QueryEmissionResponse>;
                queryAllEmissions(request?: _182.QueryAllEmissionsRequest): Promise<_182.QueryAllEmissionsResponse>;
            };
            LCDQueryClient: typeof _473.LCDQueryClient;
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
            QueryClientImpl: typeof _494.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochs(request?: _187.QueryEpochsRequest): Promise<_187.QueryEpochsResponse>;
                epoch(request: _187.QueryEpochRequest): Promise<_187.QueryEpochResponse>;
                currentEpoch(request: _187.QueryCurrentEpochRequest): Promise<_187.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _474.LCDQueryClient;
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
            MsgClientImpl: typeof _514.MsgClientImpl;
            QueryClientImpl: typeof _495.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
                plans(request: _193.QueryPlansRequest): Promise<_193.QueryPlansResponse>;
                plan(request: _193.QueryPlanRequest): Promise<_193.QueryPlanResponse>;
                stakings(request: _193.QueryStakingsRequest): Promise<_193.QueryStakingsResponse>;
                totalStakings(request: _193.QueryTotalStakingsRequest): Promise<_193.QueryTotalStakingsResponse>;
                rewards(request: _193.QueryRewardsRequest): Promise<_193.QueryRewardsResponse>;
                currentEpochDays(request?: _193.QueryCurrentEpochDaysRequest): Promise<_193.QueryCurrentEpochDaysResponse>;
            };
            LCDQueryClient: typeof _475.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedAmountPlan(value: _194.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRatioPlan(value: _194.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    stake(value: _194.MsgStake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unstake(value: _194.MsgUnstake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    harvest(value: _194.MsgHarvest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePlan(value: _194.MsgRemovePlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    advanceEpoch(value: _194.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedAmountPlan(value: _194.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _194.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _194.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _194.MsgCreateRatioPlan;
                    };
                    stake(value: _194.MsgStake): {
                        typeUrl: string;
                        value: _194.MsgStake;
                    };
                    unstake(value: _194.MsgUnstake): {
                        typeUrl: string;
                        value: _194.MsgUnstake;
                    };
                    harvest(value: _194.MsgHarvest): {
                        typeUrl: string;
                        value: _194.MsgHarvest;
                    };
                    removePlan(value: _194.MsgRemovePlan): {
                        typeUrl: string;
                        value: _194.MsgRemovePlan;
                    };
                    advanceEpoch(value: _194.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _194.MsgAdvanceEpoch;
                    };
                };
                fromPartial: {
                    createFixedAmountPlan(value: _194.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _194.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _194.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _194.MsgCreateRatioPlan;
                    };
                    stake(value: _194.MsgStake): {
                        typeUrl: string;
                        value: _194.MsgStake;
                    };
                    unstake(value: _194.MsgUnstake): {
                        typeUrl: string;
                        value: _194.MsgUnstake;
                    };
                    harvest(value: _194.MsgHarvest): {
                        typeUrl: string;
                        value: _194.MsgHarvest;
                    };
                    removePlan(value: _194.MsgRemovePlan): {
                        typeUrl: string;
                        value: _194.MsgRemovePlan;
                    };
                    advanceEpoch(value: _194.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _194.MsgAdvanceEpoch;
                    };
                };
            };
            AminoConverter: {
                "/ollo.farming.v1.MsgCreateFixedAmountPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochAmount }: _194.MsgCreateFixedAmountPlan) => {
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
                    }) => _194.MsgCreateFixedAmountPlan;
                };
                "/ollo.farming.v1.MsgCreateRatioPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochRatio }: _194.MsgCreateRatioPlan) => {
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
                    }) => _194.MsgCreateRatioPlan;
                };
                "/ollo.farming.v1.MsgStake": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoins }: _194.MsgStake) => {
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
                    }) => _194.MsgStake;
                };
                "/ollo.farming.v1.MsgUnstake": {
                    aminoType: string;
                    toAmino: ({ farmer, unstakingCoins }: _194.MsgUnstake) => {
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
                    }) => _194.MsgUnstake;
                };
                "/ollo.farming.v1.MsgHarvest": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoinDenoms }: _194.MsgHarvest) => {
                        farmer: string;
                        staking_coin_denoms: string[];
                    };
                    fromAmino: ({ farmer, staking_coin_denoms }: {
                        farmer: string;
                        staking_coin_denoms: string[];
                    }) => _194.MsgHarvest;
                };
                "/ollo.farming.v1.MsgRemovePlan": {
                    aminoType: string;
                    toAmino: ({ creator, planId }: _194.MsgRemovePlan) => {
                        creator: string;
                        plan_id: string;
                    };
                    fromAmino: ({ creator, plan_id }: {
                        creator: string;
                        plan_id: string;
                    }) => _194.MsgRemovePlan;
                };
                "/ollo.farming.v1.MsgAdvanceEpoch": {
                    aminoType: string;
                    toAmino: ({ requester }: _194.MsgAdvanceEpoch) => {
                        requester: string;
                    };
                    fromAmino: ({ requester }: {
                        requester: string;
                    }) => _194.MsgAdvanceEpoch;
                };
            };
            MsgCreateFixedAmountPlan: {
                encode(message: _194.MsgCreateFixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateFixedAmountPlan;
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
                }): _194.MsgCreateFixedAmountPlan;
            };
            MsgCreateFixedAmountPlanResponse: {
                encode(_: _194.MsgCreateFixedAmountPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateFixedAmountPlanResponse;
                fromPartial(_: {}): _194.MsgCreateFixedAmountPlanResponse;
            };
            MsgCreateRatioPlan: {
                encode(message: _194.MsgCreateRatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateRatioPlan;
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
                }): _194.MsgCreateRatioPlan;
            };
            MsgCreateRatioPlanResponse: {
                encode(_: _194.MsgCreateRatioPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateRatioPlanResponse;
                fromPartial(_: {}): _194.MsgCreateRatioPlanResponse;
            };
            MsgStake: {
                encode(message: _194.MsgStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgStake;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _194.MsgStake;
            };
            MsgStakeResponse: {
                encode(_: _194.MsgStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgStakeResponse;
                fromPartial(_: {}): _194.MsgStakeResponse;
            };
            MsgUnstake: {
                encode(message: _194.MsgUnstake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgUnstake;
                fromPartial(object: {
                    farmer?: string;
                    unstakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _194.MsgUnstake;
            };
            MsgUnstakeResponse: {
                encode(_: _194.MsgUnstakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgUnstakeResponse;
                fromPartial(_: {}): _194.MsgUnstakeResponse;
            };
            MsgHarvest: {
                encode(message: _194.MsgHarvest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgHarvest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenoms?: string[];
                }): _194.MsgHarvest;
            };
            MsgHarvestResponse: {
                encode(_: _194.MsgHarvestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgHarvestResponse;
                fromPartial(_: {}): _194.MsgHarvestResponse;
            };
            MsgRemovePlan: {
                encode(message: _194.MsgRemovePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgRemovePlan;
                fromPartial(object: {
                    creator?: string;
                    planId?: string | number | import("long");
                }): _194.MsgRemovePlan;
            };
            MsgRemovePlanResponse: {
                encode(_: _194.MsgRemovePlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgRemovePlanResponse;
                fromPartial(_: {}): _194.MsgRemovePlanResponse;
            };
            MsgAdvanceEpoch: {
                encode(message: _194.MsgAdvanceEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgAdvanceEpoch;
                fromPartial(object: {
                    requester?: string;
                }): _194.MsgAdvanceEpoch;
            };
            MsgAdvanceEpochResponse: {
                encode(_: _194.MsgAdvanceEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgAdvanceEpochResponse;
                fromPartial(_: {}): _194.MsgAdvanceEpochResponse;
            };
            QueryParamsRequest: {
                encode(_: _193.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryParamsRequest;
                fromPartial(_: {}): _193.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _193.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryParamsResponse;
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
                }): _193.QueryParamsResponse;
            };
            QueryPlansRequest: {
                encode(message: _193.QueryPlansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryPlansRequest;
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
                }): _193.QueryPlansRequest;
            };
            QueryPlansResponse: {
                encode(message: _193.QueryPlansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryPlansResponse;
                fromPartial(object: {
                    plans?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _193.QueryPlansResponse;
            };
            QueryPlanRequest: {
                encode(message: _193.QueryPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryPlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _193.QueryPlanRequest;
            };
            QueryPlanResponse: {
                encode(message: _193.QueryPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryPlanResponse;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _193.QueryPlanResponse;
            };
            QueryStakingsRequest: {
                encode(message: _193.QueryStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryStakingsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _193.QueryStakingsRequest;
            };
            QueryStakingsResponse: {
                encode(message: _193.QueryStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryStakingsResponse;
                fromPartial(object: {
                    stakedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    queuedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _193.QueryStakingsResponse;
            };
            QueryTotalStakingsRequest: {
                encode(message: _193.QueryTotalStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryTotalStakingsRequest;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                }): _193.QueryTotalStakingsRequest;
            };
            QueryTotalStakingsResponse: {
                encode(message: _193.QueryTotalStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryTotalStakingsResponse;
                fromPartial(object: {
                    amount?: string;
                }): _193.QueryTotalStakingsResponse;
            };
            QueryRewardsRequest: {
                encode(message: _193.QueryRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryRewardsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _193.QueryRewardsRequest;
            };
            QueryRewardsResponse: {
                encode(message: _193.QueryRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _193.QueryRewardsResponse;
            };
            QueryCurrentEpochDaysRequest: {
                encode(_: _193.QueryCurrentEpochDaysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryCurrentEpochDaysRequest;
                fromPartial(_: {}): _193.QueryCurrentEpochDaysRequest;
            };
            QueryCurrentEpochDaysResponse: {
                encode(message: _193.QueryCurrentEpochDaysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryCurrentEpochDaysResponse;
                fromPartial(object: {
                    currentEpochDays?: number;
                }): _193.QueryCurrentEpochDaysResponse;
            };
            PublicPlanProposal: {
                encode(message: _192.PublicPlanProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.PublicPlanProposal;
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
                }): _192.PublicPlanProposal;
            };
            AddPlanRequest: {
                encode(message: _192.AddPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.AddPlanRequest;
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
                }): _192.AddPlanRequest;
            };
            ModifyPlanRequest: {
                encode(message: _192.ModifyPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ModifyPlanRequest;
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
                }): _192.ModifyPlanRequest;
            };
            DeletePlanRequest: {
                encode(message: _192.DeletePlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.DeletePlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _192.DeletePlanRequest;
            };
            Params: {
                encode(message: _191.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Params;
                fromPartial(object: {
                    privatePlanCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    nextEpochDays?: number;
                    farmingFeeCollector?: string;
                    delayedStakingGasFee?: string | number | import("long");
                    maxNumPrivatePlans?: number;
                }): _191.Params;
            };
            GenesisState: {
                encode(message: _190.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.GenesisState;
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
                }): _190.GenesisState;
            };
            PlanRecord: {
                encode(message: _190.PlanRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.PlanRecord;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    farmingPoolCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _190.PlanRecord;
            };
            StakingRecord: {
                encode(message: _190.StakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.StakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    staking?: {
                        amount?: string;
                        startingEpoch?: string | number | import("long");
                    };
                }): _190.StakingRecord;
            };
            QueuedStakingRecord: {
                encode(message: _190.QueuedStakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueuedStakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    queuedStaking?: {
                        amount?: string;
                    };
                }): _190.QueuedStakingRecord;
            };
            TotalStakingsRecord: {
                encode(message: _190.TotalStakingsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.TotalStakingsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    amount?: string;
                    stakingReserveCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _190.TotalStakingsRecord;
            };
            HistoricalRewardsRecord: {
                encode(message: _190.HistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.HistoricalRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    epoch?: string | number | import("long");
                    historicalRewards?: {
                        cumulativeUnitRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _190.HistoricalRewardsRecord;
            };
            OutstandingRewardsRecord: {
                encode(message: _190.OutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.OutstandingRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    outstandingRewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _190.OutstandingRewardsRecord;
            };
            CurrentEpochRecord: {
                encode(message: _190.CurrentEpochRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.CurrentEpochRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    currentEpoch?: string | number | import("long");
                }): _190.CurrentEpochRecord;
            };
            planTypeFromJSON(object: any): _189.PlanType;
            planTypeToJSON(object: _189.PlanType): string;
            addressTypeFromJSON(object: any): _189.AddressType;
            addressTypeToJSON(object: _189.AddressType): string;
            PlanType: typeof _189.PlanType;
            PlanTypeSDKType: typeof _189.PlanType;
            AddressType: typeof _189.AddressType;
            AddressTypeSDKType: typeof _189.AddressType;
            BasePlan: {
                encode(message: _189.BasePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.BasePlan;
                fromPartial(object: {
                    id?: string | number | import("long");
                    name?: string;
                    type?: _189.PlanType;
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
                }): _189.BasePlan;
            };
            FixedAmountPlan: {
                encode(message: _189.FixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.FixedAmountPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _189.PlanType;
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
                }): _189.FixedAmountPlan;
            };
            RatioPlan: {
                encode(message: _189.RatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.RatioPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _189.PlanType;
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
                }): _189.RatioPlan;
            };
            Staking: {
                encode(message: _189.Staking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.Staking;
                fromPartial(object: {
                    amount?: string;
                    startingEpoch?: string | number | import("long");
                }): _189.Staking;
            };
            QueuedStaking: {
                encode(message: _189.QueuedStaking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.QueuedStaking;
                fromPartial(object: {
                    amount?: string;
                }): _189.QueuedStaking;
            };
            TotalStakings: {
                encode(message: _189.TotalStakings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.TotalStakings;
                fromPartial(object: {
                    amount?: string;
                }): _189.TotalStakings;
            };
            HistoricalRewards: {
                encode(message: _189.HistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.HistoricalRewards;
                fromPartial(object: {
                    cumulativeUnitRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _189.HistoricalRewards;
            };
            OutstandingRewards: {
                encode(message: _189.OutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.OutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _189.OutstandingRewards;
            };
            EventCreatePlan: {
                encode(message: _188.EventCreatePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.EventCreatePlan;
                fromPartial(object: {
                    planId?: string;
                    creator?: string;
                    poolAddress?: string;
                }): _188.EventCreatePlan;
            };
            EventFarm: {
                encode(message: _188.EventFarm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.EventFarm;
                fromPartial(object: {
                    farmer?: string;
                }): _188.EventFarm;
            };
            EventUnfarm: {
                encode(message: _188.EventUnfarm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.EventUnfarm;
                fromPartial(object: {
                    farmer?: string;
                }): _188.EventUnfarm;
            };
            EventHarvest: {
                encode(message: _188.EventHarvest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.EventHarvest;
                fromPartial(object: {
                    farmer?: string;
                }): _188.EventHarvest;
            };
            EventCancelPlan: {
                encode(message: _188.EventCancelPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.EventCancelPlan;
                fromPartial(object: {
                    farmer?: string;
                }): _188.EventCancelPlan;
            };
        };
    }
    namespace fees {
        const v1: {
            QueryClientImpl: typeof _496.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _199.QueryFeeTokensRequest): Promise<_199.QueryFeeTokensResponse>;
                denomSpotPrice(request: _199.QueryDenomSpotPriceRequest): Promise<_199.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _199.QueryDenomPoolIdRequest): Promise<_199.QueryDenomPoolIdResponse>;
                baseDenom(request?: _199.QueryBaseDenomRequest): Promise<_199.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _476.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _199.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryFeeTokensRequest;
                fromPartial(_: {}): _199.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _199.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryFeeTokensResponse;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    }[];
                }): _199.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _199.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomSpotPriceRequest;
                fromPartial(object: {
                    denom?: string;
                }): _199.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _199.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomSpotPriceResponse;
                fromPartial(object: {
                    denom?: string;
                    price?: string;
                }): _199.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _199.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomPoolIdRequest;
                fromPartial(object: {
                    denom?: string;
                }): _199.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _199.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomPoolIdResponse;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                }): _199.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _199.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryBaseDenomRequest;
                fromPartial(_: {}): _199.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _199.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryBaseDenomResponse;
                fromPartial(object: {
                    baseDenom?: string;
                }): _199.QueryBaseDenomResponse;
            };
            ProposalSetFeeToken: {
                encode(message: _198.ProposalSetFeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ProposalSetFeeToken;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feeToken?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    };
                }): _198.ProposalSetFeeToken;
            };
            Params: {
                encode(_: _197.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Params;
                fromPartial(_: {}): _197.Params;
            };
            GenesisState: {
                encode(message: _196.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.GenesisState;
                fromPartial(object: {
                    baseDenom?: string;
                    feeTokens?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    }[];
                }): _196.GenesisState;
            };
            FeeToken: {
                encode(message: _195.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.FeeToken;
                fromPartial(object: {
                    denom?: string;
                    poolId?: string | number | import("long");
                }): _195.FeeToken;
            };
        };
    }
    namespace grants {
        const v1: {
            MsgClientImpl: typeof _515.MsgClientImpl;
            QueryClientImpl: typeof _497.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
                auctions(request: _204.QueryAuctionsRequest): Promise<_204.QueryAuctionsResponse>;
                auction(request: _204.QueryAuctionRequest): Promise<_204.QueryAuctionResponse>;
                allowedBidder(request: _204.QueryAllowedBidderRequest): Promise<_204.QueryAllowedBidderResponse>;
                allowedBidders(request: _204.QueryAllowedBiddersRequest): Promise<_204.QueryAllowedBiddersResponse>;
                bids(request: _204.QueryBidsRequest): Promise<_204.QueryBidsResponse>;
                bid(request: _204.QueryBidRequest): Promise<_204.QueryBidResponse>;
                vestings(request: _204.QueryVestingsRequest): Promise<_204.QueryVestingsResponse>;
            };
            LCDQueryClient: typeof _477.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedPriceAuction(value: _205.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatchAuction(value: _205.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAuction(value: _205.MsgCancelAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    placeBid(value: _205.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyBid(value: _205.MsgModifyBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBidder(value: _205.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedPriceAuction(value: _205.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _205.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _205.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _205.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _205.MsgCancelAuction): {
                        typeUrl: string;
                        value: _205.MsgCancelAuction;
                    };
                    placeBid(value: _205.MsgPlaceBid): {
                        typeUrl: string;
                        value: _205.MsgPlaceBid;
                    };
                    modifyBid(value: _205.MsgModifyBid): {
                        typeUrl: string;
                        value: _205.MsgModifyBid;
                    };
                    addAllowedBidder(value: _205.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _205.MsgAddAllowedBidder;
                    };
                };
                fromPartial: {
                    createFixedPriceAuction(value: _205.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _205.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _205.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _205.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _205.MsgCancelAuction): {
                        typeUrl: string;
                        value: _205.MsgCancelAuction;
                    };
                    placeBid(value: _205.MsgPlaceBid): {
                        typeUrl: string;
                        value: _205.MsgPlaceBid;
                    };
                    modifyBid(value: _205.MsgModifyBid): {
                        typeUrl: string;
                        value: _205.MsgModifyBid;
                    };
                    addAllowedBidder(value: _205.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _205.MsgAddAllowedBidder;
                    };
                };
            };
            AminoConverter: {
                "/ollo.grants.v1.MsgCreateFixedPriceAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, sellingCoin, payingCoinDenom, vestingSchedules, startTime, endTime }: _205.MsgCreateFixedPriceAuction) => {
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
                    }) => _205.MsgCreateFixedPriceAuction;
                };
                "/ollo.grants.v1.MsgCreateBatchAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, minBidPrice, sellingCoin, payingCoinDenom, vestingSchedules, maxExtendedRound, extendedRoundRate, startTime, endTime }: _205.MsgCreateBatchAuction) => {
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
                    }) => _205.MsgCreateBatchAuction;
                };
                "/ollo.grants.v1.MsgCancelAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, auctionId }: _205.MsgCancelAuction) => {
                        auctioneer: string;
                        auction_id: string;
                    };
                    fromAmino: ({ auctioneer, auction_id }: {
                        auctioneer: string;
                        auction_id: string;
                    }) => _205.MsgCancelAuction;
                };
                "/ollo.grants.v1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidType, price, coin }: _205.MsgPlaceBid) => {
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
                    }) => _205.MsgPlaceBid;
                };
                "/ollo.grants.v1.MsgModifyBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidId, price, coin }: _205.MsgModifyBid) => {
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
                    }) => _205.MsgModifyBid;
                };
                "/ollo.grants.v1.MsgAddAllowedBidder": {
                    aminoType: string;
                    toAmino: ({ auctionId, allowedBidder }: _205.MsgAddAllowedBidder) => {
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
                    }) => _205.MsgAddAllowedBidder;
                };
            };
            MsgCreateFixedPriceAuction: {
                encode(message: _205.MsgCreateFixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgCreateFixedPriceAuction;
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
                }): _205.MsgCreateFixedPriceAuction;
            };
            MsgCreateFixedPriceAuctionResponse: {
                encode(_: _205.MsgCreateFixedPriceAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgCreateFixedPriceAuctionResponse;
                fromPartial(_: {}): _205.MsgCreateFixedPriceAuctionResponse;
            };
            MsgCreateBatchAuction: {
                encode(message: _205.MsgCreateBatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgCreateBatchAuction;
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
                }): _205.MsgCreateBatchAuction;
            };
            MsgCreateBatchAuctionResponse: {
                encode(_: _205.MsgCreateBatchAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgCreateBatchAuctionResponse;
                fromPartial(_: {}): _205.MsgCreateBatchAuctionResponse;
            };
            MsgCancelAuction: {
                encode(message: _205.MsgCancelAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgCancelAuction;
                fromPartial(object: {
                    auctioneer?: string;
                    auctionId?: string | number | import("long");
                }): _205.MsgCancelAuction;
            };
            MsgCancelAuctionResponse: {
                encode(_: _205.MsgCancelAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgCancelAuctionResponse;
                fromPartial(_: {}): _205.MsgCancelAuctionResponse;
            };
            MsgPlaceBid: {
                encode(message: _205.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgPlaceBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidType?: _202.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _205.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _205.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgPlaceBidResponse;
                fromPartial(_: {}): _205.MsgPlaceBidResponse;
            };
            MsgModifyBid: {
                encode(message: _205.MsgModifyBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgModifyBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidId?: string | number | import("long");
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _205.MsgModifyBid;
            };
            MsgModifyBidResponse: {
                encode(_: _205.MsgModifyBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgModifyBidResponse;
                fromPartial(_: {}): _205.MsgModifyBidResponse;
            };
            MsgAddAllowedBidder: {
                encode(message: _205.MsgAddAllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgAddAllowedBidder;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _205.MsgAddAllowedBidder;
            };
            MsgAddAllowedBidderResponse: {
                encode(_: _205.MsgAddAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgAddAllowedBidderResponse;
                fromPartial(_: {}): _205.MsgAddAllowedBidderResponse;
            };
            QueryParamsRequest: {
                encode(_: _204.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryParamsRequest;
                fromPartial(_: {}): _204.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _204.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryParamsResponse;
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
                }): _204.QueryParamsResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _204.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAuctionsRequest;
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
                }): _204.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _204.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAuctionsResponse;
                fromPartial(object: {
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _204.QueryAuctionsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _204.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAuctionRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _204.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _204.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAuctionResponse;
                fromPartial(object: {
                    auction?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _204.QueryAuctionResponse;
            };
            QueryAllowedBidderRequest: {
                encode(message: _204.QueryAllowedBidderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAllowedBidderRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                }): _204.QueryAllowedBidderRequest;
            };
            QueryAllowedBidderResponse: {
                encode(message: _204.QueryAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAllowedBidderResponse;
                fromPartial(object: {
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _204.QueryAllowedBidderResponse;
            };
            QueryAllowedBiddersRequest: {
                encode(message: _204.QueryAllowedBiddersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAllowedBiddersRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _204.QueryAllowedBiddersRequest;
            };
            QueryAllowedBiddersResponse: {
                encode(message: _204.QueryAllowedBiddersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryAllowedBiddersResponse;
                fromPartial(object: {
                    allowedBidders?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _204.QueryAllowedBiddersResponse;
            };
            QueryBidsRequest: {
                encode(message: _204.QueryBidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryBidsRequest;
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
                }): _204.QueryBidsRequest;
            };
            QueryBidsResponse: {
                encode(message: _204.QueryBidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryBidsResponse;
                fromPartial(object: {
                    bids?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _202.BidType;
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
                }): _204.QueryBidsResponse;
            };
            QueryBidRequest: {
                encode(message: _204.QueryBidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryBidRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidId?: string | number | import("long");
                }): _204.QueryBidRequest;
            };
            QueryBidResponse: {
                encode(message: _204.QueryBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryBidResponse;
                fromPartial(object: {
                    bid?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _202.BidType;
                        price?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        isMatched?: boolean;
                    };
                }): _204.QueryBidResponse;
            };
            QueryVestingsRequest: {
                encode(message: _204.QueryVestingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryVestingsRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _204.QueryVestingsRequest;
            };
            QueryVestingsResponse: {
                encode(message: _204.QueryVestingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryVestingsResponse;
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
                }): _204.QueryVestingsResponse;
            };
            Params: {
                encode(message: _203.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Params;
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
                }): _203.Params;
            };
            auctionTypeFromJSON(object: any): _202.AuctionType;
            auctionTypeToJSON(object: _202.AuctionType): string;
            auctionStatusFromJSON(object: any): _202.AuctionStatus;
            auctionStatusToJSON(object: _202.AuctionStatus): string;
            bidTypeFromJSON(object: any): _202.BidType;
            bidTypeToJSON(object: _202.BidType): string;
            addressTypeFromJSON(object: any): _202.AddressType;
            addressTypeToJSON(object: _202.AddressType): string;
            AuctionType: typeof _202.AuctionType;
            AuctionTypeSDKType: typeof _202.AuctionType;
            AuctionStatus: typeof _202.AuctionStatus;
            AuctionStatusSDKType: typeof _202.AuctionStatus;
            BidType: typeof _202.BidType;
            BidTypeSDKType: typeof _202.BidType;
            AddressType: typeof _202.AddressType;
            AddressTypeSDKType: typeof _202.AddressType;
            BaseAuction: {
                encode(message: _202.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.BaseAuction;
                fromPartial(object: {
                    id?: string | number | import("long");
                    type?: _202.AuctionType;
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
                    status?: _202.AuctionStatus;
                }): _202.BaseAuction;
            };
            FixedPriceAuction: {
                encode(message: _202.FixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.FixedPriceAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _202.AuctionType;
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
                        status?: _202.AuctionStatus;
                    };
                    remainingSellingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _202.FixedPriceAuction;
            };
            BatchAuction: {
                encode(message: _202.BatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.BatchAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _202.AuctionType;
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
                        status?: _202.AuctionStatus;
                    };
                    minBidPrice?: string;
                    matchedPrice?: string;
                    maxExtendedRound?: number;
                    extendedRoundRate?: string;
                }): _202.BatchAuction;
            };
            VestingSchedule: {
                encode(message: _202.VestingSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.VestingSchedule;
                fromPartial(object: {
                    releaseTime?: Date;
                    weight?: string;
                }): _202.VestingSchedule;
            };
            VestingQueue: {
                encode(message: _202.VestingQueue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.VestingQueue;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    auctioneer?: string;
                    payingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    releaseTime?: Date;
                    released?: boolean;
                }): _202.VestingQueue;
            };
            AllowedBidder: {
                encode(message: _202.AllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.AllowedBidder;
                fromPartial(object: {
                    bidder?: string;
                    maxBidAmount?: string;
                }): _202.AllowedBidder;
            };
            Bid: {
                encode(message: _202.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Bid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    id?: string | number | import("long");
                    type?: _202.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    isMatched?: boolean;
                }): _202.Bid;
            };
            AllowedBidderRecord: {
                encode(message: _202.AllowedBidderRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.AllowedBidderRecord;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _202.AllowedBidderRecord;
            };
            GenesisState: {
                encode(message: _201.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GenesisState;
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
                        type?: _202.BidType;
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
                }): _201.GenesisState;
            };
            EventPlaceBid: {
                encode(message: _200.EventPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.EventPlaceBid;
                fromPartial(object: {
                    id?: string;
                    creator?: string;
                }): _200.EventPlaceBid;
            };
            EventCancelBid: {
                encode(message: _200.EventCancelBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.EventCancelBid;
                fromPartial(object: {
                    id?: string;
                    creator?: string;
                }): _200.EventCancelBid;
            };
        };
    }
    namespace icq {
        const v1: {
            QueryClientImpl: typeof _498.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _478.LCDQueryClient;
            MsgCreateIcq: {
                encode(message: _212.MsgCreateIcq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgCreateIcq;
                fromPartial(object: {
                    id?: string;
                }): _212.MsgCreateIcq;
            };
            QueryParamsRequest: {
                encode(_: _211.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryParamsRequest;
                fromPartial(_: {}): _211.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _211.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        hostEnabled?: boolean;
                        allowQueries?: string[];
                    };
                }): _211.QueryParamsResponse;
            };
            Params: {
                encode(message: _210.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Params;
                fromPartial(object: {
                    hostEnabled?: boolean;
                    allowQueries?: string[];
                }): _210.Params;
            };
            InterchainQueryPacketData: {
                encode(message: _209.InterchainQueryPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.InterchainQueryPacketData;
                fromPartial(object: {
                    data?: Uint8Array;
                    memo?: string;
                }): _209.InterchainQueryPacketData;
            };
            InterchainQueryPacketAck: {
                encode(message: _209.InterchainQueryPacketAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.InterchainQueryPacketAck;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _209.InterchainQueryPacketAck;
            };
            CosmosQuery: {
                encode(message: _209.CosmosQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.CosmosQuery;
                fromPartial(object: {
                    requests?: {
                        data?: Uint8Array;
                        path?: string;
                        height?: string | number | import("long");
                        prove?: boolean;
                    }[];
                }): _209.CosmosQuery;
            };
            InterchainQuery: {
                encode(message: _208.InterchainQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.InterchainQuery;
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
                }): _208.InterchainQuery;
            };
            DataPoint: {
                encode(message: _208.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.DataPoint;
                fromPartial(object: {
                    id?: string;
                    remoteHeight?: string | number | import("long");
                    localHeight?: string;
                    value?: Uint8Array;
                }): _208.DataPoint;
            };
            GenesisState: {
                encode(message: _207.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.GenesisState;
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
                }): _207.GenesisState;
            };
            EventQuery: {
                encode(message: _206.EventQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.EventQuery;
                fromPartial(object: {
                    id?: string;
                }): _206.EventQuery;
            };
        };
    }
    namespace incentive {
        const v1: {
            MsgClientImpl: typeof _516.MsgClientImpl;
            QueryClientImpl: typeof _499.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _220.QueryParamsRequest): Promise<_220.QueryParamsResponse>;
                marketMakers(request: _220.QueryMarketMakersRequest): Promise<_220.QueryMarketMakersResponse>;
                incentive(request: _220.QueryIncentiveRequest): Promise<_220.QueryIncentiveResponse>;
            };
            LCDQueryClient: typeof _479.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    applyMarketMaker(value: _221.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimIncentive(value: _221.MsgClaimIncentive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    applyMarketMaker(value: _221.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: _221.MsgApplyMarketMaker;
                    };
                    claimIncentive(value: _221.MsgClaimIncentive): {
                        typeUrl: string;
                        value: _221.MsgClaimIncentive;
                    };
                };
                fromPartial: {
                    applyMarketMaker(value: _221.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: _221.MsgApplyMarketMaker;
                    };
                    claimIncentive(value: _221.MsgClaimIncentive): {
                        typeUrl: string;
                        value: _221.MsgClaimIncentive;
                    };
                };
            };
            AminoConverter: {
                "/ollo.incentive.v1.MsgApplyMarketMaker": {
                    aminoType: string;
                    toAmino: ({ address, pairIds }: _221.MsgApplyMarketMaker) => {
                        address: string;
                        pair_ids: string[];
                    };
                    fromAmino: ({ address, pair_ids }: {
                        address: string;
                        pair_ids: string[];
                    }) => _221.MsgApplyMarketMaker;
                };
                "/ollo.incentive.v1.MsgClaimIncentive": {
                    aminoType: string;
                    toAmino: ({ address }: _221.MsgClaimIncentive) => {
                        address: string;
                    };
                    fromAmino: ({ address }: {
                        address: string;
                    }) => _221.MsgClaimIncentive;
                };
            };
            MsgApplyMarketMaker: {
                encode(message: _221.MsgApplyMarketMaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgApplyMarketMaker;
                fromPartial(object: {
                    address?: string;
                    pairIds?: (string | number | import("long"))[];
                }): _221.MsgApplyMarketMaker;
            };
            MsgApplyMarketMakerResponse: {
                encode(_: _221.MsgApplyMarketMakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgApplyMarketMakerResponse;
                fromPartial(_: {}): _221.MsgApplyMarketMakerResponse;
            };
            MsgClaimIncentive: {
                encode(message: _221.MsgClaimIncentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgClaimIncentive;
                fromPartial(object: {
                    address?: string;
                }): _221.MsgClaimIncentive;
            };
            MsgClaimIncentiveResponse: {
                encode(_: _221.MsgClaimIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.MsgClaimIncentiveResponse;
                fromPartial(_: {}): _221.MsgClaimIncentiveResponse;
            };
            QueryParamsRequest: {
                encode(_: _220.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryParamsRequest;
                fromPartial(_: {}): _220.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _220.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryParamsResponse;
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
                }): _220.QueryParamsResponse;
            };
            QueryMarketMakersRequest: {
                encode(message: _220.QueryMarketMakersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryMarketMakersRequest;
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
                }): _220.QueryMarketMakersRequest;
            };
            QueryMarketMakersResponse: {
                encode(message: _220.QueryMarketMakersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryMarketMakersResponse;
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
                }): _220.QueryMarketMakersResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _220.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryIncentiveRequest;
                fromPartial(object: {
                    address?: string;
                }): _220.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _220.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryIncentiveResponse;
                fromPartial(object: {
                    incentive?: {
                        address?: string;
                        claimable?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _220.QueryIncentiveResponse;
            };
            MarketMakerProposal: {
                encode(message: _219.MarketMakerProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MarketMakerProposal;
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
                }): _219.MarketMakerProposal;
            };
            Params: {
                encode(message: _218.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Params;
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
                }): _218.Params;
            };
            MarketMaker: {
                encode(message: _217.MarketMaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MarketMaker;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    eligible?: boolean;
                }): _217.MarketMaker;
            };
            MarketMakerIncl: {
                encode(message: _217.MarketMakerIncl, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MarketMakerIncl;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                }): _217.MarketMakerIncl;
            };
            Incentive: {
                encode(message: _216.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.Incentive;
                fromPartial(object: {
                    address?: string;
                    claimable?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _216.Incentive;
            };
            IncentiveProps: {
                encode(message: _216.IncentiveProps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.IncentiveProps;
                fromPartial(object: {
                    minOpenRatio?: string;
                    minOpenDepthRatio?: string;
                    maxDowntime?: number;
                    maxTotalDowntime?: number;
                    minHours?: number;
                    minDays?: number;
                }): _216.IncentiveProps;
            };
            IncentivePair: {
                encode(message: _216.IncentivePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.IncentivePair;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    updatedAt?: Date;
                    incentiveWeight?: string;
                    maxSpread?: string;
                    minSpread?: string;
                    minDepth?: string;
                }): _216.IncentivePair;
            };
            IncentiveDistribution: {
                encode(message: _216.IncentiveDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.IncentiveDistribution;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _216.IncentiveDistribution;
            };
            GenesisState: {
                encode(message: _215.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.GenesisState;
                fromPartial(object: {
                    depositRecords?: {
                        address?: string;
                        pairId?: string | number | import("long");
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _215.GenesisState;
            };
            EventNewReward: {
                encode(message: _214.EventNewReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.EventNewReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _214.EventNewReward;
            };
            Deposit: {
                encode(message: _213.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Deposit;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _213.Deposit;
            };
            DepositRecord: {
                encode(message: _213.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.DepositRecord;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _213.DepositRecord;
            };
        };
    }
    namespace lend {
        const v1: {
            MsgClientImpl: typeof _517.MsgClientImpl;
            QueryClientImpl: typeof _500.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _228.QueryParamsRequest): Promise<_228.QueryParamsResponse>;
                loan(request: _228.QueryGetLoanRequest): Promise<_228.QueryGetLoanResponse>;
                loanAll(request?: _228.QueryAllLoanRequest): Promise<_228.QueryAllLoanResponse>;
            };
            LCDQueryClient: typeof _480.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    requestLoan(value: _229.MsgRequestLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    approveLoan(value: _229.MsgApproveLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayLoan(value: _229.MsgRepayLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidateLoan(value: _229.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelLoan(value: _229.MsgCancelLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    requestLoan(value: _229.MsgRequestLoan): {
                        typeUrl: string;
                        value: _229.MsgRequestLoan;
                    };
                    approveLoan(value: _229.MsgApproveLoan): {
                        typeUrl: string;
                        value: _229.MsgApproveLoan;
                    };
                    repayLoan(value: _229.MsgRepayLoan): {
                        typeUrl: string;
                        value: _229.MsgRepayLoan;
                    };
                    liquidateLoan(value: _229.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _229.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _229.MsgCancelLoan): {
                        typeUrl: string;
                        value: _229.MsgCancelLoan;
                    };
                };
                fromPartial: {
                    requestLoan(value: _229.MsgRequestLoan): {
                        typeUrl: string;
                        value: _229.MsgRequestLoan;
                    };
                    approveLoan(value: _229.MsgApproveLoan): {
                        typeUrl: string;
                        value: _229.MsgApproveLoan;
                    };
                    repayLoan(value: _229.MsgRepayLoan): {
                        typeUrl: string;
                        value: _229.MsgRepayLoan;
                    };
                    liquidateLoan(value: _229.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _229.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _229.MsgCancelLoan): {
                        typeUrl: string;
                        value: _229.MsgCancelLoan;
                    };
                };
            };
            AminoConverter: {
                "/ollo.lend.v1.MsgRequestLoan": {
                    aminoType: string;
                    toAmino: ({ creator, amount, collateral, fee, deadline }: _229.MsgRequestLoan) => {
                        creator: string;
                        amount: string;
                        collateral: string;
                        fee: string;
                        deadline: string;
                    };
                    fromAmino: ({ creator, amount, collateral, fee, deadline }: {
                        creator: string;
                        amount: string;
                        collateral: string;
                        fee: string;
                        deadline: string;
                    }) => _229.MsgRequestLoan;
                };
                "/ollo.lend.v1.MsgApproveLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _229.MsgApproveLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _229.MsgApproveLoan;
                };
                "/ollo.lend.v1.MsgRepayLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _229.MsgRepayLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _229.MsgRepayLoan;
                };
                "/ollo.lend.v1.MsgLiquidateLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _229.MsgLiquidateLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _229.MsgLiquidateLoan;
                };
                "/ollo.lend.v1.MsgCancelLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _229.MsgCancelLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _229.MsgCancelLoan;
                };
            };
            MsgRequestLoan: {
                encode(message: _229.MsgRequestLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgRequestLoan;
                fromPartial(object: {
                    creator?: string;
                    amount?: string;
                    collateral?: string;
                    fee?: string;
                    deadline?: string;
                }): _229.MsgRequestLoan;
            };
            MsgRequestLoanResponse: {
                encode(_: _229.MsgRequestLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgRequestLoanResponse;
                fromPartial(_: {}): _229.MsgRequestLoanResponse;
            };
            MsgApproveLoan: {
                encode(message: _229.MsgApproveLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgApproveLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _229.MsgApproveLoan;
            };
            MsgApproveLoanResponse: {
                encode(_: _229.MsgApproveLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgApproveLoanResponse;
                fromPartial(_: {}): _229.MsgApproveLoanResponse;
            };
            MsgRepayLoan: {
                encode(message: _229.MsgRepayLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgRepayLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _229.MsgRepayLoan;
            };
            MsgRepayLoanResponse: {
                encode(_: _229.MsgRepayLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgRepayLoanResponse;
                fromPartial(_: {}): _229.MsgRepayLoanResponse;
            };
            MsgLiquidateLoan: {
                encode(message: _229.MsgLiquidateLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgLiquidateLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _229.MsgLiquidateLoan;
            };
            MsgLiquidateLoanResponse: {
                encode(_: _229.MsgLiquidateLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgLiquidateLoanResponse;
                fromPartial(_: {}): _229.MsgLiquidateLoanResponse;
            };
            MsgCancelLoan: {
                encode(message: _229.MsgCancelLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgCancelLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _229.MsgCancelLoan;
            };
            MsgCancelLoanResponse: {
                encode(_: _229.MsgCancelLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgCancelLoanResponse;
                fromPartial(_: {}): _229.MsgCancelLoanResponse;
            };
            QueryParamsRequest: {
                encode(_: _228.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryParamsRequest;
                fromPartial(_: {}): _228.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _228.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _228.QueryParamsResponse;
            };
            QueryGetLoanRequest: {
                encode(message: _228.QueryGetLoanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryGetLoanRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _228.QueryGetLoanRequest;
            };
            QueryGetLoanResponse: {
                encode(message: _228.QueryGetLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryGetLoanResponse;
                fromPartial(object: {
                    Loan?: {
                        id?: string | number | import("long");
                        borrower?: string;
                        lender?: string;
                        amount?: string;
                        collateral?: string;
                        fee?: string;
                        deadline?: string;
                        status?: string;
                    };
                }): _228.QueryGetLoanResponse;
            };
            QueryAllLoanRequest: {
                encode(message: _228.QueryAllLoanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryAllLoanRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _228.QueryAllLoanRequest;
            };
            QueryAllLoanResponse: {
                encode(message: _228.QueryAllLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryAllLoanResponse;
                fromPartial(object: {
                    Loan?: {
                        id?: string | number | import("long");
                        borrower?: string;
                        lender?: string;
                        amount?: string;
                        collateral?: string;
                        fee?: string;
                        deadline?: string;
                        status?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _228.QueryAllLoanResponse;
            };
            ProprosalSetLendingFee: {
                encode(_: _227.ProprosalSetLendingFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.ProprosalSetLendingFee;
                fromPartial(_: {}): _227.ProprosalSetLendingFee;
            };
            Params: {
                encode(_: _226.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Params;
                fromPartial(_: {}): _226.Params;
            };
            loanStatusFromJSON(object: any): _225.LoanStatus;
            loanStatusToJSON(object: _225.LoanStatus): string;
            LoanStatus: typeof _225.LoanStatus;
            LoanStatusSDKType: typeof _225.LoanStatus;
            Loan: {
                encode(message: _225.Loan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.Loan;
                fromPartial(object: {
                    id?: string | number | import("long");
                    borrower?: string;
                    lender?: string;
                    amount?: string;
                    collateral?: string;
                    fee?: string;
                    deadline?: string;
                    status?: string;
                }): _225.Loan;
            };
            LoanEntry: {
                encode(message: _225.LoanEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.LoanEntry;
                fromPartial(object: {
                    lender?: string;
                    createdAt?: Date;
                    amountIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    assetId?: string | number | import("long");
                }): _225.LoanEntry;
            };
            GenesisState: {
                encode(message: _224.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.GenesisState;
                fromPartial(object: {
                    params?: {};
                    loanList?: {
                        id?: string | number | import("long");
                        borrower?: string;
                        lender?: string;
                        amount?: string;
                        collateral?: string;
                        fee?: string;
                        deadline?: string;
                        status?: string;
                    }[];
                    loanCount?: string | number | import("long");
                }): _224.GenesisState;
            };
            EventLoanCreated: {
                encode(_: _223.EventLoanCreated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.EventLoanCreated;
                fromPartial(_: {}): _223.EventLoanCreated;
            };
            EventLoanLiquidated: {
                encode(_: _223.EventLoanLiquidated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.EventLoanLiquidated;
                fromPartial(_: {}): _223.EventLoanLiquidated;
            };
            EventLoanRepaid: {
                encode(_: _223.EventLoanRepaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.EventLoanRepaid;
                fromPartial(_: {}): _223.EventLoanRepaid;
            };
            Borrow: {
                encode(message: _222.Borrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Borrow;
                fromPartial(object: {
                    borrower?: string;
                    createdAt?: Date;
                    amountOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    assetId?: string | number | import("long");
                }): _222.Borrow;
            };
        };
    }
    namespace liquidity {
        const v1: {
            MsgClientImpl: typeof _518.MsgClientImpl;
            QueryClientImpl: typeof _501.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _238.QueryParamsRequest): Promise<_238.QueryParamsResponse>;
                pools(request: _238.QueryPoolsRequest): Promise<_238.QueryPoolsResponse>;
                pool(request: _238.QueryPoolRequest): Promise<_238.QueryPoolResponse>;
                poolByReserveAddress(request: _238.QueryPoolByReserveAddressRequest): Promise<_238.QueryPoolResponse>;
                poolByPoolCoinDenom(request: _238.QueryPoolByPoolCoinDenomRequest): Promise<_238.QueryPoolResponse>;
                pairs(request: _238.QueryPairsRequest): Promise<_238.QueryPairsResponse>;
                pair(request: _238.QueryPairRequest): Promise<_238.QueryPairResponse>;
                depositRequests(request: _238.QueryDepositRequestsRequest): Promise<_238.QueryDepositRequestsResponse>;
                depositRequest(request: _238.QueryDepositRequestRequest): Promise<_238.QueryDepositRequestResponse>;
                withdrawRequests(request: _238.QueryWithdrawRequestsRequest): Promise<_238.QueryWithdrawRequestsResponse>;
                withdrawRequest(request: _238.QueryWithdrawRequestRequest): Promise<_238.QueryWithdrawRequestResponse>;
                orders(request: _238.QueryOrdersRequest): Promise<_238.QueryOrdersResponse>;
                order(request: _238.QueryOrderRequest): Promise<_238.QueryOrderResponse>;
                ordersByOrderer(request: _238.QueryOrdersByOrdererRequest): Promise<_238.QueryOrdersResponse>;
                orderBooks(request: _238.QueryOrderBooksRequest): Promise<_238.QueryOrderBooksResponse>;
                numMMOrders(request: _238.QueryNumMMOrdersRequest): Promise<_238.QueryNumMMOrdersResponse>;
            };
            LCDQueryClient: typeof _481.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPair(value: _241.MsgCreatePair): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _241.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRangedPool(value: _241.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _241.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _241.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    limitOrder(value: _241.MsgLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _241.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mMOrder(value: _241.MsgMMOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _241.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAllOrders(value: _241.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPair(value: _241.MsgCreatePair): {
                        typeUrl: string;
                        value: _241.MsgCreatePair;
                    };
                    createPool(value: _241.MsgCreatePool): {
                        typeUrl: string;
                        value: _241.MsgCreatePool;
                    };
                    createRangedPool(value: _241.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: _241.MsgCreateRangedPool;
                    };
                    deposit(value: _241.MsgDeposit): {
                        typeUrl: string;
                        value: _241.MsgDeposit;
                    };
                    withdraw(value: _241.MsgWithdraw): {
                        typeUrl: string;
                        value: _241.MsgWithdraw;
                    };
                    limitOrder(value: _241.MsgLimitOrder): {
                        typeUrl: string;
                        value: _241.MsgLimitOrder;
                    };
                    marketOrder(value: _241.MsgMarketOrder): {
                        typeUrl: string;
                        value: _241.MsgMarketOrder;
                    };
                    mMOrder(value: _241.MsgMMOrder): {
                        typeUrl: string;
                        value: _241.MsgMMOrder;
                    };
                    cancelOrder(value: _241.MsgCancelOrder): {
                        typeUrl: string;
                        value: _241.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _241.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _241.MsgCancelAllOrders;
                    };
                };
                fromPartial: {
                    createPair(value: _241.MsgCreatePair): {
                        typeUrl: string;
                        value: _241.MsgCreatePair;
                    };
                    createPool(value: _241.MsgCreatePool): {
                        typeUrl: string;
                        value: _241.MsgCreatePool;
                    };
                    createRangedPool(value: _241.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: _241.MsgCreateRangedPool;
                    };
                    deposit(value: _241.MsgDeposit): {
                        typeUrl: string;
                        value: _241.MsgDeposit;
                    };
                    withdraw(value: _241.MsgWithdraw): {
                        typeUrl: string;
                        value: _241.MsgWithdraw;
                    };
                    limitOrder(value: _241.MsgLimitOrder): {
                        typeUrl: string;
                        value: _241.MsgLimitOrder;
                    };
                    marketOrder(value: _241.MsgMarketOrder): {
                        typeUrl: string;
                        value: _241.MsgMarketOrder;
                    };
                    mMOrder(value: _241.MsgMMOrder): {
                        typeUrl: string;
                        value: _241.MsgMMOrder;
                    };
                    cancelOrder(value: _241.MsgCancelOrder): {
                        typeUrl: string;
                        value: _241.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _241.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _241.MsgCancelAllOrders;
                    };
                };
            };
            AminoConverter: {
                "/ollo.liquidity.v1.MsgCreatePair": {
                    aminoType: string;
                    toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: _241.MsgCreatePair) => {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    };
                    fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    }) => _241.MsgCreatePair;
                };
                "/ollo.liquidity.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ creator, pairId, depositCoins }: _241.MsgCreatePool) => {
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
                    }) => _241.MsgCreatePool;
                };
                "/ollo.liquidity.v1.MsgCreateRangedPool": {
                    aminoType: string;
                    toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: _241.MsgCreateRangedPool) => {
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
                    }) => _241.MsgCreateRangedPool;
                };
                "/ollo.liquidity.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, poolId, depositCoins }: _241.MsgDeposit) => {
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
                    }) => _241.MsgDeposit;
                };
                "/ollo.liquidity.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ withdrawer, poolId, poolCoin }: _241.MsgWithdraw) => {
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
                    }) => _241.MsgWithdraw;
                };
                "/ollo.liquidity.v1.MsgLimitOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _241.MsgLimitOrder) => {
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
                    }) => _241.MsgLimitOrder;
                };
                "/ollo.liquidity.v1.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: _241.MsgMarketOrder) => {
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
                    }) => _241.MsgMarketOrder;
                };
                "/ollo.liquidity.v1.MsgMMOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _241.MsgMMOrder) => {
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
                    }) => _241.MsgMMOrder;
                };
                "/ollo.liquidity.v1.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, orderId }: _241.MsgCancelOrder) => {
                        orderer: string;
                        pair_id: string;
                        order_id: string;
                    };
                    fromAmino: ({ orderer, pair_id, order_id }: {
                        orderer: string;
                        pair_id: string;
                        order_id: string;
                    }) => _241.MsgCancelOrder;
                };
                "/ollo.liquidity.v1.MsgCancelAllOrders": {
                    aminoType: string;
                    toAmino: ({ orderer, pairIds }: _241.MsgCancelAllOrders) => {
                        orderer: string;
                        pair_ids: string[];
                    };
                    fromAmino: ({ orderer, pair_ids }: {
                        orderer: string;
                        pair_ids: string[];
                    }) => _241.MsgCancelAllOrders;
                };
            };
            MsgCreatePair: {
                encode(message: _241.MsgCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCreatePair;
                fromPartial(object: {
                    creator?: string;
                    baseCoinDenom?: string;
                    quoteCoinDenom?: string;
                }): _241.MsgCreatePair;
            };
            MsgCreatePairResponse: {
                encode(_: _241.MsgCreatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCreatePairResponse;
                fromPartial(_: {}): _241.MsgCreatePairResponse;
            };
            MsgCreatePool: {
                encode(message: _241.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    pairId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _241.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _241.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCreatePoolResponse;
                fromPartial(_: {}): _241.MsgCreatePoolResponse;
            };
            MsgCreateRangedPool: {
                encode(message: _241.MsgCreateRangedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCreateRangedPool;
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
                }): _241.MsgCreateRangedPool;
            };
            MsgCreateRangedPoolResponse: {
                encode(_: _241.MsgCreateRangedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCreateRangedPoolResponse;
                fromPartial(_: {}): _241.MsgCreateRangedPoolResponse;
            };
            MsgDeposit: {
                encode(message: _241.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgDeposit;
                fromPartial(object: {
                    depositor?: string;
                    poolId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _241.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _241.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgDepositResponse;
                fromPartial(_: {}): _241.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _241.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgWithdraw;
                fromPartial(object: {
                    withdrawer?: string;
                    poolId?: string | number | import("long");
                    poolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _241.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _241.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgWithdrawResponse;
                fromPartial(_: {}): _241.MsgWithdrawResponse;
            };
            MsgLimitOrder: {
                encode(message: _241.MsgLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgLimitOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _233.OrderDirection;
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
                }): _241.MsgLimitOrder;
            };
            MsgLimitOrderResponse: {
                encode(_: _241.MsgLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgLimitOrderResponse;
                fromPartial(_: {}): _241.MsgLimitOrderResponse;
            };
            MsgMarketOrder: {
                encode(message: _241.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgMarketOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _233.OrderDirection;
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
                }): _241.MsgMarketOrder;
            };
            MsgMarketOrderResponse: {
                encode(_: _241.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgMarketOrderResponse;
                fromPartial(_: {}): _241.MsgMarketOrderResponse;
            };
            MsgMMOrder: {
                encode(message: _241.MsgMMOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgMMOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _233.OrderDirection;
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
                }): _241.MsgMMOrder;
            };
            MsgMMOrderResponse: {
                encode(_: _241.MsgMMOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgMMOrderResponse;
                fromPartial(_: {}): _241.MsgMMOrderResponse;
            };
            MsgCancelOrder: {
                encode(message: _241.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCancelOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    orderId?: string | number | import("long");
                }): _241.MsgCancelOrder;
            };
            MsgCancelOrderResponse: {
                encode(_: _241.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCancelOrderResponse;
                fromPartial(_: {}): _241.MsgCancelOrderResponse;
            };
            MsgCancelAllOrders: {
                encode(message: _241.MsgCancelAllOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCancelAllOrders;
                fromPartial(object: {
                    orderer?: string;
                    pairIds?: (string | number | import("long"))[];
                }): _241.MsgCancelAllOrders;
            };
            MsgCancelAllOrdersResponse: {
                encode(_: _241.MsgCancelAllOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgCancelAllOrdersResponse;
                fromPartial(_: {}): _241.MsgCancelAllOrdersResponse;
            };
            ConstantProductPool: {
                encode(message: _240.ConstantProductPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.ConstantProductPool;
                fromPartial(object: {
                    poolId?: string;
                    pairId?: string | number | import("long");
                    poolCoinDenom?: string;
                    reserveAccountAddress?: string;
                }): _240.ConstantProductPool;
            };
            RangedPool: {
                encode(message: _239.RangedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.RangedPool;
                fromPartial(object: {
                    id?: string;
                }): _239.RangedPool;
            };
            QueryParamsRequest: {
                encode(_: _238.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryParamsRequest;
                fromPartial(_: {}): _238.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _238.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryParamsResponse;
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
                }): _238.QueryParamsResponse;
            };
            QueryPoolsRequest: {
                encode(message: _238.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPoolsRequest;
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
                }): _238.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _238.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPoolsResponse;
                fromPartial(object: {
                    pools?: {
                        type?: _236.PoolType;
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
                }): _238.QueryPoolsResponse;
            };
            QueryPoolRequest: {
                encode(message: _238.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPoolRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                }): _238.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _238.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        type?: _236.PoolType;
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
                }): _238.QueryPoolResponse;
            };
            QueryPoolByReserveAddressRequest: {
                encode(message: _238.QueryPoolByReserveAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPoolByReserveAddressRequest;
                fromPartial(object: {
                    reserveAddress?: string;
                }): _238.QueryPoolByReserveAddressRequest;
            };
            QueryPoolByPoolCoinDenomRequest: {
                encode(message: _238.QueryPoolByPoolCoinDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPoolByPoolCoinDenomRequest;
                fromPartial(object: {
                    poolCoinDenom?: string;
                }): _238.QueryPoolByPoolCoinDenomRequest;
            };
            QueryPairsRequest: {
                encode(message: _238.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPairsRequest;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _238.QueryPairsRequest;
            };
            QueryPairsResponse: {
                encode(message: _238.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPairsResponse;
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
                }): _238.QueryPairsResponse;
            };
            QueryPairRequest: {
                encode(message: _238.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPairRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                }): _238.QueryPairRequest;
            };
            QueryPairResponse: {
                encode(message: _238.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryPairResponse;
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
                }): _238.QueryPairResponse;
            };
            QueryDepositRequestsRequest: {
                encode(message: _238.QueryDepositRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryDepositRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _238.QueryDepositRequestsRequest;
            };
            QueryDepositRequestsResponse: {
                encode(message: _238.QueryDepositRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryDepositRequestsResponse;
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
                        status?: _233.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _238.QueryDepositRequestsResponse;
            };
            QueryDepositRequestRequest: {
                encode(message: _238.QueryDepositRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryDepositRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _238.QueryDepositRequestRequest;
            };
            QueryDepositRequestResponse: {
                encode(message: _238.QueryDepositRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryDepositRequestResponse;
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
                        status?: _233.RequestStatus;
                    };
                }): _238.QueryDepositRequestResponse;
            };
            QueryWithdrawRequestsRequest: {
                encode(message: _238.QueryWithdrawRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryWithdrawRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _238.QueryWithdrawRequestsRequest;
            };
            QueryWithdrawRequestsResponse: {
                encode(message: _238.QueryWithdrawRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryWithdrawRequestsResponse;
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
                        status?: _233.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _238.QueryWithdrawRequestsResponse;
            };
            QueryWithdrawRequestRequest: {
                encode(message: _238.QueryWithdrawRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryWithdrawRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _238.QueryWithdrawRequestRequest;
            };
            QueryWithdrawRequestResponse: {
                encode(message: _238.QueryWithdrawRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryWithdrawRequestResponse;
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
                        status?: _233.RequestStatus;
                    };
                }): _238.QueryWithdrawRequestResponse;
            };
            QueryOrdersRequest: {
                encode(message: _238.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryOrdersRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _238.QueryOrdersRequest;
            };
            QueryOrdersResponse: {
                encode(message: _238.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        type?: _233.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _233.OrderDirection;
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
                        status?: _233.OrderStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _238.QueryOrdersResponse;
            };
            QueryOrderRequest: {
                encode(message: _238.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryOrderRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _238.QueryOrderRequest;
            };
            QueryOrderResponse: {
                encode(message: _238.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryOrderResponse;
                fromPartial(object: {
                    order?: {
                        type?: _233.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _233.OrderDirection;
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
                        status?: _233.OrderStatus;
                    };
                }): _238.QueryOrderResponse;
            };
            QueryOrdersByOrdererRequest: {
                encode(message: _238.QueryOrdersByOrdererRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryOrdersByOrdererRequest;
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
                }): _238.QueryOrdersByOrdererRequest;
            };
            QueryOrderBooksRequest: {
                encode(message: _238.QueryOrderBooksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryOrderBooksRequest;
                fromPartial(object: {
                    pairIds?: (string | number | import("long"))[];
                    priceUnitPowers?: number[];
                    numTicks?: number;
                }): _238.QueryOrderBooksRequest;
            };
            QueryOrderBooksResponse: {
                encode(message: _238.QueryOrderBooksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryOrderBooksResponse;
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
                }): _238.QueryOrderBooksResponse;
            };
            QueryNumMMOrdersRequest: {
                encode(message: _238.QueryNumMMOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryNumMMOrdersRequest;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                }): _238.QueryNumMMOrdersRequest;
            };
            QueryNumMMOrdersResponse: {
                encode(message: _238.QueryNumMMOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.QueryNumMMOrdersResponse;
                fromPartial(object: {
                    numMarketMakingOrders?: number;
                }): _238.QueryNumMMOrdersResponse;
            };
            PoolResponse: {
                encode(message: _238.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.PoolResponse;
                fromPartial(object: {
                    type?: _236.PoolType;
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
                }): _238.PoolResponse;
            };
            PoolBalances: {
                encode(message: _238.PoolBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.PoolBalances;
                fromPartial(object: {
                    baseCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    quoteCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _238.PoolBalances;
            };
            OrderBookPairResponse: {
                encode(message: _238.OrderBookPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.OrderBookPairResponse;
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
                }): _238.OrderBookPairResponse;
            };
            OrderBookResponse: {
                encode(message: _238.OrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.OrderBookResponse;
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
                }): _238.OrderBookResponse;
            };
            OrderBookTickResponse: {
                encode(message: _238.OrderBookTickResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.OrderBookTickResponse;
                fromPartial(object: {
                    price?: string;
                    userOrderAmount?: string;
                    poolOrderAmount?: string;
                }): _238.OrderBookTickResponse;
            };
            ProprosalSetPoolParams: {
                encode(_: _237.ProprosalSetPoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.ProprosalSetPoolParams;
                fromPartial(_: {}): _237.ProprosalSetPoolParams;
            };
            poolTypeFromJSON(object: any): _236.PoolType;
            poolTypeToJSON(object: _236.PoolType): string;
            PoolType: typeof _236.PoolType;
            PoolTypeSDKType: typeof _236.PoolType;
            Pool: {
                encode(message: _236.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Pool;
                fromPartial(object: {
                    type?: _236.PoolType;
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
                }): _236.Pool;
            };
            Params: {
                encode(message: _235.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Params;
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
                }): _235.Params;
            };
            Pair: {
                encode(message: _234.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Pair;
                fromPartial(object: {
                    id?: string | number | import("long");
                    baseCoinDenom?: string;
                    quoteCoinDenom?: string;
                    escrowAddress?: string;
                    lastOrderId?: string | number | import("long");
                    lastPrice?: string;
                    currentBatchId?: string | number | import("long");
                }): _234.Pair;
            };
            orderTypeFromJSON(object: any): _233.OrderType;
            orderTypeToJSON(object: _233.OrderType): string;
            orderDirectionFromJSON(object: any): _233.OrderDirection;
            orderDirectionToJSON(object: _233.OrderDirection): string;
            requestStatusFromJSON(object: any): _233.RequestStatus;
            requestStatusToJSON(object: _233.RequestStatus): string;
            orderStatusFromJSON(object: any): _233.OrderStatus;
            orderStatusToJSON(object: _233.OrderStatus): string;
            OrderType: typeof _233.OrderType;
            OrderTypeSDKType: typeof _233.OrderType;
            OrderDirection: typeof _233.OrderDirection;
            OrderDirectionSDKType: typeof _233.OrderDirection;
            RequestStatus: typeof _233.RequestStatus;
            RequestStatusSDKType: typeof _233.RequestStatus;
            OrderStatus: typeof _233.OrderStatus;
            OrderStatusSDKType: typeof _233.OrderStatus;
            Order: {
                encode(message: _233.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.Order;
                fromPartial(object: {
                    type?: _233.OrderType;
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    msgHeight?: string | number | import("long");
                    orderer?: string;
                    direction?: _233.OrderDirection;
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
                    status?: _233.OrderStatus;
                }): _233.Order;
            };
            DepositRequest: {
                encode(message: _232.DepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.DepositRequest;
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
                    status?: _233.RequestStatus;
                }): _232.DepositRequest;
            };
            WithdrawRequest: {
                encode(message: _232.WithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.WithdrawRequest;
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
                    status?: _233.RequestStatus;
                }): _232.WithdrawRequest;
            };
            GenesisState: {
                encode(message: _231.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.GenesisState;
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
                        type?: _236.PoolType;
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
                        status?: _233.RequestStatus;
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
                        status?: _233.RequestStatus;
                    }[];
                    orders?: {
                        type?: _233.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _233.OrderDirection;
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
                        status?: _233.OrderStatus;
                    }[];
                    numMarketMakingOrdersRecords?: {
                        orderer?: string;
                        pairId?: string | number | import("long");
                        numMarketMakingOrders?: number;
                    }[];
                }): _231.GenesisState;
            };
            NumMMOrdersRecord: {
                encode(message: _231.NumMMOrdersRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.NumMMOrdersRecord;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    numMarketMakingOrders?: number;
                }): _231.NumMMOrdersRecord;
            };
            EventDepositLiquidity: {
                encode(_: _230.EventDepositLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.EventDepositLiquidity;
                fromPartial(_: {}): _230.EventDepositLiquidity;
            };
            EventWithdrawLiquidity: {
                encode(_: _230.EventWithdrawLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.EventWithdrawLiquidity;
                fromPartial(_: {}): _230.EventWithdrawLiquidity;
            };
            EventCreatePool: {
                encode(_: _230.EventCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.EventCreatePool;
                fromPartial(_: {}): _230.EventCreatePool;
            };
            EventCreatePair: {
                encode(_: _230.EventCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.EventCreatePair;
                fromPartial(_: {}): _230.EventCreatePair;
            };
        };
    }
    namespace lock {
        const v1: {
            MsgClientImpl: typeof _519.MsgClientImpl;
            QueryClientImpl: typeof _502.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryParams(request?: _246.QueryParamsRequest): Promise<_246.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _482.LCDQueryClient;
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
            QueryClientImpl: typeof _503.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _255.QueryParamsRequest): Promise<_255.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _483.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _255.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryParamsRequest;
                fromPartial(_: {}): _255.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _255.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        commission?: string;
                        bidCloseDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        distribution?: {
                            staking?: string;
                            communityPool?: string;
                        };
                    };
                }): _255.QueryParamsResponse;
            };
            ProprosalSetCommission: {
                encode(message: _254.ProprosalSetCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.ProprosalSetCommission;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _254.ProprosalSetCommission;
            };
            Distribution: {
                encode(message: _253.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Distribution;
                fromPartial(object: {
                    staking?: string;
                    communityPool?: string;
                }): _253.Distribution;
            };
            Params: {
                encode(message: _253.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Params;
                fromPartial(object: {
                    commission?: string;
                    bidCloseDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    distribution?: {
                        staking?: string;
                        communityPool?: string;
                    };
                }): _253.Params;
            };
            MarketPacketData: {
                encode(message: _252.MarketPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MarketPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _252.MarketPacketData;
            };
            NoData: {
                encode(_: _252.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.NoData;
                fromPartial(_: {}): _252.NoData;
            };
            nftAuctionStatusFromJSON(object: any): _251.NftAuctionStatus;
            nftAuctionStatusToJSON(object: _251.NftAuctionStatus): string;
            NftAuctionStatus: typeof _251.NftAuctionStatus;
            NftAuctionStatusSDKType: typeof _251.NftAuctionStatus;
            NftAuctionBid: {
                encode(message: _251.NftAuctionBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.NftAuctionBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    time?: Date;
                }): _251.NftAuctionBid;
            };
            NftAuction: {
                encode(message: _251.NftAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.NftAuction;
                fromPartial(object: {
                    id?: string | number | import("long");
                    nftId?: string;
                    denomId?: string;
                    owner?: string;
                    startPrice?: {
                        denom?: string;
                        amount?: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                }): _251.NftAuction;
            };
            Market: {
                encode(message: _251.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.Market;
                fromPartial(object: {
                    id?: string;
                }): _251.Market;
            };
            NftListing: {
                encode(message: _250.NftListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.NftListing;
                fromPartial(object: {
                    id?: string;
                    nftId?: string;
                    denomId?: string;
                    creator?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _250.NftListing;
            };
            GenesisState: {
                encode(message: _249.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.GenesisState;
                fromPartial(object: {
                    params?: {
                        commission?: string;
                        bidCloseDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        distribution?: {
                            staking?: string;
                            communityPool?: string;
                        };
                    };
                    portId?: string;
                }): _249.GenesisState;
            };
            EventBuyNft: {
                encode(message: _248.EventBuyNft, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventBuyNft;
                fromPartial(object: {
                    id?: string;
                    nftId?: string;
                    denomId?: string;
                    owner?: string;
                    buyer?: string;
                }): _248.EventBuyNft;
            };
            EventListNft: {
                encode(message: _248.EventListNft, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventListNft;
                fromPartial(object: {
                    id?: string;
                    nftId?: string;
                    denomId?: string;
                    creator?: string;
                }): _248.EventListNft;
            };
            EventEditNftListing: {
                encode(message: _248.EventEditNftListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventEditNftListing;
                fromPartial(object: {
                    id?: string;
                    nftId?: string;
                    denomId?: string;
                    creator?: string;
                }): _248.EventEditNftListing;
            };
            EventDelistNft: {
                encode(message: _248.EventDelistNft, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventDelistNft;
                fromPartial(object: {
                    id?: string;
                    nftId?: string;
                    denomId?: string;
                    creator?: string;
                }): _248.EventDelistNft;
            };
            EventCreateNftAuction: {
                encode(message: _248.EventCreateNftAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventCreateNftAuction;
                fromPartial(object: {
                    id?: string;
                    nftId?: string;
                    denomId?: string;
                    creator?: string;
                    minPrice?: string;
                }): _248.EventCreateNftAuction;
            };
            EventCancelNftAuction: {
                encode(message: _248.EventCancelNftAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventCancelNftAuction;
                fromPartial(object: {
                    auctionId?: string;
                    nftId?: string;
                    denomId?: string;
                    owner?: string;
                }): _248.EventCancelNftAuction;
            };
            EventNftAuctionPlaceBid: {
                encode(message: _248.EventNftAuctionPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventNftAuctionPlaceBid;
                fromPartial(object: {
                    auctionId?: string;
                    nftId?: string;
                    denomId?: string;
                    bidder?: string;
                    amount?: string;
                }): _248.EventNftAuctionPlaceBid;
            };
        };
    }
    namespace mint {
        const v1: {
            QueryClientImpl: typeof _504.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _261.QueryParamsRequest): Promise<_261.QueryParamsResponse>;
                inflation(request?: _261.QueryInflationRequest): Promise<_261.QueryInflationResponse>;
                annualProvisions(request?: _261.QueryAnnualProvisionsRequest): Promise<_261.QueryAnnualProvisionsResponse>;
                distribution(request?: _261.QueryDistributionRequest): Promise<_261.QueryDistributionResponse>;
                lastBlockTime(request?: _261.QueryLastBlockTimeRequest): Promise<_261.QueryLastBlockTimeResponse>;
            };
            LCDQueryClient: typeof _484.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _261.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryParamsRequest;
                fromPartial(_: {}): _261.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _261.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryParamsResponse;
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
                }): _261.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _261.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryInflationRequest;
                fromPartial(_: {}): _261.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _261.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _261.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _261.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _261.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _261.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _261.QueryAnnualProvisionsResponse;
            };
            QueryDistributionRequest: {
                encode(_: _261.QueryDistributionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryDistributionRequest;
                fromPartial(_: {}): _261.QueryDistributionRequest;
            };
            QueryDistributionResponse: {
                encode(_: _261.QueryDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryDistributionResponse;
                fromPartial(_: {}): _261.QueryDistributionResponse;
            };
            QueryLastBlockTimeRequest: {
                encode(_: _261.QueryLastBlockTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryLastBlockTimeRequest;
                fromPartial(_: {}): _261.QueryLastBlockTimeRequest;
            };
            QueryLastBlockTimeResponse: {
                encode(message: _261.QueryLastBlockTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryLastBlockTimeResponse;
                fromPartial(object: {
                    lastBlockTime?: Date;
                }): _261.QueryLastBlockTimeResponse;
            };
            Params: {
                encode(message: _260.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Params;
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
                }): _260.Params;
            };
            Minter: {
                encode(message: _259.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _259.Minter;
            };
            WeightedAddress: {
                encode(message: _259.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _259.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _259.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    communityPool?: string;
                    poolIncentives?: string;
                    grantsProgram?: string;
                    developerRewards?: string;
                    fundedAddresses?: string;
                }): _259.DistributionProportions;
            };
            GenesisState: {
                encode(message: _258.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.GenesisState;
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
                }): _258.GenesisState;
            };
            EventMint: {
                encode(message: _257.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.EventMint;
                fromPartial(object: {
                    bondedRatio?: string;
                    inflation?: string;
                    annualProvisions?: string;
                    amount?: string;
                }): _257.EventMint;
            };
        };
    }
    namespace nft {
        const v1: {
            MsgClientImpl: typeof _520.MsgClientImpl;
            QueryClientImpl: typeof _505.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                supply(request: _268.QuerySupplyRequest): Promise<_268.QuerySupplyResponse>;
                nFTsOfOwner(request: _268.QueryNFTsOfOwnerRequest): Promise<_268.QueryNFTsOfOwnerResponse>;
                collection(request: _268.QueryCollectionRequest): Promise<_268.QueryCollectionResponse>;
                denom(request: _268.QueryDenomRequest): Promise<_268.QueryDenomResponse>;
                denoms(request?: _268.QueryDenomsRequest): Promise<_268.QueryDenomsResponse>;
                nFT(request: _268.QueryNFTRequest): Promise<_268.QueryNFTResponse>;
                params(request?: _268.QueryParamsRequest): Promise<_268.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _485.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueDenom(value: _269.MsgIssueDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferDenom(value: _269.MsgTransferDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintNFT(value: _269.MsgMintNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnNFT(value: _269.MsgBurnNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editNFT(value: _269.MsgEditNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sendNFT(value: _269.MsgSendNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueDenom(value: _269.MsgIssueDenom): {
                        typeUrl: string;
                        value: _269.MsgIssueDenom;
                    };
                    transferDenom(value: _269.MsgTransferDenom): {
                        typeUrl: string;
                        value: _269.MsgTransferDenom;
                    };
                    mintNFT(value: _269.MsgMintNFT): {
                        typeUrl: string;
                        value: _269.MsgMintNFT;
                    };
                    burnNFT(value: _269.MsgBurnNFT): {
                        typeUrl: string;
                        value: _269.MsgBurnNFT;
                    };
                    editNFT(value: _269.MsgEditNFT): {
                        typeUrl: string;
                        value: _269.MsgEditNFT;
                    };
                    sendNFT(value: _269.MsgSendNFT): {
                        typeUrl: string;
                        value: _269.MsgSendNFT;
                    };
                };
                fromPartial: {
                    issueDenom(value: _269.MsgIssueDenom): {
                        typeUrl: string;
                        value: _269.MsgIssueDenom;
                    };
                    transferDenom(value: _269.MsgTransferDenom): {
                        typeUrl: string;
                        value: _269.MsgTransferDenom;
                    };
                    mintNFT(value: _269.MsgMintNFT): {
                        typeUrl: string;
                        value: _269.MsgMintNFT;
                    };
                    burnNFT(value: _269.MsgBurnNFT): {
                        typeUrl: string;
                        value: _269.MsgBurnNFT;
                    };
                    editNFT(value: _269.MsgEditNFT): {
                        typeUrl: string;
                        value: _269.MsgEditNFT;
                    };
                    sendNFT(value: _269.MsgSendNFT): {
                        typeUrl: string;
                        value: _269.MsgSendNFT;
                    };
                };
            };
            AminoConverter: {
                "/ollo.nft.v1.MsgIssueDenom": {
                    aminoType: string;
                    toAmino: ({ id, name, schema, sender, symbol, mintRestricted, updateRestricted, description, uri, uriHash, data }: _269.MsgIssueDenom) => {
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
                    }) => _269.MsgIssueDenom;
                };
                "/ollo.nft.v1.MsgTransferDenom": {
                    aminoType: string;
                    toAmino: ({ id, sender, recipient }: _269.MsgTransferDenom) => {
                        id: string;
                        sender: string;
                        recipient: string;
                    };
                    fromAmino: ({ id, sender, recipient }: {
                        id: string;
                        sender: string;
                        recipient: string;
                    }) => _269.MsgTransferDenom;
                };
                "/ollo.nft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: _269.MsgMintNFT) => {
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
                    }) => _269.MsgMintNFT;
                };
                "/ollo.nft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, sender }: _269.MsgBurnNFT) => {
                        id: string;
                        denom_id: string;
                        sender: string;
                    };
                    fromAmino: ({ id, denom_id, sender }: {
                        id: string;
                        denom_id: string;
                        sender: string;
                    }) => _269.MsgBurnNFT;
                };
                "/ollo.nft.v1.MsgEditNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, uriHash }: _269.MsgEditNFT) => {
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
                    }) => _269.MsgEditNFT;
                };
                "/ollo.nft.v1.MsgSendNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: _269.MsgSendNFT) => {
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
                    }) => _269.MsgSendNFT;
                };
            };
            MsgIssueDenom: {
                encode(message: _269.MsgIssueDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgIssueDenom;
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
                }): _269.MsgIssueDenom;
            };
            MsgIssueDenomResponse: {
                encode(_: _269.MsgIssueDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgIssueDenomResponse;
                fromPartial(_: {}): _269.MsgIssueDenomResponse;
            };
            MsgTransferDenom: {
                encode(message: _269.MsgTransferDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgTransferDenom;
                fromPartial(object: {
                    id?: string;
                    sender?: string;
                    recipient?: string;
                }): _269.MsgTransferDenom;
            };
            MsgTransferDenomResponse: {
                encode(_: _269.MsgTransferDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgTransferDenomResponse;
                fromPartial(_: {}): _269.MsgTransferDenomResponse;
            };
            MsgMintNFT: {
                encode(message: _269.MsgMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgMintNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    recipient?: string;
                    uriHash?: string;
                }): _269.MsgMintNFT;
            };
            MsgBurnNFT: {
                encode(message: _269.MsgBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgBurnNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    sender?: string;
                }): _269.MsgBurnNFT;
            };
            MsgEditNFT: {
                encode(message: _269.MsgEditNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgEditNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    uriHash?: string;
                }): _269.MsgEditNFT;
            };
            MsgSendNFT: {
                encode(message: _269.MsgSendNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgSendNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    recipient?: string;
                    uriHash?: string;
                }): _269.MsgSendNFT;
            };
            MsgMintNFTResponse: {
                encode(_: _269.MsgMintNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgMintNFTResponse;
                fromPartial(_: {}): _269.MsgMintNFTResponse;
            };
            MsgBurnNFTResponse: {
                encode(_: _269.MsgBurnNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgBurnNFTResponse;
                fromPartial(_: {}): _269.MsgBurnNFTResponse;
            };
            MsgEditNFTResponse: {
                encode(_: _269.MsgEditNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgEditNFTResponse;
                fromPartial(_: {}): _269.MsgEditNFTResponse;
            };
            MsgSendNFTResponse: {
                encode(_: _269.MsgSendNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MsgSendNFTResponse;
                fromPartial(_: {}): _269.MsgSendNFTResponse;
            };
            QueryParamsRequest: {
                encode(_: _268.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryParamsRequest;
                fromPartial(_: {}): _268.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _268.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _268.QueryParamsResponse;
            };
            QuerySupplyRequest: {
                encode(message: _268.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QuerySupplyRequest;
                fromPartial(object: {
                    denomId?: string;
                    owner?: string;
                }): _268.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _268.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long");
                }): _268.QuerySupplyResponse;
            };
            QueryNFTsOfOwnerRequest: {
                encode(message: _268.QueryNFTsOfOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryNFTsOfOwnerRequest;
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
                }): _268.QueryNFTsOfOwnerRequest;
            };
            QueryNFTsOfOwnerResponse: {
                encode(message: _268.QueryNFTsOfOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryNFTsOfOwnerResponse;
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
                }): _268.QueryNFTsOfOwnerResponse;
            };
            QueryCollectionRequest: {
                encode(message: _268.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryCollectionRequest;
                fromPartial(object: {
                    denomId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _268.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _268.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryCollectionResponse;
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
                }): _268.QueryCollectionResponse;
            };
            QueryDenomRequest: {
                encode(message: _268.QueryDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryDenomRequest;
                fromPartial(object: {
                    denomId?: string;
                }): _268.QueryDenomRequest;
            };
            QueryDenomResponse: {
                encode(message: _268.QueryDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryDenomResponse;
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
                }): _268.QueryDenomResponse;
            };
            QueryDenomsRequest: {
                encode(message: _268.QueryDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryDenomsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _268.QueryDenomsRequest;
            };
            QueryDenomsResponse: {
                encode(message: _268.QueryDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryDenomsResponse;
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
                }): _268.QueryDenomsResponse;
            };
            QueryNFTRequest: {
                encode(message: _268.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryNFTRequest;
                fromPartial(object: {
                    denomId?: string;
                    tokenId?: string;
                }): _268.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _268.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        id?: string;
                        name?: string;
                        uri?: string;
                        data?: string;
                        owner?: string;
                        uriHash?: string;
                    };
                }): _268.QueryNFTResponse;
            };
            Params: {
                encode(_: _267.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Params;
                fromPartial(_: {}): _267.Params;
            };
            NftPacketData: {
                encode(message: _266.NftPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.NftPacketData;
                fromPartial(object: {
                    classId?: string;
                    nftIds?: string[];
                    sender?: string;
                    receiver?: string;
                }): _266.NftPacketData;
            };
            NftClassTrace: {
                encode(message: _266.NftClassTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.NftClassTrace;
                fromPartial(object: {
                    path?: string;
                    baseClassId?: string;
                }): _266.NftClassTrace;
            };
            BaseNFT: {
                encode(message: _265.BaseNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.BaseNFT;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    owner?: string;
                    uriHash?: string;
                }): _265.BaseNFT;
            };
            NFTMetadata: {
                encode(message: _265.NFTMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.NFTMetadata;
                fromPartial(object: {
                    name?: string;
                    data?: string;
                }): _265.NFTMetadata;
            };
            Denom: {
                encode(message: _265.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Denom;
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
                }): _265.Denom;
            };
            DenomMetadata: {
                encode(message: _265.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.DenomMetadata;
                fromPartial(object: {
                    creator?: string;
                    schema?: string;
                    mintRestricted?: boolean;
                    updateRestricted?: boolean;
                    data?: string;
                }): _265.DenomMetadata;
            };
            IDCollection: {
                encode(message: _265.IDCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.IDCollection;
                fromPartial(object: {
                    denomId?: string;
                    tokenIds?: string[];
                }): _265.IDCollection;
            };
            Owner: {
                encode(message: _265.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Owner;
                fromPartial(object: {
                    address?: string;
                    idCollections?: {
                        denomId?: string;
                        tokenIds?: string[];
                    }[];
                }): _265.Owner;
            };
            Collection: {
                encode(message: _265.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Collection;
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
                }): _265.Collection;
            };
            GenesisState: {
                encode(message: _264.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.GenesisState;
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
                    portId?: string;
                }): _264.GenesisState;
            };
            EventMintNft: {
                encode(message: _263.EventMintNft, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.EventMintNft;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    data?: Uint8Array;
                    creator?: string;
                }): _263.EventMintNft;
            };
            EventSendNft: {
                encode(message: _263.EventSendNft, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.EventSendNft;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    data?: Uint8Array;
                    creator?: string;
                    recipient?: string;
                }): _263.EventSendNft;
            };
            EventBurnNft: {
                encode(message: _263.EventBurnNft, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.EventBurnNft;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    creator?: string;
                }): _263.EventBurnNft;
            };
            EventCreateDenom: {
                encode(message: _263.EventCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.EventCreateDenom;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    denom?: string;
                    creator?: string;
                }): _263.EventCreateDenom;
            };
            EventUpdateDenom: {
                encode(message: _263.EventUpdateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.EventUpdateDenom;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    denom?: string;
                    creator?: string;
                }): _263.EventUpdateDenom;
            };
            EventTransferDenom: {
                encode(message: _263.EventTransferDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.EventTransferDenom;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    denom?: string;
                    creator?: string;
                }): _263.EventTransferDenom;
            };
        };
    }
    namespace ons {
        const v1: {
            MsgClientImpl: typeof _521.MsgClientImpl;
            QueryClientImpl: typeof _506.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _278.QueryParamsRequest): Promise<_278.QueryParamsResponse>;
                whois(request: _278.QueryGetWhoisRequest): Promise<_278.QueryGetWhoisResponse>;
                whoisAll(request?: _278.QueryAllWhoisRequest): Promise<_278.QueryAllWhoisResponse>;
            };
            LCDQueryClient: typeof _486.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    buyName(value: _280.MsgBuyName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sellName(value: _280.MsgSellName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setName(value: _280.MsgSetName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteName(value: _280.MsgDeleteName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addThread(value: _280.MsgAddThread): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteThread(value: _280.MsgDeleteThread): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    buyName(value: _280.MsgBuyName): {
                        typeUrl: string;
                        value: _280.MsgBuyName;
                    };
                    sellName(value: _280.MsgSellName): {
                        typeUrl: string;
                        value: _280.MsgSellName;
                    };
                    setName(value: _280.MsgSetName): {
                        typeUrl: string;
                        value: _280.MsgSetName;
                    };
                    deleteName(value: _280.MsgDeleteName): {
                        typeUrl: string;
                        value: _280.MsgDeleteName;
                    };
                    addThread(value: _280.MsgAddThread): {
                        typeUrl: string;
                        value: _280.MsgAddThread;
                    };
                    deleteThread(value: _280.MsgDeleteThread): {
                        typeUrl: string;
                        value: _280.MsgDeleteThread;
                    };
                };
                fromPartial: {
                    buyName(value: _280.MsgBuyName): {
                        typeUrl: string;
                        value: _280.MsgBuyName;
                    };
                    sellName(value: _280.MsgSellName): {
                        typeUrl: string;
                        value: _280.MsgSellName;
                    };
                    setName(value: _280.MsgSetName): {
                        typeUrl: string;
                        value: _280.MsgSetName;
                    };
                    deleteName(value: _280.MsgDeleteName): {
                        typeUrl: string;
                        value: _280.MsgDeleteName;
                    };
                    addThread(value: _280.MsgAddThread): {
                        typeUrl: string;
                        value: _280.MsgAddThread;
                    };
                    deleteThread(value: _280.MsgDeleteThread): {
                        typeUrl: string;
                        value: _280.MsgDeleteThread;
                    };
                };
            };
            AminoConverter: {
                "/ollo.ons.v1.MsgBuyName": {
                    aminoType: string;
                    toAmino: ({ creator, name, bidderAddr, bid }: _280.MsgBuyName) => {
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
                    }) => _280.MsgBuyName;
                };
                "/ollo.ons.v1.MsgSellName": {
                    aminoType: string;
                    toAmino: ({ creator, name, sellerAddr, offer }: _280.MsgSellName) => {
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
                    }) => _280.MsgSellName;
                };
                "/ollo.ons.v1.MsgSetName": {
                    aminoType: string;
                    toAmino: ({ creatorAddr, name, value }: _280.MsgSetName) => {
                        creatorAddr: string;
                        name: string;
                        value: string;
                    };
                    fromAmino: ({ creatorAddr, name, value }: {
                        creatorAddr: string;
                        name: string;
                        value: string;
                    }) => _280.MsgSetName;
                };
                "/ollo.ons.v1.MsgDeleteName": {
                    aminoType: string;
                    toAmino: ({ creatorAddr, name }: _280.MsgDeleteName) => {
                        creatorAddr: string;
                        name: string;
                    };
                    fromAmino: ({ creatorAddr, name }: {
                        creatorAddr: string;
                        name: string;
                    }) => _280.MsgDeleteName;
                };
                "/ollo.ons.v1.MsgAddThread": {
                    aminoType: string;
                    toAmino: ({ creator, name, thread, addr, offer }: _280.MsgAddThread) => {
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
                    }) => _280.MsgAddThread;
                };
                "/ollo.ons.v1.MsgDeleteThread": {
                    aminoType: string;
                    toAmino: ({ creator, name, thread, addr }: _280.MsgDeleteThread) => {
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
                    }) => _280.MsgDeleteThread;
                };
            };
            Whois: {
                encode(message: _281.Whois, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.Whois;
                fromPartial(object: {
                    index?: string;
                    name?: string;
                    value?: string;
                    price?: string;
                    ownerAddr?: string;
                }): _281.Whois;
            };
            MsgBuyName: {
                encode(message: _280.MsgBuyName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgBuyName;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    bidderAddr?: string;
                    bid?: string;
                }): _280.MsgBuyName;
            };
            MsgBuyNameResponse: {
                encode(_: _280.MsgBuyNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgBuyNameResponse;
                fromPartial(_: {}): _280.MsgBuyNameResponse;
            };
            MsgSellName: {
                encode(message: _280.MsgSellName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgSellName;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    sellerAddr?: string;
                    offer?: string;
                }): _280.MsgSellName;
            };
            MsgSellNameResponse: {
                encode(_: _280.MsgSellNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgSellNameResponse;
                fromPartial(_: {}): _280.MsgSellNameResponse;
            };
            MsgSetName: {
                encode(message: _280.MsgSetName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgSetName;
                fromPartial(object: {
                    creatorAddr?: string;
                    name?: string;
                    value?: string;
                }): _280.MsgSetName;
            };
            MsgDeleteName: {
                encode(message: _280.MsgDeleteName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgDeleteName;
                fromPartial(object: {
                    creatorAddr?: string;
                    name?: string;
                }): _280.MsgDeleteName;
            };
            MsgDeleteNameResponse: {
                encode(_: _280.MsgDeleteNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgDeleteNameResponse;
                fromPartial(_: {}): _280.MsgDeleteNameResponse;
            };
            MsgSetNameResponse: {
                encode(_: _280.MsgSetNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgSetNameResponse;
                fromPartial(_: {}): _280.MsgSetNameResponse;
            };
            MsgAddThread: {
                encode(message: _280.MsgAddThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgAddThread;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    thread?: string;
                    addr?: string;
                    offer?: string;
                }): _280.MsgAddThread;
            };
            MsgAddThreadResponse: {
                encode(_: _280.MsgAddThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgAddThreadResponse;
                fromPartial(_: {}): _280.MsgAddThreadResponse;
            };
            MsgDeleteThread: {
                encode(message: _280.MsgDeleteThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgDeleteThread;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    thread?: string;
                    addr?: string;
                }): _280.MsgDeleteThread;
            };
            MsgDeleteThreadResponse: {
                encode(_: _280.MsgDeleteThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgDeleteThreadResponse;
                fromPartial(_: {}): _280.MsgDeleteThreadResponse;
            };
            Thread: {
                encode(message: _279.Thread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.Thread;
                fromPartial(object: {
                    id?: string;
                }): _279.Thread;
            };
            QueryParamsRequest: {
                encode(_: _278.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryParamsRequest;
                fromPartial(_: {}): _278.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _278.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _278.QueryParamsResponse;
            };
            QueryGetWhoisRequest: {
                encode(message: _278.QueryGetWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryGetWhoisRequest;
                fromPartial(object: {
                    index?: string;
                }): _278.QueryGetWhoisRequest;
            };
            QueryGetWhoisResponse: {
                encode(message: _278.QueryGetWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryGetWhoisResponse;
                fromPartial(object: {
                    whois?: {
                        index?: string;
                        name?: string;
                        value?: string;
                        price?: string;
                        ownerAddr?: string;
                    };
                }): _278.QueryGetWhoisResponse;
            };
            QueryAllWhoisRequest: {
                encode(message: _278.QueryAllWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryAllWhoisRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _278.QueryAllWhoisRequest;
            };
            QueryAllWhoisResponse: {
                encode(message: _278.QueryAllWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryAllWhoisResponse;
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
                }): _278.QueryAllWhoisResponse;
            };
            ProprosalSetName: {
                encode(_: _277.ProprosalSetName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.ProprosalSetName;
                fromPartial(_: {}): _277.ProprosalSetName;
            };
            Params: {
                encode(_: _276.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Params;
                fromPartial(_: {}): _276.Params;
            };
            OnsPacketData: {
                encode(message: _275.OnsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.OnsPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _275.OnsPacketData;
            };
            NoData: {
                encode(_: _275.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.NoData;
                fromPartial(_: {}): _275.NoData;
            };
            nameStatusFromJSON(object: any): _274.NameStatus;
            nameStatusToJSON(object: _274.NameStatus): string;
            NameStatus: typeof _274.NameStatus;
            NameStatusSDKType: typeof _274.NameStatus;
            Name: {
                encode(message: _274.Name, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.Name;
                fromPartial(object: {
                    name?: string;
                    value?: string;
                    metadata?: string;
                    threads?: any[];
                    owner?: string;
                    status?: _274.NameStatus;
                    expiry?: Date;
                }): _274.Name;
            };
            NameListing: {
                encode(message: _273.NameListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.NameListing;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                    price?: string;
                }): _273.NameListing;
            };
            NameListingBid: {
                encode(message: _273.NameListingBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.NameListingBid;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    bidder?: string;
                    price?: string;
                }): _273.NameListingBid;
            };
            GenesisState: {
                encode(message: _272.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.GenesisState;
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
                }): _272.GenesisState;
            };
            EventNameExpired: {
                encode(message: _271.EventNameExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameExpired;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                }): _271.EventNameExpired;
            };
            EventNameListed: {
                encode(message: _271.EventNameListed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameListed;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                }): _271.EventNameListed;
            };
            EventNameListingCanceled: {
                encode(message: _271.EventNameListingCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameListingCanceled;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                }): _271.EventNameListingCanceled;
            };
            EventNameUnlisted: {
                encode(message: _271.EventNameUnlisted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameUnlisted;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                }): _271.EventNameUnlisted;
            };
            EventNameBought: {
                encode(message: _271.EventNameBought, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameBought;
                fromPartial(object: {
                    name?: string;
                    buyer?: string;
                }): _271.EventNameBought;
            };
            EventNameTransferred: {
                encode(message: _271.EventNameTransferred, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameTransferred;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                    recipient?: string;
                }): _271.EventNameTransferred;
            };
            EventNameRenewed: {
                encode(message: _271.EventNameRenewed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameRenewed;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                }): _271.EventNameRenewed;
            };
            EventNameAddThread: {
                encode(message: _271.EventNameAddThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameAddThread;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                }): _271.EventNameAddThread;
            };
            EventNameRemoveThread: {
                encode(message: _271.EventNameRemoveThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameRemoveThread;
                fromPartial(object: {
                    name?: string;
                    owner?: string;
                }): _271.EventNameRemoveThread;
            };
            Keypair: {
                encode(message: _270.Keypair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.Keypair;
                fromPartial(object: {
                    key?: string;
                    val?: string;
                }): _270.Keypair;
            };
            VerificationMethod: {
                encode(message: _270.VerificationMethod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.VerificationMethod;
                fromPartial(object: {
                    id?: string;
                    type?: string;
                    controller?: string;
                    publicKey?: {
                        key?: string;
                        val?: string;
                    }[];
                    pubkeyBase58?: string;
                    credentialJson?: Uint8Array;
                }): _270.VerificationMethod;
            };
            Service: {
                encode(message: _270.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.Service;
                fromPartial(object: {
                    id?: string;
                    type?: string;
                    endpoint?: string;
                }): _270.Service;
            };
            DidDocument: {
                encode(message: _270.DidDocument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.DidDocument;
                fromPartial(object: {
                    id?: string;
                    context?: string[];
                    controller?: string[];
                    verificationMethod?: {
                        id?: string;
                        type?: string;
                        controller?: string;
                        publicKey?: {
                            key?: string;
                            val?: string;
                        }[];
                        pubkeyBase58?: string;
                        credentialJson?: Uint8Array;
                    }[];
                    authentication?: string[];
                    assertionMethod?: string[];
                    capabilityInvocation?: string[];
                    capabilityDelegation?: string[];
                    keyAgreement?: string[];
                    service?: {
                        id?: string;
                        type?: string;
                        endpoint?: string;
                    }[];
                    alias?: string[];
                }): _270.DidDocument;
            };
        };
    }
    namespace prices {
        const v1: {
            MsgClientImpl: typeof _522.MsgClientImpl;
            QueryClientImpl: typeof _507.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _290.QueryParamsRequest): Promise<_290.QueryParamsResponse>;
                bandPricesResult(request: _290.QueryBandPricesRequest): Promise<_290.QueryBandPricesResponse>;
                lastBandPricesId(request?: _290.QueryLastBandPricesIdRequest): Promise<_290.QueryLastBandPricesIdResponse>;
                queryRoundData(request: _290.QueryRoundDataRequest): Promise<_290.QueryRoundDataResponse>;
                latestRoundData(request: _290.QueryLatestRoundDataRequest): Promise<_290.QueryLatestRoundDataResponse>;
                queryAllModuleOwner(request?: _290.QueryModuleOwnerRequest): Promise<_290.QueryModuleOwnerResponse>;
                queryFeedByFeedId(request: _290.QueryFeedByIdRequest): Promise<_290.QueryFeedByIdResponse>;
                queryAccountInfo(request: _290.QueryAccountRequest): Promise<_290.QueryAccountResponse>;
                queryFeedRewardAvailStrategy(request?: _290.QueryFeedRewardAvailStrategiesRequest): Promise<_290.QueryFeedRewardAvailStrategiesResponse>;
            };
            LCDQueryClient: typeof _487.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    bandPricesData(value: _292.MsgBandPricesData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitFeedDataTx(value: _292.MsgFeedData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addModuleOwnerTx(value: _288.MsgModuleOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    moduleOwnershipTransferTx(value: _292.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addFeedTx(value: _292.MsgFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addDataProviderTx(value: _292.MsgAddDataProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeDataProviderTx(value: _292.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSubmissionCountTx(value: _292.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setHeartbeatTriggerTx(value: _292.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeviationThresholdTriggerTx(value: _292.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setFeedRewardTx(value: _292.MsgSetFeedReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestNewRoundTx(value: _292.MsgRequestNewRound): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    feedOwnershipTransferTx(value: _292.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAccountTx(value: _292.MsgAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editAccountTx(value: _292.MsgEditAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    bandPricesData(value: _292.MsgBandPricesData): {
                        typeUrl: string;
                        value: _292.MsgBandPricesData;
                    };
                    submitFeedDataTx(value: _292.MsgFeedData): {
                        typeUrl: string;
                        value: _292.MsgFeedData;
                    };
                    addModuleOwnerTx(value: _288.MsgModuleOwner): {
                        typeUrl: string;
                        value: _288.MsgModuleOwner;
                    };
                    moduleOwnershipTransferTx(value: _292.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: _292.MsgModuleOwnershipTransfer;
                    };
                    addFeedTx(value: _292.MsgFeed): {
                        typeUrl: string;
                        value: _292.MsgFeed;
                    };
                    addDataProviderTx(value: _292.MsgAddDataProvider): {
                        typeUrl: string;
                        value: _292.MsgAddDataProvider;
                    };
                    removeDataProviderTx(value: _292.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: _292.MsgRemoveDataProvider;
                    };
                    setSubmissionCountTx(value: _292.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: _292.MsgSetSubmissionCount;
                    };
                    setHeartbeatTriggerTx(value: _292.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: _292.MsgSetHeartbeatTrigger;
                    };
                    setDeviationThresholdTriggerTx(value: _292.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: _292.MsgSetDeviationThresholdTrigger;
                    };
                    setFeedRewardTx(value: _292.MsgSetFeedReward): {
                        typeUrl: string;
                        value: _292.MsgSetFeedReward;
                    };
                    requestNewRoundTx(value: _292.MsgRequestNewRound): {
                        typeUrl: string;
                        value: _292.MsgRequestNewRound;
                    };
                    feedOwnershipTransferTx(value: _292.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: _292.MsgFeedOwnershipTransfer;
                    };
                    addAccountTx(value: _292.MsgAccount): {
                        typeUrl: string;
                        value: _292.MsgAccount;
                    };
                    editAccountTx(value: _292.MsgEditAccount): {
                        typeUrl: string;
                        value: _292.MsgEditAccount;
                    };
                };
                fromPartial: {
                    bandPricesData(value: _292.MsgBandPricesData): {
                        typeUrl: string;
                        value: _292.MsgBandPricesData;
                    };
                    submitFeedDataTx(value: _292.MsgFeedData): {
                        typeUrl: string;
                        value: _292.MsgFeedData;
                    };
                    addModuleOwnerTx(value: _288.MsgModuleOwner): {
                        typeUrl: string;
                        value: _288.MsgModuleOwner;
                    };
                    moduleOwnershipTransferTx(value: _292.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: _292.MsgModuleOwnershipTransfer;
                    };
                    addFeedTx(value: _292.MsgFeed): {
                        typeUrl: string;
                        value: _292.MsgFeed;
                    };
                    addDataProviderTx(value: _292.MsgAddDataProvider): {
                        typeUrl: string;
                        value: _292.MsgAddDataProvider;
                    };
                    removeDataProviderTx(value: _292.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: _292.MsgRemoveDataProvider;
                    };
                    setSubmissionCountTx(value: _292.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: _292.MsgSetSubmissionCount;
                    };
                    setHeartbeatTriggerTx(value: _292.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: _292.MsgSetHeartbeatTrigger;
                    };
                    setDeviationThresholdTriggerTx(value: _292.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: _292.MsgSetDeviationThresholdTrigger;
                    };
                    setFeedRewardTx(value: _292.MsgSetFeedReward): {
                        typeUrl: string;
                        value: _292.MsgSetFeedReward;
                    };
                    requestNewRoundTx(value: _292.MsgRequestNewRound): {
                        typeUrl: string;
                        value: _292.MsgRequestNewRound;
                    };
                    feedOwnershipTransferTx(value: _292.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: _292.MsgFeedOwnershipTransfer;
                    };
                    addAccountTx(value: _292.MsgAccount): {
                        typeUrl: string;
                        value: _292.MsgAccount;
                    };
                    editAccountTx(value: _292.MsgEditAccount): {
                        typeUrl: string;
                        value: _292.MsgEditAccount;
                    };
                };
            };
            AminoConverter: {
                "/ollo.prices.v1.MsgBandPricesData": {
                    aminoType: string;
                    toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: _292.MsgBandPricesData) => {
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
                    }) => _292.MsgBandPricesData;
                };
                "/ollo.prices.v1.MsgFeedData": {
                    aminoType: string;
                    toAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: _292.MsgFeedData) => {
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
                    }) => _292.MsgFeedData;
                };
                "/ollo.prices.v1.MsgModuleOwner": {
                    aminoType: string;
                    toAmino: ({ address, pubKey, assignerAddress }: _288.MsgModuleOwner) => {
                        address: Uint8Array;
                        pubKey: Uint8Array;
                        assignerAddress: Uint8Array;
                    };
                    fromAmino: ({ address, pubKey, assignerAddress }: {
                        address: Uint8Array;
                        pubKey: Uint8Array;
                        assignerAddress: Uint8Array;
                    }) => _288.MsgModuleOwner;
                };
                "/ollo.prices.v1.MsgModuleOwnershipTransfer": {
                    aminoType: string;
                    toAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: _292.MsgModuleOwnershipTransfer) => {
                        assignerAddress: Uint8Array;
                        newModuleOwnerAddress: Uint8Array;
                        newModuleOwnerPubKey: Uint8Array;
                    };
                    fromAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: {
                        assignerAddress: Uint8Array;
                        newModuleOwnerAddress: Uint8Array;
                        newModuleOwnerPubKey: Uint8Array;
                    }) => _292.MsgModuleOwnershipTransfer;
                };
                "/ollo.prices.v1.MsgFeed": {
                    aminoType: string;
                    toAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: _292.MsgFeed) => {
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
                    }) => _292.MsgFeed;
                };
                "/ollo.prices.v1.MsgAddDataProvider": {
                    aminoType: string;
                    toAmino: ({ feedId, dataProvider, signer }: _292.MsgAddDataProvider) => {
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
                    }) => _292.MsgAddDataProvider;
                };
                "/ollo.prices.v1.MsgRemoveDataProvider": {
                    aminoType: string;
                    toAmino: ({ feedId, address, signer }: _292.MsgRemoveDataProvider) => {
                        feedId: string;
                        address: Uint8Array;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, address, signer }: {
                        feedId: string;
                        address: Uint8Array;
                        signer: Uint8Array;
                    }) => _292.MsgRemoveDataProvider;
                };
                "/ollo.prices.v1.MsgSetSubmissionCount": {
                    aminoType: string;
                    toAmino: ({ feedId, submissionCount, signer }: _292.MsgSetSubmissionCount) => {
                        feedId: string;
                        submissionCount: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, submissionCount, signer }: {
                        feedId: string;
                        submissionCount: number;
                        signer: Uint8Array;
                    }) => _292.MsgSetSubmissionCount;
                };
                "/ollo.prices.v1.MsgSetHeartbeatTrigger": {
                    aminoType: string;
                    toAmino: ({ feedId, heartbeatTrigger, signer }: _292.MsgSetHeartbeatTrigger) => {
                        feedId: string;
                        heartbeatTrigger: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, heartbeatTrigger, signer }: {
                        feedId: string;
                        heartbeatTrigger: number;
                        signer: Uint8Array;
                    }) => _292.MsgSetHeartbeatTrigger;
                };
                "/ollo.prices.v1.MsgSetDeviationThresholdTrigger": {
                    aminoType: string;
                    toAmino: ({ feedId, deviationThresholdTrigger, signer }: _292.MsgSetDeviationThresholdTrigger) => {
                        feedId: string;
                        deviationThresholdTrigger: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, deviationThresholdTrigger, signer }: {
                        feedId: string;
                        deviationThresholdTrigger: number;
                        signer: Uint8Array;
                    }) => _292.MsgSetDeviationThresholdTrigger;
                };
                "/ollo.prices.v1.MsgSetFeedReward": {
                    aminoType: string;
                    toAmino: ({ feedId, feedReward, signer }: _292.MsgSetFeedReward) => {
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
                    }) => _292.MsgSetFeedReward;
                };
                "/ollo.prices.v1.MsgRequestNewRound": {
                    aminoType: string;
                    toAmino: ({ feedId, signer }: _292.MsgRequestNewRound) => {
                        feedId: string;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, signer }: {
                        feedId: string;
                        signer: Uint8Array;
                    }) => _292.MsgRequestNewRound;
                };
                "/ollo.prices.v1.MsgFeedOwnershipTransfer": {
                    aminoType: string;
                    toAmino: ({ feedId, newFeedOwnerAddress, signer }: _292.MsgFeedOwnershipTransfer) => {
                        feedId: string;
                        newFeedOwnerAddress: Uint8Array;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, newFeedOwnerAddress, signer }: {
                        feedId: string;
                        newFeedOwnerAddress: Uint8Array;
                        signer: Uint8Array;
                    }) => _292.MsgFeedOwnershipTransfer;
                };
                "/ollo.prices.v1.MsgAccount": {
                    aminoType: string;
                    toAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: _292.MsgAccount) => {
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
                    }) => _292.MsgAccount;
                };
                "/ollo.prices.v1.MsgEditAccount": {
                    aminoType: string;
                    toAmino: ({ submitter, piggyAddress }: _292.MsgEditAccount) => {
                        submitter: Uint8Array;
                        piggyAddress: Uint8Array;
                    };
                    fromAmino: ({ submitter, piggyAddress }: {
                        submitter: Uint8Array;
                        piggyAddress: Uint8Array;
                    }) => _292.MsgEditAccount;
                };
            };
            MsgBandPricesData: {
                encode(message: _292.MsgBandPricesData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgBandPricesData;
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
                }): _292.MsgBandPricesData;
            };
            MsgBandPricesDataResponse: {
                encode(_: _292.MsgBandPricesDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgBandPricesDataResponse;
                fromPartial(_: {}): _292.MsgBandPricesDataResponse;
            };
            MsgModuleOwnershipTransfer: {
                encode(message: _292.MsgModuleOwnershipTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgModuleOwnershipTransfer;
                fromPartial(object: {
                    assignerAddress?: Uint8Array;
                    newModuleOwnerAddress?: Uint8Array;
                    newModuleOwnerPubKey?: Uint8Array;
                }): _292.MsgModuleOwnershipTransfer;
            };
            MsgFeed: {
                encode(message: _292.MsgFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgFeed;
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
                }): _292.MsgFeed;
            };
            MsgAddDataProvider: {
                encode(message: _292.MsgAddDataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgAddDataProvider;
                fromPartial(object: {
                    feedId?: string;
                    dataProvider?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                    };
                    signer?: Uint8Array;
                }): _292.MsgAddDataProvider;
            };
            MsgRemoveDataProvider: {
                encode(message: _292.MsgRemoveDataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgRemoveDataProvider;
                fromPartial(object: {
                    feedId?: string;
                    address?: Uint8Array;
                    signer?: Uint8Array;
                }): _292.MsgRemoveDataProvider;
            };
            MsgSetSubmissionCount: {
                encode(message: _292.MsgSetSubmissionCount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgSetSubmissionCount;
                fromPartial(object: {
                    feedId?: string;
                    submissionCount?: number;
                    signer?: Uint8Array;
                }): _292.MsgSetSubmissionCount;
            };
            MsgSetHeartbeatTrigger: {
                encode(message: _292.MsgSetHeartbeatTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgSetHeartbeatTrigger;
                fromPartial(object: {
                    feedId?: string;
                    heartbeatTrigger?: number;
                    signer?: Uint8Array;
                }): _292.MsgSetHeartbeatTrigger;
            };
            MsgSetDeviationThresholdTrigger: {
                encode(message: _292.MsgSetDeviationThresholdTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgSetDeviationThresholdTrigger;
                fromPartial(object: {
                    feedId?: string;
                    deviationThresholdTrigger?: number;
                    signer?: Uint8Array;
                }): _292.MsgSetDeviationThresholdTrigger;
            };
            MsgSetFeedReward: {
                encode(message: _292.MsgSetFeedReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgSetFeedReward;
                fromPartial(object: {
                    feedId?: string;
                    feedReward?: {
                        amount?: string | number | import("long");
                        strategy?: string;
                    };
                    signer?: Uint8Array;
                }): _292.MsgSetFeedReward;
            };
            MsgFeedOwnershipTransfer: {
                encode(message: _292.MsgFeedOwnershipTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgFeedOwnershipTransfer;
                fromPartial(object: {
                    feedId?: string;
                    newFeedOwnerAddress?: Uint8Array;
                    signer?: Uint8Array;
                }): _292.MsgFeedOwnershipTransfer;
            };
            MsgFeedData: {
                encode(message: _292.MsgFeedData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgFeedData;
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
                }): _292.MsgFeedData;
            };
            MsgRequestNewRound: {
                encode(message: _292.MsgRequestNewRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgRequestNewRound;
                fromPartial(object: {
                    feedId?: string;
                    signer?: Uint8Array;
                }): _292.MsgRequestNewRound;
            };
            MsgAccount: {
                encode(message: _292.MsgAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgAccount;
                fromPartial(object: {
                    submitter?: Uint8Array;
                    chainlinkPublicKey?: Uint8Array;
                    chainlinkSigningKey?: Uint8Array;
                    piggyAddress?: Uint8Array;
                }): _292.MsgAccount;
            };
            MsgEditAccount: {
                encode(message: _292.MsgEditAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgEditAccount;
                fromPartial(object: {
                    submitter?: Uint8Array;
                    piggyAddress?: Uint8Array;
                }): _292.MsgEditAccount;
            };
            MsgResponse: {
                encode(message: _292.MsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgResponse;
                fromPartial(object: {
                    height?: string | number | import("long");
                    txHash?: string;
                }): _292.MsgResponse;
            };
            OCRFeedDataInStore: {
                encode(message: _292.OCRFeedDataInStore, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.OCRFeedDataInStore;
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
                }): _292.OCRFeedDataInStore;
            };
            FeedMarket: {
                encode(message: _291.FeedMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.FeedMarket;
                fromPartial(object: {
                    marketId?: string;
                    baseAssetId?: string;
                    quoteAssetId?: string;
                    sources?: string[];
                    active?: boolean;
                }): _291.FeedMarket;
            };
            FeedPostedPrice: {
                encode(message: _291.FeedPostedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.FeedPostedPrice;
                fromPartial(object: {
                    marketId?: string;
                    price?: string;
                    source?: string;
                    expiry?: Date;
                }): _291.FeedPostedPrice;
            };
            FeedCurrentPrice: {
                encode(message: _291.FeedCurrentPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.FeedCurrentPrice;
                fromPartial(object: {
                    marketId?: string;
                    price?: string;
                }): _291.FeedCurrentPrice;
            };
            QueryParamsRequest: {
                encode(_: _290.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryParamsRequest;
                fromPartial(_: {}): _290.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _290.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        markets?: {
                            marketId?: string;
                            baseAssetId?: string;
                            quoteAssetId?: string;
                            sources?: string[];
                            active?: boolean;
                        }[];
                    };
                }): _290.QueryParamsResponse;
            };
            QueryBandPricesRequest: {
                encode(message: _290.QueryBandPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryBandPricesRequest;
                fromPartial(object: {
                    requestId?: string | number | import("long");
                }): _290.QueryBandPricesRequest;
            };
            QueryBandPricesResponse: {
                encode(message: _290.QueryBandPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryBandPricesResponse;
                fromPartial(object: {
                    result?: {
                        rates?: (string | number | import("long"))[];
                    };
                }): _290.QueryBandPricesResponse;
            };
            QueryLastBandPricesIdRequest: {
                encode(_: _290.QueryLastBandPricesIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryLastBandPricesIdRequest;
                fromPartial(_: {}): _290.QueryLastBandPricesIdRequest;
            };
            QueryLastBandPricesIdResponse: {
                encode(message: _290.QueryLastBandPricesIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryLastBandPricesIdResponse;
                fromPartial(object: {
                    requestId?: string | number | import("long");
                }): _290.QueryLastBandPricesIdResponse;
            };
            QueryFeedByIdRequest: {
                encode(message: _290.QueryFeedByIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryFeedByIdRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _290.QueryFeedByIdRequest;
            };
            QueryFeedByIdResponse: {
                encode(message: _290.QueryFeedByIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryFeedByIdResponse;
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
                }): _290.QueryFeedByIdResponse;
            };
            QueryModuleOwnerRequest: {
                encode(_: _290.QueryModuleOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryModuleOwnerRequest;
                fromPartial(_: {}): _290.QueryModuleOwnerRequest;
            };
            QueryModuleOwnerResponse: {
                encode(message: _290.QueryModuleOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryModuleOwnerResponse;
                fromPartial(object: {
                    moduleOwner?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                        assignerAddress?: Uint8Array;
                    }[];
                }): _290.QueryModuleOwnerResponse;
            };
            QueryRoundDataRequest: {
                encode(message: _290.QueryRoundDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryRoundDataRequest;
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
                }): _290.QueryRoundDataRequest;
            };
            QueryRoundDataResponse: {
                encode(message: _290.QueryRoundDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryRoundDataResponse;
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
                }): _290.QueryRoundDataResponse;
            };
            QueryLatestRoundDataRequest: {
                encode(message: _290.QueryLatestRoundDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryLatestRoundDataRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _290.QueryLatestRoundDataRequest;
            };
            QueryLatestRoundDataResponse: {
                encode(message: _290.QueryLatestRoundDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryLatestRoundDataResponse;
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
                }): _290.QueryLatestRoundDataResponse;
            };
            RoundData: {
                encode(message: _290.RoundData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.RoundData;
                fromPartial(object: {
                    feedId?: string;
                    feedData?: {
                        Context?: Uint8Array;
                        Oracles?: Uint8Array;
                        Observations?: {
                            data?: Uint8Array;
                        }[];
                    };
                }): _290.RoundData;
            };
            QueryAccountRequest: {
                encode(message: _290.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryAccountRequest;
                fromPartial(object: {
                    accountAddress?: Uint8Array;
                }): _290.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _290.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        submitter?: Uint8Array;
                        chainlinkPublicKey?: Uint8Array;
                        chainlinkSigningKey?: Uint8Array;
                        piggyAddress?: Uint8Array;
                    };
                }): _290.QueryAccountResponse;
            };
            QueryFeedRewardAvailStrategiesRequest: {
                encode(_: _290.QueryFeedRewardAvailStrategiesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryFeedRewardAvailStrategiesRequest;
                fromPartial(_: {}): _290.QueryFeedRewardAvailStrategiesRequest;
            };
            QueryFeedRewardAvailStrategiesResponse: {
                encode(message: _290.QueryFeedRewardAvailStrategiesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.QueryFeedRewardAvailStrategiesResponse;
                fromPartial(object: {
                    availStrategies?: string[];
                }): _290.QueryFeedRewardAvailStrategiesResponse;
            };
            ProprosalAddDenomFeed: {
                encode(message: _289.ProprosalAddDenomFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.ProprosalAddDenomFeed;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    denomIds?: string[];
                }): _289.ProprosalAddDenomFeed;
            };
            ProprosalRemoveDenomFeed: {
                encode(message: _289.ProprosalRemoveDenomFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.ProprosalRemoveDenomFeed;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    denomIds?: string[];
                }): _289.ProprosalRemoveDenomFeed;
            };
            DataProvider: {
                encode(message: _288.DataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.DataProvider;
                fromPartial(object: {
                    address?: Uint8Array;
                    pubKey?: Uint8Array;
                }): _288.DataProvider;
            };
            MsgModuleOwner: {
                encode(message: _288.MsgModuleOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.MsgModuleOwner;
                fromPartial(object: {
                    address?: Uint8Array;
                    pubKey?: Uint8Array;
                    assignerAddress?: Uint8Array;
                }): _288.MsgModuleOwner;
            };
            OCRAbiEncoded: {
                encode(message: _288.OCRAbiEncoded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.OCRAbiEncoded;
                fromPartial(object: {
                    Context?: Uint8Array;
                    Oracles?: Uint8Array;
                    Observations?: {
                        data?: Uint8Array;
                    }[];
                }): _288.OCRAbiEncoded;
            };
            Observation: {
                encode(message: _288.Observation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.Observation;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _288.Observation;
            };
            FeedRewardSchema: {
                encode(message: _288.FeedRewardSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.FeedRewardSchema;
                fromPartial(object: {
                    amount?: string | number | import("long");
                    strategy?: string;
                }): _288.FeedRewardSchema;
            };
            Params: {
                encode(message: _287.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.Params;
                fromPartial(object: {
                    markets?: {
                        marketId?: string;
                        baseAssetId?: string;
                        quoteAssetId?: string;
                        sources?: string[];
                        active?: boolean;
                    }[];
                }): _287.Params;
            };
            PricesPacketData: {
                encode(message: _286.PricesPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.PricesPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _286.PricesPacketData;
            };
            NoData: {
                encode(_: _286.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.NoData;
                fromPartial(_: {}): _286.NoData;
            };
            GenesisState: {
                encode(message: _285.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.GenesisState;
                fromPartial(object: {
                    params?: {
                        markets?: {
                            marketId?: string;
                            baseAssetId?: string;
                            quoteAssetId?: string;
                            sources?: string[];
                            active?: boolean;
                        }[];
                    };
                    portId?: string;
                    moduleOwners?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                        assignerAddress?: Uint8Array;
                    }[];
                }): _285.GenesisState;
            };
            Feed: {
                encode(message: _284.Feed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Feed;
                fromPartial(object: {
                    owner?: string;
                    data?: string;
                    name?: string;
                    updatedAt?: Date;
                }): _284.Feed;
            };
            MsgNewFeedEvent: {
                encode(message: _283.MsgNewFeedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgNewFeedEvent;
                fromPartial(object: {
                    feedId?: string;
                    dataProviders?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                    }[];
                    feedOwner?: Uint8Array;
                }): _283.MsgNewFeedEvent;
            };
            MsgNewRoundDataEvent: {
                encode(message: _283.MsgNewRoundDataEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgNewRoundDataEvent;
                fromPartial(object: {
                    feedId?: string;
                    roundId?: string | number | import("long");
                    feedData?: Uint8Array[];
                }): _283.MsgNewRoundDataEvent;
            };
            MsgNewRoundRequestEvent: {
                encode(message: _283.MsgNewRoundRequestEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgNewRoundRequestEvent;
                fromPartial(object: {
                    feedId?: string;
                }): _283.MsgNewRoundRequestEvent;
            };
            MsgOraclePaidEvent: {
                encode(message: _283.MsgOraclePaidEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgOraclePaidEvent;
                fromPartial(object: {
                    feedId?: string;
                    account?: Uint8Array;
                    value?: string | number | import("long");
                }): _283.MsgOraclePaidEvent;
            };
            MsgDataProviderSetChangeEvent: {
                encode(message: _283.MsgDataProviderSetChangeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgDataProviderSetChangeEvent;
                fromPartial(object: {
                    feedId?: string;
                    changeType?: string;
                    dataProviderAddr?: Uint8Array;
                    signer?: Uint8Array;
                }): _283.MsgDataProviderSetChangeEvent;
            };
            MsgFeedParameterChangeEvent: {
                encode(message: _283.MsgFeedParameterChangeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgFeedParameterChangeEvent;
                fromPartial(object: {
                    feedId?: string;
                    changeType?: string;
                    newParameterValue?: number;
                    signer?: Uint8Array;
                }): _283.MsgFeedParameterChangeEvent;
            };
            MsgModuleOwnershipTransferEvent: {
                encode(message: _283.MsgModuleOwnershipTransferEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgModuleOwnershipTransferEvent;
                fromPartial(object: {
                    newModuleOwnerAddr?: Uint8Array;
                    signer?: Uint8Array;
                }): _283.MsgModuleOwnershipTransferEvent;
            };
            MsgFeedOwnershipTransferEvent: {
                encode(message: _283.MsgFeedOwnershipTransferEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgFeedOwnershipTransferEvent;
                fromPartial(object: {
                    feedId?: string;
                    newFeedOwnerAddr?: Uint8Array;
                    signer?: Uint8Array;
                }): _283.MsgFeedOwnershipTransferEvent;
            };
            MsgFeedDataValidationFailedEvent: {
                encode(message: _283.MsgFeedDataValidationFailedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgFeedDataValidationFailedEvent;
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
                }): _283.MsgFeedDataValidationFailedEvent;
            };
            MsgFeedRewardSchemaChangeEvent: {
                encode(message: _283.MsgFeedRewardSchemaChangeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.MsgFeedRewardSchemaChangeEvent;
                fromPartial(object: {
                    feedId?: string;
                    newStrategy?: string;
                    newBaseAmount?: string | number | import("long");
                    signer?: Uint8Array;
                }): _283.MsgFeedRewardSchemaChangeEvent;
            };
            BandPricesCallData: {
                encode(message: _282.BandPricesCallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.BandPricesCallData;
                fromPartial(object: {
                    symbols?: string[];
                    multiplier?: string | number | import("long");
                }): _282.BandPricesCallData;
            };
            BandPricesResult: {
                encode(message: _282.BandPricesResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.BandPricesResult;
                fromPartial(object: {
                    rates?: (string | number | import("long"))[];
                }): _282.BandPricesResult;
            };
        };
    }
    namespace ratelimit {
        const v1: {
            QueryClientImpl: typeof _508.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _296.QueryParamsRequest): Promise<_296.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _488.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _296.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.QueryParamsRequest;
                fromPartial(_: {}): _296.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _296.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        contractAddress?: string;
                    };
                }): _296.QueryParamsResponse;
            };
            Params: {
                encode(message: _295.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.Params;
                fromPartial(object: {
                    contractAddress?: string;
                }): _295.Params;
            };
            GenesisState: {
                encode(message: _294.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.GenesisState;
                fromPartial(object: {
                    params?: {
                        contractAddress?: string;
                    };
                }): _294.GenesisState;
            };
            EventRevert: {
                encode(message: _293.EventRevert, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.EventRevert;
                fromPartial(object: {
                    id?: string;
                }): _293.EventRevert;
            };
        };
    }
    namespace reserve {
        const v1: {
            MsgClientImpl: typeof _523.MsgClientImpl;
            QueryClientImpl: typeof _509.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _301.QueryParamsRequest): Promise<_301.QueryParamsResponse>;
                getDenoms(request?: _301.QueryGetDenomsRequest): Promise<_301.QueryGetDenomsResponse>;
                getDenom(request: _301.QueryGetDenomRequest): Promise<_301.QueryGetDenomResponse>;
                getDenomWhitelist(request: _301.QueryGetDenomWhitelistRequest): Promise<_301.QueryGetDenomWhitelistResponse>;
                denomsFromCreator(request: _301.QueryDenomsFromCreatorRequest): Promise<_301.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _489.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _303.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintDenom(value: _303.MsgMintDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnDenom(value: _303.MsgBurnDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeDenomAdmin(value: _303.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _303.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _303.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _303.MsgCreateDenom): {
                        typeUrl: string;
                        value: _303.MsgCreateDenom;
                    };
                    mintDenom(value: _303.MsgMintDenom): {
                        typeUrl: string;
                        value: _303.MsgMintDenom;
                    };
                    burnDenom(value: _303.MsgBurnDenom): {
                        typeUrl: string;
                        value: _303.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _303.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _303.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _303.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _303.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _303.MsgForceTransfer): {
                        typeUrl: string;
                        value: _303.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _303.MsgCreateDenom): {
                        typeUrl: string;
                        value: _303.MsgCreateDenom;
                    };
                    mintDenom(value: _303.MsgMintDenom): {
                        typeUrl: string;
                        value: _303.MsgMintDenom;
                    };
                    burnDenom(value: _303.MsgBurnDenom): {
                        typeUrl: string;
                        value: _303.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _303.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _303.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _303.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _303.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _303.MsgForceTransfer): {
                        typeUrl: string;
                        value: _303.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/ollo.reserve.v1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _303.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _303.MsgCreateDenom;
                };
                "/ollo.reserve.v1.MsgMintDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _303.MsgMintDenom) => {
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
                    }) => _303.MsgMintDenom;
                };
                "/ollo.reserve.v1.MsgBurnDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _303.MsgBurnDenom) => {
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
                    }) => _303.MsgBurnDenom;
                };
                "/ollo.reserve.v1.MsgChangeDenomAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _303.MsgChangeDenomAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _303.MsgChangeDenomAdmin;
                };
                "/ollo.reserve.v1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _303.MsgSetDenomMetadata) => {
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
                    }) => _303.MsgSetDenomMetadata;
                };
                "/ollo.reserve.v1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: _303.MsgForceTransfer) => {
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
                    }) => _303.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                encode(message: _303.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _303.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _303.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _303.MsgCreateDenomResponse;
            };
            MsgMintDenom: {
                encode(message: _303.MsgMintDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgMintDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _303.MsgMintDenom;
            };
            MsgMintDenomResponse: {
                encode(_: _303.MsgMintDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgMintDenomResponse;
                fromPartial(_: {}): _303.MsgMintDenomResponse;
            };
            MsgBurnDenom: {
                encode(message: _303.MsgBurnDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgBurnDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _303.MsgBurnDenom;
            };
            MsgBurnDenomResponse: {
                encode(_: _303.MsgBurnDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgBurnDenomResponse;
                fromPartial(_: {}): _303.MsgBurnDenomResponse;
            };
            MsgChangeDenomAdmin: {
                encode(message: _303.MsgChangeDenomAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgChangeDenomAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _303.MsgChangeDenomAdmin;
            };
            MsgChangeDenomAdminResponse: {
                encode(_: _303.MsgChangeDenomAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgChangeDenomAdminResponse;
                fromPartial(_: {}): _303.MsgChangeDenomAdminResponse;
            };
            MsgForceTransfer: {
                encode(message: _303.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgForceTransfer;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    transferFromAddress?: string;
                    transferToAddress?: string;
                }): _303.MsgForceTransfer;
            };
            MsgForceTransferResponse: {
                encode(_: _303.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgForceTransferResponse;
                fromPartial(_: {}): _303.MsgForceTransferResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _303.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgSetDenomMetadata;
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
                }): _303.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _303.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.MsgSetDenomMetadataResponse;
                fromPartial(_: {}): _303.MsgSetDenomMetadataResponse;
            };
            DenomWhitelist: {
                encode(message: _302.DenomWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _302.DenomWhitelist;
                fromPartial(object: {
                    denom?: string;
                    addresses?: string[];
                }): _302.DenomWhitelist;
            };
            QueryParamsRequest: {
                encode(_: _301.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryParamsRequest;
                fromPartial(_: {}): _301.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _301.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _301.QueryParamsResponse;
            };
            QueryGetDenomWhitelistRequest: {
                encode(message: _301.QueryGetDenomWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryGetDenomWhitelistRequest;
                fromPartial(object: {
                    denom?: string;
                }): _301.QueryGetDenomWhitelistRequest;
            };
            QueryGetDenomWhitelistResponse: {
                encode(message: _301.QueryGetDenomWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryGetDenomWhitelistResponse;
                fromPartial(object: {
                    whitelist?: {
                        denom?: string;
                        addresses?: string[];
                    };
                }): _301.QueryGetDenomWhitelistResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _301.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _301.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _301.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _301.QueryDenomsFromCreatorResponse;
            };
            QueryGetDenomsRequest: {
                encode(_: _301.QueryGetDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryGetDenomsRequest;
                fromPartial(_: {}): _301.QueryGetDenomsRequest;
            };
            QueryGetDenomsResponse: {
                encode(message: _301.QueryGetDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryGetDenomsResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _301.QueryGetDenomsResponse;
            };
            QueryGetDenomRequest: {
                encode(message: _301.QueryGetDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryGetDenomRequest;
                fromPartial(object: {
                    denom?: string;
                }): _301.QueryGetDenomRequest;
            };
            QueryGetDenomResponse: {
                encode(_: _301.QueryGetDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.QueryGetDenomResponse;
                fromPartial(_: {}): _301.QueryGetDenomResponse;
            };
            Params: {
                encode(message: _300.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _300.Params;
            };
            DenomUnit: {
                encode(message: _299.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _299.DenomUnit;
            };
            DenomMetadata: {
                encode(message: _299.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.DenomMetadata;
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
                }): _299.DenomMetadata;
            };
            GenesisState: {
                encode(message: _298.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.GenesisState;
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
                }): _298.GenesisState;
            };
            EventDenomBurned: {
                encode(message: _297.EventDenomBurned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.EventDenomBurned;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _297.EventDenomBurned;
            };
            EventDenomMinted: {
                encode(message: _297.EventDenomMinted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.EventDenomMinted;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _297.EventDenomMinted;
            };
        };
    }
    namespace token {
        const v1: {
            MsgClientImpl: typeof _524.MsgClientImpl;
            QueryClientImpl: typeof _510.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                token(request: _307.QueryTokenRequest): Promise<_307.QueryTokenResponse>;
                tokens(request: _307.QueryTokensRequest): Promise<_307.QueryTokensResponse>;
                fees(request: _307.QueryFeesRequest): Promise<_307.QueryFeesResponse>;
                params(request?: _307.QueryParamsRequest): Promise<_307.QueryParamsResponse>;
                burn(request?: _307.QueryBurnRequest): Promise<_307.QueryBurnResponse>;
            };
            LCDQueryClient: typeof _490.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueToken(value: _309.MsgIssueToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editToken(value: _309.MsgEditToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintToken(value: _309.MsgMintToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnToken(value: _309.MsgBurnToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenOwner(value: _309.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueToken(value: _309.MsgIssueToken): {
                        typeUrl: string;
                        value: _309.MsgIssueToken;
                    };
                    editToken(value: _309.MsgEditToken): {
                        typeUrl: string;
                        value: _309.MsgEditToken;
                    };
                    mintToken(value: _309.MsgMintToken): {
                        typeUrl: string;
                        value: _309.MsgMintToken;
                    };
                    burnToken(value: _309.MsgBurnToken): {
                        typeUrl: string;
                        value: _309.MsgBurnToken;
                    };
                    transferTokenOwner(value: _309.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _309.MsgTransferTokenOwner;
                    };
                };
                fromPartial: {
                    issueToken(value: _309.MsgIssueToken): {
                        typeUrl: string;
                        value: _309.MsgIssueToken;
                    };
                    editToken(value: _309.MsgEditToken): {
                        typeUrl: string;
                        value: _309.MsgEditToken;
                    };
                    mintToken(value: _309.MsgMintToken): {
                        typeUrl: string;
                        value: _309.MsgMintToken;
                    };
                    burnToken(value: _309.MsgBurnToken): {
                        typeUrl: string;
                        value: _309.MsgBurnToken;
                    };
                    transferTokenOwner(value: _309.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _309.MsgTransferTokenOwner;
                    };
                };
            };
            AminoConverter: {
                "/ollo.token.v1.MsgIssueToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, scale, minUnit, initialSupply, maxSupply, mintable, owner }: _309.MsgIssueToken) => {
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
                    }) => _309.MsgIssueToken;
                };
                "/ollo.token.v1.MsgEditToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, maxSupply, mintable, owner }: _309.MsgEditToken) => {
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
                    }) => _309.MsgEditToken;
                };
                "/ollo.token.v1.MsgMintToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, to, owner }: _309.MsgMintToken) => {
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
                    }) => _309.MsgMintToken;
                };
                "/ollo.token.v1.MsgBurnToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, sender }: _309.MsgBurnToken) => {
                        symbol: string;
                        amount: string;
                        sender: string;
                    };
                    fromAmino: ({ symbol, amount, sender }: {
                        symbol: string;
                        amount: string;
                        sender: string;
                    }) => _309.MsgBurnToken;
                };
                "/ollo.token.v1.MsgTransferTokenOwner": {
                    aminoType: string;
                    toAmino: ({ srcOwner, dstOwner, symbol }: _309.MsgTransferTokenOwner) => {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    };
                    fromAmino: ({ src_owner, dst_owner, symbol }: {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    }) => _309.MsgTransferTokenOwner;
                };
            };
            MsgIssueToken: {
                encode(message: _309.MsgIssueToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgIssueToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _309.MsgIssueToken;
            };
            MsgIssueTokenResponse: {
                encode(_: _309.MsgIssueTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgIssueTokenResponse;
                fromPartial(_: {}): _309.MsgIssueTokenResponse;
            };
            MsgTransferTokenOwner: {
                encode(message: _309.MsgTransferTokenOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgTransferTokenOwner;
                fromPartial(object: {
                    srcOwner?: string;
                    dstOwner?: string;
                    symbol?: string;
                }): _309.MsgTransferTokenOwner;
            };
            MsgTransferTokenOwnerResponse: {
                encode(_: _309.MsgTransferTokenOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgTransferTokenOwnerResponse;
                fromPartial(_: {}): _309.MsgTransferTokenOwnerResponse;
            };
            MsgEditToken: {
                encode(message: _309.MsgEditToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgEditToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    maxSupply?: string | number | import("long");
                    mintable?: string;
                    owner?: string;
                }): _309.MsgEditToken;
            };
            MsgEditTokenResponse: {
                encode(_: _309.MsgEditTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgEditTokenResponse;
                fromPartial(_: {}): _309.MsgEditTokenResponse;
            };
            MsgMintToken: {
                encode(message: _309.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgMintToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    to?: string;
                    owner?: string;
                }): _309.MsgMintToken;
            };
            MsgMintTokenResponse: {
                encode(_: _309.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgMintTokenResponse;
                fromPartial(_: {}): _309.MsgMintTokenResponse;
            };
            MsgBurnToken: {
                encode(message: _309.MsgBurnToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgBurnToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    sender?: string;
                }): _309.MsgBurnToken;
            };
            MsgBurnTokenResponse: {
                encode(_: _309.MsgBurnTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.MsgBurnTokenResponse;
                fromPartial(_: {}): _309.MsgBurnTokenResponse;
            };
            Token: {
                encode(message: _308.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.Token;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _308.Token;
            };
            QueryTokenRequest: {
                encode(message: _307.QueryTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryTokenRequest;
                fromPartial(object: {
                    denom?: string;
                }): _307.QueryTokenRequest;
            };
            QueryTokenResponse: {
                encode(message: _307.QueryTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryTokenResponse;
                fromPartial(object: {
                    Token?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _307.QueryTokenResponse;
            };
            QueryTokensRequest: {
                encode(message: _307.QueryTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryTokensRequest;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _307.QueryTokensRequest;
            };
            QueryTokensResponse: {
                encode(message: _307.QueryTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryTokensResponse;
                fromPartial(object: {
                    Tokens?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _307.QueryTokensResponse;
            };
            QueryFeesRequest: {
                encode(message: _307.QueryFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryFeesRequest;
                fromPartial(object: {
                    denom?: string;
                }): _307.QueryFeesRequest;
            };
            QueryFeesResponse: {
                encode(message: _307.QueryFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryFeesResponse;
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
                }): _307.QueryFeesResponse;
            };
            QueryParamsRequest: {
                encode(_: _307.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryParamsRequest;
                fromPartial(_: {}): _307.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _307.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryParamsResponse;
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
                }): _307.QueryParamsResponse;
            };
            QueryBurnRequest: {
                encode(_: _307.QueryBurnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryBurnRequest;
                fromPartial(_: {}): _307.QueryBurnRequest;
            };
            QueryBurnResponse: {
                encode(message: _307.QueryBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryBurnResponse;
                fromPartial(object: {
                    burnedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _307.QueryBurnResponse;
            };
            Params: {
                encode(message: _306.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Params;
                fromPartial(object: {
                    tokenTaxRate?: string;
                    issueTokenBaseFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    mintTokenFeeRatio?: string;
                }): _306.Params;
            };
            GenesisState: {
                encode(message: _305.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.GenesisState;
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
                }): _305.GenesisState;
            };
            EventTokenIssued: {
                encode(message: _304.EventTokenIssued, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.EventTokenIssued;
                fromPartial(object: {
                    name?: string;
                    symbol?: string;
                    owner?: string;
                }): _304.EventTokenIssued;
            };
            EventTokenBurned: {
                encode(message: _304.EventTokenBurned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.EventTokenBurned;
                fromPartial(object: {
                    name?: string;
                    symbol?: string;
                    owner?: string;
                }): _304.EventTokenBurned;
            };
            EventTokenMinted: {
                encode(message: _304.EventTokenMinted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.EventTokenMinted;
                fromPartial(object: {
                    name?: string;
                    symbol?: string;
                    owner?: string;
                }): _304.EventTokenMinted;
            };
            EventTokenEdit: {
                encode(message: _304.EventTokenEdit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.EventTokenEdit;
                fromPartial(object: {
                    name?: string;
                    symbol?: string;
                    owner?: string;
                }): _304.EventTokenEdit;
            };
            EventTokenTransferredOwner: {
                encode(message: _304.EventTokenTransferredOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.EventTokenTransferredOwner;
                fromPartial(object: {
                    name?: string;
                    symbol?: string;
                    owner?: string;
                }): _304.EventTokenTransferredOwner;
            };
        };
    }
    namespace vault {
        const v1: {
            MsgClientImpl: typeof _525.MsgClientImpl;
            QueryClientImpl: typeof _511.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryVault(request: _313.QueryVaultRequest): Promise<_313.QueryVaultResponse>;
                queryAllVaults(request?: _313.QueryAllVaultsRequest): Promise<_313.QueryAllVaultsResponse>;
            };
            LCDQueryClient: typeof _491.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    msgCreate(value: _314.MsgCreateRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDeposit(value: _314.MsgDepositRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgWithdraw(value: _314.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDraw(value: _314.MsgDrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgRepay(value: _314.MsgRepayRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgClose(value: _314.MsgCloseRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    msgCreate(value: _314.MsgCreateRequest): {
                        typeUrl: string;
                        value: _314.MsgCreateRequest;
                    };
                    msgDeposit(value: _314.MsgDepositRequest): {
                        typeUrl: string;
                        value: _314.MsgDepositRequest;
                    };
                    msgWithdraw(value: _314.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _314.MsgWithdrawRequest;
                    };
                    msgDraw(value: _314.MsgDrawRequest): {
                        typeUrl: string;
                        value: _314.MsgDrawRequest;
                    };
                    msgRepay(value: _314.MsgRepayRequest): {
                        typeUrl: string;
                        value: _314.MsgRepayRequest;
                    };
                    msgClose(value: _314.MsgCloseRequest): {
                        typeUrl: string;
                        value: _314.MsgCloseRequest;
                    };
                };
                fromPartial: {
                    msgCreate(value: _314.MsgCreateRequest): {
                        typeUrl: string;
                        value: _314.MsgCreateRequest;
                    };
                    msgDeposit(value: _314.MsgDepositRequest): {
                        typeUrl: string;
                        value: _314.MsgDepositRequest;
                    };
                    msgWithdraw(value: _314.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _314.MsgWithdrawRequest;
                    };
                    msgDraw(value: _314.MsgDrawRequest): {
                        typeUrl: string;
                        value: _314.MsgDrawRequest;
                    };
                    msgRepay(value: _314.MsgRepayRequest): {
                        typeUrl: string;
                        value: _314.MsgRepayRequest;
                    };
                    msgClose(value: _314.MsgCloseRequest): {
                        typeUrl: string;
                        value: _314.MsgCloseRequest;
                    };
                };
            };
            AminoConverter: {
                "/ollo.vault.v1.MsgCreateRequest": {
                    aminoType: string;
                    toAmino: ({ from, amountIn, amountOut }: _314.MsgCreateRequest) => {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    };
                    fromAmino: ({ from, amount_in, amount_out }: {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    }) => _314.MsgCreateRequest;
                };
                "/ollo.vault.v1.MsgDepositRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _314.MsgDepositRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _314.MsgDepositRequest;
                };
                "/ollo.vault.v1.MsgWithdrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _314.MsgWithdrawRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _314.MsgWithdrawRequest;
                };
                "/ollo.vault.v1.MsgDrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _314.MsgDrawRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _314.MsgDrawRequest;
                };
                "/ollo.vault.v1.MsgRepayRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _314.MsgRepayRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _314.MsgRepayRequest;
                };
                "/ollo.vault.v1.MsgCloseRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId }: _314.MsgCloseRequest) => {
                        from: string;
                        user_vault_id: string;
                    };
                    fromAmino: ({ from, user_vault_id }: {
                        from: string;
                        user_vault_id: string;
                    }) => _314.MsgCloseRequest;
                };
            };
            Vault: {
                encode(message: _315.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.Vault;
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
                }): _315.Vault;
            };
            EmissionsVault: {
                encode(message: _315.EmissionsVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.EmissionsVault;
                fromPartial(object: {
                    id?: string | number | import("long");
                    amountIn?: string;
                    amountOut?: string;
                    createdAt?: Date;
                }): _315.EmissionsVault;
            };
            EmissionsVaultRewards: {
                encode(message: _315.EmissionsVaultRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.EmissionsVaultRewards;
                fromPartial(object: {
                    user?: string;
                    blockHeight?: string | number | import("long");
                    amount?: string;
                }): _315.EmissionsVaultRewards;
            };
            MsgCreateRequest: {
                encode(message: _314.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgCreateRequest;
                fromPartial(object: {
                    from?: string;
                    amountIn?: string;
                    amountOut?: string;
                }): _314.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _314.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgCreateResponse;
                fromPartial(_: {}): _314.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _314.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgDepositRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _314.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _314.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgDepositResponse;
                fromPartial(_: {}): _314.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _314.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgWithdrawRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _314.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _314.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgWithdrawResponse;
                fromPartial(_: {}): _314.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _314.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgDrawRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _314.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _314.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgDrawResponse;
                fromPartial(_: {}): _314.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _314.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgRepayRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _314.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _314.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgRepayResponse;
                fromPartial(_: {}): _314.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _314.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgCloseRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                }): _314.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _314.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgCloseResponse;
                fromPartial(_: {}): _314.MsgCloseResponse;
            };
            QueryAllVaultsRequest: {
                encode(message: _313.QueryAllVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryAllVaultsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _313.QueryAllVaultsRequest;
            };
            QueryAllVaultsResponse: {
                encode(message: _313.QueryAllVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryAllVaultsResponse;
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
                }): _313.QueryAllVaultsResponse;
            };
            QueryVaultRequest: {
                encode(message: _313.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryVaultRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _313.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _313.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryVaultResponse;
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
                }): _313.QueryVaultResponse;
            };
            Params: {
                encode(_: _312.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Params;
                fromPartial(_: {}): _312.Params;
            };
            GenesisState: {
                encode(message: _311.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.GenesisState;
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
                }): _311.GenesisState;
            };
            EventCreateVault: {
                encode(message: _310.EventCreateVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.EventCreateVault;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                }): _310.EventCreateVault;
            };
            EventCloseVault: {
                encode(message: _310.EventCloseVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.EventCloseVault;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                }): _310.EventCloseVault;
            };
            EventDepositCollateral: {
                encode(message: _310.EventDepositCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.EventDepositCollateral;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _310.EventDepositCollateral;
            };
            EventWithdrawCollateral: {
                encode(message: _310.EventWithdrawCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.EventWithdrawCollateral;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _310.EventWithdrawCollateral;
            };
            EventDrawDebt: {
                encode(message: _310.EventDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.EventDrawDebt;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _310.EventDrawDebt;
            };
            EventRepayDebt: {
                encode(message: _310.EventRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.EventRepayDebt;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _310.EventRepayDebt;
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
                    v1: _512.MsgClientImpl;
                };
                emissions: {
                    v1: _513.MsgClientImpl;
                };
                farming: {
                    v1: _514.MsgClientImpl;
                };
                grants: {
                    v1: _515.MsgClientImpl;
                };
                incentive: {
                    v1: _516.MsgClientImpl;
                };
                lend: {
                    v1: _517.MsgClientImpl;
                };
                liquidity: {
                    v1: _518.MsgClientImpl;
                };
                lock: {
                    v1: _519.MsgClientImpl;
                };
                nft: {
                    v1: _520.MsgClientImpl;
                };
                ons: {
                    v1: _521.MsgClientImpl;
                };
                prices: {
                    v1: _522.MsgClientImpl;
                };
                reserve: {
                    v1: _523.MsgClientImpl;
                };
                token: {
                    v1: _524.MsgClientImpl;
                };
                vault: {
                    v1: _525.MsgClientImpl;
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
                        params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
                        plans(request: _193.QueryPlansRequest): Promise<_193.QueryPlansResponse>;
                        plan(request: _193.QueryPlanRequest): Promise<_193.QueryPlanResponse>;
                        stakings(request: _193.QueryStakingsRequest): Promise<_193.QueryStakingsResponse>;
                        totalStakings(request: _193.QueryTotalStakingsRequest): Promise<_193.QueryTotalStakingsResponse>;
                        rewards(request: _193.QueryRewardsRequest): Promise<_193.QueryRewardsResponse>;
                        currentEpochDays(request?: _193.QueryCurrentEpochDaysRequest): Promise<_193.QueryCurrentEpochDaysResponse>;
                    };
                };
                fees: {
                    v1: {
                        feeTokens(request?: _199.QueryFeeTokensRequest): Promise<_199.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _199.QueryDenomSpotPriceRequest): Promise<_199.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _199.QueryDenomPoolIdRequest): Promise<_199.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _199.QueryBaseDenomRequest): Promise<_199.QueryBaseDenomResponse>;
                    };
                };
                grants: {
                    v1: {
                        params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
                        auctions(request: _204.QueryAuctionsRequest): Promise<_204.QueryAuctionsResponse>;
                        auction(request: _204.QueryAuctionRequest): Promise<_204.QueryAuctionResponse>;
                        allowedBidder(request: _204.QueryAllowedBidderRequest): Promise<_204.QueryAllowedBidderResponse>;
                        allowedBidders(request: _204.QueryAllowedBiddersRequest): Promise<_204.QueryAllowedBiddersResponse>;
                        bids(request: _204.QueryBidsRequest): Promise<_204.QueryBidsResponse>;
                        bid(request: _204.QueryBidRequest): Promise<_204.QueryBidResponse>;
                        vestings(request: _204.QueryVestingsRequest): Promise<_204.QueryVestingsResponse>;
                    };
                };
                icq: {
                    v1: {
                        params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
                    };
                };
                incentive: {
                    v1: {
                        params(request?: _220.QueryParamsRequest): Promise<_220.QueryParamsResponse>;
                        marketMakers(request: _220.QueryMarketMakersRequest): Promise<_220.QueryMarketMakersResponse>;
                        incentive(request: _220.QueryIncentiveRequest): Promise<_220.QueryIncentiveResponse>;
                    };
                };
                lend: {
                    v1: {
                        params(request?: _228.QueryParamsRequest): Promise<_228.QueryParamsResponse>;
                        loan(request: _228.QueryGetLoanRequest): Promise<_228.QueryGetLoanResponse>;
                        loanAll(request?: _228.QueryAllLoanRequest): Promise<_228.QueryAllLoanResponse>;
                    };
                };
                liquidity: {
                    v1: {
                        params(request?: _238.QueryParamsRequest): Promise<_238.QueryParamsResponse>;
                        pools(request: _238.QueryPoolsRequest): Promise<_238.QueryPoolsResponse>;
                        pool(request: _238.QueryPoolRequest): Promise<_238.QueryPoolResponse>;
                        poolByReserveAddress(request: _238.QueryPoolByReserveAddressRequest): Promise<_238.QueryPoolResponse>;
                        poolByPoolCoinDenom(request: _238.QueryPoolByPoolCoinDenomRequest): Promise<_238.QueryPoolResponse>;
                        pairs(request: _238.QueryPairsRequest): Promise<_238.QueryPairsResponse>;
                        pair(request: _238.QueryPairRequest): Promise<_238.QueryPairResponse>;
                        depositRequests(request: _238.QueryDepositRequestsRequest): Promise<_238.QueryDepositRequestsResponse>;
                        depositRequest(request: _238.QueryDepositRequestRequest): Promise<_238.QueryDepositRequestResponse>;
                        withdrawRequests(request: _238.QueryWithdrawRequestsRequest): Promise<_238.QueryWithdrawRequestsResponse>;
                        withdrawRequest(request: _238.QueryWithdrawRequestRequest): Promise<_238.QueryWithdrawRequestResponse>;
                        orders(request: _238.QueryOrdersRequest): Promise<_238.QueryOrdersResponse>;
                        order(request: _238.QueryOrderRequest): Promise<_238.QueryOrderResponse>;
                        ordersByOrderer(request: _238.QueryOrdersByOrdererRequest): Promise<_238.QueryOrdersResponse>;
                        orderBooks(request: _238.QueryOrderBooksRequest): Promise<_238.QueryOrderBooksResponse>;
                        numMMOrders(request: _238.QueryNumMMOrdersRequest): Promise<_238.QueryNumMMOrdersResponse>;
                    };
                };
                lock: {
                    v1: {
                        queryParams(request?: _246.QueryParamsRequest): Promise<_246.QueryParamsResponse>;
                    };
                };
                market: {
                    v1: {
                        params(request?: _255.QueryParamsRequest): Promise<_255.QueryParamsResponse>;
                    };
                };
                mint: {
                    v1: {
                        params(request?: _261.QueryParamsRequest): Promise<_261.QueryParamsResponse>;
                        inflation(request?: _261.QueryInflationRequest): Promise<_261.QueryInflationResponse>;
                        annualProvisions(request?: _261.QueryAnnualProvisionsRequest): Promise<_261.QueryAnnualProvisionsResponse>;
                        distribution(request?: _261.QueryDistributionRequest): Promise<_261.QueryDistributionResponse>;
                        lastBlockTime(request?: _261.QueryLastBlockTimeRequest): Promise<_261.QueryLastBlockTimeResponse>;
                    };
                };
                nft: {
                    v1: {
                        supply(request: _268.QuerySupplyRequest): Promise<_268.QuerySupplyResponse>;
                        nFTsOfOwner(request: _268.QueryNFTsOfOwnerRequest): Promise<_268.QueryNFTsOfOwnerResponse>;
                        collection(request: _268.QueryCollectionRequest): Promise<_268.QueryCollectionResponse>;
                        denom(request: _268.QueryDenomRequest): Promise<_268.QueryDenomResponse>;
                        denoms(request?: _268.QueryDenomsRequest): Promise<_268.QueryDenomsResponse>;
                        nFT(request: _268.QueryNFTRequest): Promise<_268.QueryNFTResponse>;
                        params(request?: _268.QueryParamsRequest): Promise<_268.QueryParamsResponse>;
                    };
                };
                ons: {
                    v1: {
                        params(request?: _278.QueryParamsRequest): Promise<_278.QueryParamsResponse>;
                        whois(request: _278.QueryGetWhoisRequest): Promise<_278.QueryGetWhoisResponse>;
                        whoisAll(request?: _278.QueryAllWhoisRequest): Promise<_278.QueryAllWhoisResponse>;
                    };
                };
                prices: {
                    v1: {
                        params(request?: _290.QueryParamsRequest): Promise<_290.QueryParamsResponse>;
                        bandPricesResult(request: _290.QueryBandPricesRequest): Promise<_290.QueryBandPricesResponse>;
                        lastBandPricesId(request?: _290.QueryLastBandPricesIdRequest): Promise<_290.QueryLastBandPricesIdResponse>;
                        queryRoundData(request: _290.QueryRoundDataRequest): Promise<_290.QueryRoundDataResponse>;
                        latestRoundData(request: _290.QueryLatestRoundDataRequest): Promise<_290.QueryLatestRoundDataResponse>;
                        queryAllModuleOwner(request?: _290.QueryModuleOwnerRequest): Promise<_290.QueryModuleOwnerResponse>;
                        queryFeedByFeedId(request: _290.QueryFeedByIdRequest): Promise<_290.QueryFeedByIdResponse>;
                        queryAccountInfo(request: _290.QueryAccountRequest): Promise<_290.QueryAccountResponse>;
                        queryFeedRewardAvailStrategy(request?: _290.QueryFeedRewardAvailStrategiesRequest): Promise<_290.QueryFeedRewardAvailStrategiesResponse>;
                    };
                };
                ratelimit: {
                    v1: {
                        params(request?: _296.QueryParamsRequest): Promise<_296.QueryParamsResponse>;
                    };
                };
                reserve: {
                    v1: {
                        params(request?: _301.QueryParamsRequest): Promise<_301.QueryParamsResponse>;
                        getDenoms(request?: _301.QueryGetDenomsRequest): Promise<_301.QueryGetDenomsResponse>;
                        getDenom(request: _301.QueryGetDenomRequest): Promise<_301.QueryGetDenomResponse>;
                        getDenomWhitelist(request: _301.QueryGetDenomWhitelistRequest): Promise<_301.QueryGetDenomWhitelistResponse>;
                        denomsFromCreator(request: _301.QueryDenomsFromCreatorRequest): Promise<_301.QueryDenomsFromCreatorResponse>;
                    };
                };
                token: {
                    v1: {
                        token(request: _307.QueryTokenRequest): Promise<_307.QueryTokenResponse>;
                        tokens(request: _307.QueryTokensRequest): Promise<_307.QueryTokensResponse>;
                        fees(request: _307.QueryFeesRequest): Promise<_307.QueryFeesResponse>;
                        params(request?: _307.QueryParamsRequest): Promise<_307.QueryParamsResponse>;
                        burn(request?: _307.QueryBurnRequest): Promise<_307.QueryBurnResponse>;
                    };
                };
                vault: {
                    v1: {
                        queryVault(request: _313.QueryVaultRequest): Promise<_313.QueryVaultResponse>;
                        queryAllVaults(request?: _313.QueryAllVaultsRequest): Promise<_313.QueryAllVaultsResponse>;
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
                    v1: _472.LCDQueryClient;
                };
                emissions: {
                    v1: _473.LCDQueryClient;
                };
                epoch: {
                    v1: _474.LCDQueryClient;
                };
                farming: {
                    v1: _475.LCDQueryClient;
                };
                fees: {
                    v1: _476.LCDQueryClient;
                };
                grants: {
                    v1: _477.LCDQueryClient;
                };
                icq: {
                    v1: _478.LCDQueryClient;
                };
                incentive: {
                    v1: _479.LCDQueryClient;
                };
                lend: {
                    v1: _480.LCDQueryClient;
                };
                liquidity: {
                    v1: _481.LCDQueryClient;
                };
                lock: {
                    v1: _482.LCDQueryClient;
                };
                market: {
                    v1: _483.LCDQueryClient;
                };
                mint: {
                    v1: _484.LCDQueryClient;
                };
                nft: {
                    v1: _485.LCDQueryClient;
                };
                ons: {
                    v1: _486.LCDQueryClient;
                };
                prices: {
                    v1: _487.LCDQueryClient;
                };
                ratelimit: {
                    v1: _488.LCDQueryClient;
                };
                reserve: {
                    v1: _489.LCDQueryClient;
                };
                token: {
                    v1: _490.LCDQueryClient;
                };
                vault: {
                    v1: _491.LCDQueryClient;
                };
            };
        }>;
    };
}
