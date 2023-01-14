import * as _134 from "./claim/v1/claim";
import * as _135 from "./claim/v1/events";
import * as _136 from "./claim/v1/genesis";
import * as _137 from "./claim/v1/goal";
import * as _138 from "./claim/v1/packet";
import * as _139 from "./claim/v1/params";
import * as _140 from "./claim/v1/query";
import * as _141 from "./claim/v1/tx";
import * as _142 from "./farming/v1/farming";
import * as _143 from "./farming/v1/genesis";
import * as _144 from "./farming/v1/params";
import * as _145 from "./farming/v1/proposal";
import * as _146 from "./farming/v1/query";
import * as _147 from "./farming/v1/tx";
import * as _148 from "./grants/v1/events";
import * as _149 from "./grants/v1/genesis";
import * as _150 from "./grants/v1/grants";
import * as _151 from "./grants/v1/params";
import * as _152 from "./grants/v1/query";
import * as _153 from "./grants/v1/tx";
import * as _154 from "./liquidity/v1/genesis";
import * as _155 from "./liquidity/v1/liquidity";
import * as _156 from "./liquidity/v1/params";
import * as _157 from "./liquidity/v1/pool";
import * as _158 from "./liquidity/v1/query";
import * as _159 from "./liquidity/v1/tx";
import * as _160 from "./loan/v1/genesis";
import * as _161 from "./loan/v1/loans";
import * as _162 from "./loan/v1/packet";
import * as _163 from "./loan/v1/params";
import * as _164 from "./loan/v1/query";
import * as _165 from "./loan/v1/tx";
import * as _166 from "./market/v1/genesis";
import * as _167 from "./market/v1/packet";
import * as _168 from "./market/v1/params";
import * as _169 from "./market/v1/query";
import * as _171 from "./mint/v1/events";
import * as _172 from "./mint/v1/genesis";
import * as _173 from "./mint/v1/mint";
import * as _174 from "./mint/v1/params";
import * as _175 from "./mint/v1/query";
import * as _177 from "./nft/v1/genesis";
import * as _178 from "./nft/v1/nft";
import * as _179 from "./nft/v1/params";
import * as _180 from "./nft/v1/query";
import * as _181 from "./nft/v1/tx";
import * as _182 from "./ons/v1/genesis";
import * as _183 from "./ons/v1/packet";
import * as _184 from "./ons/v1/params";
import * as _185 from "./ons/v1/query";
import * as _186 from "./ons/v1/tx";
import * as _187 from "./ons/v1/whois";
import * as _188 from "./reserve/v1/events";
import * as _189 from "./reserve/v1/genesis";
import * as _190 from "./reserve/v1/metadata";
import * as _191 from "./reserve/v1/params";
import * as _192 from "./reserve/v1/query";
import * as _193 from "./reserve/v1/reserve";
import * as _194 from "./reserve/v1/tx";
import * as _195 from "./token/v1/events";
import * as _196 from "./token/v1/genesis";
import * as _197 from "./token/v1/params";
import * as _198 from "./token/v1/query";
import * as _199 from "./token/v1/token";
import * as _200 from "./token/v1/tx";
import * as _333 from "./claim/v1/query.lcd";
import * as _334 from "./farming/v1/query.lcd";
import * as _335 from "./grants/v1/query.lcd";
import * as _336 from "./liquidity/v1/query.lcd";
import * as _337 from "./loan/v1/query.lcd";
import * as _338 from "./market/v1/query.lcd";
import * as _339 from "./mint/v1/query.lcd";
import * as _340 from "./nft/v1/query.lcd";
import * as _341 from "./ons/v1/query.lcd";
import * as _342 from "./reserve/v1/query.lcd";
import * as _343 from "./token/v1/query.lcd";
import * as _344 from "./claim/v1/query.rpc.Query";
import * as _345 from "./farming/v1/query.rpc.Query";
import * as _346 from "./grants/v1/query.rpc.Query";
import * as _347 from "./liquidity/v1/query.rpc.Query";
import * as _348 from "./loan/v1/query.rpc.Query";
import * as _349 from "./market/v1/query.rpc.Query";
import * as _350 from "./mint/v1/query.rpc.Query";
import * as _351 from "./nft/v1/query.rpc.Query";
import * as _352 from "./ons/v1/query.rpc.Query";
import * as _353 from "./reserve/v1/query.rpc.Query";
import * as _354 from "./token/v1/query.rpc.Query";
import * as _355 from "./claim/v1/tx.rpc.msg";
import * as _356 from "./farming/v1/tx.rpc.msg";
import * as _357 from "./grants/v1/tx.rpc.msg";
import * as _358 from "./liquidity/v1/tx.rpc.msg";
import * as _359 from "./loan/v1/tx.rpc.msg";
import * as _360 from "./nft/v1/tx.rpc.msg";
import * as _361 from "./ons/v1/tx.rpc.msg";
import * as _362 from "./reserve/v1/tx.rpc.msg";
import * as _363 from "./token/v1/tx.rpc.msg";
export declare namespace ollo {
    namespace claim {
        const v1: {
            MsgClientImpl: typeof _355.MsgClientImpl;
            QueryClientImpl: typeof _344.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                claimRecord(request: _140.QueryGetClaimRecordRequest): Promise<_140.QueryGetClaimRecordResponse>;
                claimRecordAll(request?: _140.QueryAllClaimRecordRequest): Promise<_140.QueryAllClaimRecordResponse>;
                goal(request: _140.QueryGetGoalRequest): Promise<_140.QueryGetGoalResponse>;
                goalAll(request?: _140.QueryAllGoalRequest): Promise<_140.QueryAllGoalResponse>;
                airdropSupply(request?: _140.QueryGetAirdropSupplyRequest): Promise<_140.QueryGetAirdropSupplyResponse>;
                initialClaim(request?: _140.QueryGetInitialClaimRequest): Promise<_140.QueryGetInitialClaimResponse>;
            };
            LCDQueryClient: typeof _333.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _141.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _141.MsgClaim): {
                        typeUrl: string;
                        value: _141.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _141.MsgClaim): {
                        typeUrl: string;
                        value: _141.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/ollo.claim.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ claimer, goalId }: _141.MsgClaim) => {
                        claimer: string;
                        goal_id: string;
                    };
                    fromAmino: ({ claimer, goal_id }: {
                        claimer: string;
                        goal_id: string;
                    }) => _141.MsgClaim;
                };
            };
            MsgClaim: {
                encode(message: _141.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgClaim;
                fromPartial(object: {
                    claimer?: string;
                    goalId?: string | number | import("long");
                }): _141.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _141.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgClaimResponse;
                fromPartial(object: {
                    claimed?: string;
                }): _141.MsgClaimResponse;
            };
            QueryParamsRequest: {
                encode(_: _140.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsRequest;
                fromPartial(_: {}): _140.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _140.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        decayInformation?: {
                            enabled?: boolean;
                            decayStart?: Date;
                            decayEnd?: Date;
                        };
                        airdropStart?: Date;
                    };
                }): _140.QueryParamsResponse;
            };
            QueryGetClaimRecordRequest: {
                encode(message: _140.QueryGetClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetClaimRecordRequest;
                fromPartial(object: {
                    address?: string;
                }): _140.QueryGetClaimRecordRequest;
            };
            QueryGetClaimRecordResponse: {
                encode(message: _140.QueryGetClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetClaimRecordResponse;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        claimable?: string;
                        completedGoals?: (string | number | import("long"))[];
                        claimedGoals?: (string | number | import("long"))[];
                    };
                }): _140.QueryGetClaimRecordResponse;
            };
            QueryAllClaimRecordRequest: {
                encode(message: _140.QueryAllClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryAllClaimRecordRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _140.QueryAllClaimRecordRequest;
            };
            QueryAllClaimRecordResponse: {
                encode(message: _140.QueryAllClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryAllClaimRecordResponse;
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
                }): _140.QueryAllClaimRecordResponse;
            };
            QueryGetGoalRequest: {
                encode(message: _140.QueryGetGoalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetGoalRequest;
                fromPartial(object: {
                    goalID?: string | number | import("long");
                }): _140.QueryGetGoalRequest;
            };
            QueryGetGoalResponse: {
                encode(message: _140.QueryGetGoalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetGoalResponse;
                fromPartial(object: {
                    Goal?: {
                        id?: string | number | import("long");
                        description?: string;
                        weight?: string;
                    };
                }): _140.QueryGetGoalResponse;
            };
            QueryAllGoalRequest: {
                encode(message: _140.QueryAllGoalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryAllGoalRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _140.QueryAllGoalRequest;
            };
            QueryAllGoalResponse: {
                encode(message: _140.QueryAllGoalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryAllGoalResponse;
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
                }): _140.QueryAllGoalResponse;
            };
            QueryGetAirdropSupplyRequest: {
                encode(_: _140.QueryGetAirdropSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetAirdropSupplyRequest;
                fromPartial(_: {}): _140.QueryGetAirdropSupplyRequest;
            };
            QueryGetAirdropSupplyResponse: {
                encode(message: _140.QueryGetAirdropSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetAirdropSupplyResponse;
                fromPartial(object: {
                    AirdropSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _140.QueryGetAirdropSupplyResponse;
            };
            QueryGetInitialClaimRequest: {
                encode(_: _140.QueryGetInitialClaimRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetInitialClaimRequest;
                fromPartial(_: {}): _140.QueryGetInitialClaimRequest;
            };
            QueryGetInitialClaimResponse: {
                encode(message: _140.QueryGetInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryGetInitialClaimResponse;
                fromPartial(object: {
                    InitialClaim?: {
                        enabled?: boolean;
                        goalId?: string | number | import("long");
                    };
                }): _140.QueryGetInitialClaimResponse;
            };
            Params: {
                encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Params;
                fromPartial(object: {
                    decayInformation?: {
                        enabled?: boolean;
                        decayStart?: Date;
                        decayEnd?: Date;
                    };
                    airdropStart?: Date;
                }): _139.Params;
            };
            DecayInformation: {
                encode(message: _139.DecayInformation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.DecayInformation;
                fromPartial(object: {
                    enabled?: boolean;
                    decayStart?: Date;
                    decayEnd?: Date;
                }): _139.DecayInformation;
            };
            ClaimPacketData: {
                encode(message: _138.ClaimPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ClaimPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _138.ClaimPacketData;
            };
            NoData: {
                encode(_: _138.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.NoData;
                fromPartial(_: {}): _138.NoData;
            };
            Goal: {
                encode(message: _137.Goal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Goal;
                fromPartial(object: {
                    id?: string | number | import("long");
                    description?: string;
                    weight?: string;
                }): _137.Goal;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
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
                }): _136.GenesisState;
            };
            EventMissionCompleted: {
                encode(message: _135.EventMissionCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventMissionCompleted;
                fromPartial(object: {
                    missionId?: string | number | import("long");
                    address?: string;
                }): _135.EventMissionCompleted;
            };
            EventMissionClaimed: {
                encode(message: _135.EventMissionClaimed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventMissionClaimed;
                fromPartial(object: {
                    missionId?: string | number | import("long");
                    claimer?: string;
                }): _135.EventMissionClaimed;
            };
            InitialClaim: {
                encode(message: _134.InitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.InitialClaim;
                fromPartial(object: {
                    enabled?: boolean;
                    goalId?: string | number | import("long");
                }): _134.InitialClaim;
            };
            ClaimRecord: {
                encode(message: _134.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ClaimRecord;
                fromPartial(object: {
                    address?: string;
                    claimable?: string;
                    completedGoals?: (string | number | import("long"))[];
                    claimedGoals?: (string | number | import("long"))[];
                }): _134.ClaimRecord;
            };
        };
    }
    namespace farming {
        const v1: {
            MsgClientImpl: typeof _356.MsgClientImpl;
            QueryClientImpl: typeof _345.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
                plans(request: _146.QueryPlansRequest): Promise<_146.QueryPlansResponse>;
                plan(request: _146.QueryPlanRequest): Promise<_146.QueryPlanResponse>;
                stakings(request: _146.QueryStakingsRequest): Promise<_146.QueryStakingsResponse>;
                totalStakings(request: _146.QueryTotalStakingsRequest): Promise<_146.QueryTotalStakingsResponse>;
                rewards(request: _146.QueryRewardsRequest): Promise<_146.QueryRewardsResponse>;
                currentEpochDays(request?: _146.QueryCurrentEpochDaysRequest): Promise<_146.QueryCurrentEpochDaysResponse>;
            };
            LCDQueryClient: typeof _334.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedAmountPlan(value: _147.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRatioPlan(value: _147.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    stake(value: _147.MsgStake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unstake(value: _147.MsgUnstake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    harvest(value: _147.MsgHarvest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePlan(value: _147.MsgRemovePlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    advanceEpoch(value: _147.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedAmountPlan(value: _147.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _147.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _147.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _147.MsgCreateRatioPlan;
                    };
                    stake(value: _147.MsgStake): {
                        typeUrl: string;
                        value: _147.MsgStake;
                    };
                    unstake(value: _147.MsgUnstake): {
                        typeUrl: string;
                        value: _147.MsgUnstake;
                    };
                    harvest(value: _147.MsgHarvest): {
                        typeUrl: string;
                        value: _147.MsgHarvest;
                    };
                    removePlan(value: _147.MsgRemovePlan): {
                        typeUrl: string;
                        value: _147.MsgRemovePlan;
                    };
                    advanceEpoch(value: _147.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _147.MsgAdvanceEpoch;
                    };
                };
                fromPartial: {
                    createFixedAmountPlan(value: _147.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _147.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _147.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _147.MsgCreateRatioPlan;
                    };
                    stake(value: _147.MsgStake): {
                        typeUrl: string;
                        value: _147.MsgStake;
                    };
                    unstake(value: _147.MsgUnstake): {
                        typeUrl: string;
                        value: _147.MsgUnstake;
                    };
                    harvest(value: _147.MsgHarvest): {
                        typeUrl: string;
                        value: _147.MsgHarvest;
                    };
                    removePlan(value: _147.MsgRemovePlan): {
                        typeUrl: string;
                        value: _147.MsgRemovePlan;
                    };
                    advanceEpoch(value: _147.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _147.MsgAdvanceEpoch;
                    };
                };
            };
            AminoConverter: {
                "/ollo.farming.v1.MsgCreateFixedAmountPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochAmount }: _147.MsgCreateFixedAmountPlan) => {
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
                    }) => _147.MsgCreateFixedAmountPlan;
                };
                "/ollo.farming.v1.MsgCreateRatioPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochRatio }: _147.MsgCreateRatioPlan) => {
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
                    }) => _147.MsgCreateRatioPlan;
                };
                "/ollo.farming.v1.MsgStake": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoins }: _147.MsgStake) => {
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
                    }) => _147.MsgStake;
                };
                "/ollo.farming.v1.MsgUnstake": {
                    aminoType: string;
                    toAmino: ({ farmer, unstakingCoins }: _147.MsgUnstake) => {
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
                    }) => _147.MsgUnstake;
                };
                "/ollo.farming.v1.MsgHarvest": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoinDenoms }: _147.MsgHarvest) => {
                        farmer: string;
                        staking_coin_denoms: string[];
                    };
                    fromAmino: ({ farmer, staking_coin_denoms }: {
                        farmer: string;
                        staking_coin_denoms: string[];
                    }) => _147.MsgHarvest;
                };
                "/ollo.farming.v1.MsgRemovePlan": {
                    aminoType: string;
                    toAmino: ({ creator, planId }: _147.MsgRemovePlan) => {
                        creator: string;
                        plan_id: string;
                    };
                    fromAmino: ({ creator, plan_id }: {
                        creator: string;
                        plan_id: string;
                    }) => _147.MsgRemovePlan;
                };
                "/ollo.farming.v1.MsgAdvanceEpoch": {
                    aminoType: string;
                    toAmino: ({ requester }: _147.MsgAdvanceEpoch) => {
                        requester: string;
                    };
                    fromAmino: ({ requester }: {
                        requester: string;
                    }) => _147.MsgAdvanceEpoch;
                };
            };
            MsgCreateFixedAmountPlan: {
                encode(message: _147.MsgCreateFixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateFixedAmountPlan;
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
                }): _147.MsgCreateFixedAmountPlan;
            };
            MsgCreateFixedAmountPlanResponse: {
                encode(_: _147.MsgCreateFixedAmountPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateFixedAmountPlanResponse;
                fromPartial(_: {}): _147.MsgCreateFixedAmountPlanResponse;
            };
            MsgCreateRatioPlan: {
                encode(message: _147.MsgCreateRatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateRatioPlan;
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
                }): _147.MsgCreateRatioPlan;
            };
            MsgCreateRatioPlanResponse: {
                encode(_: _147.MsgCreateRatioPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateRatioPlanResponse;
                fromPartial(_: {}): _147.MsgCreateRatioPlanResponse;
            };
            MsgStake: {
                encode(message: _147.MsgStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgStake;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _147.MsgStake;
            };
            MsgStakeResponse: {
                encode(_: _147.MsgStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgStakeResponse;
                fromPartial(_: {}): _147.MsgStakeResponse;
            };
            MsgUnstake: {
                encode(message: _147.MsgUnstake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUnstake;
                fromPartial(object: {
                    farmer?: string;
                    unstakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _147.MsgUnstake;
            };
            MsgUnstakeResponse: {
                encode(_: _147.MsgUnstakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUnstakeResponse;
                fromPartial(_: {}): _147.MsgUnstakeResponse;
            };
            MsgHarvest: {
                encode(message: _147.MsgHarvest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgHarvest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenoms?: string[];
                }): _147.MsgHarvest;
            };
            MsgHarvestResponse: {
                encode(_: _147.MsgHarvestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgHarvestResponse;
                fromPartial(_: {}): _147.MsgHarvestResponse;
            };
            MsgRemovePlan: {
                encode(message: _147.MsgRemovePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgRemovePlan;
                fromPartial(object: {
                    creator?: string;
                    planId?: string | number | import("long");
                }): _147.MsgRemovePlan;
            };
            MsgRemovePlanResponse: {
                encode(_: _147.MsgRemovePlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgRemovePlanResponse;
                fromPartial(_: {}): _147.MsgRemovePlanResponse;
            };
            MsgAdvanceEpoch: {
                encode(message: _147.MsgAdvanceEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgAdvanceEpoch;
                fromPartial(object: {
                    requester?: string;
                }): _147.MsgAdvanceEpoch;
            };
            MsgAdvanceEpochResponse: {
                encode(_: _147.MsgAdvanceEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgAdvanceEpochResponse;
                fromPartial(_: {}): _147.MsgAdvanceEpochResponse;
            };
            QueryParamsRequest: {
                encode(_: _146.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsRequest;
                fromPartial(_: {}): _146.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _146.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsResponse;
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
                }): _146.QueryParamsResponse;
            };
            QueryPlansRequest: {
                encode(message: _146.QueryPlansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryPlansRequest;
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
                }): _146.QueryPlansRequest;
            };
            QueryPlansResponse: {
                encode(message: _146.QueryPlansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryPlansResponse;
                fromPartial(object: {
                    plans?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _146.QueryPlansResponse;
            };
            QueryPlanRequest: {
                encode(message: _146.QueryPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryPlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _146.QueryPlanRequest;
            };
            QueryPlanResponse: {
                encode(message: _146.QueryPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryPlanResponse;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _146.QueryPlanResponse;
            };
            QueryStakingsRequest: {
                encode(message: _146.QueryStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryStakingsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _146.QueryStakingsRequest;
            };
            QueryStakingsResponse: {
                encode(message: _146.QueryStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryStakingsResponse;
                fromPartial(object: {
                    stakedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    queuedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _146.QueryStakingsResponse;
            };
            QueryTotalStakingsRequest: {
                encode(message: _146.QueryTotalStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryTotalStakingsRequest;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                }): _146.QueryTotalStakingsRequest;
            };
            QueryTotalStakingsResponse: {
                encode(message: _146.QueryTotalStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryTotalStakingsResponse;
                fromPartial(object: {
                    amount?: string;
                }): _146.QueryTotalStakingsResponse;
            };
            QueryRewardsRequest: {
                encode(message: _146.QueryRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryRewardsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _146.QueryRewardsRequest;
            };
            QueryRewardsResponse: {
                encode(message: _146.QueryRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _146.QueryRewardsResponse;
            };
            QueryCurrentEpochDaysRequest: {
                encode(_: _146.QueryCurrentEpochDaysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentEpochDaysRequest;
                fromPartial(_: {}): _146.QueryCurrentEpochDaysRequest;
            };
            QueryCurrentEpochDaysResponse: {
                encode(message: _146.QueryCurrentEpochDaysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentEpochDaysResponse;
                fromPartial(object: {
                    currentEpochDays?: number;
                }): _146.QueryCurrentEpochDaysResponse;
            };
            PublicPlanProposal: {
                encode(message: _145.PublicPlanProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.PublicPlanProposal;
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
                }): _145.PublicPlanProposal;
            };
            AddPlanRequest: {
                encode(message: _145.AddPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AddPlanRequest;
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
                }): _145.AddPlanRequest;
            };
            ModifyPlanRequest: {
                encode(message: _145.ModifyPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ModifyPlanRequest;
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
                }): _145.ModifyPlanRequest;
            };
            DeletePlanRequest: {
                encode(message: _145.DeletePlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.DeletePlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _145.DeletePlanRequest;
            };
            Params: {
                encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Params;
                fromPartial(object: {
                    privatePlanCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    nextEpochDays?: number;
                    farmingFeeCollector?: string;
                    delayedStakingGasFee?: string | number | import("long");
                    maxNumPrivatePlans?: number;
                }): _144.Params;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
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
                }): _143.GenesisState;
            };
            PlanRecord: {
                encode(message: _143.PlanRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PlanRecord;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    farmingPoolCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _143.PlanRecord;
            };
            StakingRecord: {
                encode(message: _143.StakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.StakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    staking?: {
                        amount?: string;
                        startingEpoch?: string | number | import("long");
                    };
                }): _143.StakingRecord;
            };
            QueuedStakingRecord: {
                encode(message: _143.QueuedStakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueuedStakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    queuedStaking?: {
                        amount?: string;
                    };
                }): _143.QueuedStakingRecord;
            };
            TotalStakingsRecord: {
                encode(message: _143.TotalStakingsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.TotalStakingsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    amount?: string;
                    stakingReserveCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _143.TotalStakingsRecord;
            };
            HistoricalRewardsRecord: {
                encode(message: _143.HistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.HistoricalRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    epoch?: string | number | import("long");
                    historicalRewards?: {
                        cumulativeUnitRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _143.HistoricalRewardsRecord;
            };
            OutstandingRewardsRecord: {
                encode(message: _143.OutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.OutstandingRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    outstandingRewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _143.OutstandingRewardsRecord;
            };
            CurrentEpochRecord: {
                encode(message: _143.CurrentEpochRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.CurrentEpochRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    currentEpoch?: string | number | import("long");
                }): _143.CurrentEpochRecord;
            };
            planTypeFromJSON(object: any): _142.PlanType;
            planTypeToJSON(object: _142.PlanType): string;
            addressTypeFromJSON(object: any): _142.AddressType;
            addressTypeToJSON(object: _142.AddressType): string;
            PlanType: typeof _142.PlanType;
            PlanTypeSDKType: typeof _142.PlanType;
            AddressType: typeof _142.AddressType;
            AddressTypeSDKType: typeof _142.AddressType;
            BasePlan: {
                encode(message: _142.BasePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BasePlan;
                fromPartial(object: {
                    id?: string | number | import("long");
                    name?: string;
                    type?: _142.PlanType;
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
                }): _142.BasePlan;
            };
            FixedAmountPlan: {
                encode(message: _142.FixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.FixedAmountPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _142.PlanType;
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
                }): _142.FixedAmountPlan;
            };
            RatioPlan: {
                encode(message: _142.RatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.RatioPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _142.PlanType;
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
                }): _142.RatioPlan;
            };
            Staking: {
                encode(message: _142.Staking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Staking;
                fromPartial(object: {
                    amount?: string;
                    startingEpoch?: string | number | import("long");
                }): _142.Staking;
            };
            QueuedStaking: {
                encode(message: _142.QueuedStaking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueuedStaking;
                fromPartial(object: {
                    amount?: string;
                }): _142.QueuedStaking;
            };
            TotalStakings: {
                encode(message: _142.TotalStakings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TotalStakings;
                fromPartial(object: {
                    amount?: string;
                }): _142.TotalStakings;
            };
            HistoricalRewards: {
                encode(message: _142.HistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.HistoricalRewards;
                fromPartial(object: {
                    cumulativeUnitRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _142.HistoricalRewards;
            };
            OutstandingRewards: {
                encode(message: _142.OutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.OutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _142.OutstandingRewards;
            };
        };
    }
    namespace grants {
        const v1: {
            MsgClientImpl: typeof _357.MsgClientImpl;
            QueryClientImpl: typeof _346.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                auctions(request: _152.QueryAuctionsRequest): Promise<_152.QueryAuctionsResponse>;
                auction(request: _152.QueryAuctionRequest): Promise<_152.QueryAuctionResponse>;
                allowedBidder(request: _152.QueryAllowedBidderRequest): Promise<_152.QueryAllowedBidderResponse>;
                allowedBidders(request: _152.QueryAllowedBiddersRequest): Promise<_152.QueryAllowedBiddersResponse>;
                bids(request: _152.QueryBidsRequest): Promise<_152.QueryBidsResponse>;
                bid(request: _152.QueryBidRequest): Promise<_152.QueryBidResponse>;
                vestings(request: _152.QueryVestingsRequest): Promise<_152.QueryVestingsResponse>;
            };
            LCDQueryClient: typeof _335.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedPriceAuction(value: _153.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatchAuction(value: _153.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAuction(value: _153.MsgCancelAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    placeBid(value: _153.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyBid(value: _153.MsgModifyBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBidder(value: _153.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedPriceAuction(value: _153.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _153.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _153.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _153.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _153.MsgCancelAuction): {
                        typeUrl: string;
                        value: _153.MsgCancelAuction;
                    };
                    placeBid(value: _153.MsgPlaceBid): {
                        typeUrl: string;
                        value: _153.MsgPlaceBid;
                    };
                    modifyBid(value: _153.MsgModifyBid): {
                        typeUrl: string;
                        value: _153.MsgModifyBid;
                    };
                    addAllowedBidder(value: _153.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _153.MsgAddAllowedBidder;
                    };
                };
                fromPartial: {
                    createFixedPriceAuction(value: _153.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _153.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _153.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _153.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _153.MsgCancelAuction): {
                        typeUrl: string;
                        value: _153.MsgCancelAuction;
                    };
                    placeBid(value: _153.MsgPlaceBid): {
                        typeUrl: string;
                        value: _153.MsgPlaceBid;
                    };
                    modifyBid(value: _153.MsgModifyBid): {
                        typeUrl: string;
                        value: _153.MsgModifyBid;
                    };
                    addAllowedBidder(value: _153.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _153.MsgAddAllowedBidder;
                    };
                };
            };
            AminoConverter: {
                "/ollo.grants.v1.MsgCreateFixedPriceAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, sellingCoin, payingCoinDenom, vestingSchedules, startTime, endTime }: _153.MsgCreateFixedPriceAuction) => {
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
                    }) => _153.MsgCreateFixedPriceAuction;
                };
                "/ollo.grants.v1.MsgCreateBatchAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, minBidPrice, sellingCoin, payingCoinDenom, vestingSchedules, maxExtendedRound, extendedRoundRate, startTime, endTime }: _153.MsgCreateBatchAuction) => {
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
                    }) => _153.MsgCreateBatchAuction;
                };
                "/ollo.grants.v1.MsgCancelAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, auctionId }: _153.MsgCancelAuction) => {
                        auctioneer: string;
                        auction_id: string;
                    };
                    fromAmino: ({ auctioneer, auction_id }: {
                        auctioneer: string;
                        auction_id: string;
                    }) => _153.MsgCancelAuction;
                };
                "/ollo.grants.v1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidType, price, coin }: _153.MsgPlaceBid) => {
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
                    }) => _153.MsgPlaceBid;
                };
                "/ollo.grants.v1.MsgModifyBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidId, price, coin }: _153.MsgModifyBid) => {
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
                    }) => _153.MsgModifyBid;
                };
                "/ollo.grants.v1.MsgAddAllowedBidder": {
                    aminoType: string;
                    toAmino: ({ auctionId, allowedBidder }: _153.MsgAddAllowedBidder) => {
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
                    }) => _153.MsgAddAllowedBidder;
                };
            };
            MsgCreateFixedPriceAuction: {
                encode(message: _153.MsgCreateFixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateFixedPriceAuction;
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
                }): _153.MsgCreateFixedPriceAuction;
            };
            MsgCreateFixedPriceAuctionResponse: {
                encode(_: _153.MsgCreateFixedPriceAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateFixedPriceAuctionResponse;
                fromPartial(_: {}): _153.MsgCreateFixedPriceAuctionResponse;
            };
            MsgCreateBatchAuction: {
                encode(message: _153.MsgCreateBatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateBatchAuction;
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
                }): _153.MsgCreateBatchAuction;
            };
            MsgCreateBatchAuctionResponse: {
                encode(_: _153.MsgCreateBatchAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateBatchAuctionResponse;
                fromPartial(_: {}): _153.MsgCreateBatchAuctionResponse;
            };
            MsgCancelAuction: {
                encode(message: _153.MsgCancelAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelAuction;
                fromPartial(object: {
                    auctioneer?: string;
                    auctionId?: string | number | import("long");
                }): _153.MsgCancelAuction;
            };
            MsgCancelAuctionResponse: {
                encode(_: _153.MsgCancelAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelAuctionResponse;
                fromPartial(_: {}): _153.MsgCancelAuctionResponse;
            };
            MsgPlaceBid: {
                encode(message: _153.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgPlaceBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidType?: _150.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _153.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _153.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgPlaceBidResponse;
                fromPartial(_: {}): _153.MsgPlaceBidResponse;
            };
            MsgModifyBid: {
                encode(message: _153.MsgModifyBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgModifyBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidId?: string | number | import("long");
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _153.MsgModifyBid;
            };
            MsgModifyBidResponse: {
                encode(_: _153.MsgModifyBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgModifyBidResponse;
                fromPartial(_: {}): _153.MsgModifyBidResponse;
            };
            MsgAddAllowedBidder: {
                encode(message: _153.MsgAddAllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddAllowedBidder;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _153.MsgAddAllowedBidder;
            };
            MsgAddAllowedBidderResponse: {
                encode(_: _153.MsgAddAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddAllowedBidderResponse;
                fromPartial(_: {}): _153.MsgAddAllowedBidderResponse;
            };
            QueryParamsRequest: {
                encode(_: _152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsRequest;
                fromPartial(_: {}): _152.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsResponse;
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
                }): _152.QueryParamsResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _152.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAuctionsRequest;
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
                }): _152.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _152.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAuctionsResponse;
                fromPartial(object: {
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _152.QueryAuctionsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _152.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAuctionRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _152.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _152.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAuctionResponse;
                fromPartial(object: {
                    auction?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _152.QueryAuctionResponse;
            };
            QueryAllowedBidderRequest: {
                encode(message: _152.QueryAllowedBidderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAllowedBidderRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                }): _152.QueryAllowedBidderRequest;
            };
            QueryAllowedBidderResponse: {
                encode(message: _152.QueryAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAllowedBidderResponse;
                fromPartial(object: {
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _152.QueryAllowedBidderResponse;
            };
            QueryAllowedBiddersRequest: {
                encode(message: _152.QueryAllowedBiddersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAllowedBiddersRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryAllowedBiddersRequest;
            };
            QueryAllowedBiddersResponse: {
                encode(message: _152.QueryAllowedBiddersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAllowedBiddersResponse;
                fromPartial(object: {
                    allowedBidders?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _152.QueryAllowedBiddersResponse;
            };
            QueryBidsRequest: {
                encode(message: _152.QueryBidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryBidsRequest;
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
                }): _152.QueryBidsRequest;
            };
            QueryBidsResponse: {
                encode(message: _152.QueryBidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryBidsResponse;
                fromPartial(object: {
                    bids?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _150.BidType;
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
                }): _152.QueryBidsResponse;
            };
            QueryBidRequest: {
                encode(message: _152.QueryBidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryBidRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidId?: string | number | import("long");
                }): _152.QueryBidRequest;
            };
            QueryBidResponse: {
                encode(message: _152.QueryBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryBidResponse;
                fromPartial(object: {
                    bid?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _150.BidType;
                        price?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        isMatched?: boolean;
                    };
                }): _152.QueryBidResponse;
            };
            QueryVestingsRequest: {
                encode(message: _152.QueryVestingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVestingsRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _152.QueryVestingsRequest;
            };
            QueryVestingsResponse: {
                encode(message: _152.QueryVestingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVestingsResponse;
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
                }): _152.QueryVestingsResponse;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
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
                }): _151.Params;
            };
            auctionTypeFromJSON(object: any): _150.AuctionType;
            auctionTypeToJSON(object: _150.AuctionType): string;
            auctionStatusFromJSON(object: any): _150.AuctionStatus;
            auctionStatusToJSON(object: _150.AuctionStatus): string;
            bidTypeFromJSON(object: any): _150.BidType;
            bidTypeToJSON(object: _150.BidType): string;
            addressTypeFromJSON(object: any): _150.AddressType;
            addressTypeToJSON(object: _150.AddressType): string;
            AuctionType: typeof _150.AuctionType;
            AuctionTypeSDKType: typeof _150.AuctionType;
            AuctionStatus: typeof _150.AuctionStatus;
            AuctionStatusSDKType: typeof _150.AuctionStatus;
            BidType: typeof _150.BidType;
            BidTypeSDKType: typeof _150.BidType;
            AddressType: typeof _150.AddressType;
            AddressTypeSDKType: typeof _150.AddressType;
            BaseAuction: {
                encode(message: _150.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.BaseAuction;
                fromPartial(object: {
                    id?: string | number | import("long");
                    type?: _150.AuctionType;
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
                    status?: _150.AuctionStatus;
                }): _150.BaseAuction;
            };
            FixedPriceAuction: {
                encode(message: _150.FixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.FixedPriceAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _150.AuctionType;
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
                        status?: _150.AuctionStatus;
                    };
                    remainingSellingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _150.FixedPriceAuction;
            };
            BatchAuction: {
                encode(message: _150.BatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.BatchAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _150.AuctionType;
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
                        status?: _150.AuctionStatus;
                    };
                    minBidPrice?: string;
                    matchedPrice?: string;
                    maxExtendedRound?: number;
                    extendedRoundRate?: string;
                }): _150.BatchAuction;
            };
            VestingSchedule: {
                encode(message: _150.VestingSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.VestingSchedule;
                fromPartial(object: {
                    releaseTime?: Date;
                    weight?: string;
                }): _150.VestingSchedule;
            };
            VestingQueue: {
                encode(message: _150.VestingQueue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.VestingQueue;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    auctioneer?: string;
                    payingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    releaseTime?: Date;
                    released?: boolean;
                }): _150.VestingQueue;
            };
            AllowedBidder: {
                encode(message: _150.AllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AllowedBidder;
                fromPartial(object: {
                    bidder?: string;
                    maxBidAmount?: string;
                }): _150.AllowedBidder;
            };
            Bid: {
                encode(message: _150.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Bid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    id?: string | number | import("long");
                    type?: _150.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    isMatched?: boolean;
                }): _150.Bid;
            };
            AllowedBidderRecord: {
                encode(message: _150.AllowedBidderRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AllowedBidderRecord;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _150.AllowedBidderRecord;
            };
            GenesisState: {
                encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GenesisState;
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
                        type?: _150.BidType;
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
                }): _149.GenesisState;
            };
            EventPlaceBid: {
                encode(_: _148.EventPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.EventPlaceBid;
                fromPartial(_: {}): _148.EventPlaceBid;
            };
        };
    }
    namespace liquidity {
        const v1: {
            MsgClientImpl: typeof _358.MsgClientImpl;
            QueryClientImpl: typeof _347.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                liquidityPools(request: _158.QueryLiquidityPoolsRequest): Promise<_158.QueryLiquidityPoolsResponse>;
                liquidityPool(request: _158.QueryLiquidityPoolRequest): Promise<_158.QueryLiquidityPoolResponse>;
                liquidityPoolByPoolCoinDenom(request: _158.QueryLiquidityPoolByPoolCoinDenomRequest): Promise<_158.QueryLiquidityPoolResponse>;
                liquidityPoolByReserveAcc(request: _158.QueryLiquidityPoolByReserveAccRequest): Promise<_158.QueryLiquidityPoolResponse>;
                pairs(request: _158.QueryPairsRequest): Promise<_158.QueryPairsResponse>;
                pair(request: _158.QueryPairRequest): Promise<_158.QueryPairResponse>;
                depositRequests(request: _158.QueryDepositRequestsRequest): Promise<_158.QueryDepositRequestsResponse>;
                depositRequest(request: _158.QueryDepositRequestRequest): Promise<_158.QueryDepositRequestResponse>;
                withdrawRequests(request: _158.QueryWithdrawRequestsRequest): Promise<_158.QueryWithdrawRequestsResponse>;
                withdrawRequest(request: _158.QueryWithdrawRequestRequest): Promise<_158.QueryWithdrawRequestResponse>;
                orders(request: _158.QueryOrdersRequest): Promise<_158.QueryOrdersResponse>;
                order(request: _158.QueryOrderRequest): Promise<_158.QueryOrderResponse>;
                ordersByOrderer(request: _158.QueryOrdersByOrdererRequest): Promise<_158.QueryOrdersResponse>;
                orderBooks(request: _158.QueryOrderBooksRequest): Promise<_158.QueryOrderBooksResponse>;
                params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _336.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _159.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPair(value: _159.MsgCreatePair): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPoolCapped(value: _159.MsgCreatePoolCapped): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _159.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _159.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    orderLimit(value: _159.MsgOrderLimit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    orderMarket(value: _159.MsgOrderMarket): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    orderMarketMaking(value: _159.MsgOrderMarketMaking): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _159.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAllOrders(value: _159.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelMarketMakingOrder(value: _159.MsgCancelMarketMakingOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _159.MsgCreatePool): {
                        typeUrl: string;
                        value: _159.MsgCreatePool;
                    };
                    createPair(value: _159.MsgCreatePair): {
                        typeUrl: string;
                        value: _159.MsgCreatePair;
                    };
                    createPoolCapped(value: _159.MsgCreatePoolCapped): {
                        typeUrl: string;
                        value: _159.MsgCreatePoolCapped;
                    };
                    deposit(value: _159.MsgDeposit): {
                        typeUrl: string;
                        value: _159.MsgDeposit;
                    };
                    withdraw(value: _159.MsgWithdraw): {
                        typeUrl: string;
                        value: _159.MsgWithdraw;
                    };
                    orderLimit(value: _159.MsgOrderLimit): {
                        typeUrl: string;
                        value: _159.MsgOrderLimit;
                    };
                    orderMarket(value: _159.MsgOrderMarket): {
                        typeUrl: string;
                        value: _159.MsgOrderMarket;
                    };
                    orderMarketMaking(value: _159.MsgOrderMarketMaking): {
                        typeUrl: string;
                        value: _159.MsgOrderMarketMaking;
                    };
                    cancelOrder(value: _159.MsgCancelOrder): {
                        typeUrl: string;
                        value: _159.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _159.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _159.MsgCancelAllOrders;
                    };
                    cancelMarketMakingOrder(value: _159.MsgCancelMarketMakingOrder): {
                        typeUrl: string;
                        value: _159.MsgCancelMarketMakingOrder;
                    };
                };
                fromPartial: {
                    createPool(value: _159.MsgCreatePool): {
                        typeUrl: string;
                        value: _159.MsgCreatePool;
                    };
                    createPair(value: _159.MsgCreatePair): {
                        typeUrl: string;
                        value: _159.MsgCreatePair;
                    };
                    createPoolCapped(value: _159.MsgCreatePoolCapped): {
                        typeUrl: string;
                        value: _159.MsgCreatePoolCapped;
                    };
                    deposit(value: _159.MsgDeposit): {
                        typeUrl: string;
                        value: _159.MsgDeposit;
                    };
                    withdraw(value: _159.MsgWithdraw): {
                        typeUrl: string;
                        value: _159.MsgWithdraw;
                    };
                    orderLimit(value: _159.MsgOrderLimit): {
                        typeUrl: string;
                        value: _159.MsgOrderLimit;
                    };
                    orderMarket(value: _159.MsgOrderMarket): {
                        typeUrl: string;
                        value: _159.MsgOrderMarket;
                    };
                    orderMarketMaking(value: _159.MsgOrderMarketMaking): {
                        typeUrl: string;
                        value: _159.MsgOrderMarketMaking;
                    };
                    cancelOrder(value: _159.MsgCancelOrder): {
                        typeUrl: string;
                        value: _159.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _159.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _159.MsgCancelAllOrders;
                    };
                    cancelMarketMakingOrder(value: _159.MsgCancelMarketMakingOrder): {
                        typeUrl: string;
                        value: _159.MsgCancelMarketMakingOrder;
                    };
                };
            };
            AminoConverter: {
                "/ollo.liquidity.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ creator, typeId, pairId, depositCoins }: _159.MsgCreatePool) => {
                        creator: string;
                        type_id: string;
                        pair_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ creator, type_id, pair_id, deposit_coins }: {
                        creator: string;
                        type_id: string;
                        pair_id: string;
                        deposit_coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _159.MsgCreatePool;
                };
                "/ollo.liquidity.v1.MsgCreatePair": {
                    aminoType: string;
                    toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: _159.MsgCreatePair) => {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    };
                    fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    }) => _159.MsgCreatePair;
                };
                "/ollo.liquidity.v1.MsgCreatePoolCapped": {
                    aminoType: string;
                    toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: _159.MsgCreatePoolCapped) => {
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
                    }) => _159.MsgCreatePoolCapped;
                };
                "/ollo.liquidity.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, poolId, depositCoins }: _159.MsgDeposit) => {
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
                    }) => _159.MsgDeposit;
                };
                "/ollo.liquidity.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ withdrawer, poolId, poolCoin }: _159.MsgWithdraw) => {
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
                    }) => _159.MsgWithdraw;
                };
                "/ollo.liquidity.v1.MsgOrderLimit": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _159.MsgOrderLimit) => {
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
                    }) => _159.MsgOrderLimit;
                };
                "/ollo.liquidity.v1.MsgOrderMarket": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: _159.MsgOrderMarket) => {
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
                    }) => _159.MsgOrderMarket;
                };
                "/ollo.liquidity.v1.MsgOrderMarketMaking": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, maxSellPrice, minSellPrice, sellAmount, maxBuyPrice, minBuyPrice, buyAmount, orderLifespan }: _159.MsgOrderMarketMaking) => {
                        orderer: string;
                        pair_id: string;
                        max_sell_price: string;
                        min_sell_price: string;
                        sell_amount: string;
                        max_buy_price: string;
                        min_buy_price: string;
                        buy_amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ orderer, pair_id, max_sell_price, min_sell_price, sell_amount, max_buy_price, min_buy_price, buy_amount, order_lifespan }: {
                        orderer: string;
                        pair_id: string;
                        max_sell_price: string;
                        min_sell_price: string;
                        sell_amount: string;
                        max_buy_price: string;
                        min_buy_price: string;
                        buy_amount: string;
                        order_lifespan: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _159.MsgOrderMarketMaking;
                };
                "/ollo.liquidity.v1.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: ({ orderAddr, pairId, orderId }: _159.MsgCancelOrder) => {
                        order_addr: string;
                        pair_id: string;
                        order_id: string;
                    };
                    fromAmino: ({ order_addr, pair_id, order_id }: {
                        order_addr: string;
                        pair_id: string;
                        order_id: string;
                    }) => _159.MsgCancelOrder;
                };
                "/ollo.liquidity.v1.MsgCancelAllOrders": {
                    aminoType: string;
                    toAmino: ({ orderAddr, pairIds }: _159.MsgCancelAllOrders) => {
                        order_addr: string;
                        pair_ids: string[];
                    };
                    fromAmino: ({ order_addr, pair_ids }: {
                        order_addr: string;
                        pair_ids: string[];
                    }) => _159.MsgCancelAllOrders;
                };
                "/ollo.liquidity.v1.MsgCancelMarketMakingOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId }: _159.MsgCancelMarketMakingOrder) => {
                        orderer: string;
                        pair_id: string;
                    };
                    fromAmino: ({ orderer, pair_id }: {
                        orderer: string;
                        pair_id: string;
                    }) => _159.MsgCancelMarketMakingOrder;
                };
            };
            MsgCreatePair: {
                encode(message: _159.MsgCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePair;
                fromPartial(object: {
                    creator?: string;
                    baseCoinDenom?: string;
                    quoteCoinDenom?: string;
                }): _159.MsgCreatePair;
            };
            MsgCreatePairResponse: {
                encode(_: _159.MsgCreatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePairResponse;
                fromPartial(_: {}): _159.MsgCreatePairResponse;
            };
            MsgCreatePool: {
                encode(message: _159.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    typeId?: string | number | import("long");
                    pairId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _159.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _159.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePoolResponse;
                fromPartial(_: {}): _159.MsgCreatePoolResponse;
            };
            MsgCreatePoolCapped: {
                encode(message: _159.MsgCreatePoolCapped, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePoolCapped;
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
                }): _159.MsgCreatePoolCapped;
            };
            MsgCreatePoolCappedResponse: {
                encode(_: _159.MsgCreatePoolCappedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCreatePoolCappedResponse;
                fromPartial(_: {}): _159.MsgCreatePoolCappedResponse;
            };
            MsgDeposit: {
                encode(message: _159.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgDeposit;
                fromPartial(object: {
                    depositor?: string;
                    poolId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _159.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _159.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgDepositResponse;
                fromPartial(_: {}): _159.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _159.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgWithdraw;
                fromPartial(object: {
                    withdrawer?: string;
                    poolId?: string | number | import("long");
                    poolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _159.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _159.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgWithdrawResponse;
                fromPartial(_: {}): _159.MsgWithdrawResponse;
            };
            MsgOrderLimit: {
                encode(message: _159.MsgOrderLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgOrderLimit;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _155.OrderDirection;
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
                }): _159.MsgOrderLimit;
            };
            MsgOrderLimitResponse: {
                encode(_: _159.MsgOrderLimitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgOrderLimitResponse;
                fromPartial(_: {}): _159.MsgOrderLimitResponse;
            };
            MsgOrderMarket: {
                encode(message: _159.MsgOrderMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgOrderMarket;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _155.OrderDirection;
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
                }): _159.MsgOrderMarket;
            };
            MsgOrderMarketResponse: {
                encode(_: _159.MsgOrderMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgOrderMarketResponse;
                fromPartial(_: {}): _159.MsgOrderMarketResponse;
            };
            MsgOrderMarketMaking: {
                encode(message: _159.MsgOrderMarketMaking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgOrderMarketMaking;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    maxSellPrice?: string;
                    minSellPrice?: string;
                    sellAmount?: string;
                    maxBuyPrice?: string;
                    minBuyPrice?: string;
                    buyAmount?: string;
                    orderLifespan?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _159.MsgOrderMarketMaking;
            };
            MsgOrderMarketMakingResponse: {
                encode(_: _159.MsgOrderMarketMakingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgOrderMarketMakingResponse;
                fromPartial(_: {}): _159.MsgOrderMarketMakingResponse;
            };
            MsgCancelAllOrders: {
                encode(message: _159.MsgCancelAllOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCancelAllOrders;
                fromPartial(object: {
                    orderAddr?: string;
                    pairIds?: (string | number | import("long"))[];
                }): _159.MsgCancelAllOrders;
            };
            MsgCancelAllOrdersResponse: {
                encode(_: _159.MsgCancelAllOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCancelAllOrdersResponse;
                fromPartial(_: {}): _159.MsgCancelAllOrdersResponse;
            };
            MsgCancelOrder: {
                encode(message: _159.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCancelOrder;
                fromPartial(object: {
                    orderAddr?: string;
                    pairId?: string | number | import("long");
                    orderId?: string | number | import("long");
                }): _159.MsgCancelOrder;
            };
            MsgCancelOrderResponse: {
                encode(_: _159.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCancelOrderResponse;
                fromPartial(_: {}): _159.MsgCancelOrderResponse;
            };
            MsgCancelMarketMakingOrder: {
                encode(message: _159.MsgCancelMarketMakingOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCancelMarketMakingOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                }): _159.MsgCancelMarketMakingOrder;
            };
            MsgCancelMarketMakingOrderResponse: {
                encode(_: _159.MsgCancelMarketMakingOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgCancelMarketMakingOrderResponse;
                fromPartial(_: {}): _159.MsgCancelMarketMakingOrderResponse;
            };
            QueryLiquidityPoolRequest: {
                encode(message: _158.QueryLiquidityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLiquidityPoolRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                }): _158.QueryLiquidityPoolRequest;
            };
            QueryLiquidityPoolResponse: {
                encode(message: _158.QueryLiquidityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLiquidityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        id?: string | number | import("long");
                        typeId?: string | number | import("long");
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
                        prevDepositRequestId?: string | number | import("long");
                        prevWithdrawRequestId?: string | number | import("long");
                        inactive?: boolean;
                    };
                }): _158.QueryLiquidityPoolResponse;
            };
            QueryLiquidityPoolByPoolCoinDenomRequest: {
                encode(message: _158.QueryLiquidityPoolByPoolCoinDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLiquidityPoolByPoolCoinDenomRequest;
                fromPartial(object: {
                    poolCoinDenom?: string;
                }): _158.QueryLiquidityPoolByPoolCoinDenomRequest;
            };
            QueryLiquidityPoolByReserveAccRequest: {
                encode(message: _158.QueryLiquidityPoolByReserveAccRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLiquidityPoolByReserveAccRequest;
                fromPartial(object: {
                    reserveAcc?: string;
                }): _158.QueryLiquidityPoolByReserveAccRequest;
            };
            QueryLiquidityPoolsRequest: {
                encode(message: _158.QueryLiquidityPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLiquidityPoolsRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    inactive?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                    };
                }): _158.QueryLiquidityPoolsRequest;
            };
            QueryLiquidityPoolsResponse: {
                encode(message: _158.QueryLiquidityPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLiquidityPoolsResponse;
                fromPartial(object: {
                    pools?: {
                        id?: string | number | import("long");
                        typeId?: string | number | import("long");
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
                        prevDepositRequestId?: string | number | import("long");
                        prevWithdrawRequestId?: string | number | import("long");
                        inactive?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _158.QueryLiquidityPoolsResponse;
            };
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                fromPartial(_: {}): _158.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        poolParams?: {
                            minInitPoolSupply?: string;
                            minInitPoolDeposit?: string;
                            maxPriceRatio?: string;
                        };
                        orderParams?: {
                            maxLifespan?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            depositExtraGas?: string | number | import("long");
                            withdrawExtraGas?: string | number | import("long");
                            orderExtraGas?: string | number | import("long");
                        };
                        feeParams?: {
                            feeCollecterAddr?: string;
                            dustCollectorAddr?: string;
                            swapRate?: string;
                            withdrawRate?: string;
                            pairInitFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            poolInitFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        marketParams?: {
                            precision?: number;
                            batchSize?: number;
                            maxAmmTicks?: number;
                        };
                    };
                }): _158.QueryParamsResponse;
            };
            QueryPairsRequest: {
                encode(message: _158.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPairsRequest;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                    };
                }): _158.QueryPairsRequest;
            };
            QueryPairsResponse: {
                encode(message: _158.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPairsResponse;
                fromPartial(object: {
                    pairs?: {
                        id?: string | number | import("long");
                        baseDenom?: string;
                        quoteDenom?: string;
                        escrowAddr?: string;
                        lastOrderId?: string | number | import("long");
                        lastPrice?: string;
                        currentBatchId?: string | number | import("long");
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _158.QueryPairsResponse;
            };
            QueryPairRequest: {
                encode(message: _158.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPairRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                }): _158.QueryPairRequest;
            };
            QueryPairResponse: {
                encode(message: _158.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPairResponse;
                fromPartial(object: {
                    pair?: {
                        id?: string | number | import("long");
                        baseDenom?: string;
                        quoteDenom?: string;
                        escrowAddr?: string;
                        lastOrderId?: string | number | import("long");
                        lastPrice?: string;
                        currentBatchId?: string | number | import("long");
                    };
                }): _158.QueryPairResponse;
            };
            QueryDepositRequestsRequest: {
                encode(message: _158.QueryDepositRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDepositRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                    };
                }): _158.QueryDepositRequestsRequest;
            };
            QueryDepositRequestsResponse: {
                encode(message: _158.QueryDepositRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDepositRequestsResponse;
                fromPartial(object: {
                    depositRequests?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        depositorAddr?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        msgHeight?: string | number | import("long");
                        depositAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        acceptedAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _155.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _158.QueryDepositRequestsResponse;
            };
            QueryDepositRequestRequest: {
                encode(message: _158.QueryDepositRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDepositRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _158.QueryDepositRequestRequest;
            };
            QueryDepositRequestResponse: {
                encode(message: _158.QueryDepositRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDepositRequestResponse;
                fromPartial(object: {
                    depositRequest?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        depositorAddr?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        msgHeight?: string | number | import("long");
                        depositAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        acceptedAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _155.RequestStatus;
                    };
                }): _158.QueryDepositRequestResponse;
            };
            QueryWithdrawRequestsRequest: {
                encode(message: _158.QueryWithdrawRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryWithdrawRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                    };
                }): _158.QueryWithdrawRequestsRequest;
            };
            QueryWithdrawRequestsResponse: {
                encode(message: _158.QueryWithdrawRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryWithdrawRequestsResponse;
                fromPartial(object: {
                    withdrawRequests?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        withdrawAddr?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        msgHeight?: string | number | import("long");
                        withdrawAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _155.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _158.QueryWithdrawRequestsResponse;
            };
            QueryWithdrawRequestRequest: {
                encode(message: _158.QueryWithdrawRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryWithdrawRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _158.QueryWithdrawRequestRequest;
            };
            QueryWithdrawRequestResponse: {
                encode(message: _158.QueryWithdrawRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryWithdrawRequestResponse;
                fromPartial(object: {
                    withdrawRequest?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        withdrawAddr?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        msgHeight?: string | number | import("long");
                        withdrawAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _155.RequestStatus;
                    };
                }): _158.QueryWithdrawRequestResponse;
            };
            QueryOrdersRequest: {
                encode(message: _158.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOrdersRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                    };
                }): _158.QueryOrdersRequest;
            };
            QueryOrdersResponse: {
                encode(message: _158.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        creatorAddr?: string;
                        msgHeight?: string | number | import("long");
                        type?: _155.OrderType;
                        direction?: _155.OrderDirection;
                        status?: _155.OrderStatus;
                        batchId?: string | number | import("long");
                        offer?: {
                            denom?: string;
                            amount?: string;
                        };
                        remaining?: {
                            denom?: string;
                            amount?: string;
                        };
                        received?: {
                            denom?: string;
                            amount?: string;
                        };
                        price?: string;
                        amt?: string;
                        openAmt?: string;
                        expires?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _158.QueryOrdersResponse;
            };
            QueryOrderRequest: {
                encode(message: _158.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOrderRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _158.QueryOrderRequest;
            };
            QueryOrderResponse: {
                encode(message: _158.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOrderResponse;
                fromPartial(object: {
                    order?: {
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        creatorAddr?: string;
                        msgHeight?: string | number | import("long");
                        type?: _155.OrderType;
                        direction?: _155.OrderDirection;
                        status?: _155.OrderStatus;
                        batchId?: string | number | import("long");
                        offer?: {
                            denom?: string;
                            amount?: string;
                        };
                        remaining?: {
                            denom?: string;
                            amount?: string;
                        };
                        received?: {
                            denom?: string;
                            amount?: string;
                        };
                        price?: string;
                        amt?: string;
                        openAmt?: string;
                        expires?: Date;
                    };
                }): _158.QueryOrderResponse;
            };
            QueryOrdersByOrdererRequest: {
                encode(message: _158.QueryOrdersByOrdererRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOrdersByOrdererRequest;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                    };
                }): _158.QueryOrdersByOrdererRequest;
            };
            QueryOrderBooksRequest: {
                encode(message: _158.QueryOrderBooksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOrderBooksRequest;
                fromPartial(object: {
                    pairIds?: (string | number | import("long"))[];
                    priceUnitPowers?: number[];
                    numTicks?: number;
                }): _158.QueryOrderBooksRequest;
            };
            QueryOrderBooksResponse: {
                encode(message: _158.QueryOrderBooksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOrderBooksResponse;
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
                }): _158.QueryOrderBooksResponse;
            };
            PoolResponse: {
                encode(message: _158.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.PoolResponse;
                fromPartial(object: {
                    id?: string | number | import("long");
                    typeId?: string | number | import("long");
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
                    prevDepositRequestId?: string | number | import("long");
                    prevWithdrawRequestId?: string | number | import("long");
                    inactive?: boolean;
                }): _158.PoolResponse;
            };
            PoolBalances: {
                encode(message: _158.PoolBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.PoolBalances;
                fromPartial(object: {
                    baseCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    quoteCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _158.PoolBalances;
            };
            OrderBookPairResponse: {
                encode(message: _158.OrderBookPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.OrderBookPairResponse;
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
                }): _158.OrderBookPairResponse;
            };
            OrderBookResponse: {
                encode(message: _158.OrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.OrderBookResponse;
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
                }): _158.OrderBookResponse;
            };
            OrderBookTickResponse: {
                encode(message: _158.OrderBookTickResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.OrderBookTickResponse;
                fromPartial(object: {
                    price?: string;
                    userOrderAmount?: string;
                    poolOrderAmount?: string;
                }): _158.OrderBookTickResponse;
            };
            PoolA: {
                encode(message: _157.PoolA, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.PoolA;
                fromPartial(object: {
                    type?: {
                        id?: string | number | import("long");
                        name?: string;
                        description?: string;
                        creatorAddr?: string;
                    };
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
                }): _157.PoolA;
            };
            Params: {
                encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromPartial(object: {
                    poolParams?: {
                        minInitPoolSupply?: string;
                        minInitPoolDeposit?: string;
                        maxPriceRatio?: string;
                    };
                    orderParams?: {
                        maxLifespan?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        depositExtraGas?: string | number | import("long");
                        withdrawExtraGas?: string | number | import("long");
                        orderExtraGas?: string | number | import("long");
                    };
                    feeParams?: {
                        feeCollecterAddr?: string;
                        dustCollectorAddr?: string;
                        swapRate?: string;
                        withdrawRate?: string;
                        pairInitFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        poolInitFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    marketParams?: {
                        precision?: number;
                        batchSize?: number;
                        maxAmmTicks?: number;
                    };
                }): _156.Params;
            };
            ParamsAlt: {
                encode(message: _156.ParamsAlt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ParamsAlt;
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
                }): _156.ParamsAlt;
            };
            OrderParams: {
                encode(message: _156.OrderParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.OrderParams;
                fromPartial(object: {
                    maxLifespan?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    depositExtraGas?: string | number | import("long");
                    withdrawExtraGas?: string | number | import("long");
                    orderExtraGas?: string | number | import("long");
                }): _156.OrderParams;
            };
            PoolParams: {
                encode(message: _156.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PoolParams;
                fromPartial(object: {
                    minInitPoolSupply?: string;
                    minInitPoolDeposit?: string;
                    maxPriceRatio?: string;
                }): _156.PoolParams;
            };
            MarketParams: {
                encode(message: _156.MarketParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MarketParams;
                fromPartial(object: {
                    precision?: number;
                    batchSize?: number;
                    maxAmmTicks?: number;
                }): _156.MarketParams;
            };
            FeeParams: {
                encode(message: _156.FeeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.FeeParams;
                fromPartial(object: {
                    feeCollecterAddr?: string;
                    dustCollectorAddr?: string;
                    swapRate?: string;
                    withdrawRate?: string;
                    pairInitFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    poolInitFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _156.FeeParams;
            };
            orderTypeFromJSON(object: any): _155.OrderType;
            orderTypeToJSON(object: _155.OrderType): string;
            orderStatusFromJSON(object: any): _155.OrderStatus;
            orderStatusToJSON(object: _155.OrderStatus): string;
            requestStatusFromJSON(object: any): _155.RequestStatus;
            requestStatusToJSON(object: _155.RequestStatus): string;
            orderDirectionFromJSON(object: any): _155.OrderDirection;
            orderDirectionToJSON(object: _155.OrderDirection): string;
            OrderType: typeof _155.OrderType;
            OrderTypeSDKType: typeof _155.OrderType;
            OrderStatus: typeof _155.OrderStatus;
            OrderStatusSDKType: typeof _155.OrderStatus;
            RequestStatus: typeof _155.RequestStatus;
            RequestStatusSDKType: typeof _155.RequestStatus;
            OrderDirection: typeof _155.OrderDirection;
            OrderDirectionSDKType: typeof _155.OrderDirection;
            Pair: {
                encode(message: _155.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Pair;
                fromPartial(object: {
                    id?: string | number | import("long");
                    baseDenom?: string;
                    quoteDenom?: string;
                    escrowAddr?: string;
                    lastOrderId?: string | number | import("long");
                    lastPrice?: string;
                    currentBatchId?: string | number | import("long");
                }): _155.Pair;
            };
            PoolType: {
                encode(message: _155.PoolType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.PoolType;
                fromPartial(object: {
                    id?: string | number | import("long");
                    name?: string;
                    description?: string;
                    creatorAddr?: string;
                }): _155.PoolType;
            };
            PoolReserve: {
                encode(message: _155.PoolReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.PoolReserve;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    };
                    addr?: string;
                    denom?: string;
                    minSupply?: string;
                    maxSupply?: string;
                }): _155.PoolReserve;
            };
            Pool: {
                encode(message: _155.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Pool;
                fromPartial(object: {
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    typeId?: string | number | import("long");
                    creatorAddr?: string;
                    reserve?: {
                        supply?: {
                            denom?: string;
                            amount?: string;
                        };
                        addr?: string;
                        denom?: string;
                        minSupply?: string;
                        maxSupply?: string;
                    };
                    supply?: {
                        denom?: string;
                        amount?: string;
                    };
                    prevDepositReqId?: string | number | import("long");
                    prevWithdrawReqId?: string | number | import("long");
                    disabled?: boolean;
                    priceRange?: {
                        min?: string;
                        max?: string;
                    };
                }): _155.Pool;
            };
            PoolState: {
                encode(message: _155.PoolState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.PoolState;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    };
                    prevDepositReqId?: string | number | import("long");
                    prevWithdrawReqId?: string | number | import("long");
                    disabled?: boolean;
                    priceRange?: {
                        min?: string;
                        max?: string;
                    };
                }): _155.PoolState;
            };
            PriceRange: {
                encode(message: _155.PriceRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.PriceRange;
                fromPartial(object: {
                    min?: string;
                    max?: string;
                }): _155.PriceRange;
            };
            PoolBatch: {
                encode(message: _155.PoolBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.PoolBatch;
                fromPartial(object: {
                    id?: string | number | import("long");
                    poolId?: string | number | import("long");
                    height?: string | number | import("long");
                    depositId?: string | number | import("long");
                    withdrawId?: string | number | import("long");
                    swapId?: string | number | import("long");
                    executed?: boolean;
                }): _155.PoolBatch;
            };
            RequestDeposit: {
                encode(message: _155.RequestDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestDeposit;
                fromPartial(object: {
                    id?: string | number | import("long");
                    poolId?: string | number | import("long");
                    depositorAddr?: string;
                    poolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    msgHeight?: string | number | import("long");
                    depositAmt?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    acceptedAmt?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    status?: _155.RequestStatus;
                }): _155.RequestDeposit;
            };
            RequestWithdraw: {
                encode(message: _155.RequestWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestWithdraw;
                fromPartial(object: {
                    id?: string | number | import("long");
                    poolId?: string | number | import("long");
                    withdrawAddr?: string;
                    poolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    msgHeight?: string | number | import("long");
                    withdrawAmt?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    status?: _155.RequestStatus;
                }): _155.RequestWithdraw;
            };
            Order: {
                encode(message: _155.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Order;
                fromPartial(object: {
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    creatorAddr?: string;
                    msgHeight?: string | number | import("long");
                    type?: _155.OrderType;
                    direction?: _155.OrderDirection;
                    status?: _155.OrderStatus;
                    batchId?: string | number | import("long");
                    offer?: {
                        denom?: string;
                        amount?: string;
                    };
                    remaining?: {
                        denom?: string;
                        amount?: string;
                    };
                    received?: {
                        denom?: string;
                        amount?: string;
                    };
                    price?: string;
                    amt?: string;
                    openAmt?: string;
                    expires?: Date;
                }): _155.Order;
            };
            MarketMakingOrderId: {
                encode(message: _155.MarketMakingOrderId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MarketMakingOrderId;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    creatorAddr?: string;
                    orderIds?: (string | number | import("long"))[];
                }): _155.MarketMakingOrderId;
            };
            GenesisState: {
                encode(message: _154.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.GenesisState;
                fromPartial(object: {
                    params?: {
                        poolParams?: {
                            minInitPoolSupply?: string;
                            minInitPoolDeposit?: string;
                            maxPriceRatio?: string;
                        };
                        orderParams?: {
                            maxLifespan?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            depositExtraGas?: string | number | import("long");
                            withdrawExtraGas?: string | number | import("long");
                            orderExtraGas?: string | number | import("long");
                        };
                        feeParams?: {
                            feeCollecterAddr?: string;
                            dustCollectorAddr?: string;
                            swapRate?: string;
                            withdrawRate?: string;
                            pairInitFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            poolInitFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        marketParams?: {
                            precision?: number;
                            batchSize?: number;
                            maxAmmTicks?: number;
                        };
                    };
                    pairs?: {
                        id?: string | number | import("long");
                        baseDenom?: string;
                        quoteDenom?: string;
                        escrowAddr?: string;
                        lastOrderId?: string | number | import("long");
                        lastPrice?: string;
                        currentBatchId?: string | number | import("long");
                    }[];
                    pools?: {
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        typeId?: string | number | import("long");
                        creatorAddr?: string;
                        reserve?: {
                            supply?: {
                                denom?: string;
                                amount?: string;
                            };
                            addr?: string;
                            denom?: string;
                            minSupply?: string;
                            maxSupply?: string;
                        };
                        supply?: {
                            denom?: string;
                            amount?: string;
                        };
                        prevDepositReqId?: string | number | import("long");
                        prevWithdrawReqId?: string | number | import("long");
                        disabled?: boolean;
                        priceRange?: {
                            min?: string;
                            max?: string;
                        };
                    }[];
                    requests?: {
                        orders?: {
                            id?: string | number | import("long");
                            pairId?: string | number | import("long");
                            creatorAddr?: string;
                            msgHeight?: string | number | import("long");
                            type?: _155.OrderType;
                            direction?: _155.OrderDirection;
                            status?: _155.OrderStatus;
                            batchId?: string | number | import("long");
                            offer?: {
                                denom?: string;
                                amount?: string;
                            };
                            remaining?: {
                                denom?: string;
                                amount?: string;
                            };
                            received?: {
                                denom?: string;
                                amount?: string;
                            };
                            price?: string;
                            amt?: string;
                            openAmt?: string;
                            expires?: Date;
                        }[];
                        deposits?: {
                            id?: string | number | import("long");
                            poolId?: string | number | import("long");
                            depositorAddr?: string;
                            poolCoin?: {
                                denom?: string;
                                amount?: string;
                            };
                            msgHeight?: string | number | import("long");
                            depositAmt?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            acceptedAmt?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            status?: _155.RequestStatus;
                        }[];
                        withdrawals?: {
                            id?: string | number | import("long");
                            poolId?: string | number | import("long");
                            withdrawAddr?: string;
                            poolCoin?: {
                                denom?: string;
                                amount?: string;
                            };
                            msgHeight?: string | number | import("long");
                            withdrawAmt?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            status?: _155.RequestStatus;
                        }[];
                        marketMakingOrderIds?: {
                            pairId?: string | number | import("long");
                            creatorAddr?: string;
                            orderIds?: (string | number | import("long"))[];
                        }[];
                    };
                    prevPoolId?: string | number | import("long");
                    prevPairId?: string | number | import("long");
                }): _154.GenesisState;
            };
            GenesisRequestsState: {
                encode(message: _154.GenesisRequestsState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.GenesisRequestsState;
                fromPartial(object: {
                    orders?: {
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        creatorAddr?: string;
                        msgHeight?: string | number | import("long");
                        type?: _155.OrderType;
                        direction?: _155.OrderDirection;
                        status?: _155.OrderStatus;
                        batchId?: string | number | import("long");
                        offer?: {
                            denom?: string;
                            amount?: string;
                        };
                        remaining?: {
                            denom?: string;
                            amount?: string;
                        };
                        received?: {
                            denom?: string;
                            amount?: string;
                        };
                        price?: string;
                        amt?: string;
                        openAmt?: string;
                        expires?: Date;
                    }[];
                    deposits?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        depositorAddr?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        msgHeight?: string | number | import("long");
                        depositAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        acceptedAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _155.RequestStatus;
                    }[];
                    withdrawals?: {
                        id?: string | number | import("long");
                        poolId?: string | number | import("long");
                        withdrawAddr?: string;
                        poolCoin?: {
                            denom?: string;
                            amount?: string;
                        };
                        msgHeight?: string | number | import("long");
                        withdrawAmt?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: _155.RequestStatus;
                    }[];
                    marketMakingOrderIds?: {
                        pairId?: string | number | import("long");
                        creatorAddr?: string;
                        orderIds?: (string | number | import("long"))[];
                    }[];
                }): _154.GenesisRequestsState;
            };
        };
    }
    namespace loan {
        const v1: {
            MsgClientImpl: typeof _359.MsgClientImpl;
            QueryClientImpl: typeof _348.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
                loans(request: _164.QueryGetLoansRequest): Promise<_164.QueryGetLoansResponse>;
                loansAll(request?: _164.QueryAllLoansRequest): Promise<_164.QueryAllLoansResponse>;
            };
            LCDQueryClient: typeof _337.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    requestLoan(value: _165.MsgRequestLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    approveLoan(value: _165.MsgApproveLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayLoan(value: _165.MsgRepayLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidateLoan(value: _165.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelLoan(value: _165.MsgCancelLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    requestLoan(value: _165.MsgRequestLoan): {
                        typeUrl: string;
                        value: _165.MsgRequestLoan;
                    };
                    approveLoan(value: _165.MsgApproveLoan): {
                        typeUrl: string;
                        value: _165.MsgApproveLoan;
                    };
                    repayLoan(value: _165.MsgRepayLoan): {
                        typeUrl: string;
                        value: _165.MsgRepayLoan;
                    };
                    liquidateLoan(value: _165.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _165.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _165.MsgCancelLoan): {
                        typeUrl: string;
                        value: _165.MsgCancelLoan;
                    };
                };
                fromPartial: {
                    requestLoan(value: _165.MsgRequestLoan): {
                        typeUrl: string;
                        value: _165.MsgRequestLoan;
                    };
                    approveLoan(value: _165.MsgApproveLoan): {
                        typeUrl: string;
                        value: _165.MsgApproveLoan;
                    };
                    repayLoan(value: _165.MsgRepayLoan): {
                        typeUrl: string;
                        value: _165.MsgRepayLoan;
                    };
                    liquidateLoan(value: _165.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _165.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _165.MsgCancelLoan): {
                        typeUrl: string;
                        value: _165.MsgCancelLoan;
                    };
                };
            };
            AminoConverter: {
                "/ollo.loan.v1.MsgRequestLoan": {
                    aminoType: string;
                    toAmino: ({ creator, amount, fee, collateral, deadline }: _165.MsgRequestLoan) => {
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
                    }) => _165.MsgRequestLoan;
                };
                "/ollo.loan.v1.MsgApproveLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _165.MsgApproveLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _165.MsgApproveLoan;
                };
                "/ollo.loan.v1.MsgRepayLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _165.MsgRepayLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _165.MsgRepayLoan;
                };
                "/ollo.loan.v1.MsgLiquidateLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _165.MsgLiquidateLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _165.MsgLiquidateLoan;
                };
                "/ollo.loan.v1.MsgCancelLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _165.MsgCancelLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _165.MsgCancelLoan;
                };
            };
            MsgRequestLoan: {
                encode(message: _165.MsgRequestLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRequestLoan;
                fromPartial(object: {
                    creator?: string;
                    amount?: string;
                    fee?: string;
                    collateral?: string;
                    deadline?: string;
                }): _165.MsgRequestLoan;
            };
            MsgRequestLoanResponse: {
                encode(_: _165.MsgRequestLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRequestLoanResponse;
                fromPartial(_: {}): _165.MsgRequestLoanResponse;
            };
            MsgApproveLoan: {
                encode(message: _165.MsgApproveLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgApproveLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _165.MsgApproveLoan;
            };
            MsgApproveLoanResponse: {
                encode(_: _165.MsgApproveLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgApproveLoanResponse;
                fromPartial(_: {}): _165.MsgApproveLoanResponse;
            };
            MsgRepayLoan: {
                encode(message: _165.MsgRepayLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRepayLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _165.MsgRepayLoan;
            };
            MsgRepayLoanResponse: {
                encode(_: _165.MsgRepayLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRepayLoanResponse;
                fromPartial(_: {}): _165.MsgRepayLoanResponse;
            };
            MsgLiquidateLoan: {
                encode(message: _165.MsgLiquidateLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgLiquidateLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _165.MsgLiquidateLoan;
            };
            MsgLiquidateLoanResponse: {
                encode(_: _165.MsgLiquidateLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgLiquidateLoanResponse;
                fromPartial(_: {}): _165.MsgLiquidateLoanResponse;
            };
            MsgCancelLoan: {
                encode(message: _165.MsgCancelLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCancelLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _165.MsgCancelLoan;
            };
            MsgCancelLoanResponse: {
                encode(_: _165.MsgCancelLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCancelLoanResponse;
                fromPartial(_: {}): _165.MsgCancelLoanResponse;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromPartial(_: {}): _164.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _164.QueryParamsResponse;
            };
            QueryGetLoansRequest: {
                encode(message: _164.QueryGetLoansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryGetLoansRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _164.QueryGetLoansRequest;
            };
            QueryGetLoansResponse: {
                encode(message: _164.QueryGetLoansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryGetLoansResponse;
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
                }): _164.QueryGetLoansResponse;
            };
            QueryAllLoansRequest: {
                encode(message: _164.QueryAllLoansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryAllLoansRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _164.QueryAllLoansRequest;
            };
            QueryAllLoansResponse: {
                encode(message: _164.QueryAllLoansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryAllLoansResponse;
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
                }): _164.QueryAllLoansResponse;
            };
            Params: {
                encode(_: _163.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Params;
                fromPartial(_: {}): _163.Params;
            };
            LoanPacketData: {
                encode(message: _162.LoanPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.LoanPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _162.LoanPacketData;
            };
            NoData: {
                encode(_: _162.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.NoData;
                fromPartial(_: {}): _162.NoData;
            };
            Loans: {
                encode(message: _161.Loans, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Loans;
                fromPartial(object: {
                    id?: string | number | import("long");
                    amount?: string;
                    fee?: string;
                    collateral?: string;
                    deadline?: string;
                    state?: string;
                    borrower?: string;
                    lender?: string;
                }): _161.Loans;
            };
            GenesisState: {
                encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
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
                }): _160.GenesisState;
            };
        };
    }
    namespace market {
        const v1: {
            QueryClientImpl: typeof _349.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _169.QueryParamsRequest): Promise<_169.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _338.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _169.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryParamsRequest;
                fromPartial(_: {}): _169.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _169.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _169.QueryParamsResponse;
            };
            Params: {
                encode(_: _168.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Params;
                fromPartial(_: {}): _168.Params;
            };
            MarketPacketData: {
                encode(message: _167.MarketPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MarketPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _167.MarketPacketData;
            };
            NoData: {
                encode(_: _167.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.NoData;
                fromPartial(_: {}): _167.NoData;
            };
            GenesisState: {
                encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
                fromPartial(object: {
                    params?: {};
                    portId?: string;
                }): _166.GenesisState;
            };
        };
    }
    namespace mint {
        const v1: {
            QueryClientImpl: typeof _350.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _175.QueryParamsRequest): Promise<_175.QueryParamsResponse>;
                inflation(request?: _175.QueryInflationRequest): Promise<_175.QueryInflationResponse>;
                annualProvisions(request?: _175.QueryAnnualProvisionsRequest): Promise<_175.QueryAnnualProvisionsResponse>;
                distribution(request?: _175.QueryDistributionRequest): Promise<_175.QueryDistributionResponse>;
                lastBlockTime(request?: _175.QueryLastBlockTimeRequest): Promise<_175.QueryLastBlockTimeResponse>;
            };
            LCDQueryClient: typeof _339.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _175.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsRequest;
                fromPartial(_: {}): _175.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _175.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsResponse;
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
                    };
                }): _175.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _175.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryInflationRequest;
                fromPartial(_: {}): _175.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _175.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _175.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _175.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _175.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _175.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _175.QueryAnnualProvisionsResponse;
            };
            QueryDistributionRequest: {
                encode(_: _175.QueryDistributionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryDistributionRequest;
                fromPartial(_: {}): _175.QueryDistributionRequest;
            };
            QueryDistributionResponse: {
                encode(_: _175.QueryDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryDistributionResponse;
                fromPartial(_: {}): _175.QueryDistributionResponse;
            };
            QueryLastBlockTimeRequest: {
                encode(_: _175.QueryLastBlockTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryLastBlockTimeRequest;
                fromPartial(_: {}): _175.QueryLastBlockTimeRequest;
            };
            QueryLastBlockTimeResponse: {
                encode(message: _175.QueryLastBlockTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryLastBlockTimeResponse;
                fromPartial(object: {
                    lastBlockTime?: Date;
                }): _175.QueryLastBlockTimeResponse;
            };
            Params: {
                encode(message: _174.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Params;
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
                }): _174.Params;
            };
            Minter: {
                encode(message: _173.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _173.Minter;
            };
            WeightedAddress: {
                encode(message: _173.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _173.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _173.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    communityPool?: string;
                    poolIncentives?: string;
                    grantsProgram?: string;
                    developerRewards?: string;
                    fundedAddresses?: string;
                }): _173.DistributionProportions;
            };
            GenesisState: {
                encode(message: _172.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.GenesisState;
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
                    };
                    lastBlockTime?: Date;
                }): _172.GenesisState;
            };
            EventMint: {
                encode(message: _171.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.EventMint;
                fromPartial(object: {
                    bondedRatio?: string;
                    inflation?: string;
                    annualProvisions?: string;
                    amount?: string;
                }): _171.EventMint;
            };
        };
    }
    namespace nft {
        const v1: {
            MsgClientImpl: typeof _360.MsgClientImpl;
            QueryClientImpl: typeof _351.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                supply(request: _180.QuerySupplyRequest): Promise<_180.QuerySupplyResponse>;
                nFTsOfOwner(request: _180.QueryNFTsOfOwnerRequest): Promise<_180.QueryNFTsOfOwnerResponse>;
                collection(request: _180.QueryCollectionRequest): Promise<_180.QueryCollectionResponse>;
                denom(request: _180.QueryDenomRequest): Promise<_180.QueryDenomResponse>;
                denoms(request?: _180.QueryDenomsRequest): Promise<_180.QueryDenomsResponse>;
                nFT(request: _180.QueryNFTRequest): Promise<_180.QueryNFTResponse>;
                params(request?: _180.QueryParamsRequest): Promise<_180.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _340.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueDenom(value: _181.MsgIssueDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferDenom(value: _181.MsgTransferDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintNFT(value: _181.MsgMintNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnNFT(value: _181.MsgBurnNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editNFT(value: _181.MsgEditNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sendNFT(value: _181.MsgSendNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueDenom(value: _181.MsgIssueDenom): {
                        typeUrl: string;
                        value: _181.MsgIssueDenom;
                    };
                    transferDenom(value: _181.MsgTransferDenom): {
                        typeUrl: string;
                        value: _181.MsgTransferDenom;
                    };
                    mintNFT(value: _181.MsgMintNFT): {
                        typeUrl: string;
                        value: _181.MsgMintNFT;
                    };
                    burnNFT(value: _181.MsgBurnNFT): {
                        typeUrl: string;
                        value: _181.MsgBurnNFT;
                    };
                    editNFT(value: _181.MsgEditNFT): {
                        typeUrl: string;
                        value: _181.MsgEditNFT;
                    };
                    sendNFT(value: _181.MsgSendNFT): {
                        typeUrl: string;
                        value: _181.MsgSendNFT;
                    };
                };
                fromPartial: {
                    issueDenom(value: _181.MsgIssueDenom): {
                        typeUrl: string;
                        value: _181.MsgIssueDenom;
                    };
                    transferDenom(value: _181.MsgTransferDenom): {
                        typeUrl: string;
                        value: _181.MsgTransferDenom;
                    };
                    mintNFT(value: _181.MsgMintNFT): {
                        typeUrl: string;
                        value: _181.MsgMintNFT;
                    };
                    burnNFT(value: _181.MsgBurnNFT): {
                        typeUrl: string;
                        value: _181.MsgBurnNFT;
                    };
                    editNFT(value: _181.MsgEditNFT): {
                        typeUrl: string;
                        value: _181.MsgEditNFT;
                    };
                    sendNFT(value: _181.MsgSendNFT): {
                        typeUrl: string;
                        value: _181.MsgSendNFT;
                    };
                };
            };
            AminoConverter: {
                "/ollo.nft.v1.MsgIssueDenom": {
                    aminoType: string;
                    toAmino: ({ id, name, schema, sender, symbol, mintRestricted, updateRestricted, description, uri, uriHash, data }: _181.MsgIssueDenom) => {
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
                    }) => _181.MsgIssueDenom;
                };
                "/ollo.nft.v1.MsgTransferDenom": {
                    aminoType: string;
                    toAmino: ({ id, sender, recipient }: _181.MsgTransferDenom) => {
                        id: string;
                        sender: string;
                        recipient: string;
                    };
                    fromAmino: ({ id, sender, recipient }: {
                        id: string;
                        sender: string;
                        recipient: string;
                    }) => _181.MsgTransferDenom;
                };
                "/ollo.nft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: _181.MsgMintNFT) => {
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
                    }) => _181.MsgMintNFT;
                };
                "/ollo.nft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, sender }: _181.MsgBurnNFT) => {
                        id: string;
                        denom_id: string;
                        sender: string;
                    };
                    fromAmino: ({ id, denom_id, sender }: {
                        id: string;
                        denom_id: string;
                        sender: string;
                    }) => _181.MsgBurnNFT;
                };
                "/ollo.nft.v1.MsgEditNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, uriHash }: _181.MsgEditNFT) => {
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
                    }) => _181.MsgEditNFT;
                };
                "/ollo.nft.v1.MsgSendNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, recipient, uriHash }: _181.MsgSendNFT) => {
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
                    }) => _181.MsgSendNFT;
                };
            };
            MsgIssueDenom: {
                encode(message: _181.MsgIssueDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgIssueDenom;
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
                }): _181.MsgIssueDenom;
            };
            MsgIssueDenomResponse: {
                encode(_: _181.MsgIssueDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgIssueDenomResponse;
                fromPartial(_: {}): _181.MsgIssueDenomResponse;
            };
            MsgTransferDenom: {
                encode(message: _181.MsgTransferDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgTransferDenom;
                fromPartial(object: {
                    id?: string;
                    sender?: string;
                    recipient?: string;
                }): _181.MsgTransferDenom;
            };
            MsgTransferDenomResponse: {
                encode(_: _181.MsgTransferDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgTransferDenomResponse;
                fromPartial(_: {}): _181.MsgTransferDenomResponse;
            };
            MsgMintNFT: {
                encode(message: _181.MsgMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgMintNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    recipient?: string;
                    uriHash?: string;
                }): _181.MsgMintNFT;
            };
            MsgBurnNFT: {
                encode(message: _181.MsgBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgBurnNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    sender?: string;
                }): _181.MsgBurnNFT;
            };
            MsgEditNFT: {
                encode(message: _181.MsgEditNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgEditNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    uriHash?: string;
                }): _181.MsgEditNFT;
            };
            MsgSendNFT: {
                encode(message: _181.MsgSendNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgSendNFT;
                fromPartial(object: {
                    id?: string;
                    denomId?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    sender?: string;
                    recipient?: string;
                    uriHash?: string;
                }): _181.MsgSendNFT;
            };
            MsgMintNFTResponse: {
                encode(_: _181.MsgMintNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgMintNFTResponse;
                fromPartial(_: {}): _181.MsgMintNFTResponse;
            };
            MsgBurnNFTResponse: {
                encode(_: _181.MsgBurnNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgBurnNFTResponse;
                fromPartial(_: {}): _181.MsgBurnNFTResponse;
            };
            MsgEditNFTResponse: {
                encode(_: _181.MsgEditNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgEditNFTResponse;
                fromPartial(_: {}): _181.MsgEditNFTResponse;
            };
            MsgSendNFTResponse: {
                encode(_: _181.MsgSendNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgSendNFTResponse;
                fromPartial(_: {}): _181.MsgSendNFTResponse;
            };
            QueryParamsRequest: {
                encode(_: _180.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryParamsRequest;
                fromPartial(_: {}): _180.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _180.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _180.QueryParamsResponse;
            };
            QuerySupplyRequest: {
                encode(message: _180.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QuerySupplyRequest;
                fromPartial(object: {
                    denomId?: string;
                    owner?: string;
                }): _180.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _180.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long");
                }): _180.QuerySupplyResponse;
            };
            QueryNFTsOfOwnerRequest: {
                encode(message: _180.QueryNFTsOfOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryNFTsOfOwnerRequest;
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
                }): _180.QueryNFTsOfOwnerRequest;
            };
            QueryNFTsOfOwnerResponse: {
                encode(message: _180.QueryNFTsOfOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryNFTsOfOwnerResponse;
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
                }): _180.QueryNFTsOfOwnerResponse;
            };
            QueryCollectionRequest: {
                encode(message: _180.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryCollectionRequest;
                fromPartial(object: {
                    denomId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _180.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _180.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryCollectionResponse;
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
                }): _180.QueryCollectionResponse;
            };
            QueryDenomRequest: {
                encode(message: _180.QueryDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryDenomRequest;
                fromPartial(object: {
                    denomId?: string;
                }): _180.QueryDenomRequest;
            };
            QueryDenomResponse: {
                encode(message: _180.QueryDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryDenomResponse;
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
                }): _180.QueryDenomResponse;
            };
            QueryDenomsRequest: {
                encode(message: _180.QueryDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryDenomsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _180.QueryDenomsRequest;
            };
            QueryDenomsResponse: {
                encode(message: _180.QueryDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryDenomsResponse;
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
                }): _180.QueryDenomsResponse;
            };
            QueryNFTRequest: {
                encode(message: _180.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryNFTRequest;
                fromPartial(object: {
                    denomId?: string;
                    tokenId?: string;
                }): _180.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _180.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        id?: string;
                        name?: string;
                        uri?: string;
                        data?: string;
                        owner?: string;
                        uriHash?: string;
                    };
                }): _180.QueryNFTResponse;
            };
            Params: {
                encode(_: _179.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Params;
                fromPartial(_: {}): _179.Params;
            };
            BaseNFT: {
                encode(message: _178.BaseNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.BaseNFT;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    owner?: string;
                    uriHash?: string;
                }): _178.BaseNFT;
            };
            NFTMetadata: {
                encode(message: _178.NFTMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.NFTMetadata;
                fromPartial(object: {
                    name?: string;
                    data?: string;
                }): _178.NFTMetadata;
            };
            Denom: {
                encode(message: _178.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Denom;
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
                }): _178.Denom;
            };
            DenomMetadata: {
                encode(message: _178.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.DenomMetadata;
                fromPartial(object: {
                    creator?: string;
                    schema?: string;
                    mintRestricted?: boolean;
                    updateRestricted?: boolean;
                    data?: string;
                }): _178.DenomMetadata;
            };
            IDCollection: {
                encode(message: _178.IDCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.IDCollection;
                fromPartial(object: {
                    denomId?: string;
                    tokenIds?: string[];
                }): _178.IDCollection;
            };
            Owner: {
                encode(message: _178.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Owner;
                fromPartial(object: {
                    address?: string;
                    idCollections?: {
                        denomId?: string;
                        tokenIds?: string[];
                    }[];
                }): _178.Owner;
            };
            Collection: {
                encode(message: _178.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Collection;
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
                }): _178.Collection;
            };
            GenesisState: {
                encode(message: _177.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.GenesisState;
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
                }): _177.GenesisState;
            };
        };
    }
    namespace ons {
        const v1: {
            MsgClientImpl: typeof _361.MsgClientImpl;
            QueryClientImpl: typeof _352.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _185.QueryParamsRequest): Promise<_185.QueryParamsResponse>;
                whois(request: _185.QueryGetWhoisRequest): Promise<_185.QueryGetWhoisResponse>;
                whoisAll(request?: _185.QueryAllWhoisRequest): Promise<_185.QueryAllWhoisResponse>;
            };
            LCDQueryClient: typeof _341.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    buyName(value: _186.MsgBuyName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sellName(value: _186.MsgSellName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setName(value: _186.MsgSetName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteName(value: _186.MsgDeleteName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addThread(value: _186.MsgAddThread): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteThread(value: _186.MsgDeleteThread): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    buyName(value: _186.MsgBuyName): {
                        typeUrl: string;
                        value: _186.MsgBuyName;
                    };
                    sellName(value: _186.MsgSellName): {
                        typeUrl: string;
                        value: _186.MsgSellName;
                    };
                    setName(value: _186.MsgSetName): {
                        typeUrl: string;
                        value: _186.MsgSetName;
                    };
                    deleteName(value: _186.MsgDeleteName): {
                        typeUrl: string;
                        value: _186.MsgDeleteName;
                    };
                    addThread(value: _186.MsgAddThread): {
                        typeUrl: string;
                        value: _186.MsgAddThread;
                    };
                    deleteThread(value: _186.MsgDeleteThread): {
                        typeUrl: string;
                        value: _186.MsgDeleteThread;
                    };
                };
                fromPartial: {
                    buyName(value: _186.MsgBuyName): {
                        typeUrl: string;
                        value: _186.MsgBuyName;
                    };
                    sellName(value: _186.MsgSellName): {
                        typeUrl: string;
                        value: _186.MsgSellName;
                    };
                    setName(value: _186.MsgSetName): {
                        typeUrl: string;
                        value: _186.MsgSetName;
                    };
                    deleteName(value: _186.MsgDeleteName): {
                        typeUrl: string;
                        value: _186.MsgDeleteName;
                    };
                    addThread(value: _186.MsgAddThread): {
                        typeUrl: string;
                        value: _186.MsgAddThread;
                    };
                    deleteThread(value: _186.MsgDeleteThread): {
                        typeUrl: string;
                        value: _186.MsgDeleteThread;
                    };
                };
            };
            AminoConverter: {
                "/ollo.ons.v1.MsgBuyName": {
                    aminoType: string;
                    toAmino: ({ creator, name, bidderAddr, bid }: _186.MsgBuyName) => {
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
                    }) => _186.MsgBuyName;
                };
                "/ollo.ons.v1.MsgSellName": {
                    aminoType: string;
                    toAmino: ({ creator, name, sellerAddr, offer }: _186.MsgSellName) => {
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
                    }) => _186.MsgSellName;
                };
                "/ollo.ons.v1.MsgSetName": {
                    aminoType: string;
                    toAmino: ({ creatorAddr, name, value }: _186.MsgSetName) => {
                        creatorAddr: string;
                        name: string;
                        value: string;
                    };
                    fromAmino: ({ creatorAddr, name, value }: {
                        creatorAddr: string;
                        name: string;
                        value: string;
                    }) => _186.MsgSetName;
                };
                "/ollo.ons.v1.MsgDeleteName": {
                    aminoType: string;
                    toAmino: ({ creatorAddr, name }: _186.MsgDeleteName) => {
                        creatorAddr: string;
                        name: string;
                    };
                    fromAmino: ({ creatorAddr, name }: {
                        creatorAddr: string;
                        name: string;
                    }) => _186.MsgDeleteName;
                };
                "/ollo.ons.v1.MsgAddThread": {
                    aminoType: string;
                    toAmino: ({ creator, name, thread, addr, offer }: _186.MsgAddThread) => {
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
                    }) => _186.MsgAddThread;
                };
                "/ollo.ons.v1.MsgDeleteThread": {
                    aminoType: string;
                    toAmino: ({ creator, name, thread, addr }: _186.MsgDeleteThread) => {
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
                    }) => _186.MsgDeleteThread;
                };
            };
            Whois: {
                encode(message: _187.Whois, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Whois;
                fromPartial(object: {
                    index?: string;
                    name?: string;
                    value?: string;
                    price?: string;
                    ownerAddr?: string;
                }): _187.Whois;
            };
            MsgBuyName: {
                encode(message: _186.MsgBuyName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgBuyName;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    bidderAddr?: string;
                    bid?: string;
                }): _186.MsgBuyName;
            };
            MsgBuyNameResponse: {
                encode(_: _186.MsgBuyNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgBuyNameResponse;
                fromPartial(_: {}): _186.MsgBuyNameResponse;
            };
            MsgSellName: {
                encode(message: _186.MsgSellName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgSellName;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    sellerAddr?: string;
                    offer?: string;
                }): _186.MsgSellName;
            };
            MsgSellNameResponse: {
                encode(_: _186.MsgSellNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgSellNameResponse;
                fromPartial(_: {}): _186.MsgSellNameResponse;
            };
            MsgSetName: {
                encode(message: _186.MsgSetName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgSetName;
                fromPartial(object: {
                    creatorAddr?: string;
                    name?: string;
                    value?: string;
                }): _186.MsgSetName;
            };
            MsgDeleteName: {
                encode(message: _186.MsgDeleteName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgDeleteName;
                fromPartial(object: {
                    creatorAddr?: string;
                    name?: string;
                }): _186.MsgDeleteName;
            };
            MsgDeleteNameResponse: {
                encode(_: _186.MsgDeleteNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgDeleteNameResponse;
                fromPartial(_: {}): _186.MsgDeleteNameResponse;
            };
            MsgSetNameResponse: {
                encode(_: _186.MsgSetNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgSetNameResponse;
                fromPartial(_: {}): _186.MsgSetNameResponse;
            };
            MsgAddThread: {
                encode(message: _186.MsgAddThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgAddThread;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    thread?: string;
                    addr?: string;
                    offer?: string;
                }): _186.MsgAddThread;
            };
            MsgAddThreadResponse: {
                encode(_: _186.MsgAddThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgAddThreadResponse;
                fromPartial(_: {}): _186.MsgAddThreadResponse;
            };
            MsgDeleteThread: {
                encode(message: _186.MsgDeleteThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgDeleteThread;
                fromPartial(object: {
                    creator?: string;
                    name?: string;
                    thread?: string;
                    addr?: string;
                }): _186.MsgDeleteThread;
            };
            MsgDeleteThreadResponse: {
                encode(_: _186.MsgDeleteThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgDeleteThreadResponse;
                fromPartial(_: {}): _186.MsgDeleteThreadResponse;
            };
            QueryParamsRequest: {
                encode(_: _185.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryParamsRequest;
                fromPartial(_: {}): _185.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _185.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _185.QueryParamsResponse;
            };
            QueryGetWhoisRequest: {
                encode(message: _185.QueryGetWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryGetWhoisRequest;
                fromPartial(object: {
                    index?: string;
                }): _185.QueryGetWhoisRequest;
            };
            QueryGetWhoisResponse: {
                encode(message: _185.QueryGetWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryGetWhoisResponse;
                fromPartial(object: {
                    whois?: {
                        index?: string;
                        name?: string;
                        value?: string;
                        price?: string;
                        ownerAddr?: string;
                    };
                }): _185.QueryGetWhoisResponse;
            };
            QueryAllWhoisRequest: {
                encode(message: _185.QueryAllWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryAllWhoisRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _185.QueryAllWhoisRequest;
            };
            QueryAllWhoisResponse: {
                encode(message: _185.QueryAllWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryAllWhoisResponse;
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
                }): _185.QueryAllWhoisResponse;
            };
            Params: {
                encode(_: _184.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Params;
                fromPartial(_: {}): _184.Params;
            };
            OnsPacketData: {
                encode(message: _183.OnsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.OnsPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _183.OnsPacketData;
            };
            NoData: {
                encode(_: _183.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.NoData;
                fromPartial(_: {}): _183.NoData;
            };
            GenesisState: {
                encode(message: _182.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.GenesisState;
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
                }): _182.GenesisState;
            };
        };
    }
    namespace reserve {
        const v1: {
            MsgClientImpl: typeof _362.MsgClientImpl;
            QueryClientImpl: typeof _353.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                getDenoms(request?: _192.QueryGetDenomsRequest): Promise<_192.QueryGetDenomsResponse>;
                getDenom(request: _192.QueryGetDenomRequest): Promise<_192.QueryGetDenomResponse>;
                getDenomWhitelist(request: _192.QueryGetDenomWhitelistRequest): Promise<_192.QueryGetDenomWhitelistResponse>;
                denomsFromCreator(request: _192.QueryDenomsFromCreatorRequest): Promise<_192.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _342.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _194.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintDenom(value: _194.MsgMintDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnDenom(value: _194.MsgBurnDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeDenomAdmin(value: _194.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _194.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _194.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _194.MsgCreateDenom): {
                        typeUrl: string;
                        value: _194.MsgCreateDenom;
                    };
                    mintDenom(value: _194.MsgMintDenom): {
                        typeUrl: string;
                        value: _194.MsgMintDenom;
                    };
                    burnDenom(value: _194.MsgBurnDenom): {
                        typeUrl: string;
                        value: _194.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _194.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _194.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _194.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _194.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _194.MsgForceTransfer): {
                        typeUrl: string;
                        value: _194.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _194.MsgCreateDenom): {
                        typeUrl: string;
                        value: _194.MsgCreateDenom;
                    };
                    mintDenom(value: _194.MsgMintDenom): {
                        typeUrl: string;
                        value: _194.MsgMintDenom;
                    };
                    burnDenom(value: _194.MsgBurnDenom): {
                        typeUrl: string;
                        value: _194.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _194.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _194.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _194.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _194.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _194.MsgForceTransfer): {
                        typeUrl: string;
                        value: _194.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/ollo.reserve.v1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _194.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _194.MsgCreateDenom;
                };
                "/ollo.reserve.v1.MsgMintDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _194.MsgMintDenom) => {
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
                    }) => _194.MsgMintDenom;
                };
                "/ollo.reserve.v1.MsgBurnDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _194.MsgBurnDenom) => {
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
                    }) => _194.MsgBurnDenom;
                };
                "/ollo.reserve.v1.MsgChangeDenomAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _194.MsgChangeDenomAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _194.MsgChangeDenomAdmin;
                };
                "/ollo.reserve.v1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _194.MsgSetDenomMetadata) => {
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
                    }) => _194.MsgSetDenomMetadata;
                };
                "/ollo.reserve.v1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: _194.MsgForceTransfer) => {
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
                    }) => _194.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                encode(message: _194.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _194.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _194.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _194.MsgCreateDenomResponse;
            };
            MsgMintDenom: {
                encode(message: _194.MsgMintDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgMintDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _194.MsgMintDenom;
            };
            MsgMintDenomResponse: {
                encode(_: _194.MsgMintDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgMintDenomResponse;
                fromPartial(_: {}): _194.MsgMintDenomResponse;
            };
            MsgBurnDenom: {
                encode(message: _194.MsgBurnDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgBurnDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _194.MsgBurnDenom;
            };
            MsgBurnDenomResponse: {
                encode(_: _194.MsgBurnDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgBurnDenomResponse;
                fromPartial(_: {}): _194.MsgBurnDenomResponse;
            };
            MsgChangeDenomAdmin: {
                encode(message: _194.MsgChangeDenomAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgChangeDenomAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _194.MsgChangeDenomAdmin;
            };
            MsgChangeDenomAdminResponse: {
                encode(_: _194.MsgChangeDenomAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgChangeDenomAdminResponse;
                fromPartial(_: {}): _194.MsgChangeDenomAdminResponse;
            };
            MsgForceTransfer: {
                encode(message: _194.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgForceTransfer;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    transferFromAddress?: string;
                    transferToAddress?: string;
                }): _194.MsgForceTransfer;
            };
            MsgForceTransferResponse: {
                encode(_: _194.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgForceTransferResponse;
                fromPartial(_: {}): _194.MsgForceTransferResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _194.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgSetDenomMetadata;
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
                }): _194.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _194.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgSetDenomMetadataResponse;
                fromPartial(_: {}): _194.MsgSetDenomMetadataResponse;
            };
            DenomWhitelist: {
                encode(message: _193.DenomWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.DenomWhitelist;
                fromPartial(object: {
                    denom?: string;
                    addresses?: string[];
                }): _193.DenomWhitelist;
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
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _192.QueryParamsResponse;
            };
            QueryGetDenomWhitelistRequest: {
                encode(message: _192.QueryGetDenomWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryGetDenomWhitelistRequest;
                fromPartial(object: {
                    denom?: string;
                }): _192.QueryGetDenomWhitelistRequest;
            };
            QueryGetDenomWhitelistResponse: {
                encode(message: _192.QueryGetDenomWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryGetDenomWhitelistResponse;
                fromPartial(object: {
                    whitelist?: {
                        denom?: string;
                        addresses?: string[];
                    };
                }): _192.QueryGetDenomWhitelistResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _192.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _192.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _192.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _192.QueryDenomsFromCreatorResponse;
            };
            QueryGetDenomsRequest: {
                encode(_: _192.QueryGetDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryGetDenomsRequest;
                fromPartial(_: {}): _192.QueryGetDenomsRequest;
            };
            QueryGetDenomsResponse: {
                encode(message: _192.QueryGetDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryGetDenomsResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _192.QueryGetDenomsResponse;
            };
            QueryGetDenomRequest: {
                encode(message: _192.QueryGetDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryGetDenomRequest;
                fromPartial(object: {
                    denom?: string;
                }): _192.QueryGetDenomRequest;
            };
            QueryGetDenomResponse: {
                encode(_: _192.QueryGetDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryGetDenomResponse;
                fromPartial(_: {}): _192.QueryGetDenomResponse;
            };
            Params: {
                encode(message: _191.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _191.Params;
            };
            DenomUnit: {
                encode(message: _190.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _190.DenomUnit;
            };
            DenomMetadata: {
                encode(message: _190.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.DenomMetadata;
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
                }): _190.DenomMetadata;
            };
            GenesisState: {
                encode(message: _189.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.GenesisState;
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
                }): _189.GenesisState;
            };
            EventDenomBurned: {
                encode(message: _188.EventDenomBurned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.EventDenomBurned;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _188.EventDenomBurned;
            };
            EventDenomMinted: {
                encode(message: _188.EventDenomMinted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.EventDenomMinted;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _188.EventDenomMinted;
            };
        };
    }
    namespace token {
        const v1: {
            MsgClientImpl: typeof _363.MsgClientImpl;
            QueryClientImpl: typeof _354.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                token(request: _198.QueryTokenRequest): Promise<_198.QueryTokenResponse>;
                tokens(request: _198.QueryTokensRequest): Promise<_198.QueryTokensResponse>;
                fees(request: _198.QueryFeesRequest): Promise<_198.QueryFeesResponse>;
                params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
                burn(request?: _198.QueryBurnRequest): Promise<_198.QueryBurnResponse>;
            };
            LCDQueryClient: typeof _343.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueToken(value: _200.MsgIssueToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editToken(value: _200.MsgEditToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintToken(value: _200.MsgMintToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnToken(value: _200.MsgBurnToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenOwner(value: _200.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueToken(value: _200.MsgIssueToken): {
                        typeUrl: string;
                        value: _200.MsgIssueToken;
                    };
                    editToken(value: _200.MsgEditToken): {
                        typeUrl: string;
                        value: _200.MsgEditToken;
                    };
                    mintToken(value: _200.MsgMintToken): {
                        typeUrl: string;
                        value: _200.MsgMintToken;
                    };
                    burnToken(value: _200.MsgBurnToken): {
                        typeUrl: string;
                        value: _200.MsgBurnToken;
                    };
                    transferTokenOwner(value: _200.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _200.MsgTransferTokenOwner;
                    };
                };
                fromPartial: {
                    issueToken(value: _200.MsgIssueToken): {
                        typeUrl: string;
                        value: _200.MsgIssueToken;
                    };
                    editToken(value: _200.MsgEditToken): {
                        typeUrl: string;
                        value: _200.MsgEditToken;
                    };
                    mintToken(value: _200.MsgMintToken): {
                        typeUrl: string;
                        value: _200.MsgMintToken;
                    };
                    burnToken(value: _200.MsgBurnToken): {
                        typeUrl: string;
                        value: _200.MsgBurnToken;
                    };
                    transferTokenOwner(value: _200.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _200.MsgTransferTokenOwner;
                    };
                };
            };
            AminoConverter: {
                "/ollo.token.v1.MsgIssueToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, scale, minUnit, initialSupply, maxSupply, mintable, owner }: _200.MsgIssueToken) => {
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
                    }) => _200.MsgIssueToken;
                };
                "/ollo.token.v1.MsgEditToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, maxSupply, mintable, owner }: _200.MsgEditToken) => {
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
                    }) => _200.MsgEditToken;
                };
                "/ollo.token.v1.MsgMintToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, to, owner }: _200.MsgMintToken) => {
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
                    }) => _200.MsgMintToken;
                };
                "/ollo.token.v1.MsgBurnToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, sender }: _200.MsgBurnToken) => {
                        symbol: string;
                        amount: string;
                        sender: string;
                    };
                    fromAmino: ({ symbol, amount, sender }: {
                        symbol: string;
                        amount: string;
                        sender: string;
                    }) => _200.MsgBurnToken;
                };
                "/ollo.token.v1.MsgTransferTokenOwner": {
                    aminoType: string;
                    toAmino: ({ srcOwner, dstOwner, symbol }: _200.MsgTransferTokenOwner) => {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    };
                    fromAmino: ({ src_owner, dst_owner, symbol }: {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    }) => _200.MsgTransferTokenOwner;
                };
            };
            MsgIssueToken: {
                encode(message: _200.MsgIssueToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgIssueToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _200.MsgIssueToken;
            };
            MsgIssueTokenResponse: {
                encode(_: _200.MsgIssueTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgIssueTokenResponse;
                fromPartial(_: {}): _200.MsgIssueTokenResponse;
            };
            MsgTransferTokenOwner: {
                encode(message: _200.MsgTransferTokenOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgTransferTokenOwner;
                fromPartial(object: {
                    srcOwner?: string;
                    dstOwner?: string;
                    symbol?: string;
                }): _200.MsgTransferTokenOwner;
            };
            MsgTransferTokenOwnerResponse: {
                encode(_: _200.MsgTransferTokenOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgTransferTokenOwnerResponse;
                fromPartial(_: {}): _200.MsgTransferTokenOwnerResponse;
            };
            MsgEditToken: {
                encode(message: _200.MsgEditToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgEditToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    maxSupply?: string | number | import("long");
                    mintable?: string;
                    owner?: string;
                }): _200.MsgEditToken;
            };
            MsgEditTokenResponse: {
                encode(_: _200.MsgEditTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgEditTokenResponse;
                fromPartial(_: {}): _200.MsgEditTokenResponse;
            };
            MsgMintToken: {
                encode(message: _200.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgMintToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    to?: string;
                    owner?: string;
                }): _200.MsgMintToken;
            };
            MsgMintTokenResponse: {
                encode(_: _200.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgMintTokenResponse;
                fromPartial(_: {}): _200.MsgMintTokenResponse;
            };
            MsgBurnToken: {
                encode(message: _200.MsgBurnToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgBurnToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    sender?: string;
                }): _200.MsgBurnToken;
            };
            MsgBurnTokenResponse: {
                encode(_: _200.MsgBurnTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgBurnTokenResponse;
                fromPartial(_: {}): _200.MsgBurnTokenResponse;
            };
            Token: {
                encode(message: _199.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Token;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _199.Token;
            };
            QueryTokenRequest: {
                encode(message: _198.QueryTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryTokenRequest;
                fromPartial(object: {
                    denom?: string;
                }): _198.QueryTokenRequest;
            };
            QueryTokenResponse: {
                encode(message: _198.QueryTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryTokenResponse;
                fromPartial(object: {
                    Token?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _198.QueryTokenResponse;
            };
            QueryTokensRequest: {
                encode(message: _198.QueryTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryTokensRequest;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _198.QueryTokensRequest;
            };
            QueryTokensResponse: {
                encode(message: _198.QueryTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryTokensResponse;
                fromPartial(object: {
                    Tokens?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _198.QueryTokensResponse;
            };
            QueryFeesRequest: {
                encode(message: _198.QueryFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryFeesRequest;
                fromPartial(object: {
                    denom?: string;
                }): _198.QueryFeesRequest;
            };
            QueryFeesResponse: {
                encode(message: _198.QueryFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryFeesResponse;
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
                }): _198.QueryFeesResponse;
            };
            QueryParamsRequest: {
                encode(_: _198.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryParamsRequest;
                fromPartial(_: {}): _198.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _198.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryParamsResponse;
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
                }): _198.QueryParamsResponse;
            };
            QueryBurnRequest: {
                encode(_: _198.QueryBurnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryBurnRequest;
                fromPartial(_: {}): _198.QueryBurnRequest;
            };
            QueryBurnResponse: {
                encode(message: _198.QueryBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryBurnResponse;
                fromPartial(object: {
                    burnedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _198.QueryBurnResponse;
            };
            Params: {
                encode(message: _197.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Params;
                fromPartial(object: {
                    tokenTaxRate?: string;
                    issueTokenBaseFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    mintTokenFeeRatio?: string;
                }): _197.Params;
            };
            GenesisState: {
                encode(message: _196.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.GenesisState;
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
                }): _196.GenesisState;
            };
            EventIssueToken: {
                encode(message: _195.EventIssueToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.EventIssueToken;
                fromPartial(object: {
                    denom?: string;
                    creator?: string;
                }): _195.EventIssueToken;
            };
            EventMintToken: {
                encode(message: _195.EventMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.EventMintToken;
                fromPartial(object: {
                    creator?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _195.EventMintToken;
            };
            EventBurnToken: {
                encode(message: _195.EventBurnToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.EventBurnToken;
                fromPartial(object: {
                    creator?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _195.EventBurnToken;
            };
            EventEditToken: {
                encode(message: _195.EventEditToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.EventEditToken;
                fromPartial(object: {
                    denom?: string;
                    creator?: string;
                    newTokenInfo?: {
                        symbol?: string;
                        name?: string;
                        scale?: number;
                        minUnit?: string;
                        initialSupply?: string | number | import("long");
                        maxSupply?: string | number | import("long");
                        mintable?: boolean;
                        owner?: string;
                    };
                }): _195.EventEditToken;
            };
            EventTransferTokenOwner: {
                encode(message: _195.EventTransferTokenOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.EventTransferTokenOwner;
                fromPartial(object: {
                    denom?: string;
                    oldOwner?: string;
                    newOwner?: string;
                }): _195.EventTransferTokenOwner;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1: _355.MsgClientImpl;
                };
                farming: {
                    v1: _356.MsgClientImpl;
                };
                grants: {
                    v1: _357.MsgClientImpl;
                };
                liquidity: {
                    v1: _358.MsgClientImpl;
                };
                loan: {
                    v1: _359.MsgClientImpl;
                };
                nft: {
                    v1: _360.MsgClientImpl;
                };
                ons: {
                    v1: _361.MsgClientImpl;
                };
                reserve: {
                    v1: _362.MsgClientImpl;
                };
                token: {
                    v1: _363.MsgClientImpl;
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
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
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
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
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
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
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
                        params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                        claimRecord(request: _140.QueryGetClaimRecordRequest): Promise<_140.QueryGetClaimRecordResponse>;
                        claimRecordAll(request?: _140.QueryAllClaimRecordRequest): Promise<_140.QueryAllClaimRecordResponse>;
                        goal(request: _140.QueryGetGoalRequest): Promise<_140.QueryGetGoalResponse>;
                        goalAll(request?: _140.QueryAllGoalRequest): Promise<_140.QueryAllGoalResponse>;
                        airdropSupply(request?: _140.QueryGetAirdropSupplyRequest): Promise<_140.QueryGetAirdropSupplyResponse>;
                        initialClaim(request?: _140.QueryGetInitialClaimRequest): Promise<_140.QueryGetInitialClaimResponse>;
                    };
                };
                farming: {
                    v1: {
                        params(request?: _146.QueryParamsRequest): Promise<_146.QueryParamsResponse>;
                        plans(request: _146.QueryPlansRequest): Promise<_146.QueryPlansResponse>;
                        plan(request: _146.QueryPlanRequest): Promise<_146.QueryPlanResponse>;
                        stakings(request: _146.QueryStakingsRequest): Promise<_146.QueryStakingsResponse>;
                        totalStakings(request: _146.QueryTotalStakingsRequest): Promise<_146.QueryTotalStakingsResponse>;
                        rewards(request: _146.QueryRewardsRequest): Promise<_146.QueryRewardsResponse>;
                        currentEpochDays(request?: _146.QueryCurrentEpochDaysRequest): Promise<_146.QueryCurrentEpochDaysResponse>;
                    };
                };
                grants: {
                    v1: {
                        params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                        auctions(request: _152.QueryAuctionsRequest): Promise<_152.QueryAuctionsResponse>;
                        auction(request: _152.QueryAuctionRequest): Promise<_152.QueryAuctionResponse>;
                        allowedBidder(request: _152.QueryAllowedBidderRequest): Promise<_152.QueryAllowedBidderResponse>;
                        allowedBidders(request: _152.QueryAllowedBiddersRequest): Promise<_152.QueryAllowedBiddersResponse>;
                        bids(request: _152.QueryBidsRequest): Promise<_152.QueryBidsResponse>;
                        bid(request: _152.QueryBidRequest): Promise<_152.QueryBidResponse>;
                        vestings(request: _152.QueryVestingsRequest): Promise<_152.QueryVestingsResponse>;
                    };
                };
                liquidity: {
                    v1: {
                        liquidityPools(request: _158.QueryLiquidityPoolsRequest): Promise<_158.QueryLiquidityPoolsResponse>;
                        liquidityPool(request: _158.QueryLiquidityPoolRequest): Promise<_158.QueryLiquidityPoolResponse>;
                        liquidityPoolByPoolCoinDenom(request: _158.QueryLiquidityPoolByPoolCoinDenomRequest): Promise<_158.QueryLiquidityPoolResponse>;
                        liquidityPoolByReserveAcc(request: _158.QueryLiquidityPoolByReserveAccRequest): Promise<_158.QueryLiquidityPoolResponse>;
                        pairs(request: _158.QueryPairsRequest): Promise<_158.QueryPairsResponse>;
                        pair(request: _158.QueryPairRequest): Promise<_158.QueryPairResponse>;
                        depositRequests(request: _158.QueryDepositRequestsRequest): Promise<_158.QueryDepositRequestsResponse>;
                        depositRequest(request: _158.QueryDepositRequestRequest): Promise<_158.QueryDepositRequestResponse>;
                        withdrawRequests(request: _158.QueryWithdrawRequestsRequest): Promise<_158.QueryWithdrawRequestsResponse>;
                        withdrawRequest(request: _158.QueryWithdrawRequestRequest): Promise<_158.QueryWithdrawRequestResponse>;
                        orders(request: _158.QueryOrdersRequest): Promise<_158.QueryOrdersResponse>;
                        order(request: _158.QueryOrderRequest): Promise<_158.QueryOrderResponse>;
                        ordersByOrderer(request: _158.QueryOrdersByOrdererRequest): Promise<_158.QueryOrdersResponse>;
                        orderBooks(request: _158.QueryOrderBooksRequest): Promise<_158.QueryOrderBooksResponse>;
                        params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                    };
                };
                loan: {
                    v1: {
                        params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
                        loans(request: _164.QueryGetLoansRequest): Promise<_164.QueryGetLoansResponse>;
                        loansAll(request?: _164.QueryAllLoansRequest): Promise<_164.QueryAllLoansResponse>;
                    };
                };
                market: {
                    v1: {
                        params(request?: _169.QueryParamsRequest): Promise<_169.QueryParamsResponse>;
                    };
                };
                mint: {
                    v1: {
                        params(request?: _175.QueryParamsRequest): Promise<_175.QueryParamsResponse>;
                        inflation(request?: _175.QueryInflationRequest): Promise<_175.QueryInflationResponse>;
                        annualProvisions(request?: _175.QueryAnnualProvisionsRequest): Promise<_175.QueryAnnualProvisionsResponse>;
                        distribution(request?: _175.QueryDistributionRequest): Promise<_175.QueryDistributionResponse>;
                        lastBlockTime(request?: _175.QueryLastBlockTimeRequest): Promise<_175.QueryLastBlockTimeResponse>;
                    };
                };
                nft: {
                    v1: {
                        supply(request: _180.QuerySupplyRequest): Promise<_180.QuerySupplyResponse>;
                        nFTsOfOwner(request: _180.QueryNFTsOfOwnerRequest): Promise<_180.QueryNFTsOfOwnerResponse>;
                        collection(request: _180.QueryCollectionRequest): Promise<_180.QueryCollectionResponse>;
                        denom(request: _180.QueryDenomRequest): Promise<_180.QueryDenomResponse>;
                        denoms(request?: _180.QueryDenomsRequest): Promise<_180.QueryDenomsResponse>;
                        nFT(request: _180.QueryNFTRequest): Promise<_180.QueryNFTResponse>;
                        params(request?: _180.QueryParamsRequest): Promise<_180.QueryParamsResponse>;
                    };
                };
                ons: {
                    v1: {
                        params(request?: _185.QueryParamsRequest): Promise<_185.QueryParamsResponse>;
                        whois(request: _185.QueryGetWhoisRequest): Promise<_185.QueryGetWhoisResponse>;
                        whoisAll(request?: _185.QueryAllWhoisRequest): Promise<_185.QueryAllWhoisResponse>;
                    };
                };
                reserve: {
                    v1: {
                        params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                        getDenoms(request?: _192.QueryGetDenomsRequest): Promise<_192.QueryGetDenomsResponse>;
                        getDenom(request: _192.QueryGetDenomRequest): Promise<_192.QueryGetDenomResponse>;
                        getDenomWhitelist(request: _192.QueryGetDenomWhitelistRequest): Promise<_192.QueryGetDenomWhitelistResponse>;
                        denomsFromCreator(request: _192.QueryDenomsFromCreatorRequest): Promise<_192.QueryDenomsFromCreatorResponse>;
                    };
                };
                token: {
                    v1: {
                        token(request: _198.QueryTokenRequest): Promise<_198.QueryTokenResponse>;
                        tokens(request: _198.QueryTokensRequest): Promise<_198.QueryTokensResponse>;
                        fees(request: _198.QueryFeesRequest): Promise<_198.QueryFeesResponse>;
                        params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
                        burn(request?: _198.QueryBurnRequest): Promise<_198.QueryBurnResponse>;
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
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
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
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
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
                    v1: _333.LCDQueryClient;
                };
                farming: {
                    v1: _334.LCDQueryClient;
                };
                grants: {
                    v1: _335.LCDQueryClient;
                };
                liquidity: {
                    v1: _336.LCDQueryClient;
                };
                loan: {
                    v1: _337.LCDQueryClient;
                };
                market: {
                    v1: _338.LCDQueryClient;
                };
                mint: {
                    v1: _339.LCDQueryClient;
                };
                nft: {
                    v1: _340.LCDQueryClient;
                };
                ons: {
                    v1: _341.LCDQueryClient;
                };
                reserve: {
                    v1: _342.LCDQueryClient;
                };
                token: {
                    v1: _343.LCDQueryClient;
                };
            };
        }>;
    };
}
