import * as _2 from "./base/v1beta1/coin";
import * as _4 from "./base/query/v1beta1/pagination";
import * as _5 from "./base/abci/v1beta1/abci";
import * as _6 from "./base/kv/v1beta1/kv";
import * as _7 from "./base/reflection/v1beta1/reflection";
import * as _8 from "./base/reflection/v2alpha1/reflection";
import * as _9 from "./base/snapshots/v1beta1/snapshot";
import * as _10 from "./base/store/v1beta1/commit_info";
import * as _11 from "./base/store/v1beta1/listening";
import * as _12 from "./base/tendermint/v1beta1/query";
import * as _13 from "./app/v1alpha1/config";
import * as _14 from "./app/v1alpha1/module";
import * as _15 from "./app/v1alpha1/query";
import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./authz/v1beta1/authz";
import * as _20 from "./authz/v1beta1/event";
import * as _21 from "./authz/v1beta1/genesis";
import * as _22 from "./authz/v1beta1/query";
import * as _23 from "./authz/v1beta1/tx";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/v1/orm";
import * as _75 from "./orm/v1alpha1/schema";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/upgrade";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _240 from "./auth/v1beta1/query.lcd";
import * as _241 from "./authz/v1beta1/query.lcd";
import * as _242 from "./bank/v1beta1/query.lcd";
import * as _243 from "./base/tendermint/v1beta1/query.lcd";
import * as _244 from "./distribution/v1beta1/query.lcd";
import * as _245 from "./evidence/v1beta1/query.lcd";
import * as _246 from "./feegrant/v1beta1/query.lcd";
import * as _247 from "./gov/v1/query.lcd";
import * as _248 from "./gov/v1beta1/query.lcd";
import * as _249 from "./group/v1/query.lcd";
import * as _250 from "./mint/v1beta1/query.lcd";
import * as _251 from "./nft/v1beta1/query.lcd";
import * as _252 from "./params/v1beta1/query.lcd";
import * as _253 from "./slashing/v1beta1/query.lcd";
import * as _254 from "./staking/v1beta1/query.lcd";
import * as _255 from "./tx/v1beta1/service.lcd";
import * as _256 from "./upgrade/v1beta1/query.lcd";
import * as _257 from "./app/v1alpha1/query.rpc.Query";
import * as _258 from "./auth/v1beta1/query.rpc.Query";
import * as _259 from "./authz/v1beta1/query.rpc.Query";
import * as _260 from "./bank/v1beta1/query.rpc.Query";
import * as _261 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _262 from "./distribution/v1beta1/query.rpc.Query";
import * as _263 from "./evidence/v1beta1/query.rpc.Query";
import * as _264 from "./feegrant/v1beta1/query.rpc.Query";
import * as _265 from "./gov/v1/query.rpc.Query";
import * as _266 from "./gov/v1beta1/query.rpc.Query";
import * as _267 from "./group/v1/query.rpc.Query";
import * as _268 from "./mint/v1beta1/query.rpc.Query";
import * as _269 from "./nft/v1beta1/query.rpc.Query";
import * as _270 from "./params/v1beta1/query.rpc.Query";
import * as _271 from "./slashing/v1beta1/query.rpc.Query";
import * as _272 from "./staking/v1beta1/query.rpc.Query";
import * as _273 from "./tx/v1beta1/service.rpc.Service";
import * as _274 from "./upgrade/v1beta1/query.rpc.Query";
import * as _275 from "./authz/v1beta1/tx.rpc.msg";
import * as _276 from "./bank/v1beta1/tx.rpc.msg";
import * as _277 from "./crisis/v1beta1/tx.rpc.msg";
import * as _278 from "./distribution/v1beta1/tx.rpc.msg";
import * as _279 from "./evidence/v1beta1/tx.rpc.msg";
import * as _280 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _281 from "./gov/v1/tx.rpc.msg";
import * as _282 from "./gov/v1beta1/tx.rpc.msg";
import * as _283 from "./group/v1/tx.rpc.msg";
import * as _284 from "./nft/v1beta1/tx.rpc.msg";
import * as _285 from "./slashing/v1beta1/tx.rpc.msg";
import * as _286 from "./staking/v1beta1/tx.rpc.msg";
import * as _287 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _288 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace base {
        const v1beta1: {
            Coin: {
                encode(message: _2.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _2.Coin;
            };
            DecCoin: {
                encode(message: _2.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _2.DecCoin;
            };
            IntProto: {
                encode(message: _2.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _2.IntProto;
            };
            DecProto: {
                encode(message: _2.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _2.DecProto;
            };
        };
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _4.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _4.PageRequest;
                };
                PageResponse: {
                    encode(message: _4.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    }): _4.PageResponse;
                };
            };
        }
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _5.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.TxResponse;
                    fromPartial(object: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _5.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _5.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _5.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _5.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _5.StringEvent;
                };
                Attribute: {
                    encode(message: _5.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _5.Attribute;
                };
                GasInfo: {
                    encode(message: _5.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GasInfo;
                    fromPartial(object: {
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                    }): _5.GasInfo;
                };
                Result: {
                    encode(message: _5.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _5.Result;
                };
                SimulationResponse: {
                    encode(message: _5.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: string | number | import("long");
                            gasUsed?: string | number | import("long");
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _5.SimulationResponse;
                };
                MsgData: {
                    encode(message: _5.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _5.MsgData;
                };
                TxMsgData: {
                    encode(message: _5.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _5.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _5.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: string | number | import("long");
                        count?: string | number | import("long");
                        pageNumber?: string | number | import("long");
                        pageTotal?: string | number | import("long");
                        limit?: string | number | import("long");
                        txs?: {
                            height?: string | number | import("long");
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: string | number | import("long");
                            gasUsed?: string | number | import("long");
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _5.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _6.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Pairs;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _6.Pairs;
                };
                Pair: {
                    encode(message: _6.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Pair;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _6.Pair;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _7.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ListAllInterfacesRequest;
                    fromPartial(_: {}): _7.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _7.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ListAllInterfacesResponse;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _7.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _7.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ListImplementationsRequest;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _7.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _7.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ListImplementationsResponse;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _7.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _8.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _8.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _8.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _8.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _8.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _8.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _8.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _8.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _8.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _8.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _8.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _8.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _8.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _8.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _8.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _8.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _8.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _8.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _8.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _8.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _8.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _8.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _8.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _8.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _8.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _8.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _8.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetChainDescriptorRequest;
                    fromPartial(_: {}): _8.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _8.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _8.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _8.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _8.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _8.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _8.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _8.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _8.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _8.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _8.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _8.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _8.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _8.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _8.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _8.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetTxDescriptorRequest;
                    fromPartial(_: {}): _8.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _8.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _8.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _8.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _8.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _8.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _8.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _8.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _8.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _9.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Snapshot;
                    fromPartial(object: {
                        height?: string | number | import("long");
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _9.Snapshot;
                };
                Metadata: {
                    encode(message: _9.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Metadata;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _9.Metadata;
                };
                SnapshotItem: {
                    encode(message: _9.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SnapshotItem;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: string | number | import("long");
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _9.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _9.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SnapshotStoreItem;
                    fromPartial(object: {
                        name?: string;
                    }): _9.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _9.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SnapshotIAVLItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: string | number | import("long");
                        height?: number;
                    }): _9.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _9.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SnapshotExtensionMeta;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _9.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _9.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SnapshotExtensionPayload;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _9.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _9.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SnapshotKVItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _9.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _9.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SnapshotSchema;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _9.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _11.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.StoreKVPair;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _11.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _10.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.CommitInfo;
                    fromPartial(object: {
                        version?: string | number | import("long");
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: string | number | import("long");
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _10.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _10.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.StoreInfo;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: string | number | import("long");
                            hash?: Uint8Array;
                        };
                    }): _10.StoreInfo;
                };
                CommitID: {
                    encode(message: _10.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.CommitID;
                    fromPartial(object: {
                        version?: string | number | import("long");
                        hash?: Uint8Array;
                    }): _10.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _261.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _12.GetNodeInfoRequest): Promise<_12.GetNodeInfoResponse>;
                    getSyncing(request?: _12.GetSyncingRequest): Promise<_12.GetSyncingResponse>;
                    getLatestBlock(request?: _12.GetLatestBlockRequest): Promise<_12.GetLatestBlockResponse>;
                    getBlockByHeight(request: _12.GetBlockByHeightRequest): Promise<_12.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _12.GetLatestValidatorSetRequest): Promise<_12.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _12.GetValidatorSetByHeightRequest): Promise<_12.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _243.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _12.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetValidatorSetByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long");
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _12.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _12.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetValidatorSetByHeightResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long");
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long");
                            proposerPriority?: string | number | import("long");
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _12.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _12.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetLatestValidatorSetRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _12.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _12.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetLatestValidatorSetResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long");
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long");
                            proposerPriority?: string | number | import("long");
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _12.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _12.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Validator;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: string | number | import("long");
                        proposerPriority?: string | number | import("long");
                    }): _12.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _12.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetBlockByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long");
                    }): _12.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _12.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetBlockByHeightResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long");
                                    app?: string | number | import("long");
                                };
                                chainId?: string;
                                height?: string | number | import("long");
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long");
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long");
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long");
                                        validatorPower?: string | number | import("long");
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long");
                                                        app?: string | number | import("long");
                                                    };
                                                    chainId?: string;
                                                    height?: string | number | import("long");
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long");
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long");
                                                    proposerPriority?: string | number | import("long");
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long");
                                                    proposerPriority?: string | number | import("long");
                                                };
                                                totalVotingPower?: string | number | import("long");
                                            };
                                        };
                                        commonHeight?: string | number | import("long");
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long");
                                            proposerPriority?: string | number | import("long");
                                        }[];
                                        totalVotingPower?: string | number | import("long");
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: string | number | import("long");
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _12.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _12.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetLatestBlockRequest;
                    fromPartial(_: {}): _12.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _12.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetLatestBlockResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long");
                                    app?: string | number | import("long");
                                };
                                chainId?: string;
                                height?: string | number | import("long");
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long");
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long");
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long");
                                        validatorPower?: string | number | import("long");
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long");
                                                        app?: string | number | import("long");
                                                    };
                                                    chainId?: string;
                                                    height?: string | number | import("long");
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long");
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long");
                                                    proposerPriority?: string | number | import("long");
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long");
                                                    proposerPriority?: string | number | import("long");
                                                };
                                                totalVotingPower?: string | number | import("long");
                                            };
                                        };
                                        commonHeight?: string | number | import("long");
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long");
                                            proposerPriority?: string | number | import("long");
                                        }[];
                                        totalVotingPower?: string | number | import("long");
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: string | number | import("long");
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _12.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _12.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetSyncingRequest;
                    fromPartial(_: {}): _12.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _12.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetSyncingResponse;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _12.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _12.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetNodeInfoRequest;
                    fromPartial(_: {}): _12.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _12.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GetNodeInfoResponse;
                    fromPartial(object: {
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _12.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _12.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.VersionInfo;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _12.VersionInfo;
                };
                Module: {
                    encode(message: _12.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Module;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _12.Module;
                };
            };
        }
    }
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _257.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _15.QueryConfigRequest): Promise<_15.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _15.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryConfigRequest;
                fromPartial(_: {}): _15.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _15.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryConfigResponse;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _15.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _14.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ModuleDescriptor;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _14.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _14.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PackageReference;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _14.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _14.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MigrateFromInfo;
                fromPartial(object: {
                    module?: string;
                }): _14.MigrateFromInfo;
            };
            Config: {
                encode(message: _13.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Config;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _13.Config;
            };
            ModuleConfig: {
                encode(message: _13.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ModuleConfig;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _13.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                moduleAccounts(request?: _18.QueryModuleAccountsRequest): Promise<_18.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _18.Bech32PrefixRequest): Promise<_18.Bech32PrefixResponse>;
                addressBytesToString(request: _18.AddressBytesToStringRequest): Promise<_18.AddressBytesToStringResponse>;
                addressStringToBytes(request: _18.AddressStringToBytesRequest): Promise<_18.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _240.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _18.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _18.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _18.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _18.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _18.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _18.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _18.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryModuleAccountsRequest;
                fromPartial(_: {}): _18.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _18.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long");
                        txSigLimit?: string | number | import("long");
                        txSizeCostPerByte?: string | number | import("long");
                        sigVerifyCostEd25519?: string | number | import("long");
                        sigVerifyCostSecp256k1?: string | number | import("long");
                    };
                }): _18.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _18.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _18.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _18.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsRequest;
                fromPartial(_: {}): _18.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _18.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryModuleAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _18.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _18.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Bech32PrefixRequest;
                fromPartial(_: {}): _18.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _18.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Bech32PrefixResponse;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _18.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _18.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressBytesToStringRequest;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _18.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _18.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressBytesToStringResponse;
                fromPartial(object: {
                    addressString?: string;
                }): _18.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _18.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressStringToBytesRequest;
                fromPartial(object: {
                    addressString?: string;
                }): _18.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _18.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressStringToBytesResponse;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _18.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _17.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long");
                        txSigLimit?: string | number | import("long");
                        txSizeCostPerByte?: string | number | import("long");
                        sigVerifyCostEd25519?: string | number | import("long");
                        sigVerifyCostSecp256k1?: string | number | import("long");
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _17.GenesisState;
            };
            BaseAccount: {
                encode(message: _16.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.BaseAccount;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: string | number | import("long");
                    sequence?: string | number | import("long");
                }): _16.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _16.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ModuleAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long");
                        sequence?: string | number | import("long");
                    };
                    name?: string;
                    permissions?: string[];
                }): _16.ModuleAccount;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Params;
                fromPartial(object: {
                    maxMemoCharacters?: string | number | import("long");
                    txSigLimit?: string | number | import("long");
                    txSizeCostPerByte?: string | number | import("long");
                    sigVerifyCostEd25519?: string | number | import("long");
                    sigVerifyCostSecp256k1?: string | number | import("long");
                }): _16.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _22.QueryGrantsRequest): Promise<_22.QueryGrantsResponse>;
                granterGrants(request: _22.QueryGranterGrantsRequest): Promise<_22.QueryGranterGrantsResponse>;
                granteeGrants(request: _22.QueryGranteeGrantsRequest): Promise<_22.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _23.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _23.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _23.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _23.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _23.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _23.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _23.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgGrant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _23.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _23.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _23.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _23.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _23.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _23.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgGrantResponse;
                fromPartial(_: {}): _23.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _23.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _23.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _23.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgRevokeResponse;
                fromPartial(_: {}): _23.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _22.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _22.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _22.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranterGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _22.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranterGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _22.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranteeGrantsRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _22.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranteeGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _21.GenesisState;
            };
            EventGrant: {
                encode(message: _20.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _20.EventGrant;
            };
            EventRevoke: {
                encode(message: _20.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _20.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _19.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _19.GenericAuthorization;
            };
            Grant: {
                encode(message: _19.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _19.Grant;
            };
            GrantAuthorization: {
                encode(message: _19.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _19.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _19.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GrantQueueItem;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _19.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
                denomOwners(request: _27.QueryDenomOwnersRequest): Promise<_27.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _242.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _28.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _28.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _28.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _28.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _28.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSend;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _28.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _28.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSendResponse;
                fromPartial(_: {}): _28.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _28.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _28.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _28.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgMultiSendResponse;
                fromPartial(_: {}): _28.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _27.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _27.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _27.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _27.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _27.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _27.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _27.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _27.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _27.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySpendableBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _27.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _27.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _27.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _27.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _27.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _27.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _27.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _27.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _27.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsRequest;
                fromPartial(_: {}): _27.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _27.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _27.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _27.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _27.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _27.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _27.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _27.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _27.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _27.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _27.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _27.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _27.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DenomOwner;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _27.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _27.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomOwnersResponse;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _27.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _26.GenesisState;
            };
            Balance: {
                encode(message: _26.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _26.Balance;
            };
            Params: {
                encode(message: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _25.Params;
            };
            SendEnabled: {
                encode(message: _25.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _25.SendEnabled;
            };
            Input: {
                encode(message: _25.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.Input;
            };
            Output: {
                encode(message: _25.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.Output;
            };
            Supply: {
                encode(message: _25.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.Supply;
            };
            DenomUnit: {
                encode(message: _25.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _25.DenomUnit;
            };
            Metadata: {
                encode(message: _25.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _25.Metadata;
            };
            SendAuthorization: {
                encode(message: _24.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _24.SendAuthorization;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _30.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisOwners;
                fromPartial(object: {
                    index?: string | number | import("long");
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _30.GenesisOwners;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: {
                    index?: string | number | import("long");
                    owners?: {
                        index?: string | number | import("long");
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _30.GenesisState;
            };
            Capability: {
                encode(message: _29.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Capability;
                fromPartial(object: {
                    index?: string | number | import("long");
                }): _29.Capability;
            };
            Owner: {
                encode(message: _29.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Owner;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _29.Owner;
            };
            CapabilityOwners: {
                encode(message: _29.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CapabilityOwners;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _29.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _32.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _32.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _32.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVerifyInvariant;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _32.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _32.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVerifyInvariantResponse;
                fromPartial(_: {}): _32.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GenesisState;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _31.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _33.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _33.PubKey;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _33.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _34.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.BIP44Params;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _34.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _35.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _35.Record;
                };
                Record_Local: {
                    encode(message: _35.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Local;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _35.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _35.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _35.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _35.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Multi;
                    fromPartial(_: {}): _35.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _35.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Offline;
                    fromPartial(_: {}): _35.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _36.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _36.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _37.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _38.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _42.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _42.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _42.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _42.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _42.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _42.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _42.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _42.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _42.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _42.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _42.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _42.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _42.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _42.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _42.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _42.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _42.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _42.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _42.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _42.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _42.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _42.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _42.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _42.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsRequest;
                fromPartial(_: {}): _41.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _41.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _41.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _41.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _41.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _41.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _41.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _41.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _41.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _41.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _41.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: string | number | import("long");
                    endingHeight?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _41.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _41.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: string | number | import("long");
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _41.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _41.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _41.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _41.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _41.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _41.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _41.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _41.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _41.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _41.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _41.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _41.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _41.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _41.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCommunityPoolRequest;
                fromPartial(_: {}): _41.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _41.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _40.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _40.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _40.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _40.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _40.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _40.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: string | number | import("long");
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _40.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _40.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long");
                    };
                }): _40.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _40.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: string | number | import("long");
                        stake?: string;
                        height?: string | number | import("long");
                    };
                }): _40.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _40.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: string | number | import("long");
                    period?: string | number | import("long");
                    validatorSlashEvent?: {
                        validatorPeriod?: string | number | import("long");
                        fraction?: string;
                    };
                }): _40.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: string | number | import("long");
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long");
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: string | number | import("long");
                            stake?: string;
                            height?: string | number | import("long");
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: string | number | import("long");
                        period?: string | number | import("long");
                        validatorSlashEvent?: {
                            validatorPeriod?: string | number | import("long");
                            fraction?: string;
                        };
                    }[];
                }): _40.GenesisState;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _39.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _39.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _39.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _39.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long");
                }): _39.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _39.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _39.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _39.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: string | number | import("long");
                    fraction?: string;
                }): _39.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _39.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: string | number | import("long");
                        fraction?: string;
                    }[];
                }): _39.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _39.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _39.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _39.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: string | number | import("long");
                    stake?: string;
                    height?: string | number | import("long");
                }): _39.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _39.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _39.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _39.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _46.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _46.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _46.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgSubmitEvidence;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _46.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _46.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgSubmitEvidenceResponse;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _46.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _45.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryEvidenceRequest;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _45.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _45.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _45.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _45.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAllEvidenceRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _45.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _45.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAllEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _45.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _44.GenesisState;
            };
            Equivocation: {
                encode(message: _43.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Equivocation;
                fromPartial(object: {
                    height?: string | number | import("long");
                    time?: Date;
                    power?: string | number | import("long");
                    consensusAddress?: string;
                }): _43.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _50.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _50.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _50.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _50.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _50.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgGrantAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _50.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _50.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgGrantAllowanceResponse;
                fromPartial(_: {}): _50.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _50.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgRevokeAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _50.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _50.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgRevokeAllowanceResponse;
                fromPartial(_: {}): _50.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _49.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowanceRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _49.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _49.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowanceResponse;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _49.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _49.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _49.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _49.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _49.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _49.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesByGranterRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _49.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _49.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesByGranterResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _49.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _48.GenesisState;
            };
            BasicAllowance: {
                encode(message: _47.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.BasicAllowance;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _47.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _47.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PeriodicAllowance;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _47.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _47.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.AllowedMsgAllowance;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _47.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _47.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Grant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _47.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _51.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _247.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _55.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _55.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _55.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _55.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _55.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _55.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _55.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _55.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _55.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitProposal;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _55.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _55.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _55.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _55.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _55.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _55.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecLegacyContentResponse;
                fromPartial(_: {}): _55.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _55.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    option?: _53.VoteOption;
                    metadata?: string;
                }): _55.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _55.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteResponse;
                fromPartial(_: {}): _55.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _55.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    options?: {
                        option?: _53.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _55.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _55.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteWeightedResponse;
                fromPartial(_: {}): _55.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _55.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _55.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _55.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgDepositResponse;
                fromPartial(_: {}): _55.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _54.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _54.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _54.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long");
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _53.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _54.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _54.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _53.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _54.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long");
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _53.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _54.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _54.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                }): _54.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _54.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        options?: {
                            option?: _53.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _54.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _54.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _54.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        options?: {
                            option?: _53.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _54.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _54.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _54.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                }): _54.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _54.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _54.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _54.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _54.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _54.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _54.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _54.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _54.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _54.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _53.VoteOption;
            voteOptionToJSON(object: _53.VoteOption): string;
            proposalStatusFromJSON(object: any): _53.ProposalStatus;
            proposalStatusToJSON(object: _53.ProposalStatus): string;
            VoteOption: typeof _53.VoteOption;
            VoteOptionSDKType: typeof _53.VoteOption;
            ProposalStatus: typeof _53.ProposalStatus;
            ProposalStatusSDKType: typeof _53.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _53.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.WeightedVoteOption;
                fromPartial(object: {
                    option?: _53.VoteOption;
                    weight?: string;
                }): _53.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _53.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.Deposit;
            };
            Proposal: {
                encode(message: _53.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long");
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _53.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _53.Proposal;
            };
            TallyResult: {
                encode(message: _53.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _53.TallyResult;
            };
            Vote: {
                encode(message: _53.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    options?: {
                        option?: _53.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _53.Vote;
            };
            DepositParams: {
                encode(message: _53.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _53.DepositParams;
            };
            VotingParams: {
                encode(message: _53.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _53.VotingParams;
            };
            TallyParams: {
                encode(message: _53.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.TallyParams;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _53.TallyParams;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long");
                    deposits?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        options?: {
                            option?: _53.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: string | number | import("long");
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _53.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _52.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _248.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _59.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _59.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _59.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _59.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _59.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _59.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _59.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _59.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _59.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    option?: _57.VoteOption;
                }): _59.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _59.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteResponse;
                fromPartial(_: {}): _59.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _59.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    options?: {
                        option?: _57.VoteOption;
                        weight?: string;
                    }[];
                }): _59.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _59.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteWeightedResponse;
                fromPartial(_: {}): _59.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _59.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _59.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _59.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDepositResponse;
                fromPartial(_: {}): _59.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _58.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _58.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _58.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: string | number | import("long");
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _57.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _58.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _58.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _57.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _58.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: string | number | import("long");
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _57.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _58.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _58.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                }): _58.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _58.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _57.VoteOption;
                        options?: {
                            option?: _57.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _58.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _58.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _58.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _57.VoteOption;
                        options?: {
                            option?: _57.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _58.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _58.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _58.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _58.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                }): _58.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _58.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _58.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _58.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _58.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _58.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _58.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _58.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _58.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _58.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            VoteOptionSDKType: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            ProposalStatusSDKType: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _57.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.WeightedVoteOption;
                fromPartial(object: {
                    option?: _57.VoteOption;
                    weight?: string;
                }): _57.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _57.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _57.TextProposal;
            };
            Deposit: {
                encode(message: _57.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.Deposit;
            };
            Proposal: {
                encode(message: _57.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Proposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _57.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _57.Proposal;
            };
            TallyResult: {
                encode(message: _57.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _57.TallyResult;
            };
            Vote: {
                encode(message: _57.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    option?: _57.VoteOption;
                    options?: {
                        option?: _57.VoteOption;
                        weight?: string;
                    }[];
                }): _57.Vote;
            };
            DepositParams: {
                encode(message: _57.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _57.DepositParams;
            };
            VotingParams: {
                encode(message: _57.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _57.VotingParams;
            };
            TallyParams: {
                encode(message: _57.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _57.TallyParams;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long");
                    deposits?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _57.VoteOption;
                        options?: {
                            option?: _57.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: string | number | import("long");
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _57.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _56.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _63.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _63.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _63.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _63.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _63.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _63.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _63.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _63.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _63.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _63.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _63.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _63.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _63.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _63.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _63.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _63.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _63.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _63.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _63.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _63.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _63.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            proposalResultFromJSON(object: any): _64.ProposalResult;
            proposalResultToJSON(object: _64.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _64.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _64.ProposalExecutorResult): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            ProposalResult: typeof _64.ProposalResult;
            ProposalResultSDKType: typeof _64.ProposalResult;
            ProposalExecutorResult: typeof _64.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _64.ProposalExecutorResult;
            Member: {
                encode(message: _64.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Member;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: Date;
                }): _64.Member;
            };
            Members: {
                encode(message: _64.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Members;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _64.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _64.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ThresholdDecisionPolicy;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                }): _64.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _64.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.PercentageDecisionPolicy;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                }): _64.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _64.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.DecisionPolicyWindows;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    minExecutionPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _64.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _64.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupInfo;
                fromPartial(object: {
                    id?: string | number | import("long");
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long");
                    totalWeight?: string;
                    createdAt?: Date;
                }): _64.GroupInfo;
            };
            GroupMember: {
                encode(message: _64.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupMember;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    };
                }): _64.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _64.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupPolicyInfo;
                fromPartial(object: {
                    address?: string;
                    groupId?: string | number | import("long");
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long");
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: Date;
                }): _64.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _64.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long");
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: Date;
                    groupVersion?: string | number | import("long");
                    groupPolicyVersion?: string | number | import("long");
                    status?: _64.ProposalStatus;
                    result?: _64.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: Date;
                    executorResult?: _64.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _64.Proposal;
            };
            TallyResult: {
                encode(message: _64.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _64.TallyResult;
            };
            Vote: {
                encode(message: _64.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    option?: _64.VoteOption;
                    metadata?: string;
                    submitTime?: Date;
                }): _64.Vote;
            };
            execFromJSON(object: any): _63.Exec;
            execToJSON(object: _63.Exec): string;
            Exec: typeof _63.Exec;
            ExecSDKType: typeof _63.Exec;
            MsgCreateGroup: {
                encode(message: _63.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroup;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    metadata?: string;
                }): _63.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _63.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                }): _63.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _63.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMembers;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long");
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _63.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _63.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMembersResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _63.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupAdmin;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long");
                    newAdmin?: string;
                }): _63.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _63.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupAdminResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _63.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMetadata;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long");
                    metadata?: string;
                }): _63.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _63.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMetadataResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _63.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupPolicy;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long");
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _63.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _63.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupPolicyResponse;
                fromPartial(object: {
                    address?: string;
                }): _63.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _63.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _63.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _63.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupWithPolicy;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _63.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _63.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                    groupPolicyAddress?: string;
                }): _63.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _63.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _63.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _63.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _63.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _63.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _63.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _63.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposal;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _63.Exec;
                }): _63.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _63.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _63.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _63.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    address?: string;
                }): _63.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _63.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgWithdrawProposalResponse;
                fromPartial(_: {}): _63.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _63.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    option?: _64.VoteOption;
                    metadata?: string;
                    exec?: _63.Exec;
                }): _63.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _63.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVoteResponse;
                fromPartial(_: {}): _63.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _63.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    signer?: string;
                }): _63.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _63.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExecResponse;
                fromPartial(_: {}): _63.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _63.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgLeaveGroup;
                fromPartial(object: {
                    address?: string;
                    groupId?: string | number | import("long");
                }): _63.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _63.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgLeaveGroupResponse;
                fromPartial(_: {}): _63.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _62.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupInfoRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                }): _62.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _62.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupInfoResponse;
                fromPartial(object: {
                    info?: {
                        id?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        totalWeight?: string;
                        createdAt?: Date;
                    };
                }): _62.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _62.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPolicyInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _62.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _62.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPolicyInfoResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    };
                }): _62.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _62.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupMembersRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _62.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupMembersResponse;
                fromPartial(object: {
                    members?: {
                        groupId?: string | number | import("long");
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _62.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _62.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByAdminResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _62.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _62.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _62.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _62.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _62.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _62.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _62.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long");
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long");
                        groupPolicyVersion?: string | number | import("long");
                        status?: _64.ProposalStatus;
                        result?: _64.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _64.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _62.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _62.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _62.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long");
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long");
                        groupPolicyVersion?: string | number | import("long");
                        status?: _64.ProposalStatus;
                        result?: _64.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _64.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _62.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteByProposalVoterRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                }): _62.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _62.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteByProposalVoterResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    };
                }): _62.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _62.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _62.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByProposalResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _62.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByVoterRequest;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _62.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByVoterResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _62.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByMemberRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _62.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByMemberResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _62.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _62.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _62.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _62.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _62.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromPartial(object: {
                    groupSeq?: string | number | import("long");
                    groups?: {
                        id?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    groupMembers?: {
                        groupId?: string | number | import("long");
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    groupPolicySeq?: string | number | import("long");
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long");
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long");
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    proposalSeq?: string | number | import("long");
                    proposals?: {
                        id?: string | number | import("long");
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long");
                        groupPolicyVersion?: string | number | import("long");
                        status?: _64.ProposalStatus;
                        result?: _64.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _64.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                }): _61.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _60.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventCreateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                }): _60.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _60.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventUpdateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                }): _60.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _60.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventCreateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _60.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _60.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventUpdateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _60.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _60.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventSubmitProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _60.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _60.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _60.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _60.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _60.EventVote;
            };
            EventExec: {
                encode(message: _60.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    result?: _64.ProposalExecutorResult;
                }): _60.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _60.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventLeaveGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long");
                    address?: string;
                }): _60.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsRequest;
                fromPartial(_: {}): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long");
                    };
                }): _67.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _67.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryInflationRequest;
                fromPartial(_: {}): _67.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _67.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _67.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _67.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _67.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _67.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _67.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _66.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _66.Minter;
            };
            Params: {
                encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: string | number | import("long");
                }): _66.Params;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long");
                    };
                }): _65.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _73.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _73.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _73.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _73.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _73.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSendResponse;
                fromPartial(_: {}): _73.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _72.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryBalanceRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _72.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _72.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryBalanceResponse;
                fromPartial(object: {
                    amount?: string | number | import("long");
                }): _72.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _72.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryOwnerRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _72.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _72.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryOwnerResponse;
                fromPartial(object: {
                    owner?: string;
                }): _72.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _72.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QuerySupplyRequest;
                fromPartial(object: {
                    classId?: string;
                }): _72.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _72.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long");
                }): _72.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _72.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTsRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _72.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTsResponse;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _72.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _72.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _72.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _72.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _72.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _72.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassRequest;
                fromPartial(object: {
                    classId?: string;
                }): _72.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _72.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassResponse;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _72.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _72.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _72.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassesResponse;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _72.QueryClassesResponse;
            };
            Class: {
                encode(message: _71.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Class;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _71.Class;
            };
            NFT: {
                encode(message: _71.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.NFT;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _71.NFT;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _70.GenesisState;
            };
            Entry: {
                encode(message: _70.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Entry;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _70.Entry;
            };
            EventSend: {
                encode(message: _69.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _69.EventSend;
            };
            EventMint: {
                encode(message: _69.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventMint;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _69.EventMint;
            };
            EventBurn: {
                encode(message: _69.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventBurn;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _69.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _74.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.TableDescriptor;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _74.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _74.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PrimaryKeyDescriptor;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _74.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _74.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SecondaryIndexDescriptor;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _74.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _74.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SingletonDescriptor;
                fromPartial(object: {
                    id?: number;
                }): _74.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _75.StorageType;
            storageTypeToJSON(object: _75.StorageType): string;
            StorageType: typeof _75.StorageType;
            StorageTypeSDKType: typeof _75.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _75.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _75.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _75.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _75.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _75.StorageType;
                }): _75.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _77.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsResponse;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _77.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _77.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesRequest;
                fromPartial(_: {}): _77.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _77.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesResponse;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _77.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _77.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Subspace;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _77.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _76.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _76.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _76.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParamChange;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _76.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _81.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _81.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _81.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjail;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _81.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _81.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjailResponse;
                fromPartial(_: {}): _81.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _80.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ValidatorSigningInfo;
                fromPartial(object: {
                    address?: string;
                    startHeight?: string | number | import("long");
                    indexOffset?: string | number | import("long");
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: string | number | import("long");
                }): _80.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                fromPartial(object: {
                    signedBlocksWindow?: string | number | import("long");
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _80.Params;
            };
            QueryParamsRequest: {
                encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsRequest;
                fromPartial(_: {}): _79.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long");
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _79.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _79.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoRequest;
                fromPartial(object: {
                    consAddress?: string;
                }): _79.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _79.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoResponse;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long");
                        indexOffset?: string | number | import("long");
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long");
                    };
                }): _79.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _79.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _79.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: string | number | import("long");
                        indexOffset?: string | number | import("long");
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long");
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _79.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long");
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: string | number | import("long");
                            indexOffset?: string | number | import("long");
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: string | number | import("long");
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: string | number | import("long");
                            missed?: boolean;
                        }[];
                    }[];
                }): _78.GenesisState;
            };
            SigningInfo: {
                encode(message: _78.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SigningInfo;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long");
                        indexOffset?: string | number | import("long");
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long");
                    };
                }): _78.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _78.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ValidatorMissedBlocks;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: string | number | import("long");
                        missed?: boolean;
                    }[];
                }): _78.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _78.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MissedBlock;
                fromPartial(object: {
                    index?: string | number | import("long");
                    missed?: boolean;
                }): _78.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _86.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _86.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _86.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _86.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _86.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _86.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _86.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _86.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidatorResponse;
                fromPartial(_: {}): _86.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _86.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _86.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _86.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidatorResponse;
                fromPartial(_: {}): _86.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _86.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _86.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegateResponse;
                fromPartial(_: {}): _86.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _86.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _86.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _86.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _86.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _86.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _86.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _85.BondStatus;
            bondStatusToJSON(object: _85.BondStatus): string;
            BondStatus: typeof _85.BondStatus;
            BondStatusSDKType: typeof _85.BondStatus;
            HistoricalInfo: {
                encode(message: _85.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: string | number | import("long");
                            app?: string | number | import("long");
                        };
                        chainId?: string;
                        height?: string | number | import("long");
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _85.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _85.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _85.CommissionRates;
            };
            Commission: {
                encode(message: _85.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _85.Commission;
            };
            Description: {
                encode(message: _85.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _85.Description;
            };
            Validator: {
                encode(message: _85.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _85.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: string | number | import("long");
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _85.Validator;
            };
            ValAddresses: {
                encode(message: _85.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _85.ValAddresses;
            };
            DVPair: {
                encode(message: _85.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _85.DVPair;
            };
            DVPairs: {
                encode(message: _85.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _85.DVPairs;
            };
            DVVTriplet: {
                encode(message: _85.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _85.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _85.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _85.DVVTriplets;
            };
            Delegation: {
                encode(message: _85.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _85.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _85.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long");
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _85.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _85.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long");
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _85.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _85.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long");
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _85.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _85.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long");
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _85.Redelegation;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _85.Params;
            };
            DelegationResponse: {
                encode(message: _85.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _85.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _85.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: string | number | import("long");
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _85.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _85.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _85.RedelegationResponse;
            };
            Pool: {
                encode(message: _85.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _85.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _84.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _84.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _84.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _84.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _84.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _84.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _84.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _84.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _84.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _84.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _84.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _84.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _84.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _84.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _84.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _84.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _84.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _84.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _84.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _84.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _84.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _84.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _84.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _84.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _84.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: string | number | import("long");
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: string | number | import("long");
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _84.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _84.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _84.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _84.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _84.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _84.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _84.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _84.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _84.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: string | number | import("long");
                }): _84.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _84.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long");
                                app?: string | number | import("long");
                            };
                            chainId?: string;
                            height?: string | number | import("long");
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _85.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: string | number | import("long");
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _84.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _84.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolRequest;
                fromPartial(_: {}): _84.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _84.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _84.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                fromPartial(_: {}): _84.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _84.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: string | number | import("long");
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _83.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _83.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long");
                }): _83.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _82.AuthorizationType;
            authorizationTypeToJSON(object: _82.AuthorizationType): string;
            AuthorizationType: typeof _82.AuthorizationType;
            AuthorizationTypeSDKType: typeof _82.AuthorizationType;
            StakeAuthorization: {
                encode(message: _82.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _82.AuthorizationType;
                }): _82.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _82.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _82.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _87.SignMode;
                signModeToJSON(object: _87.SignMode): string;
                SignMode: typeof _87.SignMode;
                SignModeSDKType: typeof _87.SignMode;
                SignatureDescriptors: {
                    encode(message: _87.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _87.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long");
                        }[];
                    }): _87.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _87.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _87.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long");
                    }): _87.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _87.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _87.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _87.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _87.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _87.SignMode;
                        signature?: Uint8Array;
                    }): _87.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _87.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _87.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _273.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            Tx: {
                encode(message: _89.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: string | number | import("long");
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _87.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: string | number | import("long");
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: string | number | import("long");
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _89.Tx;
            };
            TxRaw: {
                encode(message: _89.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _89.TxRaw;
            };
            SignDoc: {
                encode(message: _89.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: string | number | import("long");
                }): _89.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _89.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDocDirectAux;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: string | number | import("long");
                    sequence?: string | number | import("long");
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _89.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _89.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: string | number | import("long");
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _89.TxBody;
            };
            AuthInfo: {
                encode(message: _89.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _87.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: string | number | import("long");
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: string | number | import("long");
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _89.AuthInfo;
            };
            SignerInfo: {
                encode(message: _89.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _87.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: string | number | import("long");
                }): _89.SignerInfo;
            };
            ModeInfo: {
                encode(message: _89.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _87.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _89.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _89.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _87.SignMode;
                }): _89.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _89.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _89.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _89.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: string | number | import("long");
                    payer?: string;
                    granter?: string;
                }): _89.Fee;
            };
            Tip: {
                encode(message: _89.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _89.Tip;
            };
            AuxSignerData: {
                encode(message: _89.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuxSignerData;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: string | number | import("long");
                        sequence?: string | number | import("long");
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _87.SignMode;
                    sig?: Uint8Array;
                }): _89.AuxSignerData;
            };
            orderByFromJSON(object: any): _88.OrderBy;
            orderByToJSON(object: _88.OrderBy): string;
            broadcastModeFromJSON(object: any): _88.BroadcastMode;
            broadcastModeToJSON(object: _88.BroadcastMode): string;
            OrderBy: typeof _88.OrderBy;
            OrderBySDKType: typeof _88.OrderBy;
            BroadcastMode: typeof _88.BroadcastMode;
            BroadcastModeSDKType: typeof _88.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _88.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _88.OrderBy;
                }): _88.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _88.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _88.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _88.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _88.BroadcastMode;
                }): _88.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _88.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _88.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _88.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _88.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _88.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _88.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _88.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _88.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _88.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _88.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _88.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _88.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _88.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long");
                                app?: string | number | import("long");
                            };
                            chainId?: string;
                            height?: string | number | import("long");
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long");
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long");
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: string | number | import("long");
                                    validatorPower?: string | number | import("long");
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long");
                                                    app?: string | number | import("long");
                                                };
                                                chainId?: string;
                                                height?: string | number | import("long");
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: string | number | import("long");
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long");
                                                proposerPriority?: string | number | import("long");
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long");
                                                proposerPriority?: string | number | import("long");
                                            };
                                            totalVotingPower?: string | number | import("long");
                                        };
                                    };
                                    commonHeight?: string | number | import("long");
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long");
                                        proposerPriority?: string | number | import("long");
                                    }[];
                                    totalVotingPower?: string | number | import("long");
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: string | number | import("long");
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _88.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _91.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _91.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _91.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _91.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _91.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _91.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _91.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _91.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _92.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: string | number | import("long");
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _92.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _92.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long");
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _92.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _92.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _92.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _92.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long");
                }): _92.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _91.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgrade;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long");
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _91.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _91.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgradeResponse;
                fromPartial(_: {}): _91.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _91.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgrade;
                fromPartial(object: {
                    authority?: string;
                }): _91.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _91.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgradeResponse;
                fromPartial(_: {}): _91.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _90.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanRequest;
                fromPartial(_: {}): _90.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _90.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanResponse;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long");
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _90.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _90.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _90.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _90.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: string | number | import("long");
                }): _90.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _90.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: string | number | import("long");
                }): _90.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _90.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _90.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _90.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string;
                }): _90.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _90.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsResponse;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: string | number | import("long");
                    }[];
                }): _90.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _90.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityRequest;
                fromPartial(_: {}): _90.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _90.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityResponse;
                fromPartial(object: {
                    address?: string;
                }): _90.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _93.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _93.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _93.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _93.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _93.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _93.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _94.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BaseVestingAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long");
                        sequence?: string | number | import("long");
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long");
                }): _94.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _94.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContinuousVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long");
                            sequence?: string | number | import("long");
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long");
                    };
                    startTime?: string | number | import("long");
                }): _94.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _94.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DelayedVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long");
                            sequence?: string | number | import("long");
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long");
                    };
                }): _94.DelayedVestingAccount;
            };
            Period: {
                encode(message: _94.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Period;
                fromPartial(object: {
                    length?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _94.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _94.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PeriodicVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long");
                            sequence?: string | number | import("long");
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long");
                    };
                    startTime?: string | number | import("long");
                    vestingPeriods?: {
                        length?: string | number | import("long");
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _94.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _94.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PermanentLockedAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long");
                            sequence?: string | number | import("long");
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long");
                    };
                }): _94.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _93.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long");
                    delayed?: boolean;
                }): _93.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _93.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccountResponse;
                fromPartial(_: {}): _93.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _93.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _93.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: {}): _93.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _93.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: string | number | import("long");
                    vestingPeriods?: {
                        length?: string | number | import("long");
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _93.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _93.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: {}): _93.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _275.MsgClientImpl;
                };
                bank: {
                    v1beta1: _276.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _277.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _278.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _279.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _280.MsgClientImpl;
                };
                gov: {
                    v1: _281.MsgClientImpl;
                    v1beta1: _282.MsgClientImpl;
                };
                group: {
                    v1: _283.MsgClientImpl;
                };
                nft: {
                    v1beta1: _284.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _285.MsgClientImpl;
                };
                staking: {
                    v1beta1: _286.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _287.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _288.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _15.QueryConfigRequest): Promise<_15.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                        account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        moduleAccounts(request?: _18.QueryModuleAccountsRequest): Promise<_18.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _18.Bech32PrefixRequest): Promise<_18.Bech32PrefixResponse>;
                        addressBytesToString(request: _18.AddressBytesToStringRequest): Promise<_18.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _18.AddressStringToBytesRequest): Promise<_18.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _22.QueryGrantsRequest): Promise<_22.QueryGrantsResponse>;
                        granterGrants(request: _22.QueryGranterGrantsRequest): Promise<_22.QueryGranterGrantsResponse>;
                        granteeGrants(request: _22.QueryGranteeGrantsRequest): Promise<_22.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                        allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                        spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                        supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
                        denomOwners(request: _27.QueryDenomOwnersRequest): Promise<_27.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _12.GetNodeInfoRequest): Promise<_12.GetNodeInfoResponse>;
                            getSyncing(request?: _12.GetSyncingRequest): Promise<_12.GetSyncingResponse>;
                            getLatestBlock(request?: _12.GetLatestBlockRequest): Promise<_12.GetLatestBlockResponse>;
                            getBlockByHeight(request: _12.GetBlockByHeightRequest): Promise<_12.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _12.GetLatestValidatorSetRequest): Promise<_12.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _12.GetValidatorSetByHeightRequest): Promise<_12.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                        allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                        allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                        allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                        proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                        vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                        votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                        deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                        tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                        proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                        vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                        votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                        deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                        tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                        votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                        groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                        annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                        owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                        supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                        nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                        nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                        class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                        classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                        signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                        validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                        validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                        unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                        delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                        pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                        getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                        broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                        getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                        getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                        appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                        authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _240.LCDQueryClient;
                };
                authz: {
                    v1beta1: _241.LCDQueryClient;
                };
                bank: {
                    v1beta1: _242.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _243.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _244.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _245.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _246.LCDQueryClient;
                };
                gov: {
                    v1: _247.LCDQueryClient;
                    v1beta1: _248.LCDQueryClient;
                };
                group: {
                    v1: _249.LCDQueryClient;
                };
                mint: {
                    v1beta1: _250.LCDQueryClient;
                };
                nft: {
                    v1beta1: _251.LCDQueryClient;
                };
                params: {
                    v1beta1: _252.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _253.LCDQueryClient;
                };
                staking: {
                    v1beta1: _254.LCDQueryClient;
                };
                tx: {
                    v1beta1: _255.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _256.LCDQueryClient;
                };
            };
        }>;
    };
}
