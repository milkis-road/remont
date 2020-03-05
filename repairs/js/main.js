$('.container').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.left-earphone').css(
        'transform',
        'translate(-' + x * 60 + 'px, -' + y * 50 + 'px)'
    );

    $('.smartphone').css(
        'transform',
        'translate(' + x * 30 + 'px, ' + y * 20 + 'px)'
    );
    
    $('.right-earphone').css(
        'transform',
        'translate(-' + x * 40 + 'px, ' + y * 40 + 'px)'
    );
});




