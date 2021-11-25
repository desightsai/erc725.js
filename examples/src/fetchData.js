// https://stackoverflow.com/questions/60059121/nodejs-es6-imports-cannot-find-module#comment106219502_60059121
// eslint-disable-next-line import/extensions
import { getInstance } from './instantiation.js';

const myERC725 = getInstance();

const dataAllKeys = await myERC725.fetchData();
/*
{
  'SupportedStandards:ERC725Account': '0xafdeb5d6',
  LSP3Profile: {
    LSP3Profile: {
      name: 'patrick-mcdowell',
      links: [Array],
      description: "Beautiful clothing that doesn't cost the Earth. A sustainable designer based in London Patrick works with brand partners to refocus on systemic change centred around creative education. ",
      profileImage: [Array],
      backgroundImage: [Array],
      tags: [Array]
    }
  },
  LSP1UniversalReceiverDelegate: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68',
  'LSP3IssuedAssets[]': [
    '0xc444009d38d3046bb0cF81Fa2Cd295ce46A67C78',
    '0x4fEbC3491230571F6e1829E46602e3b110215A2E',
    '0xB92a8DdA288638491AEE5C2a003D4CAbfa47aE3F',
    '0x1e52e7F1707dcda57dD33F003B2311652A465acA',
    '0x0BDA71aA980D37Ea56E8a3784E4c309101DAf3E4',
    '0xfDB4D9C299438B9839e9d04E34B9609C5b56600D',
    '0x081D3F0bff8ae2339cb65113822eEc1510704d5c',
    '0x55C98c6944B7497FaAf4db0386a1aD1E6efF526E',
    '0x90D1a1D68fa23AEEE991220703f1a1C3782e0b35',
    '0xdB5AB19792d9fB61c1Dff57810Fb7C6f839Af8ED'
  ]
}
*/

const dataOneKey = await myERC725.fetchData('LSP3Profile');
/*
{
  LSP3Profile: {
    LSP3Profile: {
      name: 'patrick-mcdowell',
      links: [Array],
      description: "Beautiful clothing that doesn't cost the Earth. A sustainable designer based in London Patrick works with brand partners to refocus on systemic change centred around creative education. ",
      profileImage: [Array],
      backgroundImage: [Array],
      tags: [Array]
    }
  }
}
*/

const dataManyKeys = await myERC725.fetchData([
  'LSP3Profile',
  'LSP1UniversalReceiverDelegate',
]);
/*
{
  LSP3Profile: {
    LSP3Profile: {
      name: 'patrick-mcdowell',
      links: [Array],
      description: "Beautiful clothing that doesn't cost the Earth. A sustainable designer based in London Patrick works with brand partners to refocus on systemic change centred around creative education. ",
      profileImage: [Array],
      backgroundImage: [Array],
      tags: [Array]
    }
  },
  LSP1UniversalReceiverDelegate: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68'
}
*/

console.log('/*--------------------------------------------/*');
console.log('/* fetchData - all keys                       /*');
console.log('/*--------------------------------------------/*');
console.log(dataAllKeys);

console.log('/*--------------------------------------------/*');
console.log('/* fetchData - one key                        /*');
console.log('/*--------------------------------------------/*');
console.log(dataOneKey);

console.log('/*--------------------------------------------/*');
console.log('/* fetchData - many keys                      /*');
console.log('/*--------------------------------------------/*');
console.log(dataManyKeys);