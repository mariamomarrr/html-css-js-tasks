document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('questionsForm');


    if (form) {
        form.addEventListener('submit', function (event) {

            if (!this.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {

                event.preventDefault();

                alert('Thank you! Your message has been sent successfully.');


                this.reset();
                this.classList.remove('was-validated');
                return;
            }

            this.classList.add('was-validated');
        }, false);
    }
});











