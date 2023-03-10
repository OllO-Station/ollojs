import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Loan {
  lender: string;
  createdAt?: Date;
  amountIn?: Coin;
  assetId: Long;
}
export interface LoanSDKType {
  lender: string;
  created_at?: Date;
  amount_in?: CoinSDKType;
  asset_id: Long;
}

function createBaseLoan(): Loan {
  return {
    lender: "",
    createdAt: undefined,
    amountIn: undefined,
    assetId: Long.UZERO
  };
}

export const Loan = {
  encode(message: Loan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }

    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }

    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(26).fork()).ldelim();
    }

    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Loan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lender = reader.string();
          break;

        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.assetId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Loan>): Loan {
    const message = createBaseLoan();
    message.lender = object.lender ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.assetId = object.assetId !== undefined && object.assetId !== null ? Long.fromValue(object.assetId) : Long.UZERO;
    return message;
  }

};