import * as _110 from "./applications/transfer/v1/genesis";
import * as _111 from "./applications/transfer/v1/query";
import * as _112 from "./applications/transfer/v1/transfer";
import * as _113 from "./applications/transfer/v1/tx";
import * as _114 from "./applications/transfer/v2/packet";
import * as _115 from "./core/channel/v1/channel";
import * as _116 from "./core/channel/v1/genesis";
import * as _117 from "./core/channel/v1/query";
import * as _118 from "./core/channel/v1/tx";
import * as _119 from "./core/client/v1/client";
import * as _120 from "./core/client/v1/genesis";
import * as _121 from "./core/client/v1/query";
import * as _122 from "./core/client/v1/tx";
import * as _123 from "./core/commitment/v1/commitment";
import * as _124 from "./core/connection/v1/connection";
import * as _125 from "./core/connection/v1/genesis";
import * as _126 from "./core/connection/v1/query";
import * as _127 from "./core/connection/v1/tx";
import * as _128 from "./core/port/v1/query";
import * as _129 from "./core/types/v1/genesis";
import * as _130 from "./lightclients/localhost/v1/localhost";
import * as _131 from "./lightclients/solomachine/v1/solomachine";
import * as _132 from "./lightclients/solomachine/v2/solomachine";
import * as _133 from "./lightclients/tendermint/v1/tendermint";
import * as _302 from "./applications/transfer/v1/query.lcd";
import * as _303 from "./core/channel/v1/query.lcd";
import * as _304 from "./core/client/v1/query.lcd";
import * as _305 from "./core/connection/v1/query.lcd";
import * as _306 from "./applications/transfer/v1/query.rpc.Query";
import * as _307 from "./core/channel/v1/query.rpc.Query";
import * as _308 from "./core/client/v1/query.rpc.Query";
import * as _309 from "./core/connection/v1/query.rpc.Query";
import * as _310 from "./core/port/v1/query.rpc.Query";
import * as _311 from "./applications/transfer/v1/tx.rpc.msg";
import * as _312 from "./core/channel/v1/tx.rpc.msg";
import * as _313 from "./core/client/v1/tx.rpc.msg";
import * as _314 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _311.MsgClientImpl;
                QueryClientImpl: typeof _306.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _111.QueryDenomTraceRequest): Promise<_111.QueryDenomTraceResponse>;
                    denomTraces(request?: _111.QueryDenomTracesRequest): Promise<_111.QueryDenomTracesResponse>;
                    params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _302.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _113.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _113.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _113.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgTransfer;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        timeoutTimestamp?: string | number | import("long");
                    }): _113.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _113.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgTransferResponse;
                    fromPartial(_: {}): _113.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _112.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _112.DenomTrace;
                };
                Params: {
                    encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _112.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _111.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _111.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _111.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTraceResponse;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _111.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _111.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _111.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _111.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTracesResponse;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _111.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsRequest;
                    fromPartial(_: {}): _111.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsResponse;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _111.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _110.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _114.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _114.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _312.MsgClientImpl;
                QueryClientImpl: typeof _307.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _117.QueryChannelRequest): Promise<_117.QueryChannelResponse>;
                    channels(request?: _117.QueryChannelsRequest): Promise<_117.QueryChannelsResponse>;
                    connectionChannels(request: _117.QueryConnectionChannelsRequest): Promise<_117.QueryConnectionChannelsResponse>;
                    channelClientState(request: _117.QueryChannelClientStateRequest): Promise<_117.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _117.QueryChannelConsensusStateRequest): Promise<_117.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _117.QueryPacketCommitmentRequest): Promise<_117.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _117.QueryPacketCommitmentsRequest): Promise<_117.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _117.QueryPacketReceiptRequest): Promise<_117.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _117.QueryPacketAcknowledgementRequest): Promise<_117.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _117.QueryPacketAcknowledgementsRequest): Promise<_117.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _117.QueryUnreceivedPacketsRequest): Promise<_117.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _117.QueryUnreceivedAcksRequest): Promise<_117.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _117.QueryNextSequenceReceiveRequest): Promise<_117.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _303.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _118.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _118.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _118.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _118.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _118.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _118.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _118.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _118.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _118.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _118.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _118.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _118.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _118.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _118.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _118.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _118.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenInit;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _118.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _118.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenInitResponse;
                    fromPartial(_: {}): _118.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _118.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenTry;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _118.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _118.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenTryResponse;
                    fromPartial(_: {}): _118.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _118.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenAck;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _118.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _118.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenAckResponse;
                    fromPartial(_: {}): _118.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _118.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _118.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _118.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenConfirmResponse;
                    fromPartial(_: {}): _118.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _118.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseInit;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _118.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _118.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseInitResponse;
                    fromPartial(_: {}): _118.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _118.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _118.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _118.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseConfirmResponse;
                    fromPartial(_: {}): _118.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _118.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgRecvPacket;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _118.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _118.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgRecvPacketResponse;
                    fromPartial(_: {}): _118.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _118.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeout;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        nextSequenceRecv?: string | number | import("long");
                        signer?: string;
                    }): _118.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _118.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeoutResponse;
                    fromPartial(_: {}): _118.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _118.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeoutOnClose;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        nextSequenceRecv?: string | number | import("long");
                        signer?: string;
                    }): _118.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _118.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeoutOnCloseResponse;
                    fromPartial(_: {}): _118.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _118.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgAcknowledgement;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _118.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _118.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgAcknowledgementResponse;
                    fromPartial(_: {}): _118.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _117.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _117.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _117.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelResponse;
                    fromPartial(object: {
                        channel?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _117.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _117.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _117.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _117.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _117.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _117.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _117.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _117.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _117.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _117.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _117.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _117.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _117.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _117.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _117.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentResponse;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _117.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _117.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _117.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentsResponse;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _117.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _117.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _117.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketReceiptResponse;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _117.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _117.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _117.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementResponse;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _117.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: (string | number | import("long"))[];
                    }): _117.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _117.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _117.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: (string | number | import("long"))[];
                    }): _117.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _117.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedPacketsResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long"))[];
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _117.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: (string | number | import("long"))[];
                    }): _117.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _117.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedAcksResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long"))[];
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _117.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _117.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _117.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryNextSequenceReceiveResponse;
                    fromPartial(object: {
                        nextSequenceReceive?: string | number | import("long");
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _117.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                        }[];
                        nextChannelSequence?: string | number | import("long");
                    }): _116.GenesisState;
                };
                PacketSequence: {
                    encode(message: _116.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PacketSequence;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _116.PacketSequence;
                };
                stateFromJSON(object: any): _115.State;
                stateToJSON(object: _115.State): string;
                orderFromJSON(object: any): _115.Order;
                orderToJSON(object: _115.Order): string;
                State: typeof _115.State;
                StateSDKType: typeof _115.State;
                Order: typeof _115.Order;
                OrderSDKType: typeof _115.Order;
                Channel: {
                    encode(message: _115.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Channel;
                    fromPartial(object: {
                        state?: _115.State;
                        ordering?: _115.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _115.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _115.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _115.State;
                        ordering?: _115.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _115.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _115.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Counterparty;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _115.Counterparty;
                };
                Packet: {
                    encode(message: _115.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Packet;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        timeoutTimestamp?: string | number | import("long");
                    }): _115.Packet;
                };
                PacketState: {
                    encode(message: _115.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.PacketState;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                        data?: Uint8Array;
                    }): _115.PacketState;
                };
                Acknowledgement: {
                    encode(message: _115.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _115.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _313.MsgClientImpl;
                QueryClientImpl: typeof _308.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _121.QueryClientStateRequest): Promise<_121.QueryClientStateResponse>;
                    clientStates(request?: _121.QueryClientStatesRequest): Promise<_121.QueryClientStatesResponse>;
                    consensusState(request: _121.QueryConsensusStateRequest): Promise<_121.QueryConsensusStateResponse>;
                    consensusStates(request: _121.QueryConsensusStatesRequest): Promise<_121.QueryConsensusStatesResponse>;
                    clientStatus(request: _121.QueryClientStatusRequest): Promise<_121.QueryClientStatusResponse>;
                    clientParams(request?: _121.QueryClientParamsRequest): Promise<_121.QueryClientParamsResponse>;
                    upgradedClientState(request?: _121.QueryUpgradedClientStateRequest): Promise<_121.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _121.QueryUpgradedConsensusStateRequest): Promise<_121.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _304.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _122.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _122.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _122.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _122.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _122.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _122.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _122.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _122.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _122.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateClient;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _122.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _122.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateClientResponse;
                    fromPartial(_: {}): _122.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _122.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateClient;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _122.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _122.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateClientResponse;
                    fromPartial(_: {}): _122.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _122.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpgradeClient;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _122.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _122.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpgradeClientResponse;
                    fromPartial(_: {}): _122.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _122.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _122.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _122.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: {}): _122.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _121.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _121.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _121.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStateResponse;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _121.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _121.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _121.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _121.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatesResponse;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _121.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _121.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                        latestHeight?: boolean;
                    }): _121.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _121.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _121.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _121.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _121.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _121.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStatesResponse;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _121.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _121.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatusRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _121.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _121.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatusResponse;
                    fromPartial(object: {
                        status?: string;
                    }): _121.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _121.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientParamsRequest;
                    fromPartial(_: {}): _121.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _121.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientParamsResponse;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _121.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _121.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _121.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _121.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedClientStateResponse;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _121.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _121.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _121.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _121.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _121.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string | number | import("long");
                                    revisionHeight?: string | number | import("long");
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: string | number | import("long");
                    }): _120.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _120.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _120.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _120.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _120.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _119.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.IdentifiedClientState;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _119.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _119.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _119.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _119.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientConsensusStates;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _119.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _119.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _119.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _119.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.UpgradeProposal;
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
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _119.UpgradeProposal;
                };
                Height: {
                    encode(message: _119.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Height;
                    fromPartial(object: {
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _119.Height;
                };
                Params: {
                    encode(message: _119.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Params;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _119.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _123.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _123.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _123.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerklePrefix;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _123.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _123.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerklePath;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _123.MerklePath;
                };
                MerkleProof: {
                    encode(message: _123.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _123.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _314.MsgClientImpl;
                QueryClientImpl: typeof _309.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _126.QueryConnectionRequest): Promise<_126.QueryConnectionResponse>;
                    connections(request?: _126.QueryConnectionsRequest): Promise<_126.QueryConnectionsResponse>;
                    clientConnections(request: _126.QueryClientConnectionsRequest): Promise<_126.QueryClientConnectionsResponse>;
                    connectionClientState(request: _126.QueryConnectionClientStateRequest): Promise<_126.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _126.QueryConnectionConsensusStateRequest): Promise<_126.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _305.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _127.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _127.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _127.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _127.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _127.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _127.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _127.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _127.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _127.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenInit;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: string | number | import("long");
                        signer?: string;
                    }): _127.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _127.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenInitResponse;
                    fromPartial(_: {}): _127.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _127.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenTry;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _127.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _127.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenTryResponse;
                    fromPartial(_: {}): _127.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _127.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenAck;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _127.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _127.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenAckResponse;
                    fromPartial(_: {}): _127.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _127.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _127.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _127.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: {}): _127.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _126.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _126.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _126.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionResponse;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _124.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _126.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _126.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _126.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _126.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionsResponse;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _124.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _126.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _126.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _126.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _126.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClientConnectionsResponse;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _126.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _126.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _126.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _126.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _126.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _126.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _126.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _126.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _126.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _124.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: string | number | import("long");
                        params?: {
                            maxExpectedTimePerBlock?: string | number | import("long");
                        };
                    }): _125.GenesisState;
                };
                stateFromJSON(object: any): _124.State;
                stateToJSON(object: _124.State): string;
                State: typeof _124.State;
                StateSDKType: typeof _124.State;
                ConnectionEnd: {
                    encode(message: _124.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionEnd;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _124.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                    }): _124.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _124.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _124.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                    }): _124.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _124.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Counterparty;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _124.Counterparty;
                };
                ClientPaths: {
                    encode(message: _124.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _124.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _124.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionPaths;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _124.ConnectionPaths;
                };
                Version: {
                    encode(message: _124.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _124.Version;
                };
                Params: {
                    encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: string | number | import("long");
                    }): _124.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _310.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _128.QueryAppVersionRequest): Promise<_128.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _128.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAppVersionRequest;
                    fromPartial(object: {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _115.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    }): _128.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _128.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAppVersionResponse;
                    fromPartial(object: {
                        portId?: string;
                        version?: string;
                    }): _128.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string | number | import("long");
                                        revisionHeight?: string | number | import("long");
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: string | number | import("long");
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _124.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string | number | import("long");
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: string | number | import("long");
                            params?: {
                                maxExpectedTimePerBlock?: string | number | import("long");
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _115.State;
                                ordering?: _115.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long");
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long");
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long");
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long");
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long");
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long");
                            }[];
                            nextChannelSequence?: string | number | import("long");
                        };
                    }): _129.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _130.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _130.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _131.DataType;
                dataTypeToJSON(object: _131.DataType): string;
                DataType: typeof _131.DataType;
                DataTypeSDKType: typeof _131.DataType;
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientState;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        frozenSequence?: string | number | import("long");
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long");
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _131.ClientState;
                };
                ConsensusState: {
                    encode(message: _131.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long");
                    }): _131.ConsensusState;
                };
                Header: {
                    encode(message: _131.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Header;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _131.Header;
                };
                Misbehaviour: {
                    encode(message: _131.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long");
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _131.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _131.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                    }): _131.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _131.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _131.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _131.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _131.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _131.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _131.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SignBytes;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        diversifier?: string;
                        dataType?: _131.DataType;
                        data?: Uint8Array;
                    }): _131.SignBytes;
                };
                HeaderData: {
                    encode(message: _131.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _131.HeaderData;
                };
                ClientStateData: {
                    encode(message: _131.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _131.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _131.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _131.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _131.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _124.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                    }): _131.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _131.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _131.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _131.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _131.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _131.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _131.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _131.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _131.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _131.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long");
                    }): _131.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _132.DataType;
                dataTypeToJSON(object: _132.DataType): string;
                DataType: typeof _132.DataType;
                DataTypeSDKType: typeof _132.DataType;
                ClientState: {
                    encode(message: _132.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientState;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long");
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _132.ClientState;
                };
                ConsensusState: {
                    encode(message: _132.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long");
                    }): _132.ConsensusState;
                };
                Header: {
                    encode(message: _132.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Header;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _132.Header;
                };
                Misbehaviour: {
                    encode(message: _132.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long");
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _132.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _132.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                    }): _132.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _132.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _132.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _132.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _132.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _132.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _132.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignBytes;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        diversifier?: string;
                        dataType?: _132.DataType;
                        data?: Uint8Array;
                    }): _132.SignBytes;
                };
                HeaderData: {
                    encode(message: _132.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _132.HeaderData;
                };
                ClientStateData: {
                    encode(message: _132.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _132.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _132.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _132.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _132.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _124.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                    }): _132.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _132.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _115.State;
                            ordering?: _115.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _132.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _132.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _132.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _132.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _132.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _132.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _132.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _132.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long");
                    }): _132.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _133.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: string | number | import("long");
                            denominator?: string | number | import("long");
                        };
                        trustingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        latestHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _133.ClientState;
                };
                ConsensusState: {
                    encode(message: _133.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusState;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _133.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _133.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
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
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            trustedValidators?: {
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
                        header2?: {
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
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            trustedValidators?: {
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
                    }): _133.Misbehaviour;
                };
                Header: {
                    encode(message: _133.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Header;
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
                        trustedHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        trustedValidators?: {
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
                    }): _133.Header;
                };
                Fraction: {
                    encode(message: _133.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Fraction;
                    fromPartial(object: {
                        numerator?: string | number | import("long");
                        denominator?: string | number | import("long");
                    }): _133.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _311.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _312.MsgClientImpl;
                    };
                    client: {
                        v1: _313.MsgClientImpl;
                    };
                    connection: {
                        v1: _314.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _111.QueryDenomTraceRequest): Promise<_111.QueryDenomTraceResponse>;
                            denomTraces(request?: _111.QueryDenomTracesRequest): Promise<_111.QueryDenomTracesResponse>;
                            params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _117.QueryChannelRequest): Promise<_117.QueryChannelResponse>;
                            channels(request?: _117.QueryChannelsRequest): Promise<_117.QueryChannelsResponse>;
                            connectionChannels(request: _117.QueryConnectionChannelsRequest): Promise<_117.QueryConnectionChannelsResponse>;
                            channelClientState(request: _117.QueryChannelClientStateRequest): Promise<_117.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _117.QueryChannelConsensusStateRequest): Promise<_117.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _117.QueryPacketCommitmentRequest): Promise<_117.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _117.QueryPacketCommitmentsRequest): Promise<_117.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _117.QueryPacketReceiptRequest): Promise<_117.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _117.QueryPacketAcknowledgementRequest): Promise<_117.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _117.QueryPacketAcknowledgementsRequest): Promise<_117.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _117.QueryUnreceivedPacketsRequest): Promise<_117.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _117.QueryUnreceivedAcksRequest): Promise<_117.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _117.QueryNextSequenceReceiveRequest): Promise<_117.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _121.QueryClientStateRequest): Promise<_121.QueryClientStateResponse>;
                            clientStates(request?: _121.QueryClientStatesRequest): Promise<_121.QueryClientStatesResponse>;
                            consensusState(request: _121.QueryConsensusStateRequest): Promise<_121.QueryConsensusStateResponse>;
                            consensusStates(request: _121.QueryConsensusStatesRequest): Promise<_121.QueryConsensusStatesResponse>;
                            clientStatus(request: _121.QueryClientStatusRequest): Promise<_121.QueryClientStatusResponse>;
                            clientParams(request?: _121.QueryClientParamsRequest): Promise<_121.QueryClientParamsResponse>;
                            upgradedClientState(request?: _121.QueryUpgradedClientStateRequest): Promise<_121.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _121.QueryUpgradedConsensusStateRequest): Promise<_121.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _126.QueryConnectionRequest): Promise<_126.QueryConnectionResponse>;
                            connections(request?: _126.QueryConnectionsRequest): Promise<_126.QueryConnectionsResponse>;
                            clientConnections(request: _126.QueryClientConnectionsRequest): Promise<_126.QueryClientConnectionsResponse>;
                            connectionClientState(request: _126.QueryConnectionClientStateRequest): Promise<_126.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _126.QueryConnectionConsensusStateRequest): Promise<_126.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _128.QueryAppVersionRequest): Promise<_128.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _302.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _303.LCDQueryClient;
                    };
                    client: {
                        v1: _304.LCDQueryClient;
                    };
                    connection: {
                        v1: _305.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
