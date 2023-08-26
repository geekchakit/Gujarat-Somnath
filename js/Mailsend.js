function SendEnquery() {
  $("#myModal").modal("show");
}

function PackageEnquiry(PackageName) {
  $("#myModal").modal("show");
  localStorage.setItem("pkgname", PackageName);
}

function SendLead() {
  var PhoneNumber = $("#NumberModal").val();
  var Length = PhoneNumber.trim().length;
  if ($("#NumberModal").val() == "" || Length != 10) {
    $("#ValidatePhoneModel").text("Please give 10 digit number.");
    $("#ValidatePhoneModel").prop("hidden", false);
  } else {
    $("#ValidatePhoneModel").prop("hidden", true);
    var templateParams = {
      from_name: $("#fmname").val(),
      email_id: $("#fmemail").val(),
      contact_no: $("#fmPhone").val(),
      package_name: localStorage.getItem("pkgname"),
      startdate: $("#fmDate").val(),
      adult: $("#fMperson").val(),
      // group:$("#GroupPKG").val(),
      message: $("#fmMsg").val(),
      website: "Gujarat",
    };
    //    console.log(templateParams);
    emailjs
      .send(
        // "service_67t7hhj",
        // "template_thv6rqb",
        // templateParams,
        // "nmhVg3RXzbcSkzs_u"
        "service_v2o5j0l",
        "template_apvv4kv",
        templateParams,
        "3w5lxrQSjLVVLUx6_"
      )
      .then(
        function (response) {
          swal("Good job!", "Your Response Has been submited!", "success");
          $("#fmname").val("");
          $("#fmemail").val("");
          $("#fmPhone").val("");
          $("#fmMsg").val("");
          // $("#GroupPKG").val('');
          $("#fMperson").val("");
          $("#fmDate").val("");
          $("#myModal").modal("hide");
          $("#MineBntModal").prop("disabled", false);
          localStorage.setItem(null);
        },
        function (error) {
          swal("Sorry!", "Its not your fault!", "error");
          $("#MineBntModal").prop("disabled", false);
        }
      );
  }
}

function SendLeadForm() {
  var PhoneNumber = $("#fPhone").val();
  var Length = PhoneNumber.trim().length;
  if ($("#fPhone").val() == "" || Length != 10) {
    $("#ValidatePhone").text("Please give 10 digit number.");
    $("#ValidatePhone").prop("hidden", false);
  } else {
    $("#ValidatePhone").prop("hidden", true);
    var templateParams = {
      from_name: $("#fname").val(),
      email_id: $("#femail").val(),
      contact_no: $("#fPhone").val(),
      package_name: "Sent From Form",
     startdate: $("#fDate").val(),
      adult: $("#fNumberOfp").val(),
      // group:$("#GroupPKG").val(),
      message: $("#fMsg").val(),
      website: "Gujarat",
    };
    //    console.log(templateParams);
    emailjs
      .send(
        // "service_67t7hhj",
        // "template_thv6rqb",
        // templateParams,
        // "nmhVg3RXzbcSkzs_u"
        "service_v2o5j0l",
        "template_apvv4kv",
        templateParams,
        "3w5lxrQSjLVVLUx6_"
      )
      .then(
        function (response) {
          swal("Good job!", "Your Response Has been submited!", "success");
          $("#fname").val("");
          $("#femail").val("");
          $("#fNumberOfp").val("");
          $("#fMsg").val("");
          // $("#GroupPKG").val('');
          $("#fNumberOfp").val("");
          $("#fDate").val("");
          $("#MineBntForm").prop("disabled", false);
          localStorage.setItem(null);
        },
        function (error) {
          swal("Sorry!", "Its not your fault!", "error");
          $("#MineBntForm").prop("disabled", false);
        }
      );
  }
}

function CloseModal() {
  $("#myModal").modal("hide");
}



