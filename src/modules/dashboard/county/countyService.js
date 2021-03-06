angular.module("store.county").service("countyService",
    ["storeApi",
        function (storeApi) {

            var self = this;

            self.updateCounty = function (config, data) {
              var request = {
                  name : "store",
                  method: "POST",
                  url: "/secure/county",//TODO collect urls to constants
                  data: data
              };

              storeApi.makeRequest(request, config);
            }

            self.deleteCounty = function (config, data) {
              var request = {
                  name : "store",
                  method: "DELETE",
                  url: "/secure/county",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.saveCounty = function (config, data) {
              var request = {
                  name : "store",
                  method: "PUT",
                  url: "/secure/county",//TODO collect urls to constants
                  data: data
              };
              storeApi.makeRequest(request, config);
            }

            self.getCountyList = function (config) {
                var request = {
                    name : "store",
                    method: "GET",
                    url: "/secure/county",//TODO collect urls to constants
                };
                return storeApi.makeRequest(request, config);
            };
          }

    ]);
