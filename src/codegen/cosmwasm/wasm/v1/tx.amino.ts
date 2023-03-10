import { accessTypeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { toBase64, fromBase64, fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { Long } from "../../../helpers";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig } from "./tx";
export interface AminoMsgStoreCode extends AminoMsg {
  type: "wasm/MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: string;
    instantiate_permission: {
      permission: number;
      address: string;
      addresses: string[];
    };
  };
}
export interface AminoMsgInstantiateContract extends AminoMsg {
  type: "wasm/MsgInstantiateContract";
  value: {
    sender: string;
    admin: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgInstantiateContract2 extends AminoMsg {
  type: "wasm/MsgInstantiateContract2";
  value: {
    sender: string;
    admin: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
    salt: Uint8Array;
    fix_msg: boolean;
  };
}
export interface AminoMsgExecuteContract extends AminoMsg {
  type: "wasm/MsgExecuteContract";
  value: {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgMigrateContract extends AminoMsg {
  type: "wasm/MsgMigrateContract";
  value: {
    sender: string;
    contract: string;
    code_id: string;
    msg: Uint8Array;
  };
}
export interface AminoMsgUpdateAdmin extends AminoMsg {
  type: "wasm/MsgUpdateAdmin";
  value: {
    sender: string;
    new_admin: string;
    contract: string;
  };
}
export interface AminoMsgClearAdmin extends AminoMsg {
  type: "wasm/MsgClearAdmin";
  value: {
    sender: string;
    contract: string;
  };
}
export interface AminoMsgUpdateInstantiateConfig extends AminoMsg {
  type: "wasm/MsgUpdateInstantiateConfig";
  value: {
    sender: string;
    code_id: string;
    new_instantiate_permission: {
      permission: number;
      address: string;
      addresses: string[];
    };
  };
}
export const AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode,
      instantiatePermission
    }: MsgStoreCode): AminoMsgStoreCode["value"] => {
      return {
        sender,
        wasm_byte_code: toBase64(wasmByteCode),
        instantiate_permission: {
          permission: instantiatePermission.permission,
          address: instantiatePermission.address,
          addresses: instantiatePermission.addresses
        }
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      instantiate_permission
    }: AminoMsgStoreCode["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: fromBase64(wasm_byte_code),
        instantiatePermission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          address: instantiate_permission.address,
          addresses: instantiate_permission.addresses
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: ({
      sender,
      admin,
      codeId,
      label,
      msg,
      funds
    }: MsgInstantiateContract): AminoMsgInstantiateContract["value"] => {
      return {
        sender,
        admin,
        code_id: codeId.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds
    }: AminoMsgInstantiateContract["value"]): MsgInstantiateContract => {
      return {
        sender,
        admin,
        codeId: Long.fromString(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
    aminoType: "wasm/MsgInstantiateContract2",
    toAmino: ({
      sender,
      admin,
      codeId,
      label,
      msg,
      funds,
      salt,
      fixMsg
    }: MsgInstantiateContract2): AminoMsgInstantiateContract2["value"] => {
      return {
        sender,
        admin,
        code_id: codeId.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fix_msg: fixMsg
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds,
      salt,
      fix_msg
    }: AminoMsgInstantiateContract2["value"]): MsgInstantiateContract2 => {
      return {
        sender,
        admin,
        codeId: Long.fromString(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fixMsg: fix_msg
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContract): AminoMsgExecuteContract["value"] => {
      return {
        sender,
        contract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds
    }: AminoMsgExecuteContract["value"]): MsgExecuteContract => {
      return {
        sender,
        contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: ({
      sender,
      contract,
      codeId,
      msg
    }: MsgMigrateContract): AminoMsgMigrateContract["value"] => {
      return {
        sender,
        contract,
        code_id: codeId.toString(),
        msg: JSON.parse(fromUtf8(msg))
      };
    },
    fromAmino: ({
      sender,
      contract,
      code_id,
      msg
    }: AminoMsgMigrateContract["value"]): MsgMigrateContract => {
      return {
        sender,
        contract,
        codeId: Long.fromString(code_id),
        msg: toUtf8(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: ({
      sender,
      newAdmin,
      contract
    }: MsgUpdateAdmin): AminoMsgUpdateAdmin["value"] => {
      return {
        sender,
        new_admin: newAdmin,
        contract
      };
    },
    fromAmino: ({
      sender,
      new_admin,
      contract
    }: AminoMsgUpdateAdmin["value"]): MsgUpdateAdmin => {
      return {
        sender,
        newAdmin: new_admin,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: ({
      sender,
      contract
    }: MsgClearAdmin): AminoMsgClearAdmin["value"] => {
      return {
        sender,
        contract
      };
    },
    fromAmino: ({
      sender,
      contract
    }: AminoMsgClearAdmin["value"]): MsgClearAdmin => {
      return {
        sender,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
    aminoType: "wasm/MsgUpdateInstantiateConfig",
    toAmino: ({
      sender,
      codeId,
      newInstantiatePermission
    }: MsgUpdateInstantiateConfig): AminoMsgUpdateInstantiateConfig["value"] => {
      return {
        sender,
        code_id: codeId.toString(),
        new_instantiate_permission: {
          permission: newInstantiatePermission.permission,
          address: newInstantiatePermission.address,
          addresses: newInstantiatePermission.addresses
        }
      };
    },
    fromAmino: ({
      sender,
      code_id,
      new_instantiate_permission
    }: AminoMsgUpdateInstantiateConfig["value"]): MsgUpdateInstantiateConfig => {
      return {
        sender,
        codeId: Long.fromString(code_id),
        newInstantiatePermission: {
          permission: accessTypeFromJSON(new_instantiate_permission.permission),
          address: new_instantiate_permission.address,
          addresses: new_instantiate_permission.addresses
        }
      };
    }
  }
};