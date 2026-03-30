type Choice = {
        label: string
        image: string
}

export type Card = {
    id: number
    image: string
    name: string
    category: string
    slug?: string
    width?: string
    question?: string
    choices?: Choice[]
}

const cards: Card[] = [
    {
        id: 1,
        image:"../../../public/images/perfil_adesivos.png",
        name: "Adesivos",
        slug: "adesivos",
        category: "Impressão Digital",
        width: "130px",
        question: "Qual tipo de adesivo?",
        choices: [
            { label: "Adesivo por folha", image:"./../../public/images/adesivo_folha.png" },
            { label: "Adesivo por metro²", image:"./../../public/images/adesivo_metro_impresso.jpg" }
        ]
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
    },
      {
        id: 4,
        image:"../../../public/images/perfil_banner.png",
        name: "Banner / Lona",
        category: "Impressão Digital",
    },
    {
        id: 5,
        image:"./../../public/images/perfil_blocos.png",
        name: "Blocos",
        category: "Impressão Digital"
    },
    {
        id:6,
        image:"./../../public/images/perfil_bolsas_mochilas.png",
        name: "Bolsas / Mochilas",
        category: "Estamparia",
        width: "100px"
    },
    {
        id: 7,
        image:"../../../public/images/perfil_bone.png",
        name: "Boné",
        category: "Estamparia",
    },
    {
        id: 8,
        image:"./../../public/images/perfil_calendario.png",
        name: "Calendários",
        category: "Impressão Digital"
    },
    {
        id:9,
        image:"./../../public/images/perfil_canecas.png",
        name: "Canecas",
        category: "Estamparia",
        width: "180px"
    },
      {
        id: 10,
        image:"../../../public/images/perfil_canetas.png",
        name: "Canetas",
        category: "Estamparia",
    },
    {
        id: 11,
        image:"./../../public/images/perfil_cardapio.png",
        name: "Cardápios",
        category: "Impressão Digital"
    },
    {
        id:12,
        image:"./../../public/images/perfil_cartao_visita.png",
        name: "Cartão de Visitas",
        category: "Impressão Digital"
    },
    {
        id: 13,
        image:"../../../public/images/perfil_chaveiro.png",
        name: "Chaveiros",
        category: "Estamparia",
        width: "130px"
    },
    {
        id: 14,
        image:"./../../public/images/perfil_comandas.png",
        name: "Comandas",
        category: "Impressão Digital"
    },
    {
        id: 15,
        image:"./../../public/images/perfil_copo_termico.png",
        name: "Copos Térmicos",
        category: "Estamparia",
        width: "90px"
    },
      {
        id: 16,
        image:"../../../public/images/perfil_cracha.png",
        name: "Crachá",
        category: "Impressão Digital",
        width: "180px"
    },
    {
        id: 17,
        image:"./../../public/images/perfil_display.png",
        name: "Display",
        category: "Impressão Digital"
    },
    {
        id: 18,
        image:"./../../public/images/perfil_envelope.png",
        name: "Envelopes",
        category: "Impressão Digital"
    },
    {
        id: 19,
        image:"../../../public/images/perfil_fast_food.png",
        name: "Embalagem Fast Food",
        category: "Impressão Digital",
        width: "200px"
    },
    {
        id: 20,
        image:"./../../public/images/perfil_garrafas.png",
        name: "Garrafas",
        category: "Estamparia"
    },
    {
        id: 21,
        image:"./../../public/images/perfil_imas.png",
        name: "Imãs",
        category: "Impressão Digital"
    },
      {
        id: 22,
        image:"../../../public/images/perfil_jogo_americano.png",
        name: "Jogo Americano",
        category: "Impressão Digital",
    },
    {
        id: 23,
        image:"./../../public/images/perfil_marcador_paginas.png",
        name: "Marcador de Páginas",
        category: "Impressão Digital"
    },
    {
        id: 24,
        image:"./../../public/images/perfil_mouse_pad.png",
        name: "Mouse Pad",
        category: "Estamparia"
    },
       {
        id: 25,
        image:"../../../public/images/perfil_panfleto.png",
        name: "Panfletos",
        category: "Impressão Digital",
    },
    {
        id: 26,
        image:"./../../public/images/perfil_pasta.png",
        name: "Pastas",
        category: "Impressão Digital"
    },
    {
        id: 27,
        image:"./../../public/images/perfil_placa_sinalizacao.png",
        name: "Placa de Sinalização",
        category: "Impressão Digital"
    },
      {
        id: 28,
        image:"../../../public/images/perfil_plotagem.png",
        name: "Plotagem de Plantas",
        category: "Impressão Digital",
    },
    {
        id: 29,
        image:"./../../public/images/perfil_quadro.png",
        name: "Quadros",
        category: "Estamparia",
        width: "100px"
    },
    {
        id: 30,
        image:"./../../public/images/perfil_quebra_cabeca.png",
        name: "Quebra Cabeça",
        category: "Estamparia"
    },
    {
        id: 31,
        image:"../../../public/images/perfil_ventarola.png",
        name: "Ventarola",
        category: "Impressão Digital",
    },
    {
        id: 32,
        image:"./../../public/images/perfil_wind_banner.png",
        name: "Wind Banner",
        category: "Estamparia"
    },
]


export default cards