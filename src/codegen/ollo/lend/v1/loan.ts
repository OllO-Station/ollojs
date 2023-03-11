import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum LoanStatus {
  LOAN_STATUS_UNSPECIFIED = 0,
  LOAN_STATUS_ACTIVE = 1,
  LOAN_STATUS_REPAID = 2,
  LOAN_STATUS_CANCELLED = 3,
  LOAN_STATUS_REQUESTED = 4,
  UNRECOGNIZED = -1,
}
export const LoanStatusSDKType = LoanStatus;
export function loanStatusFromJSON(object: any): LoanStatus {
  switch (object) {
    case 0:
    case "LOAN_STATUS_UNSPECIFIED":
      return LoanStatus.LOAN_STATUS_UNSPECIFIED;

    case 1:
    case "LOAN_STATUS_ACTIVE":
      return LoanStatus.LOAN_STATUS_ACTIVE;

    case 2:
    case "LOAN_STATUS_REPAID":
      return LoanStatus.LOAN_STATUS_REPAID;

    case 3:
    case "LOAN_STATUS_CANCELLED":
      return LoanStatus.LOAN_STATUS_CANCELLED;

    case 4:
    case "LOAN_STATUS_REQUESTED":
      return LoanStatus.LOAN_STATUS_REQUESTED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return LoanStatus.UNRECOGNIZED;
  }
}
export function loanStatusToJSON(object: LoanStatus): string {
  switch (object) {
    case LoanStatus.LOAN_STATUS_UNSPECIFIED:
      return "LOAN_STATUS_UNSPECIFIED";

    case LoanStatus.LOAN_STATUS_ACTIVE:
      return "LOAN_STATUS_ACTIVE";

    case LoanStatus.LOAN_STATUS_REPAID:
      return "LOAN_STATUS_REPAID";

    case LoanStatus.LOAN_STATUS_CANCELLED:
      return "LOAN_STATUS_CANCELLED";

    case LoanStatus.LOAN_STATUS_REQUESTED:
      return "LOAN_STATUS_REQUESTED";

    case LoanStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Loan {
  id: Long;
  borrower: string;
  lender: string;
  amount: string;
  collateral: string;
  fee: string;
  deadline: string;
  status: string;
}
export interface LoanSDKType {
  id: Long;
  borrower: string;
  lender: string;
  amount: string;
  collateral: string;
  fee: string;
  deadline: string;
  status: string;
}
export interface LoanEntry {
  lender: string;
  createdAt?: Date;
  amountIn?: Coin;
  assetId: Long;
}
export interface LoanEntrySDKType {
  lender: string;
  created_at?: Date;
  amount_in?: CoinSDKType;
  asset_id: Long;
}

function createBaseLoan(): Loan {
  return {
    id: Long.UZERO,
    borrower: "",
    lender: "",
    amount: "",
    collateral: "",
    fee: "",
    deadline: "",
    status: ""
  };
}

export const Loan = {
  encode(message: Loan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }

    if (message.lender !== "") {
      writer.uint32(26).string(message.lender);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.collateral !== "") {
      writer.uint32(42).string(message.collateral);
    }

    if (message.fee !== "") {
      writer.uint32(50).string(message.fee);
    }

    if (message.deadline !== "") {
      writer.uint32(58).string(message.deadline);
    }

    if (message.status !== "") {
      writer.uint32(66).string(message.status);
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
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.borrower = reader.string();
          break;

        case 3:
          message.lender = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.collateral = reader.string();
          break;

        case 6:
          message.fee = reader.string();
          break;

        case 7:
          message.deadline = reader.string();
          break;

        case 8:
          message.status = reader.string();
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
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.borrower = object.borrower ?? "";
    message.lender = object.lender ?? "";
    message.amount = object.amount ?? "";
    message.collateral = object.collateral ?? "";
    message.fee = object.fee ?? "";
    message.deadline = object.deadline ?? "";
    message.status = object.status ?? "";
    return message;
  }

};

function createBaseLoanEntry(): LoanEntry {
  return {
    lender: "",
    createdAt: undefined,
    amountIn: undefined,
    assetId: Long.UZERO
  };
}

export const LoanEntry = {
  encode(message: LoanEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LoanEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoanEntry();

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

  fromPartial(object: DeepPartial<LoanEntry>): LoanEntry {
    const message = createBaseLoanEntry();
    message.lender = object.lender ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.assetId = object.assetId !== undefined && object.assetId !== null ? Long.fromValue(object.assetId) : Long.UZERO;
    return message;
  }

};