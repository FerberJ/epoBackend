module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/gauge-value',
     handler: 'gauge-value.gaugeValue',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
