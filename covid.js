fetch('https://corona.lmao.ninja/v2/countries/Brazil')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("country").innerHTML = data.country;
        if (data.country) {
            document.getElementById("country").innerHTML = "Brasil";
        }
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("death").innerHTML = data.deaths.toLocaleString();
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
        document.getElementById("tests").innerHTML = data.tests.toLocaleString();
        document.getElementById("flag").src = data.countryInfo.flag;
    });
/* get date */
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.getElementById("date").innerHTML = today;

/* scrollspy */
$(function() {

    var link = $('#navbar a.dot');

    // Move to specific section when click on menu link
    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function() {
        scrNav();
    });

    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                link.removeClass('active');
                $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    }
    scrNav();
});