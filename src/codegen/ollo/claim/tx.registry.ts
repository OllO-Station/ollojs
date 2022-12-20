import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.claim.MsgClaim", MsgClaim]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/ollo.claim.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/ollo.claim.MsgClaim",
        value
      };
    }

  },
  fromPartial: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/ollo.claim.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    }

  }
};