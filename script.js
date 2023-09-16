document.addEventListener("DOMContentLoaded", function () {
    // Define the chocolate prices
    const chocolatePrices = {
        "chocolate1-quantity": 2.00,
        "chocolate2-quantity": 2.50,
        // Add more chocolates and their prices here
    };

    // Get all input elements
    const chocolateInputs = document.querySelectorAll("input");

    // Add event listeners to the input elements
    chocolateInputs.forEach(input => {
        input.addEventListener("input", updateTotalPrice);
    });

    // Function to update the total price
    function updateTotalPrice() {
        let totalPrice = 0;
        chocolateInputs.forEach(input => {
            const chocolateId = input.id;
            const quantity = parseInt(input.value) || 0;
            const price = chocolatePrices[chocolateId] || 0;
            totalPrice += quantity * price;
        });

        // Display the total price with two decimal places
        document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
    }
});
