# Tuangou GrubMarket Clone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

To run this app

    npm install

    npm start

Go to localhost:3000 to view the app

## Note

For the retain previous scroll position, you can change the delayed time in
    
    /node_modules/delayed-scroll-restoration-polyfill/index.js

    change the value of var SCROLL_RESTORATION_TIMEOUT_MS

## User Stories

The following **required** functionality is completed:

- [X] Able to load and display the deals returned from api: GET https://tuangou.grubmarket.com/api/deals 
- [X] Clicking on one of the deals should navigate to the deal details page.
- [X] Should display the details by using content returned from "GET  https://tuangou.grubmarket.com/api/deals/{dealId} API"
- [X] Should remember scroll position in deals page so that we coming back from the details page, it's positioned at the deal user last viewed.
- [X] For deals sold by GrubMarket (the ones with "GM" icon and labeled “官方团购" at the top of the details page) such as "https://tuangou.grubmarket.com/#/deals/49d20b44-0cdc-4a2d-9d80-b8281d0a993c". 
- [X] Each product in the deal has a category classification. Design a filter in details page to filter products by category

The following **optional** features are implemented:

- [X] Implemented infinite loading on deals
- [X] Added spinner when fetching data
- [X] Navigation Bar, containing Logo, "主页", "热帖", "团购", "注册" and "登入"
- [X] Filters to filter Official deals, or/and Active deals.
- [X] Animation when hover on the deal
- [X] Include view counts, likes counts, orders counts in deal
- [X] Sticky "结算" button on the deal-detail view
- [X] Able to hide and show more pickup locations
- [X] Added order history of deal
- [X] Implemented infinite loading on order history

The following **Bonus** features are implemented:

- [X] improve performance by reducing payload size, only load resources (e.g. images) when in viewing area, use cached content.

## Screenshots

![screenshot 1](./screenshots/screenshot1.png =200x200)
![screenshot 2](./screenshots/screenshot2.png =200x200)
![screenshot 3](./screenshots/screenshot3.png =200x200)
![screenshot 4](./screenshots/screenshot4.png =200x200)

## License

    Copyright [2017] [Jiapei Liang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.