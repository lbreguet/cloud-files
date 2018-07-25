function listDates(specialDay, currentDate, month, user, bMonth) {
    for (var i = 0; i < months.length; i++) {
        if ( month === months[i][1]) {
            $('.month').text(months[i][0]);
        }
    }

    var date = new Date();
    date = date.getMonth() + 1;

    if ((($('.prev').data('clicked') || $('.next').data('clicked')) || $('.month').data('clicked')) || currentMonth === date) {
        if (specialDay >= currentDate && bMonth === month && specialDay !== "NaN-NaN") {
            $('#container').append("<div class='list'>"+
                "<img src='" + user.PictureUrl + "'><br>" +
                "<h4>" + user.DisplayName + "</h4><br>" +
                "<h5>" + user.Title + "</h5><br>" +
                "<h6 class='subtitle'></h6>" +
                "<h6 class='special-day'>" + specialDay + "</h6><br></div>")
        } else if (bMonth === month && specialDay !== "NaN-NaN") {
            $('#container').append("<div class='list'>"+
                "<img src='" + user.PictureUrl + "'><br>" +
                "<h4>" + user.DisplayName + "</h4><br>" +
                "<h5>" + user.Title + "</h5><br>" +
                "<h6 class='subtitle'></h6>" +
                "<h6 class='special-day'>" + specialDay + "</h6><br></div>")
        }
    }
    if (uspType === "SPS-Birthday") {
        $('.subtitle').text("Birthday:")
    } else if (uspType === "SPS-HireDate") {
        $('.subtitle').text("Start Date:")
    }
}









function listDates(specialDay, currentDate, month, user, bMonth) {
    if (user.PictureUrl != null) {
        var pictureUrl = user.PictureUrl.replace(":443", "");
    }
    for (var j = 0; j < months.length; j++) {
        if ( month === months[j][1]) {
            $('.month').text(months[j][0]);
        }
    }

    var date = new Date();
    date = date.getMonth() + 1;

    if ((($('.prev').data('clicked') || $('.next').data('clicked')) || $('.month').data('clicked')) && currentMonth === date) {
        if (specialDay >= currentDate && bMonth == month && specialDay != "NaN-NaN") {
            $('#container').append("<div class='list'>"+
                "<img src='" + pictureUrl + "'><br>" +
                "<h4>" + user.DisplayName + "</h4><br>" +
                "<h5>" + user.Title + "</h5><br>" +
                "<h6 class='subtitle'></h6>" +
                "<h6 class='special-day'>" + specialDay + "</h6><br></div>")
        }
    } else if (($('.prev').data('clicked') || $('.next').data('clicked')) || $('.month').data('clicked')) {
        if (bMonth == month && specialDay != "NaN-NaN") {
            $('#container').append("<div class='list'>"+
                "<img src='" + pictureUrl + "'><br>" +
                "<h4>" + user.DisplayName + "</h4><br>" +
                "<h5>" + user.Title + "</h5><br>" +
                "<h6 class='subtitle'></h6>" +
                "<h6 class='special-day'>" + specialDay + "</h6><br></div>")
        }
    } else {
        if (specialDay >= currentDate && bMonth == month && specialDay != "NaN-NaN") {
	        $('#container').append("<div class='list'>"+
	            "<img src='" + pictureUrl + "'><br>" +
	            "<h4>" + user.DisplayName + "</h4><br>" +
	            "<h5>" + user.Title + "</h5><br>" +
	            "<h6 class='subtitle'></h6>" +
	            "<h6 class='special-day'>" + specialDay + "</h6><br></div>")
        }
    }
    if (uspType === "SPS-Birthday") {
        $('.subtitle').text("Birthday:")
    } else if (uspType === "SPS-HireDate") {
        $('.subtitle').text("Start Date:")
    }
}
