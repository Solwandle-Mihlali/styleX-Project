import "./App.css";
import styleX from "@stylexjs/stylex";
import { podcastArt } from "./images/images";

//styles
const styles = styleX.create({
  container: {
    width: "100%",
    minHeight: "100vh",
    boxShadow: "3px 3px 10px grey",
    background: {
      default: "#4c69c2",
      "@media screen and (min-width : 320px) and (max-width: 1024px)":
        "#38c76c",
    },
    display: "flex",
    flexDirection: {
      default: "row",
      "@media screen and (min-width : 320px) and (max-width: 1024px)": "column",
    },
    alignItems: "center",
    justifyContent: "center",
    gap: {
      default: "2%",
      "@media screen and (min-width : 320px) and (max-width: 1024px)": "0.6rem",
    },
    padding: 0,
    margin: 0,
  },
  card: {
    width: {
      default: "30%",
      "@media screen and (min-width : 320px) and (max-width: 1024px)": "80%",
    },
    minHeight: {
      default: "70vh",
      "@media screen and (min-width : 320px) and (max-width: 1024px)": "50vh",
    },
    marginBottom: {
      default: 0,
      "@media screen and (min-width : 320px) and (max-width: 720px)": "2rem",
    },
    boxShadow: {
      default: "3px 3px 10px grey",
      "@media screen and (min-width : 320px) and (max-width: 1024px)":
        "1px 1px 7px black",
    },
    background: {
      default: "#e8e8e6",
      ":hover": "red",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    borderRadius: "20px",
  },
  cardImg: {
    width: {
      default: "80%",
      "@media screen and (min-width : 320px) and (max-width: 1024px)": "50%",
    },
    marginTop: "0rem",
  },
});

//objects

const podcastData = [
  {
    title: "podcast and chill",
    host: "Mac G",
    img: podcastArt.macGArt,
  },
  {
    title: "podcast and chill",
    host: "Mac G",
    img: podcastArt.macGArt,
  },
  {
    title: "podcast and chill",
    host: "Mac G",
    img: podcastArt.macGArt,
  },
];
function App() {
  return (
    <div {...styleX.props(styles.container)}>
      {podcastData?.map((value, index) => {
        return (
          <div key={index} {...styleX.props(styles.card)}>
            <img src={value.img} alt="img" {...styleX.props(styles.cardImg)} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
