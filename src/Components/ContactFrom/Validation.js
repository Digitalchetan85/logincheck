export default function Validation(values) {

    let errors = {};

    //name
    if(!values.name.trim()) {
        errors.name = "Name is required";
    } else if (values.name.trim().length < 3 ) {
        errors.name = "Minimum 3 and above Character must be there.";
    }

    //Email address
    // if(!values.email.trim()) {
    //     errors.email = "Email address is required";
    // } else if (!values.email.trim() === /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    // { 
    //     errors.email = "Enter the valid email address";
    // }

    //phone number 
    if(!values.phone.trim()) {
        errors.phone = "Phone number is required";
    } 

    //subject 
    if(!values.subject.trim()) {
        errors.subject = "Subject Should not be a empty.";
    }

    //Message
    if (!values.message.trim()) {
        errors.message = "Enter your message";
    }

    return errors;
}