import Code from "./Code";
import NotCode from "./NotCode";

export default function ConditionalComponent(){
    const condition=false;
    // Conditionally rendaring 

    // if(condition){
    //     return <div><h3>This is the true statement, Code everyday</h3></div>
    // }else{
    //     return <div><h3>This is the false statement, i'm not code everyday</h3></div>
    // }

    // conditionally rending the Components

    // if(condition){
    //     return <Code/>
    // }else{
    //     return <NotCode />
    // }

    //conditional rendering using the Element Variable
    // let message;
    // if(condition){
    //     message = <Code/>;
    // }else{
    //     message=<NotCode/>;
    // }
    return condition?<Code/>:<NotCode/>;
}