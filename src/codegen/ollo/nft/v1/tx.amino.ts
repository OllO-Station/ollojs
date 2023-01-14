import { AminoMsg } from "@cosmjs/amino";
import { MsgIssueDenom, MsgTransferDenom, MsgMintNFT, MsgBurnNFT, MsgEditNFT, MsgSendNFT } from "./tx";
export interface AminoMsgIssueDenom extends AminoMsg {
  type: "/ollo.nft.v1.MsgIssueDenom";
  value: {
    id: string;
    name: string;
    schema: string;
    sender: string;
    symbol: string;
    mint_restricted: boolean;
    update_restricted: boolean;
    description: string;
    uri: string;
    uri_hash: string;
    data: string;
  };
}
export interface AminoMsgTransferDenom extends AminoMsg {
  type: "/ollo.nft.v1.MsgTransferDenom";
  value: {
    id: string;
    sender: string;
    recipient: string;
  };
}
export interface AminoMsgMintNFT extends AminoMsg {
  type: "/ollo.nft.v1.MsgMintNFT";
  value: {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
    uri_hash: string;
  };
}
export interface AminoMsgBurnNFT extends AminoMsg {
  type: "/ollo.nft.v1.MsgBurnNFT";
  value: {
    id: string;
    denom_id: string;
    sender: string;
  };
}
export interface AminoMsgEditNFT extends AminoMsg {
  type: "/ollo.nft.v1.MsgEditNFT";
  value: {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    uri_hash: string;
  };
}
export interface AminoMsgSendNFT extends AminoMsg {
  type: "/ollo.nft.v1.MsgSendNFT";
  value: {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
    uri_hash: string;
  };
}
export const AminoConverter = {
  "/ollo.nft.v1.MsgIssueDenom": {
    aminoType: "/ollo.nft.v1.MsgIssueDenom",
    toAmino: ({
      id,
      name,
      schema,
      sender,
      symbol,
      mintRestricted,
      updateRestricted,
      description,
      uri,
      uriHash,
      data
    }: MsgIssueDenom): AminoMsgIssueDenom["value"] => {
      return {
        id,
        name,
        schema,
        sender,
        symbol,
        mint_restricted: mintRestricted,
        update_restricted: updateRestricted,
        description,
        uri,
        uri_hash: uriHash,
        data
      };
    },
    fromAmino: ({
      id,
      name,
      schema,
      sender,
      symbol,
      mint_restricted,
      update_restricted,
      description,
      uri,
      uri_hash,
      data
    }: AminoMsgIssueDenom["value"]): MsgIssueDenom => {
      return {
        id,
        name,
        schema,
        sender,
        symbol,
        mintRestricted: mint_restricted,
        updateRestricted: update_restricted,
        description,
        uri,
        uriHash: uri_hash,
        data
      };
    }
  },
  "/ollo.nft.v1.MsgTransferDenom": {
    aminoType: "/ollo.nft.v1.MsgTransferDenom",
    toAmino: ({
      id,
      sender,
      recipient
    }: MsgTransferDenom): AminoMsgTransferDenom["value"] => {
      return {
        id,
        sender,
        recipient
      };
    },
    fromAmino: ({
      id,
      sender,
      recipient
    }: AminoMsgTransferDenom["value"]): MsgTransferDenom => {
      return {
        id,
        sender,
        recipient
      };
    }
  },
  "/ollo.nft.v1.MsgMintNFT": {
    aminoType: "/ollo.nft.v1.MsgMintNFT",
    toAmino: ({
      id,
      denomId,
      name,
      uri,
      data,
      sender,
      recipient,
      uriHash
    }: MsgMintNFT): AminoMsgMintNFT["value"] => {
      return {
        id,
        denom_id: denomId,
        name,
        uri,
        data,
        sender,
        recipient,
        uri_hash: uriHash
      };
    },
    fromAmino: ({
      id,
      denom_id,
      name,
      uri,
      data,
      sender,
      recipient,
      uri_hash
    }: AminoMsgMintNFT["value"]): MsgMintNFT => {
      return {
        id,
        denomId: denom_id,
        name,
        uri,
        data,
        sender,
        recipient,
        uriHash: uri_hash
      };
    }
  },
  "/ollo.nft.v1.MsgBurnNFT": {
    aminoType: "/ollo.nft.v1.MsgBurnNFT",
    toAmino: ({
      id,
      denomId,
      sender
    }: MsgBurnNFT): AminoMsgBurnNFT["value"] => {
      return {
        id,
        denom_id: denomId,
        sender
      };
    },
    fromAmino: ({
      id,
      denom_id,
      sender
    }: AminoMsgBurnNFT["value"]): MsgBurnNFT => {
      return {
        id,
        denomId: denom_id,
        sender
      };
    }
  },
  "/ollo.nft.v1.MsgEditNFT": {
    aminoType: "/ollo.nft.v1.MsgEditNFT",
    toAmino: ({
      id,
      denomId,
      name,
      uri,
      data,
      sender,
      uriHash
    }: MsgEditNFT): AminoMsgEditNFT["value"] => {
      return {
        id,
        denom_id: denomId,
        name,
        uri,
        data,
        sender,
        uri_hash: uriHash
      };
    },
    fromAmino: ({
      id,
      denom_id,
      name,
      uri,
      data,
      sender,
      uri_hash
    }: AminoMsgEditNFT["value"]): MsgEditNFT => {
      return {
        id,
        denomId: denom_id,
        name,
        uri,
        data,
        sender,
        uriHash: uri_hash
      };
    }
  },
  "/ollo.nft.v1.MsgSendNFT": {
    aminoType: "/ollo.nft.v1.MsgSendNFT",
    toAmino: ({
      id,
      denomId,
      name,
      uri,
      data,
      sender,
      recipient,
      uriHash
    }: MsgSendNFT): AminoMsgSendNFT["value"] => {
      return {
        id,
        denom_id: denomId,
        name,
        uri,
        data,
        sender,
        recipient,
        uri_hash: uriHash
      };
    },
    fromAmino: ({
      id,
      denom_id,
      name,
      uri,
      data,
      sender,
      recipient,
      uri_hash
    }: AminoMsgSendNFT["value"]): MsgSendNFT => {
      return {
        id,
        denomId: denom_id,
        name,
        uri,
        data,
        sender,
        recipient,
        uriHash: uri_hash
      };
    }
  }
};