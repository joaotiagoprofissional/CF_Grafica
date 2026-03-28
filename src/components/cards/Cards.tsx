type Card = {
    id: number
    image: string
    name: string
    category: string
}

const cards: Card[] = [
    {
        id: 1,
        image:"../../../public/images/perfil_adesivos.png",
        name: "Adesivos",
        category: "Impressão Digital",
    },
    {
        id: 2,
        image:"./../../public/images/perfil_agendas_apostilas.png",
        name: "Agendas / Apostilas",
        category: "Impressão Digital"
    },
    {
        id:3,
        image:"./../../public/images/perfil_azulejo.png",
        name: "Azulejo",
        category: "Estamparia"
    }
]

export default cards