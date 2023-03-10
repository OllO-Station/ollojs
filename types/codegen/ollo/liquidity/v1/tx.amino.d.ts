import { AminoMsg } from "@cosmjs/amino";
import { MsgCreatePair, MsgCreatePool, MsgCreateRangedPool, MsgDeposit, MsgWithdraw, MsgLimitOrder, MsgMarketOrder, MsgMMOrder, MsgCancelOrder, MsgCancelAllOrders } from "./tx";
export interface AminoMsgCreatePair extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCreatePair";
    value: {
        creator: string;
        base_coin_denom: string;
        quote_coin_denom: string;
    };
}
export interface AminoMsgCreatePool extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCreatePool";
    value: {
        creator: string;
        pair_id: string;
        deposit_coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgCreateRangedPool extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCreateRangedPool";
    value: {
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
}
export interface AminoMsgDeposit extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgDeposit";
    value: {
        depositor: string;
        pool_id: string;
        deposit_coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgWithdraw";
    value: {
        withdrawer: string;
        pool_id: string;
        pool_coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgLimitOrder extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgLimitOrder";
    value: {
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
}
export interface AminoMsgMarketOrder extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgMarketOrder";
    value: {
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
}
export interface AminoMsgMMOrder extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgMMOrder";
    value: {
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
}
export interface AminoMsgCancelOrder extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCancelOrder";
    value: {
        orderer: string;
        pair_id: string;
        order_id: string;
    };
}
export interface AminoMsgCancelAllOrders extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCancelAllOrders";
    value: {
        orderer: string;
        pair_ids: string[];
    };
}
export declare const AminoConverter: {
    "/ollo.liquidity.v1.MsgCreatePair": {
        aminoType: string;
        toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: MsgCreatePair) => AminoMsgCreatePair["value"];
        fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: AminoMsgCreatePair["value"]) => MsgCreatePair;
    };
    "/ollo.liquidity.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ creator, pairId, depositCoins }: MsgCreatePool) => AminoMsgCreatePool["value"];
        fromAmino: ({ creator, pair_id, deposit_coins }: AminoMsgCreatePool["value"]) => MsgCreatePool;
    };
    "/ollo.liquidity.v1.MsgCreateRangedPool": {
        aminoType: string;
        toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: MsgCreateRangedPool) => AminoMsgCreateRangedPool["value"];
        fromAmino: ({ creator, pair_id, deposit_coins, min_price, max_price, initial_price }: AminoMsgCreateRangedPool["value"]) => MsgCreateRangedPool;
    };
    "/ollo.liquidity.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, poolId, depositCoins }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ depositor, pool_id, deposit_coins }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/ollo.liquidity.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ withdrawer, poolId, poolCoin }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ withdrawer, pool_id, pool_coin }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
    "/ollo.liquidity.v1.MsgLimitOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: MsgLimitOrder) => AminoMsgLimitOrder["value"];
        fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, price, amount, order_lifespan }: AminoMsgLimitOrder["value"]) => MsgLimitOrder;
    };
    "/ollo.liquidity.v1.MsgMarketOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: MsgMarketOrder) => AminoMsgMarketOrder["value"];
        fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, amount, order_lifespan }: AminoMsgMarketOrder["value"]) => MsgMarketOrder;
    };
    "/ollo.liquidity.v1.MsgMMOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: MsgMMOrder) => AminoMsgMMOrder["value"];
        fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, price, amount, order_lifespan }: AminoMsgMMOrder["value"]) => MsgMMOrder;
    };
    "/ollo.liquidity.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId, orderId }: MsgCancelOrder) => AminoMsgCancelOrder["value"];
        fromAmino: ({ orderer, pair_id, order_id }: AminoMsgCancelOrder["value"]) => MsgCancelOrder;
    };
    "/ollo.liquidity.v1.MsgCancelAllOrders": {
        aminoType: string;
        toAmino: ({ orderer, pairIds }: MsgCancelAllOrders) => AminoMsgCancelAllOrders["value"];
        fromAmino: ({ orderer, pair_ids }: AminoMsgCancelAllOrders["value"]) => MsgCancelAllOrders;
    };
};
