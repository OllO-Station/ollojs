import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePair, MsgCreatePool, MsgCreateRangedPool, MsgDeposit, MsgWithdraw, MsgLimitOrder, MsgMarketOrder, MsgMMOrder, MsgCancelOrder, MsgCancelAllOrders } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.liquidity.v1.MsgCreatePair", MsgCreatePair], ["/ollo.liquidity.v1.MsgCreatePool", MsgCreatePool], ["/ollo.liquidity.v1.MsgCreateRangedPool", MsgCreateRangedPool], ["/ollo.liquidity.v1.MsgDeposit", MsgDeposit], ["/ollo.liquidity.v1.MsgWithdraw", MsgWithdraw], ["/ollo.liquidity.v1.MsgLimitOrder", MsgLimitOrder], ["/ollo.liquidity.v1.MsgMarketOrder", MsgMarketOrder], ["/ollo.liquidity.v1.MsgMMOrder", MsgMMOrder], ["/ollo.liquidity.v1.MsgCancelOrder", MsgCancelOrder], ["/ollo.liquidity.v1.MsgCancelAllOrders", MsgCancelAllOrders]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePair",
        value: MsgCreatePair.encode(value).finish()
      };
    },

    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },

    createRangedPool(value: MsgCreateRangedPool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreateRangedPool",
        value: MsgCreateRangedPool.encode(value).finish()
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

    limitOrder(value: MsgLimitOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgLimitOrder",
        value: MsgLimitOrder.encode(value).finish()
      };
    },

    marketOrder(value: MsgMarketOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgMarketOrder",
        value: MsgMarketOrder.encode(value).finish()
      };
    },

    mMOrder(value: MsgMMOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgMMOrder",
        value: MsgMMOrder.encode(value).finish()
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
    }

  },
  withTypeUrl: {
    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePair",
        value
      };
    },

    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePool",
        value
      };
    },

    createRangedPool(value: MsgCreateRangedPool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreateRangedPool",
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

    limitOrder(value: MsgLimitOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgLimitOrder",
        value
      };
    },

    marketOrder(value: MsgMarketOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgMarketOrder",
        value
      };
    },

    mMOrder(value: MsgMMOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgMMOrder",
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
    }

  },
  fromPartial: {
    createPair(value: MsgCreatePair) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePair",
        value: MsgCreatePair.fromPartial(value)
      };
    },

    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },

    createRangedPool(value: MsgCreateRangedPool) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgCreateRangedPool",
        value: MsgCreateRangedPool.fromPartial(value)
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

    limitOrder(value: MsgLimitOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgLimitOrder",
        value: MsgLimitOrder.fromPartial(value)
      };
    },

    marketOrder(value: MsgMarketOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgMarketOrder",
        value: MsgMarketOrder.fromPartial(value)
      };
    },

    mMOrder(value: MsgMMOrder) {
      return {
        typeUrl: "/ollo.liquidity.v1.MsgMMOrder",
        value: MsgMMOrder.fromPartial(value)
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
    }

  }
};