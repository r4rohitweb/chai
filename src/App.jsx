import { useSiteAnimations } from './hooks/useSiteAnimations.js';
import { BagProvider } from './state/BagContext.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import Brewing from './components/Brewing.jsx';
import Serving from './components/Serving.jsx';
import Table from './components/Table.jsx';
import HouseRules from './components/HouseRules.jsx';
import Counter from './components/Counter.jsx';
import Kitchen from './components/Kitchen.jsx';
import DunkTest from './components/DunkTest.jsx';
import Visit from './components/Visit.jsx';
import Regulars from './components/Regulars.jsx';
import ClosingBanner from './components/ClosingBanner.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Dialogs from './components/Dialogs.jsx';

export default function App() {
  useSiteAnimations();
  return <BagProvider>
    <SiteHeader />
    <main>
      <Hero />
      <Brewing />
      <Serving />
      <Table />
      <HouseRules />
      <Counter />
      <Kitchen />
      <DunkTest />
      <Visit />
      <Regulars />
      <ClosingBanner />
    </main>
    <SiteFooter />
    <Dialogs />
  </BagProvider>;
}
