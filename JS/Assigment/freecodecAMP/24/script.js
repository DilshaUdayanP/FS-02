function getData(prefix, url) {
    $.getJSON(url, function (data) {
        $.each(data, function (key, val) {
            $('.' + prefix + '-' + key.toLowerCase()).html(val);
        });
    });
}

// Gets BTC Price in 3 currencies 
setInterval(function () {
    getData('btc', 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,GBP')
}, 500);

// Gets ETH Price in 3 currencies
setInterval(function () {
    getData('eth', 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,GBP')
}, 500);

// Gets LTC Price in 3 currencies
setInterval(function () {
    getData('ltc', 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR,GBP')
}, 500);

// Gets ETC Price in 3 currencies
setInterval(function () {
    getData('etc', 'https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,EUR,GBP')
}, 500);

// Gets DOGE Price in 3 currencies
setInterval(function () {
    getData('doge', 'https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD,EUR,GBP')
}, 500);

// Gets XRP Price in 3 currencies
setInterval(function () {
    getData('xrp', 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,EUR,GBP')
}, 500);

// Gets dash Price in 3 currencies
setInterval(function () {
    getData('dash', 'https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=USD,EUR,GBP')
}, 500);

// Gets xmr Price in 3 currencies
setInterval(function () {
    getData('xmr', 'https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD,EUR,GBP')
}, 500);








$('.change-curr').on('click', function (e) {
    e.preventDefault();
    $('.active-curr').removeClass('active-curr');
    $(this).addClass('active-curr');
    if ($(this).hasClass('gbp-cur')) {
        $('body').removeClass().addClass('gbp');
    } else if ($(this).hasClass('eur-cur')) {
        $('body').removeClass().addClass('eur');
    } else if ($(this).hasClass('usd-cur')) {
        $('body').removeClass().addClass('usd');
    }
});

$(".delete-btn").on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().slideUp(200, function () {
        $(this).addClass('hidden');
    })
    var el = $(this).data('unit') + '-cur';
    $('.' + el).removeClass('active');
});


$('.swipe').on('click', function () {
    $(this).toggleClass('purge');
});


$('.language-select').click(function () {
    $(this).toggleClass('open');
});

$('.language-select li').click(function () {
    $('ul li').removeClass('active');
    $(this).toggleClass('active');
});

var ulheight = $('.curr-popup').height() - $('.curr-popup h3').height();


$('.close-popup').on('click', function () {
    $('.curr-popup').removeClass('show');
});

$('.add-curr').on('click', function () {
    $('.curr-popup').addClass('show');
    $('.curr-popup ul').css('height', ulheight - 35);
});


$('.curr-popup ul li').on('click', function () {
    $(this).toggleClass('active');
    var element = $(this).data("unit");
    $('.delete-btn[data-unit="' + element + '"]').parent().next().removeClass('purge');
    $('.delete-btn[data-unit="' + element + '"]').parent().parent().removeClass('hidden').show();
});
