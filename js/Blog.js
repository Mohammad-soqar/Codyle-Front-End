$(document).ready(function () {
    var maxLength = 45;
    $(".show-read-more").each(function () {
        var myStr = $(this).text();
        if ($.trim(myStr).length > maxLength) {
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <span href="javascript:void(0);" class="read-more">...</span>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function () {
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
});

const searchInput = document.getElementById('search-input');
const blogList = document.getElementById('blog-list');

searchInput.addEventListener('keyup', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const blogItems = blogList.querySelectorAll('li');

    blogItems.forEach(function(item) {
        const title = item.innerText.toLowerCase();

        if (title.indexOf(searchTerm) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});