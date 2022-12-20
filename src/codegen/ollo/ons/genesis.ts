import { Params, ParamsSDKType } from "./params";
import { Whois, WhoisSDKType } from "./whois";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the ons module's genesis state. */

export interface GenesisState {
  params?: Params;
  portId: string;
  whoisList: Whois[];
}
/** GenesisState defines the ons module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  port_id: string;
  whoisList: WhoisSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    whoisList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    for (const v of message.whoisList) {
      Whois.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.portId = reader.string();
          break;

        case 3:
          message.whoisList.push(Whois.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? "";
    message.whoisList = object.whoisList?.map(e => Whois.fromPartial(e)) || [];
    return message;
  }

};