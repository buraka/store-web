angular.module("store.navigation").controller("storeNavigationController",
    ["$state","i18n", "stateNames",
        function ($state, i18n, stateNames) {
            "use strict";
            var self = this;
            self.navigationMenuList = [
                {
                    id: 1,
                    name: i18n.translate("dashboard"),
                    state: stateNames.DASHBOARD
                },
                {
                    id: 2,
                    name: i18n.translate("role"),
                    state: stateNames.ROLE
                },
                {
                    id: 3,
                    name: i18n.translate("user"),
                    state: stateNames.USER
                },
                {
                    id: 4,
                    name: i18n.translate("county"),
                    state: stateNames.COUNTY
                },
                {
                    id: 5,
                    name: i18n.translate("product"),
                    state: stateNames.PRODUCT
                },
                {
                    id: 6,
                    name: i18n.translate("product_category"),
                    state: stateNames.PRODUCT_CATEGORY
                },
                {
                    id: 7,
                    name: i18n.translate("store"),
                    state: stateNames.STORE
                },
                {
                    id: 8,
                    name: i18n.translate("firm"),
                    state: stateNames.FIRM
                },
                {
                    id: 9,
                    name: i18n.translate("firm_type"),
                    state: stateNames.FIRM_TYPE
                }
            ];

            self.navigateToState = function (menuItem) {
              self.state = menuItem.state;
              $state.go(menuItem.state);
            };

            self.isActive = function (menuItem) {
                return menuItem.state === self.state;
            };
            self.state=stateNames.DASHBOARD;
            self.navigateToState(self.navigationMenuList[0])
        }
    ]);
