$(function () {
    var tag = getUrlParam("tagid")
    var url = tag ? "/article?tagid=" + tag : "/article"

    $(".nav li").removeClass("active")
    if (tag) {
        $("#" + tag).addClass("active")
        var location = $(".active a").html();
        $("#location").html(location);
    } else {
        $("#shouye").addClass("active")
        $("#crumbs").css("display", "none")
    }

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            let html = ""
            for (let d of data) {
                html += '<div class=" articleList" style="margin-top:10px">'
                    + '<div class="listleft">'
                    + '<figure><a href="/article.html?uuid=' + d.uuid + '" title="' + d.title + '" target="_blank">'
                    + '<img src="' + (d.head_image ? d.head_image : '/images/gamersky_05origin_09_201512151535B64.jpg') + '" '
                    + '    class="img-responsive">'
                    + '</a></figure></div><div class="listcontent">'
                    + '  <h3><a href="/article.html?uuid=' + d.uuid + '" title="' + d.title + '" target="_blank">' + d.title + '</a></h3>'
                    + '  <p> ' + d.description
                    + '   <a href="/article.html?uuid=' + d.uuid + '" target="_blank" style="color: #759b08;padding-left:5px;">[详情]</a>'
                    + '</p>'
                    + '<p class="author">'
                    + '   <span class="f_l p_r5"><i style="color:#E6A6B1" class="fa fa-tag p_r5"></i><a href="/index.html?tagid=' + d.tagid + '">' + d.tag + '</a></span>'
                    + '  <span class="f_l p_r5"><i style="color:#42B7FF" class="fa fa-clock-o p_r5"></i>' + formatDateTime(d.created, "yyyy-MM-dd HH:mm:ss") + '</span>'
                    + '   <span class="f_r p_r10" >'
                    + '         <i style="color:#FF436C" class="fa fa-thumbs-up p_r5"></i>' + d.clickgoodnum + ''
                    + '       </span>'
                    + '   <span class="viewnum f_r p_r10" ><i style="color:#9DB1B8" class="fa fa-eye p_r5"></i>' + d.originalviews + '</span>'
                    + '   <span class="pingl f_r p_r10">'
                    + '              <span><i style="color:#42B7FF" class="fa fa-comment p_r5"></i>' + d.commentnum + '</span>'
                    + '   </span>'
                    + '</p>'
                    + '</div>'
                    + '</div>'
            }
            html += '</div>'
            $("#articles").html(html)
        }
    });
})


