import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { useDeliveryMutation } from '../../services/api'

import * as S from './index.ts'
import { close, remove, clear } from '../../store/reducer/cart'
import { RootReducer } from '../../store'

const Cart = () => {
    const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO1bu27UQBQdEhCQHvgA+AAiPiBtgF3icy1LBCKlSwnZbCQa0LqkAAoQEgkSAUIB+Q56oOUpBQpAPESazcwWg8ZrzGQVInv8xnOkW47vw/dxrLlmLEf0Pe+EAJYFcMVQltUzWF0hiN4KIplKgNesrhDAm0YHoD8sgWuc6LqJCKKrfcc5XrYfFhZNh2y1JraBc4JoKcVIK0o6ylZlc3rHGdsniLqc6Gfqbl6wBDYDHeVDGueflO1IBmN03SgIgqg78qB3AlgxHWlFibJRAO9HbF9M9vZbrYmRtH8g5+cPsZpA2SqANa0cfkjPOxz7AdtEbf3N18n5kSBEmTAAzsY+LNQHzN/o3WM1hSBa1bJ4yaz+gRVWUwii+1oAus0uAcdpmTdBYK1OQQidf6iV8bfExEgAnZFRoqK5WgGmt7cM6/5DqjEYESFgvXQik14eyV5vjJlADoOwqOZoBRxJJBz4LoBLxlRYhyIRqomosiib6f1TgOc7iFsS4vM/gAO+9vZ91jRwGwDkmwGy1xvjrjunJJPGUrcM4K47pym4yBoXAFS7yVQyANKwbEzOVTIA3LBsTM5VMwAwM6pIXbFhAwCbAb4tAbI9QNomSHYKSDsGYXmAnxd3KJpzxIblAbA8wLc8gCwPkJYHkOUB0vIAWB7g58UdiuYcsWF5ACwP8C0PoAbzAKFtjnHgRgXvBW4arcTFBXfd2UgB8DTOGXWroxzgRBcS3QwZnBNEG1rQzrOsIRznVKSA6LPx3k0OkJ43zoGvkX2uO5m9EhbsC336o2TgOKdZRaDWYLX038zt+p4T3dIUvZBTU/tZyZALCwcE8CppfzJT5nlHOPBLK4XbrGRworuaPVuy3T6Wq0KhfpvZuY52p4xMUG9edz6Uy/krZrv+SfJyQHRGNaPc9XveeFDzWtqHk+lx3rojyOnpg7v9TsOJvgjgWdArMl6BDfvPht7tdeeVTaxIyOFUUIuTW2k2OtNI2I/yT/u9IIGjIQv7WKDzm6rbq6bMqgKp2JvrTgaMMYeV2uCZrjvLZ2ZOZjnnfwNKZOgX6SQxPAAAAABJRU5ErkJggg=="

    const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }
    const getTotalPrice = () => {
        return items.reduce((sum, value) => {
            return (sum += value.price)
        }, 0)
    }

    const [purchase, { data, isSuccess }] = useDeliveryMutation()
    const [cart, setCart] = useState(true)
    const [deliveryData, setDeliveryData] = useState(false)
    const [paymentData, setPaymentData] = useState(false)
    const [checkout, setCheckout] = useState(false)
    const navigate = useNavigate()


    const goToDelivery = () => {
        setCart(false)
        setPaymentData(false)
        setDeliveryData(true)
    }

    const goToPayment = () => {
        if (
            !form.errors.fullName &&
            !form.errors.address &&
            !form.errors.city &&
            !form.errors.zipCode &&
            !form.errors.number
        ) {
            setPaymentData(true)
            setDeliveryData(false)
        }
    }

    const backToCart = () => {
        setCart(true)
        setPaymentData(false)
        setDeliveryData(false)
        setCheckout(false)
    }

    const goToCheckout = () => {
        if (
            !form.errors.cardOwner &&
            !form.errors.cardNumber &&
            !form.errors.cardCode &&
            !form.errors.expiresMonth &&
            !form.errors.expiresYear
        ) {
            setPaymentData(false)
            setCheckout(true)
        }
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            address: '',
            city: '',
            zipCode: '',
            number: '',
            reference: '',
            cardOwner: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(3, 'o nome precisa ter mais de 3 caracteres')
                .required('este campo é obrigatório'),
            address: Yup.string().required('este campo é obrigatório'),
            city: Yup.string().required('este campo é obrigatório'),
            zipCode: Yup.string().required('este campo é obrigatório'),
            number: Yup.number()
                .min(3, 'o nome precisa ter mais de 3 caracteres')
                .required('este campo é obrigatório.'),
            cardOwner: Yup.string()
                .min(3, 'o nome precisa ter mais de 3 caracteres')
                .required('O campo é obrigatório'),
            cardNumber: Yup.string().required('O campo é obrigatório'),
            cardCode: Yup.string().required('O campo é obrigatório'),
            expiresMonth: Yup.number().required('O campo é obrigatório'),
            expiresYear: Yup.number().required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            purchase({
                products: {
                    id: 1,
                    price: getTotalPrice()
                },
                delivery: {
                    receiver: values.fullName,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.zipCode,
                        number: Number(values.number),
                        complement: values.reference,
                    }
                },
                payment: {
                    card: {
                        name: values.cardOwner,
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

    const sucessPayment = () => {
        dispatch(close())
        dispatch(clear())
        backToCart()
        navigate('/')
    }

    const hasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid
        return hasError
    }

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isInvalid && isTouched
        if (hasError) return message
        else return ''
    }

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={() => dispatch(close())} />
            <S.SideBar isvisible={cart}>
                {items.length < 1 ? (
                    <p className="emptyCart">
                        O carrinho está vazio, adicione produtos para continuar com a compra.
                    </p>
                ) : (
                    <>
                        <ul>
                            {items.map((item) => (
                                <S.Order key={item.id}>
                                    <div className="flex">
                                        <img className="profile" src={item.photo} alt="" />
                                        <div className="text-content">
                                            <S.Title>{item.name}</S.Title>
                                            <p>{formatPrice(item.price)}</p>
                                        </div>
                                        <S.Icon onClick={() => removeItem(item.id)} className="icon" src={icon}/>
                                    </div>
                                </S.Order>
                            ))}
                        </ul>
                        <S.CartDescription>
                            <p>Valor total</p> <span>{formatPrice(getTotalPrice())}</span>
                            <S.CartButton className="" onClick={goToDelivery}>
                                Continuar com a entrega
                            </S.CartButton>
                        </S.CartDescription>
                    </>
                )}
            </S.SideBar>
            <S.SideBar isvisible={deliveryData}>
                <S.Form onSubmit={form.handleSubmit}>
                    <S.Title>Entrega</S.Title>
                    <S.InputGroup>
                        <label htmlFor="fullName">Quem irá receber</label>
                        <input
                            id="fullName"
                            type="text"
                            onChange={form.handleChange}
                            name="fullName"
                            onBlur={form.handleBlur}
                            className={hasError('fullName') ? 'error' : ''}
                        />
                        <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
                    </S.InputGroup>
                    <S.InputGroup>
                        <label htmlFor="address">Endereço</label>
                        <input
                            id="address"
                            type="text"
                            onChange={form.handleChange}
                            name="address"
                            onBlur={form.handleBlur}
                            className={hasError('address') ? 'error' : ''}
                        />
                        <small>{getErrorMessage('address', form.errors.address)}</small>
                    </S.InputGroup>
                    <S.InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input
                            id="city"
                            type="text"
                            onChange={form.handleChange}
                            name="city"
                            onBlur={form.handleBlur}
                            className={hasError('city') ? 'error' : ''}
                        />
                        <small>{getErrorMessage('city', form.errors.city)}</small>
                    </S.InputGroup>
                    <S.InputGrouping>
                        <S.InputGroup>
                            <label htmlFor="zipCode">CEP</label>
                            <InputMask
                                mask="99999-999"
                                id="zipCode"
                                type="text"
                                onChange={form.handleChange}
                                name="zipCode"
                                onBlur={form.handleBlur}
                                className={hasError('zipCode') ? 'error' : ''}
                            />
                            <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
                        </S.InputGroup>
                        <S.InputGroup>
                            <label htmlFor="number">Número</label>
                            <input
                                id="number"
                                type="text"
                                onChange={form.handleChange}
                                name="number"
                                onBlur={form.handleBlur}
                                className={hasError('number') ? 'error' : ''}
                            />
                            <small>{getErrorMessage('number', form.errors.number)}</small>
                        </S.InputGroup>
                    </S.InputGrouping>
                    <S.InputGroup className="magin-bottom">
                        <label htmlFor="reference">Complemento (opcional)</label>
                        <input
                            id="reference"
                            type="text"
                            onChange={form.handleChange}
                            name="reference"
                            onBlur={form.handleBlur}
                            className={hasError('reference') ? 'error' : ''}
                        />
                        <small>{getErrorMessage('reference', form.errors.reference)}</small>
                    </S.InputGroup>
                    <S.CartButton className="" type="button" onClick={goToPayment}>
                        Continuar com o pagamento
                    </S.CartButton>
                    <S.CartButton className="" type="button" onClick={backToCart}>
                        Voltar para o carrinho
                    </S.CartButton>
                </S.Form>
            </S.SideBar>
            <S.SideBar isvisible={paymentData}>
                <S.Form onSubmit={form.handleSubmit}>
                    <S.Title>
                        Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                    </S.Title>
                    <S.InputGroup>
                        <label htmlFor="cardOwner">Nome do cartão</label>
                        <input
                            id="cardOwner"
                            type="text"
                            onChange={form.handleChange}
                            name="cardOwner"
                            onBlur={form.handleBlur}
                            className={hasError('cardOwner') ? 'error' : ''}
                        />
                        <small>{getErrorMessage('cardOwner', form.errors.cardOwner)}</small>
                    </S.InputGroup>
                    <S.InputGrouping>
                        <S.InputGroup>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <InputMask
                                mask="9999 9999 9999 9999"
                                id="cardNumber"
                                type="text"
                                onChange={form.handleChange}
                                name="cardNumber"
                                onBlur={form.handleBlur}
                                className={hasError('cardNumber') ? 'error' : ''}
                            />
                            <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
                        </S.InputGroup>
                        <S.InputGroup maxwidth="86px">
                            <label htmlFor="cardCode">CVV</label>
                            <InputMask
                                mask="999"
                                id="cardCode"
                                type="text"
                                onChange={form.handleChange}
                                name="cardCode"
                                onBlur={form.handleBlur}
                                className={hasError('cardCode') ? 'error' : ''}
                            />
                            <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
                        </S.InputGroup>
                    </S.InputGrouping>
                    <S.InputGrouping>
                        <S.InputGroup>
                            <label htmlFor="expiresMonth">Mês de vencimento</label>
                            <InputMask
                                mask="99"
                                id="expiresMonth"
                                type="text"
                                onChange={form.handleChange}
                                name="expiresMonth"
                                onBlur={form.handleBlur}
                                className={hasError('expiresMonth') ? 'error' : ''}
                            />
                            <small>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</small>
                        </S.InputGroup>
                        <S.InputGroup className="magin-bottom">
                            <label htmlFor="expiresYear">Ano de vencimento</label>
                            <InputMask
                                mask="99"
                                id="expiresYear"
                                type="text"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                name="expiresYear"
                                className={hasError('expiresYear') ? 'error' : ''}
                            />
                            <small>{getErrorMessage('expiresYear', form.errors.expiresYear)}</small>
                        </S.InputGroup>
                    </S.InputGrouping>
                    <S.CartButton className="" type="submit" onClick={goToCheckout}>
                        Finalizar pagamento
                    </S.CartButton>
                    <S.CartButton className="" type="button" onClick={goToDelivery}>
                        Voltar para a edição de endereço
                    </S.CartButton>
                </S.Form>
            </S.SideBar>
            {isSuccess && data ? (
                <S.SideBar isvisible={checkout}>
                    <S.Title>Pedido realizado - {data.orderId} </S.Title>
                    <S.MessageContainer>
                        <p>
                            Estamos felizes em informar que seu pedido já está em processo de
                            preparação e, em breve, será entregue no endereço fornecido.
                        </p>
                        <p>
                            Gostaríamos de ressaltar que nossos entregadores não estão
                            autorizados a realizar cobranças extras.
                        </p>
                        <p>
                            Lembre-se da importância de higienizar as mãos após o recebimento
                            do pedido, garantindo assim sua segurança e bem-estar durante a
                            refeição.
                        </p>
                        <p>
                            Esperamos que desfrute de uma deliciosa e agradável experiência
                            gastronômica. Bom apetite!
                        </p>
                        <S.CartButton className="" type="button" onClick={sucessPayment}>
                            Concluir
                        </S.CartButton>
                    </S.MessageContainer>
                </S.SideBar>
            ) : (
                <S.SideBar isvisible={checkout}>
                    <S.Title> Erro na transação</S.Title>
                    <p>Verifique os dados do cartão</p>
                    <S.CartButton className="" type="button" onClick={backToCart}>
                        Voltar para o carrinho
                    </S.CartButton>
                </S.SideBar>
            )}
        </S.CartContainer>
    )
}
export default Cart