
    export function todaysDate(){
        const todaysDate=new Date();
        const formatDate=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(todaysDate);
        return formatDate.replace(/\//g,'.')
    }

    export function isRestaurantOpenedAndPopulated(props){
        const determineIsOpened = props.restaurants.filter(({name: name1}) => props.ordersList.some(({restaurantName: name2}) => name1 === name2));
        determineIsOpened.map(itms=>{
        itms.isOpened=true
        })
   
        const finalRestaurantsList = props.restaurants.filter(({
            name: name1,
            isOpened
        }) => {
        if (isOpened)
            return props.ordersList.filter(
        ({
          ordersName: name2
        }) => name1 === name2
        )
        }
    )
    return finalRestaurantsList
}