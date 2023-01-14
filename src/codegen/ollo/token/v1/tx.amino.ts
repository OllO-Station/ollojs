import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgIssueToken, MsgEditToken, MsgMintToken, MsgBurnToken, MsgTransferTokenOwner } from "./tx";
export interface AminoMsgIssueToken extends AminoMsg {
  type: "/ollo.token.v1.MsgIssueToken";
  value: {
    symbol: string;
    name: string;
    scale: number;
    min_unit: string;
    initial_supply: string;
    max_supply: string;
    mintable: boolean;
    owner: string;
  };
}
export interface AminoMsgEditToken extends AminoMsg {
  type: "/ollo.token.v1.MsgEditToken";
  value: {
    symbol: string;
    name: string;
    max_supply: string;
    mintable: string;
    owner: string;
  };
}
export interface AminoMsgMintToken extends AminoMsg {
  type: "/ollo.token.v1.MsgMintToken";
  value: {
    symbol: string;
    amount: string;
    to: string;
    owner: string;
  };
}
export interface AminoMsgBurnToken extends AminoMsg {
  type: "/ollo.token.v1.MsgBurnToken";
  value: {
    symbol: string;
    amount: string;
    sender: string;
  };
}
export interface AminoMsgTransferTokenOwner extends AminoMsg {
  type: "/ollo.token.v1.MsgTransferTokenOwner";
  value: {
    src_owner: string;
    dst_owner: string;
    symbol: string;
  };
}
export const AminoConverter = {
  "/ollo.token.v1.MsgIssueToken": {
    aminoType: "/ollo.token.v1.MsgIssueToken",
    toAmino: ({
      symbol,
      name,
      scale,
      minUnit,
      initialSupply,
      maxSupply,
      mintable,
      owner
    }: MsgIssueToken): AminoMsgIssueToken["value"] => {
      return {
        symbol,
        name,
        scale,
        min_unit: minUnit,
        initial_supply: initialSupply.toString(),
        max_supply: maxSupply.toString(),
        mintable,
        owner
      };
    },
    fromAmino: ({
      symbol,
      name,
      scale,
      min_unit,
      initial_supply,
      max_supply,
      mintable,
      owner
    }: AminoMsgIssueToken["value"]): MsgIssueToken => {
      return {
        symbol,
        name,
        scale,
        minUnit: min_unit,
        initialSupply: Long.fromString(initial_supply),
        maxSupply: Long.fromString(max_supply),
        mintable,
        owner
      };
    }
  },
  "/ollo.token.v1.MsgEditToken": {
    aminoType: "/ollo.token.v1.MsgEditToken",
    toAmino: ({
      symbol,
      name,
      maxSupply,
      mintable,
      owner
    }: MsgEditToken): AminoMsgEditToken["value"] => {
      return {
        symbol,
        name,
        max_supply: maxSupply.toString(),
        mintable,
        owner
      };
    },
    fromAmino: ({
      symbol,
      name,
      max_supply,
      mintable,
      owner
    }: AminoMsgEditToken["value"]): MsgEditToken => {
      return {
        symbol,
        name,
        maxSupply: Long.fromString(max_supply),
        mintable,
        owner
      };
    }
  },
  "/ollo.token.v1.MsgMintToken": {
    aminoType: "/ollo.token.v1.MsgMintToken",
    toAmino: ({
      symbol,
      amount,
      to,
      owner
    }: MsgMintToken): AminoMsgMintToken["value"] => {
      return {
        symbol,
        amount: amount.toString(),
        to,
        owner
      };
    },
    fromAmino: ({
      symbol,
      amount,
      to,
      owner
    }: AminoMsgMintToken["value"]): MsgMintToken => {
      return {
        symbol,
        amount: Long.fromString(amount),
        to,
        owner
      };
    }
  },
  "/ollo.token.v1.MsgBurnToken": {
    aminoType: "/ollo.token.v1.MsgBurnToken",
    toAmino: ({
      symbol,
      amount,
      sender
    }: MsgBurnToken): AminoMsgBurnToken["value"] => {
      return {
        symbol,
        amount: amount.toString(),
        sender
      };
    },
    fromAmino: ({
      symbol,
      amount,
      sender
    }: AminoMsgBurnToken["value"]): MsgBurnToken => {
      return {
        symbol,
        amount: Long.fromString(amount),
        sender
      };
    }
  },
  "/ollo.token.v1.MsgTransferTokenOwner": {
    aminoType: "/ollo.token.v1.MsgTransferTokenOwner",
    toAmino: ({
      srcOwner,
      dstOwner,
      symbol
    }: MsgTransferTokenOwner): AminoMsgTransferTokenOwner["value"] => {
      return {
        src_owner: srcOwner,
        dst_owner: dstOwner,
        symbol
      };
    },
    fromAmino: ({
      src_owner,
      dst_owner,
      symbol
    }: AminoMsgTransferTokenOwner["value"]): MsgTransferTokenOwner => {
      return {
        srcOwner: src_owner,
        dstOwner: dst_owner,
        symbol
      };
    }
  }
};