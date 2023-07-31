module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/charts-values',
     handler: 'charts-values.chartValues',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
