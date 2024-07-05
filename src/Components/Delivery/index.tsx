import { DeliveryButton, DeliveryContainer, Overlay, Sidebar, DeliveryTitle, DeliveryText } from "./index.ts"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store/index.ts"
import { closeDelivery } from "../../store/reducer/delivery.ts"
import { Input } from "../../Styles/index.ts"
import { open } from "../../store/reducer/cart.ts"
import { openCheck } from "../../store/reducer/checkout.ts"
import { useFormik } from "formik"
import * as Yup from "yup"
import { usePurchaseMutation } from "../../services/api.ts"

const Delivery = () => {
    const {DeliveryIsOpen } = useSelector((state: RootReducer) => state.delivery)
    const [purchase] = usePurchaseMutation()

    const form = useFormik({
        initialValues: {
            name: '',
            adress: '',
            city: '',
            cep: '',
            adressNumber: '',
            complement: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4, 'Digite seu nome completo').required('O campo é obrigatório'),
            adress: Yup.string().min(4, 'Digite seu endereço completo').required('O campo é obrigatório'),
            city: Yup.string().required('O campo é obrigatório'),
            cep: Yup.string().min(14, 'Erro: CEP inválido').max(14, 'Erro: CEP inválido').required('O campo é obrigatório'),
            adressNumber: Yup.string().required('O campo é obrigatório'),
            complement: Yup.string(),

        }),
        onSubmit: (values) => {
            purchase({
                billing: {
                    name: values.name
                },
                delivery: {
                    adress: values.adress,
                    city: values.city,
                    cep: values.cep,
                    adressNumber: values.adressNumber,
                    complement: values.complement
                },
                order: []
            })
        }
    })

    const dispatch = useDispatch()

    const closeDeliveryout = () => {
        dispatch(closeDelivery())
    }

    const openCart = () => {
        dispatch(open())
    }

    const OpenCheck = () => {
        dispatch(openCheck())
    }

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isInvalid && isTouched
        if (hasError) return message
        else return ''
    }

    const inputHasErrorMessage = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isInvalid && isTouched
        return hasError
    }

    return(
        <DeliveryContainer className={DeliveryIsOpen ? 'is-open' : ''}>
            <Overlay onClick={() => closeDeliveryout()}></Overlay>
            <Sidebar>
                <form onSubmit={form.handleSubmit}>
                    <DeliveryTitle>Entrega</DeliveryTitle>
                    <label><DeliveryText>Quem irá receber</DeliveryText></label>
                    <Input className={inputHasErrorMessage('name') ? 'error' : ''} onChange={form.handleChange} onBlur={form.handleBlur} id="name" type="text" name="name" value={form.values.name}/>
                    <small>{getErrorMessage('name', form.errors.name)}</small>
                    <label><DeliveryText>Endereço</DeliveryText></label>
                    <Input className={inputHasErrorMessage('adress') ? 'error' : ''} onChange={form.handleChange} onBlur={form.handleBlur} id="adress" type="text" name="adress" value={form.values.adress}/>
                    <small>{getErrorMessage('adress', form.errors.adress)}</small>
                    <label><DeliveryText>Cidade</DeliveryText></label>
                    <Input className={inputHasErrorMessage('city') ? 'error' : ''} onChange={form.handleChange} onBlur={form.handleBlur} id="city" type="text" name="city" value={form.values.city}/>
                    <small>{getErrorMessage('city', form.errors.city)}</small>
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "35px"}}>
                        <div>
                            <label><DeliveryText>CEP</DeliveryText></label>
                            <Input className={getErrorMessage('cep') ? 'error' : ''} onChange={form.handleChange} onBlur={form.handleBlur} id="cep" type="text" name="cep" value={form.values.cep}/>
                            <small>{getErrorMessage('cep', form.errors.cep)}</small>
                        </div>
                        <div>
                            <label><DeliveryText>Número</DeliveryText></label>
                            <Input className={inputHasErrorMessage('adressNumber') ? 'error' : ''} onChange={form.handleChange} onBlur={form.handleBlur} id="adressNumber" type="text" name="adressNumber" value={form.values.adressNumber}/>
                            <small>{getErrorMessage('adressNumber', form.errors.adressNumber)}</small>
                        </div>
                    </div>
                    <label><DeliveryText>Complemento (opcional)</DeliveryText></label>
                    <Input className={inputHasErrorMessage('complement') ? 'error' : ''} onChange={form.handleChange} onBlur={form.handleBlur} style={{marginBottom: "24px"}} id="complement" type="text" name="complement" value={form.values.complement}/>
                    <small>{getErrorMessage('complement', form.errors.complement)}</small>
                <DeliveryButton type="submit" onClick={() => {OpenCheck(), closeDeliveryout()}}>Continar com o pagamento</DeliveryButton>
                <DeliveryButton onClick={() => {closeDeliveryout(), openCart()}}>Voltar para o carrinho</DeliveryButton>
                </form>
            </Sidebar>
        </DeliveryContainer>
    )
}


export default Delivery