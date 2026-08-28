import UserCard from "./components/props"
function App () {
  return (
    <div>
      <h1>Hello React</h1>
      <UserCard name="subhanshu pal"  age={30}/>
      <UserCard name="prince pal" />
      <UserCard name="aditya singh"/>
    </div>

  );
}
export default App;