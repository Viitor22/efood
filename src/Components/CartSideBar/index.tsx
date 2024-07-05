import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store/index.ts"

import { CartButton, CartContainer, Icon, Order, Overlay, Sidebar, CartTitle, Total } from "./index.ts"
import { Text } from "../../Styles/index.ts"

import { close, remove } from "../../store/reducer/cart.ts"
import { openDelivery } from "../../store/reducer/delivery.ts"
import { totalCheck } from "../../store/reducer/checkout.ts"

const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO1bu27UQBQdEhCQHvgA+AAiPiBtgF3icy1LBCKlSwnZbCQa0LqkAAoQEgkSAUIB+Q56oOUpBQpAPESazcwWg8ZrzGQVInv8xnOkW47vw/dxrLlmLEf0Pe+EAJYFcMVQltUzWF0hiN4KIplKgNesrhDAm0YHoD8sgWuc6LqJCKKrfcc5XrYfFhZNh2y1JraBc4JoKcVIK0o6ylZlc3rHGdsniLqc6Gfqbl6wBDYDHeVDGueflO1IBmN03SgIgqg78qB3AlgxHWlFibJRAO9HbF9M9vZbrYmRtH8g5+cPsZpA2SqANa0cfkjPOxz7AdtEbf3N18n5kSBEmTAAzsY+LNQHzN/o3WM1hSBa1bJ4yaz+gRVWUwii+1oAus0uAcdpmTdBYK1OQQidf6iV8bfExEgAnZFRoqK5WgGmt7cM6/5DqjEYESFgvXQik14eyV5vjJlADoOwqOZoBRxJJBz4LoBLxlRYhyIRqomosiib6f1TgOc7iFsS4vM/gAO+9vZ91jRwGwDkmwGy1xvjrjunJJPGUrcM4K47pym4yBoXAFS7yVQyANKwbEzOVTIA3LBsTM5VMwAwM6pIXbFhAwCbAb4tAbI9QNomSHYKSDsGYXmAnxd3KJpzxIblAbA8wLc8gCwPkJYHkOUB0vIAWB7g58UdiuYcsWF5ACwP8C0PoAbzAKFtjnHgRgXvBW4arcTFBXfd2UgB8DTOGXWroxzgRBcS3QwZnBNEG1rQzrOsIRznVKSA6LPx3k0OkJ43zoGvkX2uO5m9EhbsC336o2TgOKdZRaDWYLX038zt+p4T3dIUvZBTU/tZyZALCwcE8CppfzJT5nlHOPBLK4XbrGRworuaPVuy3T6Wq0KhfpvZuY52p4xMUG9edz6Uy/krZrv+SfJyQHRGNaPc9XveeFDzWtqHk+lx3rojyOnpg7v9TsOJvgjgWdArMl6BDfvPht7tdeeVTaxIyOFUUIuTW2k2OtNI2I/yT/u9IIGjIQv7WKDzm6rbq6bMqgKp2JvrTgaMMYeV2uCZrjvLZ2ZOZjnnfwNKZOgX6SQxPAAAAABJRU5ErkJggg=="

const CartSideBar = () => {
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()
    const getTotal = (total: string) => {
        dispatch(totalCheck(total))
    }

    const OpenDelivery = () => {
        dispatch(openDelivery())
    }

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((sum, value) => {
            return (sum += value.price)
        }, 0)
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
    }

    return(
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}></Overlay>
            <Sidebar>
                {items.length > 0 ? 
                (
                    <>
                        <ul>
                        {items.map((item) => (
                        <Order key={item.id}>
                            <div className="flex">
                                <img className="profile" src={item.photo} alt="" />
                                <div className="text-content">
                                    <CartTitle>{item.name}</CartTitle>
                                    <Text>{formatPrice(item.price)}</Text>
                                </div>
                                <Icon onClick={() => removeItem(item.id)} className="icon" src={icon}/>
                            </div>
                        </Order>
                        ))}
                        </ul>
                        <Total>
                            <Text>Valor total </Text>
                            <Text>{formatPrice(getTotalPrice())}</Text>
                        </Total>
                        <CartButton onClick={() => {if (items.length === 0) {closeCart()}else{OpenDelivery(); closeCart(); getTotal(formatPrice(getTotalPrice()))} }}>Continar com a entrega</CartButton>
                    </>
                ) : (
                    <>
                    <p className="empty-text">O carrinho está vazio, adicione produtos para continuar com a compra.</p>
                    </>
                )}
            </Sidebar>
        </CartContainer>
    )
}


export default CartSideBar