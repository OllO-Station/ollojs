import * as _172 from "./auth/v1/auth";
import * as _173 from "./auth/v1/events";
import * as _174 from "./auth/v1/genesis";
import * as _175 from "./auth/v1/params";
import * as _176 from "./auth/v1/query";
import * as _177 from "./auth/v1/tx";
import * as _178 from "./claim/v1/claim";
import * as _179 from "./claim/v1/events";
import * as _180 from "./claim/v1/genesis";
import * as _181 from "./claim/v1/goal";
import * as _182 from "./claim/v1/params";
import * as _183 from "./claim/v1/query";
import * as _184 from "./claim/v1/tx";
import * as _185 from "./emissions/v1/emissions";
import * as _186 from "./emissions/v1/genesis";
import * as _187 from "./emissions/v1/params";
import * as _188 from "./emissions/v1/query";
import * as _189 from "./emissions/v1/tx";
import * as _190 from "./epoch/v1/epoch";
import * as _191 from "./epoch/v1/events";
import * as _192 from "./epoch/v1/genesis";
import * as _193 from "./epoch/v1/query";
import * as _194 from "./farming/v1/events";
import * as _195 from "./farming/v1/farming";
import * as _196 from "./farming/v1/genesis";
import * as _197 from "./farming/v1/params";
import * as _198 from "./farming/v1/proposal";
import * as _199 from "./farming/v1/query";
import * as _200 from "./farming/v1/tx";
import * as _201 from "./fees/v1/fees";
import * as _202 from "./fees/v1/genesis";
import * as _203 from "./fees/v1/params";
import * as _204 from "./fees/v1/proprosal";
import * as _205 from "./fees/v1/query";
import * as _206 from "./grants/v1/events";
import * as _207 from "./grants/v1/genesis";
import * as _208 from "./grants/v1/grants";
import * as _209 from "./grants/v1/params";
import * as _210 from "./grants/v1/query";
import * as _211 from "./grants/v1/tx";
import * as _212 from "./icq/v1/events";
import * as _213 from "./icq/v1/genesis";
import * as _214 from "./icq/v1/icq";
import * as _215 from "./icq/v1/packet";
import * as _216 from "./icq/v1/params";
import * as _217 from "./icq/v1/query";
import * as _218 from "./icq/v1/tx";
import * as _219 from "./incentive/v1/deposit";
import * as _220 from "./incentive/v1/events";
import * as _221 from "./incentive/v1/genesis";
import * as _222 from "./incentive/v1/incentive";
import * as _223 from "./incentive/v1/mm";
import * as _224 from "./incentive/v1/params";
import * as _225 from "./incentive/v1/proprosal";
import * as _226 from "./incentive/v1/query";
import * as _227 from "./incentive/v1/tx";
import * as _228 from "./lend/v1/borrow";
import * as _229 from "./lend/v1/events";
import * as _230 from "./lend/v1/genesis";
import * as _231 from "./lend/v1/loan";
import * as _232 from "./lend/v1/params";
import * as _233 from "./lend/v1/proprosal";
import * as _234 from "./lend/v1/query";
import * as _235 from "./lend/v1/tx";
import * as _236 from "./liquidity/v1/basic";
import * as _237 from "./liquidity/v1/events";
import * as _238 from "./liquidity/v1/genesis";
import * as _239 from "./liquidity/v1/liquidity";
import * as _240 from "./liquidity/v1/order";
import * as _241 from "./liquidity/v1/pair";
import * as _242 from "./liquidity/v1/params";
import * as _243 from "./liquidity/v1/pool";
import * as _244 from "./liquidity/v1/proprosal";
import * as _245 from "./liquidity/v1/query";
import * as _246 from "./liquidity/v1/ranged";
import * as _247 from "./liquidity/v1/tx";
import * as _248 from "./lock/v1/events";
import * as _249 from "./lock/v1/genesis";
import * as _250 from "./lock/v1/lock";
import * as _251 from "./lock/v1/params";
import * as _252 from "./lock/v1/query";
import * as _253 from "./lock/v1/tx";
import * as _254 from "./market/v1/genesis";
import * as _255 from "./market/v1/packet";
import * as _256 from "./market/v1/params";
import * as _257 from "./market/v1/query";
import * as _259 from "./mint/v1/events";
import * as _260 from "./mint/v1/genesis";
import * as _261 from "./mint/v1/mint";
import * as _262 from "./mint/v1/params";
import * as _263 from "./mint/v1/query";
import * as _265 from "./nft/v1/genesis";
import * as _266 from "./nft/v1/nft";
import * as _267 from "./nft/v1/params";
import * as _268 from "./nft/v1/query";
import * as _269 from "./nft/v1/tx";
import * as _270 from "./ons/v1/did";
import * as _271 from "./ons/v1/event";
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
import * as _289 from "./prices/v1/query";
import * as _290 from "./prices/v1/tx";
import * as _291 from "./ratelimit/v1/events";
import * as _292 from "./ratelimit/v1/genesis";
import * as _293 from "./ratelimit/v1/params";
import * as _294 from "./ratelimit/v1/query";
import * as _295 from "./reserve/v1/events";
import * as _296 from "./reserve/v1/genesis";
import * as _297 from "./reserve/v1/metadata";
import * as _298 from "./reserve/v1/params";
import * as _299 from "./reserve/v1/query";
import * as _300 from "./reserve/v1/reserve";
import * as _301 from "./reserve/v1/tx";
import * as _302 from "./token/v1/genesis";
import * as _303 from "./token/v1/params";
import * as _304 from "./token/v1/query";
import * as _305 from "./token/v1/token";
import * as _306 from "./token/v1/tx";
import * as _307 from "./vault/v1/events";
import * as _308 from "./vault/v1/genesis";
import * as _309 from "./vault/v1/params";
import * as _310 from "./vault/v1/query";
import * as _311 from "./vault/v1/tx";
import * as _312 from "./vault/v1/vault";
import * as _471 from "./auth/v1/query.lcd";
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
import * as _492 from "./auth/v1/query.rpc.Query";
import * as _493 from "./claim/v1/query.rpc.Query";
import * as _494 from "./emissions/v1/query.rpc.Query";
import * as _495 from "./epoch/v1/query.rpc.Query";
import * as _496 from "./farming/v1/query.rpc.Query";
import * as _497 from "./fees/v1/query.rpc.Query";
import * as _498 from "./grants/v1/query.rpc.Query";
import * as _499 from "./icq/v1/query.rpc.Query";
import * as _500 from "./incentive/v1/query.rpc.Query";
import * as _501 from "./lend/v1/query.rpc.Query";
import * as _502 from "./liquidity/v1/query.rpc.Query";
import * as _503 from "./lock/v1/query.rpc.Query";
import * as _504 from "./market/v1/query.rpc.Query";
import * as _505 from "./mint/v1/query.rpc.Query";
import * as _506 from "./nft/v1/query.rpc.Query";
import * as _507 from "./ons/v1/query.rpc.Query";
import * as _508 from "./prices/v1/query.rpc.Query";
import * as _509 from "./ratelimit/v1/query.rpc.Query";
import * as _510 from "./reserve/v1/query.rpc.Query";
import * as _511 from "./token/v1/query.rpc.Query";
import * as _512 from "./vault/v1/query.rpc.Query";
import * as _513 from "./auth/v1/tx.rpc.msg";
import * as _514 from "./claim/v1/tx.rpc.msg";
import * as _515 from "./emissions/v1/tx.rpc.msg";
import * as _516 from "./farming/v1/tx.rpc.msg";
import * as _517 from "./grants/v1/tx.rpc.msg";
import * as _518 from "./incentive/v1/tx.rpc.msg";
import * as _519 from "./lend/v1/tx.rpc.msg";
import * as _520 from "./liquidity/v1/tx.rpc.msg";
import * as _521 from "./lock/v1/tx.rpc.msg";
import * as _522 from "./nft/v1/tx.rpc.msg";
import * as _523 from "./ons/v1/tx.rpc.msg";
import * as _524 from "./prices/v1/tx.rpc.msg";
import * as _525 from "./reserve/v1/tx.rpc.msg";
import * as _526 from "./token/v1/tx.rpc.msg";
import * as _527 from "./vault/v1/tx.rpc.msg";
export declare namespace ollo {
    namespace auth {
        const v1: {
            MsgClientImpl: typeof _513.MsgClientImpl;
            QueryClientImpl: typeof _492.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _176.QueryParamsRequest): Promise<_176.QueryParamsResponse>;
                interchainAccountAddress(request: _176.QueryInterchainAccountAddressRequest): Promise<_176.QueryInterchainAccountAddressResponse>;
            };
            LCDQueryClient: typeof _471.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _177.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _177.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _177.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _177.MsgRegisterAccount;
                    };
                    submitTx(value: _177.MsgSubmitTx): {
                        typeUrl: string;
                        value: _177.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _177.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _177.MsgRegisterAccount;
                    };
                    submitTx(value: _177.MsgSubmitTx): {
                        typeUrl: string;
                        value: _177.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/ollo.auth.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, version }: _177.MsgRegisterAccount) => {
                        owner: string;
                        connectionId: string;
                        version: string;
                    };
                    fromAmino: ({ owner, connectionId, version }: {
                        owner: string;
                        connectionId: string;
                        version: string;
                    }) => _177.MsgRegisterAccount;
                };
                "/ollo.auth.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msgs, timeoutDuration }: _177.MsgSubmitTx) => {
                        owner: string;
                        connectionId: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        timeoutDuration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ owner, connectionId, msgs, timeoutDuration }: {
                        owner: string;
                        connectionId: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        timeoutDuration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _177.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _177.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgRegisterAccount;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    version?: string;
                }): _177.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _177.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgRegisterAccountResponse;
                fromPartial(_: {}): _177.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _177.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSubmitTx;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    timeoutDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _177.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _177.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSubmitTxResponse;
                fromPartial(_: {}): _177.MsgSubmitTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _176.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryParamsRequest;
                fromPartial(_: {}): _176.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _176.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        minTimeout?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                }): _176.QueryParamsResponse;
            };
            QueryInterchainAccountAddressRequest: {
                encode(message: _176.QueryInterchainAccountAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryInterchainAccountAddressRequest;
                fromPartial(object: {
                    connectionId?: string;
                    owner?: string;
                }): _176.QueryInterchainAccountAddressRequest;
            };
            QueryInterchainAccountAddressResponse: {
                encode(message: _176.QueryInterchainAccountAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryInterchainAccountAddressResponse;
                fromPartial(object: {
                    interchainAccountAddress?: string;
                }): _176.QueryInterchainAccountAddressResponse;
            };
            Params: {
                encode(message: _175.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Params;
                fromPartial(object: {
                    minTimeout?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _175.Params;
            };
            GenesisState: {
                encode(message: _174.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.GenesisState;
                fromPartial(object: {
                    params?: {
                        minTimeout?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                }): _174.GenesisState;
            };
            EventRegisterAccount: {
                encode(_: _173.EventRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EventRegisterAccount;
                fromPartial(_: {}): _173.EventRegisterAccount;
            };
            Account: {
                encode(_: _172.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Account;
                fromPartial(_: {}): _172.Account;
            };
        };
    }
    namespace claim {
        const v1: {
            MsgClientImpl: typeof _514.MsgClientImpl;
            QueryClientImpl: typeof _493.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _183.QueryParamsRequest): Promise<_183.QueryParamsResponse>;
                claimRecord(request: _183.QueryGetClaimRecordRequest): Promise<_183.QueryGetClaimRecordResponse>;
                claimRecordAll(request?: _183.QueryAllClaimRecordRequest): Promise<_183.QueryAllClaimRecordResponse>;
                goal(request: _183.QueryGetGoalRequest): Promise<_183.QueryGetGoalResponse>;
                goalAll(request?: _183.QueryAllGoalRequest): Promise<_183.QueryAllGoalResponse>;
                airdropSupply(request?: _183.QueryGetAirdropSupplyRequest): Promise<_183.QueryGetAirdropSupplyResponse>;
                initialClaim(request?: _183.QueryGetInitialClaimRequest): Promise<_183.QueryGetInitialClaimResponse>;
            };
            LCDQueryClient: typeof _472.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _184.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _184.MsgClaim): {
                        typeUrl: string;
                        value: _184.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _184.MsgClaim): {
                        typeUrl: string;
                        value: _184.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/ollo.claim.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ claimer, goalId }: _184.MsgClaim) => {
                        claimer: string;
                        goal_id: string;
                    };
                    fromAmino: ({ claimer, goal_id }: {
                        claimer: string;
                        goal_id: string;
                    }) => _184.MsgClaim;
                };
            };
            MsgClaim: {
                encode(message: _184.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgClaim;
                fromPartial(object: {
                    claimer?: string;
                    goalId?: string | number | import("long");
                }): _184.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _184.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgClaimResponse;
                fromPartial(object: {
                    claimed?: string;
                }): _184.MsgClaimResponse;
            };
            QueryParamsRequest: {
                encode(_: _183.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryParamsRequest;
                fromPartial(_: {}): _183.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _183.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        decayInformation?: {
                            enabled?: boolean;
                            decayStart?: Date;
                            decayEnd?: Date;
                        };
                        airdropStart?: Date;
                    };
                }): _183.QueryParamsResponse;
            };
            QueryGetClaimRecordRequest: {
                encode(message: _183.QueryGetClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetClaimRecordRequest;
                fromPartial(object: {
                    address?: string;
                }): _183.QueryGetClaimRecordRequest;
            };
            QueryGetClaimRecordResponse: {
                encode(message: _183.QueryGetClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetClaimRecordResponse;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        claimable?: string;
                        completedGoals?: (string | number | import("long"))[];
                        claimedGoals?: (string | number | import("long"))[];
                    };
                }): _183.QueryGetClaimRecordResponse;
            };
            QueryAllClaimRecordRequest: {
                encode(message: _183.QueryAllClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryAllClaimRecordRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _183.QueryAllClaimRecordRequest;
            };
            QueryAllClaimRecordResponse: {
                encode(message: _183.QueryAllClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryAllClaimRecordResponse;
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
                }): _183.QueryAllClaimRecordResponse;
            };
            QueryGetGoalRequest: {
                encode(message: _183.QueryGetGoalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetGoalRequest;
                fromPartial(object: {
                    goalID?: string | number | import("long");
                }): _183.QueryGetGoalRequest;
            };
            QueryGetGoalResponse: {
                encode(message: _183.QueryGetGoalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetGoalResponse;
                fromPartial(object: {
                    Goal?: {
                        id?: string | number | import("long");
                        description?: string;
                        weight?: string;
                    };
                }): _183.QueryGetGoalResponse;
            };
            QueryAllGoalRequest: {
                encode(message: _183.QueryAllGoalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryAllGoalRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _183.QueryAllGoalRequest;
            };
            QueryAllGoalResponse: {
                encode(message: _183.QueryAllGoalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryAllGoalResponse;
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
                }): _183.QueryAllGoalResponse;
            };
            QueryGetAirdropSupplyRequest: {
                encode(_: _183.QueryGetAirdropSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetAirdropSupplyRequest;
                fromPartial(_: {}): _183.QueryGetAirdropSupplyRequest;
            };
            QueryGetAirdropSupplyResponse: {
                encode(message: _183.QueryGetAirdropSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetAirdropSupplyResponse;
                fromPartial(object: {
                    AirdropSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _183.QueryGetAirdropSupplyResponse;
            };
            QueryGetInitialClaimRequest: {
                encode(_: _183.QueryGetInitialClaimRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetInitialClaimRequest;
                fromPartial(_: {}): _183.QueryGetInitialClaimRequest;
            };
            QueryGetInitialClaimResponse: {
                encode(message: _183.QueryGetInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryGetInitialClaimResponse;
                fromPartial(object: {
                    InitialClaim?: {
                        enabled?: boolean;
                        goalId?: string | number | import("long");
                    };
                }): _183.QueryGetInitialClaimResponse;
            };
            Params: {
                encode(message: _182.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Params;
                fromPartial(object: {
                    decayInformation?: {
                        enabled?: boolean;
                        decayStart?: Date;
                        decayEnd?: Date;
                    };
                    airdropStart?: Date;
                }): _182.Params;
            };
            DecayInformation: {
                encode(message: _182.DecayInformation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.DecayInformation;
                fromPartial(object: {
                    enabled?: boolean;
                    decayStart?: Date;
                    decayEnd?: Date;
                }): _182.DecayInformation;
            };
            Goal: {
                encode(message: _181.Goal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Goal;
                fromPartial(object: {
                    id?: string | number | import("long");
                    description?: string;
                    weight?: string;
                }): _181.Goal;
            };
            GenesisState: {
                encode(message: _180.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GenesisState;
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
                }): _180.GenesisState;
            };
            EventGoalCompleted: {
                encode(message: _179.EventGoalCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EventGoalCompleted;
                fromPartial(object: {
                    goalID?: string | number | import("long");
                    address?: string;
                }): _179.EventGoalCompleted;
            };
            EventGoalClaimed: {
                encode(message: _179.EventGoalClaimed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EventGoalClaimed;
                fromPartial(object: {
                    goalID?: string | number | import("long");
                    claimer?: string;
                }): _179.EventGoalClaimed;
            };
            claimActionFromJSON(object: any): _178.ClaimAction;
            claimActionToJSON(object: _178.ClaimAction): string;
            claimStatusFromJSON(object: any): _178.ClaimStatus;
            claimStatusToJSON(object: _178.ClaimStatus): string;
            ClaimAction: typeof _178.ClaimAction;
            ClaimActionSDKType: typeof _178.ClaimAction;
            ClaimStatus: typeof _178.ClaimStatus;
            ClaimStatusSDKType: typeof _178.ClaimStatus;
            InitialClaim: {
                encode(message: _178.InitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.InitialClaim;
                fromPartial(object: {
                    enabled?: boolean;
                    goalId?: string | number | import("long");
                }): _178.InitialClaim;
            };
            ClaimRecord: {
                encode(message: _178.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ClaimRecord;
                fromPartial(object: {
                    address?: string;
                    claimable?: string;
                    completedGoals?: (string | number | import("long"))[];
                    claimedGoals?: (string | number | import("long"))[];
                }): _178.ClaimRecord;
            };
        };
    }
    namespace emissions {
        const v1: {
            MsgClientImpl: typeof _515.MsgClientImpl;
            QueryClientImpl: typeof _494.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryEmission(request: _188.QueryEmissionRequest): Promise<_188.QueryEmissionResponse>;
                queryAllEmissions(request?: _188.QueryAllEmissionsRequest): Promise<_188.QueryAllEmissionsResponse>;
            };
            LCDQueryClient: typeof _473.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    msgCreate(value: _189.MsgCreateRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDeposit(value: _189.MsgDepositRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgWithdraw(value: _189.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDraw(value: _189.MsgDrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgRepay(value: _189.MsgRepayRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgClose(value: _189.MsgCloseRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    msgCreate(value: _189.MsgCreateRequest): {
                        typeUrl: string;
                        value: _189.MsgCreateRequest;
                    };
                    msgDeposit(value: _189.MsgDepositRequest): {
                        typeUrl: string;
                        value: _189.MsgDepositRequest;
                    };
                    msgWithdraw(value: _189.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _189.MsgWithdrawRequest;
                    };
                    msgDraw(value: _189.MsgDrawRequest): {
                        typeUrl: string;
                        value: _189.MsgDrawRequest;
                    };
                    msgRepay(value: _189.MsgRepayRequest): {
                        typeUrl: string;
                        value: _189.MsgRepayRequest;
                    };
                    msgClose(value: _189.MsgCloseRequest): {
                        typeUrl: string;
                        value: _189.MsgCloseRequest;
                    };
                };
                fromPartial: {
                    msgCreate(value: _189.MsgCreateRequest): {
                        typeUrl: string;
                        value: _189.MsgCreateRequest;
                    };
                    msgDeposit(value: _189.MsgDepositRequest): {
                        typeUrl: string;
                        value: _189.MsgDepositRequest;
                    };
                    msgWithdraw(value: _189.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _189.MsgWithdrawRequest;
                    };
                    msgDraw(value: _189.MsgDrawRequest): {
                        typeUrl: string;
                        value: _189.MsgDrawRequest;
                    };
                    msgRepay(value: _189.MsgRepayRequest): {
                        typeUrl: string;
                        value: _189.MsgRepayRequest;
                    };
                    msgClose(value: _189.MsgCloseRequest): {
                        typeUrl: string;
                        value: _189.MsgCloseRequest;
                    };
                };
            };
            AminoConverter: {
                "/ollo.emissions.v1.MsgCreateRequest": {
                    aminoType: string;
                    toAmino: ({ from, amountIn, amountOut }: _189.MsgCreateRequest) => {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    };
                    fromAmino: ({ from, amount_in, amount_out }: {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    }) => _189.MsgCreateRequest;
                };
                "/ollo.emissions.v1.MsgDepositRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _189.MsgDepositRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _189.MsgDepositRequest;
                };
                "/ollo.emissions.v1.MsgWithdrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _189.MsgWithdrawRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _189.MsgWithdrawRequest;
                };
                "/ollo.emissions.v1.MsgDrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _189.MsgDrawRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _189.MsgDrawRequest;
                };
                "/ollo.emissions.v1.MsgRepayRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId, amount }: _189.MsgRepayRequest) => {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_emission_id, amount }: {
                        from: string;
                        user_emission_id: string;
                        amount: string;
                    }) => _189.MsgRepayRequest;
                };
                "/ollo.emissions.v1.MsgCloseRequest": {
                    aminoType: string;
                    toAmino: ({ from, userEmissionId }: _189.MsgCloseRequest) => {
                        from: string;
                        user_emission_id: string;
                    };
                    fromAmino: ({ from, user_emission_id }: {
                        from: string;
                        user_emission_id: string;
                    }) => _189.MsgCloseRequest;
                };
            };
            MsgCreateRequest: {
                encode(message: _189.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgCreateRequest;
                fromPartial(object: {
                    from?: string;
                    amountIn?: string;
                    amountOut?: string;
                }): _189.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _189.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgCreateResponse;
                fromPartial(_: {}): _189.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _189.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgDepositRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _189.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _189.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgDepositResponse;
                fromPartial(_: {}): _189.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _189.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgWithdrawRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _189.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _189.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgWithdrawResponse;
                fromPartial(_: {}): _189.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _189.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgDrawRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _189.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _189.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgDrawResponse;
                fromPartial(_: {}): _189.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _189.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgRepayRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                    amount?: string;
                }): _189.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _189.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgRepayResponse;
                fromPartial(_: {}): _189.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _189.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgCloseRequest;
                fromPartial(object: {
                    from?: string;
                    userEmissionId?: string | number | import("long");
                }): _189.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _189.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgCloseResponse;
                fromPartial(_: {}): _189.MsgCloseResponse;
            };
            QueryAllEmissionsRequest: {
                encode(message: _188.QueryAllEmissionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryAllEmissionsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _188.QueryAllEmissionsRequest;
            };
            QueryAllEmissionsResponse: {
                encode(message: _188.QueryAllEmissionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryAllEmissionsResponse;
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
                }): _188.QueryAllEmissionsResponse;
            };
            QueryEmissionRequest: {
                encode(message: _188.QueryEmissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryEmissionRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _188.QueryEmissionRequest;
            };
            QueryEmissionResponse: {
                encode(message: _188.QueryEmissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryEmissionResponse;
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
                }): _188.QueryEmissionResponse;
            };
            Params: {
                encode(_: _187.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Params;
                fromPartial(_: {}): _187.Params;
            };
            GenesisState: {
                encode(_: _186.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GenesisState;
                fromPartial(_: {}): _186.GenesisState;
            };
            Emission: {
                encode(message: _185.Emission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Emission;
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
                }): _185.Emission;
            };
            EmissionsEmission: {
                encode(message: _185.EmissionsEmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.EmissionsEmission;
                fromPartial(object: {
                    id?: string | number | import("long");
                    amountIn?: string;
                    amountOut?: string;
                    createdAt?: Date;
                }): _185.EmissionsEmission;
            };
            EmissionsEmissionRewards: {
                encode(message: _185.EmissionsEmissionRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.EmissionsEmissionRewards;
                fromPartial(object: {
                    user?: string;
                    blockHeight?: string | number | import("long");
                    amount?: string;
                }): _185.EmissionsEmissionRewards;
            };
        };
    }
    namespace epoch {
        const v1: {
            QueryClientImpl: typeof _495.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochs(request?: _193.QueryEpochsRequest): Promise<_193.QueryEpochsResponse>;
                epoch(request: _193.QueryEpochRequest): Promise<_193.QueryEpochResponse>;
                currentEpoch(request: _193.QueryCurrentEpochRequest): Promise<_193.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _474.LCDQueryClient;
            QueryEpochsRequest: {
                encode(_: _193.QueryEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryEpochsRequest;
                fromPartial(_: {}): _193.QueryEpochsRequest;
            };
            QueryEpochsResponse: {
                encode(message: _193.QueryEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryEpochsResponse;
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
                }): _193.QueryEpochsResponse;
            };
            QueryEpochRequest: {
                encode(message: _193.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryEpochRequest;
                fromPartial(object: {
                    id?: string;
                }): _193.QueryEpochRequest;
            };
            QueryEpochResponse: {
                encode(message: _193.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryEpochResponse;
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
                }): _193.QueryEpochResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _193.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryCurrentEpochRequest;
                fromPartial(object: {
                    id?: string;
                }): _193.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _193.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.QueryCurrentEpochResponse;
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
                }): _193.QueryCurrentEpochResponse;
            };
            GenesisState: {
                encode(message: _192.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.GenesisState;
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
                }): _192.GenesisState;
            };
            EventEpochStarted: {
                encode(message: _191.EventEpochStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.EventEpochStarted;
                fromPartial(object: {
                    epochId?: string | number | import("long");
                }): _191.EventEpochStarted;
            };
            EventEpochEnded: {
                encode(message: _191.EventEpochEnded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.EventEpochEnded;
                fromPartial(object: {
                    epochId?: string | number | import("long");
                }): _191.EventEpochEnded;
            };
            Epoch: {
                encode(message: _190.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Epoch;
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
                }): _190.Epoch;
            };
        };
    }
    namespace farming {
        const v1: {
            MsgClientImpl: typeof _516.MsgClientImpl;
            QueryClientImpl: typeof _496.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _199.QueryParamsRequest): Promise<_199.QueryParamsResponse>;
                plans(request: _199.QueryPlansRequest): Promise<_199.QueryPlansResponse>;
                plan(request: _199.QueryPlanRequest): Promise<_199.QueryPlanResponse>;
                stakings(request: _199.QueryStakingsRequest): Promise<_199.QueryStakingsResponse>;
                totalStakings(request: _199.QueryTotalStakingsRequest): Promise<_199.QueryTotalStakingsResponse>;
                rewards(request: _199.QueryRewardsRequest): Promise<_199.QueryRewardsResponse>;
                currentEpochDays(request?: _199.QueryCurrentEpochDaysRequest): Promise<_199.QueryCurrentEpochDaysResponse>;
            };
            LCDQueryClient: typeof _475.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedAmountPlan(value: _200.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRatioPlan(value: _200.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    stake(value: _200.MsgStake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unstake(value: _200.MsgUnstake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    harvest(value: _200.MsgHarvest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePlan(value: _200.MsgRemovePlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    advanceEpoch(value: _200.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedAmountPlan(value: _200.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _200.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _200.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _200.MsgCreateRatioPlan;
                    };
                    stake(value: _200.MsgStake): {
                        typeUrl: string;
                        value: _200.MsgStake;
                    };
                    unstake(value: _200.MsgUnstake): {
                        typeUrl: string;
                        value: _200.MsgUnstake;
                    };
                    harvest(value: _200.MsgHarvest): {
                        typeUrl: string;
                        value: _200.MsgHarvest;
                    };
                    removePlan(value: _200.MsgRemovePlan): {
                        typeUrl: string;
                        value: _200.MsgRemovePlan;
                    };
                    advanceEpoch(value: _200.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _200.MsgAdvanceEpoch;
                    };
                };
                fromPartial: {
                    createFixedAmountPlan(value: _200.MsgCreateFixedAmountPlan): {
                        typeUrl: string;
                        value: _200.MsgCreateFixedAmountPlan;
                    };
                    createRatioPlan(value: _200.MsgCreateRatioPlan): {
                        typeUrl: string;
                        value: _200.MsgCreateRatioPlan;
                    };
                    stake(value: _200.MsgStake): {
                        typeUrl: string;
                        value: _200.MsgStake;
                    };
                    unstake(value: _200.MsgUnstake): {
                        typeUrl: string;
                        value: _200.MsgUnstake;
                    };
                    harvest(value: _200.MsgHarvest): {
                        typeUrl: string;
                        value: _200.MsgHarvest;
                    };
                    removePlan(value: _200.MsgRemovePlan): {
                        typeUrl: string;
                        value: _200.MsgRemovePlan;
                    };
                    advanceEpoch(value: _200.MsgAdvanceEpoch): {
                        typeUrl: string;
                        value: _200.MsgAdvanceEpoch;
                    };
                };
            };
            AminoConverter: {
                "/ollo.farming.v1.MsgCreateFixedAmountPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochAmount }: _200.MsgCreateFixedAmountPlan) => {
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
                    }) => _200.MsgCreateFixedAmountPlan;
                };
                "/ollo.farming.v1.MsgCreateRatioPlan": {
                    aminoType: string;
                    toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochRatio }: _200.MsgCreateRatioPlan) => {
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
                    }) => _200.MsgCreateRatioPlan;
                };
                "/ollo.farming.v1.MsgStake": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoins }: _200.MsgStake) => {
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
                    }) => _200.MsgStake;
                };
                "/ollo.farming.v1.MsgUnstake": {
                    aminoType: string;
                    toAmino: ({ farmer, unstakingCoins }: _200.MsgUnstake) => {
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
                    }) => _200.MsgUnstake;
                };
                "/ollo.farming.v1.MsgHarvest": {
                    aminoType: string;
                    toAmino: ({ farmer, stakingCoinDenoms }: _200.MsgHarvest) => {
                        farmer: string;
                        staking_coin_denoms: string[];
                    };
                    fromAmino: ({ farmer, staking_coin_denoms }: {
                        farmer: string;
                        staking_coin_denoms: string[];
                    }) => _200.MsgHarvest;
                };
                "/ollo.farming.v1.MsgRemovePlan": {
                    aminoType: string;
                    toAmino: ({ creator, planId }: _200.MsgRemovePlan) => {
                        creator: string;
                        plan_id: string;
                    };
                    fromAmino: ({ creator, plan_id }: {
                        creator: string;
                        plan_id: string;
                    }) => _200.MsgRemovePlan;
                };
                "/ollo.farming.v1.MsgAdvanceEpoch": {
                    aminoType: string;
                    toAmino: ({ requester }: _200.MsgAdvanceEpoch) => {
                        requester: string;
                    };
                    fromAmino: ({ requester }: {
                        requester: string;
                    }) => _200.MsgAdvanceEpoch;
                };
            };
            MsgCreateFixedAmountPlan: {
                encode(message: _200.MsgCreateFixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgCreateFixedAmountPlan;
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
                }): _200.MsgCreateFixedAmountPlan;
            };
            MsgCreateFixedAmountPlanResponse: {
                encode(_: _200.MsgCreateFixedAmountPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgCreateFixedAmountPlanResponse;
                fromPartial(_: {}): _200.MsgCreateFixedAmountPlanResponse;
            };
            MsgCreateRatioPlan: {
                encode(message: _200.MsgCreateRatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgCreateRatioPlan;
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
                }): _200.MsgCreateRatioPlan;
            };
            MsgCreateRatioPlanResponse: {
                encode(_: _200.MsgCreateRatioPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgCreateRatioPlanResponse;
                fromPartial(_: {}): _200.MsgCreateRatioPlanResponse;
            };
            MsgStake: {
                encode(message: _200.MsgStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgStake;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _200.MsgStake;
            };
            MsgStakeResponse: {
                encode(_: _200.MsgStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgStakeResponse;
                fromPartial(_: {}): _200.MsgStakeResponse;
            };
            MsgUnstake: {
                encode(message: _200.MsgUnstake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgUnstake;
                fromPartial(object: {
                    farmer?: string;
                    unstakingCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _200.MsgUnstake;
            };
            MsgUnstakeResponse: {
                encode(_: _200.MsgUnstakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgUnstakeResponse;
                fromPartial(_: {}): _200.MsgUnstakeResponse;
            };
            MsgHarvest: {
                encode(message: _200.MsgHarvest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgHarvest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenoms?: string[];
                }): _200.MsgHarvest;
            };
            MsgHarvestResponse: {
                encode(_: _200.MsgHarvestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgHarvestResponse;
                fromPartial(_: {}): _200.MsgHarvestResponse;
            };
            MsgRemovePlan: {
                encode(message: _200.MsgRemovePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgRemovePlan;
                fromPartial(object: {
                    creator?: string;
                    planId?: string | number | import("long");
                }): _200.MsgRemovePlan;
            };
            MsgRemovePlanResponse: {
                encode(_: _200.MsgRemovePlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgRemovePlanResponse;
                fromPartial(_: {}): _200.MsgRemovePlanResponse;
            };
            MsgAdvanceEpoch: {
                encode(message: _200.MsgAdvanceEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgAdvanceEpoch;
                fromPartial(object: {
                    requester?: string;
                }): _200.MsgAdvanceEpoch;
            };
            MsgAdvanceEpochResponse: {
                encode(_: _200.MsgAdvanceEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgAdvanceEpochResponse;
                fromPartial(_: {}): _200.MsgAdvanceEpochResponse;
            };
            QueryParamsRequest: {
                encode(_: _199.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsRequest;
                fromPartial(_: {}): _199.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _199.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsResponse;
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
                }): _199.QueryParamsResponse;
            };
            QueryPlansRequest: {
                encode(message: _199.QueryPlansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryPlansRequest;
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
                }): _199.QueryPlansRequest;
            };
            QueryPlansResponse: {
                encode(message: _199.QueryPlansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryPlansResponse;
                fromPartial(object: {
                    plans?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _199.QueryPlansResponse;
            };
            QueryPlanRequest: {
                encode(message: _199.QueryPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryPlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _199.QueryPlanRequest;
            };
            QueryPlanResponse: {
                encode(message: _199.QueryPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryPlanResponse;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _199.QueryPlanResponse;
            };
            QueryStakingsRequest: {
                encode(message: _199.QueryStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryStakingsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _199.QueryStakingsRequest;
            };
            QueryStakingsResponse: {
                encode(message: _199.QueryStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryStakingsResponse;
                fromPartial(object: {
                    stakedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    queuedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _199.QueryStakingsResponse;
            };
            QueryTotalStakingsRequest: {
                encode(message: _199.QueryTotalStakingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryTotalStakingsRequest;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                }): _199.QueryTotalStakingsRequest;
            };
            QueryTotalStakingsResponse: {
                encode(message: _199.QueryTotalStakingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryTotalStakingsResponse;
                fromPartial(object: {
                    amount?: string;
                }): _199.QueryTotalStakingsResponse;
            };
            QueryRewardsRequest: {
                encode(message: _199.QueryRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryRewardsRequest;
                fromPartial(object: {
                    farmer?: string;
                    stakingCoinDenom?: string;
                }): _199.QueryRewardsRequest;
            };
            QueryRewardsResponse: {
                encode(message: _199.QueryRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _199.QueryRewardsResponse;
            };
            QueryCurrentEpochDaysRequest: {
                encode(_: _199.QueryCurrentEpochDaysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryCurrentEpochDaysRequest;
                fromPartial(_: {}): _199.QueryCurrentEpochDaysRequest;
            };
            QueryCurrentEpochDaysResponse: {
                encode(message: _199.QueryCurrentEpochDaysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryCurrentEpochDaysResponse;
                fromPartial(object: {
                    currentEpochDays?: number;
                }): _199.QueryCurrentEpochDaysResponse;
            };
            PublicPlanProposal: {
                encode(message: _198.PublicPlanProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.PublicPlanProposal;
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
                }): _198.PublicPlanProposal;
            };
            AddPlanRequest: {
                encode(message: _198.AddPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.AddPlanRequest;
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
                }): _198.AddPlanRequest;
            };
            ModifyPlanRequest: {
                encode(message: _198.ModifyPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ModifyPlanRequest;
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
                }): _198.ModifyPlanRequest;
            };
            DeletePlanRequest: {
                encode(message: _198.DeletePlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.DeletePlanRequest;
                fromPartial(object: {
                    planId?: string | number | import("long");
                }): _198.DeletePlanRequest;
            };
            Params: {
                encode(message: _197.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Params;
                fromPartial(object: {
                    privatePlanCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    nextEpochDays?: number;
                    farmingFeeCollector?: string;
                    delayedStakingGasFee?: string | number | import("long");
                    maxNumPrivatePlans?: number;
                }): _197.Params;
            };
            GenesisState: {
                encode(message: _196.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.GenesisState;
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
                }): _196.GenesisState;
            };
            PlanRecord: {
                encode(message: _196.PlanRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.PlanRecord;
                fromPartial(object: {
                    plan?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    farmingPoolCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _196.PlanRecord;
            };
            StakingRecord: {
                encode(message: _196.StakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.StakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    staking?: {
                        amount?: string;
                        startingEpoch?: string | number | import("long");
                    };
                }): _196.StakingRecord;
            };
            QueuedStakingRecord: {
                encode(message: _196.QueuedStakingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueuedStakingRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    farmer?: string;
                    queuedStaking?: {
                        amount?: string;
                    };
                }): _196.QueuedStakingRecord;
            };
            TotalStakingsRecord: {
                encode(message: _196.TotalStakingsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.TotalStakingsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    amount?: string;
                    stakingReserveCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _196.TotalStakingsRecord;
            };
            HistoricalRewardsRecord: {
                encode(message: _196.HistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.HistoricalRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    epoch?: string | number | import("long");
                    historicalRewards?: {
                        cumulativeUnitRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _196.HistoricalRewardsRecord;
            };
            OutstandingRewardsRecord: {
                encode(message: _196.OutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.OutstandingRewardsRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    outstandingRewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _196.OutstandingRewardsRecord;
            };
            CurrentEpochRecord: {
                encode(message: _196.CurrentEpochRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.CurrentEpochRecord;
                fromPartial(object: {
                    stakingCoinDenom?: string;
                    currentEpoch?: string | number | import("long");
                }): _196.CurrentEpochRecord;
            };
            planTypeFromJSON(object: any): _195.PlanType;
            planTypeToJSON(object: _195.PlanType): string;
            addressTypeFromJSON(object: any): _195.AddressType;
            addressTypeToJSON(object: _195.AddressType): string;
            PlanType: typeof _195.PlanType;
            PlanTypeSDKType: typeof _195.PlanType;
            AddressType: typeof _195.AddressType;
            AddressTypeSDKType: typeof _195.AddressType;
            BasePlan: {
                encode(message: _195.BasePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.BasePlan;
                fromPartial(object: {
                    id?: string | number | import("long");
                    name?: string;
                    type?: _195.PlanType;
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
                }): _195.BasePlan;
            };
            FixedAmountPlan: {
                encode(message: _195.FixedAmountPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.FixedAmountPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _195.PlanType;
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
                }): _195.FixedAmountPlan;
            };
            RatioPlan: {
                encode(message: _195.RatioPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.RatioPlan;
                fromPartial(object: {
                    basePlan?: {
                        id?: string | number | import("long");
                        name?: string;
                        type?: _195.PlanType;
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
                }): _195.RatioPlan;
            };
            Staking: {
                encode(message: _195.Staking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.Staking;
                fromPartial(object: {
                    amount?: string;
                    startingEpoch?: string | number | import("long");
                }): _195.Staking;
            };
            QueuedStaking: {
                encode(message: _195.QueuedStaking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueuedStaking;
                fromPartial(object: {
                    amount?: string;
                }): _195.QueuedStaking;
            };
            TotalStakings: {
                encode(message: _195.TotalStakings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.TotalStakings;
                fromPartial(object: {
                    amount?: string;
                }): _195.TotalStakings;
            };
            HistoricalRewards: {
                encode(message: _195.HistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.HistoricalRewards;
                fromPartial(object: {
                    cumulativeUnitRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _195.HistoricalRewards;
            };
            OutstandingRewards: {
                encode(message: _195.OutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.OutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _195.OutstandingRewards;
            };
            EventCreatePlan: {
                encode(message: _194.EventCreatePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.EventCreatePlan;
                fromPartial(object: {
                    planId?: string;
                    creator?: string;
                    poolAddress?: string;
                }): _194.EventCreatePlan;
            };
            EventFarm: {
                encode(message: _194.EventFarm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.EventFarm;
                fromPartial(object: {
                    farmer?: string;
                }): _194.EventFarm;
            };
            EventUnfarm: {
                encode(message: _194.EventUnfarm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.EventUnfarm;
                fromPartial(object: {
                    farmer?: string;
                }): _194.EventUnfarm;
            };
            EventHarvest: {
                encode(message: _194.EventHarvest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.EventHarvest;
                fromPartial(object: {
                    farmer?: string;
                }): _194.EventHarvest;
            };
            EventCancelPlan: {
                encode(message: _194.EventCancelPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.EventCancelPlan;
                fromPartial(object: {
                    farmer?: string;
                }): _194.EventCancelPlan;
            };
        };
    }
    namespace fees {
        const v1: {
            QueryClientImpl: typeof _497.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _205.QueryFeeTokensRequest): Promise<_205.QueryFeeTokensResponse>;
                denomSpotPrice(request: _205.QueryDenomSpotPriceRequest): Promise<_205.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _205.QueryDenomPoolIdRequest): Promise<_205.QueryDenomPoolIdResponse>;
                baseDenom(request?: _205.QueryBaseDenomRequest): Promise<_205.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _476.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _205.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryFeeTokensRequest;
                fromPartial(_: {}): _205.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _205.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryFeeTokensResponse;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    }[];
                }): _205.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _205.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryDenomSpotPriceRequest;
                fromPartial(object: {
                    denom?: string;
                }): _205.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _205.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryDenomSpotPriceResponse;
                fromPartial(object: {
                    denom?: string;
                    price?: string;
                }): _205.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _205.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryDenomPoolIdRequest;
                fromPartial(object: {
                    denom?: string;
                }): _205.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _205.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryDenomPoolIdResponse;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                }): _205.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _205.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryBaseDenomRequest;
                fromPartial(_: {}): _205.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _205.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryBaseDenomResponse;
                fromPartial(object: {
                    baseDenom?: string;
                }): _205.QueryBaseDenomResponse;
            };
            ProposalSetFeeToken: {
                encode(message: _204.ProposalSetFeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ProposalSetFeeToken;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feeToken?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    };
                }): _204.ProposalSetFeeToken;
            };
            Params: {
                encode(_: _203.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Params;
                fromPartial(_: {}): _203.Params;
            };
            GenesisState: {
                encode(message: _202.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.GenesisState;
                fromPartial(object: {
                    baseDenom?: string;
                    feeTokens?: {
                        denom?: string;
                        poolId?: string | number | import("long");
                    }[];
                }): _202.GenesisState;
            };
            FeeToken: {
                encode(message: _201.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.FeeToken;
                fromPartial(object: {
                    denom?: string;
                    poolId?: string | number | import("long");
                }): _201.FeeToken;
            };
        };
    }
    namespace grants {
        const v1: {
            MsgClientImpl: typeof _517.MsgClientImpl;
            QueryClientImpl: typeof _498.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
                auctions(request: _210.QueryAuctionsRequest): Promise<_210.QueryAuctionsResponse>;
                auction(request: _210.QueryAuctionRequest): Promise<_210.QueryAuctionResponse>;
                allowedBidder(request: _210.QueryAllowedBidderRequest): Promise<_210.QueryAllowedBidderResponse>;
                allowedBidders(request: _210.QueryAllowedBiddersRequest): Promise<_210.QueryAllowedBiddersResponse>;
                bids(request: _210.QueryBidsRequest): Promise<_210.QueryBidsResponse>;
                bid(request: _210.QueryBidRequest): Promise<_210.QueryBidResponse>;
                vestings(request: _210.QueryVestingsRequest): Promise<_210.QueryVestingsResponse>;
            };
            LCDQueryClient: typeof _477.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFixedPriceAuction(value: _211.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatchAuction(value: _211.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAuction(value: _211.MsgCancelAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    placeBid(value: _211.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyBid(value: _211.MsgModifyBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBidder(value: _211.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFixedPriceAuction(value: _211.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _211.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _211.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _211.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _211.MsgCancelAuction): {
                        typeUrl: string;
                        value: _211.MsgCancelAuction;
                    };
                    placeBid(value: _211.MsgPlaceBid): {
                        typeUrl: string;
                        value: _211.MsgPlaceBid;
                    };
                    modifyBid(value: _211.MsgModifyBid): {
                        typeUrl: string;
                        value: _211.MsgModifyBid;
                    };
                    addAllowedBidder(value: _211.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _211.MsgAddAllowedBidder;
                    };
                };
                fromPartial: {
                    createFixedPriceAuction(value: _211.MsgCreateFixedPriceAuction): {
                        typeUrl: string;
                        value: _211.MsgCreateFixedPriceAuction;
                    };
                    createBatchAuction(value: _211.MsgCreateBatchAuction): {
                        typeUrl: string;
                        value: _211.MsgCreateBatchAuction;
                    };
                    cancelAuction(value: _211.MsgCancelAuction): {
                        typeUrl: string;
                        value: _211.MsgCancelAuction;
                    };
                    placeBid(value: _211.MsgPlaceBid): {
                        typeUrl: string;
                        value: _211.MsgPlaceBid;
                    };
                    modifyBid(value: _211.MsgModifyBid): {
                        typeUrl: string;
                        value: _211.MsgModifyBid;
                    };
                    addAllowedBidder(value: _211.MsgAddAllowedBidder): {
                        typeUrl: string;
                        value: _211.MsgAddAllowedBidder;
                    };
                };
            };
            AminoConverter: {
                "/ollo.grants.v1.MsgCreateFixedPriceAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, sellingCoin, payingCoinDenom, vestingSchedules, startTime, endTime }: _211.MsgCreateFixedPriceAuction) => {
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
                    }) => _211.MsgCreateFixedPriceAuction;
                };
                "/ollo.grants.v1.MsgCreateBatchAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, startPrice, minBidPrice, sellingCoin, payingCoinDenom, vestingSchedules, maxExtendedRound, extendedRoundRate, startTime, endTime }: _211.MsgCreateBatchAuction) => {
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
                    }) => _211.MsgCreateBatchAuction;
                };
                "/ollo.grants.v1.MsgCancelAuction": {
                    aminoType: string;
                    toAmino: ({ auctioneer, auctionId }: _211.MsgCancelAuction) => {
                        auctioneer: string;
                        auction_id: string;
                    };
                    fromAmino: ({ auctioneer, auction_id }: {
                        auctioneer: string;
                        auction_id: string;
                    }) => _211.MsgCancelAuction;
                };
                "/ollo.grants.v1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidType, price, coin }: _211.MsgPlaceBid) => {
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
                    }) => _211.MsgPlaceBid;
                };
                "/ollo.grants.v1.MsgModifyBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, bidId, price, coin }: _211.MsgModifyBid) => {
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
                    }) => _211.MsgModifyBid;
                };
                "/ollo.grants.v1.MsgAddAllowedBidder": {
                    aminoType: string;
                    toAmino: ({ auctionId, allowedBidder }: _211.MsgAddAllowedBidder) => {
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
                    }) => _211.MsgAddAllowedBidder;
                };
            };
            MsgCreateFixedPriceAuction: {
                encode(message: _211.MsgCreateFixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCreateFixedPriceAuction;
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
                }): _211.MsgCreateFixedPriceAuction;
            };
            MsgCreateFixedPriceAuctionResponse: {
                encode(_: _211.MsgCreateFixedPriceAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCreateFixedPriceAuctionResponse;
                fromPartial(_: {}): _211.MsgCreateFixedPriceAuctionResponse;
            };
            MsgCreateBatchAuction: {
                encode(message: _211.MsgCreateBatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCreateBatchAuction;
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
                }): _211.MsgCreateBatchAuction;
            };
            MsgCreateBatchAuctionResponse: {
                encode(_: _211.MsgCreateBatchAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCreateBatchAuctionResponse;
                fromPartial(_: {}): _211.MsgCreateBatchAuctionResponse;
            };
            MsgCancelAuction: {
                encode(message: _211.MsgCancelAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCancelAuction;
                fromPartial(object: {
                    auctioneer?: string;
                    auctionId?: string | number | import("long");
                }): _211.MsgCancelAuction;
            };
            MsgCancelAuctionResponse: {
                encode(_: _211.MsgCancelAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgCancelAuctionResponse;
                fromPartial(_: {}): _211.MsgCancelAuctionResponse;
            };
            MsgPlaceBid: {
                encode(message: _211.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgPlaceBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidType?: _208.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _211.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _211.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgPlaceBidResponse;
                fromPartial(_: {}): _211.MsgPlaceBidResponse;
            };
            MsgModifyBid: {
                encode(message: _211.MsgModifyBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgModifyBid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    bidId?: string | number | import("long");
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _211.MsgModifyBid;
            };
            MsgModifyBidResponse: {
                encode(_: _211.MsgModifyBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgModifyBidResponse;
                fromPartial(_: {}): _211.MsgModifyBidResponse;
            };
            MsgAddAllowedBidder: {
                encode(message: _211.MsgAddAllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgAddAllowedBidder;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _211.MsgAddAllowedBidder;
            };
            MsgAddAllowedBidderResponse: {
                encode(_: _211.MsgAddAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.MsgAddAllowedBidderResponse;
                fromPartial(_: {}): _211.MsgAddAllowedBidderResponse;
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
                }): _210.QueryParamsResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _210.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAuctionsRequest;
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
                }): _210.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _210.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAuctionsResponse;
                fromPartial(object: {
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _210.QueryAuctionsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _210.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAuctionRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _210.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _210.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAuctionResponse;
                fromPartial(object: {
                    auction?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _210.QueryAuctionResponse;
            };
            QueryAllowedBidderRequest: {
                encode(message: _210.QueryAllowedBidderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAllowedBidderRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                }): _210.QueryAllowedBidderRequest;
            };
            QueryAllowedBidderResponse: {
                encode(message: _210.QueryAllowedBidderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAllowedBidderResponse;
                fromPartial(object: {
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _210.QueryAllowedBidderResponse;
            };
            QueryAllowedBiddersRequest: {
                encode(message: _210.QueryAllowedBiddersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAllowedBiddersRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _210.QueryAllowedBiddersRequest;
            };
            QueryAllowedBiddersResponse: {
                encode(message: _210.QueryAllowedBiddersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryAllowedBiddersResponse;
                fromPartial(object: {
                    allowedBidders?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _210.QueryAllowedBiddersResponse;
            };
            QueryBidsRequest: {
                encode(message: _210.QueryBidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryBidsRequest;
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
                }): _210.QueryBidsRequest;
            };
            QueryBidsResponse: {
                encode(message: _210.QueryBidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryBidsResponse;
                fromPartial(object: {
                    bids?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _208.BidType;
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
                }): _210.QueryBidsResponse;
            };
            QueryBidRequest: {
                encode(message: _210.QueryBidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryBidRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidId?: string | number | import("long");
                }): _210.QueryBidRequest;
            };
            QueryBidResponse: {
                encode(message: _210.QueryBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryBidResponse;
                fromPartial(object: {
                    bid?: {
                        auctionId?: string | number | import("long");
                        bidder?: string;
                        id?: string | number | import("long");
                        type?: _208.BidType;
                        price?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        isMatched?: boolean;
                    };
                }): _210.QueryBidResponse;
            };
            QueryVestingsRequest: {
                encode(message: _210.QueryVestingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryVestingsRequest;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                }): _210.QueryVestingsRequest;
            };
            QueryVestingsResponse: {
                encode(message: _210.QueryVestingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.QueryVestingsResponse;
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
                }): _210.QueryVestingsResponse;
            };
            Params: {
                encode(message: _209.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Params;
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
                }): _209.Params;
            };
            auctionTypeFromJSON(object: any): _208.AuctionType;
            auctionTypeToJSON(object: _208.AuctionType): string;
            auctionStatusFromJSON(object: any): _208.AuctionStatus;
            auctionStatusToJSON(object: _208.AuctionStatus): string;
            bidTypeFromJSON(object: any): _208.BidType;
            bidTypeToJSON(object: _208.BidType): string;
            addressTypeFromJSON(object: any): _208.AddressType;
            addressTypeToJSON(object: _208.AddressType): string;
            AuctionType: typeof _208.AuctionType;
            AuctionTypeSDKType: typeof _208.AuctionType;
            AuctionStatus: typeof _208.AuctionStatus;
            AuctionStatusSDKType: typeof _208.AuctionStatus;
            BidType: typeof _208.BidType;
            BidTypeSDKType: typeof _208.BidType;
            AddressType: typeof _208.AddressType;
            AddressTypeSDKType: typeof _208.AddressType;
            BaseAuction: {
                encode(message: _208.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.BaseAuction;
                fromPartial(object: {
                    id?: string | number | import("long");
                    type?: _208.AuctionType;
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
                    status?: _208.AuctionStatus;
                }): _208.BaseAuction;
            };
            FixedPriceAuction: {
                encode(message: _208.FixedPriceAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.FixedPriceAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _208.AuctionType;
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
                        status?: _208.AuctionStatus;
                    };
                    remainingSellingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _208.FixedPriceAuction;
            };
            BatchAuction: {
                encode(message: _208.BatchAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.BatchAuction;
                fromPartial(object: {
                    baseAuction?: {
                        id?: string | number | import("long");
                        type?: _208.AuctionType;
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
                        status?: _208.AuctionStatus;
                    };
                    minBidPrice?: string;
                    matchedPrice?: string;
                    maxExtendedRound?: number;
                    extendedRoundRate?: string;
                }): _208.BatchAuction;
            };
            VestingSchedule: {
                encode(message: _208.VestingSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.VestingSchedule;
                fromPartial(object: {
                    releaseTime?: Date;
                    weight?: string;
                }): _208.VestingSchedule;
            };
            VestingQueue: {
                encode(message: _208.VestingQueue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.VestingQueue;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    auctioneer?: string;
                    payingCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    releaseTime?: Date;
                    released?: boolean;
                }): _208.VestingQueue;
            };
            AllowedBidder: {
                encode(message: _208.AllowedBidder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.AllowedBidder;
                fromPartial(object: {
                    bidder?: string;
                    maxBidAmount?: string;
                }): _208.AllowedBidder;
            };
            Bid: {
                encode(message: _208.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.Bid;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    bidder?: string;
                    id?: string | number | import("long");
                    type?: _208.BidType;
                    price?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    isMatched?: boolean;
                }): _208.Bid;
            };
            AllowedBidderRecord: {
                encode(message: _208.AllowedBidderRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.AllowedBidderRecord;
                fromPartial(object: {
                    auctionId?: string | number | import("long");
                    allowedBidder?: {
                        bidder?: string;
                        maxBidAmount?: string;
                    };
                }): _208.AllowedBidderRecord;
            };
            GenesisState: {
                encode(message: _207.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.GenesisState;
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
                        type?: _208.BidType;
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
                }): _207.GenesisState;
            };
            EventPlaceBid: {
                encode(_: _206.EventPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.EventPlaceBid;
                fromPartial(_: {}): _206.EventPlaceBid;
            };
        };
    }
    namespace icq {
        const v1: {
            QueryClientImpl: typeof _499.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _217.QueryParamsRequest): Promise<_217.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _478.LCDQueryClient;
            MsgCreateIcq: {
                encode(message: _218.MsgCreateIcq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.MsgCreateIcq;
                fromPartial(object: {
                    index?: string;
                }): _218.MsgCreateIcq;
            };
            QueryParamsRequest: {
                encode(_: _217.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.QueryParamsRequest;
                fromPartial(_: {}): _217.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _217.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        hostEnabled?: boolean;
                        allowQueries?: string[];
                    };
                }): _217.QueryParamsResponse;
            };
            Params: {
                encode(message: _216.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.Params;
                fromPartial(object: {
                    hostEnabled?: boolean;
                    allowQueries?: string[];
                }): _216.Params;
            };
            InterchainQueryPacketData: {
                encode(message: _215.InterchainQueryPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.InterchainQueryPacketData;
                fromPartial(object: {
                    data?: Uint8Array;
                    memo?: string;
                }): _215.InterchainQueryPacketData;
            };
            InterchainQueryPacketAck: {
                encode(message: _215.InterchainQueryPacketAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.InterchainQueryPacketAck;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _215.InterchainQueryPacketAck;
            };
            CosmosQuery: {
                encode(message: _215.CosmosQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.CosmosQuery;
                fromPartial(object: {
                    requests?: {
                        data?: Uint8Array;
                        path?: string;
                        height?: string | number | import("long");
                        prove?: boolean;
                    }[];
                }): _215.CosmosQuery;
            };
            InterchainQuery: {
                encode(message: _214.InterchainQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.InterchainQuery;
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
                }): _214.InterchainQuery;
            };
            DataPoint: {
                encode(message: _214.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.DataPoint;
                fromPartial(object: {
                    id?: string;
                    remoteHeight?: string | number | import("long");
                    localHeight?: string;
                    value?: Uint8Array;
                }): _214.DataPoint;
            };
            GenesisState: {
                encode(message: _213.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.GenesisState;
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
                }): _213.GenesisState;
            };
            EventQuery: {
                encode(message: _212.EventQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.EventQuery;
                fromPartial(object: {
                    id?: string;
                }): _212.EventQuery;
            };
        };
    }
    namespace incentive {
        const v1: {
            MsgClientImpl: typeof _518.MsgClientImpl;
            QueryClientImpl: typeof _500.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _226.QueryParamsRequest): Promise<_226.QueryParamsResponse>;
                marketMakers(request: _226.QueryMarketMakersRequest): Promise<_226.QueryMarketMakersResponse>;
                incentive(request: _226.QueryIncentiveRequest): Promise<_226.QueryIncentiveResponse>;
            };
            LCDQueryClient: typeof _479.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    applyMarketMaker(value: _227.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimIncentive(value: _227.MsgClaimIncentive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    applyMarketMaker(value: _227.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: _227.MsgApplyMarketMaker;
                    };
                    claimIncentive(value: _227.MsgClaimIncentive): {
                        typeUrl: string;
                        value: _227.MsgClaimIncentive;
                    };
                };
                fromPartial: {
                    applyMarketMaker(value: _227.MsgApplyMarketMaker): {
                        typeUrl: string;
                        value: _227.MsgApplyMarketMaker;
                    };
                    claimIncentive(value: _227.MsgClaimIncentive): {
                        typeUrl: string;
                        value: _227.MsgClaimIncentive;
                    };
                };
            };
            AminoConverter: {
                "/ollo.incentive.v1.MsgApplyMarketMaker": {
                    aminoType: string;
                    toAmino: ({ address, pairIds }: _227.MsgApplyMarketMaker) => {
                        address: string;
                        pair_ids: string[];
                    };
                    fromAmino: ({ address, pair_ids }: {
                        address: string;
                        pair_ids: string[];
                    }) => _227.MsgApplyMarketMaker;
                };
                "/ollo.incentive.v1.MsgClaimIncentive": {
                    aminoType: string;
                    toAmino: ({ address }: _227.MsgClaimIncentive) => {
                        address: string;
                    };
                    fromAmino: ({ address }: {
                        address: string;
                    }) => _227.MsgClaimIncentive;
                };
            };
            MsgApplyMarketMaker: {
                encode(message: _227.MsgApplyMarketMaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.MsgApplyMarketMaker;
                fromPartial(object: {
                    address?: string;
                    pairIds?: (string | number | import("long"))[];
                }): _227.MsgApplyMarketMaker;
            };
            MsgApplyMarketMakerResponse: {
                encode(_: _227.MsgApplyMarketMakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.MsgApplyMarketMakerResponse;
                fromPartial(_: {}): _227.MsgApplyMarketMakerResponse;
            };
            MsgClaimIncentive: {
                encode(message: _227.MsgClaimIncentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.MsgClaimIncentive;
                fromPartial(object: {
                    address?: string;
                }): _227.MsgClaimIncentive;
            };
            MsgClaimIncentiveResponse: {
                encode(_: _227.MsgClaimIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.MsgClaimIncentiveResponse;
                fromPartial(_: {}): _227.MsgClaimIncentiveResponse;
            };
            QueryParamsRequest: {
                encode(_: _226.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryParamsRequest;
                fromPartial(_: {}): _226.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _226.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryParamsResponse;
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
                }): _226.QueryParamsResponse;
            };
            QueryMarketMakersRequest: {
                encode(message: _226.QueryMarketMakersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryMarketMakersRequest;
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
                }): _226.QueryMarketMakersRequest;
            };
            QueryMarketMakersResponse: {
                encode(message: _226.QueryMarketMakersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryMarketMakersResponse;
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
                }): _226.QueryMarketMakersResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _226.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryIncentiveRequest;
                fromPartial(object: {
                    address?: string;
                }): _226.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _226.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryIncentiveResponse;
                fromPartial(object: {
                    incentive?: {
                        address?: string;
                        claimable?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _226.QueryIncentiveResponse;
            };
            MarketMakerProposal: {
                encode(message: _225.MarketMakerProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.MarketMakerProposal;
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
                }): _225.MarketMakerProposal;
            };
            Params: {
                encode(message: _224.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Params;
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
                }): _224.Params;
            };
            MarketMaker: {
                encode(message: _223.MarketMaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MarketMaker;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    eligible?: boolean;
                }): _223.MarketMaker;
            };
            MarketMakerIncl: {
                encode(message: _223.MarketMakerIncl, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MarketMakerIncl;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                }): _223.MarketMakerIncl;
            };
            Incentive: {
                encode(message: _222.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Incentive;
                fromPartial(object: {
                    address?: string;
                    claimable?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _222.Incentive;
            };
            IncentiveProps: {
                encode(message: _222.IncentiveProps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.IncentiveProps;
                fromPartial(object: {
                    minOpenRatio?: string;
                    minOpenDepthRatio?: string;
                    maxDowntime?: number;
                    maxTotalDowntime?: number;
                    minHours?: number;
                    minDays?: number;
                }): _222.IncentiveProps;
            };
            IncentivePair: {
                encode(message: _222.IncentivePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.IncentivePair;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    updatedAt?: Date;
                    incentiveWeight?: string;
                    maxSpread?: string;
                    minSpread?: string;
                    minDepth?: string;
                }): _222.IncentivePair;
            };
            IncentiveDistribution: {
                encode(message: _222.IncentiveDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.IncentiveDistribution;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _222.IncentiveDistribution;
            };
            GenesisState: {
                encode(message: _221.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.GenesisState;
                fromPartial(object: {
                    depositRecords?: {
                        address?: string;
                        pairId?: string | number | import("long");
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _221.GenesisState;
            };
            EventNewReward: {
                encode(message: _220.EventNewReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.EventNewReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _220.EventNewReward;
            };
            Deposit: {
                encode(message: _219.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Deposit;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _219.Deposit;
            };
            DepositRecord: {
                encode(message: _219.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.DepositRecord;
                fromPartial(object: {
                    address?: string;
                    pairId?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _219.DepositRecord;
            };
        };
    }
    namespace lend {
        const v1: {
            MsgClientImpl: typeof _519.MsgClientImpl;
            QueryClientImpl: typeof _501.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _234.QueryParamsRequest): Promise<_234.QueryParamsResponse>;
                loan(request: _234.QueryGetLoanRequest): Promise<_234.QueryGetLoanResponse>;
                loanAll(request?: _234.QueryAllLoanRequest): Promise<_234.QueryAllLoanResponse>;
            };
            LCDQueryClient: typeof _480.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    requestLoan(value: _235.MsgRequestLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    approveLoan(value: _235.MsgApproveLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayLoan(value: _235.MsgRepayLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidateLoan(value: _235.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelLoan(value: _235.MsgCancelLoan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    requestLoan(value: _235.MsgRequestLoan): {
                        typeUrl: string;
                        value: _235.MsgRequestLoan;
                    };
                    approveLoan(value: _235.MsgApproveLoan): {
                        typeUrl: string;
                        value: _235.MsgApproveLoan;
                    };
                    repayLoan(value: _235.MsgRepayLoan): {
                        typeUrl: string;
                        value: _235.MsgRepayLoan;
                    };
                    liquidateLoan(value: _235.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _235.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _235.MsgCancelLoan): {
                        typeUrl: string;
                        value: _235.MsgCancelLoan;
                    };
                };
                fromPartial: {
                    requestLoan(value: _235.MsgRequestLoan): {
                        typeUrl: string;
                        value: _235.MsgRequestLoan;
                    };
                    approveLoan(value: _235.MsgApproveLoan): {
                        typeUrl: string;
                        value: _235.MsgApproveLoan;
                    };
                    repayLoan(value: _235.MsgRepayLoan): {
                        typeUrl: string;
                        value: _235.MsgRepayLoan;
                    };
                    liquidateLoan(value: _235.MsgLiquidateLoan): {
                        typeUrl: string;
                        value: _235.MsgLiquidateLoan;
                    };
                    cancelLoan(value: _235.MsgCancelLoan): {
                        typeUrl: string;
                        value: _235.MsgCancelLoan;
                    };
                };
            };
            AminoConverter: {
                "/ollo.lend.v1.MsgRequestLoan": {
                    aminoType: string;
                    toAmino: ({ creator, amount, collateral, fee, deadline }: _235.MsgRequestLoan) => {
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
                    }) => _235.MsgRequestLoan;
                };
                "/ollo.lend.v1.MsgApproveLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _235.MsgApproveLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _235.MsgApproveLoan;
                };
                "/ollo.lend.v1.MsgRepayLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _235.MsgRepayLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _235.MsgRepayLoan;
                };
                "/ollo.lend.v1.MsgLiquidateLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _235.MsgLiquidateLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _235.MsgLiquidateLoan;
                };
                "/ollo.lend.v1.MsgCancelLoan": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _235.MsgCancelLoan) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _235.MsgCancelLoan;
                };
            };
            MsgRequestLoan: {
                encode(message: _235.MsgRequestLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgRequestLoan;
                fromPartial(object: {
                    creator?: string;
                    amount?: string;
                    collateral?: string;
                    fee?: string;
                    deadline?: string;
                }): _235.MsgRequestLoan;
            };
            MsgRequestLoanResponse: {
                encode(_: _235.MsgRequestLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgRequestLoanResponse;
                fromPartial(_: {}): _235.MsgRequestLoanResponse;
            };
            MsgApproveLoan: {
                encode(message: _235.MsgApproveLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgApproveLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _235.MsgApproveLoan;
            };
            MsgApproveLoanResponse: {
                encode(_: _235.MsgApproveLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgApproveLoanResponse;
                fromPartial(_: {}): _235.MsgApproveLoanResponse;
            };
            MsgRepayLoan: {
                encode(message: _235.MsgRepayLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgRepayLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _235.MsgRepayLoan;
            };
            MsgRepayLoanResponse: {
                encode(_: _235.MsgRepayLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgRepayLoanResponse;
                fromPartial(_: {}): _235.MsgRepayLoanResponse;
            };
            MsgLiquidateLoan: {
                encode(message: _235.MsgLiquidateLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgLiquidateLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _235.MsgLiquidateLoan;
            };
            MsgLiquidateLoanResponse: {
                encode(_: _235.MsgLiquidateLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgLiquidateLoanResponse;
                fromPartial(_: {}): _235.MsgLiquidateLoanResponse;
            };
            MsgCancelLoan: {
                encode(message: _235.MsgCancelLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgCancelLoan;
                fromPartial(object: {
                    creator?: string;
                    id?: string | number | import("long");
                }): _235.MsgCancelLoan;
            };
            MsgCancelLoanResponse: {
                encode(_: _235.MsgCancelLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.MsgCancelLoanResponse;
                fromPartial(_: {}): _235.MsgCancelLoanResponse;
            };
            QueryParamsRequest: {
                encode(_: _234.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryParamsRequest;
                fromPartial(_: {}): _234.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _234.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _234.QueryParamsResponse;
            };
            QueryGetLoanRequest: {
                encode(message: _234.QueryGetLoanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryGetLoanRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _234.QueryGetLoanRequest;
            };
            QueryGetLoanResponse: {
                encode(message: _234.QueryGetLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryGetLoanResponse;
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
                }): _234.QueryGetLoanResponse;
            };
            QueryAllLoanRequest: {
                encode(message: _234.QueryAllLoanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryAllLoanRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _234.QueryAllLoanRequest;
            };
            QueryAllLoanResponse: {
                encode(message: _234.QueryAllLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryAllLoanResponse;
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
                }): _234.QueryAllLoanResponse;
            };
            ProprosalSetLendingFee: {
                encode(_: _233.ProprosalSetLendingFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.ProprosalSetLendingFee;
                fromPartial(_: {}): _233.ProprosalSetLendingFee;
            };
            Params: {
                encode(_: _232.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.Params;
                fromPartial(_: {}): _232.Params;
            };
            loanStatusFromJSON(object: any): _231.LoanStatus;
            loanStatusToJSON(object: _231.LoanStatus): string;
            LoanStatus: typeof _231.LoanStatus;
            LoanStatusSDKType: typeof _231.LoanStatus;
            Loan: {
                encode(message: _231.Loan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.Loan;
                fromPartial(object: {
                    id?: string | number | import("long");
                    borrower?: string;
                    lender?: string;
                    amount?: string;
                    collateral?: string;
                    fee?: string;
                    deadline?: string;
                    status?: string;
                }): _231.Loan;
            };
            LoanEntry: {
                encode(message: _231.LoanEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.LoanEntry;
                fromPartial(object: {
                    lender?: string;
                    createdAt?: Date;
                    amountIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    assetId?: string | number | import("long");
                }): _231.LoanEntry;
            };
            GenesisState: {
                encode(message: _230.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.GenesisState;
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
                }): _230.GenesisState;
            };
            EventLoanCreated: {
                encode(_: _229.EventLoanCreated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.EventLoanCreated;
                fromPartial(_: {}): _229.EventLoanCreated;
            };
            EventLoanLiquidated: {
                encode(_: _229.EventLoanLiquidated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.EventLoanLiquidated;
                fromPartial(_: {}): _229.EventLoanLiquidated;
            };
            EventLoanRepaid: {
                encode(_: _229.EventLoanRepaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.EventLoanRepaid;
                fromPartial(_: {}): _229.EventLoanRepaid;
            };
            Borrow: {
                encode(message: _228.Borrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Borrow;
                fromPartial(object: {
                    borrower?: string;
                    createdAt?: Date;
                    amountOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    assetId?: string | number | import("long");
                }): _228.Borrow;
            };
        };
    }
    namespace liquidity {
        const v1: {
            MsgClientImpl: typeof _520.MsgClientImpl;
            QueryClientImpl: typeof _502.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                pools(request: _245.QueryPoolsRequest): Promise<_245.QueryPoolsResponse>;
                pool(request: _245.QueryPoolRequest): Promise<_245.QueryPoolResponse>;
                poolByReserveAddress(request: _245.QueryPoolByReserveAddressRequest): Promise<_245.QueryPoolResponse>;
                poolByPoolCoinDenom(request: _245.QueryPoolByPoolCoinDenomRequest): Promise<_245.QueryPoolResponse>;
                pairs(request: _245.QueryPairsRequest): Promise<_245.QueryPairsResponse>;
                pair(request: _245.QueryPairRequest): Promise<_245.QueryPairResponse>;
                depositRequests(request: _245.QueryDepositRequestsRequest): Promise<_245.QueryDepositRequestsResponse>;
                depositRequest(request: _245.QueryDepositRequestRequest): Promise<_245.QueryDepositRequestResponse>;
                withdrawRequests(request: _245.QueryWithdrawRequestsRequest): Promise<_245.QueryWithdrawRequestsResponse>;
                withdrawRequest(request: _245.QueryWithdrawRequestRequest): Promise<_245.QueryWithdrawRequestResponse>;
                orders(request: _245.QueryOrdersRequest): Promise<_245.QueryOrdersResponse>;
                order(request: _245.QueryOrderRequest): Promise<_245.QueryOrderResponse>;
                ordersByOrderer(request: _245.QueryOrdersByOrdererRequest): Promise<_245.QueryOrdersResponse>;
                orderBooks(request: _245.QueryOrderBooksRequest): Promise<_245.QueryOrderBooksResponse>;
                numMMOrders(request: _245.QueryNumMMOrdersRequest): Promise<_245.QueryNumMMOrdersResponse>;
            };
            LCDQueryClient: typeof _481.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPair(value: _247.MsgCreatePair): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _247.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRangedPool(value: _247.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _247.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _247.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    limitOrder(value: _247.MsgLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _247.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mMOrder(value: _247.MsgMMOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _247.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAllOrders(value: _247.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPair(value: _247.MsgCreatePair): {
                        typeUrl: string;
                        value: _247.MsgCreatePair;
                    };
                    createPool(value: _247.MsgCreatePool): {
                        typeUrl: string;
                        value: _247.MsgCreatePool;
                    };
                    createRangedPool(value: _247.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: _247.MsgCreateRangedPool;
                    };
                    deposit(value: _247.MsgDeposit): {
                        typeUrl: string;
                        value: _247.MsgDeposit;
                    };
                    withdraw(value: _247.MsgWithdraw): {
                        typeUrl: string;
                        value: _247.MsgWithdraw;
                    };
                    limitOrder(value: _247.MsgLimitOrder): {
                        typeUrl: string;
                        value: _247.MsgLimitOrder;
                    };
                    marketOrder(value: _247.MsgMarketOrder): {
                        typeUrl: string;
                        value: _247.MsgMarketOrder;
                    };
                    mMOrder(value: _247.MsgMMOrder): {
                        typeUrl: string;
                        value: _247.MsgMMOrder;
                    };
                    cancelOrder(value: _247.MsgCancelOrder): {
                        typeUrl: string;
                        value: _247.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _247.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _247.MsgCancelAllOrders;
                    };
                };
                fromPartial: {
                    createPair(value: _247.MsgCreatePair): {
                        typeUrl: string;
                        value: _247.MsgCreatePair;
                    };
                    createPool(value: _247.MsgCreatePool): {
                        typeUrl: string;
                        value: _247.MsgCreatePool;
                    };
                    createRangedPool(value: _247.MsgCreateRangedPool): {
                        typeUrl: string;
                        value: _247.MsgCreateRangedPool;
                    };
                    deposit(value: _247.MsgDeposit): {
                        typeUrl: string;
                        value: _247.MsgDeposit;
                    };
                    withdraw(value: _247.MsgWithdraw): {
                        typeUrl: string;
                        value: _247.MsgWithdraw;
                    };
                    limitOrder(value: _247.MsgLimitOrder): {
                        typeUrl: string;
                        value: _247.MsgLimitOrder;
                    };
                    marketOrder(value: _247.MsgMarketOrder): {
                        typeUrl: string;
                        value: _247.MsgMarketOrder;
                    };
                    mMOrder(value: _247.MsgMMOrder): {
                        typeUrl: string;
                        value: _247.MsgMMOrder;
                    };
                    cancelOrder(value: _247.MsgCancelOrder): {
                        typeUrl: string;
                        value: _247.MsgCancelOrder;
                    };
                    cancelAllOrders(value: _247.MsgCancelAllOrders): {
                        typeUrl: string;
                        value: _247.MsgCancelAllOrders;
                    };
                };
            };
            AminoConverter: {
                "/ollo.liquidity.v1.MsgCreatePair": {
                    aminoType: string;
                    toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: _247.MsgCreatePair) => {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    };
                    fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: {
                        creator: string;
                        base_coin_denom: string;
                        quote_coin_denom: string;
                    }) => _247.MsgCreatePair;
                };
                "/ollo.liquidity.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ creator, pairId, depositCoins }: _247.MsgCreatePool) => {
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
                    }) => _247.MsgCreatePool;
                };
                "/ollo.liquidity.v1.MsgCreateRangedPool": {
                    aminoType: string;
                    toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: _247.MsgCreateRangedPool) => {
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
                    }) => _247.MsgCreateRangedPool;
                };
                "/ollo.liquidity.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, poolId, depositCoins }: _247.MsgDeposit) => {
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
                    }) => _247.MsgDeposit;
                };
                "/ollo.liquidity.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ withdrawer, poolId, poolCoin }: _247.MsgWithdraw) => {
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
                    }) => _247.MsgWithdraw;
                };
                "/ollo.liquidity.v1.MsgLimitOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _247.MsgLimitOrder) => {
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
                    }) => _247.MsgLimitOrder;
                };
                "/ollo.liquidity.v1.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: _247.MsgMarketOrder) => {
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
                    }) => _247.MsgMarketOrder;
                };
                "/ollo.liquidity.v1.MsgMMOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _247.MsgMMOrder) => {
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
                    }) => _247.MsgMMOrder;
                };
                "/ollo.liquidity.v1.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: ({ orderer, pairId, orderId }: _247.MsgCancelOrder) => {
                        orderer: string;
                        pair_id: string;
                        order_id: string;
                    };
                    fromAmino: ({ orderer, pair_id, order_id }: {
                        orderer: string;
                        pair_id: string;
                        order_id: string;
                    }) => _247.MsgCancelOrder;
                };
                "/ollo.liquidity.v1.MsgCancelAllOrders": {
                    aminoType: string;
                    toAmino: ({ orderer, pairIds }: _247.MsgCancelAllOrders) => {
                        orderer: string;
                        pair_ids: string[];
                    };
                    fromAmino: ({ orderer, pair_ids }: {
                        orderer: string;
                        pair_ids: string[];
                    }) => _247.MsgCancelAllOrders;
                };
            };
            MsgCreatePair: {
                encode(message: _247.MsgCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreatePair;
                fromPartial(object: {
                    creator?: string;
                    baseCoinDenom?: string;
                    quoteCoinDenom?: string;
                }): _247.MsgCreatePair;
            };
            MsgCreatePairResponse: {
                encode(_: _247.MsgCreatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreatePairResponse;
                fromPartial(_: {}): _247.MsgCreatePairResponse;
            };
            MsgCreatePool: {
                encode(message: _247.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    pairId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _247.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _247.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreatePoolResponse;
                fromPartial(_: {}): _247.MsgCreatePoolResponse;
            };
            MsgCreateRangedPool: {
                encode(message: _247.MsgCreateRangedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreateRangedPool;
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
                }): _247.MsgCreateRangedPool;
            };
            MsgCreateRangedPoolResponse: {
                encode(_: _247.MsgCreateRangedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCreateRangedPoolResponse;
                fromPartial(_: {}): _247.MsgCreateRangedPoolResponse;
            };
            MsgDeposit: {
                encode(message: _247.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgDeposit;
                fromPartial(object: {
                    depositor?: string;
                    poolId?: string | number | import("long");
                    depositCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _247.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _247.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgDepositResponse;
                fromPartial(_: {}): _247.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _247.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgWithdraw;
                fromPartial(object: {
                    withdrawer?: string;
                    poolId?: string | number | import("long");
                    poolCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _247.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _247.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgWithdrawResponse;
                fromPartial(_: {}): _247.MsgWithdrawResponse;
            };
            MsgLimitOrder: {
                encode(message: _247.MsgLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgLimitOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _240.OrderDirection;
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
                }): _247.MsgLimitOrder;
            };
            MsgLimitOrderResponse: {
                encode(_: _247.MsgLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgLimitOrderResponse;
                fromPartial(_: {}): _247.MsgLimitOrderResponse;
            };
            MsgMarketOrder: {
                encode(message: _247.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgMarketOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _240.OrderDirection;
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
                }): _247.MsgMarketOrder;
            };
            MsgMarketOrderResponse: {
                encode(_: _247.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgMarketOrderResponse;
                fromPartial(_: {}): _247.MsgMarketOrderResponse;
            };
            MsgMMOrder: {
                encode(message: _247.MsgMMOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgMMOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    direction?: _240.OrderDirection;
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
                }): _247.MsgMMOrder;
            };
            MsgMMOrderResponse: {
                encode(_: _247.MsgMMOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgMMOrderResponse;
                fromPartial(_: {}): _247.MsgMMOrderResponse;
            };
            MsgCancelOrder: {
                encode(message: _247.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelOrder;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    orderId?: string | number | import("long");
                }): _247.MsgCancelOrder;
            };
            MsgCancelOrderResponse: {
                encode(_: _247.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelOrderResponse;
                fromPartial(_: {}): _247.MsgCancelOrderResponse;
            };
            MsgCancelAllOrders: {
                encode(message: _247.MsgCancelAllOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelAllOrders;
                fromPartial(object: {
                    orderer?: string;
                    pairIds?: (string | number | import("long"))[];
                }): _247.MsgCancelAllOrders;
            };
            MsgCancelAllOrdersResponse: {
                encode(_: _247.MsgCancelAllOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelAllOrdersResponse;
                fromPartial(_: {}): _247.MsgCancelAllOrdersResponse;
            };
            RangedPool: {
                encode(_: _246.RangedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.RangedPool;
                fromPartial(_: {}): _246.RangedPool;
            };
            QueryParamsRequest: {
                encode(_: _245.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryParamsRequest;
                fromPartial(_: {}): _245.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _245.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryParamsResponse;
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
                }): _245.QueryParamsResponse;
            };
            QueryPoolsRequest: {
                encode(message: _245.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPoolsRequest;
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
                }): _245.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _245.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPoolsResponse;
                fromPartial(object: {
                    pools?: {
                        type?: _243.PoolType;
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
                }): _245.QueryPoolsResponse;
            };
            QueryPoolRequest: {
                encode(message: _245.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPoolRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                }): _245.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _245.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        type?: _243.PoolType;
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
                }): _245.QueryPoolResponse;
            };
            QueryPoolByReserveAddressRequest: {
                encode(message: _245.QueryPoolByReserveAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPoolByReserveAddressRequest;
                fromPartial(object: {
                    reserveAddress?: string;
                }): _245.QueryPoolByReserveAddressRequest;
            };
            QueryPoolByPoolCoinDenomRequest: {
                encode(message: _245.QueryPoolByPoolCoinDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPoolByPoolCoinDenomRequest;
                fromPartial(object: {
                    poolCoinDenom?: string;
                }): _245.QueryPoolByPoolCoinDenomRequest;
            };
            QueryPairsRequest: {
                encode(message: _245.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPairsRequest;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _245.QueryPairsRequest;
            };
            QueryPairsResponse: {
                encode(message: _245.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPairsResponse;
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
                }): _245.QueryPairsResponse;
            };
            QueryPairRequest: {
                encode(message: _245.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPairRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                }): _245.QueryPairRequest;
            };
            QueryPairResponse: {
                encode(message: _245.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryPairResponse;
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
                }): _245.QueryPairResponse;
            };
            QueryDepositRequestsRequest: {
                encode(message: _245.QueryDepositRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _245.QueryDepositRequestsRequest;
            };
            QueryDepositRequestsResponse: {
                encode(message: _245.QueryDepositRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositRequestsResponse;
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
                        status?: _240.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _245.QueryDepositRequestsResponse;
            };
            QueryDepositRequestRequest: {
                encode(message: _245.QueryDepositRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _245.QueryDepositRequestRequest;
            };
            QueryDepositRequestResponse: {
                encode(message: _245.QueryDepositRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositRequestResponse;
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
                        status?: _240.RequestStatus;
                    };
                }): _245.QueryDepositRequestResponse;
            };
            QueryWithdrawRequestsRequest: {
                encode(message: _245.QueryWithdrawRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryWithdrawRequestsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _245.QueryWithdrawRequestsRequest;
            };
            QueryWithdrawRequestsResponse: {
                encode(message: _245.QueryWithdrawRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryWithdrawRequestsResponse;
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
                        status?: _240.RequestStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _245.QueryWithdrawRequestsResponse;
            };
            QueryWithdrawRequestRequest: {
                encode(message: _245.QueryWithdrawRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryWithdrawRequestRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _245.QueryWithdrawRequestRequest;
            };
            QueryWithdrawRequestResponse: {
                encode(message: _245.QueryWithdrawRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryWithdrawRequestResponse;
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
                        status?: _240.RequestStatus;
                    };
                }): _245.QueryWithdrawRequestResponse;
            };
            QueryOrdersRequest: {
                encode(message: _245.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryOrdersRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _245.QueryOrdersRequest;
            };
            QueryOrdersResponse: {
                encode(message: _245.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        type?: _240.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _240.OrderDirection;
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
                        status?: _240.OrderStatus;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _245.QueryOrdersResponse;
            };
            QueryOrderRequest: {
                encode(message: _245.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryOrderRequest;
                fromPartial(object: {
                    pairId?: string | number | import("long");
                    id?: string | number | import("long");
                }): _245.QueryOrderRequest;
            };
            QueryOrderResponse: {
                encode(message: _245.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryOrderResponse;
                fromPartial(object: {
                    order?: {
                        type?: _240.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _240.OrderDirection;
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
                        status?: _240.OrderStatus;
                    };
                }): _245.QueryOrderResponse;
            };
            QueryOrdersByOrdererRequest: {
                encode(message: _245.QueryOrdersByOrdererRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryOrdersByOrdererRequest;
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
                }): _245.QueryOrdersByOrdererRequest;
            };
            QueryOrderBooksRequest: {
                encode(message: _245.QueryOrderBooksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryOrderBooksRequest;
                fromPartial(object: {
                    pairIds?: (string | number | import("long"))[];
                    priceUnitPowers?: number[];
                    numTicks?: number;
                }): _245.QueryOrderBooksRequest;
            };
            QueryOrderBooksResponse: {
                encode(message: _245.QueryOrderBooksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryOrderBooksResponse;
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
                }): _245.QueryOrderBooksResponse;
            };
            QueryNumMMOrdersRequest: {
                encode(message: _245.QueryNumMMOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryNumMMOrdersRequest;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                }): _245.QueryNumMMOrdersRequest;
            };
            QueryNumMMOrdersResponse: {
                encode(message: _245.QueryNumMMOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryNumMMOrdersResponse;
                fromPartial(object: {
                    numMarketMakingOrders?: number;
                }): _245.QueryNumMMOrdersResponse;
            };
            PoolResponse: {
                encode(message: _245.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.PoolResponse;
                fromPartial(object: {
                    type?: _243.PoolType;
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
                }): _245.PoolResponse;
            };
            PoolBalances: {
                encode(message: _245.PoolBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.PoolBalances;
                fromPartial(object: {
                    baseCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                    quoteCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _245.PoolBalances;
            };
            OrderBookPairResponse: {
                encode(message: _245.OrderBookPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.OrderBookPairResponse;
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
                }): _245.OrderBookPairResponse;
            };
            OrderBookResponse: {
                encode(message: _245.OrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.OrderBookResponse;
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
                }): _245.OrderBookResponse;
            };
            OrderBookTickResponse: {
                encode(message: _245.OrderBookTickResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.OrderBookTickResponse;
                fromPartial(object: {
                    price?: string;
                    userOrderAmount?: string;
                    poolOrderAmount?: string;
                }): _245.OrderBookTickResponse;
            };
            ProprosalSetPoolParams: {
                encode(_: _244.ProprosalSetPoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.ProprosalSetPoolParams;
                fromPartial(_: {}): _244.ProprosalSetPoolParams;
            };
            poolTypeFromJSON(object: any): _243.PoolType;
            poolTypeToJSON(object: _243.PoolType): string;
            PoolType: typeof _243.PoolType;
            PoolTypeSDKType: typeof _243.PoolType;
            Pool: {
                encode(message: _243.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Pool;
                fromPartial(object: {
                    type?: _243.PoolType;
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
                }): _243.Pool;
            };
            Params: {
                encode(message: _242.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Params;
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
                }): _242.Params;
            };
            Pair: {
                encode(message: _241.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.Pair;
                fromPartial(object: {
                    id?: string | number | import("long");
                    baseCoinDenom?: string;
                    quoteCoinDenom?: string;
                    escrowAddress?: string;
                    lastOrderId?: string | number | import("long");
                    lastPrice?: string;
                    currentBatchId?: string | number | import("long");
                }): _241.Pair;
            };
            orderTypeFromJSON(object: any): _240.OrderType;
            orderTypeToJSON(object: _240.OrderType): string;
            orderDirectionFromJSON(object: any): _240.OrderDirection;
            orderDirectionToJSON(object: _240.OrderDirection): string;
            requestStatusFromJSON(object: any): _240.RequestStatus;
            requestStatusToJSON(object: _240.RequestStatus): string;
            orderStatusFromJSON(object: any): _240.OrderStatus;
            orderStatusToJSON(object: _240.OrderStatus): string;
            OrderType: typeof _240.OrderType;
            OrderTypeSDKType: typeof _240.OrderType;
            OrderDirection: typeof _240.OrderDirection;
            OrderDirectionSDKType: typeof _240.OrderDirection;
            RequestStatus: typeof _240.RequestStatus;
            RequestStatusSDKType: typeof _240.RequestStatus;
            OrderStatus: typeof _240.OrderStatus;
            OrderStatusSDKType: typeof _240.OrderStatus;
            Order: {
                encode(message: _240.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.Order;
                fromPartial(object: {
                    type?: _240.OrderType;
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    msgHeight?: string | number | import("long");
                    orderer?: string;
                    direction?: _240.OrderDirection;
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
                    status?: _240.OrderStatus;
                }): _240.Order;
            };
            DepositRequest: {
                encode(message: _239.DepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.DepositRequest;
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
                    status?: _240.RequestStatus;
                }): _239.DepositRequest;
            };
            WithdrawRequest: {
                encode(message: _239.WithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.WithdrawRequest;
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
                    status?: _240.RequestStatus;
                }): _239.WithdrawRequest;
            };
            GenesisState: {
                encode(message: _238.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.GenesisState;
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
                        type?: _243.PoolType;
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
                        status?: _240.RequestStatus;
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
                        status?: _240.RequestStatus;
                    }[];
                    orders?: {
                        type?: _240.OrderType;
                        id?: string | number | import("long");
                        pairId?: string | number | import("long");
                        msgHeight?: string | number | import("long");
                        orderer?: string;
                        direction?: _240.OrderDirection;
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
                        status?: _240.OrderStatus;
                    }[];
                    numMarketMakingOrdersRecords?: {
                        orderer?: string;
                        pairId?: string | number | import("long");
                        numMarketMakingOrders?: number;
                    }[];
                }): _238.GenesisState;
            };
            NumMMOrdersRecord: {
                encode(message: _238.NumMMOrdersRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.NumMMOrdersRecord;
                fromPartial(object: {
                    orderer?: string;
                    pairId?: string | number | import("long");
                    numMarketMakingOrders?: number;
                }): _238.NumMMOrdersRecord;
            };
            EventDepositLiquidity: {
                encode(_: _237.EventDepositLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.EventDepositLiquidity;
                fromPartial(_: {}): _237.EventDepositLiquidity;
            };
            EventWithdrawLiquidity: {
                encode(_: _237.EventWithdrawLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.EventWithdrawLiquidity;
                fromPartial(_: {}): _237.EventWithdrawLiquidity;
            };
            EventCreatePool: {
                encode(_: _237.EventCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.EventCreatePool;
                fromPartial(_: {}): _237.EventCreatePool;
            };
            EventCreatePair: {
                encode(_: _237.EventCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.EventCreatePair;
                fromPartial(_: {}): _237.EventCreatePair;
            };
            BasicPool: {
                encode(message: _236.BasicPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.BasicPool;
                fromPartial(object: {
                    poolId?: string;
                    pairId?: string | number | import("long");
                    poolCoinDenom?: string;
                    reserveAccountAddress?: string;
                }): _236.BasicPool;
            };
        };
    }
    namespace lock {
        const v1: {
            MsgClientImpl: typeof _521.MsgClientImpl;
            QueryClientImpl: typeof _503.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryParams(request?: _252.QueryParamsRequest): Promise<_252.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _482.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    msgCreateLock(value: _253.MsgCreateLockRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDepositAsset(value: _253.MsgDepositAssetRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgWithdrawAsset(value: _253.MsgWithdrawAssetRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgCloseLock(value: _253.MsgCloseLockRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    msgCreateLock(value: _253.MsgCreateLockRequest): {
                        typeUrl: string;
                        value: _253.MsgCreateLockRequest;
                    };
                    msgDepositAsset(value: _253.MsgDepositAssetRequest): {
                        typeUrl: string;
                        value: _253.MsgDepositAssetRequest;
                    };
                    msgWithdrawAsset(value: _253.MsgWithdrawAssetRequest): {
                        typeUrl: string;
                        value: _253.MsgWithdrawAssetRequest;
                    };
                    msgCloseLock(value: _253.MsgCloseLockRequest): {
                        typeUrl: string;
                        value: _253.MsgCloseLockRequest;
                    };
                };
                fromPartial: {
                    msgCreateLock(value: _253.MsgCreateLockRequest): {
                        typeUrl: string;
                        value: _253.MsgCreateLockRequest;
                    };
                    msgDepositAsset(value: _253.MsgDepositAssetRequest): {
                        typeUrl: string;
                        value: _253.MsgDepositAssetRequest;
                    };
                    msgWithdrawAsset(value: _253.MsgWithdrawAssetRequest): {
                        typeUrl: string;
                        value: _253.MsgWithdrawAssetRequest;
                    };
                    msgCloseLock(value: _253.MsgCloseLockRequest): {
                        typeUrl: string;
                        value: _253.MsgCloseLockRequest;
                    };
                };
            };
            AminoConverter: {
                "/ollo.lock.v1.MsgCreateLockRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, amount, assetId }: _253.MsgCreateLockRequest) => {
                        depositor: string;
                        amount: string;
                        asset_id: string;
                    };
                    fromAmino: ({ depositor, amount, asset_id }: {
                        depositor: string;
                        amount: string;
                        asset_id: string;
                    }) => _253.MsgCreateLockRequest;
                };
                "/ollo.lock.v1.MsgDepositAssetRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, lockerId, amount, assetId }: _253.MsgDepositAssetRequest) => {
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
                    }) => _253.MsgDepositAssetRequest;
                };
                "/ollo.lock.v1.MsgWithdrawAssetRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, lockerId, amount, assetId }: _253.MsgWithdrawAssetRequest) => {
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
                    }) => _253.MsgWithdrawAssetRequest;
                };
                "/ollo.lock.v1.MsgCloseLockRequest": {
                    aminoType: string;
                    toAmino: ({ depositor, lockerId }: _253.MsgCloseLockRequest) => {
                        depositor: string;
                        locker_id: string;
                    };
                    fromAmino: ({ depositor, locker_id }: {
                        depositor: string;
                        locker_id: string;
                    }) => _253.MsgCloseLockRequest;
                };
            };
            MsgCreateLockRequest: {
                encode(message: _253.MsgCreateLockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgCreateLockRequest;
                fromPartial(object: {
                    depositor?: string;
                    amount?: string;
                    assetId?: string | number | import("long");
                }): _253.MsgCreateLockRequest;
            };
            MsgCreateLockResponse: {
                encode(_: _253.MsgCreateLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgCreateLockResponse;
                fromPartial(_: {}): _253.MsgCreateLockResponse;
            };
            MsgDepositAssetRequest: {
                encode(message: _253.MsgDepositAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgDepositAssetRequest;
                fromPartial(object: {
                    depositor?: string;
                    lockerId?: string | number | import("long");
                    amount?: string;
                    assetId?: string | number | import("long");
                }): _253.MsgDepositAssetRequest;
            };
            MsgDepositAssetResponse: {
                encode(_: _253.MsgDepositAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgDepositAssetResponse;
                fromPartial(_: {}): _253.MsgDepositAssetResponse;
            };
            MsgWithdrawAssetRequest: {
                encode(message: _253.MsgWithdrawAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgWithdrawAssetRequest;
                fromPartial(object: {
                    depositor?: string;
                    lockerId?: string | number | import("long");
                    amount?: string;
                    assetId?: string | number | import("long");
                }): _253.MsgWithdrawAssetRequest;
            };
            MsgWithdrawAssetResponse: {
                encode(_: _253.MsgWithdrawAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgWithdrawAssetResponse;
                fromPartial(_: {}): _253.MsgWithdrawAssetResponse;
            };
            MsgCloseLockRequest: {
                encode(message: _253.MsgCloseLockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgCloseLockRequest;
                fromPartial(object: {
                    depositor?: string;
                    lockerId?: string | number | import("long");
                }): _253.MsgCloseLockRequest;
            };
            MsgCloseLockResponse: {
                encode(_: _253.MsgCloseLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.MsgCloseLockResponse;
                fromPartial(_: {}): _253.MsgCloseLockResponse;
            };
            QueryParamsRequest: {
                encode(_: _252.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.QueryParamsRequest;
                fromPartial(_: {}): _252.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _252.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _252.QueryParamsResponse;
            };
            Params: {
                encode(_: _251.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.Params;
                fromPartial(_: {}): _251.Params;
            };
            DurationQuery: {
                encode(message: _250.DurationQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.DurationQuery;
                fromPartial(object: {
                    denom?: string;
                    duration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _250.DurationQuery;
            };
            TimeQuery: {
                encode(message: _250.TimeQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.TimeQuery;
                fromPartial(object: {
                    denom?: string;
                    time?: Date;
                }): _250.TimeQuery;
            };
            DurationLock: {
                encode(message: _250.DurationLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.DurationLock;
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
                }): _250.DurationLock;
            };
            Lock: {
                encode(message: _250.Lock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Lock;
                fromPartial(object: {
                    id?: string | number | import("long");
                    depositor?: string;
                    balance?: string;
                    createdAt?: Date;
                    locked?: boolean;
                    blockHeight?: string | number | import("long");
                    blockTime?: Date;
                    returnsAccumulated?: string;
                }): _250.Lock;
            };
            GenesisState: {
                encode(message: _249.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.GenesisState;
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
                }): _249.GenesisState;
            };
            EventCreateLock: {
                encode(message: _248.EventCreateLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EventCreateLock;
                fromPartial(object: {
                    id?: string;
                }): _248.EventCreateLock;
            };
        };
    }
    namespace market {
        const v1: {
            QueryClientImpl: typeof _504.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _483.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _257.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryParamsRequest;
                fromPartial(_: {}): _257.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _257.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _257.QueryParamsResponse;
            };
            Params: {
                encode(_: _256.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Params;
                fromPartial(_: {}): _256.Params;
            };
            MarketPacketData: {
                encode(message: _255.MarketPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.MarketPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _255.MarketPacketData;
            };
            NoData: {
                encode(_: _255.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.NoData;
                fromPartial(_: {}): _255.NoData;
            };
            GenesisState: {
                encode(message: _254.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.GenesisState;
                fromPartial(object: {
                    params?: {};
                    portId?: string;
                }): _254.GenesisState;
            };
        };
    }
    namespace mint {
        const v1: {
            QueryClientImpl: typeof _505.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _263.QueryParamsRequest): Promise<_263.QueryParamsResponse>;
                inflation(request?: _263.QueryInflationRequest): Promise<_263.QueryInflationResponse>;
                annualProvisions(request?: _263.QueryAnnualProvisionsRequest): Promise<_263.QueryAnnualProvisionsResponse>;
                distribution(request?: _263.QueryDistributionRequest): Promise<_263.QueryDistributionResponse>;
                lastBlockTime(request?: _263.QueryLastBlockTimeRequest): Promise<_263.QueryLastBlockTimeResponse>;
            };
            LCDQueryClient: typeof _484.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _263.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryParamsRequest;
                fromPartial(_: {}): _263.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _263.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryParamsResponse;
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
                }): _263.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _263.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryInflationRequest;
                fromPartial(_: {}): _263.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _263.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _263.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _263.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _263.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _263.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _263.QueryAnnualProvisionsResponse;
            };
            QueryDistributionRequest: {
                encode(_: _263.QueryDistributionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryDistributionRequest;
                fromPartial(_: {}): _263.QueryDistributionRequest;
            };
            QueryDistributionResponse: {
                encode(_: _263.QueryDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryDistributionResponse;
                fromPartial(_: {}): _263.QueryDistributionResponse;
            };
            QueryLastBlockTimeRequest: {
                encode(_: _263.QueryLastBlockTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryLastBlockTimeRequest;
                fromPartial(_: {}): _263.QueryLastBlockTimeRequest;
            };
            QueryLastBlockTimeResponse: {
                encode(message: _263.QueryLastBlockTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryLastBlockTimeResponse;
                fromPartial(object: {
                    lastBlockTime?: Date;
                }): _263.QueryLastBlockTimeResponse;
            };
            Params: {
                encode(message: _262.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.Params;
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
                }): _262.Params;
            };
            Minter: {
                encode(message: _261.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _261.Minter;
            };
            WeightedAddress: {
                encode(message: _261.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _261.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _261.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    communityPool?: string;
                    poolIncentives?: string;
                    grantsProgram?: string;
                    developerRewards?: string;
                    fundedAddresses?: string;
                }): _261.DistributionProportions;
            };
            GenesisState: {
                encode(message: _260.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.GenesisState;
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
                }): _260.GenesisState;
            };
            EventMint: {
                encode(message: _259.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventMint;
                fromPartial(object: {
                    bondedRatio?: string;
                    inflation?: string;
                    annualProvisions?: string;
                    amount?: string;
                }): _259.EventMint;
            };
        };
    }
    namespace nft {
        const v1: {
            MsgClientImpl: typeof _522.MsgClientImpl;
            QueryClientImpl: typeof _506.QueryClientImpl;
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
            BaseNFT: {
                encode(message: _266.BaseNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.BaseNFT;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    uri?: string;
                    data?: string;
                    owner?: string;
                    uriHash?: string;
                }): _266.BaseNFT;
            };
            NFTMetadata: {
                encode(message: _266.NFTMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.NFTMetadata;
                fromPartial(object: {
                    name?: string;
                    data?: string;
                }): _266.NFTMetadata;
            };
            Denom: {
                encode(message: _266.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.Denom;
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
                }): _266.Denom;
            };
            DenomMetadata: {
                encode(message: _266.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.DenomMetadata;
                fromPartial(object: {
                    creator?: string;
                    schema?: string;
                    mintRestricted?: boolean;
                    updateRestricted?: boolean;
                    data?: string;
                }): _266.DenomMetadata;
            };
            IDCollection: {
                encode(message: _266.IDCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.IDCollection;
                fromPartial(object: {
                    denomId?: string;
                    tokenIds?: string[];
                }): _266.IDCollection;
            };
            Owner: {
                encode(message: _266.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.Owner;
                fromPartial(object: {
                    address?: string;
                    idCollections?: {
                        denomId?: string;
                        tokenIds?: string[];
                    }[];
                }): _266.Owner;
            };
            Collection: {
                encode(message: _266.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.Collection;
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
                }): _266.Collection;
            };
            GenesisState: {
                encode(message: _265.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.GenesisState;
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
                }): _265.GenesisState;
            };
        };
    }
    namespace ons {
        const v1: {
            MsgClientImpl: typeof _523.MsgClientImpl;
            QueryClientImpl: typeof _507.QueryClientImpl;
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
                encode(_: _271.EventNameExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameExpired;
                fromPartial(_: {}): _271.EventNameExpired;
            };
            EventNameListed: {
                encode(_: _271.EventNameListed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameListed;
                fromPartial(_: {}): _271.EventNameListed;
            };
            EventNameListingCanceled: {
                encode(_: _271.EventNameListingCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameListingCanceled;
                fromPartial(_: {}): _271.EventNameListingCanceled;
            };
            EventNameUnlisted: {
                encode(_: _271.EventNameUnlisted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameUnlisted;
                fromPartial(_: {}): _271.EventNameUnlisted;
            };
            EventNamePurchased: {
                encode(_: _271.EventNamePurchased, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNamePurchased;
                fromPartial(_: {}): _271.EventNamePurchased;
            };
            EventNameTransferred: {
                encode(_: _271.EventNameTransferred, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameTransferred;
                fromPartial(_: {}): _271.EventNameTransferred;
            };
            EventNameRenewed: {
                encode(_: _271.EventNameRenewed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameRenewed;
                fromPartial(_: {}): _271.EventNameRenewed;
            };
            EventNameAddThread: {
                encode(_: _271.EventNameAddThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameAddThread;
                fromPartial(_: {}): _271.EventNameAddThread;
            };
            EventNameRemoveThread: {
                encode(_: _271.EventNameRemoveThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.EventNameRemoveThread;
                fromPartial(_: {}): _271.EventNameRemoveThread;
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
            MsgClientImpl: typeof _524.MsgClientImpl;
            QueryClientImpl: typeof _508.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _289.QueryParamsRequest): Promise<_289.QueryParamsResponse>;
                bandPricesResult(request: _289.QueryBandPricesRequest): Promise<_289.QueryBandPricesResponse>;
                lastBandPricesId(request?: _289.QueryLastBandPricesIdRequest): Promise<_289.QueryLastBandPricesIdResponse>;
                queryRoundData(request: _289.QueryRoundDataRequest): Promise<_289.QueryRoundDataResponse>;
                latestRoundData(request: _289.QueryLatestRoundDataRequest): Promise<_289.QueryLatestRoundDataResponse>;
                queryAllModuleOwner(request?: _289.QueryModuleOwnerRequest): Promise<_289.QueryModuleOwnerResponse>;
                queryFeedByFeedId(request: _289.QueryFeedByIdRequest): Promise<_289.QueryFeedByIdResponse>;
                queryAccountInfo(request: _289.QueryAccountRequest): Promise<_289.QueryAccountResponse>;
                queryFeedRewardAvailStrategy(request?: _289.QueryFeedRewardAvailStrategiesRequest): Promise<_289.QueryFeedRewardAvailStrategiesResponse>;
            };
            LCDQueryClient: typeof _487.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    bandPricesData(value: _290.MsgBandPricesData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitFeedDataTx(value: _290.MsgFeedData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addModuleOwnerTx(value: _288.MsgModuleOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    moduleOwnershipTransferTx(value: _290.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addFeedTx(value: _290.MsgFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addDataProviderTx(value: _290.MsgAddDataProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeDataProviderTx(value: _290.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSubmissionCountTx(value: _290.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setHeartbeatTriggerTx(value: _290.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeviationThresholdTriggerTx(value: _290.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setFeedRewardTx(value: _290.MsgSetFeedReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestNewRoundTx(value: _290.MsgRequestNewRound): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    feedOwnershipTransferTx(value: _290.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAccountTx(value: _290.MsgAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editAccountTx(value: _290.MsgEditAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    bandPricesData(value: _290.MsgBandPricesData): {
                        typeUrl: string;
                        value: _290.MsgBandPricesData;
                    };
                    submitFeedDataTx(value: _290.MsgFeedData): {
                        typeUrl: string;
                        value: _290.MsgFeedData;
                    };
                    addModuleOwnerTx(value: _288.MsgModuleOwner): {
                        typeUrl: string;
                        value: _288.MsgModuleOwner;
                    };
                    moduleOwnershipTransferTx(value: _290.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: _290.MsgModuleOwnershipTransfer;
                    };
                    addFeedTx(value: _290.MsgFeed): {
                        typeUrl: string;
                        value: _290.MsgFeed;
                    };
                    addDataProviderTx(value: _290.MsgAddDataProvider): {
                        typeUrl: string;
                        value: _290.MsgAddDataProvider;
                    };
                    removeDataProviderTx(value: _290.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: _290.MsgRemoveDataProvider;
                    };
                    setSubmissionCountTx(value: _290.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: _290.MsgSetSubmissionCount;
                    };
                    setHeartbeatTriggerTx(value: _290.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: _290.MsgSetHeartbeatTrigger;
                    };
                    setDeviationThresholdTriggerTx(value: _290.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: _290.MsgSetDeviationThresholdTrigger;
                    };
                    setFeedRewardTx(value: _290.MsgSetFeedReward): {
                        typeUrl: string;
                        value: _290.MsgSetFeedReward;
                    };
                    requestNewRoundTx(value: _290.MsgRequestNewRound): {
                        typeUrl: string;
                        value: _290.MsgRequestNewRound;
                    };
                    feedOwnershipTransferTx(value: _290.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: _290.MsgFeedOwnershipTransfer;
                    };
                    addAccountTx(value: _290.MsgAccount): {
                        typeUrl: string;
                        value: _290.MsgAccount;
                    };
                    editAccountTx(value: _290.MsgEditAccount): {
                        typeUrl: string;
                        value: _290.MsgEditAccount;
                    };
                };
                fromPartial: {
                    bandPricesData(value: _290.MsgBandPricesData): {
                        typeUrl: string;
                        value: _290.MsgBandPricesData;
                    };
                    submitFeedDataTx(value: _290.MsgFeedData): {
                        typeUrl: string;
                        value: _290.MsgFeedData;
                    };
                    addModuleOwnerTx(value: _288.MsgModuleOwner): {
                        typeUrl: string;
                        value: _288.MsgModuleOwner;
                    };
                    moduleOwnershipTransferTx(value: _290.MsgModuleOwnershipTransfer): {
                        typeUrl: string;
                        value: _290.MsgModuleOwnershipTransfer;
                    };
                    addFeedTx(value: _290.MsgFeed): {
                        typeUrl: string;
                        value: _290.MsgFeed;
                    };
                    addDataProviderTx(value: _290.MsgAddDataProvider): {
                        typeUrl: string;
                        value: _290.MsgAddDataProvider;
                    };
                    removeDataProviderTx(value: _290.MsgRemoveDataProvider): {
                        typeUrl: string;
                        value: _290.MsgRemoveDataProvider;
                    };
                    setSubmissionCountTx(value: _290.MsgSetSubmissionCount): {
                        typeUrl: string;
                        value: _290.MsgSetSubmissionCount;
                    };
                    setHeartbeatTriggerTx(value: _290.MsgSetHeartbeatTrigger): {
                        typeUrl: string;
                        value: _290.MsgSetHeartbeatTrigger;
                    };
                    setDeviationThresholdTriggerTx(value: _290.MsgSetDeviationThresholdTrigger): {
                        typeUrl: string;
                        value: _290.MsgSetDeviationThresholdTrigger;
                    };
                    setFeedRewardTx(value: _290.MsgSetFeedReward): {
                        typeUrl: string;
                        value: _290.MsgSetFeedReward;
                    };
                    requestNewRoundTx(value: _290.MsgRequestNewRound): {
                        typeUrl: string;
                        value: _290.MsgRequestNewRound;
                    };
                    feedOwnershipTransferTx(value: _290.MsgFeedOwnershipTransfer): {
                        typeUrl: string;
                        value: _290.MsgFeedOwnershipTransfer;
                    };
                    addAccountTx(value: _290.MsgAccount): {
                        typeUrl: string;
                        value: _290.MsgAccount;
                    };
                    editAccountTx(value: _290.MsgEditAccount): {
                        typeUrl: string;
                        value: _290.MsgEditAccount;
                    };
                };
            };
            AminoConverter: {
                "/ollo.prices.v1.MsgBandPricesData": {
                    aminoType: string;
                    toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: _290.MsgBandPricesData) => {
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
                    }) => _290.MsgBandPricesData;
                };
                "/ollo.prices.v1.MsgFeedData": {
                    aminoType: string;
                    toAmino: ({ feedId, submitter, observationFeedData, observationFeedDataSignatures, isFeedDataValid, cosmosPubKeys, txFee }: _290.MsgFeedData) => {
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
                    }) => _290.MsgFeedData;
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
                    toAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: _290.MsgModuleOwnershipTransfer) => {
                        assignerAddress: Uint8Array;
                        newModuleOwnerAddress: Uint8Array;
                        newModuleOwnerPubKey: Uint8Array;
                    };
                    fromAmino: ({ assignerAddress, newModuleOwnerAddress, newModuleOwnerPubKey }: {
                        assignerAddress: Uint8Array;
                        newModuleOwnerAddress: Uint8Array;
                        newModuleOwnerPubKey: Uint8Array;
                    }) => _290.MsgModuleOwnershipTransfer;
                };
                "/ollo.prices.v1.MsgFeed": {
                    aminoType: string;
                    toAmino: ({ feedId, feedOwner, dataProviders, submissionCount, heartbeatTrigger, deviationThresholdTrigger, moduleOwnerAddress, feedReward, desc }: _290.MsgFeed) => {
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
                    }) => _290.MsgFeed;
                };
                "/ollo.prices.v1.MsgAddDataProvider": {
                    aminoType: string;
                    toAmino: ({ feedId, dataProvider, signer }: _290.MsgAddDataProvider) => {
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
                    }) => _290.MsgAddDataProvider;
                };
                "/ollo.prices.v1.MsgRemoveDataProvider": {
                    aminoType: string;
                    toAmino: ({ feedId, address, signer }: _290.MsgRemoveDataProvider) => {
                        feedId: string;
                        address: Uint8Array;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, address, signer }: {
                        feedId: string;
                        address: Uint8Array;
                        signer: Uint8Array;
                    }) => _290.MsgRemoveDataProvider;
                };
                "/ollo.prices.v1.MsgSetSubmissionCount": {
                    aminoType: string;
                    toAmino: ({ feedId, submissionCount, signer }: _290.MsgSetSubmissionCount) => {
                        feedId: string;
                        submissionCount: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, submissionCount, signer }: {
                        feedId: string;
                        submissionCount: number;
                        signer: Uint8Array;
                    }) => _290.MsgSetSubmissionCount;
                };
                "/ollo.prices.v1.MsgSetHeartbeatTrigger": {
                    aminoType: string;
                    toAmino: ({ feedId, heartbeatTrigger, signer }: _290.MsgSetHeartbeatTrigger) => {
                        feedId: string;
                        heartbeatTrigger: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, heartbeatTrigger, signer }: {
                        feedId: string;
                        heartbeatTrigger: number;
                        signer: Uint8Array;
                    }) => _290.MsgSetHeartbeatTrigger;
                };
                "/ollo.prices.v1.MsgSetDeviationThresholdTrigger": {
                    aminoType: string;
                    toAmino: ({ feedId, deviationThresholdTrigger, signer }: _290.MsgSetDeviationThresholdTrigger) => {
                        feedId: string;
                        deviationThresholdTrigger: number;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, deviationThresholdTrigger, signer }: {
                        feedId: string;
                        deviationThresholdTrigger: number;
                        signer: Uint8Array;
                    }) => _290.MsgSetDeviationThresholdTrigger;
                };
                "/ollo.prices.v1.MsgSetFeedReward": {
                    aminoType: string;
                    toAmino: ({ feedId, feedReward, signer }: _290.MsgSetFeedReward) => {
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
                    }) => _290.MsgSetFeedReward;
                };
                "/ollo.prices.v1.MsgRequestNewRound": {
                    aminoType: string;
                    toAmino: ({ feedId, signer }: _290.MsgRequestNewRound) => {
                        feedId: string;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, signer }: {
                        feedId: string;
                        signer: Uint8Array;
                    }) => _290.MsgRequestNewRound;
                };
                "/ollo.prices.v1.MsgFeedOwnershipTransfer": {
                    aminoType: string;
                    toAmino: ({ feedId, newFeedOwnerAddress, signer }: _290.MsgFeedOwnershipTransfer) => {
                        feedId: string;
                        newFeedOwnerAddress: Uint8Array;
                        signer: Uint8Array;
                    };
                    fromAmino: ({ feedId, newFeedOwnerAddress, signer }: {
                        feedId: string;
                        newFeedOwnerAddress: Uint8Array;
                        signer: Uint8Array;
                    }) => _290.MsgFeedOwnershipTransfer;
                };
                "/ollo.prices.v1.MsgAccount": {
                    aminoType: string;
                    toAmino: ({ submitter, chainlinkPublicKey, chainlinkSigningKey, piggyAddress }: _290.MsgAccount) => {
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
                    }) => _290.MsgAccount;
                };
                "/ollo.prices.v1.MsgEditAccount": {
                    aminoType: string;
                    toAmino: ({ submitter, piggyAddress }: _290.MsgEditAccount) => {
                        submitter: Uint8Array;
                        piggyAddress: Uint8Array;
                    };
                    fromAmino: ({ submitter, piggyAddress }: {
                        submitter: Uint8Array;
                        piggyAddress: Uint8Array;
                    }) => _290.MsgEditAccount;
                };
            };
            MsgBandPricesData: {
                encode(message: _290.MsgBandPricesData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgBandPricesData;
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
                }): _290.MsgBandPricesData;
            };
            MsgBandPricesDataResponse: {
                encode(_: _290.MsgBandPricesDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgBandPricesDataResponse;
                fromPartial(_: {}): _290.MsgBandPricesDataResponse;
            };
            MsgModuleOwnershipTransfer: {
                encode(message: _290.MsgModuleOwnershipTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgModuleOwnershipTransfer;
                fromPartial(object: {
                    assignerAddress?: Uint8Array;
                    newModuleOwnerAddress?: Uint8Array;
                    newModuleOwnerPubKey?: Uint8Array;
                }): _290.MsgModuleOwnershipTransfer;
            };
            MsgFeed: {
                encode(message: _290.MsgFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgFeed;
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
                }): _290.MsgFeed;
            };
            MsgAddDataProvider: {
                encode(message: _290.MsgAddDataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgAddDataProvider;
                fromPartial(object: {
                    feedId?: string;
                    dataProvider?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                    };
                    signer?: Uint8Array;
                }): _290.MsgAddDataProvider;
            };
            MsgRemoveDataProvider: {
                encode(message: _290.MsgRemoveDataProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgRemoveDataProvider;
                fromPartial(object: {
                    feedId?: string;
                    address?: Uint8Array;
                    signer?: Uint8Array;
                }): _290.MsgRemoveDataProvider;
            };
            MsgSetSubmissionCount: {
                encode(message: _290.MsgSetSubmissionCount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgSetSubmissionCount;
                fromPartial(object: {
                    feedId?: string;
                    submissionCount?: number;
                    signer?: Uint8Array;
                }): _290.MsgSetSubmissionCount;
            };
            MsgSetHeartbeatTrigger: {
                encode(message: _290.MsgSetHeartbeatTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgSetHeartbeatTrigger;
                fromPartial(object: {
                    feedId?: string;
                    heartbeatTrigger?: number;
                    signer?: Uint8Array;
                }): _290.MsgSetHeartbeatTrigger;
            };
            MsgSetDeviationThresholdTrigger: {
                encode(message: _290.MsgSetDeviationThresholdTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgSetDeviationThresholdTrigger;
                fromPartial(object: {
                    feedId?: string;
                    deviationThresholdTrigger?: number;
                    signer?: Uint8Array;
                }): _290.MsgSetDeviationThresholdTrigger;
            };
            MsgSetFeedReward: {
                encode(message: _290.MsgSetFeedReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgSetFeedReward;
                fromPartial(object: {
                    feedId?: string;
                    feedReward?: {
                        amount?: string | number | import("long");
                        strategy?: string;
                    };
                    signer?: Uint8Array;
                }): _290.MsgSetFeedReward;
            };
            MsgFeedOwnershipTransfer: {
                encode(message: _290.MsgFeedOwnershipTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgFeedOwnershipTransfer;
                fromPartial(object: {
                    feedId?: string;
                    newFeedOwnerAddress?: Uint8Array;
                    signer?: Uint8Array;
                }): _290.MsgFeedOwnershipTransfer;
            };
            MsgFeedData: {
                encode(message: _290.MsgFeedData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgFeedData;
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
                }): _290.MsgFeedData;
            };
            MsgRequestNewRound: {
                encode(message: _290.MsgRequestNewRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgRequestNewRound;
                fromPartial(object: {
                    feedId?: string;
                    signer?: Uint8Array;
                }): _290.MsgRequestNewRound;
            };
            MsgAccount: {
                encode(message: _290.MsgAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgAccount;
                fromPartial(object: {
                    submitter?: Uint8Array;
                    chainlinkPublicKey?: Uint8Array;
                    chainlinkSigningKey?: Uint8Array;
                    piggyAddress?: Uint8Array;
                }): _290.MsgAccount;
            };
            MsgEditAccount: {
                encode(message: _290.MsgEditAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgEditAccount;
                fromPartial(object: {
                    submitter?: Uint8Array;
                    piggyAddress?: Uint8Array;
                }): _290.MsgEditAccount;
            };
            MsgResponse: {
                encode(message: _290.MsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgResponse;
                fromPartial(object: {
                    height?: string | number | import("long");
                    txHash?: string;
                }): _290.MsgResponse;
            };
            OCRFeedDataInStore: {
                encode(message: _290.OCRFeedDataInStore, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.OCRFeedDataInStore;
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
                }): _290.OCRFeedDataInStore;
            };
            QueryParamsRequest: {
                encode(_: _289.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryParamsRequest;
                fromPartial(_: {}): _289.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _289.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _289.QueryParamsResponse;
            };
            QueryBandPricesRequest: {
                encode(message: _289.QueryBandPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryBandPricesRequest;
                fromPartial(object: {
                    requestId?: string | number | import("long");
                }): _289.QueryBandPricesRequest;
            };
            QueryBandPricesResponse: {
                encode(message: _289.QueryBandPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryBandPricesResponse;
                fromPartial(object: {
                    result?: {
                        rates?: (string | number | import("long"))[];
                    };
                }): _289.QueryBandPricesResponse;
            };
            QueryLastBandPricesIdRequest: {
                encode(_: _289.QueryLastBandPricesIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryLastBandPricesIdRequest;
                fromPartial(_: {}): _289.QueryLastBandPricesIdRequest;
            };
            QueryLastBandPricesIdResponse: {
                encode(message: _289.QueryLastBandPricesIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryLastBandPricesIdResponse;
                fromPartial(object: {
                    requestId?: string | number | import("long");
                }): _289.QueryLastBandPricesIdResponse;
            };
            QueryFeedByIdRequest: {
                encode(message: _289.QueryFeedByIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryFeedByIdRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _289.QueryFeedByIdRequest;
            };
            QueryFeedByIdResponse: {
                encode(message: _289.QueryFeedByIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryFeedByIdResponse;
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
                }): _289.QueryFeedByIdResponse;
            };
            QueryModuleOwnerRequest: {
                encode(_: _289.QueryModuleOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryModuleOwnerRequest;
                fromPartial(_: {}): _289.QueryModuleOwnerRequest;
            };
            QueryModuleOwnerResponse: {
                encode(message: _289.QueryModuleOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryModuleOwnerResponse;
                fromPartial(object: {
                    moduleOwner?: {
                        address?: Uint8Array;
                        pubKey?: Uint8Array;
                        assignerAddress?: Uint8Array;
                    }[];
                }): _289.QueryModuleOwnerResponse;
            };
            QueryRoundDataRequest: {
                encode(message: _289.QueryRoundDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryRoundDataRequest;
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
                }): _289.QueryRoundDataRequest;
            };
            QueryRoundDataResponse: {
                encode(message: _289.QueryRoundDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryRoundDataResponse;
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
                }): _289.QueryRoundDataResponse;
            };
            QueryLatestRoundDataRequest: {
                encode(message: _289.QueryLatestRoundDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryLatestRoundDataRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _289.QueryLatestRoundDataRequest;
            };
            QueryLatestRoundDataResponse: {
                encode(message: _289.QueryLatestRoundDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryLatestRoundDataResponse;
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
                }): _289.QueryLatestRoundDataResponse;
            };
            RoundData: {
                encode(message: _289.RoundData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.RoundData;
                fromPartial(object: {
                    feedId?: string;
                    feedData?: {
                        Context?: Uint8Array;
                        Oracles?: Uint8Array;
                        Observations?: {
                            data?: Uint8Array;
                        }[];
                    };
                }): _289.RoundData;
            };
            QueryAccountRequest: {
                encode(message: _289.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryAccountRequest;
                fromPartial(object: {
                    accountAddress?: Uint8Array;
                }): _289.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _289.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        submitter?: Uint8Array;
                        chainlinkPublicKey?: Uint8Array;
                        chainlinkSigningKey?: Uint8Array;
                        piggyAddress?: Uint8Array;
                    };
                }): _289.QueryAccountResponse;
            };
            QueryFeedRewardAvailStrategiesRequest: {
                encode(_: _289.QueryFeedRewardAvailStrategiesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryFeedRewardAvailStrategiesRequest;
                fromPartial(_: {}): _289.QueryFeedRewardAvailStrategiesRequest;
            };
            QueryFeedRewardAvailStrategiesResponse: {
                encode(message: _289.QueryFeedRewardAvailStrategiesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryFeedRewardAvailStrategiesResponse;
                fromPartial(object: {
                    availStrategies?: string[];
                }): _289.QueryFeedRewardAvailStrategiesResponse;
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
                encode(_: _287.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.Params;
                fromPartial(_: {}): _287.Params;
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
                    params?: {};
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
            QueryClientImpl: typeof _509.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _294.QueryParamsRequest): Promise<_294.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _488.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _294.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryParamsRequest;
                fromPartial(_: {}): _294.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _294.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        contractAddress?: string;
                    };
                }): _294.QueryParamsResponse;
            };
            Params: {
                encode(message: _293.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.Params;
                fromPartial(object: {
                    contractAddress?: string;
                }): _293.Params;
            };
            GenesisState: {
                encode(message: _292.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.GenesisState;
                fromPartial(object: {
                    params?: {
                        contractAddress?: string;
                    };
                }): _292.GenesisState;
            };
            EventRevert: {
                encode(message: _291.EventRevert, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.EventRevert;
                fromPartial(object: {
                    id?: string;
                }): _291.EventRevert;
            };
        };
    }
    namespace reserve {
        const v1: {
            MsgClientImpl: typeof _525.MsgClientImpl;
            QueryClientImpl: typeof _510.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _299.QueryParamsRequest): Promise<_299.QueryParamsResponse>;
                getDenoms(request?: _299.QueryGetDenomsRequest): Promise<_299.QueryGetDenomsResponse>;
                getDenom(request: _299.QueryGetDenomRequest): Promise<_299.QueryGetDenomResponse>;
                getDenomWhitelist(request: _299.QueryGetDenomWhitelistRequest): Promise<_299.QueryGetDenomWhitelistResponse>;
                denomsFromCreator(request: _299.QueryDenomsFromCreatorRequest): Promise<_299.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _489.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _301.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintDenom(value: _301.MsgMintDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnDenom(value: _301.MsgBurnDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeDenomAdmin(value: _301.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _301.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _301.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _301.MsgCreateDenom): {
                        typeUrl: string;
                        value: _301.MsgCreateDenom;
                    };
                    mintDenom(value: _301.MsgMintDenom): {
                        typeUrl: string;
                        value: _301.MsgMintDenom;
                    };
                    burnDenom(value: _301.MsgBurnDenom): {
                        typeUrl: string;
                        value: _301.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _301.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _301.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _301.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _301.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _301.MsgForceTransfer): {
                        typeUrl: string;
                        value: _301.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _301.MsgCreateDenom): {
                        typeUrl: string;
                        value: _301.MsgCreateDenom;
                    };
                    mintDenom(value: _301.MsgMintDenom): {
                        typeUrl: string;
                        value: _301.MsgMintDenom;
                    };
                    burnDenom(value: _301.MsgBurnDenom): {
                        typeUrl: string;
                        value: _301.MsgBurnDenom;
                    };
                    changeDenomAdmin(value: _301.MsgChangeDenomAdmin): {
                        typeUrl: string;
                        value: _301.MsgChangeDenomAdmin;
                    };
                    setDenomMetadata(value: _301.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _301.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _301.MsgForceTransfer): {
                        typeUrl: string;
                        value: _301.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/ollo.reserve.v1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _301.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _301.MsgCreateDenom;
                };
                "/ollo.reserve.v1.MsgMintDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _301.MsgMintDenom) => {
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
                    }) => _301.MsgMintDenom;
                };
                "/ollo.reserve.v1.MsgBurnDenom": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _301.MsgBurnDenom) => {
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
                    }) => _301.MsgBurnDenom;
                };
                "/ollo.reserve.v1.MsgChangeDenomAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _301.MsgChangeDenomAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _301.MsgChangeDenomAdmin;
                };
                "/ollo.reserve.v1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _301.MsgSetDenomMetadata) => {
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
                    }) => _301.MsgSetDenomMetadata;
                };
                "/ollo.reserve.v1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: _301.MsgForceTransfer) => {
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
                    }) => _301.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                encode(message: _301.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _301.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _301.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _301.MsgCreateDenomResponse;
            };
            MsgMintDenom: {
                encode(message: _301.MsgMintDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgMintDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _301.MsgMintDenom;
            };
            MsgMintDenomResponse: {
                encode(_: _301.MsgMintDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgMintDenomResponse;
                fromPartial(_: {}): _301.MsgMintDenomResponse;
            };
            MsgBurnDenom: {
                encode(message: _301.MsgBurnDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgBurnDenom;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _301.MsgBurnDenom;
            };
            MsgBurnDenomResponse: {
                encode(_: _301.MsgBurnDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgBurnDenomResponse;
                fromPartial(_: {}): _301.MsgBurnDenomResponse;
            };
            MsgChangeDenomAdmin: {
                encode(message: _301.MsgChangeDenomAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgChangeDenomAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _301.MsgChangeDenomAdmin;
            };
            MsgChangeDenomAdminResponse: {
                encode(_: _301.MsgChangeDenomAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgChangeDenomAdminResponse;
                fromPartial(_: {}): _301.MsgChangeDenomAdminResponse;
            };
            MsgForceTransfer: {
                encode(message: _301.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgForceTransfer;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    transferFromAddress?: string;
                    transferToAddress?: string;
                }): _301.MsgForceTransfer;
            };
            MsgForceTransferResponse: {
                encode(_: _301.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgForceTransferResponse;
                fromPartial(_: {}): _301.MsgForceTransferResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _301.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgSetDenomMetadata;
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
                }): _301.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _301.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgSetDenomMetadataResponse;
                fromPartial(_: {}): _301.MsgSetDenomMetadataResponse;
            };
            DenomWhitelist: {
                encode(message: _300.DenomWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.DenomWhitelist;
                fromPartial(object: {
                    denom?: string;
                    addresses?: string[];
                }): _300.DenomWhitelist;
            };
            QueryParamsRequest: {
                encode(_: _299.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryParamsRequest;
                fromPartial(_: {}): _299.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _299.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _299.QueryParamsResponse;
            };
            QueryGetDenomWhitelistRequest: {
                encode(message: _299.QueryGetDenomWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryGetDenomWhitelistRequest;
                fromPartial(object: {
                    denom?: string;
                }): _299.QueryGetDenomWhitelistRequest;
            };
            QueryGetDenomWhitelistResponse: {
                encode(message: _299.QueryGetDenomWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryGetDenomWhitelistResponse;
                fromPartial(object: {
                    whitelist?: {
                        denom?: string;
                        addresses?: string[];
                    };
                }): _299.QueryGetDenomWhitelistResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _299.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _299.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _299.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _299.QueryDenomsFromCreatorResponse;
            };
            QueryGetDenomsRequest: {
                encode(_: _299.QueryGetDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryGetDenomsRequest;
                fromPartial(_: {}): _299.QueryGetDenomsRequest;
            };
            QueryGetDenomsResponse: {
                encode(message: _299.QueryGetDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryGetDenomsResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _299.QueryGetDenomsResponse;
            };
            QueryGetDenomRequest: {
                encode(message: _299.QueryGetDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryGetDenomRequest;
                fromPartial(object: {
                    denom?: string;
                }): _299.QueryGetDenomRequest;
            };
            QueryGetDenomResponse: {
                encode(_: _299.QueryGetDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.QueryGetDenomResponse;
                fromPartial(_: {}): _299.QueryGetDenomResponse;
            };
            Params: {
                encode(message: _298.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _298.Params;
            };
            DenomUnit: {
                encode(message: _297.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _297.DenomUnit;
            };
            DenomMetadata: {
                encode(message: _297.DenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.DenomMetadata;
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
                }): _297.DenomMetadata;
            };
            GenesisState: {
                encode(message: _296.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.GenesisState;
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
                }): _296.GenesisState;
            };
            EventDenomBurned: {
                encode(message: _295.EventDenomBurned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.EventDenomBurned;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _295.EventDenomBurned;
            };
            EventDenomMinted: {
                encode(message: _295.EventDenomMinted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.EventDenomMinted;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _295.EventDenomMinted;
            };
        };
    }
    namespace token {
        const v1: {
            MsgClientImpl: typeof _526.MsgClientImpl;
            QueryClientImpl: typeof _511.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                token(request: _304.QueryTokenRequest): Promise<_304.QueryTokenResponse>;
                tokens(request: _304.QueryTokensRequest): Promise<_304.QueryTokensResponse>;
                fees(request: _304.QueryFeesRequest): Promise<_304.QueryFeesResponse>;
                params(request?: _304.QueryParamsRequest): Promise<_304.QueryParamsResponse>;
                burn(request?: _304.QueryBurnRequest): Promise<_304.QueryBurnResponse>;
            };
            LCDQueryClient: typeof _490.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueToken(value: _306.MsgIssueToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editToken(value: _306.MsgEditToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintToken(value: _306.MsgMintToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnToken(value: _306.MsgBurnToken): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenOwner(value: _306.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueToken(value: _306.MsgIssueToken): {
                        typeUrl: string;
                        value: _306.MsgIssueToken;
                    };
                    editToken(value: _306.MsgEditToken): {
                        typeUrl: string;
                        value: _306.MsgEditToken;
                    };
                    mintToken(value: _306.MsgMintToken): {
                        typeUrl: string;
                        value: _306.MsgMintToken;
                    };
                    burnToken(value: _306.MsgBurnToken): {
                        typeUrl: string;
                        value: _306.MsgBurnToken;
                    };
                    transferTokenOwner(value: _306.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _306.MsgTransferTokenOwner;
                    };
                };
                fromPartial: {
                    issueToken(value: _306.MsgIssueToken): {
                        typeUrl: string;
                        value: _306.MsgIssueToken;
                    };
                    editToken(value: _306.MsgEditToken): {
                        typeUrl: string;
                        value: _306.MsgEditToken;
                    };
                    mintToken(value: _306.MsgMintToken): {
                        typeUrl: string;
                        value: _306.MsgMintToken;
                    };
                    burnToken(value: _306.MsgBurnToken): {
                        typeUrl: string;
                        value: _306.MsgBurnToken;
                    };
                    transferTokenOwner(value: _306.MsgTransferTokenOwner): {
                        typeUrl: string;
                        value: _306.MsgTransferTokenOwner;
                    };
                };
            };
            AminoConverter: {
                "/ollo.token.v1.MsgIssueToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, scale, minUnit, initialSupply, maxSupply, mintable, owner }: _306.MsgIssueToken) => {
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
                    }) => _306.MsgIssueToken;
                };
                "/ollo.token.v1.MsgEditToken": {
                    aminoType: string;
                    toAmino: ({ symbol, name, maxSupply, mintable, owner }: _306.MsgEditToken) => {
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
                    }) => _306.MsgEditToken;
                };
                "/ollo.token.v1.MsgMintToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, to, owner }: _306.MsgMintToken) => {
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
                    }) => _306.MsgMintToken;
                };
                "/ollo.token.v1.MsgBurnToken": {
                    aminoType: string;
                    toAmino: ({ symbol, amount, sender }: _306.MsgBurnToken) => {
                        symbol: string;
                        amount: string;
                        sender: string;
                    };
                    fromAmino: ({ symbol, amount, sender }: {
                        symbol: string;
                        amount: string;
                        sender: string;
                    }) => _306.MsgBurnToken;
                };
                "/ollo.token.v1.MsgTransferTokenOwner": {
                    aminoType: string;
                    toAmino: ({ srcOwner, dstOwner, symbol }: _306.MsgTransferTokenOwner) => {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    };
                    fromAmino: ({ src_owner, dst_owner, symbol }: {
                        src_owner: string;
                        dst_owner: string;
                        symbol: string;
                    }) => _306.MsgTransferTokenOwner;
                };
            };
            MsgIssueToken: {
                encode(message: _306.MsgIssueToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgIssueToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _306.MsgIssueToken;
            };
            MsgIssueTokenResponse: {
                encode(_: _306.MsgIssueTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgIssueTokenResponse;
                fromPartial(_: {}): _306.MsgIssueTokenResponse;
            };
            MsgTransferTokenOwner: {
                encode(message: _306.MsgTransferTokenOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgTransferTokenOwner;
                fromPartial(object: {
                    srcOwner?: string;
                    dstOwner?: string;
                    symbol?: string;
                }): _306.MsgTransferTokenOwner;
            };
            MsgTransferTokenOwnerResponse: {
                encode(_: _306.MsgTransferTokenOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgTransferTokenOwnerResponse;
                fromPartial(_: {}): _306.MsgTransferTokenOwnerResponse;
            };
            MsgEditToken: {
                encode(message: _306.MsgEditToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgEditToken;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    maxSupply?: string | number | import("long");
                    mintable?: string;
                    owner?: string;
                }): _306.MsgEditToken;
            };
            MsgEditTokenResponse: {
                encode(_: _306.MsgEditTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgEditTokenResponse;
                fromPartial(_: {}): _306.MsgEditTokenResponse;
            };
            MsgMintToken: {
                encode(message: _306.MsgMintToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgMintToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    to?: string;
                    owner?: string;
                }): _306.MsgMintToken;
            };
            MsgMintTokenResponse: {
                encode(_: _306.MsgMintTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgMintTokenResponse;
                fromPartial(_: {}): _306.MsgMintTokenResponse;
            };
            MsgBurnToken: {
                encode(message: _306.MsgBurnToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgBurnToken;
                fromPartial(object: {
                    symbol?: string;
                    amount?: string | number | import("long");
                    sender?: string;
                }): _306.MsgBurnToken;
            };
            MsgBurnTokenResponse: {
                encode(_: _306.MsgBurnTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.MsgBurnTokenResponse;
                fromPartial(_: {}): _306.MsgBurnTokenResponse;
            };
            Token: {
                encode(message: _305.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.Token;
                fromPartial(object: {
                    symbol?: string;
                    name?: string;
                    scale?: number;
                    minUnit?: string;
                    initialSupply?: string | number | import("long");
                    maxSupply?: string | number | import("long");
                    mintable?: boolean;
                    owner?: string;
                }): _305.Token;
            };
            QueryTokenRequest: {
                encode(message: _304.QueryTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryTokenRequest;
                fromPartial(object: {
                    denom?: string;
                }): _304.QueryTokenRequest;
            };
            QueryTokenResponse: {
                encode(message: _304.QueryTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryTokenResponse;
                fromPartial(object: {
                    Token?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _304.QueryTokenResponse;
            };
            QueryTokensRequest: {
                encode(message: _304.QueryTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryTokensRequest;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _304.QueryTokensRequest;
            };
            QueryTokensResponse: {
                encode(message: _304.QueryTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryTokensResponse;
                fromPartial(object: {
                    Tokens?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _304.QueryTokensResponse;
            };
            QueryFeesRequest: {
                encode(message: _304.QueryFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryFeesRequest;
                fromPartial(object: {
                    denom?: string;
                }): _304.QueryFeesRequest;
            };
            QueryFeesResponse: {
                encode(message: _304.QueryFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryFeesResponse;
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
                }): _304.QueryFeesResponse;
            };
            QueryParamsRequest: {
                encode(_: _304.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryParamsRequest;
                fromPartial(_: {}): _304.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _304.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryParamsResponse;
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
                }): _304.QueryParamsResponse;
            };
            QueryBurnRequest: {
                encode(_: _304.QueryBurnRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryBurnRequest;
                fromPartial(_: {}): _304.QueryBurnRequest;
            };
            QueryBurnResponse: {
                encode(message: _304.QueryBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.QueryBurnResponse;
                fromPartial(object: {
                    burnedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _304.QueryBurnResponse;
            };
            Params: {
                encode(message: _303.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.Params;
                fromPartial(object: {
                    tokenTaxRate?: string;
                    issueTokenBaseFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    mintTokenFeeRatio?: string;
                }): _303.Params;
            };
            GenesisState: {
                encode(message: _302.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _302.GenesisState;
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
                }): _302.GenesisState;
            };
        };
    }
    namespace vault {
        const v1: {
            MsgClientImpl: typeof _527.MsgClientImpl;
            QueryClientImpl: typeof _512.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryVault(request: _310.QueryVaultRequest): Promise<_310.QueryVaultResponse>;
                queryAllVaults(request?: _310.QueryAllVaultsRequest): Promise<_310.QueryAllVaultsResponse>;
            };
            LCDQueryClient: typeof _491.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    msgCreate(value: _311.MsgCreateRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDeposit(value: _311.MsgDepositRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgWithdraw(value: _311.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgDraw(value: _311.MsgDrawRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgRepay(value: _311.MsgRepayRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    msgClose(value: _311.MsgCloseRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    msgCreate(value: _311.MsgCreateRequest): {
                        typeUrl: string;
                        value: _311.MsgCreateRequest;
                    };
                    msgDeposit(value: _311.MsgDepositRequest): {
                        typeUrl: string;
                        value: _311.MsgDepositRequest;
                    };
                    msgWithdraw(value: _311.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _311.MsgWithdrawRequest;
                    };
                    msgDraw(value: _311.MsgDrawRequest): {
                        typeUrl: string;
                        value: _311.MsgDrawRequest;
                    };
                    msgRepay(value: _311.MsgRepayRequest): {
                        typeUrl: string;
                        value: _311.MsgRepayRequest;
                    };
                    msgClose(value: _311.MsgCloseRequest): {
                        typeUrl: string;
                        value: _311.MsgCloseRequest;
                    };
                };
                fromPartial: {
                    msgCreate(value: _311.MsgCreateRequest): {
                        typeUrl: string;
                        value: _311.MsgCreateRequest;
                    };
                    msgDeposit(value: _311.MsgDepositRequest): {
                        typeUrl: string;
                        value: _311.MsgDepositRequest;
                    };
                    msgWithdraw(value: _311.MsgWithdrawRequest): {
                        typeUrl: string;
                        value: _311.MsgWithdrawRequest;
                    };
                    msgDraw(value: _311.MsgDrawRequest): {
                        typeUrl: string;
                        value: _311.MsgDrawRequest;
                    };
                    msgRepay(value: _311.MsgRepayRequest): {
                        typeUrl: string;
                        value: _311.MsgRepayRequest;
                    };
                    msgClose(value: _311.MsgCloseRequest): {
                        typeUrl: string;
                        value: _311.MsgCloseRequest;
                    };
                };
            };
            AminoConverter: {
                "/ollo.vault.v1.MsgCreateRequest": {
                    aminoType: string;
                    toAmino: ({ from, amountIn, amountOut }: _311.MsgCreateRequest) => {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    };
                    fromAmino: ({ from, amount_in, amount_out }: {
                        from: string;
                        amount_in: string;
                        amount_out: string;
                    }) => _311.MsgCreateRequest;
                };
                "/ollo.vault.v1.MsgDepositRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _311.MsgDepositRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _311.MsgDepositRequest;
                };
                "/ollo.vault.v1.MsgWithdrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _311.MsgWithdrawRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _311.MsgWithdrawRequest;
                };
                "/ollo.vault.v1.MsgDrawRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _311.MsgDrawRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _311.MsgDrawRequest;
                };
                "/ollo.vault.v1.MsgRepayRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId, amount }: _311.MsgRepayRequest) => {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    };
                    fromAmino: ({ from, user_vault_id, amount }: {
                        from: string;
                        user_vault_id: string;
                        amount: string;
                    }) => _311.MsgRepayRequest;
                };
                "/ollo.vault.v1.MsgCloseRequest": {
                    aminoType: string;
                    toAmino: ({ from, userVaultId }: _311.MsgCloseRequest) => {
                        from: string;
                        user_vault_id: string;
                    };
                    fromAmino: ({ from, user_vault_id }: {
                        from: string;
                        user_vault_id: string;
                    }) => _311.MsgCloseRequest;
                };
            };
            Vault: {
                encode(message: _312.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Vault;
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
                }): _312.Vault;
            };
            EmissionsVault: {
                encode(message: _312.EmissionsVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.EmissionsVault;
                fromPartial(object: {
                    id?: string | number | import("long");
                    amountIn?: string;
                    amountOut?: string;
                    createdAt?: Date;
                }): _312.EmissionsVault;
            };
            EmissionsVaultRewards: {
                encode(message: _312.EmissionsVaultRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.EmissionsVaultRewards;
                fromPartial(object: {
                    user?: string;
                    blockHeight?: string | number | import("long");
                    amount?: string;
                }): _312.EmissionsVaultRewards;
            };
            MsgCreateRequest: {
                encode(message: _311.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgCreateRequest;
                fromPartial(object: {
                    from?: string;
                    amountIn?: string;
                    amountOut?: string;
                }): _311.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _311.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgCreateResponse;
                fromPartial(_: {}): _311.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _311.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgDepositRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _311.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _311.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgDepositResponse;
                fromPartial(_: {}): _311.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _311.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgWithdrawRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _311.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _311.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgWithdrawResponse;
                fromPartial(_: {}): _311.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _311.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgDrawRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _311.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _311.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgDrawResponse;
                fromPartial(_: {}): _311.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _311.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgRepayRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                    amount?: string;
                }): _311.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _311.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgRepayResponse;
                fromPartial(_: {}): _311.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _311.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgCloseRequest;
                fromPartial(object: {
                    from?: string;
                    userVaultId?: string | number | import("long");
                }): _311.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _311.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.MsgCloseResponse;
                fromPartial(_: {}): _311.MsgCloseResponse;
            };
            QueryAllVaultsRequest: {
                encode(message: _310.QueryAllVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.QueryAllVaultsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _310.QueryAllVaultsRequest;
            };
            QueryAllVaultsResponse: {
                encode(message: _310.QueryAllVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.QueryAllVaultsResponse;
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
                }): _310.QueryAllVaultsResponse;
            };
            QueryVaultRequest: {
                encode(message: _310.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.QueryVaultRequest;
                fromPartial(object: {
                    id?: string | number | import("long");
                }): _310.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _310.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.QueryVaultResponse;
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
                }): _310.QueryVaultResponse;
            };
            Params: {
                encode(_: _309.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.Params;
                fromPartial(_: {}): _309.Params;
            };
            GenesisState: {
                encode(message: _308.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.GenesisState;
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
                }): _308.GenesisState;
            };
            EventCreateVault: {
                encode(message: _307.EventCreateVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.EventCreateVault;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                }): _307.EventCreateVault;
            };
            EventCloseVault: {
                encode(message: _307.EventCloseVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.EventCloseVault;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                }): _307.EventCloseVault;
            };
            EventDepositCollateral: {
                encode(message: _307.EventDepositCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.EventDepositCollateral;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _307.EventDepositCollateral;
            };
            EventWithdrawCollateral: {
                encode(message: _307.EventWithdrawCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.EventWithdrawCollateral;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _307.EventWithdrawCollateral;
            };
            EventDrawDebt: {
                encode(message: _307.EventDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.EventDrawDebt;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _307.EventDrawDebt;
            };
            EventRepayDebt: {
                encode(message: _307.EventRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.EventRepayDebt;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _307.EventRepayDebt;
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
                auth: {
                    v1: _513.MsgClientImpl;
                };
                claim: {
                    v1: _514.MsgClientImpl;
                };
                emissions: {
                    v1: _515.MsgClientImpl;
                };
                farming: {
                    v1: _516.MsgClientImpl;
                };
                grants: {
                    v1: _517.MsgClientImpl;
                };
                incentive: {
                    v1: _518.MsgClientImpl;
                };
                lend: {
                    v1: _519.MsgClientImpl;
                };
                liquidity: {
                    v1: _520.MsgClientImpl;
                };
                lock: {
                    v1: _521.MsgClientImpl;
                };
                nft: {
                    v1: _522.MsgClientImpl;
                };
                ons: {
                    v1: _523.MsgClientImpl;
                };
                prices: {
                    v1: _524.MsgClientImpl;
                };
                reserve: {
                    v1: _525.MsgClientImpl;
                };
                token: {
                    v1: _526.MsgClientImpl;
                };
                vault: {
                    v1: _527.MsgClientImpl;
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
                auth: {
                    v1: {
                        params(request?: _176.QueryParamsRequest): Promise<_176.QueryParamsResponse>;
                        interchainAccountAddress(request: _176.QueryInterchainAccountAddressRequest): Promise<_176.QueryInterchainAccountAddressResponse>;
                    };
                };
                claim: {
                    v1: {
                        params(request?: _183.QueryParamsRequest): Promise<_183.QueryParamsResponse>;
                        claimRecord(request: _183.QueryGetClaimRecordRequest): Promise<_183.QueryGetClaimRecordResponse>;
                        claimRecordAll(request?: _183.QueryAllClaimRecordRequest): Promise<_183.QueryAllClaimRecordResponse>;
                        goal(request: _183.QueryGetGoalRequest): Promise<_183.QueryGetGoalResponse>;
                        goalAll(request?: _183.QueryAllGoalRequest): Promise<_183.QueryAllGoalResponse>;
                        airdropSupply(request?: _183.QueryGetAirdropSupplyRequest): Promise<_183.QueryGetAirdropSupplyResponse>;
                        initialClaim(request?: _183.QueryGetInitialClaimRequest): Promise<_183.QueryGetInitialClaimResponse>;
                    };
                };
                emissions: {
                    v1: {
                        queryEmission(request: _188.QueryEmissionRequest): Promise<_188.QueryEmissionResponse>;
                        queryAllEmissions(request?: _188.QueryAllEmissionsRequest): Promise<_188.QueryAllEmissionsResponse>;
                    };
                };
                epoch: {
                    v1: {
                        epochs(request?: _193.QueryEpochsRequest): Promise<_193.QueryEpochsResponse>;
                        epoch(request: _193.QueryEpochRequest): Promise<_193.QueryEpochResponse>;
                        currentEpoch(request: _193.QueryCurrentEpochRequest): Promise<_193.QueryCurrentEpochResponse>;
                    };
                };
                farming: {
                    v1: {
                        params(request?: _199.QueryParamsRequest): Promise<_199.QueryParamsResponse>;
                        plans(request: _199.QueryPlansRequest): Promise<_199.QueryPlansResponse>;
                        plan(request: _199.QueryPlanRequest): Promise<_199.QueryPlanResponse>;
                        stakings(request: _199.QueryStakingsRequest): Promise<_199.QueryStakingsResponse>;
                        totalStakings(request: _199.QueryTotalStakingsRequest): Promise<_199.QueryTotalStakingsResponse>;
                        rewards(request: _199.QueryRewardsRequest): Promise<_199.QueryRewardsResponse>;
                        currentEpochDays(request?: _199.QueryCurrentEpochDaysRequest): Promise<_199.QueryCurrentEpochDaysResponse>;
                    };
                };
                fees: {
                    v1: {
                        feeTokens(request?: _205.QueryFeeTokensRequest): Promise<_205.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _205.QueryDenomSpotPriceRequest): Promise<_205.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _205.QueryDenomPoolIdRequest): Promise<_205.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _205.QueryBaseDenomRequest): Promise<_205.QueryBaseDenomResponse>;
                    };
                };
                grants: {
                    v1: {
                        params(request?: _210.QueryParamsRequest): Promise<_210.QueryParamsResponse>;
                        auctions(request: _210.QueryAuctionsRequest): Promise<_210.QueryAuctionsResponse>;
                        auction(request: _210.QueryAuctionRequest): Promise<_210.QueryAuctionResponse>;
                        allowedBidder(request: _210.QueryAllowedBidderRequest): Promise<_210.QueryAllowedBidderResponse>;
                        allowedBidders(request: _210.QueryAllowedBiddersRequest): Promise<_210.QueryAllowedBiddersResponse>;
                        bids(request: _210.QueryBidsRequest): Promise<_210.QueryBidsResponse>;
                        bid(request: _210.QueryBidRequest): Promise<_210.QueryBidResponse>;
                        vestings(request: _210.QueryVestingsRequest): Promise<_210.QueryVestingsResponse>;
                    };
                };
                icq: {
                    v1: {
                        params(request?: _217.QueryParamsRequest): Promise<_217.QueryParamsResponse>;
                    };
                };
                incentive: {
                    v1: {
                        params(request?: _226.QueryParamsRequest): Promise<_226.QueryParamsResponse>;
                        marketMakers(request: _226.QueryMarketMakersRequest): Promise<_226.QueryMarketMakersResponse>;
                        incentive(request: _226.QueryIncentiveRequest): Promise<_226.QueryIncentiveResponse>;
                    };
                };
                lend: {
                    v1: {
                        params(request?: _234.QueryParamsRequest): Promise<_234.QueryParamsResponse>;
                        loan(request: _234.QueryGetLoanRequest): Promise<_234.QueryGetLoanResponse>;
                        loanAll(request?: _234.QueryAllLoanRequest): Promise<_234.QueryAllLoanResponse>;
                    };
                };
                liquidity: {
                    v1: {
                        params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                        pools(request: _245.QueryPoolsRequest): Promise<_245.QueryPoolsResponse>;
                        pool(request: _245.QueryPoolRequest): Promise<_245.QueryPoolResponse>;
                        poolByReserveAddress(request: _245.QueryPoolByReserveAddressRequest): Promise<_245.QueryPoolResponse>;
                        poolByPoolCoinDenom(request: _245.QueryPoolByPoolCoinDenomRequest): Promise<_245.QueryPoolResponse>;
                        pairs(request: _245.QueryPairsRequest): Promise<_245.QueryPairsResponse>;
                        pair(request: _245.QueryPairRequest): Promise<_245.QueryPairResponse>;
                        depositRequests(request: _245.QueryDepositRequestsRequest): Promise<_245.QueryDepositRequestsResponse>;
                        depositRequest(request: _245.QueryDepositRequestRequest): Promise<_245.QueryDepositRequestResponse>;
                        withdrawRequests(request: _245.QueryWithdrawRequestsRequest): Promise<_245.QueryWithdrawRequestsResponse>;
                        withdrawRequest(request: _245.QueryWithdrawRequestRequest): Promise<_245.QueryWithdrawRequestResponse>;
                        orders(request: _245.QueryOrdersRequest): Promise<_245.QueryOrdersResponse>;
                        order(request: _245.QueryOrderRequest): Promise<_245.QueryOrderResponse>;
                        ordersByOrderer(request: _245.QueryOrdersByOrdererRequest): Promise<_245.QueryOrdersResponse>;
                        orderBooks(request: _245.QueryOrderBooksRequest): Promise<_245.QueryOrderBooksResponse>;
                        numMMOrders(request: _245.QueryNumMMOrdersRequest): Promise<_245.QueryNumMMOrdersResponse>;
                    };
                };
                lock: {
                    v1: {
                        queryParams(request?: _252.QueryParamsRequest): Promise<_252.QueryParamsResponse>;
                    };
                };
                market: {
                    v1: {
                        params(request?: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
                    };
                };
                mint: {
                    v1: {
                        params(request?: _263.QueryParamsRequest): Promise<_263.QueryParamsResponse>;
                        inflation(request?: _263.QueryInflationRequest): Promise<_263.QueryInflationResponse>;
                        annualProvisions(request?: _263.QueryAnnualProvisionsRequest): Promise<_263.QueryAnnualProvisionsResponse>;
                        distribution(request?: _263.QueryDistributionRequest): Promise<_263.QueryDistributionResponse>;
                        lastBlockTime(request?: _263.QueryLastBlockTimeRequest): Promise<_263.QueryLastBlockTimeResponse>;
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
                        params(request?: _289.QueryParamsRequest): Promise<_289.QueryParamsResponse>;
                        bandPricesResult(request: _289.QueryBandPricesRequest): Promise<_289.QueryBandPricesResponse>;
                        lastBandPricesId(request?: _289.QueryLastBandPricesIdRequest): Promise<_289.QueryLastBandPricesIdResponse>;
                        queryRoundData(request: _289.QueryRoundDataRequest): Promise<_289.QueryRoundDataResponse>;
                        latestRoundData(request: _289.QueryLatestRoundDataRequest): Promise<_289.QueryLatestRoundDataResponse>;
                        queryAllModuleOwner(request?: _289.QueryModuleOwnerRequest): Promise<_289.QueryModuleOwnerResponse>;
                        queryFeedByFeedId(request: _289.QueryFeedByIdRequest): Promise<_289.QueryFeedByIdResponse>;
                        queryAccountInfo(request: _289.QueryAccountRequest): Promise<_289.QueryAccountResponse>;
                        queryFeedRewardAvailStrategy(request?: _289.QueryFeedRewardAvailStrategiesRequest): Promise<_289.QueryFeedRewardAvailStrategiesResponse>;
                    };
                };
                ratelimit: {
                    v1: {
                        params(request?: _294.QueryParamsRequest): Promise<_294.QueryParamsResponse>;
                    };
                };
                reserve: {
                    v1: {
                        params(request?: _299.QueryParamsRequest): Promise<_299.QueryParamsResponse>;
                        getDenoms(request?: _299.QueryGetDenomsRequest): Promise<_299.QueryGetDenomsResponse>;
                        getDenom(request: _299.QueryGetDenomRequest): Promise<_299.QueryGetDenomResponse>;
                        getDenomWhitelist(request: _299.QueryGetDenomWhitelistRequest): Promise<_299.QueryGetDenomWhitelistResponse>;
                        denomsFromCreator(request: _299.QueryDenomsFromCreatorRequest): Promise<_299.QueryDenomsFromCreatorResponse>;
                    };
                };
                token: {
                    v1: {
                        token(request: _304.QueryTokenRequest): Promise<_304.QueryTokenResponse>;
                        tokens(request: _304.QueryTokensRequest): Promise<_304.QueryTokensResponse>;
                        fees(request: _304.QueryFeesRequest): Promise<_304.QueryFeesResponse>;
                        params(request?: _304.QueryParamsRequest): Promise<_304.QueryParamsResponse>;
                        burn(request?: _304.QueryBurnRequest): Promise<_304.QueryBurnResponse>;
                    };
                };
                vault: {
                    v1: {
                        queryVault(request: _310.QueryVaultRequest): Promise<_310.QueryVaultResponse>;
                        queryAllVaults(request?: _310.QueryAllVaultsRequest): Promise<_310.QueryAllVaultsResponse>;
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
                auth: {
                    v1: _471.LCDQueryClient;
                };
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
