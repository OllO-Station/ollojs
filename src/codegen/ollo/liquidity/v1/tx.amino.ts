import { orderDirectionFromJSON } from "./order";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/ollo.liquidity.v1.MsgCreatePair": {
    aminoType: "/ollo.liquidity.v1.MsgCreatePair",
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
  "/ollo.liquidity.v1.MsgCreatePool": {
    aminoType: "/ollo.liquidity.v1.MsgCreatePool",
    toAmino: ({
      creator,
      pairId,
      depositCoins
    }: MsgCreatePool): AminoMsgCreatePool["value"] => {
      return {
        creator,
        pair_id: pairId.toString(),
        deposit_coins: depositCoins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      pair_id,
      deposit_coins
    }: AminoMsgCreatePool["value"]): MsgCreatePool => {
      return {
        creator,
        pairId: Long.fromString(pair_id),
        depositCoins: deposit_coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/ollo.liquidity.v1.MsgCreateRangedPool": {
    aminoType: "/ollo.liquidity.v1.MsgCreateRangedPool",
    toAmino: ({
      creator,
      pairId,
      depositCoins,
      minPrice,
      maxPrice,
      initialPrice
    }: MsgCreateRangedPool): AminoMsgCreateRangedPool["value"] => {
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
    }: AminoMsgCreateRangedPool["value"]): MsgCreateRangedPool => {
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
  "/ollo.liquidity.v1.MsgDeposit": {
    aminoType: "/ollo.liquidity.v1.MsgDeposit",
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
  "/ollo.liquidity.v1.MsgWithdraw": {
    aminoType: "/ollo.liquidity.v1.MsgWithdraw",
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
  "/ollo.liquidity.v1.MsgLimitOrder": {
    aminoType: "/ollo.liquidity.v1.MsgLimitOrder",
    toAmino: ({
      orderer,
      pairId,
      direction,
      offerCoin,
      demandCoinDenom,
      price,
      amount,
      orderLifespan
    }: MsgLimitOrder): AminoMsgLimitOrder["value"] => {
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
    }: AminoMsgLimitOrder["value"]): MsgLimitOrder => {
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
  "/ollo.liquidity.v1.MsgMarketOrder": {
    aminoType: "/ollo.liquidity.v1.MsgMarketOrder",
    toAmino: ({
      orderer,
      pairId,
      direction,
      offerCoin,
      demandCoinDenom,
      amount,
      orderLifespan
    }: MsgMarketOrder): AminoMsgMarketOrder["value"] => {
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
    }: AminoMsgMarketOrder["value"]): MsgMarketOrder => {
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
  "/ollo.liquidity.v1.MsgMMOrder": {
    aminoType: "/ollo.liquidity.v1.MsgMMOrder",
    toAmino: ({
      orderer,
      pairId,
      direction,
      offerCoin,
      demandCoinDenom,
      price,
      amount,
      orderLifespan
    }: MsgMMOrder): AminoMsgMMOrder["value"] => {
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
    }: AminoMsgMMOrder["value"]): MsgMMOrder => {
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
  "/ollo.liquidity.v1.MsgCancelOrder": {
    aminoType: "/ollo.liquidity.v1.MsgCancelOrder",
    toAmino: ({
      orderer,
      pairId,
      orderId
    }: MsgCancelOrder): AminoMsgCancelOrder["value"] => {
      return {
        orderer,
        pair_id: pairId.toString(),
        order_id: orderId.toString()
      };
    },
    fromAmino: ({
      orderer,
      pair_id,
      order_id
    }: AminoMsgCancelOrder["value"]): MsgCancelOrder => {
      return {
        orderer,
        pairId: Long.fromString(pair_id),
        orderId: Long.fromString(order_id)
      };
    }
  },
  "/ollo.liquidity.v1.MsgCancelAllOrders": {
    aminoType: "/ollo.liquidity.v1.MsgCancelAllOrders",
    toAmino: ({
      orderer,
      pairIds
    }: MsgCancelAllOrders): AminoMsgCancelAllOrders["value"] => {
      return {
        orderer,
        pair_ids: pairIds.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      orderer,
      pair_ids
    }: AminoMsgCancelAllOrders["value"]): MsgCancelAllOrders => {
      return {
        orderer,
        pairIds: pair_ids.map(el0 => Long.fromString(el0))
      };
    }
  }
};