const testLessonForm = $('.test-lesson-form');
const answerModal = $('.answer-modal');

const userName = $('#test-lesson-form-input-name');
const userEmail = $('#test-lesson-form-input-email');
const userPhone = $('#test-lesson-form-input-phone');

// send a form

$('#testLessonForm').submit(function(e) {
    e.preventDefault();

    var name = this.elements["name"].value;
    var email = this.elements["email"].value;
    var phone = this.elements["phone"].value;

    CreateUser(name, email, phone);
});

function CreateUser(userName, userEmail, userPhone) {
    let jsonSend = JSON.stringify({
        name: userName,
        email: userEmail,
        phone: userPhone,
    })
    $.ajax({
        url: "/api/test-lesson",
        contentType: "application/json",
        method: "POST",
        data: jsonSend,
        error: function() {
            alert("error occurred.")
        },
        complete: function(data) {
            console.log("ajax complete.")
        },
        success: function(isOk) {
            $('.answer-modal').addClass('modal-active');
            console.log("ajax success.")
            setTimeout(function() {
                $('.answer-modal').removeClass('modal-active');
            }, 4000);
        }
    })
}


/* userPhone.addEventListener('click', function() {
    if (!userPhone.value.trim()) {
        userPhone.value = '+380';
    }
}); */

/* userPhone.addEventListener('blur', function() {
    if (userPhone.value === '+380') {
        userPhone.value = '';
    }
}); */

/* testLessonForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let hasError = false;

    if (!userName.value.trim()) {
        userName.classList.add('test-lesson-form-error');
        hasError = true;
    } else {
        userName.classList.remove('test-lesson-form-error');
    }

    if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
        userEmail.classList.add('test-lesson-form-error');
        hasError = true;
    } else {
        userEmail.classList.remove('test-lesson-form-error');
    }

    if (!userPhone.value.trim()) {
        userPhone.classList.add('test-lesson-form-error');
        hasError = true;
    } else {
        userPhone.classList.remove('test-lesson-form-error');
    }

    if (hasError) {
        return;
    }

    userName.value = '';
    userEmail.value = '';
    userPhone.value = '';

    answerModal.classList.add('modal-active');

    setTimeout(function() {
        answerModal.classList.remove('modal-active');
    }, 3000);
}); */

/* function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
} */