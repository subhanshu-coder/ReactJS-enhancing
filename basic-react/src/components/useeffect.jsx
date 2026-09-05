const App = () => {

const [run , setNum ] =usestate(0)
 
  useEffect(function() {
    console.log("useEffect is called")
  })

//     return (
//         <div>
//             <h1>num</h1>
//             <button onClick = {() => {
//                 setNum(run+1)
//             }
//             } >click me!</button>
//         </div>
//     )
// }

// export default App

// const push = () => {
// const [run , setNum ] =usestate(0)
// const [timer , setTimer] = usestate(0)
//    useeffect(function() {
//     console.log("useEffect is called")
//    })
// return (
//         <div>
//             <h1>running</h1>
//             <h2>timer</h2>
//             <button 
//             onMouseEnter = {() => {
//                 setNum(run+1)
//             }}
//             onMouseleave = {() =>{
//                 setTimer(timer+1)
//             }}
//             >hover me!</button>
//         </div>
//     )
// }
// export default push





