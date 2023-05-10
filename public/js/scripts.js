var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");
var form_7 = document.querySelector(".form_7");
var form_8 = document.querySelector(".form_8");
var form_9 = document.querySelector(".form_9");
var form_10 = document.querySelector(".form_10");
var form_11 = document.querySelector(".form_11");
var form_12 = document.querySelector(".form_12");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");
var form_7_btns = document.querySelector(".form_7_btns");
var form_8_btns = document.querySelector(".form_8_btns");
var form_9_btns = document.querySelector(".form_9_btns");
var form_10_btns = document.querySelector(".form_10_btns");
var form_11_btns = document.querySelector(".form_11_btns");
var form_12_btns = document.querySelector(".form_12_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");
var form_5_next_btn = document.querySelector(".form_5_btns .btn_next");
var form_6_back_btn = document.querySelector(".form_6_btns .btn_back");
var form_6_next_btn = document.querySelector(".form_6_btns .btn_next");
var form_7_back_btn = document.querySelector(".form_7_btns .btn_back");
var form_7_next_btn = document.querySelector(".form_7_btns .btn_next");
var form_8_back_btn = document.querySelector(".form_8_btns .btn_back");
var form_8_next_btn = document.querySelector(".form_8_btns .btn_next");
var form_9_back_btn = document.querySelector(".form_9_btns .btn_back");
var form_9_next_btn = document.querySelector(".form_9_btns .btn_next");
var form_10_back_btn = document.querySelector(".form_10_btns .btn_back");
var form_10_next_btn = document.querySelector(".form_10_btns .btn_next");
var form_11_back_btn = document.querySelector(".form_11_btns .btn_back");
var form_11_next_btn = document.querySelector(".form_11_btns .btn_next");
var form_12_back_btn = document.querySelector(".form_12_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");
var close = document.querySelector(".close");

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

form_1_next_btn.addEventListener("click", function () {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const gender = document.getElementById("gender").value;
  

  if (firstName === "") {
    document.getElementById("message").innerHTML = "Please Input First Name";
    document.getElementById("message").style.color = "red";
    // document.getElementById("message2").innerHTML = "Please Input First Name";
    // document.getElementById("message2").style.color = "red";
    return;
  }
  if (lastName === "") {
    document.getElementById("message").innerHTML = "Please Input Last Name";
    document.getElementById("message").style.color = "red";
    // document.getElementById("message2").innerHTML = "Please Input Last Name";
    // document.getElementById("message2").style.color = "red";
    return;
  }

  if (gender === "") {
    document.getElementById("message").innerHTML = "Please Select your gender";
    document.getElementById("message").style.color = "red";
    // document.getElementById("message2").innerHTML = "Please Input Last Name";
    // document.getElementById("message2").style.color = "red";
    return;
  }

  // if (address === "") {
  //   document.getElementById("message").innerHTML = "Please Input Address";
  //   document.getElementById("message").style.color = "red";
  //   document.getElementById("message2").innerHTML = "Please Input Address";
  //   document.getElementById("message2").style.color = "red";
  //   return;
  // }

  document.getElementById("message").innerHTML = null;
  form_1.style.display = "none";
  form_2.style.display = "block";

  form_1_btns.style.display = "none";
  form_2_btns.style.display = "flex";

});

form_2_back_btn.addEventListener("click", function () {
  form_1.style.display = "block";
  form_2.style.display = "none";

  form_1_btns.style.display = "flex";
  form_2_btns.style.display = "none";

  document.getElementById("message").innerHTML = null;
});

