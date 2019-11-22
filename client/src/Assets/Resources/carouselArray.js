import myImages from "./myImages";

let items = Object.entries(myImages.cities);
let quadrupleCarouselItems = [];
for (let i = 0; i < items.length; i++) {
  if (i != 0 && i % 4 == 0) {
    quadrupleCarouselItems.push(items.slice(i - 4, i));
  }
}

export default quadrupleCarouselItems;
