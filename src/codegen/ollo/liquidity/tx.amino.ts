import { orderDirectionFromJSON } from "./liquidity";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgCreatePool, MsgCreatePair, MsgCreatePoolCapped, MsgDeposit, MsgWithdraw, MsgOrderLimit, MsgOrderMarket, MsgOrderMarketMaking, MsgCancelOrder, MsgCancelAllOrders, MsgCancelMarketMakingOrder } from "./tx";
export interface AminoMsgCreatePool extends AminoMsg {
  type: "/ollo.liquidity.MsgCreatePool";
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
  type: "/ollo.liquidity.MsgCreatePair";
  value: {
    creator: string;
    base_coin_denom: string;
    quote_coin_denom: string;
  };
}
export interface AminoMsgCreatePoolCapped extends AminoMsg {
  type: "/ollo.liquidity.MsgCreatePoolCapped";
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
  type: "/ollo.liquidity.MsgDeposit";
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
  type: "/ollo.liquidity.MsgWithdraw";
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
  type: "/ollo.liquidity.MsgOrderLimit";
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
  type: "/ollo.liquidity.MsgOrderMarket";
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
  type: "/ollo.liquidity.MsgOrderMarketMaking";
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
  type: "/ollo.liquidity.MsgCancelOrder";
  value: {
    order_addr: string;
    pair_id: string;
    order_id: string;
  };
}
export interface AminoMsgCancelAllOrders extends AminoMsg {
  type: "/ollo.liquidity.MsgCancelAllOrders";
  value: {
    order_addr: string;
    pair_ids: string[];
  };
}
export interface AminoMsgCancelMarketMakingOrder extends AminoMsg {
  type: "/ollo.liquidity.MsgCancelMarketMakingOrder";
  value: {
    orderer: string;
    pair_id: string;
  };
}
export const AminoConverter = {
  "/ollo.liquidity.MsgCreatePool": {
    aminoType: "/ollo.liquidity.MsgCreatePool",
    toAmino: ({
      creator,
      typeId,
      pairId,
      depositCoins
    }: MsgCreatePool): AminoMsgCreatePool["value"] => {
      return {
        creator,
        type_id: typeId.toString(),
        pair_id: pairId.toString(),
        deposit_coins: depositCoins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      type_id,
      pair_id,
      deposit_coins
    }: AminoMsgCreatePool["value"]): MsgCreatePool => {
      return {
        creator,
        typeId: Long.fromString(type_id),
        pairId: Long.fromString(pair_id),
        depositCoins: deposit_coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/ollo.liquidity.MsgCreatePair": {
    aminoType: "/ollo.liquidity.MsgCreatePair",
    toAmino: ({
      creator,
      baseCoinDenom,
      quoteCoinDenom
    }: MsgCreatePair): AminoMsgCreatePair["value"] => {
      return {
        creator,
        base_coin_denom: baseCoinDenom,
        quote_coin_denom: quoteCoinDenom
      };
    },
    fromAmino: ({
      creator,
      base_coin_denom,
      quote_coin_denom
    }: AminoMsgCreatePair["value"]): MsgCreatePair => {
      return {
        creator,
        baseCoinDenom: base_coin_denom,
        quoteCoinDenom: quote_coin_denom
      };
    }
  },
  "/ollo.liquidity.MsgCreatePoolCapped": {
    aminoType: "/ollo.liquidity.MsgCreatePoolCapped",
    toAmino: ({
      creator,
      pairId,
      depositCoins,
      minPrice,
      maxPrice,
      initialPrice
    }: MsgCreatePoolCapped): AminoMsgCreatePoolCapped["value"] => {
      return {
        creator,
        pair_id: pairId.toString(),
        deposit_coins: depositCoins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        min_price: minPrice,
        max_price: maxPrice,
        initial_price: initialPrice
      };
    },
    fromAmino: ({
      creator,
      pair_id,
      deposit_coins,
      min_price,
      max_price,
      initial_price
    }: AminoMsgCreatePoolCapped["value"]): MsgCreatePoolCapped => {
      return {
        creator,
        pairId: Long.fromString(pair_id),
        depositCoins: deposit_coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        minPrice: min_price,
        maxPrice: max_price,
        initialPrice: initial_price
      };
    }
  },
  "/ollo.liquidity.MsgDeposit": {
    aminoType: "/ollo.liquidity.MsgDeposit",
    toAmino: ({
      depositor,
      poolId,
      depositCoins
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        depositor,
        pool_id: poolId.toString(),
        deposit_coins: depositCoins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      depositor,
      pool_id,
      deposit_coins
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        depositor,
        poolId: Long.fromString(pool_id),
        depositCoins: deposit_coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/ollo.liquidity.MsgWithdraw": {
    aminoType: "/ollo.liquidity.MsgWithdraw",
    toAmino: ({
      withdrawer,
      poolId,
      poolCoin
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        withdrawer,
        pool_id: poolId.toString(),
        pool_coin: {
          denom: poolCoin.denom,
          amount: Long.fromValue(poolCoin.amount).toString()
        }
      };
    },
    fromAmino: ({
      withdrawer,
      pool_id,
      pool_coin
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        withdrawer,
        poolId: Long.fromString(pool_id),
        poolCoin: {
          denom: pool_coin.denom,
          amount: pool_coin.amount
        }
      };
    }
  },
  "/ollo.liquidity.MsgOrderLimit": {
    aminoType: "/ollo.liquidity.MsgOrderLimit",
    toAmino: ({
      orderer,
      pairId,
      direction,
      offerCoin,
      demandCoinDenom,
      price,
      amount,
      orderLifespan
    }: MsgOrderLimit): AminoMsgOrderLimit["value"] => {
      return {
        orderer,
        pair_id: pairId.toString(),
        direction,
        offer_coin: {
          denom: offerCoin.denom,
          amount: Long.fromValue(offerCoin.amount).toString()
        },
        demand_coin_denom: demandCoinDenom,
        price,
        amount,
        order_lifespan: (orderLifespan * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      orderer,
      pair_id,
      direction,
      offer_coin,
      demand_coin_denom,
      price,
      amount,
      order_lifespan
    }: AminoMsgOrderLimit["value"]): MsgOrderLimit => {
      return {
        orderer,
        pairId: Long.fromString(pair_id),
        direction: orderDirectionFromJSON(direction),
        offerCoin: {
          denom: offer_coin.denom,
          amount: offer_coin.amount
        },
        demandCoinDenom: demand_coin_denom,
        price,
        amount,
        orderLifespan: {
          seconds: Long.fromNumber(Math.floor(parseInt(order_lifespan) / 1_000_000_000)),
          nanos: parseInt(order_lifespan) % 1_000_000_000
        }
      };
    }
  },
  "/ollo.liquidity.MsgOrderMarket": {
    aminoType: "/ollo.liquidity.MsgOrderMarket",
    toAmino: ({
      orderer,
      pairId,
      direction,
      offerCoin,
      demandCoinDenom,
      amount,
      orderLifespan
    }: MsgOrderMarket): AminoMsgOrderMarket["value"] => {
      return {
        orderer,
        pair_id: pairId.toString(),
        direction,
        offer_coin: {
          denom: offerCoin.denom,
          amount: Long.fromValue(offerCoin.amount).toString()
        },
        demand_coin_denom: demandCoinDenom,
        amount,
        order_lifespan: (orderLifespan * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      orderer,
      pair_id,
      direction,
      offer_coin,
      demand_coin_denom,
      amount,
      order_lifespan
    }: AminoMsgOrderMarket["value"]): MsgOrderMarket => {
      return {
        orderer,
        pairId: Long.fromString(pair_id),
        direction: orderDirectionFromJSON(direction),
        offerCoin: {
          denom: offer_coin.denom,
          amount: offer_coin.amount
        },
        demandCoinDenom: demand_coin_denom,
        amount,
        orderLifespan: {
          seconds: Long.fromNumber(Math.floor(parseInt(order_lifespan) / 1_000_000_000)),
          nanos: parseInt(order_lifespan) % 1_000_000_000
        }
      };
    }
  },
  "/ollo.liquidity.MsgOrderMarketMaking": {
    aminoType: "/ollo.liquidity.MsgOrderMarketMaking",
    toAmino: ({
      orderer,
      pairId,
      maxSellPrice,
      minSellPrice,
      sellAmount,
      maxBuyPrice,
      minBuyPrice,
      buyAmount,
      orderLifespan
    }: MsgOrderMarketMaking): AminoMsgOrderMarketMaking["value"] => {
      return {
        orderer,
        pair_id: pairId.toString(),
        max_sell_price: maxSellPrice,
        min_sell_price: minSellPrice,
        sell_amount: sellAmount,
        max_buy_price: maxBuyPrice,
        min_buy_price: minBuyPrice,
        buy_amount: buyAmount,
        order_lifespan: (orderLifespan * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      orderer,
      pair_id,
      max_sell_price,
      min_sell_price,
      sell_amount,
      max_buy_price,
      min_buy_price,
      buy_amount,
      order_lifespan
    }: AminoMsgOrderMarketMaking["value"]): MsgOrderMarketMaking => {
      return {
        orderer,
        pairId: Long.fromString(pair_id),
        maxSellPrice: max_sell_price,
        minSellPrice: min_sell_price,
        sellAmount: sell_amount,
        maxBuyPrice: max_buy_price,
        minBuyPrice: min_buy_price,
        buyAmount: buy_amount,
        orderLifespan: {
          seconds: Long.fromNumber(Math.floor(parseInt(order_lifespan) / 1_000_000_000)),
          nanos: parseInt(order_lifespan) % 1_000_000_000
        }
      };
    }
  },
  "/ollo.liquidity.MsgCancelOrder": {
    aminoType: "/ollo.liquidity.MsgCancelOrder",
    toAmino: ({
      orderAddr,
      pairId,
      orderId
    }: MsgCancelOrder): AminoMsgCancelOrder["value"] => {
      return {
        order_addr: orderAddr,
        pair_id: pairId.toString(),
        order_id: orderId.toString()
      };
    },
    fromAmino: ({
      order_addr,
      pair_id,
      order_id
    }: AminoMsgCancelOrder["value"]): MsgCancelOrder => {
      return {
        orderAddr: order_addr,
        pairId: Long.fromString(pair_id),
        orderId: Long.fromString(order_id)
      };
    }
  },
  "/ollo.liquidity.MsgCancelAllOrders": {
    aminoType: "/ollo.liquidity.MsgCancelAllOrders",
    toAmino: ({
      orderAddr,
      pairIds
    }: MsgCancelAllOrders): AminoMsgCancelAllOrders["value"] => {
      return {
        order_addr: orderAddr,
        pair_ids: pairIds.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      order_addr,
      pair_ids
    }: AminoMsgCancelAllOrders["value"]): MsgCancelAllOrders => {
      return {
        orderAddr: order_addr,
        pairIds: pair_ids.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/ollo.liquidity.MsgCancelMarketMakingOrder": {
    aminoType: "/ollo.liquidity.MsgCancelMarketMakingOrder",
    toAmino: ({
      orderer,
      pairId
    }: MsgCancelMarketMakingOrder): AminoMsgCancelMarketMakingOrder["value"] => {
      return {
        orderer,
        pair_id: pairId.toString()
      };
    },
    fromAmino: ({
      orderer,
      pair_id
    }: AminoMsgCancelMarketMakingOrder["value"]): MsgCancelMarketMakingOrder => {
      return {
        orderer,
        pairId: Long.fromString(pair_id)
      };
    }
  }
};