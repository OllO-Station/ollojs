import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateLockRequest, MsgDepositAssetRequest, MsgWithdrawAssetRequest, MsgCloseLockRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.lock.v1.MsgCreateLockRequest", MsgCreateLockRequest], ["/ollo.lock.v1.MsgDepositAssetRequest", MsgDepositAssetRequest], ["/ollo.lock.v1.MsgWithdrawAssetRequest", MsgWithdrawAssetRequest], ["/ollo.lock.v1.MsgCloseLockRequest", MsgCloseLockRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    msgCreateLock(value: MsgCreateLockRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgCreateLockRequest",
        value: MsgCreateLockRequest.encode(value).finish()
      };
    },

    msgDepositAsset(value: MsgDepositAssetRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgDepositAssetRequest",
        value: MsgDepositAssetRequest.encode(value).finish()
      };
    },

    msgWithdrawAsset(value: MsgWithdrawAssetRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgWithdrawAssetRequest",
        value: MsgWithdrawAssetRequest.encode(value).finish()
      };
    },

    msgCloseLock(value: MsgCloseLockRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgCloseLockRequest",
        value: MsgCloseLockRequest.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    msgCreateLock(value: MsgCreateLockRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgCreateLockRequest",
        value
      };
    },

    msgDepositAsset(value: MsgDepositAssetRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgDepositAssetRequest",
        value
      };
    },

    msgWithdrawAsset(value: MsgWithdrawAssetRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgWithdrawAssetRequest",
        value
      };
    },

    msgCloseLock(value: MsgCloseLockRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgCloseLockRequest",
        value
      };
    }

  },
  fromPartial: {
    msgCreateLock(value: MsgCreateLockRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgCreateLockRequest",
        value: MsgCreateLockRequest.fromPartial(value)
      };
    },

    msgDepositAsset(value: MsgDepositAssetRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgDepositAssetRequest",
        value: MsgDepositAssetRequest.fromPartial(value)
      };
    },

    msgWithdrawAsset(value: MsgWithdrawAssetRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgWithdrawAssetRequest",
        value: MsgWithdrawAssetRequest.fromPartial(value)
      };
    },

    msgCloseLock(value: MsgCloseLockRequest) {
      return {
        typeUrl: "/ollo.lock.v1.MsgCloseLockRequest",
        value: MsgCloseLockRequest.fromPartial(value)
      };
    }

  }
};