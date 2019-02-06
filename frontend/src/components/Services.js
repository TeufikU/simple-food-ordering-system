    import axios from 'axios';

    //Arrow function to be used for making user registration
    export const register = newUser => {
        return axios
            .post('users/register', {
                fullname: newUser.fullname,
                email: newUser.email,
                password: newUser.password,
            })
            .then(res => {
                console.log('Registered!')
            })
    }

    //Function that is using for logging in user to dashboard and with using token for saving user data into local storage, so we know that specific user is logged in
    export const login = user => {
        return axios
            .post('users/login', {
                email: user.email,
                password: user.password
            })
            .then(res => {
                localStorage.setItem('usertoken', res.data)
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    //Function for inserting new restaurants in DataBase
    export const addRestaurant = newRestaurant => {
        return axios
            .post('restaurants/list', {
                name: newRestaurant.name,
                location: newRestaurant.location,
                workinghours: newRestaurant.workinghours,
            })
            .then(res => {
                console.log('Successfully added new restaurant to the list!')
            })
    }


    //Getting the restaurants list from DataBase
    export const getRestaurants = restaurant => {
        return axios
            .get('restaurants/list', {
                name: restaurant.name,
                location: restaurant.location,
                workinghours: restaurant.workinghours
            })
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    