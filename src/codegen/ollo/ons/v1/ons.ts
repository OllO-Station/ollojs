import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
export enum NameStatus {
  NAME_STATUS_UNSPECIFIED = 0,
  NAME_STATUS_CLAIMED_INACTIVE = 1,
  NAME_STATUS_CLAIMED_ACTIVE = 2,
  NAME_STATUS_UNCLAIMED = 3,
  NAME_STATUS_LISTED = 4,
  NAME_STATUS_DISABLED = 5,
  UNRECOGNIZED = -1,
}
export const NameStatusSDKType = NameStatus;
export function nameStatusFromJSON(object: any): NameStatus {
  switch (object) {
    case 0:
    case "NAME_STATUS_UNSPECIFIED":
      return NameStatus.NAME_STATUS_UNSPECIFIED;

    case 1:
    case "NAME_STATUS_CLAIMED_INACTIVE":
      return NameStatus.NAME_STATUS_CLAIMED_INACTIVE;

    case 2:
    case "NAME_STATUS_CLAIMED_ACTIVE":
      return NameStatus.NAME_STATUS_CLAIMED_ACTIVE;

    case 3:
    case "NAME_STATUS_UNCLAIMED":
      return NameStatus.NAME_STATUS_UNCLAIMED;

    case 4:
    case "NAME_STATUS_LISTED":
      return NameStatus.NAME_STATUS_LISTED;

    case 5:
    case "NAME_STATUS_DISABLED":
      return NameStatus.NAME_STATUS_DISABLED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return NameStatus.UNRECOGNIZED;
  }
}
export function nameStatusToJSON(object: NameStatus): string {
  switch (object) {
    case NameStatus.NAME_STATUS_UNSPECIFIED:
      return "NAME_STATUS_UNSPECIFIED";

    case NameStatus.NAME_STATUS_CLAIMED_INACTIVE:
      return "NAME_STATUS_CLAIMED_INACTIVE";

    case NameStatus.NAME_STATUS_CLAIMED_ACTIVE:
      return "NAME_STATUS_CLAIMED_ACTIVE";

    case NameStatus.NAME_STATUS_UNCLAIMED:
      return "NAME_STATUS_UNCLAIMED";

    case NameStatus.NAME_STATUS_LISTED:
      return "NAME_STATUS_LISTED";

    case NameStatus.NAME_STATUS_DISABLED:
      return "NAME_STATUS_DISABLED";

    case NameStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Name {
  name: string;
  value: string;
  metadata: string;
  threads: Name[];
  owner: string;
  status: NameStatus;
  expiry?: Date;
}
export interface NameSDKType {
  name: string;
  value: string;
  metadata: string;
  threads: NameSDKType[];
  owner: string;
  status: NameStatus;
  expiry?: Date;
}

function createBaseName(): Name {
  return {
    name: "",
    value: "",
    metadata: "",
    threads: [],
    owner: "",
    status: 0,
    expiry: undefined
  };
}

export const Name = {
  encode(message: Name, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    for (const v of message.threads) {
      Name.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Name {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.threads.push(Name.decode(reader, reader.uint32()));
          break;

        case 5:
          message.owner = reader.string();
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        case 7:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Name>): Name {
    const message = createBaseName();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.metadata = object.metadata ?? "";
    message.threads = object.threads?.map(e => Name.fromPartial(e)) || [];
    message.owner = object.owner ?? "";
    message.status = object.status ?? 0;
    message.expiry = object.expiry ?? undefined;
    return message;
  }

};