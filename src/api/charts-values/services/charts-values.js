'use strict';

/**
 * charts-values service
 */


module.exports = {
    chartValues: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::sensorvalue.sensorvalue",
          {
            filters: {
                sensor: {
                    id: 5,
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
              value: item.value || "",
              name: new Date(item.date) || "",
            });
            return acc;
          }, []);
        }

        let tempSensor = {
            name: "Temperatur",
            series: entriesReduced
        }

        let arr = [];
        arr.push(tempSensor)
  
        // return the reduced data
        return arr;
      } catch (err) {
        return err;
      }
    },
  };