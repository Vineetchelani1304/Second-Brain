import Button from "./components/Button";
import { Share } from "./icons/share";
import { Plusicon } from "./icons/Plusicon";
import Card from "./components/Card";
const App: React.FC = () => {
  // const [bar, setBar] = useState(true);

  return (
    <div>
      <Button variant="primary" text="Add Content" startIcon={<Share/>}/>
      <Button variant="secondry" text="Share Brain" startIcon={<Plusicon/>} />

      <Card title="Add Content" type="youtube" link="https://www.youtube.com/watch?v=kyjg5kX4pT0&list=RDkyjg5kX4pT0&start_radio=1"/>
      <Card title="Add Content" type="twitter" link="https://x.com/gunsnrosesgirl3/status/1867452966103375970"/>
    </div>
  );
};

export default App;
