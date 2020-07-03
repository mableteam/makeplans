# Node Wrapper for Makeplans API

See [Makeplans API](https://github.com/makeplans/makeplans-api) for detailed documentation

## Installation

```
npm install makeplans --save
```

## Usage

```
var Makeplans = require('makeplans');

var mp = new Makeplans(MAKEPLANS_API_KEY, MAKEPLANS_ACCOUNT_NAME);

mp.getResources().then(function(resources){
    console.log(resources);
});
```

## Methods

- [Constructor](#constructor)
- [Resources](#resources)
- [Providers](#providers)
- [Categories](#categories)
- [Users](#users)
- [Slots](#slots)
- [Bookings](#bookings)
- [People](#people)
- [Services](#services)
- [Events](#events)

## Constructor

### Makeplans( apiKey, accountName, test? )

_apiKey {string}_ - your Makeplans API key

_accountName {string}_ - your Makeplans account name

_test {boolean} (optional)_ - Uses test server if true

---

## Resources

### makeplans.getResources( id? )

_id {string} (optional)_ - resource id

---

### makeplans.getResourceOpeningHours( id, params )

_id {string}_ - resource id

_params { from:'YYYY-MM-DD', to:'YYYY-MM-DD'}_ - date boundries

---

### makeplans.createResource( params )

_title {string}_ - name of calendar

_opening_hours_mon Array<"HH:MM">_ - Default opening hours for Monday

_opening_hours_xxx Array<"HH:MM">_ - Default opening hours for XXX

---

### makeplans.updateResource( id, params )

_id {string}_ - resource id

_params {object}_

---

### makeplans.deleteResource( id )

_id {string}_ - resource id

---

### makeplans.getResourceExceptionDates( id, date?, params )

_id {string}_ - resource id

_date {string} "YYYY-MM-DD" (optional)_ - date to check

_params {from, to}_ - date boundries

---

### makeplans.createResourceExceptionDate( id, date, openingHours )

### .updateResourceExceptionDate( id, date, openingHours )

_id {string}_ - resource id

_date {string} "YYYY-MM-DD"_ - date to create/update

_openingHours Array<opening_hours>_ - opening hours for that date

---

### makeplans.deleteResourceExceptionDate( id, date )

_id {string}_ - resource id

_date {string} "YYYY-MM-DD"_ - date to delete

---

## Providers

### makeplans.getProviders()

---

### makeplans.createProvider( resourceId, serviceId )

_resourceId {number}_ - resource providing service

_serviceId {number}_ - service being provided

---

### makeplans.updateProvider( providerId, resourceId, serviceId )

_providerId {number}_

_resourceId {number}_

_serviceId {number}_

---

### makeplans.deleteProvider( providerId )

_providerId {number}_

---

## Categories

### makeplans.getCategories()

---

### makeplans.createCategory( params )

_title {string}_ - Category name

_parent_id {string|null}_ - id of parent category for nesting

_service_id_list {Array<service_id>}_ - services in category

---

### makeplans.updateCategory( categoryId, params )

_categoryId {number}_ - category id

_params {object}_ - as above

---

### makeplans.deleteCategory( categoryId )

_categoryId {number}_ - category to delete

## Users

### makeplans.getUsers()

### makeplans.createUsers(name, email)

this endpoint doesn't seem to work

---

## Slots

### makeplans.getAvailableSlots( serviceId, params)

_serviceId {number}_ - service to check

_params {from, to, selected_resources, only_free}_ - querystring options

---

### makeplans.getNextAvailableDate( serviceId, params )

_serviceId {number}_ - service to check

_params {from, selected_resources}_ - querystring options

---

## Bookings

### makeplans.getBookings( params? )

### makeplans.getRecentBookings( params? )

## makeplans.getUpcomingBookings( params? )

## makeplans.getAgenda( params? )

## makeplans.getUnconfirmedBookings( params? )

## makeplans.getAllBookings( params? )

_service_id {number}_ - service to check
_event_id {number}_ - or event to check
_resource_id {number} - resource
\_external_id {string}
\_start {DateTime}_ - booked*from after param
\_end {DateTime}* - booked*to before param
\_since {DateTime}* - updated*at after param
\_collection_id {UUID}*

---

### makeplans.createBooking( params )

---

### createRecurringBooking( params )

---

### getOccurences( collectionId )

_collectionId {number}_ - id of reccurring event

---

### verifyBooking( bookingId )

### confirmBooking( bookingId )

### declineBooking( bookingId )

### cancelBooking( bookingId )

### updateBooking( bookingId, params )

### deleteBooking( bookingId, params )

---

## People

## Services

## Events
