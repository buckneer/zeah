import Item from "../item/item.type";


export default interface User {
    _id: string | null,
    email: string,
    name: string,
    zeahCoins: number,
    items: Item[]
}


export interface AddCoinsRequest {
    quantity: number
}
