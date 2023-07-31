'use strict';

/**
 * charts-values service
 */


module.exports = {
    gaugeValue: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::sensorvalue.sensorvalue",
          {
            sort: {id: 'desc'},
            limit: 1,
            filters: {
                sensor: {
                    id: 2,
                }
            },
            fields: ["value", "date"],
          }
        );


        //const filteredEntries = entries;//.filter((entry) => entry.sensor.id == 2);

  
        // reduce the data to the format we want to return
        let entriesReduced;
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            acc = acc || [];
            acc.push({
                name: "Strömung",
                value: item.value || "",
                date: item.date || "",
            });
            return acc;
          }, []);
        }

        let arr = [];
        arr.push(entriesReduced)
  
        // return the reduced data
        return entriesReduced;
      } catch (err) {
        return err;
      }
    },
  };