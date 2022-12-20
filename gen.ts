import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, './third_party/proto'),join(__dirname, './proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,

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
}).then(()=>{
  console.log('✨ all done!');
}).catch(e=>{
  console.error(e);
  process.exit(1);
})
