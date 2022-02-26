class restaurantManager{
    constructor(){
        this.restaurantList={}
    }
    printAllRestaurantNames(){
        var iterator = this.restaurantList.values();
        for (let elements of iterator) {
            console.log(elements);
          }
    }

    filterRestaurantByCity(city){
        var iterator = this.restaurantList.values();
        for (let elements of iterator) {
            if(elements.city==city){
                console.log(elements);
            }
        }
    }
}