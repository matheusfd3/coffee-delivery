import { createContext, ReactNode, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface IForm {
  cep: string
  street: string
  streetNumber: string
  complement: string
  district: string
  city: string
  state: string
  paymentMethod: 'Credit' | 'Debit' | 'Cash' | ''
}

interface FormContextType {
  form: IForm
  setNewValuesForm: (data: IForm) => void
}

interface FormContextProviderProps {
  children: ReactNode
}

export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [form, setForm] = useState<IForm>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-coffee-delivery:form-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return {
      cep: '',
      street: '',
      streetNumber: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      paymentMethod: '',
    }
  })

  function setNewValuesForm(data: IForm) {
    setForm({
      ...data,
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(form)

    localStorage.setItem('@ignite-coffee-delivery:form-1.0.0', stateJSON)
  }, [form])

  return (
    <FormContext.Provider
      value={{
        form,
        setNewValuesForm,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
