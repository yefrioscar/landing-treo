import media1 from "../../public/assets/banner-1.png";
import media2 from "../../public/assets/banner-1.png";

export const media = [media1, media2];
export const mediaByIndex = index => media[index % media.length].src;