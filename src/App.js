import Name from "./Name";

function App() {
  const name = [
    {
      name : 'ravi'
    },
    {
      name : 'ravi1'
    },
    {
      name : 'ravi2'
    }
  ]

  const output = name.map( val => {
    return <Name name={val.name} />
  })
  return (
    <>
     {output}
    </>
  );
}

export default App;
