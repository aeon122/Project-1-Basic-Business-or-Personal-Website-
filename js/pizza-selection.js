    document.addEventListener("DOMContentLoaded", function () {
        const pizzaCards = document.querySelectorAll(".pizza-card");
        const pizzaFormSection = document.querySelector("#customization-your-pizza");
        const pizzaRadios = document.querySelectorAll("input[name='pizza']");

        pizzaCards.forEach(card => {
            card.addEventListener("click", function () {
                const selectedPizza = this.getAttribute("data-pizza");

                // Highlight the selected card
                pizzaCards.forEach(c => c.classList.remove("selected"));
                this.classList.add("selected");

                // Scroll to the customization section
                pizzaFormSection.scrollIntoView({ behavior: "smooth" });

                // Select the corresponding radio button
                pizzaRadios.forEach(radio => {
                    if (radio.value === selectedPizza) {
                        radio.checked = true;
                    }
                });
            });
        });
    });