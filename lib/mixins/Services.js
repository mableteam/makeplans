

function getServices(){
    return this._get('services');
}

function createService(params){
    return this._post('services', {service:params});
}

function updateService(serviceId, params){
    return this._put('services/' + serviceId, {service:params});
}

function deleteService(serviceId){
    return this._delete('services/' + serviceId);
}

module.exports = {
    getServices: getServices,
    createService: createService,
    updateService: updateService,
    deleteService: deleteService
};