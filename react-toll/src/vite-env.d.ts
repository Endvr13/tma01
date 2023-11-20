/// <reference types="vite/client" />

type Toll = {
    id: number,
    toll_image: string,
    toll_vehicle: string,
    price_1: number,
    price_2: number,
    denomination_1: string,
    denomination_2: string,
    cost: number, // As decimal of denarius
};

type TollItemProps = {
    toll: Toll;
    onAddToCart (toll: Toll, isActive: boolean) : void;
    isActive: boolean;
    
}