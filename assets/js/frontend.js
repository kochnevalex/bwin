$(document).ready(function () {

    // //** Выборка из xml
    // var gamelist = $('gameslist event'),
    //     name = gamelist.attr('name'),
    //     eventdate = gamelist.attr('eventdate'),
    //     eventlink = gamelist.attr('eventlink');
    //
    // console.log(gamelist);
    // console.log(name);
    // console.log(eventdate);
    // console.log(eventlink);
    //
    // var games = $('gameslist games'),
    //     gamesName = games.attr('name');
    //
    // var results = $('gameslist games results '),
    //     allresults = $('results '),
    //     resultsName = results.attr('name'),
    //     resultsOdd = results.attr('odd'),
    //     resultsLink = results.attr('placebetlink');
    // jQuery.each(results, function (i) {
    //     $(allresults[i]).append('</results>');
    // });
    // console.log(results);
    // console.log(resultsName);
    // console.log(resultsOdd);
    // console.log(resultsLink);
    //
    // jQuery.each(games, function (i) {
    //
    //     gamesName = $(games[i]).attr('name');
    //     var res = $(games[i]).find(results);
    //
    //     console.log($(res));
        // console.log($(games[i]));
        // var results = $(games[i]);

        // jQuery.each(results, function (j) {
        //     // results[j] = $('gameslist[i] games results ');
        //     resultsName = $(results[j]).attr('name');
        //     resultsOdd = results[j].attr('odd');
        //     resultsLink = results[j].attr('placebetlink');
        //     console.log(resultsNmae);
        // });

    //     console.log(gamesName);
    //     var tabs = document.createElement('div'),
    //         txt = document.createTextNode(gamesName);
    //     tabs.appendChild(txt);
    //     document.body.appendChild(tabs);
    // });
    // console.log(games);
    // console.log(gamesName);


    $('.left-lighter').stop().animate({opacity: 1}, 1000);
    $('.right-lighter').stop().animate({opacity: 1}, 1000);
    $('.main').stop().animate({opacity: 1}, 3000);
    $('.bwin-logo').show(1500);


    var bg = $('.bg-image');

    if (bg.length) {
        bg.each(function () {
            var $node = $(this);
            var imgUrl = $node.data('bgimage');
            $node.css({
                backgroundImage: "url('" + imgUrl + "')"
            });
        });

    }

});


