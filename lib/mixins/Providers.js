
function getProviders(){
    return this._get('providers');
}

function createProvider(resourceId, serviceId){
    return this._post('providers', {provider:{
        resource_id: resourceId,
        service_id: serviceId
    }});
}

function updateProvider(providerId, resourceId, serviceId){
    return this._post('providers/' + providerId, {provider:{
        resource_id: resourceId,
        service_id: serviceId
    }});
}

function deleteProvider(providerId){
    return this._delete('providers/' + providerId);
}

module.exports = {
    getProviders: getProviders,
    createProvider: createProvider,
    updateProvider: updateProvider,
    deleteProvider: deleteProvider
};