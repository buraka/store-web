angular.module("store.store").controller("storeController",
    ["storeService", "countyService",
        function (storeService, countyService) {
            "use strict";
            var self = this;
            self.countyList = [];
            self.storeList = [];
            self.address = {};
            self.storeId = "";
            self.storeName = "";

            self.successGetCounty = function (data) {
            }
            self.getCountyList = function () {
                var config = {
                    "onSuccess": self.successGetCounty,
                    "onError": self.errorStore
                };
                self.countyList = countyService.getCountyList(config).promise;

                self.countyList.then(function (resp) {
                    debugger;
                    self.countyList = resp;
                });

            };

            self.successGetStore = function (data) {
              self.storeList = data;
            }

            self.successCRUDStore = function (data) {
              self.getStoreList();
            }

            self.errorStore = function (data) {

            }

            self.setStore = function (store) {
              self.storeId = store.id;
              self.storeName = store.name;
            }

            self.updateStore = function () {
              var data = {
                id: self.storeId,
                name: self.storeName
              };

              var config = {
                  "onSuccess": self.successCRUDStore,
                  "onError": self.errorStore
              };
              storeService.updateStore(config, data);
            }

            self.deleteStore = function () {
              var data = {
                id: self.storeId,
                name: self.storeName
              };

              var config = {
                  "onSuccess": self.successCRUDStore,
                  "onError": self.errorStore
              };
              storeService.deleteStore(config, data);
            }

            self.getAddress = function () {
              debugger;
              return {
                countyList: self.countyList
              }
            }

            self.saveStore = function () {
              var data = {
                name: self.storeName
              };
              var config = {
                  "onSuccess": self.successCRUDStore,
                  "onError": self.errorStore
              };
              storeService.saveStore(config, data);
            }

            self.getStoreList = function () {
                var config = {
                    "onSuccess": self.successGetStore,
                    "onError": self.errorStore
                };
                storeService.getStoreList(config);

            };

            self.init = function () {
              self.getCountyList();
              self.getStoreList();
            }

            self.init();

        }
    ]);
