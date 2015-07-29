'use strict';

function getCategories(){
    return this._get('categories');
}

function createCategory(params){
    return this._post('categories', {
        category:params
    });
}

function updateCategory(id, params){
    return this._put('categories/' + id, {
        category:params
    });
}

function deleteCategory(id){
    return this._delete('categories/' + id);
}

module.exports = {
    getCategories: getCategories,
    createCategory: createCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory
};