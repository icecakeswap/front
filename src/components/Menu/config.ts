import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.snakeswap.live/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x660F25d08D2d8A2dD55659B6F0dd94f973fa9B32',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.snakeswap.live/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x660F25d08D2d8A2dD55659B6F0dd94f973fa9B32',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: '/bush',
  },
  {
    label: 'Certik Audit (In-Progress)',
    icon: 'ShieldIcon',
    href: 'https://certik.org/projects/snakeswapdefi',
    target: '_blank',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x660F25d08D2d8A2dD55659B6F0dd94f973fa9B32',
        target: '_blank',
      },
      {
        label: 'Token',
        href: 'https://doc.snakeswap.live/tokennomics/snakeswap-token',
        target: '_blank',
      },
      {
        label: 'Contracts',
        href: 'https://doc.snakeswap.live/security/contracts',
        target: '_blank',
      },
      {
        label: 'Transparency',
        href: 'https://doc.snakeswap.live/transparency/transparency',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/snakeswap',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/snakeswap/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/SnakeswapDefi',
        target: '_blank',
      },
      {
        label: 'Docs',
        href: 'https://doc.snakeswap.live/',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://snakeswapdefi.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/snakeswapdefi',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/snakeswapdefichat',
        target: '_blank',
      },
    ],
  },
]

export default config
