import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestLoan, MsgApproveLoan, MsgRepayLoan, MsgLiquidateLoan, MsgCancelLoan } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.loan.v1.MsgRequestLoan", MsgRequestLoan], ["/ollo.loan.v1.MsgApproveLoan", MsgApproveLoan], ["/ollo.loan.v1.MsgRepayLoan", MsgRepayLoan], ["/ollo.loan.v1.MsgLiquidateLoan", MsgLiquidateLoan], ["/ollo.loan.v1.MsgCancelLoan", MsgCancelLoan]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    requestLoan(value: MsgRequestLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgRequestLoan",
        value: MsgRequestLoan.encode(value).finish()
      };
    },

    approveLoan(value: MsgApproveLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgApproveLoan",
        value: MsgApproveLoan.encode(value).finish()
      };
    },

    repayLoan(value: MsgRepayLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgRepayLoan",
        value: MsgRepayLoan.encode(value).finish()
      };
    },

    liquidateLoan(value: MsgLiquidateLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgLiquidateLoan",
        value: MsgLiquidateLoan.encode(value).finish()
      };
    },

    cancelLoan(value: MsgCancelLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgCancelLoan",
        value: MsgCancelLoan.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    requestLoan(value: MsgRequestLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgRequestLoan",
        value
      };
    },

    approveLoan(value: MsgApproveLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgApproveLoan",
        value
      };
    },

    repayLoan(value: MsgRepayLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgRepayLoan",
        value
      };
    },

    liquidateLoan(value: MsgLiquidateLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgLiquidateLoan",
        value
      };
    },

    cancelLoan(value: MsgCancelLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgCancelLoan",
        value
      };
    }

  },
  fromPartial: {
    requestLoan(value: MsgRequestLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgRequestLoan",
        value: MsgRequestLoan.fromPartial(value)
      };
    },

    approveLoan(value: MsgApproveLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgApproveLoan",
        value: MsgApproveLoan.fromPartial(value)
      };
    },

    repayLoan(value: MsgRepayLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgRepayLoan",
        value: MsgRepayLoan.fromPartial(value)
      };
    },

    liquidateLoan(value: MsgLiquidateLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgLiquidateLoan",
        value: MsgLiquidateLoan.fromPartial(value)
      };
    },

    cancelLoan(value: MsgCancelLoan) {
      return {
        typeUrl: "/ollo.loan.v1.MsgCancelLoan",
        value: MsgCancelLoan.fromPartial(value)
      };
    }

  }
};