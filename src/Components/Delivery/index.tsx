import { DeliveryButton, DeliveryContainer, Overlay, Sidebar, DeliveryTitle, DeliveryText, CartButton, CheckContainer, CheckText, CheckTitle } from "./index.ts"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store/index.ts"
import { closeDelivery, openDelivery } from "../../store/reducer/delivery.ts"
import { Input } from "../../Styles/index.ts"
import { clear, open } from "../../store/reducer/cart.ts"
import { closeCheck, openCheck } from "../../store/reducer/checkout.ts"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useDeliveryMutation } from "../../services/api.ts"
import { useEffect } from "react"

const Delivery = () => {
    const {DeliveryIsOpen } = useSelector((state: RootReducer) => state.delivery)
    const {checkIsOpen } = useSelector((state: RootReducer) => state.checkout)
    const {total } = useSelector((state: RootReducer) => state.checkout)
    const {items } = useSelector((state: RootReducer) => state.cart)
    const [delivery, {data, isSuccess }] = useDeliveryMutation()

    const totalOrder = items.reduce((sum, item) => {
        return (sum + item.price );
    }, 0);

    const form = useFormik({
        initialValues: {
            name: '',
            adress: '',
            city: '',
            cep: '',
            adressNumber: '',
            complement: '',
            cardName: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4, 'Digite seu nome completo').required('O campo é obrigatório'),
            adress: Yup.string().min(4, 'Digite seu endereço completo').required('O campo é obrigatório'),
            city: Yup.string().required('O campo é obrigatório'),
            cep: Yup.string().min(9, 'Erro: CEP inválido').max(9, 'Erro: CEP inválido').required('O campo é obrigatório'),
            adressNumber: Yup.string().required('O campo é obrigatório'),
            complement: Yup.string(),
            cardName: Yup.string().min(4, 'Digite seu nome completo').required('O campo é obrigatório'),
            cardNumber: Yup.string().min(16, 'Erro: Número inválido').max(16, 'Erro: Número inválido'),
            cardCode: Yup.string().min(3, 'Erro: CVV inválido').max(3, 'Erro: CVV inválido').required('O campo é obrigatório'),
            expiresMonth: Yup.string().min(2, 'Digite o mês em forma numérica').max(2, 'Digite o mês em forma numérica').required('O campo é obrigatório'),
            expiresYear: Yup.string().min(4, 'Digite o ano completo').max(4, 'Erro: Ano inválido').required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            delivery({
                products: {
                    id: 1,
                    price: totalOrder
                },
                delivery: {
                    receiver: values.name,
                    adress: {
                        description: values.adress,
                        city: values.city,
                        zipCode: values.cep,
                        number: Number(values.adressNumber),
                        complement: values.complement,
                    }
                },
                payment: {
                    card: {
                        name: values.cardName,
                        number: values.cardNumber,
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        },
                        code: Number(values.cardCode)
                    },
                }
            })
        }
    })

    const dispatch = useDispatch()

    const closeDel = () => {
        dispatch(closeDelivery())
    }

    const openCart = () => {
        dispatch(open())
    }

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

    return(
        <DeliveryContainer className={DeliveryIsOpen ? 'is-open' : ''}>
            <Overlay onClick={() => (closeDel(), closeCheckout())}></Overlay>
            <Sidebar>
            <form onSubmit={form.handleSubmit}>
                {checkIsOpen ? (
                    <>
                        <CheckContainer className={checkIsOpen ? 'is-open' : ''}>
                            <Overlay onClick={() => closeCheckout()}></Overlay>
                            <Sidebar>
                            {isSuccess ? (
                            <>
                            <div>
                                <CheckTitle>Pedido realizado - {data && data.orderId}</CheckTitle>
                                <CheckText>Estamos felizes em informar que seu Pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</CheckText>
                                <CheckText>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </CheckText>
                                <CheckText>Lembre-se da importância de higienizar as mãos após o recebimento do Pedido, garantindo assim sua segurança e bem-estar durante a refeição. </CheckText>
                                <CheckText>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</CheckText>
                            </div>
                            </>
                            ) : (
                            <>
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
                                <CartButton type="submit" onClick={() => (closeCheckout(), closeDelivery())}>Finalizar pagamento</CartButton>
                                <CartButton type="button" onClick={() => {closeCheckout(), OpenDelivery()}}>Voltar para a edição de endereço</CartButton>
                            </>
                            )}
                            </Sidebar>
                        </CheckContainer>
                        </>
                ) : (
                    <>
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
                    <DeliveryButton type="button" onClick={() => {dispatch(openCheck())}}>Continar com o pagamento</DeliveryButton>
                    <DeliveryButton type="button" onClick={() => {closeDel(), openCart()}}>Voltar para o carrinho</DeliveryButton>
                    </>
                )}
            </form>
            </Sidebar>
        </DeliveryContainer>
    )
}


export default Delivery