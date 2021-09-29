// Validation For Login Form
function validateLoginForm() {
    let email = document.forms["form-login"]["email"].value
    let password = document.forms["form-login"]["password"].value
    if (email == "" || password =="" ) {
      alert("Fill all fields")
      return false
    }
  }


// Validation For Registration Form
function validateRegistrationForm() {
    let email = document.forms["form-register"]["email"].value
    let password = document.forms["form-register"]["password"].value
    let firstName = document.forms["form-register"]["firstName"].value
    let lastName = document.forms["form-register"]["lastName"].value
    let address = document.forms["form-register"]["address"].value
    let contact_number = document.forms["form-register"]["contact_number"].value

    if (email == "" || password == "" || firstName == "" || lastName == "" || address == "" || contact_number == "") {
        alert("Fill all fields")
        return false
    }

    if(email < 4 ) {
        alert("E-mail must be more than 4 characters")
        return false;
    }

    if (password < 8 ) {
        alert("Password must be more than 8 characters")
        return false

    }

    if (firstName < 3) {
        alert("First Name must be more than 3 characters")
        return false

    }

    if (lastName < 3) {
        alert("Last name must be more than 3 characters")
        return false

    }

    if ( address < 5) {
        alert("Adrdress must be more than 5 characters")
        return false

    }
    if (contact_number < 10 && inputtxt.value.match(number)) {
        alert("Contact number must be more than 10 characters")
        return false
    }
}


// Validation For New Product Form
function validateNewProductForm() {
    let name        = document.forms["new-product-form"]["name"].value
    let description = document.forms["new-product-form"]["description"].value
    let vendorPrice = document.forms["new-product-form"]["vendorPrice"].value
    let retailPrice = document.forms["new-product-form"]["retailPrice"].value
    let quantity    = document.forms["new-product-form"]["quantity"].value
    let pet =  document.forms["new-product-form"]["pet"].selectedIndex
    let vendor =  document.forms["new-product-form"]["vendor"].selectedIndex
    let status =  document.forms["new-product-form"]["status"].selectedIndex
    let category =  document.forms["new-product-form"]["category"].selectedIndex
    let subcategory =  document.forms["new-product-form"]["subcategory"].selectedIndex
    var fileName = document.getElementById("image").value;

    if (name == "" || description == "" || vendorPrice == "" || retailPrice == "" || quantity == "") {
        alert("Fill all fields")
        return false
    }

    if(vendorPrice < retailPrice ) {
        alert ('No Vendor Price less than Retail Price')
        return false
    }

    if(pet == ""|| vendor == "" || status == "" || category == "" || subcategory == "" ) {
        alert("Choose pet")
        return false
    }
    
    if(vendor == "" ) {
        alert("Choose vendor")
        return false
    }
    
    if( status == "" ) {
        alert("Choose status")
        return false
    }
    
    if( category == ""  ) {
        alert("Choose category")
        return false
    }
    
    if(subcategory == "" ) {
        alert("Choose subcategory ")
        return false
    }
    
    if (fileName == "") {
        alert("Upload an image")
        return false
    }
}
      // Validation For User Info Update  form

function validateUpdateForm() {
    let email = document.forms["update-form"]["email"].value
    let password = document.forms["update-form"]["password"].value
    let firstName = document.forms["update-form"]["firstName"].value
    let lastName = document.forms["update-form"]["lastName"].value
    let address = document.forms["update-form"]["address"].value
    let contact_number = document.forms["update-form"]["contact_number"].value

    if (email == "" || password == "" || firstName == "" || lastName == "" || address == "" || contact_number == "") {
        alert("Fill all fields")
        return false
    }

    if (password < 8 ) {
        alert("Password must be more than 8 characters")
        return false

    }

    if (firstName < 3) {
        alert("First Name must be more than 3 characters")
        return false

    }

    if (lastName < 3) {
        alert("Last name must be more than 3 characters")
        return false

    }

    if ( address < 5) {
        alert("Address must be more than 5 characters")
        return false

    }


if (contact_number < 10 ) {
    alert("Contact number must be more than 10 characters")
    return false

    }
}


// Validation For Update A Product Form
function validateUpdateForm() {
    let name = document.forms["edit-product-form"]["name"].value
    let description = document.forms["edit-product-form"]["description"].value
    let quantity = document.forms["edit-product-form"]["quantity"].value
    let vendor_price = document.forms["edit-product-form"]["vendor_price"].value
    let retail_price = document.forms["edit-product-form"]["retail_price"].value
    let status = document.forms["edit-product-form"]["status"].value
    var fileName = document.getElementById("image").value;

    if (name == "" || description == "" || quantity == "" || vendor_price == "" || retail_price == "" || status == "") {
        alert("Fill all fields")
        return false
    }
    

    if (name < 1 ) {
        alert("Name must be more than 1 characters")
        return false

    }

    if (description < 3) {
        alert("Description Name must be more than 3 characters")
        return false

    }

    if (quantity < 1) {
        alert("Quantity must be more than 0")
        return false

    }
    if (retail_price < 1) {
        alert("Retail Price must be more than 1")
        return false

    }

    if (fileName == "") {
        alert("Upload an image")
        return false
    }
}
    



    // Validation For Change Password form
    function validateNewUserForm() {
        let oldPass = document.forms["change-pass-form"]["oldPass"].value
        let newPass = document.forms["change-pass-form"]["newPass"].value
        let confirmPass = document.forms["change-pass-form"]["confirmPass"].value
     
        if (newPass == oldPass) {
            alert("This is your old password, please provide a new password ")
            return false
        }
      
        if (newPass !== confirmPass ) {
            alert("New password and confirm password must be the same")
            return false
        }

        if( newPass < 8 || confirmPass < 8) {
            alert("Your pasword must be 8 or more characters ")
            return false

        }
}
    



