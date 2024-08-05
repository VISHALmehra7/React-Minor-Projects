import { useContext } from "react";
import LightDarkMode from "../Light and Dark Mode/LightDarkMode";
import TicTacToe from "../Tic-tac-toe/TicTacToe";
import { FeatureFlagsContext } from "./context";
import Random from "../randomColor/Random";
import Accordion from "../Accordion/Accordion";
import TreeView from "../TreeView/TreeView";
import menus from "../TreeView/data";
import Tabs from "../Tabs/Tabs";
import MainTab from "../Tabs/MainTab";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <Random/>,
    },
    {
      key: "showAccordian",
      component:<Accordion/> ,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
    {
        key : 'showTabs',
        component : <MainTab/>
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}