import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgCreatePair, MsgCreatePoolCapped, MsgDeposit, MsgWithdraw, MsgOrderLimit, MsgOrderMarket, MsgOrderMarketMaking, MsgCancelOrder, MsgCancelAllOrders, MsgCancelMarketMakingOrder } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.liquidity.v1.MsgCreatePool", MsgCreatePool], ["/ollo.liquidity.v1.MsgCreatePair", MsgCreatePair], ["/ollo.liquidity.v1.MsgCreatePoolCapped", MsgCreatePoolCapped], ["/ollo.liquidity.v1.MsgDeposit", MsgDeposit], ["/ollo.liquidity.v1.MsgWithdraw", MsgWithdraw], ["/ollo.liquidity.v1.MsgOrderLimit", MsgOrderLimit], ["/ollo.liquidity.v1.MsgOrderMarket", MsgOrderMarket], ["/ollo.liquidity.v1.MsgOrderMarketMaking", MsgOrderMarketMaking], ["/ollo.liquidity.v1.MsgCancelOrder", MsgCancelOrder], ["/ollo.liquidity.v1.MsgCancelAllOrders", MsgCancelAllOrders], ["/ollo.liquidity.v1.MsgCancelMarketMakingOrder", MsgCancelMarketMakingOrder]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },

    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePair",
        value: MsgCreatePair.encode(value).finish()
      };
    },

    createPoolCapped(value: MsgCreatePoolCapped) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePoolCapped",
        value: MsgCreatePoolCapped.encode(value).finish()
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    orderLimit(value: MsgOrderLimit) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderLimit",
        value: MsgOrderLimit.encode(value).finish()
      };
    },

    orderMarket(value: MsgOrderMarket) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderMarket",
        value: MsgOrderMarket.encode(value).finish()
      };
    },

    orderMarketMaking(value: MsgOrderMarketMaking) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderMarketMaking",
        value: MsgOrderMarketMaking.encode(value).finish()
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },

    cancelAllOrders(value: MsgCancelAllOrders) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelAllOrders",
        value: MsgCancelAllOrders.encode(value).finish()
      };
    },

    cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelMarketMakingOrder",
        value: MsgCancelMarketMakingOrder.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePool",
        value
      };
    },

    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePair",
        value
      };
    },

    createPoolCapped(value: MsgCreatePoolCapped) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePoolCapped",
        value
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgDeposit",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgWithdraw",
        value
      };
    },

    orderLimit(value: MsgOrderLimit) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderLimit",
        value
      };
    },

    orderMarket(value: MsgOrderMarket) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderMarket",
        value
      };
    },

    orderMarketMaking(value: MsgOrderMarketMaking) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderMarketMaking",
        value
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelOrder",
        value
      };
    },

    cancelAllOrders(value: MsgCancelAllOrders) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelAllOrders",
        value
      };
    },

    cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelMarketMakingOrder",
        value
      };
    }

  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },

    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePair",
        value: MsgCreatePair.fromPartial(value)
      };
    },

    createPoolCapped(value: MsgCreatePoolCapped) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePoolCapped",
        value: MsgCreatePoolCapped.fromPartial(value)
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    orderLimit(value: MsgOrderLimit) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderLimit",
        value: MsgOrderLimit.fromPartial(value)
      };
    },

    orderMarket(value: MsgOrderMarket) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderMarket",
        value: MsgOrderMarket.fromPartial(value)
      };
    },

    orderMarketMaking(value: MsgOrderMarketMaking) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgOrderMarketMaking",
        value: MsgOrderMarketMaking.fromPartial(value)
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },

    cancelAllOrders(value: MsgCancelAllOrders) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelAllOrders",
        value: MsgCancelAllOrders.fromPartial(value)
      };
    },

    cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCancelMarketMakingOrder",
        value: MsgCancelMarketMakingOrder.fromPartial(value)
      };
    }

  }
};