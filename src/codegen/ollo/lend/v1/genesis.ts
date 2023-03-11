import { Params, ParamsSDKType } from "./params";
import { Loan, LoanSDKType } from "./loan";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the lend module's genesis state. */

export interface GenesisState {
  params?: Params;
  loanList: Loan[];
  loanCount: Long;
}
/** GenesisState defines the lend module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  loanList: LoanSDKType[];
  loanCount: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    loanList: [],
    loanCount: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.loanList) {
      Loan.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.loanCount.isZero()) {
      writer.uint32(24).uint64(message.loanCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.loanList.push(Loan.decode(reader, reader.uint32()));
          break;

        case 3:
          message.loanCount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.loanList = object.loanList?.map(e => Loan.fromPartial(e)) || [];
    message.loanCount = object.loanCount !== undefined && object.loanCount !== null ? Long.fromValue(object.loanCount) : Long.UZERO;
    return message;
  }

};