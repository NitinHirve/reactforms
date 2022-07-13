import React from 'react'
import { useFormik } from 'formik';

import './Youtubeform.css';

function Youtubeform() {

    const formik = useFormik({
        initialValues: {
            name: 'Nitin',
            email: '',
            channel: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {

            let errors = {};
            if (!values.name)
                errors.name = "Required";

            if (!values.email)
                errors.email = "Required";

            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9·-]+\.[A-Z]{2,4}$/i.test(values.email))
                errors.email = "Invalid email address";

            if (!values.channel)
                errors.channel = "Required";

            return errors;
        }

    });

    // console.log("Form Errors", formik.errors);
    console.log("Visited fields", formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form_controll">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        onChange={formik.handleChange} value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : ""}
                </div>
                <br></br>
                <div className="form_controll">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email"
                        onChange={formik.handleChange} value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : ""}
                </div>
                <br></br>
                <div className="form_controll">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel"
                        onChange={formik.handleChange} value={formik.values.channel}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? (<div className="error">{formik.errors.channel}</div>) : ""}
                </div>
                <br></br>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Youtubeform