import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  { // ----------------------------------------------------------------------- checked
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'SNAKES',
    lpAddresses: {
      97: '',
      56: '0x09f1b8b2e401a18fda3f662cd95d7032eeb1d753',  // checked
    },
    tokenSymbol: 'SNAKES',
    tokenAddresses: {
      97: '',
      56: '0x09f1b8b2e401a18fda3f662cd95d7032eeb1d753', // checked
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- checked
    pid: 1,
    lpSymbol: 'SNAKES-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x838287f83469a5f6a8eec5a308d185be89c4b6b8', // checked
    },
    tokenSymbol: 'SNAKES',
    tokenAddresses: {
      97: '',
      56: '0x09f1b8b2e401a18fda3f662cd95d7032eeb1d753', // checked
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- checked
    pid: 2,
    lpSymbol: 'SNAKES-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x580f7e3963a0eff0444412038bfb517607366989', // checked
    },
    tokenSymbol: 'SNAKES',
    tokenAddresses: {
      97: '',
      56: '0x09f1b8b2e401a18fda3f662cd95d7032eeb1d753', // checked
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 4,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', // BTCB token
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8', // ETH token
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // BNB token
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 7, 
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  { // ----------------------------------------------------------------------- not changed
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA token
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
