import { MarketMakerIncl, MarketMakerInclSDKType } from "./mm";
import { IncentiveDistribution, IncentiveDistributionSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface MarketMakerProposal {
  title: string;
  description: string;
  inclusions: MarketMakerIncl[];
  exclusions: MarketMakerIncl[];
  rejections: MarketMakerIncl[];
  distributions: IncentiveDistribution[];
}
export interface MarketMakerProposalSDKType {
  title: string;
  description: string;
  inclusions: MarketMakerInclSDKType[];
  exclusions: MarketMakerInclSDKType[];
  rejections: MarketMakerInclSDKType[];
  distributions: IncentiveDistributionSDKType[];
}

function createBaseMarketMakerProposal(): MarketMakerProposal {
  return {
    title: "",
    description: "",
    inclusions: [],
    exclusions: [],
    rejections: [],
    distributions: []
  };
}

export const MarketMakerProposal = {
  encode(message: MarketMakerProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.inclusions) {
      MarketMakerIncl.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.exclusions) {
      MarketMakerIncl.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.rejections) {
      MarketMakerIncl.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.distributions) {
      IncentiveDistribution.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketMakerProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMakerProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.inclusions.push(MarketMakerIncl.decode(reader, reader.uint32()));
          break;

        case 4:
          message.exclusions.push(MarketMakerIncl.decode(reader, reader.uint32()));
          break;

        case 5:
          message.rejections.push(MarketMakerIncl.decode(reader, reader.uint32()));
          break;

        case 6:
          message.distributions.push(IncentiveDistribution.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketMakerProposal>): MarketMakerProposal {
    const message = createBaseMarketMakerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.inclusions = object.inclusions?.map(e => MarketMakerIncl.fromPartial(e)) || [];
    message.exclusions = object.exclusions?.map(e => MarketMakerIncl.fromPartial(e)) || [];
    message.rejections = object.rejections?.map(e => MarketMakerIncl.fromPartial(e)) || [];
    message.distributions = object.distributions?.map(e => IncentiveDistribution.fromPartial(e)) || [];
    return message;
  }

};