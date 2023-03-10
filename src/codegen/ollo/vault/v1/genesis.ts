import { Vault, VaultSDKType, EmissionsVault, EmissionsVaultSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
  vaults: Vault[];
  emissionsVault: EmissionsVault[];
}
export interface GenesisStateSDKType {
  vaults: VaultSDKType[];
  emissions_vault: EmissionsVaultSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    vaults: [],
    emissionsVault: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.emissionsVault) {
      EmissionsVault.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.vaults.push(Vault.decode(reader, reader.uint32()));
          break;

        case 2:
          message.emissionsVault.push(EmissionsVault.decode(reader, reader.uint32()));
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
    message.vaults = object.vaults?.map(e => Vault.fromPartial(e)) || [];
    message.emissionsVault = object.emissionsVault?.map(e => EmissionsVault.fromPartial(e)) || [];
    return message;
  }

};