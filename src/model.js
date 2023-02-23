import image from "./assets/3.jpg";
import {
  TextBlock,
  ColumnsBlock,
  ImageBlock,
  TitleBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Constructor web on pure JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "green",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),

  new ImageBlock(image, {
    styles: {
      background: "green",
      color: "black",
      width: "200px",
      height: "200px",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "This is image",
  }),

  new ColumnsBlock(["Application on pure JS, without using Libraries"], {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),

  new TextBlock("text", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weigth": "bold",
    },
  }),
];
