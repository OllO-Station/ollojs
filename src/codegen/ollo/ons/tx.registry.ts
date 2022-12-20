import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBuyName, MsgSellName, MsgSetName, MsgDeleteName, MsgAddThread, MsgDeleteThread } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.ons.MsgBuyName", MsgBuyName], ["/ollo.ons.MsgSellName", MsgSellName], ["/ollo.ons.MsgSetName", MsgSetName], ["/ollo.ons.MsgDeleteName", MsgDeleteName], ["/ollo.ons.MsgAddThread", MsgAddThread], ["/ollo.ons.MsgDeleteThread", MsgDeleteThread]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    buyName(value: MsgBuyName) {
      return {
        typeUrl: "/ollo.ons.MsgBuyName",
        value: MsgBuyName.encode(value).finish()
      };
    },

    sellName(value: MsgSellName) {
      return {
        typeUrl: "/ollo.ons.MsgSellName",
        value: MsgSellName.encode(value).finish()
      };
    },

    setName(value: MsgSetName) {
      return {
        typeUrl: "/ollo.ons.MsgSetName",
        value: MsgSetName.encode(value).finish()
      };
    },

    deleteName(value: MsgDeleteName) {
      return {
        typeUrl: "/ollo.ons.MsgDeleteName",
        value: MsgDeleteName.encode(value).finish()
      };
    },

    addThread(value: MsgAddThread) {
      return {
        typeUrl: "/ollo.ons.MsgAddThread",
        value: MsgAddThread.encode(value).finish()
      };
    },

    deleteThread(value: MsgDeleteThread) {
      return {
        typeUrl: "/ollo.ons.MsgDeleteThread",
        value: MsgDeleteThread.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    buyName(value: MsgBuyName) {
      return {
        typeUrl: "/ollo.ons.MsgBuyName",
        value
      };
    },

    sellName(value: MsgSellName) {
      return {
        typeUrl: "/ollo.ons.MsgSellName",
        value
      };
    },

    setName(value: MsgSetName) {
      return {
        typeUrl: "/ollo.ons.MsgSetName",
        value
      };
    },

    deleteName(value: MsgDeleteName) {
      return {
        typeUrl: "/ollo.ons.MsgDeleteName",
        value
      };
    },

    addThread(value: MsgAddThread) {
      return {
        typeUrl: "/ollo.ons.MsgAddThread",
        value
      };
    },

    deleteThread(value: MsgDeleteThread) {
      return {
        typeUrl: "/ollo.ons.MsgDeleteThread",
        value
      };
    }

  },
  fromPartial: {
    buyName(value: MsgBuyName) {
      return {
        typeUrl: "/ollo.ons.MsgBuyName",
        value: MsgBuyName.fromPartial(value)
      };
    },

    sellName(value: MsgSellName) {
      return {
        typeUrl: "/ollo.ons.MsgSellName",
        value: MsgSellName.fromPartial(value)
      };
    },

    setName(value: MsgSetName) {
      return {
        typeUrl: "/ollo.ons.MsgSetName",
        value: MsgSetName.fromPartial(value)
      };
    },

    deleteName(value: MsgDeleteName) {
      return {
        typeUrl: "/ollo.ons.MsgDeleteName",
        value: MsgDeleteName.fromPartial(value)
      };
    },

    addThread(value: MsgAddThread) {
      return {
        typeUrl: "/ollo.ons.MsgAddThread",
        value: MsgAddThread.fromPartial(value)
      };
    },

    deleteThread(value: MsgDeleteThread) {
      return {
        typeUrl: "/ollo.ons.MsgDeleteThread",
        value: MsgDeleteThread.fromPartial(value)
      };
    }

  }
};