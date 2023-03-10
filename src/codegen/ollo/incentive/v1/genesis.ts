import { DepositRecord, DepositRecordSDKType } from "./deposit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
  depositRecords: DepositRecord[];
}
export interface GenesisStateSDKType {
  deposit_records: DepositRecordSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    depositRecords: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.depositRecords) {
      DepositRecord.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 4:
          message.depositRecords.push(DepositRecord.decode(reader, reader.uint32()));
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
    message.depositRecords = object.depositRecords?.map(e => DepositRecord.fromPartial(e)) || [];
    return message;
  }

};