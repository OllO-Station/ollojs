import { AminoMsg } from "@cosmjs/amino";
import { MsgBuyName, MsgSellName, MsgSetName, MsgDeleteName, MsgAddThread, MsgDeleteThread } from "./tx";
export interface AminoMsgBuyName extends AminoMsg {
  type: "/ollo.ons.v1.MsgBuyName";
  value: {
    creator: string;
    name: string;
    bidderAddr: string;
    bid: string;
  };
}
export interface AminoMsgSellName extends AminoMsg {
  type: "/ollo.ons.v1.MsgSellName";
  value: {
    creator: string;
    name: string;
    sellerAddr: string;
    offer: string;
  };
}
export interface AminoMsgSetName extends AminoMsg {
  type: "/ollo.ons.v1.MsgSetName";
  value: {
    creatorAddr: string;
    name: string;
    value: string;
  };
}
export interface AminoMsgDeleteName extends AminoMsg {
  type: "/ollo.ons.v1.MsgDeleteName";
  value: {
    creatorAddr: string;
    name: string;
  };
}
export interface AminoMsgAddThread extends AminoMsg {
  type: "/ollo.ons.v1.MsgAddThread";
  value: {
    creator: string;
    name: string;
    thread: string;
    addr: string;
    offer: string;
  };
}
export interface AminoMsgDeleteThread extends AminoMsg {
  type: "/ollo.ons.v1.MsgDeleteThread";
  value: {
    creator: string;
    name: string;
    thread: string;
    addr: string;
  };
}
export const AminoConverter = {
  "/ollo.ons.v1.MsgBuyName": {
    aminoType: "/ollo.ons.v1.MsgBuyName",
    toAmino: ({
      creator,
      name,
      bidderAddr,
      bid
    }: MsgBuyName): AminoMsgBuyName["value"] => {
      return {
        creator,
        name,
        bidderAddr,
        bid
      };
    },
    fromAmino: ({
      creator,
      name,
      bidderAddr,
      bid
    }: AminoMsgBuyName["value"]): MsgBuyName => {
      return {
        creator,
        name,
        bidderAddr,
        bid
      };
    }
  },
  "/ollo.ons.v1.MsgSellName": {
    aminoType: "/ollo.ons.v1.MsgSellName",
    toAmino: ({
      creator,
      name,
      sellerAddr,
      offer
    }: MsgSellName): AminoMsgSellName["value"] => {
      return {
        creator,
        name,
        sellerAddr,
        offer
      };
    },
    fromAmino: ({
      creator,
      name,
      sellerAddr,
      offer
    }: AminoMsgSellName["value"]): MsgSellName => {
      return {
        creator,
        name,
        sellerAddr,
        offer
      };
    }
  },
  "/ollo.ons.v1.MsgSetName": {
    aminoType: "/ollo.ons.v1.MsgSetName",
    toAmino: ({
      creatorAddr,
      name,
      value
    }: MsgSetName): AminoMsgSetName["value"] => {
      return {
        creatorAddr,
        name,
        value
      };
    },
    fromAmino: ({
      creatorAddr,
      name,
      value
    }: AminoMsgSetName["value"]): MsgSetName => {
      return {
        creatorAddr,
        name,
        value
      };
    }
  },
  "/ollo.ons.v1.MsgDeleteName": {
    aminoType: "/ollo.ons.v1.MsgDeleteName",
    toAmino: ({
      creatorAddr,
      name
    }: MsgDeleteName): AminoMsgDeleteName["value"] => {
      return {
        creatorAddr,
        name
      };
    },
    fromAmino: ({
      creatorAddr,
      name
    }: AminoMsgDeleteName["value"]): MsgDeleteName => {
      return {
        creatorAddr,
        name
      };
    }
  },
  "/ollo.ons.v1.MsgAddThread": {
    aminoType: "/ollo.ons.v1.MsgAddThread",
    toAmino: ({
      creator,
      name,
      thread,
      addr,
      offer
    }: MsgAddThread): AminoMsgAddThread["value"] => {
      return {
        creator,
        name,
        thread,
        addr,
        offer
      };
    },
    fromAmino: ({
      creator,
      name,
      thread,
      addr,
      offer
    }: AminoMsgAddThread["value"]): MsgAddThread => {
      return {
        creator,
        name,
        thread,
        addr,
        offer
      };
    }
  },
  "/ollo.ons.v1.MsgDeleteThread": {
    aminoType: "/ollo.ons.v1.MsgDeleteThread",
    toAmino: ({
      creator,
      name,
      thread,
      addr
    }: MsgDeleteThread): AminoMsgDeleteThread["value"] => {
      return {
        creator,
        name,
        thread,
        addr
      };
    },
    fromAmino: ({
      creator,
      name,
      thread,
      addr
    }: AminoMsgDeleteThread["value"]): MsgDeleteThread => {
      return {
        creator,
        name,
        thread,
        addr
      };
    }
  }
};