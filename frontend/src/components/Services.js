    import axios from 'axios';
 

    /*Arrow function to be used for making user registration*/
    export const register = newUser => {
        return axios
            .post('users/register', {
                fullname: newUser.fullname,
                email: newUser.email,
                password: newUser.password,
            })
            .then(res => {
                return res.data
            }).catch(err=>{
                return err
            })
    }

    /*Function that is using for logging in user to dashboard and with using token for saving user data into local storage, so we know that specific user is logged in*/
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
                return err
            })
    }

    /*Function for inserting new restaurants in DataBase*/
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


    /*Getting the restaurants list from DataBase*/
    export const getRestaurants = restaurant => {
        return axios
            .get('restaurants/list', {
                name: restaurant.name,
                location: restaurant.location,
                workinghours: restaurant.workinghours,
            })
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    /*Saving order food data to MongoDb */
    export const orderFood = newOrder => {
        return axios
            .post('/orders', {
                user: newOrder.user,
                restaurantName: newOrder.restaurantName,
                foodName: newOrder.foodName,
                orderDate: newOrder.orderDate,
            })
            .then(res => {
                console.log('Successfully added new order for specific restaurant!')
                return res
            })
    }

    /*
        Getting orders data from database
    */
    export function getOrderList (date) {
        return axios.get('orders/'+date)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    /*
        Function for deleting orders from database by specific ID
    */
    export function removeOrder (orderID) {
        return axios.delete('orders/delete/'+orderID)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    }