form_2_next_btn.addEventListener("click", function () {
  // const customerType = document.getElementById("customer-type").value;
  // const accountType = document.getElementById("account-type").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirm-email").value;

  if (email === "") {
    document.getElementById("message").innerHTML = "Please Input email";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    document.getElementById("message").innerHTML = "Invalid Email";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (email !== confirmEmail) {
    document.getElementById("message").innerHTML = "Email does not match";
    document.getElementById("message").style.color = "red";
    return;
  }

  // if (customerType === "") {
  //   document.getElementById("message").innerHTML =
  //     "Please select Customer Type";
  //   document.getElementById("message").style.color = "red";
  //   document.getElementById("message2").innerHTML =
  //     "Please select Customer Type";
  //   document.getElementById("message2").style.color = "red";
  //   return;
  // }

  // if (accountType === "") {
  //   document.getElementById("message").innerHTML = "Please select Account Type";
  //   document.getElementById("message").style.color = "red";
  //   document.getElementById("message2").innerHTML =
  //     "Please select Account Type";
  //   document.getElementById("message2").style.color = "red";
  //   return;
  // }

  document.getElementById("message").innerHTML = null;

  form_2.style.display = "none";
  form_3.style.display = "block";

  form_3_btns.style.display = "flex";
  form_2_btns.style.display = "none";

  // form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function () {
  form_2.style.display = "block";
  form_3.style.display = "none";

  form_3_btns.style.display = "none";
  form_2_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_3_next_btn.addEventListener("click", function () {
  const phoneNo = document.getElementById("phone").value;

  if (phoneNo === "") {
    document.getElementById("message").innerHTML = "Please enter Phone Number";
    document.getElementById("message").style.color = "red";

    return;
  }

  document.getElementById("message").innerHTML = null;
  form_3.style.display = "none";
  form_4.style.display = "block";

  form_4_btns.style.display = "flex";
  form_3_btns.style.display = "none";
});

form_4_back_btn.addEventListener("click", function () {
  form_3.style.display = "block";
  form_4.style.display = "none";

  form_4_btns.style.display = "none";
  form_3_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_4_next_btn.addEventListener("click", function () {
  const address = document.getElementById("address").value;
  const aptSuite = document.getElementById("apt/suite").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zip-code").value;

  if (address === "") {
    document.getElementById("message").innerHTML = "Please enter an Address";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (aptSuite === "") {
    document.getElementById("message").innerHTML = "Please enter Apt/Suite";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (city === "") {
    document.getElementById("message").innerHTML = "Please enter your City";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (state === "") {
    document.getElementById("message").innerHTML = "Please enter State";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (zipCode === "") {
    document.getElementById("message").innerHTML = "Please enter Zip Code";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").innerHTML = null;
  form_4.style.display = "none";
  form_5.style.display = "block";

  form_4_btns.style.display = "none";
  form_5_btns.style.display = "flex";
});

form_5_back_btn.addEventListener("click", function () {
  form_4.style.display = "block";
  form_5.style.display = "none";

  form_5_btns.style.display = "none";
  form_4_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_5_next_btn.addEventListener("click", function () {
  const country = document.getElementById("country").value;

  if (country === "") {
    document.getElementById("message").innerHTML = "Please select your country";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").innerHTML = null;
  form_5.style.display = "none";
  form_6.style.display = "block";

  form_5_btns.style.display = "none";
  form_6_btns.style.display = "flex";
});

form_6_back_btn.addEventListener("click", function () {
  form_5.style.display = "block";
  form_6.style.display = "none";

  form_6_btns.style.display = "none";
  form_5_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_6_next_btn.addEventListener("click", function () {
  const employmentStatus = document.getElementById("employment-status").value;

  if (employmentStatus === "") {
    document.getElementById("message").innerHTML =
      "Please select your Employment Status";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").innerHTML = null;
  form_6.style.display = "none";
  form_7.style.display = "block";

  form_6_btns.style.display = "none";
  form_7_btns.style.display = "flex";
});

form_7_back_btn.addEventListener("click", function () {
  form_6.style.display = "block";
  form_7.style.display = "none";

  form_7_btns.style.display = "none";
  form_6_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_7_next_btn.addEventListener("click", function () {
  const jobTitle = document.getElementById("job-title").value;

  if (jobTitle === "") {
    document.getElementById("message").innerHTML =
      "Please select your Job Title";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").innerHTML = null;
  form_7.style.display = "none";
  form_8.style.display = "block";

  form_7_btns.style.display = "none";
  form_8_btns.style.display = "flex";
});

form_8_back_btn.addEventListener("click", function () {
  form_7.style.display = "block";
  form_8.style.display = "none";

  form_8_btns.style.display = "none";
  form_7_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_8_next_btn.addEventListener("click", function () {
  const annualIncome = document.getElementById("annual-income").value;

  if (annualIncome === "") {
    document.getElementById("message").innerHTML =
      "Please select your Annual Income";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").innerHTML = null;
  form_9.style.display = "block";
  form_8.style.display = "none";

  form_8_btns.style.display = "none";
  form_9_btns.style.display = "flex";
});

form_9_back_btn.addEventListener("click", function () {
  form_9.style.display = "none";
  form_8.style.display = "block";

  form_9_btns.style.display = "none";
  form_8_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_9_next_btn.addEventListener("click", function () {
  const SSN = document.getElementById("SSN").value;
  const DOB = document.getElementById("date-of-birth").value;

  if (DOB === "") {
    document.getElementById("message").innerHTML = "Please enter Date of Birth";
    document.getElementById("message").style.color = "red";
    return;
  }
  if (SSN === "" || SSN.length !== 9) {
    document.getElementById("message").innerHTML = "Invalid SSN";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").innerHTML = null;

  form_10.style.display = "block";
  form_9.style.display = "none";

  form_9_btns.style.display = "none";
  form_10_btns.style.display = "flex";
});

form_10_back_btn.addEventListener("click", function () {
  form_10.style.display = "none";
  form_9.style.display = "block";

  form_10_btns.style.display = "none";
  form_9_btns.style.display = "flex";
});

form_10_next_btn.addEventListener("click", function () {
  const username = document.getElementById("user-name").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const accountType = document.getElementById("account-type");
  const customerType = document.getElementById("customer-type");
  const customerTypeVal = customerType.value;
  const accountTypeVal = accountType.value;

  if (username === "") {
    document.getElementById("message").innerHTML = "Please enter UserName";
    document.getElementById("message").style.color = "red";
    return;
  }
  if (accountTypeVal === "") {
    document.getElementById("message").innerHTML = "Please select Account Type";
    document.getElementById("message").style.color = "red";
    return;
  }
  if (customerTypeVal === "") {
    document.getElementById("message").innerHTML =
      "Please select Customer Type";
    document.getElementById("message").style.color = "red";
    return;
  }
  if (password === "") {
    document.getElementById("message").innerHTML = "Please enter password";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (password.length < 8) {
    document.getElementById("message").innerHTML = "Password too short";
    document.getElementById("message").style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById("message").innerHTML = "Passwords does not match";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").innerHTML = null;
  form_10.style.display = "none";
  form_11.style.display = "block";

  form_10_btns.style.display = "none";
  form_11_btns.style.display = "flex";
});

form_11_back_btn.addEventListener("click", function () {
  form_11.style.display = "none";
  form_10.style.display = "block";

  form_11_btns.style.display = "none";
  form_10_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

form_11_next_btn.addEventListener("click", function () {
  const agree1 = document.getElementById("radio1");
  const agree2 = document.getElementById("radio2");

  console.log(agree1.checked);
  console.log(agree2.checked);
  if (agree1.checked && agree2.checked) {
    document.getElementById("message").innerHTML = null;
    form_11.style.display = "none";
    form_12.style.display = "block";

    form_11_btns.style.display = "none";
    form_12_btns.style.display = "flex";

    document.getElementById("dname").innerHTML =
      document.getElementById("first-name").value;
    document.getElementById("name2").innerHTML =
      document.getElementById("last-name").value;
    document.getElementById("ge").innerHTML =
      document.getElementById("gender").value;
    document.getElementById("e-add").innerHTML =
      document.getElementById("email").value;
    document.getElementById("m-num").innerHTML =
      document.getElementById("phone").value;
    document.getElementById("addre").innerHTML =
      document.getElementById("address").value;
    document.getElementById("appsu").innerHTML =
      document.getElementById("apt/suite").value;
    document.getElementById("cty").innerHTML =
      document.getElementById("city").value;
    document.getElementById("sta").innerHTML =
      document.getElementById("state").value;
    document.getElementById("zp").innerHTML =
      document.getElementById("zip-code").value;
    document.getElementById("ctry").innerHTML =
      document.getElementById("country").value;
    document.getElementById("est").innerHTML =
      document.getElementById("employment-status").value;
    document.getElementById("jt").innerHTML =
      document.getElementById("job-title").value;
    document.getElementById("sn").innerHTML =
      document.getElementById("SSN").value;
    document.getElementById("b-d").innerHTML =
      document.getElementById("date-of-birth").value;
    document.getElementById("u-name").innerHTML =
      document.getElementById("user-name").value;

    return;
  }
  document.getElementById("message").innerHTML =
    "Please accept all the agreement to proceed";
  document.getElementById("message").style.color = "red";
});

form_12_back_btn.addEventListener("click", function () {
  form_12.style.display = "none";
  form_11.style.display = "block";

  form_12_btns.style.display = "none";
  form_11_btns.style.display = "flex";

  document.getElementById("message").innerHTML = null;
});

btn_done.addEventListener("click", function () {
  const accountType = document.getElementById("account-type");
  const customerType = document.getElementById("customer-type");


  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const userName = document.getElementById("user-name").value;
  const email = document.getElementById("email").value;
  const DOB = document.getElementById("date-of-birth").value;
  const accountTypeVal = accountType.value;
  const customerTypeVal = customerType.value;
  const SSN = document.getElementById("SSN").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;
  const phoneNo = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const aptSuite = document.getElementById("apt/suite").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zip-code").value;
  const country = document.getElementById("country").value;
  const employmentStatus = document.getElementById("employment-status").value;
  const jobTitle = document.getElementById("job-title").value;
  const annualIncome = document.getElementById("annual-income").value;

  if (
    firstName === "" ||
    lastName === "" ||
    gender === "" ||
    email === "" ||
    phoneNo === "" ||
    address === "" ||
    aptSuite === "" ||
    city === "" ||
    state == "" ||
    zipCode === "" ||
    country === "" ||
    employmentStatus === "" ||
    jobTitle === "" ||
    annualIncome === "" ||
    SSN === "" ||
    DOB === "" ||
    userName === "" ||
    password === "" ||
    accountType === "" ||
    customerTypeVal === "" ||
    accountTypeVal === ""
  ) {
    location.replace("signup.html");
    return;
  }


  document.getElementById("message").innerHTML = "Please wait...";
  document.getElementById("message").style.color = "green";

  document.getElementById("my-button1").disabled = true;
  document.getElementById("my-button2").disabled = true;
  console.log('reached');
  

  //const data = Object.fromEntries(formData);

  // console.log(data);
  //'https://td-back-end.vercel.app/auth/signup'
  fetch("https://td-back-end.vercel.app/auth/signup", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      email: email,
      date_of_birth: DOB,
      account_type: accountTypeVal,
      customer_type: customerTypeVal,
      SSN: SSN,
      password: password,
      gender: gender,
      phone_no: phoneNo,
      address: address,
      apt_suite: aptSuite,
      city: city,
      state: state,
      zip_code: zipCode,
      country: country,
      employment_status: employmentStatus,
      job_title: jobTitle,
      annual_income: annualIncome,

    }),
  })
    .then((res) => {
      console.log("Sent");
      // document.getElementById("my-button1").disabled = false;
      // document.getElementById("my-button2").disabled = false;

      return res.json();
    })
    .then((resData) => {
      console.log(resData);
      document.getElementById("message").innerHTML = resData.message;
      document.getElementById("message").style.color =
        resData.message === "Success!" ? "green" : "red";

      if (resData.message === "Success!") {
        localStorage.setItem("verify-email", resData.email);
        localStorage.setItem("verify-userId", resData.userId);
        modal_wrapper.classList.add("active");
        location.replace("verify.html");
        return;
      }
      document.getElementById("my-button1").disabled = false;
      document.getElementById("my-button2").disabled = false;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerHTML = "An Error occurred";
      document.getElementById("my-button1").disabled = false;
      document.getElementById("my-button2").disabled = false;
      
    });
});

shadow.addEventListener("click", function () {
  modal_wrapper.classList.remove("active");
});

close.addEventListener("click", function () {
  modal_wrapper.classList.remove("active");
});
