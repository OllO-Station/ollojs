import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Borrow {
  borrower: string;
  createdAt?: Date;
  amountOut?: Coin;
  assetId: Long;
}
export interface BorrowSDKType {
  borrower: string;
  created_at?: Date;
  amount_out?: CoinSDKType;
  asset_id: Long;
}

function createBaseBorrow(): Borrow {
  return {
    borrower: "",
    createdAt: undefined,
    amountOut: undefined,
    assetId: Long.UZERO
  };
}

export const Borrow = {
  encode(message: Borrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }

    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(26).fork()).ldelim();
    }

    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Borrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;

        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.amountOut = Coin.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<Borrow>): Borrow {
    const message = createBaseBorrow();
    message.borrower = object.borrower ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.assetId = object.assetId !== undefined && object.assetId !== null ? Long.fromValue(object.assetId) : Long.UZERO;
    return message;
  }

};