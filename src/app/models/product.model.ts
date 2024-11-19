export interface Product{
    /*id: number,
    name: string,
    description: string,
    price: number,*/


    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating

}

interface Rating{
    rate: number,
    count: number
}