(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    let lastScrollTop = 0;
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }

        // Show navbar when scrolling down on mobile
        if ($(window).width() < 992) {
            if (scrollTop > lastScrollTop) {
                $('.navbar').fadeOut(); // Hide on scroll down
            } else {
                $('.navbar').fadeIn(); // Show on scroll up
            }
        }
        lastScrollTop = scrollTop;
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let target = document.querySelector(this.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth",
                });
            }

            // Update active link
            $(".navbar-nav .active").removeClass("active");
            $(this).closest("a").addClass("active");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);
