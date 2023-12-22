'use client'
import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import errorIcon from '@/static/icons/icon-error.svg'
import Image from 'next/image';

const formSchema = Yup.object().shape({
    email: Yup.string().email("Whoops, make sure it's an email").required("Email is required"),
});

const FooterForm = () => {
    return (
        <Formik
            initialValues={{email: ''}}
            validationSchema={formSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className='flex flex-col w-[85%] mt-8 md:flex-row md:items-start md:justify-center'>
                    {errors.email && touched.email ? 
                    <div className='flex flex-col'>
                        <div className='w-full flex rounded-t-md border-2 bg-[#FA5757] border-[#FA5757] items-center justify-between'>
                            <div className='flex items-center justify-between bg-white rounded-md w-full'>
                                <Field name="email" type="email" placeholder='Email' className='rounded-md outline-none pl-4 py-2 w-full'/>
                                <Image src={errorIcon} alt='Error' className='h-[22px] w-[22px] mx-4'/>
                            </div>
                        </div>
                        <div className='flex bg-[#FA5757] rounded-b-md'>
                            <p className='text-white italic text-sm px-3 py-2'>{errors.email}</p>
                        </div>
                    </div>
                    : <div className='flex flex-col'>
                        <div className='w-full flex rounded-md border-2 bg-[#fff] border-[#fff] items-center justify-between'>
                            <div className='flex items-center justify-between bg-white rounded-md w-full'>
                                <Field name="email" type="email" placeholder='Email' className='rounded-md outline-none pl-4 py-2 w-full'/>
                                <span  className='h-[22px] w-[22px] mx-4'></span>
                            </div>
                        </div>
                    </div>
                    }
                    <button type="submit" className='rounded-md text-white bg-[#FA5757] py-2 mt-5 border-[#FA5757] border-2 font-medium md:mt-0 md:px-5 md:ml-5 md:hover:bg-[#fff] md:hover:text-[#FA5757] md:border-[#FA5757] transition'>Contact Us</button>
                </Form>
            )}
        </Formik>
    )
}

export default FooterForm