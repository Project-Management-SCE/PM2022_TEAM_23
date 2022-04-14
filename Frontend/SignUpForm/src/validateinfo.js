export default function validateInfo(values)
{
    let errors={}

    if(!values.username.trim())
    {
        errors.username="Username is required"
    }

    if(!values.email)
    {
        errors.email="Email is required"
    }

    else if(!/^[A-Za-z]+/.test(values.email))
    {
        errors.email="Email adress is invalid"
    }

    if(!values.password)
    {
        errors.password="Password required"
    }

    else if(values.password.length<6)
    {
        errors.password="Password needs to be 6 chracters or more"
    }

    if(!values.password2)
    {
        errors.password2="Password is required"
    }

    else if(values.password2!==values.password)
    {
        errors.password2="Password do not match"
    }

    if(!values.firstName.trim())
    {
        errors.firstName="First Name is required"
    }
    if(!values.lastName.trim())
    {
        errors.lastName="last Name is required"
    }
    if(!values.dateOfBirth.trim())
    {
        errors.dateOfBirth="Date of birth  is required"
    }
    if(!values.height.trim())
    {
        errors.height="Height is required"
    }
    else if(!/^[0-9._%+-]/.test(values.height.trim()))
    {
        errors.height="Height is invalid"
    }
    if(!values.weight.trim())
    {
        errors.weight="Weight is required"
    }
    else if(!/^[0-9._%+-]/.test(values.weight.trim()))
    {
        errors.weight="Weight is invalid"
    }
    if(!values.phone.trim())
    {
        errors.phone="Phone is required"
    }
    else if(!/^[0-9._%+-]/.test(values.phone.trim()))
    {
        errors.phone="Phone is invalid"
    }

    return errors;
}