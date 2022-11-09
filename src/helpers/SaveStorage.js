export const SaveStorage = (key, item) => {

    //getELement
    let items = JSON.parse(localStorage.getItem(key));

    //console.log(items);
    
    //isArray 
    if(Array.isArray(items)) {
        // add element
        items.push(item);    
    }else{
        // create array new movie
        items = [item];
    }

    //saveLocalStorage
    localStorage.setItem(key, JSON.stringify(items));

    //return objet
    return item;
}
