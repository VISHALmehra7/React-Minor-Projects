import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Random from "./components/randomColor/Random";
import Starrating from "./components/starRating/Starrating";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMore from "./components/LoadMoreButton/LoadMore";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";
import QRCodeGenerator from "./components/QR Code/QRCodeGenerator";
import LightDarkMode from "./components/Light and Dark Mode/LightDarkMode";
import ScrollIndicator from "./components/Scroll Indicator/ScrollIndicator";
import MainTab from "./components/Tabs/MainTab";
import Practice from "./components/Practice/Practice";
// import Test from "./components/Modal/Test";
import GithubProfileFinder from "./components/Github-Profile-Finder/GithubProfileFinder";
import SearchAutoCompete from "./components/Search-AutoComplete/SearchAutoCompete";
import TicTacToe from "./components/Tic-tac-toe/TicTacToe";
import FeatureFlagsGlobalState from "./components/FeatureFlag/context";
import FeatureFlag from "./components/FeatureFlag/FeatureFlag";
import UseFetchHookTest from "./components/UseFetch/UseFetchHookTest";
import UseOutsideClickTest from "./components/UseOutsideClick/UseOutsideClickTest";
import UseWindowResizeTest from "./components/UseWindowResize/UseWindowResizeTest";
import ScrollToTopAndBottom from "./components/ScrollToTopAndBottom/ScrollToTopAndBottom";
import ScrollToSection from "./components/ScrollToSection/ScrollToSection";
function App() {

  return (
    <>
      <Practice/>
      {/* <Accordion/> */}
      {/* <Random/> */}
      {/* <Starrating/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={3} /> */}
      {/* <LoadMore/> */}
      {/* <TreeView menus = {menus}/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url ={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <MainTab/> */}
      {/* <Test /> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAutoCompete/> */}
      {/* <TicTacToe/> */}
      {/* <FeatureFlagsGlobalState>
        <FeatureFlag/>
      </FeatureFlagsGlobalState> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOutsideClickTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndBottom /> */}
      {/* <ScrollToSection/> */}
    </>
  );
}

export default App;
