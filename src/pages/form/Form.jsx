// import React from "react";
// import "./styles.css";

// export default function FormPage() {
//   function Submit(e: any) {
//     // const formEle = document.querySelector("form");
//     // const formDatab = new FormData(formEle);
//     const formDatab = new FormData(e.target.form);
//     console.log(formDatab);
//     fetch(
//       "https://script.google.com/macros/s/AKfycby8c9g7x7lBmwN_ROmIrJEyKxyeKiJP7jYXtCjYi_syGjFawGouj4IcMIT38u9OhYXP/exec",
//       "https://script.google.com/macros/s/AKfycby8c9g7x7lBmwN_ROmIrJEyKxyeKiJP7jYXtCjYi_syGjFawGouj4IcMIT38u9OhYXP/exec",
//       {
//         method: "POST",
//         body: formDatab
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <div className="App">
//       <h1>Contact Me form</h1>
//       <h2>
//         This demonstrates how to send data from a website form to Google sheet
//         in React or Vanilla jS
//       </h2>
//       <div>
//         <form className="form" onSubmit={(e) => Submit(e)}>
//           <input placeholder="Your Name" name="Name" type="text" />
//           <input placeholder="Your Email" name="Email" type="text" />
//           <input placeholder="Your Message" name="Message" type="text" />
//           <button type="submit" onClick={
//             (e) => Submit(e)
//           }>
//             Click me
//           </button>        </form>
//       </div>
//     </div>
//   );
// }


import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            surnameValue: '',
            ageValue: '',
        };

    }

    handleChange = (ev) => {
        const inputName = ev.target.name;

        this.setState({
           [`${inputName}Value`]: ev.target.value,  
        });

    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyUbieaM8aUh6Uzdu2hGtMersD8dOGvE2997u_ZHUpj1c6e6OTiA9L_ybPB2cDLslpG/exec';
        // https://script.google.com/macros/s/AKfycby8c9g7x7lBmwN_ROmIrJEyKxyeKiJP7jYXtCjYi_syGjFawGouj4IcMIT38u9OhYXP/exec';
        // https://script.google.com/macros/s/AKfycbzcK0STdQUEwI2rO5gFAFqg9713O0WmLsP7GYp1Rys6A_FQosFB/exec';

        let formData = new FormData(this.googleSheetsForm);

         fetch(scriptURL, { method: 'POST', body: formData})
         .then(response => console.log('Success!', response))
         .catch(error => console.error('Error!', error.message))

    }

    render() {
        const { nameValue, surnameValue, ageValue } = this.state;

        return (
            <form onSubmit={this.handleSubmit} ref={e => this.googleSheetsForm = e} className='form'>
                <input name='name' type='text' placeholder='Name' onChange={this.handleChange} value={nameValue}/>
                <input name='surname' type='text' placeholder='Surname' onChange={this.handleChange} value={surnameValue}/>
                <input name='age' type='text' placeholder='Age' onChange={this.handleChange} value={ageValue}/>
                <button type='submit'> Submit </button>
            </form>
        );
    }
}

export default Form;