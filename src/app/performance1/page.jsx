import Hero from "../../components/hero"
import performanceImg from '../../../public/img/performance.jpg' 

export default function Performance() {
    return (
      <Hero imgData={performanceImg} imgAlt='car factory' title= 'Hello World' />
    );
  }