$(document).ready(function () {

    // Toggle navigation menu
    $(".menu-toggle").click(function () {

        $(".navigation").toggleClass("show");

    });


    // Print resume or save as PDF
    $("#print-resume").click(function () {

        window.print();

    });


    // Print Bio-data or save as PDF
    $("#print-biodata").click(function () {

        window.print();

    });

});