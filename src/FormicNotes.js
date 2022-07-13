/**
 * Formic :
 * 
 * 1. Managing the form state.
 * 2. Handling the form submission.
 * 3. Validation and error message.
 * 
 * form State = {
 *  name : "Nitin",
 *  email : "hirvenitin@gmail.com
 *  channel : "Technical Nitin"
 * }
 * 
 * 
 * 
 * {...formik.getFieldProps('email')} :
 * 
 * replaces this 3 props :
 *  - onChange={formik.handleChange} 
    - value={formik.values.email}
    - onBlur={formik.handleBlur}


     const initialValues = {
        name: 'Nitin',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social : { 
            facebook : '',
            twitter : ''
        },
        phoneNumbers : ['','']
    }

    
 * formik.touched: 
 * {formik.touched.channel && formik.errors.channel ? (<div className="error">{formik.errors.channel}</div>) : ""}
 * 
 * 
 * Text area in Field :
 *       <Field as="textarea" id="comments" name="comments"></Field>
 * 
 * component property :
 *   <ErrorMessage name="name" component="div" />
 * 
 * 
 * Nested objects :
 * name="social.facebook"
 * name="social.twitter"
 * 
 * 
 * Managing field state with an Array : 
 * 
 * name="phoneNumbers[0]"
 * name="phoneNumbers[1]"
 * 
 * 
 * FastField :
 * 
 * - Do not render form field everytime if some other field state is changed
 * - FastField should use for form having more than 30 field.
 * - It has so many warnings.
 * 
 */