import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

function Usercreate() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            country: "",
            state: "",
            city: "",
            phone: "",
            dob: "",
            gender: ""
        },
        validate: (values) => {
            let error = {};

            if (!values.name) {
                error.name = "Please enter the value"
            }
            if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
                error.name = "Username must be between 3 to 15 characters"
            }
            if (!values.email) {
                error.email = "Please enter a email";
            }
            if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = "Please enter a valid email";
            }
            if (values.phone.toString().length !== 10) {
                error.phone = "Please enter a valid phonenumber";
            }
            console.log(values.dob.split("-")[0]);
            console.log(new Date().getFullYear());
            let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0])
            console.log(age);
            
            if (age < 18) {
                error.dob = "You must be above 18"
            }

            return error;
        },
        onSubmit: async (values) => {
            try {
                const userdata = await axios.post("https://634d24d5f5d2cc648e9da680.mockapi.io/admin/admin",
                    values);
                alert("success")
            } catch (error) {

            }
        },
    });
    return (
        <div class="container">
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>Username *</label>
                            <input name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                type={"text"}
                                className={`form-control ${formik.errors.name ? 'error-box' : ""
                                    } ${formik.touched.name && !formik.errors.name ? "success-box" : ""}`}
                            />
                            {/* {JSON.stringify(formik.touched)}
                            {JSON.stringify(formik.errors)} */}
                            {formik.errors.name ? (
                                <span style={{ color: 'red' }}>{formik.errors.name}</span>
                            ) : null}
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                            <label>Email *</label>
                            <input name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                type={"text"}
                                className={`form-control ${formik.errors.email ? 'error-box' : ""
                                    } ${formik.touched.email && !formik.errors.email ? "success-box" : ""}`}
                            />
                            {formik.errors.email ? (
                                <span style={{ color: 'red' }}>{formik.errors.email}</span>
                            ) : null}
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='form-group'>
                            <label>Country</label>
                            <select name="country"
                                onChange={formik.handleChange}
                                value={formik.values.country} className="form-control">
                                <option>---Select---</option>
                                <option>India</option>
                                <option>America</option>
                                <option>China</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label>State</label>
                            <select name="state"
                                onChange={formik.handleChange}
                                value={formik.values.state} className="form-control">
                                <option>---Select---</option>
                                <option>India</option>
                                <option>America</option>
                                <option>China</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label>City</label>
                            <select name="city"
                                onChange={formik.handleChange}
                                value={formik.values.city} className="form-control">
                                <option>---Select---</option>
                                <option>India</option>
                                <option>America</option>
                                <option>China</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-group">
                            <label>Phone</label>
                            <input name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                type={"number"}
                                className={`form-control ${formik.errors.phone ? 'error-box' : ""
                                    } ${formik.touched.phone && !formik.errors.phone ?
                                        "success-box" : ""}`}
                            />
                            {formik.touched.phone ? (
                                <span style={{ color: 'red' }}>{formik.errors.phone}</span>
                            ) : null}

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input name="dob"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                type={"date"}
                                className={`form-control ${formik.errors.dob ? 'error-box' : ""
                                    } ${formik.touched.dob && !formik.errors.dob ?
                                        "success-box" : ""}`}
                            />
                            {formik.touched.dob ? (
                                <span style={{ color: 'red' }}>{formik.errors.dob}</span>
                            ) : null}
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-group">
                            <label>Gender</label>
                            <select name="gender"
                                onChange={formik.handleChange}
                                value={formik.values.gender} className="form-control">
                                <option>---Select---</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>

                            </select>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="form-group">
                            <input type={'submit'} className='btn btn-primary'></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Usercreate