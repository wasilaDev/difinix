import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import classNames from 'classnames';
import Swal from 'sweetalert2';
import { Redirect, NavLink } from 'react-router-dom';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import MainLogo from '../../Images/logo.png';


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    menu: {
        width: 400,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    }
});



class SignUpForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            showPassword: false,
            redirect: false,

        }

    }

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };



    render() {

        const { classes } = this.props;
        const { redirect } = this.state;


        if (redirect) {

            return <Redirect to='/' />;

        }

        return (

            <div id="signUpContainer">

                <div className="mainLogo">

                    <NavLink to="/" exact={true}>

                        <img src={MainLogo} alt="Difinix Logo" />

                    </NavLink>


                </div>

                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: ''
                    }}
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }


                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 6) {

                            errors.password = 'Must be at least 6 characters';

                        }


                        if (!values.username) {
                            errors.username = 'Required';
                        } else if (values.username.length < 3) {

                            errors.username = 'Must be at least 3 characters';

                        }


                        return errors;
                    }}




                    onSubmit={values => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                        }, 2000);


                        Swal({
                            title: `Welcome ${values.username} Your Difinix account is ready`,
                            text: `let's get started`,
                            imageUrl: 'https://image.ibb.co/kBgCO8/success.png',
                            imageWidth: 150,
                            imageHeight: 150,
                            imageAlt: 'Custom image',
                            animation: true,
                            showCancelButton: false,
                            confirmButtonColor: '#f10e75',
                            confirmButtonText: 'Start',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            width: '60rem',
                            customClass: 'formModal',
                        }).then((result) => {
                            if (result.value) {
                                this.setState({ redirect: true });
                            }
                        })
                    }}




                    render={({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        isValid
                    }) => (
                            <form className="mainSignUpForm" onSubmit={handleSubmit}>


                                <Card className="mainCard">
                                    <CardContent className="mainCardContent">

                                        <h3 className="form-title">Create your account</h3>

                                        <div>

                                            <TextField
                                                id="username"
                                                label="User Name"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                                margin="normal"
                                                type="text"
                                                name="username"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username}
                                                className="SignUpFormInput"
                                            />
                                            {touched.username && !errors.username && <div className="completed-input"><p>Done</p></div>}
                                            {touched.username && errors.username && <div className="error-input"><p>{errors.username}</p></div>}

                                        </div>



                                        <div>

                                            <TextField
                                                id="email"
                                                label="Email"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                                margin="normal"
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className="SignUpFormInput"
                                            />


                                            {touched.email && !errors.email && <div className="completed-input"><p>Done</p></div>}
                                            {touched.email && errors.email && <div className="error-input"><p>{errors.email}</p></div>}



                                        </div>






                                        <FormControl className="password-container">

                                            <div>

                                                <TextField
                                                    id="adornment-password"
                                                    label="Password"
                                                    type={this.state.showPassword ? 'text' : 'password'}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    InputProps={{
                                                        disableUnderline: true
                                                    }}
                                                    margin="normal"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                    className="SignUpFormInput"
                                                />
                                                {touched.password && !errors.password && <div className="completed-input"><p>Done</p></div>}
                                                {touched.password && errors.password && <div className="error-input"><p>{errors.password}</p></div>}


                                            </div>


                                            <IconButton
                                                className="password-icon"
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </FormControl>


                                        <div className="form-group mainSignUpFormFooter">

                                            <div>

                                                <Button className="SignUpSubmit" variant="raised" type="submit">GET STARTED FREE</Button>

                                            </div>


                                            <div>

                                                

                                                    <p className="switch-link">Already have an account?
                                                    <NavLink to="/login" exact={true}><span> Click here to sign in </span></NavLink></p>

                                                

                                            </div>


                                        </div>

                                    </CardContent>
                                </Card>


                                <div className="formFooter">


<p>DIFINIX is a business app store that helps you manage your business.
By creating an account you accept the  <NavLink to="/login" exact={true}><span>terms of service</span></NavLink></p>


                                </div>




                            </form>
                        )}
                />

            </div>


        );
    }
}



SignUpForm.propTypes = {

    classes: PropTypes.object.isRequired,

}




export default withStyles(styles)(SignUpForm);



