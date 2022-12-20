import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestLoan, MsgApproveLoan, MsgRepayLoan, MsgLiquidateLoan, MsgCancelLoan } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.loan.MsgRequestLoan", MsgRequestLoan], ["/ollo.loan.MsgApproveLoan", MsgApproveLoan], ["/ollo.loan.MsgRepayLoan", MsgRepayLoan], ["/ollo.loan.MsgLiquidateLoan", MsgLiquidateLoan], ["/ollo.loan.MsgCancelLoan", MsgCancelLoan]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    requestLoan(value: MsgRequestLoan) {
      return {
        typeUrl: "/ollo.loan.MsgRequestLoan",
        value: MsgRequestLoan.encode(value).finish()
      };
    },

    approveLoan(value: MsgApproveLoan) {
      return {
        typeUrl: "/ollo.loan.MsgApproveLoan",
        value: MsgApproveLoan.encode(value).finish()
      };
    },

    repayLoan(value: MsgRepayLoan) {
      return {
        typeUrl: "/ollo.loan.MsgRepayLoan",
        value: MsgRepayLoan.encode(value).finish()
      };
    },

    liquidateLoan(value: MsgLiquidateLoan) {
      return {
        typeUrl: "/ollo.loan.MsgLiquidateLoan",
        value: MsgLiquidateLoan.encode(value).finish()
      };
    },

    cancelLoan(value: MsgCancelLoan) {
      return {
        typeUrl: "/ollo.loan.MsgCancelLoan",
        value: MsgCancelLoan.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    requestLoan(value: MsgRequestLoan) {
      return {
        typeUrl: "/ollo.loan.MsgRequestLoan",
        value
      };
    },

    approveLoan(value: MsgApproveLoan) {
      return {
        typeUrl: "/ollo.loan.MsgApproveLoan",
        value
      };
    },

    repayLoan(value: MsgRepayLoan) {
      return {
        typeUrl: "/ollo.loan.MsgRepayLoan",
        value
      };
    },

    liquidateLoan(value: MsgLiquidateLoan) {
      return {
        typeUrl: "/ollo.loan.MsgLiquidateLoan",
        value
      };
    },

    cancelLoan(value: MsgCancelLoan) {
      return {
        typeUrl: "/ollo.loan.MsgCancelLoan",
        value
      };
    }

  },
  fromPartial: {
    requestLoan(value: MsgRequestLoan) {
      return {
        typeUrl: "/ollo.loan.MsgRequestLoan",
        value: MsgRequestLoan.fromPartial(value)
      };
    },

    approveLoan(value: MsgApproveLoan) {
      return {
        typeUrl: "/ollo.loan.MsgApproveLoan",
        value: MsgApproveLoan.fromPartial(value)
      };
    },

    repayLoan(value: MsgRepayLoan) {
      return {
        typeUrl: "/ollo.loan.MsgRepayLoan",
        value: MsgRepayLoan.fromPartial(value)
      };
    },

    liquidateLoan(value: MsgLiquidateLoan) {
      return {
        typeUrl: "/ollo.loan.MsgLiquidateLoan",
        value: MsgLiquidateLoan.fromPartial(value)
      };
    },

    cancelLoan(value: MsgCancelLoan) {
      return {
        typeUrl: "/ollo.loan.MsgCancelLoan",
        value: MsgCancelLoan.fromPartial(value)
      };
    }

  }
};