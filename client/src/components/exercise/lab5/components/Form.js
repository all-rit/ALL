import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Alert } from "reactstrap";

class FormComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            animal: "",
            candy: "",
            city: "",
            date: "",
            show: false,
            answered: false,
            error: false,
            success:false,
            currentDate: this.getDate(),
            alert: "Fill Out Form Completely"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getDate(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + "-" + mm + '-' + dd ;
        return today;
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value.toLowerCase()
        });
        if (e.target.name === "date"){
            if(e.target.value !== this.state.currentDate){
                this.setState({error:true});
            }
            else{
                this.setState({error:false});
            }
        }

    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.showNext();
    }

    form_sub = e => {
        e.preventDefault();
        if (
            this.state.animal === "" ||
            this.state.city === "" ||
            this.state.candy === "" ||
            this.state.date === ""
        ) {
            this.setState({ show: true, alert: "Fill Out Form Completely", success:false, answered: false});
        } else if (
            (this.state.date !== this.state.currentDate)
        ) {
            this.setState({
                show: true,
                alert: "Error in form",
                answered: true,
                success:false
            });
        } else {
            this.setState({show: false,answered: true,success:true})
            this.handleSubmit(e);
        }
    };
    render() {
        const {successNotification, errorNotification, borderColor} = this.props;
        return (
            <main>
                <Form className="formComp">
                    <FormGroup>
                        <Label for="animal">Favorite Animal</Label>
                        <Input
                            type="text"
                            name="animal"
                            id="main"
                            onChange={e => this.change(e)}
                            value={this.state.animal}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">
                            Today's Date
                        </Label>
                        <Input
                            className={this.state.error? "":""}
                            style={{borderColor: borderColor && this.state.error ?  borderColor: null}}
                            type="text"
                            name="date"
                            id="date"
                            onChange={e => this.change(e)}
                            value={this.state.date}
                        />
                        {errorNotification && this.state.error &&
                        <span className='form-error'>{errorNotification}</span>
                        }

                    </FormGroup>
                    <FormGroup>
                        <Label for="candy">Favorite Candy</Label>
                        <Input
                            type="text"
                            name="candy"
                            id="candy"
                            onChange={e => this.change(e)}
                            value={this.state.candy}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Favorite City</Label>
                        <Input
                            type="text"
                            name="city"
                            id="city"
                            onChange={e => this.change(e)}
                            value={this.state.city}
                        />
                    </FormGroup>
                    {this.state.show &&
                        <Alert color="danger">{this.state.alert}</Alert>
                    }
                    {successNotification && this.state.success &&
                    <Alert color='success'>{successNotification}</Alert>
                    }
                    <Input type="submit" onClick={e =>this.form_sub(e)} className="formButtonSubmit"/>
                    <Input
                        type="button"
                        disabled={!this.state.answered}
                        value="Give Up"
                        className={`formButtonHelp ${this.state.answered? "": " disabled"}`}
                        style={{ marginLeft: "20px" }}
                        onClick={e=> this.handleSubmit(e)}
                    />
                </Form>
            </main>
        );
    }
}

export default FormComp;
