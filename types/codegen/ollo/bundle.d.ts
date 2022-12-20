import * as _14 from "./claim/claim";
import * as _15 from "./claim/genesis";
import * as _16 from "./claim/packet";
import * as _17 from "./claim/params";
import * as _18 from "./claim/query";
import * as _19 from "./claim/tx";
import * as _20 from "./inflation/genesis";
import * as _21 from "./inflation/params";
import * as _22 from "./inflation/query";
import * as _24 from "./liquidity/genesis";
import * as _25 from "./liquidity/liquidity";
import * as _26 from "./liquidity/params";
import * as _27 from "./liquidity/query";
import * as _28 from "./liquidity/tx";
import * as _29 from "./loan/genesis";
import * as _30 from "./loan/loans";
import * as _31 from "./loan/packet";
import * as _32 from "./loan/params";
import * as _33 from "./loan/query";
import * as _34 from "./loan/tx";
import * as _35 from "./market/genesis";
import * as _36 from "./market/packet";
import * as _37 from "./market/params";
import * as _38 from "./market/query";
import * as _40 from "./ons/genesis";
import * as _41 from "./ons/packet";
import * as _42 from "./ons/params";
import * as _43 from "./ons/query";
import * as _44 from "./ons/tx";
import * as _45 from "./ons/whois";
import * as _46 from "./oracle/genesis";
import * as _47 from "./oracle/packet";
import * as _48 from "./oracle/params";
import * as _49 from "./oracle/prices";
import * as _50 from "./oracle/query";
import * as _51 from "./oracle/tx";
import * as _52 from "./reserve/genesis";
import * as _53 from "./reserve/params";
import * as _54 from "./reserve/query";
import * as _77 from "./claim/query.lcd";
import * as _78 from "./inflation/query.lcd";
import * as _79 from "./liquidity/query.lcd";
import * as _80 from "./loan/query.lcd";
import * as _81 from "./market/query.lcd";
import * as _82 from "./ons/query.lcd";
import * as _83 from "./oracle/query.lcd";
import * as _84 from "./reserve/query.lcd";
import * as _85 from "./claim/query.rpc.Query";
import * as _86 from "./inflation/query.rpc.Query";
import * as _87 from "./liquidity/query.rpc.Query";
import * as _88 from "./loan/query.rpc.Query";
import * as _89 from "./market/query.rpc.Query";
import * as _90 from "./ons/query.rpc.Query";
import * as _91 from "./oracle/query.rpc.Query";
import * as _92 from "./reserve/query.rpc.Query";
import * as _93 from "./claim/tx.rpc.msg";
import * as _94 from "./liquidity/tx.rpc.msg";
import * as _95 from "./loan/tx.rpc.msg";
import * as _96 from "./ons/tx.rpc.msg";
import * as _97 from "./oracle/tx.rpc.msg";
export declare namespace ollo {
    const claim: {
        MsgClientImpl: typeof _93.MsgClientImpl;
        QueryClientImpl: typeof _85.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
            airdrops(request?: _18.QueryAirdropsRequest): Promise<_18.QueryAirdropsResponse>;
            airdrop(request: _18.QueryAirdropRequest): Promise<_18.QueryAirdropResponse>;
            claimRecord(request: _18.QueryClaimRecordRequest): Promise<_18.QueryClaimRecordResponse>;
        };
        LCDQueryClient: typeof _77.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claim(value: _19.MsgClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claim(value: _19.MsgClaim): {
                    typeUrl: string;
                    value: _19.MsgClaim;
                };
            };
            fromPartial: {
                claim(value: _19.MsgClaim): {
                    typeUrl: string;
                    value: _19.MsgClaim;
                };
            };
        };
        AminoConverter: {
            "/ollo.claim.MsgClaim": {
                aminoType: string;
                toAmino: ({ airdropId, recipient, conditionType }: _19.MsgClaim) => {
                    airdrop_id: string;
                    recipient: string;
                    condition_type: number;
                };
                fromAmino: ({ airdrop_id, recipient, condition_type }: {
                    airdrop_id: string;
                    recipient: string;
                    condition_type: number;
                }) => _19.MsgClaim;
            };
        };
        MsgClaim: {
            encode(message: _19.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgClaim;
            fromPartial(object: {
                airdropId?: string | number | import("long");
                recipient?: string;
                conditionType?: _14.ConditionType;
            }): _19.MsgClaim;
        };
        MsgClaimResponse: {
            encode(_: _19.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgClaimResponse;
            fromPartial(_: {}): _19.MsgClaimResponse;
        };
        QueryParamsRequest: {
            encode(_: _18.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsRequest;
            fromPartial(_: {}): _18.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _18.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsResponse;
            fromPartial(object: {
                params?: {
                    airdrops?: {
                        id?: string | number | import("long");
                        sourceAddress?: string;
                        conditions?: _14.ConditionType[];
                        startTime?: Date;
                        endTime?: Date;
                    }[];
                    claimRecords?: {
                        airdropId?: string | number | import("long");
                        recipient?: string;
                        initialClaimableCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        claimableCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        claimedConditions?: _14.ConditionType[];
                    }[];
                };
            }): _18.QueryParamsResponse;
        };
        QueryAirdropsRequest: {
            encode(message: _18.QueryAirdropsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAirdropsRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _18.QueryAirdropsRequest;
        };
        QueryAirdropsResponse: {
            encode(message: _18.QueryAirdropsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAirdropsResponse;
            fromPartial(object: {
                airdrops?: {
                    id?: string | number | import("long");
                    sourceAddress?: string;
                    conditions?: _14.ConditionType[];
                    startTime?: Date;
                    endTime?: Date;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _18.QueryAirdropsResponse;
        };
        QueryAirdropRequest: {
            encode(message: _18.QueryAirdropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAirdropRequest;
            fromPartial(object: {
                airdropId?: string | number | import("long");
            }): _18.QueryAirdropRequest;
        };
        QueryAirdropResponse: {
            encode(message: _18.QueryAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAirdropResponse;
            fromPartial(object: {
                airdrop?: {
                    id?: string | number | import("long");
                    sourceAddress?: string;
                    conditions?: _14.ConditionType[];
                    startTime?: Date;
                    endTime?: Date;
                };
            }): _18.QueryAirdropResponse;
        };
        QueryClaimRecordRequest: {
            encode(message: _18.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryClaimRecordRequest;
            fromPartial(object: {
                airdropId?: string | number | import("long");
                recipient?: string;
            }): _18.QueryClaimRecordRequest;
        };
        QueryClaimRecordResponse: {
            encode(message: _18.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryClaimRecordResponse;
            fromPartial(object: {
                claimRecord?: {
                    airdropId?: string | number | import("long");
                    recipient?: string;
                    initialClaimableCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    claimableCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    claimedConditions?: _14.ConditionType[];
                };
            }): _18.QueryClaimRecordResponse;
        };
        Params: {
            encode(message: _17.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Params;
            fromPartial(object: {
                airdrops?: {
                    id?: string | number | import("long");
                    sourceAddress?: string;
                    conditions?: _14.ConditionType[];
                    startTime?: Date;
                    endTime?: Date;
                }[];
                claimRecords?: {
                    airdropId?: string | number | import("long");
                    recipient?: string;
                    initialClaimableCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    claimableCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    claimedConditions?: _14.ConditionType[];
                }[];
            }): _17.Params;
        };
        ClaimPacketData: {
            encode(message: _16.ClaimPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ClaimPacketData;
            fromPartial(object: {
                noData?: {};
            }): _16.ClaimPacketData;
        };
        NoData: {
            encode(_: _16.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.NoData;
            fromPartial(_: {}): _16.NoData;
        };
        GenesisState: {
            encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
            fromPartial(object: {
                params?: {
                    airdrops?: {
                        id?: string | number | import("long");
                        sourceAddress?: string;
                        conditions?: _14.ConditionType[];
                        startTime?: Date;
                        endTime?: Date;
                    }[];
                    claimRecords?: {
                        airdropId?: string | number | import("long");
                        recipient?: string;
                        initialClaimableCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        claimableCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        claimedConditions?: _14.ConditionType[];
                    }[];
                };
            }): _15.GenesisState;
        };
        conditionTypeFromJSON(object: any): _14.ConditionType;
        conditionTypeToJSON(object: _14.ConditionType): string;
        ConditionType: typeof _14.ConditionType;
        ConditionTypeSDKType: typeof _14.ConditionType;
        Airdrop: {
            encode(message: _14.Airdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Airdrop;
            fromPartial(object: {
                id?: string | number | import("long");
                sourceAddress?: string;
                conditions?: _14.ConditionType[];
                startTime?: Date;
                endTime?: Date;
            }): _14.Airdrop;
        };
        ClaimRecord: {
            encode(message: _14.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ClaimRecord;
            fromPartial(object: {
                airdropId?: string | number | import("long");
                recipient?: string;
                initialClaimableCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                claimableCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                claimedConditions?: _14.ConditionType[];
            }): _14.ClaimRecord;
        };
    };
    const inflation: {
        QueryClientImpl: typeof _86.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _78.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsRequest;
            fromPartial(_: {}): _22.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _22.QueryParamsResponse;
        };
        Params: {
            encode(_: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Params;
            fromPartial(_: {}): _21.Params;
        };
        GenesisState: {
            encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GenesisState;
            fromPartial(object: {
                params?: {};
            }): _20.GenesisState;
        };
    };
    const liquidity: {
        MsgClientImpl: typeof _94.MsgClientImpl;
        QueryClientImpl: typeof _87.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            liquidityPools(request: _27.QueryLiquidityPoolsRequest): Promise<_27.QueryLiquidityPoolsResponse>;
            liquidityPool(request: _27.QueryLiquidityPoolRequest): Promise<_27.QueryLiquidityPoolResponse>;
            liquidityPoolByPoolCoinDenom(request: _27.QueryLiquidityPoolByPoolCoinDenomRequest): Promise<_27.QueryLiquidityPoolResponse>;
            liquidityPoolByReserveAcc(request: _27.QueryLiquidityPoolByReserveAccRequest): Promise<_27.QueryLiquidityPoolResponse>;
            pairs(request: _27.QueryPairsRequest): Promise<_27.QueryPairsResponse>;
            pair(request: _27.QueryPairRequest): Promise<_27.QueryPairResponse>;
            depositRequests(request: _27.QueryDepositRequestsRequest): Promise<_27.QueryDepositRequestsResponse>;
            depositRequest(request: _27.QueryDepositRequestRequest): Promise<_27.QueryDepositRequestResponse>;
            withdrawRequests(request: _27.QueryWithdrawRequestsRequest): Promise<_27.QueryWithdrawRequestsResponse>;
            withdrawRequest(request: _27.QueryWithdrawRequestRequest): Promise<_27.QueryWithdrawRequestResponse>;
            orders(request: _27.QueryOrdersRequest): Promise<_27.QueryOrdersResponse>;
            order(request: _27.QueryOrderRequest): Promise<_27.QueryOrderResponse>;
            ordersByOrderer(request: _27.QueryOrdersByOrdererRequest): Promise<_27.QueryOrdersResponse>;
            orderBooks(request: _27.QueryOrderBooksRequest): Promise<_27.QueryOrderBooksResponse>;
            params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _79.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createPool(value: _28.MsgCreatePool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createPair(value: _28.MsgCreatePair): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createPoolCapped(value: _28.MsgCreatePoolCapped): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deposit(value: _28.MsgDeposit): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                withdraw(value: _28.MsgWithdraw): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                orderLimit(value: _28.MsgOrderLimit): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                orderMarket(value: _28.MsgOrderMarket): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                orderMarketMaking(value: _28.MsgOrderMarketMaking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelOrder(value: _28.MsgCancelOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelAllOrders(value: _28.MsgCancelAllOrders): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelMarketMakingOrder(value: _28.MsgCancelMarketMakingOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createPool(value: _28.MsgCreatePool): {
                    typeUrl: string;
                    value: _28.MsgCreatePool;
                };
                createPair(value: _28.MsgCreatePair): {
                    typeUrl: string;
                    value: _28.MsgCreatePair;
                };
                createPoolCapped(value: _28.MsgCreatePoolCapped): {
                    typeUrl: string;
                    value: _28.MsgCreatePoolCapped;
                };
                deposit(value: _28.MsgDeposit): {
                    typeUrl: string;
                    value: _28.MsgDeposit;
                };
                withdraw(value: _28.MsgWithdraw): {
                    typeUrl: string;
                    value: _28.MsgWithdraw;
                };
                orderLimit(value: _28.MsgOrderLimit): {
                    typeUrl: string;
                    value: _28.MsgOrderLimit;
                };
                orderMarket(value: _28.MsgOrderMarket): {
                    typeUrl: string;
                    value: _28.MsgOrderMarket;
                };
                orderMarketMaking(value: _28.MsgOrderMarketMaking): {
                    typeUrl: string;
                    value: _28.MsgOrderMarketMaking;
                };
                cancelOrder(value: _28.MsgCancelOrder): {
                    typeUrl: string;
                    value: _28.MsgCancelOrder;
                };
                cancelAllOrders(value: _28.MsgCancelAllOrders): {
                    typeUrl: string;
                    value: _28.MsgCancelAllOrders;
                };
                cancelMarketMakingOrder(value: _28.MsgCancelMarketMakingOrder): {
                    typeUrl: string;
                    value: _28.MsgCancelMarketMakingOrder;
                };
            };
            fromPartial: {
                createPool(value: _28.MsgCreatePool): {
                    typeUrl: string;
                    value: _28.MsgCreatePool;
                };
                createPair(value: _28.MsgCreatePair): {
                    typeUrl: string;
                    value: _28.MsgCreatePair;
                };
                createPoolCapped(value: _28.MsgCreatePoolCapped): {
                    typeUrl: string;
                    value: _28.MsgCreatePoolCapped;
                };
                deposit(value: _28.MsgDeposit): {
                    typeUrl: string;
                    value: _28.MsgDeposit;
                };
                withdraw(value: _28.MsgWithdraw): {
                    typeUrl: string;
                    value: _28.MsgWithdraw;
                };
                orderLimit(value: _28.MsgOrderLimit): {
                    typeUrl: string;
                    value: _28.MsgOrderLimit;
                };
                orderMarket(value: _28.MsgOrderMarket): {
                    typeUrl: string;
                    value: _28.MsgOrderMarket;
                };
                orderMarketMaking(value: _28.MsgOrderMarketMaking): {
                    typeUrl: string;
                    value: _28.MsgOrderMarketMaking;
                };
                cancelOrder(value: _28.MsgCancelOrder): {
                    typeUrl: string;
                    value: _28.MsgCancelOrder;
                };
                cancelAllOrders(value: _28.MsgCancelAllOrders): {
                    typeUrl: string;
                    value: _28.MsgCancelAllOrders;
                };
                cancelMarketMakingOrder(value: _28.MsgCancelMarketMakingOrder): {
                    typeUrl: string;
                    value: _28.MsgCancelMarketMakingOrder;
                };
            };
        };
        AminoConverter: {
            "/ollo.liquidity.MsgCreatePool": {
                aminoType: string;
                toAmino: ({ creator, typeId, pairId, depositCoins }: _28.MsgCreatePool) => {
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
                }) => _28.MsgCreatePool;
            };
            "/ollo.liquidity.MsgCreatePair": {
                aminoType: string;
                toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: _28.MsgCreatePair) => {
                    creator: string;
                    base_coin_denom: string;
                    quote_coin_denom: string;
                };
                fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: {
                    creator: string;
                    base_coin_denom: string;
                    quote_coin_denom: string;
                }) => _28.MsgCreatePair;
            };
            "/ollo.liquidity.MsgCreatePoolCapped": {
                aminoType: string;
                toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: _28.MsgCreatePoolCapped) => {
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
                }) => _28.MsgCreatePoolCapped;
            };
            "/ollo.liquidity.MsgDeposit": {
                aminoType: string;
                toAmino: ({ depositor, poolId, depositCoins }: _28.MsgDeposit) => {
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
                }) => _28.MsgDeposit;
            };
            "/ollo.liquidity.MsgWithdraw": {
                aminoType: string;
                toAmino: ({ withdrawer, poolId, poolCoin }: _28.MsgWithdraw) => {
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
                }) => _28.MsgWithdraw;
            };
            "/ollo.liquidity.MsgOrderLimit": {
                aminoType: string;
                toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: _28.MsgOrderLimit) => {
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
                }) => _28.MsgOrderLimit;
            };
            "/ollo.liquidity.MsgOrderMarket": {
                aminoType: string;
                toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: _28.MsgOrderMarket) => {
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
                }) => _28.MsgOrderMarket;
            };
            "/ollo.liquidity.MsgOrderMarketMaking": {
                aminoType: string;
                toAmino: ({ orderer, pairId, maxSellPrice, minSellPrice, sellAmount, maxBuyPrice, minBuyPrice, buyAmount, orderLifespan }: _28.MsgOrderMarketMaking) => {
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
                }) => _28.MsgOrderMarketMaking;
            };
            "/ollo.liquidity.MsgCancelOrder": {
                aminoType: string;
                toAmino: ({ orderAddr, pairId, orderId }: _28.MsgCancelOrder) => {
                    order_addr: string;
                    pair_id: string;
                    order_id: string;
                };
                fromAmino: ({ order_addr, pair_id, order_id }: {
                    order_addr: string;
                    pair_id: string;
                    order_id: string;
                }) => _28.MsgCancelOrder;
            };
            "/ollo.liquidity.MsgCancelAllOrders": {
                aminoType: string;
                toAmino: ({ orderAddr, pairIds }: _28.MsgCancelAllOrders) => {
                    order_addr: string;
                    pair_ids: string[];
                };
                fromAmino: ({ order_addr, pair_ids }: {
                    order_addr: string;
                    pair_ids: string[];
                }) => _28.MsgCancelAllOrders;
            };
            "/ollo.liquidity.MsgCancelMarketMakingOrder": {
                aminoType: string;
                toAmino: ({ orderer, pairId }: _28.MsgCancelMarketMakingOrder) => {
                    orderer: string;
                    pair_id: string;
                };
                fromAmino: ({ orderer, pair_id }: {
                    orderer: string;
                    pair_id: string;
                }) => _28.MsgCancelMarketMakingOrder;
            };
        };
        MsgCreatePair: {
            encode(message: _28.MsgCreatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCreatePair;
            fromPartial(object: {
                creator?: string;
                baseCoinDenom?: string;
                quoteCoinDenom?: string;
            }): _28.MsgCreatePair;
        };
        MsgCreatePairResponse: {
            encode(_: _28.MsgCreatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCreatePairResponse;
            fromPartial(_: {}): _28.MsgCreatePairResponse;
        };
        MsgCreatePool: {
            encode(message: _28.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCreatePool;
            fromPartial(object: {
                creator?: string;
                typeId?: string | number | import("long");
                pairId?: string | number | import("long");
                depositCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _28.MsgCreatePool;
        };
        MsgCreatePoolResponse: {
            encode(_: _28.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCreatePoolResponse;
            fromPartial(_: {}): _28.MsgCreatePoolResponse;
        };
        MsgCreatePoolCapped: {
            encode(message: _28.MsgCreatePoolCapped, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCreatePoolCapped;
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
            }): _28.MsgCreatePoolCapped;
        };
        MsgCreatePoolCappedResponse: {
            encode(_: _28.MsgCreatePoolCappedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCreatePoolCappedResponse;
            fromPartial(_: {}): _28.MsgCreatePoolCappedResponse;
        };
        MsgDeposit: {
            encode(message: _28.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgDeposit;
            fromPartial(object: {
                depositor?: string;
                poolId?: string | number | import("long");
                depositCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _28.MsgDeposit;
        };
        MsgDepositResponse: {
            encode(_: _28.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgDepositResponse;
            fromPartial(_: {}): _28.MsgDepositResponse;
        };
        MsgWithdraw: {
            encode(message: _28.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdraw;
            fromPartial(object: {
                withdrawer?: string;
                poolId?: string | number | import("long");
                poolCoin?: {
                    denom?: string;
                    amount?: string;
                };
            }): _28.MsgWithdraw;
        };
        MsgWithdrawResponse: {
            encode(_: _28.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawResponse;
            fromPartial(_: {}): _28.MsgWithdrawResponse;
        };
        MsgOrderLimit: {
            encode(message: _28.MsgOrderLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgOrderLimit;
            fromPartial(object: {
                orderer?: string;
                pairId?: string | number | import("long");
                direction?: _25.OrderDirection;
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
            }): _28.MsgOrderLimit;
        };
        MsgOrderLimitResponse: {
            encode(_: _28.MsgOrderLimitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgOrderLimitResponse;
            fromPartial(_: {}): _28.MsgOrderLimitResponse;
        };
        MsgOrderMarket: {
            encode(message: _28.MsgOrderMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgOrderMarket;
            fromPartial(object: {
                orderer?: string;
                pairId?: string | number | import("long");
                direction?: _25.OrderDirection;
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
            }): _28.MsgOrderMarket;
        };
        MsgOrderMarketResponse: {
            encode(_: _28.MsgOrderMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgOrderMarketResponse;
            fromPartial(_: {}): _28.MsgOrderMarketResponse;
        };
        MsgOrderMarketMaking: {
            encode(message: _28.MsgOrderMarketMaking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgOrderMarketMaking;
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
            }): _28.MsgOrderMarketMaking;
        };
        MsgOrderMarketMakingResponse: {
            encode(_: _28.MsgOrderMarketMakingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgOrderMarketMakingResponse;
            fromPartial(_: {}): _28.MsgOrderMarketMakingResponse;
        };
        MsgCancelAllOrders: {
            encode(message: _28.MsgCancelAllOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCancelAllOrders;
            fromPartial(object: {
                orderAddr?: string;
                pairIds?: (string | number | import("long"))[];
            }): _28.MsgCancelAllOrders;
        };
        MsgCancelAllOrdersResponse: {
            encode(_: _28.MsgCancelAllOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCancelAllOrdersResponse;
            fromPartial(_: {}): _28.MsgCancelAllOrdersResponse;
        };
        MsgCancelOrder: {
            encode(message: _28.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCancelOrder;
            fromPartial(object: {
                orderAddr?: string;
                pairId?: string | number | import("long");
                orderId?: string | number | import("long");
            }): _28.MsgCancelOrder;
        };
        MsgCancelOrderResponse: {
            encode(_: _28.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCancelOrderResponse;
            fromPartial(_: {}): _28.MsgCancelOrderResponse;
        };
        MsgCancelMarketMakingOrder: {
            encode(message: _28.MsgCancelMarketMakingOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCancelMarketMakingOrder;
            fromPartial(object: {
                orderer?: string;
                pairId?: string | number | import("long");
            }): _28.MsgCancelMarketMakingOrder;
        };
        MsgCancelMarketMakingOrderResponse: {
            encode(_: _28.MsgCancelMarketMakingOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCancelMarketMakingOrderResponse;
            fromPartial(_: {}): _28.MsgCancelMarketMakingOrderResponse;
        };
        QueryLiquidityPoolRequest: {
            encode(message: _27.QueryLiquidityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryLiquidityPoolRequest;
            fromPartial(object: {
                poolId?: string | number | import("long");
            }): _27.QueryLiquidityPoolRequest;
        };
        QueryLiquidityPoolResponse: {
            encode(message: _27.QueryLiquidityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryLiquidityPoolResponse;
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
            }): _27.QueryLiquidityPoolResponse;
        };
        QueryLiquidityPoolByPoolCoinDenomRequest: {
            encode(message: _27.QueryLiquidityPoolByPoolCoinDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryLiquidityPoolByPoolCoinDenomRequest;
            fromPartial(object: {
                poolCoinDenom?: string;
            }): _27.QueryLiquidityPoolByPoolCoinDenomRequest;
        };
        QueryLiquidityPoolByReserveAccRequest: {
            encode(message: _27.QueryLiquidityPoolByReserveAccRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryLiquidityPoolByReserveAccRequest;
            fromPartial(object: {
                reserveAcc?: string;
            }): _27.QueryLiquidityPoolByReserveAccRequest;
        };
        QueryLiquidityPoolsRequest: {
            encode(message: _27.QueryLiquidityPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryLiquidityPoolsRequest;
            fromPartial(object: {
                pairId?: string | number | import("long");
                inactive?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                };
            }): _27.QueryLiquidityPoolsRequest;
        };
        QueryLiquidityPoolsResponse: {
            encode(message: _27.QueryLiquidityPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryLiquidityPoolsResponse;
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
            }): _27.QueryLiquidityPoolsResponse;
        };
        QueryParamsRequest: {
            encode(_: _27.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsRequest;
            fromPartial(_: {}): _27.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _27.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsResponse;
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
            }): _27.QueryParamsResponse;
        };
        QueryPairsRequest: {
            encode(message: _27.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryPairsRequest;
            fromPartial(object: {
                denoms?: string[];
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                };
            }): _27.QueryPairsRequest;
        };
        QueryPairsResponse: {
            encode(message: _27.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryPairsResponse;
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
            }): _27.QueryPairsResponse;
        };
        QueryPairRequest: {
            encode(message: _27.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryPairRequest;
            fromPartial(object: {
                pairId?: string | number | import("long");
            }): _27.QueryPairRequest;
        };
        QueryPairResponse: {
            encode(message: _27.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryPairResponse;
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
            }): _27.QueryPairResponse;
        };
        QueryDepositRequestsRequest: {
            encode(message: _27.QueryDepositRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDepositRequestsRequest;
            fromPartial(object: {
                poolId?: string | number | import("long");
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                };
            }): _27.QueryDepositRequestsRequest;
        };
        QueryDepositRequestsResponse: {
            encode(message: _27.QueryDepositRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDepositRequestsResponse;
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
                    status?: _25.RequestStatus;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _27.QueryDepositRequestsResponse;
        };
        QueryDepositRequestRequest: {
            encode(message: _27.QueryDepositRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDepositRequestRequest;
            fromPartial(object: {
                poolId?: string | number | import("long");
                id?: string | number | import("long");
            }): _27.QueryDepositRequestRequest;
        };
        QueryDepositRequestResponse: {
            encode(message: _27.QueryDepositRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDepositRequestResponse;
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
                    status?: _25.RequestStatus;
                };
            }): _27.QueryDepositRequestResponse;
        };
        QueryWithdrawRequestsRequest: {
            encode(message: _27.QueryWithdrawRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryWithdrawRequestsRequest;
            fromPartial(object: {
                poolId?: string | number | import("long");
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                };
            }): _27.QueryWithdrawRequestsRequest;
        };
        QueryWithdrawRequestsResponse: {
            encode(message: _27.QueryWithdrawRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryWithdrawRequestsResponse;
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
                    status?: _25.RequestStatus;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _27.QueryWithdrawRequestsResponse;
        };
        QueryWithdrawRequestRequest: {
            encode(message: _27.QueryWithdrawRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryWithdrawRequestRequest;
            fromPartial(object: {
                poolId?: string | number | import("long");
                id?: string | number | import("long");
            }): _27.QueryWithdrawRequestRequest;
        };
        QueryWithdrawRequestResponse: {
            encode(message: _27.QueryWithdrawRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryWithdrawRequestResponse;
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
                    status?: _25.RequestStatus;
                };
            }): _27.QueryWithdrawRequestResponse;
        };
        QueryOrdersRequest: {
            encode(message: _27.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryOrdersRequest;
            fromPartial(object: {
                pairId?: string | number | import("long");
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                };
            }): _27.QueryOrdersRequest;
        };
        QueryOrdersResponse: {
            encode(message: _27.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryOrdersResponse;
            fromPartial(object: {
                orders?: {
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    creatorAddr?: string;
                    msgHeight?: string | number | import("long");
                    type?: _25.OrderType;
                    direction?: _25.OrderDirection;
                    status?: _25.OrderStatus;
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
            }): _27.QueryOrdersResponse;
        };
        QueryOrderRequest: {
            encode(message: _27.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryOrderRequest;
            fromPartial(object: {
                pairId?: string | number | import("long");
                id?: string | number | import("long");
            }): _27.QueryOrderRequest;
        };
        QueryOrderResponse: {
            encode(message: _27.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryOrderResponse;
            fromPartial(object: {
                order?: {
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    creatorAddr?: string;
                    msgHeight?: string | number | import("long");
                    type?: _25.OrderType;
                    direction?: _25.OrderDirection;
                    status?: _25.OrderStatus;
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
            }): _27.QueryOrderResponse;
        };
        QueryOrdersByOrdererRequest: {
            encode(message: _27.QueryOrdersByOrdererRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryOrdersByOrdererRequest;
            fromPartial(object: {
                orderer?: string;
                pairId?: string | number | import("long");
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                };
            }): _27.QueryOrdersByOrdererRequest;
        };
        QueryOrderBooksRequest: {
            encode(message: _27.QueryOrderBooksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryOrderBooksRequest;
            fromPartial(object: {
                pairIds?: (string | number | import("long"))[];
                priceUnitPowers?: number[];
                numTicks?: number;
            }): _27.QueryOrderBooksRequest;
        };
        QueryOrderBooksResponse: {
            encode(message: _27.QueryOrderBooksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryOrderBooksResponse;
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
            }): _27.QueryOrderBooksResponse;
        };
        PoolResponse: {
            encode(message: _27.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PoolResponse;
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
            }): _27.PoolResponse;
        };
        PoolBalances: {
            encode(message: _27.PoolBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PoolBalances;
            fromPartial(object: {
                baseCoin?: {
                    denom?: string;
                    amount?: string;
                };
                quoteCoin?: {
                    denom?: string;
                    amount?: string;
                };
            }): _27.PoolBalances;
        };
        OrderBookPairResponse: {
            encode(message: _27.OrderBookPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.OrderBookPairResponse;
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
            }): _27.OrderBookPairResponse;
        };
        OrderBookResponse: {
            encode(message: _27.OrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.OrderBookResponse;
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
            }): _27.OrderBookResponse;
        };
        OrderBookTickResponse: {
            encode(message: _27.OrderBookTickResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.OrderBookTickResponse;
            fromPartial(object: {
                price?: string;
                userOrderAmount?: string;
                poolOrderAmount?: string;
            }): _27.OrderBookTickResponse;
        };
        Params: {
            encode(message: _26.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Params;
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
            }): _26.Params;
        };
        OrderParams: {
            encode(message: _26.OrderParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.OrderParams;
            fromPartial(object: {
                maxLifespan?: {
                    seconds?: string | number | import("long");
                    nanos?: number;
                };
                depositExtraGas?: string | number | import("long");
                withdrawExtraGas?: string | number | import("long");
                orderExtraGas?: string | number | import("long");
            }): _26.OrderParams;
        };
        PoolParams: {
            encode(message: _26.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PoolParams;
            fromPartial(object: {
                minInitPoolSupply?: string;
                minInitPoolDeposit?: string;
                maxPriceRatio?: string;
            }): _26.PoolParams;
        };
        MarketParams: {
            encode(message: _26.MarketParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MarketParams;
            fromPartial(object: {
                precision?: number;
                batchSize?: number;
                maxAmmTicks?: number;
            }): _26.MarketParams;
        };
        FeeParams: {
            encode(message: _26.FeeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.FeeParams;
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
            }): _26.FeeParams;
        };
        orderTypeFromJSON(object: any): _25.OrderType;
        orderTypeToJSON(object: _25.OrderType): string;
        orderStatusFromJSON(object: any): _25.OrderStatus;
        orderStatusToJSON(object: _25.OrderStatus): string;
        requestStatusFromJSON(object: any): _25.RequestStatus;
        requestStatusToJSON(object: _25.RequestStatus): string;
        orderDirectionFromJSON(object: any): _25.OrderDirection;
        orderDirectionToJSON(object: _25.OrderDirection): string;
        OrderType: typeof _25.OrderType;
        OrderTypeSDKType: typeof _25.OrderType;
        OrderStatus: typeof _25.OrderStatus;
        OrderStatusSDKType: typeof _25.OrderStatus;
        RequestStatus: typeof _25.RequestStatus;
        RequestStatusSDKType: typeof _25.RequestStatus;
        OrderDirection: typeof _25.OrderDirection;
        OrderDirectionSDKType: typeof _25.OrderDirection;
        Pair: {
            encode(message: _25.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Pair;
            fromPartial(object: {
                id?: string | number | import("long");
                baseDenom?: string;
                quoteDenom?: string;
                escrowAddr?: string;
                lastOrderId?: string | number | import("long");
                lastPrice?: string;
                currentBatchId?: string | number | import("long");
            }): _25.Pair;
        };
        PoolType: {
            encode(message: _25.PoolType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PoolType;
            fromPartial(object: {
                id?: string | number | import("long");
                name?: string;
                description?: string;
                creatorAddr?: string;
            }): _25.PoolType;
        };
        PoolReserve: {
            encode(message: _25.PoolReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PoolReserve;
            fromPartial(object: {
                supply?: {
                    denom?: string;
                    amount?: string;
                };
                addr?: string;
                denom?: string;
                minSupply?: string;
                maxSupply?: string;
            }): _25.PoolReserve;
        };
        Pool: {
            encode(message: _25.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Pool;
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
            }): _25.Pool;
        };
        PoolState: {
            encode(message: _25.PoolState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PoolState;
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
            }): _25.PoolState;
        };
        PriceRange: {
            encode(message: _25.PriceRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PriceRange;
            fromPartial(object: {
                min?: string;
                max?: string;
            }): _25.PriceRange;
        };
        PoolBatch: {
            encode(message: _25.PoolBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PoolBatch;
            fromPartial(object: {
                id?: string | number | import("long");
                poolId?: string | number | import("long");
                height?: string | number | import("long");
                depositId?: string | number | import("long");
                withdrawId?: string | number | import("long");
                swapId?: string | number | import("long");
                executed?: boolean;
            }): _25.PoolBatch;
        };
        RequestDeposit: {
            encode(message: _25.RequestDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.RequestDeposit;
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
                status?: _25.RequestStatus;
            }): _25.RequestDeposit;
        };
        RequestWithdraw: {
            encode(message: _25.RequestWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.RequestWithdraw;
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
                status?: _25.RequestStatus;
            }): _25.RequestWithdraw;
        };
        Order: {
            encode(message: _25.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Order;
            fromPartial(object: {
                id?: string | number | import("long");
                pairId?: string | number | import("long");
                creatorAddr?: string;
                msgHeight?: string | number | import("long");
                type?: _25.OrderType;
                direction?: _25.OrderDirection;
                status?: _25.OrderStatus;
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
            }): _25.Order;
        };
        MarketMakingOrderId: {
            encode(message: _25.MarketMakingOrderId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MarketMakingOrderId;
            fromPartial(object: {
                pairId?: string | number | import("long");
                creatorAddr?: string;
                orderIds?: (string | number | import("long"))[];
            }): _25.MarketMakingOrderId;
        };
        GenesisState: {
            encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
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
                        type?: _25.OrderType;
                        direction?: _25.OrderDirection;
                        status?: _25.OrderStatus;
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
                        status?: _25.RequestStatus;
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
                        status?: _25.RequestStatus;
                    }[];
                    marketMakingOrderIds?: {
                        pairId?: string | number | import("long");
                        creatorAddr?: string;
                        orderIds?: (string | number | import("long"))[];
                    }[];
                };
                prevPoolId?: string | number | import("long");
                prevPairId?: string | number | import("long");
            }): _24.GenesisState;
        };
        GenesisRequestsState: {
            encode(message: _24.GenesisRequestsState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisRequestsState;
            fromPartial(object: {
                orders?: {
                    id?: string | number | import("long");
                    pairId?: string | number | import("long");
                    creatorAddr?: string;
                    msgHeight?: string | number | import("long");
                    type?: _25.OrderType;
                    direction?: _25.OrderDirection;
                    status?: _25.OrderStatus;
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
                    status?: _25.RequestStatus;
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
                    status?: _25.RequestStatus;
                }[];
                marketMakingOrderIds?: {
                    pairId?: string | number | import("long");
                    creatorAddr?: string;
                    orderIds?: (string | number | import("long"))[];
                }[];
            }): _24.GenesisRequestsState;
        };
    };
    const loan: {
        MsgClientImpl: typeof _95.MsgClientImpl;
        QueryClientImpl: typeof _88.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
            loans(request: _33.QueryGetLoansRequest): Promise<_33.QueryGetLoansResponse>;
            loansAll(request?: _33.QueryAllLoansRequest): Promise<_33.QueryAllLoansResponse>;
        };
        LCDQueryClient: typeof _80.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                requestLoan(value: _34.MsgRequestLoan): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                approveLoan(value: _34.MsgApproveLoan): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                repayLoan(value: _34.MsgRepayLoan): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                liquidateLoan(value: _34.MsgLiquidateLoan): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelLoan(value: _34.MsgCancelLoan): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                requestLoan(value: _34.MsgRequestLoan): {
                    typeUrl: string;
                    value: _34.MsgRequestLoan;
                };
                approveLoan(value: _34.MsgApproveLoan): {
                    typeUrl: string;
                    value: _34.MsgApproveLoan;
                };
                repayLoan(value: _34.MsgRepayLoan): {
                    typeUrl: string;
                    value: _34.MsgRepayLoan;
                };
                liquidateLoan(value: _34.MsgLiquidateLoan): {
                    typeUrl: string;
                    value: _34.MsgLiquidateLoan;
                };
                cancelLoan(value: _34.MsgCancelLoan): {
                    typeUrl: string;
                    value: _34.MsgCancelLoan;
                };
            };
            fromPartial: {
                requestLoan(value: _34.MsgRequestLoan): {
                    typeUrl: string;
                    value: _34.MsgRequestLoan;
                };
                approveLoan(value: _34.MsgApproveLoan): {
                    typeUrl: string;
                    value: _34.MsgApproveLoan;
                };
                repayLoan(value: _34.MsgRepayLoan): {
                    typeUrl: string;
                    value: _34.MsgRepayLoan;
                };
                liquidateLoan(value: _34.MsgLiquidateLoan): {
                    typeUrl: string;
                    value: _34.MsgLiquidateLoan;
                };
                cancelLoan(value: _34.MsgCancelLoan): {
                    typeUrl: string;
                    value: _34.MsgCancelLoan;
                };
            };
        };
        AminoConverter: {
            "/ollo.loan.MsgRequestLoan": {
                aminoType: string;
                toAmino: ({ creator, amount, fee, collateral, deadline }: _34.MsgRequestLoan) => {
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
                }) => _34.MsgRequestLoan;
            };
            "/ollo.loan.MsgApproveLoan": {
                aminoType: string;
                toAmino: ({ creator, id }: _34.MsgApproveLoan) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _34.MsgApproveLoan;
            };
            "/ollo.loan.MsgRepayLoan": {
                aminoType: string;
                toAmino: ({ creator, id }: _34.MsgRepayLoan) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _34.MsgRepayLoan;
            };
            "/ollo.loan.MsgLiquidateLoan": {
                aminoType: string;
                toAmino: ({ creator, id }: _34.MsgLiquidateLoan) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _34.MsgLiquidateLoan;
            };
            "/ollo.loan.MsgCancelLoan": {
                aminoType: string;
                toAmino: ({ creator, id }: _34.MsgCancelLoan) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _34.MsgCancelLoan;
            };
        };
        MsgRequestLoan: {
            encode(message: _34.MsgRequestLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgRequestLoan;
            fromPartial(object: {
                creator?: string;
                amount?: string;
                fee?: string;
                collateral?: string;
                deadline?: string;
            }): _34.MsgRequestLoan;
        };
        MsgRequestLoanResponse: {
            encode(_: _34.MsgRequestLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgRequestLoanResponse;
            fromPartial(_: {}): _34.MsgRequestLoanResponse;
        };
        MsgApproveLoan: {
            encode(message: _34.MsgApproveLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgApproveLoan;
            fromPartial(object: {
                creator?: string;
                id?: string | number | import("long");
            }): _34.MsgApproveLoan;
        };
        MsgApproveLoanResponse: {
            encode(_: _34.MsgApproveLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgApproveLoanResponse;
            fromPartial(_: {}): _34.MsgApproveLoanResponse;
        };
        MsgRepayLoan: {
            encode(message: _34.MsgRepayLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgRepayLoan;
            fromPartial(object: {
                creator?: string;
                id?: string | number | import("long");
            }): _34.MsgRepayLoan;
        };
        MsgRepayLoanResponse: {
            encode(_: _34.MsgRepayLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgRepayLoanResponse;
            fromPartial(_: {}): _34.MsgRepayLoanResponse;
        };
        MsgLiquidateLoan: {
            encode(message: _34.MsgLiquidateLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgLiquidateLoan;
            fromPartial(object: {
                creator?: string;
                id?: string | number | import("long");
            }): _34.MsgLiquidateLoan;
        };
        MsgLiquidateLoanResponse: {
            encode(_: _34.MsgLiquidateLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgLiquidateLoanResponse;
            fromPartial(_: {}): _34.MsgLiquidateLoanResponse;
        };
        MsgCancelLoan: {
            encode(message: _34.MsgCancelLoan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgCancelLoan;
            fromPartial(object: {
                creator?: string;
                id?: string | number | import("long");
            }): _34.MsgCancelLoan;
        };
        MsgCancelLoanResponse: {
            encode(_: _34.MsgCancelLoanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgCancelLoanResponse;
            fromPartial(_: {}): _34.MsgCancelLoanResponse;
        };
        QueryParamsRequest: {
            encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
            fromPartial(_: {}): _33.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _33.QueryParamsResponse;
        };
        QueryGetLoansRequest: {
            encode(message: _33.QueryGetLoansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryGetLoansRequest;
            fromPartial(object: {
                id?: string | number | import("long");
            }): _33.QueryGetLoansRequest;
        };
        QueryGetLoansResponse: {
            encode(message: _33.QueryGetLoansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryGetLoansResponse;
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
            }): _33.QueryGetLoansResponse;
        };
        QueryAllLoansRequest: {
            encode(message: _33.QueryAllLoansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryAllLoansRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _33.QueryAllLoansRequest;
        };
        QueryAllLoansResponse: {
            encode(message: _33.QueryAllLoansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryAllLoansResponse;
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
            }): _33.QueryAllLoansResponse;
        };
        Params: {
            encode(_: _32.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Params;
            fromPartial(_: {}): _32.Params;
        };
        LoanPacketData: {
            encode(message: _31.LoanPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.LoanPacketData;
            fromPartial(object: {
                noData?: {};
            }): _31.LoanPacketData;
        };
        NoData: {
            encode(_: _31.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.NoData;
            fromPartial(_: {}): _31.NoData;
        };
        Loans: {
            encode(message: _30.Loans, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Loans;
            fromPartial(object: {
                id?: string | number | import("long");
                amount?: string;
                fee?: string;
                collateral?: string;
                deadline?: string;
                state?: string;
                borrower?: string;
                lender?: string;
            }): _30.Loans;
        };
        GenesisState: {
            encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
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
                loansCount?: string | number | import("long");
            }): _29.GenesisState;
        };
    };
    const market: {
        QueryClientImpl: typeof _89.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _81.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _38.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsRequest;
            fromPartial(_: {}): _38.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _38.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _38.QueryParamsResponse;
        };
        Params: {
            encode(_: _37.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Params;
            fromPartial(_: {}): _37.Params;
        };
        MarketPacketData: {
            encode(message: _36.MarketPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MarketPacketData;
            fromPartial(object: {
                noData?: {};
            }): _36.MarketPacketData;
        };
        NoData: {
            encode(_: _36.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.NoData;
            fromPartial(_: {}): _36.NoData;
        };
        GenesisState: {
            encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
            }): _35.GenesisState;
        };
    };
    const ons: {
        MsgClientImpl: typeof _96.MsgClientImpl;
        QueryClientImpl: typeof _90.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
            whois(request: _43.QueryGetWhoisRequest): Promise<_43.QueryGetWhoisResponse>;
            whoisAll(request?: _43.QueryAllWhoisRequest): Promise<_43.QueryAllWhoisResponse>;
        };
        LCDQueryClient: typeof _82.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                buyName(value: _44.MsgBuyName): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sellName(value: _44.MsgSellName): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setName(value: _44.MsgSetName): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteName(value: _44.MsgDeleteName): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addThread(value: _44.MsgAddThread): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteThread(value: _44.MsgDeleteThread): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                buyName(value: _44.MsgBuyName): {
                    typeUrl: string;
                    value: _44.MsgBuyName;
                };
                sellName(value: _44.MsgSellName): {
                    typeUrl: string;
                    value: _44.MsgSellName;
                };
                setName(value: _44.MsgSetName): {
                    typeUrl: string;
                    value: _44.MsgSetName;
                };
                deleteName(value: _44.MsgDeleteName): {
                    typeUrl: string;
                    value: _44.MsgDeleteName;
                };
                addThread(value: _44.MsgAddThread): {
                    typeUrl: string;
                    value: _44.MsgAddThread;
                };
                deleteThread(value: _44.MsgDeleteThread): {
                    typeUrl: string;
                    value: _44.MsgDeleteThread;
                };
            };
            fromPartial: {
                buyName(value: _44.MsgBuyName): {
                    typeUrl: string;
                    value: _44.MsgBuyName;
                };
                sellName(value: _44.MsgSellName): {
                    typeUrl: string;
                    value: _44.MsgSellName;
                };
                setName(value: _44.MsgSetName): {
                    typeUrl: string;
                    value: _44.MsgSetName;
                };
                deleteName(value: _44.MsgDeleteName): {
                    typeUrl: string;
                    value: _44.MsgDeleteName;
                };
                addThread(value: _44.MsgAddThread): {
                    typeUrl: string;
                    value: _44.MsgAddThread;
                };
                deleteThread(value: _44.MsgDeleteThread): {
                    typeUrl: string;
                    value: _44.MsgDeleteThread;
                };
            };
        };
        AminoConverter: {
            "/ollo.ons.MsgBuyName": {
                aminoType: string;
                toAmino: ({ creator, name, bidderAddr, bid }: _44.MsgBuyName) => {
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
                }) => _44.MsgBuyName;
            };
            "/ollo.ons.MsgSellName": {
                aminoType: string;
                toAmino: ({ creator, name, sellerAddr, offer }: _44.MsgSellName) => {
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
                }) => _44.MsgSellName;
            };
            "/ollo.ons.MsgSetName": {
                aminoType: string;
                toAmino: ({ creatorAddr, name, value }: _44.MsgSetName) => {
                    creatorAddr: string;
                    name: string;
                    value: string;
                };
                fromAmino: ({ creatorAddr, name, value }: {
                    creatorAddr: string;
                    name: string;
                    value: string;
                }) => _44.MsgSetName;
            };
            "/ollo.ons.MsgDeleteName": {
                aminoType: string;
                toAmino: ({ creatorAddr, name }: _44.MsgDeleteName) => {
                    creatorAddr: string;
                    name: string;
                };
                fromAmino: ({ creatorAddr, name }: {
                    creatorAddr: string;
                    name: string;
                }) => _44.MsgDeleteName;
            };
            "/ollo.ons.MsgAddThread": {
                aminoType: string;
                toAmino: ({ creator, name, thread, addr, offer }: _44.MsgAddThread) => {
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
                }) => _44.MsgAddThread;
            };
            "/ollo.ons.MsgDeleteThread": {
                aminoType: string;
                toAmino: ({ creator, name, thread, addr }: _44.MsgDeleteThread) => {
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
                }) => _44.MsgDeleteThread;
            };
        };
        Whois: {
            encode(message: _45.Whois, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Whois;
            fromPartial(object: {
                index?: string;
                name?: string;
                value?: string;
                price?: string;
                ownerAddr?: string;
            }): _45.Whois;
        };
        MsgBuyName: {
            encode(message: _44.MsgBuyName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgBuyName;
            fromPartial(object: {
                creator?: string;
                name?: string;
                bidderAddr?: string;
                bid?: string;
            }): _44.MsgBuyName;
        };
        MsgBuyNameResponse: {
            encode(_: _44.MsgBuyNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgBuyNameResponse;
            fromPartial(_: {}): _44.MsgBuyNameResponse;
        };
        MsgSellName: {
            encode(message: _44.MsgSellName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSellName;
            fromPartial(object: {
                creator?: string;
                name?: string;
                sellerAddr?: string;
                offer?: string;
            }): _44.MsgSellName;
        };
        MsgSellNameResponse: {
            encode(_: _44.MsgSellNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSellNameResponse;
            fromPartial(_: {}): _44.MsgSellNameResponse;
        };
        MsgSetName: {
            encode(message: _44.MsgSetName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetName;
            fromPartial(object: {
                creatorAddr?: string;
                name?: string;
                value?: string;
            }): _44.MsgSetName;
        };
        MsgDeleteName: {
            encode(message: _44.MsgDeleteName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgDeleteName;
            fromPartial(object: {
                creatorAddr?: string;
                name?: string;
            }): _44.MsgDeleteName;
        };
        MsgDeleteNameResponse: {
            encode(_: _44.MsgDeleteNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgDeleteNameResponse;
            fromPartial(_: {}): _44.MsgDeleteNameResponse;
        };
        MsgSetNameResponse: {
            encode(_: _44.MsgSetNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetNameResponse;
            fromPartial(_: {}): _44.MsgSetNameResponse;
        };
        MsgAddThread: {
            encode(message: _44.MsgAddThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgAddThread;
            fromPartial(object: {
                creator?: string;
                name?: string;
                thread?: string;
                addr?: string;
                offer?: string;
            }): _44.MsgAddThread;
        };
        MsgAddThreadResponse: {
            encode(_: _44.MsgAddThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgAddThreadResponse;
            fromPartial(_: {}): _44.MsgAddThreadResponse;
        };
        MsgDeleteThread: {
            encode(message: _44.MsgDeleteThread, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgDeleteThread;
            fromPartial(object: {
                creator?: string;
                name?: string;
                thread?: string;
                addr?: string;
            }): _44.MsgDeleteThread;
        };
        MsgDeleteThreadResponse: {
            encode(_: _44.MsgDeleteThreadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgDeleteThreadResponse;
            fromPartial(_: {}): _44.MsgDeleteThreadResponse;
        };
        QueryParamsRequest: {
            encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsRequest;
            fromPartial(_: {}): _43.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _43.QueryParamsResponse;
        };
        QueryGetWhoisRequest: {
            encode(message: _43.QueryGetWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetWhoisRequest;
            fromPartial(object: {
                index?: string;
            }): _43.QueryGetWhoisRequest;
        };
        QueryGetWhoisResponse: {
            encode(message: _43.QueryGetWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetWhoisResponse;
            fromPartial(object: {
                whois?: {
                    index?: string;
                    name?: string;
                    value?: string;
                    price?: string;
                    ownerAddr?: string;
                };
            }): _43.QueryGetWhoisResponse;
        };
        QueryAllWhoisRequest: {
            encode(message: _43.QueryAllWhoisRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllWhoisRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _43.QueryAllWhoisRequest;
        };
        QueryAllWhoisResponse: {
            encode(message: _43.QueryAllWhoisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllWhoisResponse;
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
            }): _43.QueryAllWhoisResponse;
        };
        Params: {
            encode(_: _42.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Params;
            fromPartial(_: {}): _42.Params;
        };
        OnsPacketData: {
            encode(message: _41.OnsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.OnsPacketData;
            fromPartial(object: {
                noData?: {};
            }): _41.OnsPacketData;
        };
        NoData: {
            encode(_: _41.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.NoData;
            fromPartial(_: {}): _41.NoData;
        };
        GenesisState: {
            encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
                whoisList?: {
                    index?: string;
                    name?: string;
                    value?: string;
                    price?: string;
                    ownerAddr?: string;
                }[];
            }): _40.GenesisState;
        };
    };
    const oracle: {
        MsgClientImpl: typeof _97.MsgClientImpl;
        QueryClientImpl: typeof _91.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
            pricesResult(request: _50.QueryPricesRequest): Promise<_50.QueryPricesResponse>;
            lastPricesId(request?: _50.QueryLastPricesIdRequest): Promise<_50.QueryLastPricesIdResponse>;
        };
        LCDQueryClient: typeof _83.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                pricesData(value: _51.MsgPricesData): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                pricesData(value: _51.MsgPricesData): {
                    typeUrl: string;
                    value: _51.MsgPricesData;
                };
            };
            fromPartial: {
                pricesData(value: _51.MsgPricesData): {
                    typeUrl: string;
                    value: _51.MsgPricesData;
                };
            };
        };
        AminoConverter: {
            "/ollo.oracle.MsgPricesData": {
                aminoType: string;
                toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: _51.MsgPricesData) => {
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
                }) => _51.MsgPricesData;
            };
        };
        MsgPricesData: {
            encode(message: _51.MsgPricesData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgPricesData;
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
            }): _51.MsgPricesData;
        };
        MsgPricesDataResponse: {
            encode(_: _51.MsgPricesDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgPricesDataResponse;
            fromPartial(_: {}): _51.MsgPricesDataResponse;
        };
        QueryParamsRequest: {
            encode(_: _50.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryParamsRequest;
            fromPartial(_: {}): _50.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _50.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _50.QueryParamsResponse;
        };
        QueryPricesRequest: {
            encode(message: _50.QueryPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryPricesRequest;
            fromPartial(object: {
                requestId?: string | number | import("long");
            }): _50.QueryPricesRequest;
        };
        QueryPricesResponse: {
            encode(message: _50.QueryPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryPricesResponse;
            fromPartial(object: {
                result?: {
                    rates?: (string | number | import("long"))[];
                };
            }): _50.QueryPricesResponse;
        };
        QueryLastPricesIdRequest: {
            encode(_: _50.QueryLastPricesIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryLastPricesIdRequest;
            fromPartial(_: {}): _50.QueryLastPricesIdRequest;
        };
        QueryLastPricesIdResponse: {
            encode(message: _50.QueryLastPricesIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryLastPricesIdResponse;
            fromPartial(object: {
                requestId?: string | number | import("long");
            }): _50.QueryLastPricesIdResponse;
        };
        PricesCallData: {
            encode(message: _49.PricesCallData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PricesCallData;
            fromPartial(object: {
                symbols?: string[];
                multiplier?: string | number | import("long");
            }): _49.PricesCallData;
        };
        PricesResult: {
            encode(message: _49.PricesResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PricesResult;
            fromPartial(object: {
                rates?: (string | number | import("long"))[];
            }): _49.PricesResult;
        };
        Params: {
            encode(_: _48.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Params;
            fromPartial(_: {}): _48.Params;
        };
        OraclePacketData: {
            encode(message: _47.OraclePacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.OraclePacketData;
            fromPartial(object: {
                noData?: {};
            }): _47.OraclePacketData;
        };
        NoData: {
            encode(_: _47.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.NoData;
            fromPartial(_: {}): _47.NoData;
        };
        GenesisState: {
            encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
            }): _46.GenesisState;
        };
    };
    const reserve: {
        QueryClientImpl: typeof _92.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _84.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
            fromPartial(_: {}): _54.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _54.QueryParamsResponse;
        };
        Params: {
            encode(_: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Params;
            fromPartial(_: {}): _53.Params;
        };
        GenesisState: {
            encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
            fromPartial(object: {
                params?: {};
            }): _52.GenesisState;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            ollo: {
                claim: _93.MsgClientImpl;
                liquidity: _94.MsgClientImpl;
                loan: _95.MsgClientImpl;
                ons: _96.MsgClientImpl;
                oracle: _97.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            ollo: {
                claim: {
                    params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                    airdrops(request?: _18.QueryAirdropsRequest): Promise<_18.QueryAirdropsResponse>;
                    airdrop(request: _18.QueryAirdropRequest): Promise<_18.QueryAirdropResponse>;
                    claimRecord(request: _18.QueryClaimRecordRequest): Promise<_18.QueryClaimRecordResponse>;
                };
                inflation: {
                    params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                };
                liquidity: {
                    liquidityPools(request: _27.QueryLiquidityPoolsRequest): Promise<_27.QueryLiquidityPoolsResponse>;
                    liquidityPool(request: _27.QueryLiquidityPoolRequest): Promise<_27.QueryLiquidityPoolResponse>;
                    liquidityPoolByPoolCoinDenom(request: _27.QueryLiquidityPoolByPoolCoinDenomRequest): Promise<_27.QueryLiquidityPoolResponse>;
                    liquidityPoolByReserveAcc(request: _27.QueryLiquidityPoolByReserveAccRequest): Promise<_27.QueryLiquidityPoolResponse>;
                    pairs(request: _27.QueryPairsRequest): Promise<_27.QueryPairsResponse>;
                    pair(request: _27.QueryPairRequest): Promise<_27.QueryPairResponse>;
                    depositRequests(request: _27.QueryDepositRequestsRequest): Promise<_27.QueryDepositRequestsResponse>;
                    depositRequest(request: _27.QueryDepositRequestRequest): Promise<_27.QueryDepositRequestResponse>;
                    withdrawRequests(request: _27.QueryWithdrawRequestsRequest): Promise<_27.QueryWithdrawRequestsResponse>;
                    withdrawRequest(request: _27.QueryWithdrawRequestRequest): Promise<_27.QueryWithdrawRequestResponse>;
                    orders(request: _27.QueryOrdersRequest): Promise<_27.QueryOrdersResponse>;
                    order(request: _27.QueryOrderRequest): Promise<_27.QueryOrderResponse>;
                    ordersByOrderer(request: _27.QueryOrdersByOrdererRequest): Promise<_27.QueryOrdersResponse>;
                    orderBooks(request: _27.QueryOrderBooksRequest): Promise<_27.QueryOrderBooksResponse>;
                    params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                };
                loan: {
                    params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                    loans(request: _33.QueryGetLoansRequest): Promise<_33.QueryGetLoansResponse>;
                    loansAll(request?: _33.QueryAllLoansRequest): Promise<_33.QueryAllLoansResponse>;
                };
                market: {
                    params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                };
                ons: {
                    params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                    whois(request: _43.QueryGetWhoisRequest): Promise<_43.QueryGetWhoisResponse>;
                    whoisAll(request?: _43.QueryAllWhoisRequest): Promise<_43.QueryAllWhoisResponse>;
                };
                oracle: {
                    params(request?: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                    pricesResult(request: _50.QueryPricesRequest): Promise<_50.QueryPricesResponse>;
                    lastPricesId(request?: _50.QueryLastPricesIdRequest): Promise<_50.QueryLastPricesIdResponse>;
                };
                reserve: {
                    params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            ollo: {
                claim: _77.LCDQueryClient;
                inflation: _78.LCDQueryClient;
                liquidity: _79.LCDQueryClient;
                loan: _80.LCDQueryClient;
                market: _81.LCDQueryClient;
                ons: _82.LCDQueryClient;
                oracle: _83.LCDQueryClient;
                reserve: _84.LCDQueryClient;
            };
        }>;
    };
}
