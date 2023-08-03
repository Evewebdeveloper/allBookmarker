var siteName = document.getElementById('bookmarkName')
var bookmarkURL = document.getElementById('bookmarkURL')
var submitBtn = document.getElementById('submitBtn')

var allBookmarks = []

if(localStorage.getItem('bookmarks') != null)
{
    allBookmarks=JSON.parse(localStorage.getItem('bookmarks') );
    displayBookmarks();
}
var urlRegex =   /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

function urlValid() {
    if (urlRegex.test(bookmarkURL.value)) {
        return true;
    } else {
        return false;
    }
}

var nameRegex = /^[a-z]{3,8}$/
function nameValid() {
    if (nameRegex.test(siteName.value)) {
        return true;
    } else {
        return false;
    }
}
// Add (creat) El Bookmarks
submitBtn.onclick = function addBookmark() {

    var bookmarks = {
        name: siteName.value,
        url: bookmarkURL.value
    }
    debugger;
    if (nameValid() && urlValid()) {
        allBookmarks.push(bookmarks)
        localStorage.setItem('bookmarks', JSON.stringify(allBookmarks))
        clearData()
        displayBookmarks()
    }

    else {
        alert('Data Is Wrong')
        // clearData()
        // displayBookmarks()
    }

}




//  display(read) el product

function displayBookmarks() {

    var cartona = ''
    for (var i = 0; i < allBookmarks.length; i++) {
        cartona = cartona + `
    <tr>
    
    <td>${i}</td>
    <td>${allBookmarks[i].name}</td>
    <td> <a href="${allBookmarks[i].url}">Visit</button></a></td>
    <td><button onclick="deleteBookmarks(${i})" class="btn btn-danger">Delete</button></td>
    </tr>
    `
    }
    document.getElementById('tableContent').innerHTML = cartona
}


// delete el bookmark
function deleteBookmarks(index) {
    allBookmarks.splice(index, 1)

    displayBookmarks()
    localStorage.setItem('bookmarks', JSON.stringify(allBookmarks))

}

// clear el bookmark
function clearData() {
    siteName.value = ''
    bookmarkURL.value = ''

}

// validation the url

// function validateWebsites() {
//     var regex =
//         '^([a-zA-Z]+:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$' // fragment locator
//     'i'
//     console.log(regex.test(bookmarkURL.value));
//     return regex.test(bookmarkURL.value);
// }