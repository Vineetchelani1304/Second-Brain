import Button from "./components/Button";
import { Share } from "./icons/share";
import { Plusicon } from "./icons/Plusicon";
const App: React.FC = () => {
  // const [bar, setBar] = useState(true);

  return (
    <div>
      <Button variant="primary" text="Add Content" startIcon={<Share/>}/>
      <Button variant="secondry" text="Share Brain" startIcon={<Plusicon/>} />
    </div>
  );
};

export default App;
