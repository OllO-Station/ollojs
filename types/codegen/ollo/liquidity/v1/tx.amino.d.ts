import { AminoMsg } from "@cosmjs/amino";
import { MsgCreatePool, MsgCreatePair, MsgCreatePoolCapped, MsgDeposit, MsgWithdraw, MsgOrderLimit, MsgOrderMarket, MsgOrderMarketMaking, MsgCancelOrder, MsgCancelAllOrders, MsgCancelMarketMakingOrder } from "./tx";
export interface AminoMsgCreatePool extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCreatePool";
    value: {
        creator: string;
        type_id: string;
        pair_id: string;
        deposit_coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgCreatePair extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCreatePair";
    value: {
        creator: string;
        base_coin_denom: string;
        quote_coin_denom: string;
    };
}
export interface AminoMsgCreatePoolCapped extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCreatePoolCapped";
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
export interface AminoMsgOrderLimit extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgOrderLimit";
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
export interface AminoMsgOrderMarket extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgOrderMarket";
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
export interface AminoMsgOrderMarketMaking extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgOrderMarketMaking";
    value: {
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
}
export interface AminoMsgCancelOrder extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCancelOrder";
    value: {
        order_addr: string;
        pair_id: string;
        order_id: string;
    };
}
export interface AminoMsgCancelAllOrders extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCancelAllOrders";
    value: {
        order_addr: string;
        pair_ids: string[];
    };
}
export interface AminoMsgCancelMarketMakingOrder extends AminoMsg {
    type: "/ollo.liquidity.v1.MsgCancelMarketMakingOrder";
    value: {
        orderer: string;
        pair_id: string;
    };
}
export declare const AminoConverter: {
    "/ollo.liquidity.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ creator, typeId, pairId, depositCoins }: MsgCreatePool) => AminoMsgCreatePool["value"];
        fromAmino: ({ creator, type_id, pair_id, deposit_coins }: AminoMsgCreatePool["value"]) => MsgCreatePool;
    };
    "/ollo.liquidity.v1.MsgCreatePair": {
        aminoType: string;
        toAmino: ({ creator, baseCoinDenom, quoteCoinDenom }: MsgCreatePair) => AminoMsgCreatePair["value"];
        fromAmino: ({ creator, base_coin_denom, quote_coin_denom }: AminoMsgCreatePair["value"]) => MsgCreatePair;
    };
    "/ollo.liquidity.v1.MsgCreatePoolCapped": {
        aminoType: string;
        toAmino: ({ creator, pairId, depositCoins, minPrice, maxPrice, initialPrice }: MsgCreatePoolCapped) => AminoMsgCreatePoolCapped["value"];
        fromAmino: ({ creator, pair_id, deposit_coins, min_price, max_price, initial_price }: AminoMsgCreatePoolCapped["value"]) => MsgCreatePoolCapped;
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
    "/ollo.liquidity.v1.MsgOrderLimit": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, price, amount, orderLifespan }: MsgOrderLimit) => AminoMsgOrderLimit["value"];
        fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, price, amount, order_lifespan }: AminoMsgOrderLimit["value"]) => MsgOrderLimit;
    };
    "/ollo.liquidity.v1.MsgOrderMarket": {
        aminoType: string;
        toAmino: ({ orderer, pairId, direction, offerCoin, demandCoinDenom, amount, orderLifespan }: MsgOrderMarket) => AminoMsgOrderMarket["value"];
        fromAmino: ({ orderer, pair_id, direction, offer_coin, demand_coin_denom, amount, order_lifespan }: AminoMsgOrderMarket["value"]) => MsgOrderMarket;
    };
    "/ollo.liquidity.v1.MsgOrderMarketMaking": {
        aminoType: string;
        toAmino: ({ orderer, pairId, maxSellPrice, minSellPrice, sellAmount, maxBuyPrice, minBuyPrice, buyAmount, orderLifespan }: MsgOrderMarketMaking) => AminoMsgOrderMarketMaking["value"];
        fromAmino: ({ orderer, pair_id, max_sell_price, min_sell_price, sell_amount, max_buy_price, min_buy_price, buy_amount, order_lifespan }: AminoMsgOrderMarketMaking["value"]) => MsgOrderMarketMaking;
    };
    "/ollo.liquidity.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ orderAddr, pairId, orderId }: MsgCancelOrder) => AminoMsgCancelOrder["value"];
        fromAmino: ({ order_addr, pair_id, order_id }: AminoMsgCancelOrder["value"]) => MsgCancelOrder;
    };
    "/ollo.liquidity.v1.MsgCancelAllOrders": {
        aminoType: string;
        toAmino: ({ orderAddr, pairIds }: MsgCancelAllOrders) => AminoMsgCancelAllOrders["value"];
        fromAmino: ({ order_addr, pair_ids }: AminoMsgCancelAllOrders["value"]) => MsgCancelAllOrders;
    };
    "/ollo.liquidity.v1.MsgCancelMarketMakingOrder": {
        aminoType: string;
        toAmino: ({ orderer, pairId }: MsgCancelMarketMakingOrder) => AminoMsgCancelMarketMakingOrder["value"];
        fromAmino: ({ orderer, pair_id }: AminoMsgCancelMarketMakingOrder["value"]) => MsgCancelMarketMakingOrder;
    };
};
