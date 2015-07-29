function getUsers(){
    return this._get('users');
}

function createUser(name, email){
    return this._post('users', {
        user: {name: name, email:email}
    });
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser
};