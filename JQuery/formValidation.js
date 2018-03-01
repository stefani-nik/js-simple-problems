function validate() {
    let userNameRagex = /^[A-Za-z0-9]{3,20}$/;
    let passRegex = /^\w{5,15}$/;
    let emailRegex = /^(.+)@(.*)\.(.*)$/;
    let companyCheckBox = $('#company');
    let companyInfoContainer = $('#companyInfo');
    let submitBtn = $('#submit');
    let userNameField = $('#username');
    let emailField = $('#email');
    let passField = $('#password');
    let confirmPassField = $('#confirm-password');
    let isValidField = $('#valid');
    let companyNumber = $('#companyNumber');
    let isChecked = false;


    companyCheckBox.on('change', function (е) {
        if (companyCheckBox.is(':checked')) {
            companyInfoContainer.css('display', 'inline-block');
            isChecked = true;
        }
        else {
            companyInfoContainer.css('display', 'none');
        }
    });

    submitBtn.on('click', function (ev) {
        let isValid = true;
        if(!userNameRagex.test(userNameField.val())){
            userNameField.css('border-color','red');
            isValid = false;
        }
        if(!passRegex.test(passField.val())){
            passField.css('border-color','red');
            isValid = false;
        }
        if(!passRegex.test(confirmPassField.val())){
            confirmPassField.css('border-color','red');
            isValid = false;
        }
        if(!emailRegex.test(emailField.val())){
            emailField.css('border-color','red');
            isValid = false;
        }
        if(passField.val() != confirmPassField.val()){
            passField.css('border-color','red');
            confirmPassField.css('border-color','red');
            isValid = false;
        }
        if(isChecked && (Number(companyNumber.val()) < 1000 || Number(companyNumber.val()) > 9999)){
            companyNumber.css('border-color','red');
            isValid = false;
        }

        if(isValid){
            isValidField.css('display', 'inline-block');
            userNameField.css('border','none');
            passField.css('border','none');
            confirmPassField.css('border','none');
            emailField.css('border','none');
            companyNumber.css('border-color','none');

        }
        ev.preventDefault();
    })

}
