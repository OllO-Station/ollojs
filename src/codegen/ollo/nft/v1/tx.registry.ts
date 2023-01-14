import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueDenom, MsgTransferDenom, MsgMintNFT, MsgBurnNFT, MsgEditNFT, MsgSendNFT } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.nft.v1.MsgIssueDenom", MsgIssueDenom], ["/ollo.nft.v1.MsgTransferDenom", MsgTransferDenom], ["/ollo.nft.v1.MsgMintNFT", MsgMintNFT], ["/ollo.nft.v1.MsgBurnNFT", MsgBurnNFT], ["/ollo.nft.v1.MsgEditNFT", MsgEditNFT], ["/ollo.nft.v1.MsgSendNFT", MsgSendNFT]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    issueDenom(value: MsgIssueDenom) {
      return {
        typeUrl: "/ollo.nft.v1.MsgIssueDenom",
        value: MsgIssueDenom.encode(value).finish()
      };
    },

    transferDenom(value: MsgTransferDenom) {
      return {
        typeUrl: "/ollo.nft.v1.MsgTransferDenom",
        value: MsgTransferDenom.encode(value).finish()
      };
    },

    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgMintNFT",
        value: MsgMintNFT.encode(value).finish()
      };
    },

    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgBurnNFT",
        value: MsgBurnNFT.encode(value).finish()
      };
    },

    editNFT(value: MsgEditNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgEditNFT",
        value: MsgEditNFT.encode(value).finish()
      };
    },

    sendNFT(value: MsgSendNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgSendNFT",
        value: MsgSendNFT.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    issueDenom(value: MsgIssueDenom) {
      return {
        typeUrl: "/ollo.nft.v1.MsgIssueDenom",
        value
      };
    },

    transferDenom(value: MsgTransferDenom) {
      return {
        typeUrl: "/ollo.nft.v1.MsgTransferDenom",
        value
      };
    },

    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgMintNFT",
        value
      };
    },

    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgBurnNFT",
        value
      };
    },

    editNFT(value: MsgEditNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgEditNFT",
        value
      };
    },

    sendNFT(value: MsgSendNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgSendNFT",
        value
      };
    }

  },
  fromPartial: {
    issueDenom(value: MsgIssueDenom) {
      return {
        typeUrl: "/ollo.nft.v1.MsgIssueDenom",
        value: MsgIssueDenom.fromPartial(value)
      };
    },

    transferDenom(value: MsgTransferDenom) {
      return {
        typeUrl: "/ollo.nft.v1.MsgTransferDenom",
        value: MsgTransferDenom.fromPartial(value)
      };
    },

    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgMintNFT",
        value: MsgMintNFT.fromPartial(value)
      };
    },

    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgBurnNFT",
        value: MsgBurnNFT.fromPartial(value)
      };
    },

    editNFT(value: MsgEditNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgEditNFT",
        value: MsgEditNFT.fromPartial(value)
      };
    },

    sendNFT(value: MsgSendNFT) {
      return {
        typeUrl: "/ollo.nft.v1.MsgSendNFT",
        value: MsgSendNFT.fromPartial(value)
      };
    }

  }
};