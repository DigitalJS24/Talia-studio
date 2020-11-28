const login = "admin";
const pass = "123";
$('#modalLoginSubmit').on("click", function(event) {
    event.preventDefault();

    if ($('#modalLoginName').val() == login & ($('#modalLoginPass')).val() == pass) {
        $('.admin-content').addClass('modal-active-admin');
        $('.modal-login').addClass('modal-passive-admin');
    } else {
        alert('Wrong');
    }
});
$('.remove-all').on("click", function(event) {
    event.preventDefault();
    DeleteUser()

})
if ($(".admin-content").length) {
    GetUsers();
}

// GET ALL POST
function GetUsers() {
    $.ajax({
        url: "/api/admin",
        type: "GET",
        contentType: "application/json",
        /* error: alert("Warning"), */
        success: function(data) {
            var rows = "";
            users = JSON.parse(data);
            $.each(users, function(index, user) {
                // добавляем полученные элементы в таблицу
                rows += row(user);
            })
            $(".admin-content-user tbody").append(rows);
        }
    });
}

var row = function(user) {
    return "<tr><td>" + user['name'] + "</td>" +
        "<td>" + user.email + "</td> <td>" + user.phone + "</td>" +
        "</tr>";
}

// DELETE ALL USERS
function DeleteUser() {
    $.ajax({
        url: "/api/admin",
        contentType: "application/json",
        method: "DELETE",
        success: function(data) {
            alert("Всі запити видалені");
        }
    })
}