import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPricesData } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.oracle.MsgPricesData", MsgPricesData]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    pricesData(value: MsgPricesData) {
      return {
        typeUrl: "/ollo.oracle.MsgPricesData",
        value: MsgPricesData.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    pricesData(value: MsgPricesData) {
      return {
        typeUrl: "/ollo.oracle.MsgPricesData",
        value
      };
    }

  },
  fromPartial: {
    pricesData(value: MsgPricesData) {
      return {
        typeUrl: "/ollo.oracle.MsgPricesData",
        value: MsgPricesData.fromPartial(value)
      };
    }

  }
};