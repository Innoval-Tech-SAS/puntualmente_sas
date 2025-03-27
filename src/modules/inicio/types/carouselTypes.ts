export interface CardData {
    imgSrc: string,
    textContent: string,
    alt?: string,
}

export default interface CarouselTypes {
    settings: {},
    cardData: CardData[],
}