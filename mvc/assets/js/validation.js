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
        alert("Fill all")
        return false
    }

    if(email.length < 4 ) {
        alert("E-mail must be more than 4 characters")
        return false;
    }

    if (password.length < 8 ) {
        alert("Password must be more than 8 characters")
        return false

    }

    if (firstName.length < 3) {
        alert("First Name must be more than 3 characters")
        return false

    }

    if (lastName.length < 3) {
        alert("Last name must be more than 3 characters")
        return false

    }

    if ( address.length < 5) {
        alert("Adrdress must be more than 5 characters")
        return false

    }
    if (contact_number.length < 10 && inputtxt.value.match(number)) {
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
  


