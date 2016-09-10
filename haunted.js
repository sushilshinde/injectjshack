(function () {
    var cp = function () {
        //$('input[type=text], textarea,button,checkbox').addClass('animated infinite hinge');
        // $('input[type=text], textarea,button,checkbox,select').on('focusout', function () {
        //$(this).addClass('animated hinge');
        //})

        $('input[type=text], textarea,button,checkbox,select').on('focus', function () {
            var that = this;
            $(that).addClass('hvr-buzz-out');
            setTimeout(function () {
                $(that).removeClass('hvr-buzz-out');
                $(that).addClass('animated hinge');
            }, 500)
        })

        $('td').on('click', function () {
            $(this).addClass('animated  hinge');
        })

        $('tr').on('dblclick', function (e) {
            e.stopPropagation();
            $(this).addClass('animated  hinge');

        })

        $('div').on('dblclick', function (e) {
            $(this).addClass('animated  hinge');
        })
    }

    var inject = function (filename, filetype) {
        if (filetype === "js") { //if filename is a external JavaScript file
            var fileref = document.createElement('script')
            fileref.setAttribute("type", "text/javascript")
            fileref.setAttribute("src", filename)
            fileref.onload = cp;
        } else if (filetype == "css") { //if filename is an external CSS file
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    }
    inject("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css", "css")
    inject("https://cdn.rawgit.com/sushilshinde/Hover/master/css/hover-min.css", "css")
    inject("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js", "js")
})();
