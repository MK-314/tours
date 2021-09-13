$(document).on('click', 'a#discouverBtnID', function() {
    $.get("https://rubymichaelkashkov.herokuapp.com/api/travelpages")
        .done(function(res) {
            let counter = 1;
            res.data.forEach(tour => {
                $(`#card${counter}ID ul li:nth-of-type(1) span`).text(`${tour.days}`)
                $(`#card${counter}ID ul li:nth-of-type(2) span`).text(`${tour.people}`)
                $(`#card${counter}ID ul li:nth-of-type(3) span`).text(`${tour.guides}`)
                $(`#card${counter}ID ul li:nth-of-type(4) span`).text(`${tour.sleep_in}`)
                $(`#card${counter}ID ul li:nth-of-type(5) span`).text(`${tour.difficulty}`)
                counter++;
            });
        })
        .fail(function() {
            alert("error");
        })
    return false
});