import React from "react";
import "./style.css"

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xaybvwpa"
                method="POST">

                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" neme="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name="_replyto" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>

                {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submit" className="btn btn-primary">Submit Reservation</button>}
                {status === "ERROR" && <p>Ooops! There was an error. Review form.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}