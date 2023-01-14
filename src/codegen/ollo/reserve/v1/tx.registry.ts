import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMintDenom, MsgBurnDenom, MsgChangeDenomAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.reserve.v1.MsgCreateDenom", MsgCreateDenom], ["/ollo.reserve.v1.MsgMintDenom", MsgMintDenom], ["/ollo.reserve.v1.MsgBurnDenom", MsgBurnDenom], ["/ollo.reserve.v1.MsgChangeDenomAdmin", MsgChangeDenomAdmin], ["/ollo.reserve.v1.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/ollo.reserve.v1.MsgForceTransfer", MsgForceTransfer]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },

    mintDenom(value: MsgMintDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgMintDenom",
        value: MsgMintDenom.encode(value).finish()
      };
    },

    burnDenom(value: MsgBurnDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgBurnDenom",
        value: MsgBurnDenom.encode(value).finish()
      };
    },

    changeDenomAdmin(value: MsgChangeDenomAdmin) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgChangeDenomAdmin",
        value: MsgChangeDenomAdmin.encode(value).finish()
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    },

    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgForceTransfer",
        value: MsgForceTransfer.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgCreateDenom",
        value
      };
    },

    mintDenom(value: MsgMintDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgMintDenom",
        value
      };
    },

    burnDenom(value: MsgBurnDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgBurnDenom",
        value
      };
    },

    changeDenomAdmin(value: MsgChangeDenomAdmin) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgChangeDenomAdmin",
        value
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgSetDenomMetadata",
        value
      };
    },

    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgForceTransfer",
        value
      };
    }

  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },

    mintDenom(value: MsgMintDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgMintDenom",
        value: MsgMintDenom.fromPartial(value)
      };
    },

    burnDenom(value: MsgBurnDenom) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgBurnDenom",
        value: MsgBurnDenom.fromPartial(value)
      };
    },

    changeDenomAdmin(value: MsgChangeDenomAdmin) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgChangeDenomAdmin",
        value: MsgChangeDenomAdmin.fromPartial(value)
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    },

    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/ollo.reserve.v1.MsgForceTransfer",
        value: MsgForceTransfer.fromPartial(value)
      };
    }

  }
};