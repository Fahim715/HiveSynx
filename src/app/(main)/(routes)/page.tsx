import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/mode-toggle";
const state = true;

export default function Home() {
  return (
  
    <div>
      <ModeToggle />
      <p className="text-3xl font-bold text-indigo-500">Welcome to HyveSynx</p>
      
    </div>
  );
}
