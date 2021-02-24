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
            bool: "",
            show: false,
            answered: false,
            error: false,
            success:false,
            alert: "Fill Out Form Completely"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value.toLowerCase()
        });
        if (e.target.name === "bool"){
            const val = parseInt(e.target.value);
            if(val !== 0 && val!==1){
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
        const val = parseInt(this.state.bool);
        if (
            this.state.animal === "" ||
            this.state.city === "" ||
            this.state.candy === "" ||
            this.state.bool === ""
        ) {
            this.setState({ show: true, alert: "Fill Out Form Completely", success:false, answered: false});
        } else if (
            ((val !== 0 && val !== 1) || this.state.bool.length>1 )
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
                        <Label for="bool">
                            Do you Like Spice?{" "}
                        </Label>
                        <Input
                            className={this.state.error? "":""}
                            style={{borderColor: borderColor && this.state.error ?  borderColor: null}}
                            type="text"
                            name="bool"
                            id="bool"
                            onChange={e => this.change(e)}
                            value={this.state.bool}
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
                    {this.state.show ? (
                        <Alert color="danger">{this.state.alert}</Alert>
                    ) : null}
                    {successNotification && this.state.success &&
                    <Alert color='success'>{successNotification}</Alert>
                    }
                    {/*{this.state.success && this. ? (*/}
                    {/*    <Alert color="danger">{this.state.alert}</Alert>*/}
                    {/*) : null}*/}
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
