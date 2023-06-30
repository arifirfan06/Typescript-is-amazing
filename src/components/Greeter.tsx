// you can anotate return like this JSX.
// function Greeter(props:{name:string}):JSX.Element {
//     return <h1>nice to meet you! {props.name}</h1>
// }

interface GreeterProps {
  name: string;
}

// this is how props destructuring work in TS
// function Greeter({ name }: GreeterProps): JSX.Element {
//   return (
//     <>
//       <h1>nice to meet you! {name}</h1>
      
//     </>
//   );
// }


const Greeter = ({ name }: GreeterProps):JSX.Element => {
  return <h1>This is {name}</h1>
}

// FC is older way to do react.ts and not recomendedS
// this FC need arrow function
// const Greeter: React.FC = () => {
//     return <h1>nice to meet you!</h1>
// }

export default Greeter;
