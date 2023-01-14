import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBuyName, MsgSellName, MsgSetName, MsgDeleteName, MsgAddThread, MsgDeleteThread } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.ons.v1.MsgBuyName", MsgBuyName], ["/ollo.ons.v1.MsgSellName", MsgSellName], ["/ollo.ons.v1.MsgSetName", MsgSetName], ["/ollo.ons.v1.MsgDeleteName", MsgDeleteName], ["/ollo.ons.v1.MsgAddThread", MsgAddThread], ["/ollo.ons.v1.MsgDeleteThread", MsgDeleteThread]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    buyName(value: MsgBuyName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgBuyName",
        value: MsgBuyName.encode(value).finish()
      };
    },

    sellName(value: MsgSellName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgSellName",
        value: MsgSellName.encode(value).finish()
      };
    },

    setName(value: MsgSetName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgSetName",
        value: MsgSetName.encode(value).finish()
      };
    },

    deleteName(value: MsgDeleteName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgDeleteName",
        value: MsgDeleteName.encode(value).finish()
      };
    },

    addThread(value: MsgAddThread) {
      return {
        typeUrl: "/ollo.ons.v1.MsgAddThread",
        value: MsgAddThread.encode(value).finish()
      };
    },

    deleteThread(value: MsgDeleteThread) {
      return {
        typeUrl: "/ollo.ons.v1.MsgDeleteThread",
        value: MsgDeleteThread.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    buyName(value: MsgBuyName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgBuyName",
        value
      };
    },

    sellName(value: MsgSellName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgSellName",
        value
      };
    },

    setName(value: MsgSetName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgSetName",
        value
      };
    },

    deleteName(value: MsgDeleteName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgDeleteName",
        value
      };
    },

    addThread(value: MsgAddThread) {
      return {
        typeUrl: "/ollo.ons.v1.MsgAddThread",
        value
      };
    },

    deleteThread(value: MsgDeleteThread) {
      return {
        typeUrl: "/ollo.ons.v1.MsgDeleteThread",
        value
      };
    }

  },
  fromPartial: {
    buyName(value: MsgBuyName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgBuyName",
        value: MsgBuyName.fromPartial(value)
      };
    },

    sellName(value: MsgSellName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgSellName",
        value: MsgSellName.fromPartial(value)
      };
    },

    setName(value: MsgSetName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgSetName",
        value: MsgSetName.fromPartial(value)
      };
    },

    deleteName(value: MsgDeleteName) {
      return {
        typeUrl: "/ollo.ons.v1.MsgDeleteName",
        value: MsgDeleteName.fromPartial(value)
      };
    },

    addThread(value: MsgAddThread) {
      return {
        typeUrl: "/ollo.ons.v1.MsgAddThread",
        value: MsgAddThread.fromPartial(value)
      };
    },

    deleteThread(value: MsgDeleteThread) {
      return {
        typeUrl: "/ollo.ons.v1.MsgDeleteThread",
        value: MsgDeleteThread.fromPartial(value)
      };
    }

  }
};