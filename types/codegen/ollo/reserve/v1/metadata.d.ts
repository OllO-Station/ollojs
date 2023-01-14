import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
    /** denom represents the string name of the given denom unit (e.g uatom). */
    denom: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 10^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     */
    exponent: number;
    /** aliases is a list of string aliases for the given denom */
    aliases: string[];
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnitSDKType {
    denom: string;
    exponent: number;
    aliases: string[];
}
export interface DenomMetadata {
    description: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denomUnits: DenomUnit[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
    /**
     * name defines the name of the token (eg: Cosmos Atom)
     *
     * Since: cosmos-sdk 0.43
     */
    name: string;
    /**
     * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
     * be the same as the display.
     *
     * Since: cosmos-sdk 0.43
     */
    symbol: string;
    /**
     * URI to a document (on or off-chain) that contains additional information. Optional.
     *
     * Since: cosmos-sdk 0.46
     */
    uri: string;
    /**
     * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
     * the document didn't change. Optional.
     *
     * Since: cosmos-sdk 0.46
     */
    uriHash: string;
}
export interface DenomMetadataSDKType {
    description: string;
    denom_units: DenomUnitSDKType[];
    base: string;
    display: string;
    name: string;
    symbol: string;
    uri: string;
    uri_hash: string;
}
export declare const DenomUnit: {
    encode(message: DenomUnit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit;
    fromPartial(object: DeepPartial<DenomUnit>): DenomUnit;
};
export declare const DenomMetadata: {
    encode(message: DenomMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomMetadata;
    fromPartial(object: DeepPartial<DenomMetadata>): DenomMetadata;
};
