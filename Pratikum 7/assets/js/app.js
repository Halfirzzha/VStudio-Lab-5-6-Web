$(document).ready(function() {
    // Toggle efek slide pada kotak
    $("#toggleBtn").click(function() {
        $("#box").slideToggle();
    });

    // Event animasi dengan mouseenter dan mouseleave
    $("#box").mouseenter(function() {
        $(this).animate({ width: "300px", height: "300px" }, "fast");
    }).mouseleave(function() {
        $(this).animate({ width: "200px", height: "200px" }, "fast");
    });

    // Menambahkan event klik untuk menyembunyikan kotak
    $("#box").click(function() {
        $(this).hide();
    });
});
