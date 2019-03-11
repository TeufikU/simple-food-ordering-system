import jwt_decode from 'jwt-decode'
import {removeOrder} from '../components/Services'

    /**
        Converting date from default format to this format eg. 03.03.2019
        This funsction is used for storing data to MongoDB for which is needed a todays date
    */
    export function todaysDate(){
        const todaysDate=new Date();
        const formatDate=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(todaysDate);
        return formatDate.replace(/\//g,'.')
    }

    /**
        Function for retrieving data from MongoDB for restaurants and orders.
        Returning an array with only restaurants that have any orders
    */
    export function isRestaurantOpenedAndPopulated(restaurants, ordersList){
        const openedRestaurants = restaurants.filter(({name: name1}) => ordersList.some(({restaurantName: name2}) => name1 === name2));
        return openedRestaurants
}

    /**
        This function is telling us is current user actually logged in
    */
    export function isUserLoggedIn(props,token){
            if(localStorage.getItem(token)!==null){
                props.history.push('/dashboard')
    }
    }

    /*
        Function for saving user data to local storage. 
        So we know at any time that user is loggen in
    */
    export function registerUserInBrowser(token){
        if(localStorage.getItem(token)!==null){
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            return ({user:{
                id: decoded._id,
                fullname: decoded.fullname,
                email: decoded.email,
                } 
            })
        }
    }

    /**
        Function for modifying array for adding new restaurant that needs to be opened in restaurants panel on right page side
    */
    export function createFoodOrder(openedRestaurants,e){
        if(!openedRestaurants.some( vendor => vendor._id === e._id )){
            openedRestaurants.unshift({...e, isOpened:true})
            this.forceUpdate();
        }
    }

    /*
        Function for removing desired restaurant from restaurants panel from right side of our page
    */
    export function removePanel(data,openedRestaurants){
        data.props.openedRestaurants.splice(data.props.openedRestaurants.indexOf(openedRestaurants),1)
        data.forceUpdate();
    }

    /**
         Function for deleting specific order for specific restaurant from our MongoDb
    */
    export function deleteOrder(orderID){
        removeOrder(orderID)
        const idToRemove=this.props.ordersList.filter(({_id: ID}) => ID === orderID);
        this.props.ordersList.splice(this.props.ordersList.indexOf(idToRemove),1)
        console.log(idToRemove)
        this.forceUpdate();
    }