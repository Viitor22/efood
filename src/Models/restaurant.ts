import { MenuModel } from "./menu"

export type Restaurant = {
    id: string 
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: MenuModel[]
}