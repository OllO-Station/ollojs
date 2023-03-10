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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
