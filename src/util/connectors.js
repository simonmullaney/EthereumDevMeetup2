import { Connect , SimpleSigner} from 'uport-connect'

export let uport = new Connect('React Uport Truffle Boilerplate', {
  clientId: '2omnRZonASUpYChpmr2bVSpJfjEkYjgFxgY',
  network: 'rinkeby',
  signer: SimpleSigner('fbb8f297b59111683e79af1bb9af93cc0d63c5d42dea146e88c537d14c1f6273')
})

export const web3 = uport.getWeb3()
