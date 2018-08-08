import { Connect , SimpleSigner} from 'uport-connect'

export let uport = new Connect('React Uport Truffle Boilerplate', {
  clientId: '2otSK2HJxk9NH9CJ4F5g5M9NHAiC6eFA4ZK',
  network: 'rinkeby',
  signer: SimpleSigner('06bb1c5018ae793419277c5a3a1a7d5d151843fcd8a5fd8bfd4e398040a1af50')
})

export const web3 = uport.getWeb3()
