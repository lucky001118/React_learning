import Cricketers from "./Cricketers";

export default function Fruits(){
    const fruits = ["apple","banana","grapes","mango","cherry","kivi","coconute","peenute"];
    const cricketers=[{name:"Virat Kohli",century:81,ranking:1},
        {name:"Rohit Sharma",century:43,ranking:5},
        {name:"Shubhman Gill",century:12,ranking:9},
        {name:"Sachin Tendulkar",century:100,ranking:1}
    ];
    return (
    <div>
        <h1>{fruits[0]},{fruits[1]},{fruits}</h1>
        <ul>{fruits.map((fruit=><li key={fruit}>{fruit}</li>))}</ul>
        <hr />
        <h1>Name of cricketers and thier achivements</h1>
        <ul>{cricketers.map((cricket=>
            <li key={cricket.name}>Name: {cricket.name} ,Century: {cricket.century} ,Ranking: {cricket.ranking} </li>
        ))}</ul>
        <hr />
        <h2>Rendering the Component in the loop</h2>
        <ul>
            {cricketers.map((cricket)=>(<Cricketers key={cricket.name} name={cricket.name} century={cricket.century} ranking={cricket.ranking} />))}
        </ul>
    </div>);
}