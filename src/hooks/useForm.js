import { useState } from "react"

export const useForm = (initialValues, callback) => {
    const [values, setValues] = useState(initialValues)

    const onChangeHandler = (e) => {
        setValues(old => ({ ...old, [e.target.name]: e.target.value }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (callback) {
            callback(values)
        }
    }

    return [values, onChangeHandler, onSubmitHandler]
}