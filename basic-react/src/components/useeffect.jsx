const App = () => {

const [run , setNum ] =usestate(0)
 
  useEffect(function() {
    console.log("useEffect is called")
  })

    return (
        <div>
            <h1>num</h1>
            <button onClick = {() => {
                setNum(run+1)
            }
            } >click me!</button>
        </div>
    )
}

export default App






