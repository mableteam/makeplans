var Makeplans = require('../lib');

var MAKEPLANS_ACCOUNT_NAME = process.env.MAKEPLANS_ACCOUNT_NAME;
var MAKEPLANS_API_KEY = process.env.MAKEPLANS_API_KEY;

var mp = new Makeplans(MAKEPLANS_API_KEY, MAKEPLANS_ACCOUNT_NAME, true);


function exec(fn){
   fn().then(function(result){
      console.log(result);
   }).catch(function(error){
      console.error(error);
   });
}

// mp.getResources(457)
//    .then(function(resources){
//       console.log(resources);
//    })
//    .catch(function(error){
//       console.log(error);
//    });

// mp.getResourceOpeningHours(457, 
//    {from:'2015-08-01', to: '2015-08-03'})
//    .then(function(resources){
//       console.log(resources);
//    })
//    .catch(function(error){
//       console.log(error);
//    });

// exec(function(){
//    return mp.createResources({
//       title: 'test',
//       opening_hours_mon: ["9:00", "17:00"],
//       opening_hours_tue: ["9:00", "17:00"],
//       opening_hours_wed: ["9:00", "17:00"],
//       opening_hours_thu: ["9:00", "17:00"],
//       opening_hours_fri: ["9:00", "17:00"],
//       opening_hours_sat: ["9:00", "12:00"],
//       opening_hours_sun: null
//    });
// });

// exec(function(){
//    return mp.updateResources(458, {
//       opening_hours_mon: ["9:30", "17:00"],
//       opening_hours_tue: ["9:00", "17:00"],
//       opening_hours_wed: ["9:00", "17:00"],
//       opening_hours_thu: ["9:00", "17:00"],
//       opening_hours_fri: ["9:00", "17:00"],
//       opening_hours_sat: ["9:00", "12:00"],
//       opening_hours_sun: null
//    });
// });

// exec(function(){
//    return mp.deleteResources(458);
// });

// exec(function(){
//    return mp.getResourcesExceptionDates(457);
// });

// exec(function(){
//    return mp.createResourcesExceptionDate(457, '2015-07-29', null)
// })

// exec(function(){
//    return mp.deleteResourcesExceptionDate(457, '2015-07-29');
// });

// exec(function(){
//    return mp.getProviders();
// });

// exec(function(){
//    return mp.getCategories();
// });

// exec(function(){
//    return mp.getUsers();
// });

// exec(function(){
//    return mp.createUser('Bobby Brown', 'something@something.com');
// });

// exec(function(){
//    return mp.getAvailableSlots(383, {to:'2015-08-01'});
// });

// exec(function(){
//    return mp.getNextAvailableDate(383);
// });