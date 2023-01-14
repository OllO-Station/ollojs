import { Params, ParamsSDKType } from "./params";
import { Loans, LoansSDKType } from "./loans";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the loan module's genesis state. */

export interface GenesisState {
  params?: Params;
  loansList: Loans[];
  portId: string;
}
/** GenesisState defines the loan module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  loansList: LoansSDKType[];
  port_id: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    loansList: [],
    portId: ""
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.loansList) {
      Loans.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
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
          message.loansList.push(Loans.decode(reader, reader.uint32()));
          break;

        case 3:
          message.portId = reader.string();
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
    message.loansList = object.loansList?.map(e => Loans.fromPartial(e)) || [];
    message.portId = object.portId ?? "";
    return message;
  }

};