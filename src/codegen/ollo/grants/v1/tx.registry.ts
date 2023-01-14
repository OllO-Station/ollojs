import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFixedPriceAuction, MsgCreateBatchAuction, MsgCancelAuction, MsgPlaceBid, MsgModifyBid, MsgAddAllowedBidder } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ollo.grants.v1.MsgCreateFixedPriceAuction", MsgCreateFixedPriceAuction], ["/ollo.grants.v1.MsgCreateBatchAuction", MsgCreateBatchAuction], ["/ollo.grants.v1.MsgCancelAuction", MsgCancelAuction], ["/ollo.grants.v1.MsgPlaceBid", MsgPlaceBid], ["/ollo.grants.v1.MsgModifyBid", MsgModifyBid], ["/ollo.grants.v1.MsgAddAllowedBidder", MsgAddAllowedBidder]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createFixedPriceAuction(value: MsgCreateFixedPriceAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCreateFixedPriceAuction",
        value: MsgCreateFixedPriceAuction.encode(value).finish()
      };
    },

    createBatchAuction(value: MsgCreateBatchAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCreateBatchAuction",
        value: MsgCreateBatchAuction.encode(value).finish()
      };
    },

    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCancelAuction",
        value: MsgCancelAuction.encode(value).finish()
      };
    },

    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/ollo.grants.v1.MsgPlaceBid",
        value: MsgPlaceBid.encode(value).finish()
      };
    },

    modifyBid(value: MsgModifyBid) {
      return {
        typeUrl: "/ollo.grants.v1.MsgModifyBid",
        value: MsgModifyBid.encode(value).finish()
      };
    },

    addAllowedBidder(value: MsgAddAllowedBidder) {
      return {
        typeUrl: "/ollo.grants.v1.MsgAddAllowedBidder",
        value: MsgAddAllowedBidder.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createFixedPriceAuction(value: MsgCreateFixedPriceAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCreateFixedPriceAuction",
        value
      };
    },

    createBatchAuction(value: MsgCreateBatchAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCreateBatchAuction",
        value
      };
    },

    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCancelAuction",
        value
      };
    },

    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/ollo.grants.v1.MsgPlaceBid",
        value
      };
    },

    modifyBid(value: MsgModifyBid) {
      return {
        typeUrl: "/ollo.grants.v1.MsgModifyBid",
        value
      };
    },

    addAllowedBidder(value: MsgAddAllowedBidder) {
      return {
        typeUrl: "/ollo.grants.v1.MsgAddAllowedBidder",
        value
      };
    }

  },
  fromPartial: {
    createFixedPriceAuction(value: MsgCreateFixedPriceAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCreateFixedPriceAuction",
        value: MsgCreateFixedPriceAuction.fromPartial(value)
      };
    },

    createBatchAuction(value: MsgCreateBatchAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCreateBatchAuction",
        value: MsgCreateBatchAuction.fromPartial(value)
      };
    },

    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/ollo.grants.v1.MsgCancelAuction",
        value: MsgCancelAuction.fromPartial(value)
      };
    },

    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/ollo.grants.v1.MsgPlaceBid",
        value: MsgPlaceBid.fromPartial(value)
      };
    },

    modifyBid(value: MsgModifyBid) {
      return {
        typeUrl: "/ollo.grants.v1.MsgModifyBid",
        value: MsgModifyBid.fromPartial(value)
      };
    },

    addAllowedBidder(value: MsgAddAllowedBidder) {
      return {
        typeUrl: "/ollo.grants.v1.MsgAddAllowedBidder",
        value: MsgAddAllowedBidder.fromPartial(value)
      };
    }

  }
};