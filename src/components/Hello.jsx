function Hellow(props){
    //how can we persorms prop destructuring
    //as we uses props {props.name}, {props.maths}, {props.science} .......
    //using the destructuring the props we use const {name,maths....} = props;
    //now we can use those {name} {maths} ... to directally buind with html.
    // one more way to do this --> function Hellow({name,maths,science,...}) now name, maths .... can directally asseble 
    // const {name,maths,science,socialscience}=props;
    return (
        <div>
            <h1>{props.arrNumber[6]}, {props.obj.things},{props.obj.material} , {props.obj.count}</h1>
        </div>
    );
}

export default Hellow;