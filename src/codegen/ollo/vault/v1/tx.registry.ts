import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRequest, MsgDepositRequest, MsgWithdrawRequest, MsgDrawRequest, MsgRepayRequest, MsgCloseRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.vault.v1.MsgCreateRequest", MsgCreateRequest], ["/ollo.vault.v1.MsgDepositRequest", MsgDepositRequest], ["/ollo.vault.v1.MsgWithdrawRequest", MsgWithdrawRequest], ["/ollo.vault.v1.MsgDrawRequest", MsgDrawRequest], ["/ollo.vault.v1.MsgRepayRequest", MsgRepayRequest], ["/ollo.vault.v1.MsgCloseRequest", MsgCloseRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    msgCreate(value: MsgCreateRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgCreateRequest",
        value: MsgCreateRequest.encode(value).finish()
      };
    },

    msgDeposit(value: MsgDepositRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgDepositRequest",
        value: MsgDepositRequest.encode(value).finish()
      };
    },

    msgWithdraw(value: MsgWithdrawRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgWithdrawRequest",
        value: MsgWithdrawRequest.encode(value).finish()
      };
    },

    msgDraw(value: MsgDrawRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgDrawRequest",
        value: MsgDrawRequest.encode(value).finish()
      };
    },

    msgRepay(value: MsgRepayRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgRepayRequest",
        value: MsgRepayRequest.encode(value).finish()
      };
    },

    msgClose(value: MsgCloseRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgCloseRequest",
        value: MsgCloseRequest.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    msgCreate(value: MsgCreateRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgCreateRequest",
        value
      };
    },

    msgDeposit(value: MsgDepositRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgDepositRequest",
        value
      };
    },

    msgWithdraw(value: MsgWithdrawRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgWithdrawRequest",
        value
      };
    },

    msgDraw(value: MsgDrawRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgDrawRequest",
        value
      };
    },

    msgRepay(value: MsgRepayRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgRepayRequest",
        value
      };
    },

    msgClose(value: MsgCloseRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgCloseRequest",
        value
      };
    }

  },
  fromPartial: {
    msgCreate(value: MsgCreateRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgCreateRequest",
        value: MsgCreateRequest.fromPartial(value)
      };
    },

    msgDeposit(value: MsgDepositRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgDepositRequest",
        value: MsgDepositRequest.fromPartial(value)
      };
    },

    msgWithdraw(value: MsgWithdrawRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgWithdrawRequest",
        value: MsgWithdrawRequest.fromPartial(value)
      };
    },

    msgDraw(value: MsgDrawRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgDrawRequest",
        value: MsgDrawRequest.fromPartial(value)
      };
    },

    msgRepay(value: MsgRepayRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgRepayRequest",
        value: MsgRepayRequest.fromPartial(value)
      };
    },

    msgClose(value: MsgCloseRequest) {
      return {
        typeUrl: "/ollo.vault.v1.MsgCloseRequest",
        value: MsgCloseRequest.fromPartial(value)
      };
    }

  }
};