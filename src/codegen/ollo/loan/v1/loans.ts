import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Loans {
  id: Long;
  amount: string;
  fee: string;
  collateral: string;
  deadline: string;
  state: string;
  borrower: string;
  lender: string;
}
export interface LoansSDKType {
  id: Long;
  amount: string;
  fee: string;
  collateral: string;
  deadline: string;
  state: string;
  borrower: string;
  lender: string;
}

function createBaseLoans(): Loans {
  return {
    id: Long.UZERO,
    amount: "",
    fee: "",
    collateral: "",
    deadline: "",
    state: "",
    borrower: "",
    lender: ""
  };
}

export const Loans = {
  encode(message: Loans, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }

    if (message.collateral !== "") {
      writer.uint32(34).string(message.collateral);
    }

    if (message.deadline !== "") {
      writer.uint32(42).string(message.deadline);
    }

    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }

    if (message.borrower !== "") {
      writer.uint32(58).string(message.borrower);
    }

    if (message.lender !== "") {
      writer.uint32(66).string(message.lender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Loans {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoans();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.fee = reader.string();
          break;

        case 4:
          message.collateral = reader.string();
          break;

        case 5:
          message.deadline = reader.string();
          break;

        case 6:
          message.state = reader.string();
          break;

        case 7:
          message.borrower = reader.string();
          break;

        case 8:
          message.lender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Loans>): Loans {
    const message = createBaseLoans();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount ?? "";
    message.fee = object.fee ?? "";
    message.collateral = object.collateral ?? "";
    message.deadline = object.deadline ?? "";
    message.state = object.state ?? "";
    message.borrower = object.borrower ?? "";
    message.lender = object.lender ?? "";
    return message;
  }

};