import * as _148 from "./applications/transfer/v1/genesis";
import * as _149 from "./applications/transfer/v1/query";
import * as _150 from "./applications/transfer/v1/transfer";
import * as _151 from "./applications/transfer/v1/tx";
import * as _152 from "./applications/transfer/v2/packet";
import * as _153 from "./core/channel/v1/channel";
import * as _154 from "./core/channel/v1/genesis";
import * as _155 from "./core/channel/v1/query";
import * as _156 from "./core/channel/v1/tx";
import * as _157 from "./core/client/v1/client";
import * as _158 from "./core/client/v1/genesis";
import * as _159 from "./core/client/v1/query";
import * as _160 from "./core/client/v1/tx";
import * as _161 from "./core/commitment/v1/commitment";
import * as _162 from "./core/connection/v1/connection";
import * as _163 from "./core/connection/v1/genesis";
import * as _164 from "./core/connection/v1/query";
import * as _165 from "./core/connection/v1/tx";
import * as _166 from "./core/port/v1/query";
import * as _167 from "./core/types/v1/genesis";
import * as _168 from "./lightclients/localhost/v1/localhost";
import * as _169 from "./lightclients/solomachine/v1/solomachine";
import * as _170 from "./lightclients/solomachine/v2/solomachine";
import * as _171 from "./lightclients/tendermint/v1/tendermint";
import * as _423 from "./applications/transfer/v1/tx.amino";
import * as _424 from "./core/channel/v1/tx.amino";
import * as _425 from "./core/client/v1/tx.amino";
import * as _426 from "./core/connection/v1/tx.amino";
import * as _427 from "./applications/transfer/v1/tx.registry";
import * as _428 from "./core/channel/v1/tx.registry";
import * as _429 from "./core/client/v1/tx.registry";
import * as _430 from "./core/connection/v1/tx.registry";
import * as _431 from "./applications/transfer/v1/query.lcd";
import * as _432 from "./core/channel/v1/query.lcd";
import * as _433 from "./core/client/v1/query.lcd";
import * as _434 from "./core/connection/v1/query.lcd";
import * as _435 from "./applications/transfer/v1/query.rpc.Query";
import * as _436 from "./core/channel/v1/query.rpc.Query";
import * as _437 from "./core/client/v1/query.rpc.Query";
import * as _438 from "./core/connection/v1/query.rpc.Query";
import * as _439 from "./core/port/v1/query.rpc.Query";
import * as _440 from "./applications/transfer/v1/tx.rpc.msg";
import * as _441 from "./core/channel/v1/tx.rpc.msg";
import * as _442 from "./core/client/v1/tx.rpc.msg";
import * as _443 from "./core/connection/v1/tx.rpc.msg";
import * as _535 from "./lcd";
import * as _536 from "./rpc.query";
import * as _537 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._423,
        ..._427,
        ..._431,
        ..._435,
        ..._440
      };
      export const v2 = { ..._152
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._424,
        ..._428,
        ..._432,
        ..._436,
        ..._441
      };
    }
    export namespace client {
      export const v1 = { ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._425,
        ..._429,
        ..._433,
        ..._437,
        ..._442
      };
    }
    export namespace commitment {
      export const v1 = { ..._161
      };
    }
    export namespace connection {
      export const v1 = { ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._426,
        ..._430,
        ..._434,
        ..._438,
        ..._443
      };
    }
    export namespace port {
      export const v1 = { ..._166,
        ..._439
      };
    }
    export namespace types {
      export const v1 = { ..._167
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._168
      };
    }
    export namespace solomachine {
      export const v1 = { ..._169
      };
      export const v2 = { ..._170
      };
    }
    export namespace tendermint {
      export const v1 = { ..._171
      };
    }
  }
  export const ClientFactory = { ..._535,
    ..._536,
    ..._537
  };
}