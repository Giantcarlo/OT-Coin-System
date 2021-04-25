# OT-Coin-System

This app contains two backend apps.

The first is a python backed backend that is connected to a database that stores items and the OTCoin wallet/

## Api Routes

[Google](www.http://domain/)
``` Api root homepage - Displays all api endpoints```

[Google](www.http://domain/items)
``` Get items info ```

[Google](www.http://domain/wallets)
``` Get Wallets info ```


[Google](www.http://domain/admin)
``` route that allows administrative users to modify database. ```
Allows User handling and Group Management.

Allows database manipulation

[Google](www.http://domain/admin/api/item/add/)
``` route that enables administrative users to add items to database ```

### Fields
Item name = Item offered by employer
Description = Description of item
Price - Price of item in OTC
TotalContributed - Amount employees contributed to item in OTC
Availability - Boolean value showing whether object is available for purchase

[Google](www.http://domain/admin/api/wallet/add/)
``` route that enables administrative users to add coins to wallets ```

### Fields
Amount = Total OTCoins earned. 300 minutes --> 1 OTCoin
OTHours = Total Over time done in minutes.


Additional Backend that provisions user management written in Node.js.


## Coming soon

Linking each User model with a Wallet model so that they may purchase or contribute OTC coins to an item.

User permissions that allow employees to view, reccomend and contribute to items only

Allows purchasing of items and removes availability of an item after purchasing

Automatic conversion of OT Hours to OTCoins