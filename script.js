// const img_contain = document.getElementById("img_contain");
// const images = [
//   {
//     name: "Fresh Flowers",
//     img: "./assets/images/card-item.jpg",
//     row: true,
//   },
//   {
//     name: "Dried Flowers",
//     img: "./assets/images/card-item-11.jpg",
//   },
//   {
//     name: "Live Plants ",
//     img: "./assets/images/card-item-12.jpg",
//     row: true,
//   },
//   {
//     name: "Aroma Candels",
//     img: "./assets/images/card-item-13.jpg",
//   },
//   {
//     name: "Fresheners ",
//     img: "./assets/images/card-item-11.jpg",
//     row: true,
//   },
// ];
// img_contain.innerHTML = images
//   .map((path) => {
//     return `
//     <div class="grid grid-cols-2 w-full items-center   gap-[1px] bg-customBlack border-b-[1px] border-l-[1px] border-solid border-customBlack">
//       <div class="flex items-center bg-white justify-center h-full relative ">
//         <h3 class="text-[38px] text-[#121212] leading-[45.6px] font-medium">
//         ${path.name}
//         </h3>
//         <a href="" class="flex gap-[7px] items-center  ${path.row ? "" :"flex-row-reverse"} font-semibold text-[16px] leading-[19.2px] text-[#121212] absolute bottom-6 left-2/4 -translate-x-2/4">
//           Shop now
//           <img class=" ${path.row ? "" :"rotate-180"}" src="./assets/svg/arrow-right.svg" alt="right">
//         </a>
//       </div>
//       <img class="${
//         path.row === true ? "" : "row-start-1"
//       } w-full" src="${path.img}" alt="" />
//   </div>
//   `;
//   })
//   .join("");