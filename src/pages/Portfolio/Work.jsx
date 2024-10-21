import Portfolio_Hero from "./components/Portfolio_Hero";
import First_Slider from "./components/First_Slider";
import Portfolio_Section from "./components/Portfolio_Section";
import "./components/Portfolio_Hero.css";
import Second_Slider from "./components/Second_Slider";
import Technologies from "./components/Technologies";
import Portfolio_Get_A_Service from "./components/Portfolio_Get_A_Service";

export default function Work({ info }) {
  return (
    <div className="space-y-11 lg:space-y-20 lg:mt-20 mt-14">
      <Portfolio_Hero info={info} />
      <First_Slider info={info} />
      <Portfolio_Section info={info} />
      <Second_Slider info={info} />
      <Technologies info={info} />
      <Portfolio_Get_A_Service />
    </div>
  );
}
