import Bank from "./components/Bank";
import ConditionalComponent from "./components/conditionalComponent";
import Counter from "./components/Counter";
import EventHandaling from "./components/EventHandaling";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello"
import UseReducer from "./components/UseReducer";

export default function Containtpage(){
    const arrNumber = [0,1,2,3,4,5,8,10,15,21]; 
    let obj ={
        things: 5,
        material:"fiber",
        count:10
      }

    return(
        <div>
        {/* calling the Hello component */}
      <Hello arrNumber={arrNumber} obj={obj} />
      {/* calling the Fruits component over here */}
      <Fruits/>
      {/* calling the ConditionalComponent */}
      <hr />
      <ConditionalComponent />
      <hr/>
      <EventHandaling/>
      <hr />
      <Counter/>
      <hr />
      <Form />
      <hr />
      <UseReducer />
      <hr />
      <Bank />
        </div>
    );
}