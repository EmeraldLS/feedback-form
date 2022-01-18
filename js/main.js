(function () {
    const submitForm = document.querySelector("#btn__submit")
    submitForm.addEventListener("click", function() {
        swal({
            title: "Are you sure?",
            text: "Once submitted, you will not be able to make any changes!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your decision has been submitted!", {
                icon: "success",
              }).then(function () {
                  window.location = "https://www.upwork.com/freelancers/~01ed8bb99bf3ee78b6"
              })
            } else {
              swal("Your decision isn't submitted");
            }
          });
    })
})()