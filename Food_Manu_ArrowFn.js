const printMenu = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Monday's Menu: Puri-basundi");
            break;
        case 'tuesday':
            console.log("Tuesday's Menu:Vada-Pav");
            break;
        case 'wednesday':
            console.log("Wednesday's Menu: Chicken-dish");
            break;
        case 'thursday':
            console.log("Thursday's Menu: Puran-Poli");
            break;
        case 'friday':
            console.log("Friday's Menu: Eggs-Fry");
            break;
        case 'saturday':
            console.log("Saturday's Menu: Pav-Baji");
            break;
        case 'sunday':
            console.log("Sunday's Menu: Fish-Dish");
            break;
        default:
            console.log("Invalid day!");
    }
};

// Example usage:
printMenu('monday'); // Output: Monday's Menu: Pasta
