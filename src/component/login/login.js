import { Formik, Form, Field, ErrorMessage } from 'formik';
function LoginForm() {
    return (  
        <div >
     <h1>Login in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Email is Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if(!values.password){
             errors.password = 'Password is Required';
         }else if(values.password.length < 6){
             errors.password = 'Password must be at least 6 characters'
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" className='text-danger' />
           <Field type="password" name="password"  />
           <ErrorMessage name="password" component="div" className='text-danger' />
           <button type="submit" disabled={isSubmitting} >
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
    );
}

export default LoginForm;