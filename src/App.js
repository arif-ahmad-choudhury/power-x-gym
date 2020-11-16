import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdvanceGym from './components/AdvanceGym/AdvanceGym';
import OurClasses from './components/OurClasses/OurClasses';
import PricingPlans from './components/PricingPlans/PricingPlans';
import YourGymMembership from './components/YourGymMembership/YourGymMembership';

function App() {
  return (
    <div className="App">
     <OurClasses></OurClasses>
     <AdvanceGym></AdvanceGym>
     <PricingPlans></PricingPlans>     
     <YourGymMembership></YourGymMembership>
    </div>
  );
}

export default App;
