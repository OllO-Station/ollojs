import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateDenom, MsgMintDenom, MsgBurnDenom, MsgChangeDenomAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
  type: "/ollo.reserve.v1.MsgCreateDenom";
  value: {
    sender: string;
    subdenom: string;
  };
}
export interface AminoMsgMintDenom extends AminoMsg {
  type: "/ollo.reserve.v1.MsgMintDenom";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgBurnDenom extends AminoMsg {
  type: "/ollo.reserve.v1.MsgBurnDenom";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgChangeDenomAdmin extends AminoMsg {
  type: "/ollo.reserve.v1.MsgChangeDenomAdmin";
  value: {
    sender: string;
    denom: string;
    new_admin: string;
  };
}
export interface AminoMsgSetDenomMetadata extends AminoMsg {
  type: "/ollo.reserve.v1.MsgSetDenomMetadata";
  value: {
    sender: string;
    metadata: {
      description: string;
      denom_units: {
        denom: string;
        exponent: number;
        aliases: string[];
      }[];
      base: string;
      display: string;
      name: string;
      symbol: string;
      uri: string;
      uri_hash: string;
    };
  };
}
export interface AminoMsgForceTransfer extends AminoMsg {
  type: "/ollo.reserve.v1.MsgForceTransfer";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
    transferFromAddress: string;
    transferToAddress: string;
  };
}
export const AminoConverter = {
  "/ollo.reserve.v1.MsgCreateDenom": {
    aminoType: "/ollo.reserve.v1.MsgCreateDenom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): AminoMsgCreateDenom["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: AminoMsgCreateDenom["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom
      };
    }
  },
  "/ollo.reserve.v1.MsgMintDenom": {
    aminoType: "/ollo.reserve.v1.MsgMintDenom",
    toAmino: ({
      sender,
      amount
    }: MsgMintDenom): AminoMsgMintDenom["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: AminoMsgMintDenom["value"]): MsgMintDenom => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/ollo.reserve.v1.MsgBurnDenom": {
    aminoType: "/ollo.reserve.v1.MsgBurnDenom",
    toAmino: ({
      sender,
      amount
    }: MsgBurnDenom): AminoMsgBurnDenom["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: AminoMsgBurnDenom["value"]): MsgBurnDenom => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/ollo.reserve.v1.MsgChangeDenomAdmin": {
    aminoType: "/ollo.reserve.v1.MsgChangeDenomAdmin",
    toAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeDenomAdmin): AminoMsgChangeDenomAdmin["value"] => {
      return {
        sender,
        denom,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      sender,
      denom,
      new_admin
    }: AminoMsgChangeDenomAdmin["value"]): MsgChangeDenomAdmin => {
      return {
        sender,
        denom,
        newAdmin: new_admin
      };
    }
  },
  "/ollo.reserve.v1.MsgSetDenomMetadata": {
    aminoType: "/ollo.reserve.v1.MsgSetDenomMetadata",
    toAmino: ({
      sender,
      metadata
    }: MsgSetDenomMetadata): AminoMsgSetDenomMetadata["value"] => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denom_units: metadata.denomUnits.map(el0 => ({
            denom: el0.denom,
            exponent: el0.exponent,
            aliases: el0.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uri_hash: metadata.uriHash
        }
      };
    },
    fromAmino: ({
      sender,
      metadata
    }: AminoMsgSetDenomMetadata["value"]): MsgSetDenomMetadata => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denomUnits: metadata.denom_units.map(el1 => ({
            denom: el1.denom,
            exponent: el1.exponent,
            aliases: el1.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uriHash: metadata.uri_hash
        }
      };
    }
  },
  "/ollo.reserve.v1.MsgForceTransfer": {
    aminoType: "/ollo.reserve.v1.MsgForceTransfer",
    toAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress
    }: MsgForceTransfer): AminoMsgForceTransfer["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        transferFromAddress,
        transferToAddress
      };
    },
    fromAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress
    }: AminoMsgForceTransfer["value"]): MsgForceTransfer => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        transferFromAddress,
        transferToAddress
      };
    }
  }
};