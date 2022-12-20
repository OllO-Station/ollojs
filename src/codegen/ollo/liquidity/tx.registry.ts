import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgCreatePair, MsgCreatePoolCapped, MsgDeposit, MsgWithdraw, MsgOrderLimit, MsgOrderMarket, MsgOrderMarketMaking, MsgCancelOrder, MsgCancelAllOrders, MsgCancelMarketMakingOrder } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.liquidity.MsgCreatePool", MsgCreatePool], ["/ollo.liquidity.MsgCreatePair", MsgCreatePair], ["/ollo.liquidity.MsgCreatePoolCapped", MsgCreatePoolCapped], ["/ollo.liquidity.MsgDeposit", MsgDeposit], ["/ollo.liquidity.MsgWithdraw", MsgWithdraw], ["/ollo.liquidity.MsgOrderLimit", MsgOrderLimit], ["/ollo.liquidity.MsgOrderMarket", MsgOrderMarket], ["/ollo.liquidity.MsgOrderMarketMaking", MsgOrderMarketMaking], ["/ollo.liquidity.MsgCancelOrder", MsgCancelOrder], ["/ollo.liquidity.MsgCancelAllOrders", MsgCancelAllOrders], ["/ollo.liquidity.MsgCancelMarketMakingOrder", MsgCancelMarketMakingOrder]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },

    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePair",
        value: MsgCreatePair.encode(value).finish()
      };
    },

    createPoolCapped(value: MsgCreatePoolCapped) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePoolCapped",
        value: MsgCreatePoolCapped.encode(value).finish()
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/ollo.liquidity.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/ollo.liquidity.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    orderLimit(value: MsgOrderLimit) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderLimit",
        value: MsgOrderLimit.encode(value).finish()
      };
    },

    orderMarket(value: MsgOrderMarket) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderMarket",
        value: MsgOrderMarket.encode(value).finish()
      };
    },

    orderMarketMaking(value: MsgOrderMarketMaking) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderMarketMaking",
        value: MsgOrderMarketMaking.encode(value).finish()
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },

    cancelAllOrders(value: MsgCancelAllOrders) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelAllOrders",
        value: MsgCancelAllOrders.encode(value).finish()
      };
    },

    cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelMarketMakingOrder",
        value: MsgCancelMarketMakingOrder.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePool",
        value
      };
    },

    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePair",
        value
      };
    },

    createPoolCapped(value: MsgCreatePoolCapped) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePoolCapped",
        value
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/ollo.liquidity.MsgDeposit",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/ollo.liquidity.MsgWithdraw",
        value
      };
    },

    orderLimit(value: MsgOrderLimit) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderLimit",
        value
      };
    },

    orderMarket(value: MsgOrderMarket) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderMarket",
        value
      };
    },

    orderMarketMaking(value: MsgOrderMarketMaking) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderMarketMaking",
        value
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelOrder",
        value
      };
    },

    cancelAllOrders(value: MsgCancelAllOrders) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelAllOrders",
        value
      };
    },

    cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelMarketMakingOrder",
        value
      };
    }

  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },

    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePair",
        value: MsgCreatePair.fromPartial(value)
      };
    },

    createPoolCapped(value: MsgCreatePoolCapped) {
      return {
        typeUrl: "/ollo.liquidity.MsgCreatePoolCapped",
        value: MsgCreatePoolCapped.fromPartial(value)
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/ollo.liquidity.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/ollo.liquidity.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    orderLimit(value: MsgOrderLimit) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderLimit",
        value: MsgOrderLimit.fromPartial(value)
      };
    },

    orderMarket(value: MsgOrderMarket) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderMarket",
        value: MsgOrderMarket.fromPartial(value)
      };
    },

    orderMarketMaking(value: MsgOrderMarketMaking) {
      return {
        typeUrl: "/ollo.liquidity.MsgOrderMarketMaking",
        value: MsgOrderMarketMaking.fromPartial(value)
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },

    cancelAllOrders(value: MsgCancelAllOrders) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelAllOrders",
        value: MsgCancelAllOrders.fromPartial(value)
      };
    },

    cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder) {
      return {
        typeUrl: "/ollo.liquidity.MsgCancelMarketMakingOrder",
        value: MsgCancelMarketMakingOrder.fromPartial(value)
      };
    }

  }
};