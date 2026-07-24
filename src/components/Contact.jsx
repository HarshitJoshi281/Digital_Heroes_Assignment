import { useState } from "react";

const Contact = () => {

const [form,setForm]=useState({
name:"",
email:"",
message:""
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit=(e)=>{
e.preventDefault();

if(!form.name||!form.email||!form.message){
alert("Please fill all fields");
return;
}

alert("Message submitted successfully!");

setForm({
name:"",
email:"",
message:""
});
}

return(

<section className="contact" id="contact">

<div className="container">

<h2 className="section-title">Contact Us</h2>

<form onSubmit={handleSubmit} className="contact-form">

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
/>

<textarea
name="message"
rows="6"
placeholder="Message"
value={form.message}
onChange={handleChange}
/>

<button className="primary-btn">
Send Message
</button>

</form>

</div>

</section>

)

}

export default Contact;