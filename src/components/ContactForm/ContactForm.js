import React, { Component } from "react";
import Input from "./Input/Input";
import classes from "./ContactForm.module.css";
import Footer from "../Footer/Footer";
class ContactForm extends Component {
  state = {
    formData: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your-Email",
        },
        value: "",
      },
      phoneNumber: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Number",
        },
        value: "",
      },
      info: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Add Request Info",
        },
        value: "",
      },
    },
  };
  render() {
    let formElements = [];
    for (let data in this.state.formData) {
      formElements.push({
        id: data,
        config: { ...this.state.formData[data] },
      });
    }

    return (
      <div>
        <div className={classes.ContactForm}>
          <form>
            {formElements.map((formElement) => {
              return (
                <Input
                  key={formElement.id}
                  name={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                />
              );
            })}
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactForm;
