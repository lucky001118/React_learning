export default function Cricketers({name,century,ranking}){
    return <li>{name} ,{century} ,{ranking} === {century>50?"Best categary":"Not best but has potaintioal"}</li>;
}