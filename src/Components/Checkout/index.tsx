import { RootReducer } from "../../store/index.ts"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux"

import { closeCheck } from "../../store/reducer/checkout.ts"
import { openDelivery } from "../../store/reducer/delivery.ts"
import { clear } from "../../store/reducer/cart.ts"
import { usePaymentMutation } from "../../services/api.ts"
import { CartButton, CheckContainer, Overlay, Sidebar, CheckTitle, CheckText } from "./index.ts"
import { Input } from "../../Styles/index.ts"
import { useEffect } from "react"

const Checkout = () => {
    const {checkIsOpen } = useSelector((state: RootReducer) => state.checkout)
    const {total } = useSelector((state: RootReducer) => state.checkout)
    const [payment, {data, isSuccess }] = usePaymentMutation()

    const form = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: '',
        },
        validationSchema: Yup.object({
            cardName: Yup.string().min(4, 'Digite seu nome completo').required('O campo é obrigatório'),
            cardNumber: Yup.string().min(16, 'Erro: Número inválido').max(16, 'Erro: Número inválido'),
            cardCode: Yup.string().min(3, 'Erro: CVV inválido').max(3, 'Erro: CVV inválido').required('O campo é obrigatório'),
            expiresMonth: Yup.string().min(2, 'Digite o mês em forma numérica').max(2, 'Digite o mês em forma numérica').required('O campo é obrigatório'),
            expiresYear: Yup.string().min(4, 'Digite o ano completo').max(4, 'Erro: Ano inválido').required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            payment({
                payment: {
                    name: values.cardName,
                    number: values.cardNumber,
                    expires: {
                        month: values.expiresMonth,
                        year: values.expiresYear
                    },
                    code: values.cardCode
                },
            })
        }
    })

    const dispatch = useDispatch()
    const closeCheckout = () => {
        dispatch(closeCheck())
    }

    const OpenDelivery = () => {
        dispatch(openDelivery())
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

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

    if(!data){
        return
    }

    return(
        <>
            <CheckContainer className={checkIsOpen ? 'is-open' : ''}>
                <Overlay onClick={() => closeCheckout()}></Overlay>
                <Sidebar>
                {isSuccess ? (
                <form onSubmit={form.handleSubmit}>
                    <CheckTitle>Pagamento - Valor a pagar {total}</CheckTitle>
                        <label><CheckText>Nome no cartão</CheckText></label>
                        <Input className={inputHasErrorMessage('cardName') ? 'error' : ''}id="cardName" type="text" name="cardName" value={form.values.cardName} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
                        <label><CheckText>Número do cartão</CheckText></label>
                        <Input className={inputHasErrorMessage('cardNumber') ? 'error' : ''}onChange={form.handleChange} onBlur={form.handleBlur} id="cardNumber" type="text" name="cardNumber" value={form.values.cardNumber}/>
                        <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
                        <label><CheckText>CVV</CheckText></label>
                        <Input className={inputHasErrorMessage('cardCode') ? 'error' : ''}onChange={form.handleChange} onBlur={form.handleBlur} id="cardCode" type="text" name="cardCode" value={form.values.cardCode}/>
                        <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "35px", marginBottom: "16px"}}>
                            <div>
                                <label><CheckText>Mês de vencimento</CheckText></label>
                                <Input className={inputHasErrorMessage('expiresMonth') ? 'error' : ''}onChange={form.handleChange} onBlur={form.handleBlur} id="expiresMonth" type="text" name="expiresMonth" value={form.values.expiresMonth}/>
                                <small>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</small>
                            </div>
                            <div>
                                <label><CheckText>Ano de vencimento</CheckText></label>
                                <Input className={inputHasErrorMessage('expiresYear') ? 'error' : ''}onChange={form.handleChange} onBlur={form.handleBlur} id="expiresYear" type="text" name="expiresYear" value={form.values.expiresYear}/>
                                <small>{getErrorMessage('expiresYear', form.errors.expiresYear)}</small>
                            </div>
                        </div>
                    <CartButton onClick={() => {closeCheckout(), OpenDelivery()}}>Voltar para a edição de endereço</CartButton>
                    <CartButton type="submit">Finalizar pagamento</CartButton>
                </form>
                ) : (
                <>
                <div>
                    <CheckTitle>Pedido realizado - {data.orderId}</CheckTitle>
                    <CheckText>Estamos felizes em informar que seu Pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</CheckText>
                    <CheckText>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </CheckText>
                    <CheckText>Lembre-se da importância de higienizar as mãos após o recebimento do Pedido, garantindo assim sua segurança e bem-estar durante a refeição. </CheckText>
                    <CheckText>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</CheckText>
                </div>
                </>)}
                </Sidebar>
            </CheckContainer>
        </>
    )
}


export default Checkout