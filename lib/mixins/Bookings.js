'use strict';

var qs = require('querystring');

function getBookings(params){
    return _get.call(this, 'bookings/', params);
}

function getBooking(id, params){
    return _get.call(this, 'bookings/' + id, params);
}


function getRecentBookings(params){
    return _get.call(this, 'bookings/recent', params);
}

function getUpcomingBookings(params){
    return _get.call(this, 'bookings/upcoming', params);
}

function getAgenda(params){
    return _get.call(this, 'bookings/agenda', params);
}

function getUnconfirmedBookings(params){
    return _get.call(this, 'bookings/unconfirmed', params);
}

function getAllBookings(params){
    return _get.call(this, 'bookings/all', params);
}

function createBooking(params){
    return this._post('bookings', {booking:params});
}

function createRecurringBooking(bookingParams, params){
    return this._post('bookings/recurring', {booking: bookingParams, recurring: params});
}

function getOccurences(collectionId){
    return this._get('bookings/recurring/' + collectionId);
}

function verifyBooking(bookingId){
    return _modify.call(this, 'verify', bookingId);
}

function confirmBooking(bookingId){
    return _modify.call(this, 'confirm', bookingId);
}

function declineBooking(bookingId){
    return _modify.call(this, 'decline', bookingId);
}

function cancelBooking(bookingId){
    return _modify.call(this, 'cancel', bookingId);
}

function updateBooking(bookingId, params){
    return this._put('/bookings/' + bookingId, {booking: params});
}

function deleteBooking(bookingId, params){
    return this._delete('/bookings/' + bookingId);
}


function _get(path, params){
    params = params || {};
    path += '?' +qs.stringify(params);
    return this._get(path);
}

function _modify(action, bookingId){
    return this._put('bookings/' + bookingId + '/' + action);
}

module.exports = {
    getBookings: getBookings,
    getBooking: getBooking,
    getRecentBookings: getRecentBookings,
    getUpcomingBookings: getUpcomingBookings,
    getAgenda: getAgenda,
    getUnconfirmedBookings: getUnconfirmedBookings,
    getAllBookings: getAllBookings,
    createBooking: createBooking,
    createRecurringBooking: createRecurringBooking,
    getOccurences: getOccurences,
    verifyBooking: verifyBooking,
    confirmBooking: confirmBooking,
    declineBooking: declineBooking,
    cancelBooking: cancelBooking,
    updateBooking: updateBooking,
    deleteBooking: deleteBooking
};