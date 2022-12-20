import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const olloAminoConverters: {
    "/ollo.oracle.MsgPricesData": {
        aminoType: string;
        toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: import("./oracle/tx").MsgPricesData) => {
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
        }) => import("./oracle/tx").MsgPricesData;
    };
    "/ollo.ons.MsgBuyName": {
        aminoType: string;
        toAmino: ({ creator, name, bidderAddr, bid }: import("./ons/tx").MsgBuyName) => {
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
        }) => import("./ons/tx").MsgBuyName;
    };
    "/ollo.ons.MsgSellName": {
        aminoType: string;
        toAmino: ({ creator, name, sellerAddr, offer }: import("./ons/tx").MsgSellName) => {
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
        }) => import("./ons/tx").MsgSellName;
    };
    "/ollo.ons.MsgSetName": {
        aminoType: string;
        toAmino: ({ creatorAddr, name, value }: import("./ons/tx").MsgSetName) => {
            creatorAddr: string;
            name: string;
            value: string;
        };
        fromAmino: ({ creatorAddr, name, value }: {
            creatorAddr: string;
            name: string;
            value: string;
        }) => import("./ons/tx").MsgSetName;
    };
    "/ollo.ons.MsgDeleteName": {
        aminoType: string;
        toAmino: ({ creatorAddr, name }: import("./ons/tx").MsgDeleteName) => {
            creatorAddr: string;
            name: string;
        };
        fromAmino: ({ creatorAddr, name }: {
            creatorAddr: string;
            name: string;
        }) => import("./ons/tx").MsgDeleteName;
    };
    "/ollo.ons.MsgAddThread": {
        aminoType: string;
        toAmino: ({ creator, name, thread, addr, offer }: import("./ons/tx").MsgAddThread) => {
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
        }) => import("./ons/tx").MsgAddThread;
    };
    "/ollo.ons.MsgDeleteThread": {
        aminoType: string;
        toAmino: ({ creator, name, thread, addr }: import("./ons/tx").MsgDeleteThread) => {
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
        }) => import("./ons/tx").MsgDeleteThread;
    };
    "/ollo.loan.MsgRequestLoan": {
        aminoType: string;
        toAmino: ({ creator, amount, fee, collateral, deadline }: import("./loan/tx").MsgRequestLoan) => {
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
        }) => import("./loan/tx").MsgRequestLoan;
    };
    "/ollo.loan.MsgApproveLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/tx").MsgApproveLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/tx").MsgApproveLoan;
    };
    "/ollo.loan.MsgRepayLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/tx").MsgRepayLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/tx").MsgRepayLoan;
    };
    "/ollo.loan.MsgLiquidateLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/tx").MsgLiquidateLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/tx").MsgLiquidateLoan;
    };
    "/ollo.loan.MsgCancelLoan": {
        aminoType: string;
        toAmino: ({ creator, id }: import("./loan/tx").MsgCancelLoan) => {
            creator: string;
            id: string;
        };
        fromAmino: ({ creator, id }: {
            creator: string;
            id: string;
        }) => import("./loan/tx").MsgCancelLoan;
    };
    "/ollo.liquidity.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ creator, typeId, pairId, depositCoins }: import("./liquidity/tx").MsgCreatePool) => {
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
        }) => import("./liquidity/tx").MsgCreatePool;
    };
    "/ollo.liquidity.MsgCreatePair": {
        aminoType: string;
        toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: import("./liquidity/tx").MsgCreatePair) => {
            creator: string;
            base_coin_denom: string;
            quote_coin_denom: string;
        };
        fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: {
            creator: string;
            base_coin_denom: string;
            quote_coin_denom: string;
        }) => import("./liquidity/tx").MsgCreatePair;
    };
    "/ollo.liquidity.MsgCreatePoolCapped": {
        aminoType: string;
        toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: import("./liquidity/tx").MsgCreatePoolCapped) => {
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
        }) => import("./liquidity/tx").MsgCreatePoolCapped;
    };
    "/ollo.liquidity.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, poolId, depositCoins }: import("./liquidity/tx").MsgDeposit) => {
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
        }) => import("./liquidity/tx").MsgDeposit;
    };
    "/ollo.liquidity.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ withdrawer, poolId, poolCoin }: import("./liquidity/tx").MsgWithdraw) => {
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
        }) => import("./liquidity/tx").MsgWithdraw;
    };
    "/ollo.liquidity.MsgOrderLimit": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: import("./liquidity/tx").MsgOrderLimit) => {
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
        }) => import("./liquidity/tx").MsgOrderLimit;
    };
    "/ollo.liquidity.MsgOrderMarket": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: import("./liquidity/tx").MsgOrderMarket) => {
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
        }) => import("./liquidity/tx").MsgOrderMarket;
    };
    "/ollo.liquidity.MsgOrderMarketMaking": {
        aminoType: string;
        toAmino: ({ orderer, pairId, maxSellPrice, minSellPrice, sellAmount, maxBuyPrice, minBuyPrice, buyAmount, orderLifespan }: import("./liquidity/tx").MsgOrderMarketMaking) => {
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
        }) => import("./liquidity/tx").MsgOrderMarketMaking;
    };
    "/ollo.liquidity.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ orderAddr, pairId, orderId }: import("./liquidity/tx").MsgCancelOrder) => {
            order_addr: string;
            pair_id: string;
            order_id: string;
        };
        fromAmino: ({ order_addr, pair_id, order_id }: {
            order_addr: string;
            pair_id: string;
            order_id: string;
        }) => import("./liquidity/tx").MsgCancelOrder;
    };
    "/ollo.liquidity.MsgCancelAllOrders": {
        aminoType: string;
        toAmino: ({ orderAddr, pairIds }: import("./liquidity/tx").MsgCancelAllOrders) => {
            order_addr: string;
            pair_ids: string[];
        };
        fromAmino: ({ order_addr, pair_ids }: {
            order_addr: string;
            pair_ids: string[];
        }) => import("./liquidity/tx").MsgCancelAllOrders;
    };
    "/ollo.liquidity.MsgCancelMarketMakingOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId }: import("./liquidity/tx").MsgCancelMarketMakingOrder) => {
            orderer: string;
            pair_id: string;
        };
        fromAmino: ({ orderer, pair_id }: {
            orderer: string;
            pair_id: string;
        }) => import("./liquidity/tx").MsgCancelMarketMakingOrder;
    };
    "/ollo.claim.MsgClaim": {
        aminoType: string;
        toAmino: ({ airdropId, recipient, conditionType }: import("./claim/tx").MsgClaim) => {
            airdrop_id: string;
            recipient: string;
            condition_type: number;
        };
        fromAmino: ({ airdrop_id, recipient, condition_type }: {
            airdrop_id: string;
            recipient: string;
            condition_type: number;
        }) => import("./claim/tx").MsgClaim;
    };
};
export declare const olloProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOlloClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOlloClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
