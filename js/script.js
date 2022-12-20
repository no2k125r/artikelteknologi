function searchProduct() {
        // DOM
        const input = document.getElementById('filter').value.toUpperCase();
        // console.log(input);

        const cardContainer = document.getElementById('card-lists');
        console.log(cardContainer);

        const cards = cardContainer.getElementsByClassName('card');
        console.log(cards);

        for (let i = 0; i < cards.length; i++) {
                let title = cards[i].querySelector(".product-details h4.card-title");
                console.log(title);

                if (title.innerText.toUpperCase().indexOf(input) > -1) {
                        cards[i].style.display = "";
                } else {
                        cards[i].style.display = "none";
                }
        }
}


// PAGINATION
/* clicking next button */
$('.card-tabs a.nxt').each(function () {
        $(this).click(function () {
                $('.card.cardcurr').each(function () {
                        if ($(".card:visible").next().length != 0) {
                                $('.card.cardcurr').next('.card').addClass('cardcurr');
                                $(this).removeClass('cardcurr');
                        } else { $(".card:first").addClass('cardcurr'); $(".card:last").removeClass('cardcurr'); }
                });
        });
});
