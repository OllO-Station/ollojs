import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueToken, MsgEditToken, MsgMintToken, MsgBurnToken, MsgTransferTokenOwner } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.token.v1.MsgIssueToken", MsgIssueToken], ["/ollo.token.v1.MsgEditToken", MsgEditToken], ["/ollo.token.v1.MsgMintToken", MsgMintToken], ["/ollo.token.v1.MsgBurnToken", MsgBurnToken], ["/ollo.token.v1.MsgTransferTokenOwner", MsgTransferTokenOwner]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    issueToken(value: MsgIssueToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgIssueToken",
        value: MsgIssueToken.encode(value).finish()
      };
    },

    editToken(value: MsgEditToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgEditToken",
        value: MsgEditToken.encode(value).finish()
      };
    },

    mintToken(value: MsgMintToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgMintToken",
        value: MsgMintToken.encode(value).finish()
      };
    },

    burnToken(value: MsgBurnToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgBurnToken",
        value: MsgBurnToken.encode(value).finish()
      };
    },

    transferTokenOwner(value: MsgTransferTokenOwner) {
      return {
        typeUrl: "/ollo.token.v1.MsgTransferTokenOwner",
        value: MsgTransferTokenOwner.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    issueToken(value: MsgIssueToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgIssueToken",
        value
      };
    },

    editToken(value: MsgEditToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgEditToken",
        value
      };
    },

    mintToken(value: MsgMintToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgMintToken",
        value
      };
    },

    burnToken(value: MsgBurnToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgBurnToken",
        value
      };
    },

    transferTokenOwner(value: MsgTransferTokenOwner) {
      return {
        typeUrl: "/ollo.token.v1.MsgTransferTokenOwner",
        value
      };
    }

  },
  fromPartial: {
    issueToken(value: MsgIssueToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgIssueToken",
        value: MsgIssueToken.fromPartial(value)
      };
    },

    editToken(value: MsgEditToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgEditToken",
        value: MsgEditToken.fromPartial(value)
      };
    },

    mintToken(value: MsgMintToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgMintToken",
        value: MsgMintToken.fromPartial(value)
      };
    },

    burnToken(value: MsgBurnToken) {
      return {
        typeUrl: "/ollo.token.v1.MsgBurnToken",
        value: MsgBurnToken.fromPartial(value)
      };
    },

    transferTokenOwner(value: MsgTransferTokenOwner) {
      return {
        typeUrl: "/ollo.token.v1.MsgTransferTokenOwner",
        value: MsgTransferTokenOwner.fromPartial(value)
      };
    }

  }
};