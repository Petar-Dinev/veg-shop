import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues)

    const onChange = (e) => {
        setValues(old => ({ ...old, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (onSubmitHandler) {
            onSubmitHandler(values)
        }
    }

    return [values, onChange, onSubmit]
}