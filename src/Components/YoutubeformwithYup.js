import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray,FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

import './Youtubeform.css';




function Youtubeform() {



    // console.log("Form Errors", formik.errors);
    // console.log("Visited fields", formik.touched);

    // onChange={formik.handleChange} 
    // value={formik.values.email}
    // onBlur={formik.handleBlur}

    const initialValues = {
        name: 'Nitin',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: ''
        },
        phoneNumbers: ['8899', '333'],
        phNumbers :['']
    }

    const onSubmit = (values) => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid email format yup').required('Required!'),
        channel: Yup.string().required('Required!'),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form >
                <div >
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" placeholder="Your name"
                    />
                    <ErrorMessage name="name" component={TextError} />
                </div>
                <br></br>
                <div className="form_controll">
                    <label htmlFor="email">Email</label>
                    <Field type="text" id="email" name="email"
                    />
                    <ErrorMessage name="email"  >
                        {
                            errorMsg => <div class="error">{errorMsg}</div>
                        }
                    </ErrorMessage>
                </div>
                <br></br>
                <div className="form_controll">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel"
                    />
                    <ErrorMessage name="channel" />
                </div>
                <br></br>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <Field as="textarea" id="comments" name="comments" />
                </div>
                <br></br>
                <div>
                    <label htmlFor="address">Address</label>
                    <FastField name="address">
                        {
                            (props) => {
                                const { field, form, meta } = props;
                                  console.log('Form render');
                                {/* console.log(props); */ }
                                return (
                                    <div>
                                        <input type="text" id="address" {...field} />
                                        {meta.touched && meta.error ? (<div>{meta.error}</div>) : null}
                                    </div>
                                )
                            }
                        }
                    </FastField>
                </div>
                <br></br>
                <div>
                    <label htmlFor="social">Facebook</label>
                    <Field type="text" id="facebook" name="social.facebook"></Field>
                </div>
                <div>
                    <label htmlFor="social">Twitter</label>
                    <Field type="text" id="twitter" name="social.twitter"></Field>
                </div>

                <div>
                    <label htmlFor="primaryPhoneNumber">Primary Phone Number</label>
                    <Field type="number" id="primaryPhoneNumber" name="phoneNumbers[0]"></Field>
                </div>

                <div>
                    <label htmlFor="secondaryPhoneNumber">Secondary Phone Number</label>
                    <Field type="number" id="secondaryPhoneNumber" name="phoneNumbers[1]"></Field>
                </div>

                <div>
                    <label htmlFor="">List of Phone Numbers</label>
                    <FieldArray  name="phNumbers">
                        {
                            (fieldArrayProps)=>{
                                const {push,remove,form} = fieldArrayProps;
                                const {values} = form
                                const {phNumbers} = values;
                                {/* console.log('fieldArrayProps',fieldArrayProps); */}
                                return (
                                    <div>
                                        {
                                            phNumbers.map((phNumber,i)=>{
                                                return (
                                                <div key={i}>
                                                    <Field name={`phNumbers[${i}]`}></Field>
                                                    {
                                                        i>0 && (<button type="button" onClick={()=>remove(i)}>-</button>)
                                                    }
                                                    <button type="button" onClick={()=>push('')}>+</button>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                )

                            }
                        }
                    </FieldArray>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default Youtubeform