This is the code repo for the Ethereum Developer meetup on the 25th of July.


In this meetup we are going to look at truffle boxes and uPort.


Truffle boxes are very helpful boilerplates that allow you to concentrate on what makes you Dapp unique rather than worrying about setup & configuration.

uPort's open identity system allows users to register their own identity on Ethereum, send and request credentials, sign transactions, and securely manage keys & data.


Getting started:


Your going to have to download the uPort application for your ios or android device:

ios -> https://itunes.apple.com/us/app/uport-id/id1123434510?mt=8
android -> https://play.google.com/store/apps/details?id=com.uportMobile&hl=en

then follow the steps to set up your identity.

Once you have set up your identity you will have to register your new application with uPort's app manager (https://appmanager.uport.me/). To do this you will have to login with your newly created identity by scanning a barcode.


Now for the code...

To download and install the react-uport box, run the command:

`truffle unbox react-uport`


Once this command is completed you will have to make a few changes so that it can connect to your uPort application.

1) src/util/connectors.js - Add DApp Signing Keys and Credentials

You will need to add your signing key and your credentials to this file. You get theses credentials when you register your new app with uPort application manager. this file should be of the following form when your complete, dont forget to add your client_id & signing_key.

```
import { Connect, SimpleSigner } from 'uport-connect'
export let uport = new Connect('React Uport Truffle Boilerplate', {
  clientId: 'ENTER_CLIENT_ID',
  network: 'rinkeby',
  signer: SimpleSigner('ENTER_SIGNING_KEY')
})
export const web3 = uport.getWeb3()
```


2) src/user/ui/loginbutton/LoginButtonActions.js

add the following credentials to be requested -> requested: ['name', 'email', 'phone', 'country']

The file should be of this format when complete:

```
uport.requestCredentials({

    requested: ['name', 'email', 'phone', 'country']

}).then((credentials) => {
  dispatch(userLoggedIn(credentials)).......

```

3) src/user/layouts/profile/Profile.js


```
<p>
  <strong>Name</strong><br />
  {this.props.authData.name}
</p>
<p>
  <strong>Email</strong><br />
  {this.props.authData.email}
</p>
<p>
  <strong>Phone</strong><br />
  {this.props.authData.phone}
</p>
<p>
  <strong>Country</strong><br />
  {this.props.authData.country}
</p>
```



Once al the changes have been made, you can run the app by running the following command in the root of your project directory:

`npm run start`

Then navigate to http://localhost:3000/ to view your app. You will be able to log into your app by signing the QR code with the application on your smart phone.


HAPPY CODING!
