import { MenuModel } from "./menu"

export type Restaurant = {
    id: string 
    title: string
    highlighted: boolean
    type: string
    grade: number
    description: string
    banner: string
    menu: MenuModel[]
}