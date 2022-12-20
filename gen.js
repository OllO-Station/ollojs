"use strict";
exports.__esModule = true;
var path_1 = require("path");
var telescope_1 = require("@osmonauts/telescope");
var rimraf_1 = require("rimraf");
var protoDirs = [(0, path_1.join)(__dirname, './third_party/proto'), (0, path_1.join)(__dirname, './proto')];
var outPath = (0, path_1.join)(__dirname, '../src/codegen');
(0, rimraf_1.sync)(outPath);
(0, telescope_1["default"])({
    protoDirs: protoDirs,
    outPath: outPath,
    // all options are totally optional ;)
    options: {
        aminoEncoding: {
            enabled: true
        },
        lcdClients: {
            enabled: true
        },
        rpcClients: {
            enabled: false,
            camelCase: true
        },
        // you can scope options to certain packages:
        packages: {
        // nebula: {
        //   prototypes: {
        //     typingsFormat: {
        //       useExact: false
        //     }
        //   }
        // },
        // akash: {
        //   stargateClients: {
        //       enabled: true;
        //       includeCosmosDefaultTypes: false;
        //   },
        //   prototypes: {
        //     typingsFormat: {
        //         useExact: false
        //     }
        //   }
        // }
        }
    }
}).then(function () {
    console.log('✨ all done!');
})["catch"](function (e) {
    console.error(e);
    process.exit(1);
});
