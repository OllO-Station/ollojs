import * as _304 from "./abci/types";
import * as _305 from "./crypto/keys";
import * as _306 from "./crypto/proof";
import * as _307 from "./libs/bits/types";
import * as _308 from "./p2p/types";
import * as _309 from "./types/block";
import * as _310 from "./types/evidence";
import * as _311 from "./types/params";
import * as _312 from "./types/types";
import * as _313 from "./types/validator";
import * as _314 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _304.CheckTxType;
        checkTxTypeToJSON(object: _304.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _304.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _304.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _304.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _304.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _304.EvidenceType;
        evidenceTypeToJSON(object: _304.EvidenceType): string;
        CheckTxType: typeof _304.CheckTxType;
        CheckTxTypeSDKType: typeof _304.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _304.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _304.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _304.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _304.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _304.EvidenceType;
        EvidenceTypeSDKType: typeof _304.EvidenceType;
        Request: {
            encode(message: _304.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string | number | import("long");
                    p2pVersion?: string | number | import("long");
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string | number | import("long");
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long");
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long");
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _304.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long");
                        };
                        height?: string | number | import("long");
                        time?: Date;
                        totalVotingPower?: string | number | import("long");
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _304.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string | number | import("long");
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long");
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _304.Request;
        };
        RequestEcho: {
            encode(message: _304.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _304.RequestEcho;
        };
        RequestFlush: {
            encode(_: _304.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestFlush;
            fromPartial(_: {}): _304.RequestFlush;
        };
        RequestInfo: {
            encode(message: _304.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long");
                p2pVersion?: string | number | import("long");
            }): _304.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _304.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _304.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _304.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestInitChain;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string | number | import("long");
            }): _304.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _304.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long");
                prove?: boolean;
            }): _304.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _304.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
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
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long");
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _304.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    height?: string | number | import("long");
                    time?: Date;
                    totalVotingPower?: string | number | import("long");
                }[];
            }): _304.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _304.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _304.CheckTxType;
            }): _304.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _304.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _304.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _304.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long");
            }): _304.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _304.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestCommit;
            fromPartial(_: {}): _304.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _304.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestListSnapshots;
            fromPartial(_: {}): _304.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _304.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _304.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _304.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunk?: number;
            }): _304.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _304.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _304.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _304.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string | number | import("long");
                    lastBlockHeight?: string | number | import("long");
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long");
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long");
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string | number | import("long");
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long");
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _304.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _304.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _304.Response;
        };
        ResponseException: {
            encode(message: _304.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _304.ResponseException;
        };
        ResponseEcho: {
            encode(message: _304.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _304.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _304.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseFlush;
            fromPartial(_: {}): _304.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _304.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long");
                lastBlockHeight?: string | number | import("long");
                lastBlockAppHash?: Uint8Array;
            }): _304.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _304.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _304.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _304.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                appHash?: Uint8Array;
            }): _304.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _304.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseQuery;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long");
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long");
                codespace?: string;
            }): _304.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _304.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _304.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _304.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseCheckTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long");
                gasUsed?: string | number | import("long");
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _304.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _304.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseDeliverTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long");
                gasUsed?: string | number | import("long");
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _304.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _304.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseEndBlock;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _304.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _304.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long");
            }): _304.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _304.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _304.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _304.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _304.ResponseOfferSnapshot_Result;
            }): _304.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _304.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _304.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _304.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _304.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _304.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _304.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long");
                    maxGas?: string | number | import("long");
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long");
                    maxAgeDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long");
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long");
                };
            }): _304.ConsensusParams;
        };
        BlockParams: {
            encode(message: _304.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
            }): _304.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _304.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _304.LastCommitInfo;
        };
        Event: {
            encode(message: _304.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _304.Event;
        };
        EventAttribute: {
            encode(message: _304.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _304.EventAttribute;
        };
        TxResult: {
            encode(message: _304.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.TxResult;
            fromPartial(object: {
                height?: string | number | import("long");
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _304.TxResult;
        };
        Validator: {
            encode(message: _304.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long");
            }): _304.Validator;
        };
        ValidatorUpdate: {
            encode(message: _304.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long");
            }): _304.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _304.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                signedLastBlock?: boolean;
            }): _304.VoteInfo;
        };
        Evidence: {
            encode(message: _304.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Evidence;
            fromPartial(object: {
                type?: _304.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                height?: string | number | import("long");
                time?: Date;
                totalVotingPower?: string | number | import("long");
            }): _304.Evidence;
        };
        Snapshot: {
            encode(message: _304.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _304.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _306.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Proof;
            fromPartial(object: {
                total?: string | number | import("long");
                index?: string | number | import("long");
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _306.Proof;
        };
        ValueOp: {
            encode(message: _306.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _306.ValueOp;
        };
        DominoOp: {
            encode(message: _306.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _306.DominoOp;
        };
        ProofOp: {
            encode(message: _306.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _306.ProofOp;
        };
        ProofOps: {
            encode(message: _306.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _306.ProofOps;
        };
        PublicKey: {
            encode(message: _305.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _305.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _307.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long");
                    elems?: (string | number | import("long"))[];
                }): _307.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _308.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _308.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _308.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long");
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _308.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _308.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.DefaultNodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long");
                    block?: string | number | import("long");
                    app?: string | number | import("long");
                };
                defaultNodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _308.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _308.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _308.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _313.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.ValidatorSet;
            fromPartial(object: {
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
            }): _313.ValidatorSet;
        };
        Validator: {
            encode(message: _313.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
                proposerPriority?: string | number | import("long");
            }): _313.Validator;
        };
        SimpleValidator: {
            encode(message: _313.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
            }): _313.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _312.BlockIDFlag;
        blockIDFlagToJSON(object: _312.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _312.SignedMsgType;
        signedMsgTypeToJSON(object: _312.SignedMsgType): string;
        BlockIDFlag: typeof _312.BlockIDFlag;
        BlockIDFlagSDKType: typeof _312.BlockIDFlag;
        SignedMsgType: typeof _312.SignedMsgType;
        SignedMsgTypeSDKType: typeof _312.SignedMsgType;
        PartSetHeader: {
            encode(message: _312.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _312.PartSetHeader;
        };
        Part: {
            encode(message: _312.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _312.Part;
        };
        BlockID: {
            encode(message: _312.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _312.BlockID;
        };
        Header: {
            encode(message: _312.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Header;
            fromPartial(object: {
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
            }): _312.Header;
        };
        Data: {
            encode(message: _312.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _312.Data;
        };
        Vote: {
            encode(message: _312.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Vote;
            fromPartial(object: {
                type?: _312.SignedMsgType;
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
            }): _312.Vote;
        };
        Commit: {
            encode(message: _312.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Commit;
            fromPartial(object: {
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
                    blockIdFlag?: _312.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _312.Commit;
        };
        CommitSig: {
            encode(message: _312.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _312.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _312.CommitSig;
        };
        Proposal: {
            encode(message: _312.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Proposal;
            fromPartial(object: {
                type?: _312.SignedMsgType;
                height?: string | number | import("long");
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _312.Proposal;
        };
        SignedHeader: {
            encode(message: _312.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.SignedHeader;
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
                        blockIdFlag?: _312.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _312.SignedHeader;
        };
        LightBlock: {
            encode(message: _312.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.LightBlock;
            fromPartial(object: {
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
                            blockIdFlag?: _312.BlockIDFlag;
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
            }): _312.LightBlock;
        };
        BlockMeta: {
            encode(message: _312.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string | number | import("long");
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
                numTxs?: string | number | import("long");
            }): _312.BlockMeta;
        };
        TxProof: {
            encode(message: _312.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _312.TxProof;
        };
        ConsensusParams: {
            encode(message: _311.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long");
                    maxGas?: string | number | import("long");
                    timeIotaMs?: string | number | import("long");
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long");
                    maxAgeDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long");
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long");
                };
            }): _311.ConsensusParams;
        };
        BlockParams: {
            encode(message: _311.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
                timeIotaMs?: string | number | import("long");
            }): _311.BlockParams;
        };
        EvidenceParams: {
            encode(message: _311.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long");
                maxAgeDuration?: {
                    seconds?: string | number | import("long");
                    nanos?: number;
                };
                maxBytes?: string | number | import("long");
            }): _311.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _311.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _311.ValidatorParams;
        };
        VersionParams: {
            encode(message: _311.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long");
            }): _311.VersionParams;
        };
        HashedParams: {
            encode(message: _311.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long");
                blockMaxGas?: string | number | import("long");
            }): _311.HashedParams;
        };
        Evidence: {
            encode(message: _310.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _312.SignedMsgType;
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
                        type?: _312.SignedMsgType;
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
                                    blockIdFlag?: _312.BlockIDFlag;
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
            }): _310.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _310.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _312.SignedMsgType;
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
                    type?: _312.SignedMsgType;
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
            }): _310.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _310.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.LightClientAttackEvidence;
            fromPartial(object: {
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
                                blockIdFlag?: _312.BlockIDFlag;
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
            }): _310.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _310.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _312.SignedMsgType;
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
                            type?: _312.SignedMsgType;
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
                                        blockIdFlag?: _312.BlockIDFlag;
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
            }): _310.EvidenceList;
        };
        Block: {
            encode(message: _309.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.Block;
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _312.SignedMsgType;
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
                                type?: _312.SignedMsgType;
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
                                            blockIdFlag?: _312.BlockIDFlag;
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
                        blockIdFlag?: _312.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _309.Block;
        };
    };
    const version: {
        App: {
            encode(message: _314.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.App;
            fromPartial(object: {
                protocol?: string | number | import("long");
                software?: string;
            }): _314.App;
        };
        Consensus: {
            encode(message: _314.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.Consensus;
            fromPartial(object: {
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _314.Consensus;
        };
    };
}
