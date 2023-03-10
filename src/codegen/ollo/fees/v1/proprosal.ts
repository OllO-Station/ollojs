import { FeeToken, FeeTokenSDKType } from "./fees";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProposalSetFeeToken {
  title: string;
  description: string;
  feeToken?: FeeToken;
}
export interface ProposalSetFeeTokenSDKType {
  title: string;
  description: string;
  fee_token?: FeeTokenSDKType;
}

function createBaseProposalSetFeeToken(): ProposalSetFeeToken {
  return {
    title: "",
    description: "",
    feeToken: undefined
  };
}

export const ProposalSetFeeToken = {
  encode(message: ProposalSetFeeToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.feeToken !== undefined) {
      FeeToken.encode(message.feeToken, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalSetFeeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalSetFeeToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.feeToken = FeeToken.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProposalSetFeeToken>): ProposalSetFeeToken {
    const message = createBaseProposalSetFeeToken();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.feeToken = object.feeToken !== undefined && object.feeToken !== null ? FeeToken.fromPartial(object.feeToken) : undefined;
    return message;
  }

};