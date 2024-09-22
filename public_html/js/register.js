const register = document.getElementById("register_id");
const onFinishregister = document.getElementById("register_popup");

const registerHandler = () => {
  document.getElementById("register_popup").style.visibility = "visible"
};
const closeRegisterPageHandler = () => {
  document.getElementById("register_popup").style.visibility = "hidden"
};

const onFinishRegister = (event) => {
  event.preventDefault();
  const name = event.target.fname.value
  const mobile = event.target.mobile.value
  const email = event.target.email.value
  const Qualification = event.target.highestQualification.value
  const service = event.target.serviceRequired.value
  const data = `Name:${name} <br> Mobile No:${mobile} <br> Email:${email} <br> Qualification:${Qualification} <br> Service:${service}`
  Email.send({
    SecureToken: "1fc46d1e-5cee-4432-b736-93db04fd745e",
    To: 'raok.testing@gmail.com',
    From: "hiibadri123@gmail.com",
    Subject: `New Register from ${email}`,
    Body: data
  }).then((message) => {
    if (message === "OK") {
      alert("Successfully Registered");
    } else {
      alert("some thing went wrong!!!")
    }
  })
}
onFinishregister.addEventListener("submit", onFinishRegister)
register.addEventListener("click", registerHandler);