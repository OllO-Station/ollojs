import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgApplyMarketMaker, MsgClaimIncentive } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.incentive.v1.MsgApplyMarketMaker", MsgApplyMarketMaker], ["/ollo.incentive.v1.MsgClaimIncentive", MsgClaimIncentive]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    applyMarketMaker(value: MsgApplyMarketMaker) {
      return {
        typeUrl: "/ollo.incentive.v1.MsgApplyMarketMaker",
        value: MsgApplyMarketMaker.encode(value).finish()
      };
    },

    claimIncentive(value: MsgClaimIncentive) {
      return {
        typeUrl: "/ollo.incentive.v1.MsgClaimIncentive",
        value: MsgClaimIncentive.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    applyMarketMaker(value: MsgApplyMarketMaker) {
      return {
        typeUrl: "/ollo.incentive.v1.MsgApplyMarketMaker",
        value
      };
    },

    claimIncentive(value: MsgClaimIncentive) {
      return {
        typeUrl: "/ollo.incentive.v1.MsgClaimIncentive",
        value
      };
    }

  },
  fromPartial: {
    applyMarketMaker(value: MsgApplyMarketMaker) {
      return {
        typeUrl: "/ollo.incentive.v1.MsgApplyMarketMaker",
        value: MsgApplyMarketMaker.fromPartial(value)
      };
    },

    claimIncentive(value: MsgClaimIncentive) {
      return {
        typeUrl: "/ollo.incentive.v1.MsgClaimIncentive",
        value: MsgClaimIncentive.fromPartial(value)
      };
    }

  }
};