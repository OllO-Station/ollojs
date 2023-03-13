import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProprosalSetCommission {
  title: string;
  description: string;
  commission?: Coin;
}
export interface ProprosalSetCommissionSDKType {
  title: string;
  description: string;
  commission?: CoinSDKType;
}

function createBaseProprosalSetCommission(): ProprosalSetCommission {
  return {
    title: "",
    description: "",
    commission: undefined
  };
}

export const ProprosalSetCommission = {
  encode(message: ProprosalSetCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.commission !== undefined) {
      Coin.encode(message.commission, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalSetCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProprosalSetCommission();

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
          message.commission = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProprosalSetCommission>): ProprosalSetCommission {
    const message = createBaseProprosalSetCommission();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.commission = object.commission !== undefined && object.commission !== null ? Coin.fromPartial(object.commission) : undefined;
    return message;
  }

};