// alert Login
function log(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email and password do not match! Please check again.',
        footer: '<a href="">Help?</a>'
      })
}

// alert Sign Up
function regis() {
    Swal.fire("Account has been created, please check your email!");
}

// Text Typed
var options = {
  strings: ['and your way.', 'and yor inspiration.', 'and your needs.'],
  typeSpeed: 70,
  loop: true,
};

var typed = new Typed('.typed', options);