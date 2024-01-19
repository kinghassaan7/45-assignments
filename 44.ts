function orderSandwich(...items: string[]): void {
    console.log("Order Summary:");
    if (items.length === 0) {
        console.log("You didn't select any items for your sandwich.");
    } else {
        console.log("Sandwich with the following items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("\n");
}

orderSandwich("Turkey", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese");
orderSandwich("Chicken", "Bacon", "Avocado", "Mayo");
