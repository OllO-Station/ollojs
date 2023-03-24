import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgLiquidUnstake } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.lstaking.v1.MsgLiquidStake", MsgLiquidStake], ["/ollo.lstaking.v1.MsgLiquidUnstake", MsgLiquidUnstake]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/ollo.lstaking.v1.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },

    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/ollo.lstaking.v1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/ollo.lstaking.v1.MsgLiquidStake",
        value
      };
    },

    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/ollo.lstaking.v1.MsgLiquidUnstake",
        value
      };
    }

  },
  fromPartial: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/ollo.lstaking.v1.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },

    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/ollo.lstaking.v1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.fromPartial(value)
      };
    }

  }
};