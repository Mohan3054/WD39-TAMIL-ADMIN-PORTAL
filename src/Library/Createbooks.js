import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';

function Createbooks() {
    const formik = useFormik({
        initialValues: {
            isbn: "",
            title: "",
            author: "",
            edition: "",
            publication: ""

        },
        validate: (values) => {
            let error = {};
            if (values.isbn.toString().length !== 8) {
                error.isbn = "Plese Enter a Valid ISBN number"
            }
            if (values.publication.toString().length !== 4) {
                error.publication = "Plese Enter a Valid Publication Year "
            }
            if (!values.title) {
                error.title = "Plese Enter a Value"
            }
            else if (values.title && (values.title.length <= 2 || values.title.length > 15)) {
                error.title = "Title must be between 3 to 20 Characters"

            }
            if (!values.author) {
                error.author = "Plese Enter a Value"
            }
            else if (values.author && (values.author.length <= 2 || values.author.length > 15)) {
                error.author = "Author must be between 3 to 15 Characters"

            }
            if (!values.edition) {
                error.edition = "Plese Enter a Value"
            }
            else if (values.edition && (values.edition.length <= 2 || values.edition.length > 15)) {
                error.edition = "Edition must be between 3 to 15 Characters"

            }


            return error;


        },
        onSubmit: async (values) => {
            try {
                const books = await axios.post("https://634d24d5f5d2cc648e9da680.mockapi.io/admin/books",
                    values);
                alert("sucess")

            } catch (error) {

            }

        },
    });
    return (
        <div >
            <form onSubmit={formik.handleSubmit}>

                <table border="2" align="center" cellpadding="5" cellspacing="5">
                    <tr>
                        <td> Enter ISBN :</td>
                        <td>
                            <input name="isbn"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.isbn}
                                type={"number"}
                                className={`form-control ${formik.errors.isbn ? 'error-box' : ""
                                    } ${formik.touched.isbn && !formik.errors.isbn ? "success-box" : ""}`} size="48" />

                            {
                                formik.touched.isbn && formik.errors.isbn ? <span style={{ color: 'red' }}>{formik.errors.isbn}</span> : null
                            }
                        </td>
                    </tr>
                    <tr>
                        <td> Enter Title :</td>
                        <td> <input name="title"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                            type={"text"}
                            className={`form-control ${formik.errors.title ? 'error-box' : ""} 
                            ${formik.touched.title && !formik.errors.title ? "success-box" : ""}`} size="48" />

                            {/* {JSON.stringify(formik.touched)}
                            {JSON.stringify(formik.errors)} */}
                            {
                                formik.touched.title && formik.errors.title ? <span style={{ color: 'red' }}>{formik.errors.title}</span> : null
                            }

                        </td>
                    </tr>
                    <tr>
                        <td> Enter Author :</td>
                        <td> <input name="author"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.author}
                            type={"text"}
                            className={`form-control ${formik.errors.author ? 'error-box' : ""
                                } ${formik.touched.author && !formik.errors.author ? "success-box" : ""}`} size="48" />

                            {
                                formik.touched.author && formik.errors.author ? <span style={{ color: 'red' }}>{formik.errors.author}</span> : null
                            }
                        </td>
                    </tr>
                    <tr>
                        <td> Enter Edition :</td>
                        <td>
                            <input name="edition"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.edition}
                                type={"text"}
                                className={`form-control ${formik.errors.edition ? 'error-box' : ""
                                    } ${formik.touched.edition && !formik.errors.edition ? "success-box" : ""}`} size="48" />

                            {
                                formik.touched.edition && formik.errors.edition ? <span style={{ color: 'red' }}>{formik.errors.edition}</span> : null
                            }
                        </td>
                    </tr>
                    <tr>
                        <td> Enter Publication: </td>
                        <td> <input name="publication" onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.publication}
                            type={"number"}
                            className={`form-control ${formik.errors.publication ? 'error-box' : ""
                                } ${formik.touched.publication && !formik.errors.publication ? "success-box" : ""}`} size="48" />

                            {
                                formik.touched.publication && formik.errors.publication ? <span style={{ color: 'red' }}>{formik.errors.publication}</span> : null
                            }
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type={'submit'} className='btn btn-primary m-2' value="submit"></input>
                            {/* <button className='btn btn-primary m-2'>Submit</button>
                            <button type="reset" className='btn btn-warning m-2'>Reset</button> */}
                            <input type={"reset"} className='btn btn-warning m-2' value="Reset" />
                        </td>

                    </tr>
                </table>
            </form>

        </div>
    )
}

export default Createbooks