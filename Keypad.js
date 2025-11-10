function Keypad({handleclick,handleclear,calculate}){
    return(
        <div className="keypad">
            <div className="row">
                <button onClick={()=>{handleclick("7")}} className="numbers">7</button>
                <button onClick={()=>{handleclick("8")}} className="numbers">8</button>
                <button onClick={()=>{handleclick("9")}} className="numbers">9</button>
                <button onClick={()=>{handleclick("/")}} className="operators">/</button>
            </div>
            <div className="row">
                <button onClick={()=>{handleclick("4")}} className="numbers">4</button>
                <button onClick={()=>{handleclick("5")}} className="numbers">5</button>
                <button onClick={()=>{handleclick("6")}} className="numbers">6</button>
                <button onClick={()=>{handleclick("*")}}  className="operators">*</button>
            </div>
            <div className="row">
                <button onClick={()=>{handleclick("3")}} className="numbers">3</button>
                <button onClick={()=>{handleclick("2")}} className="numbers">2</button>
                <button onClick={()=>{handleclick("1")}} className="numbers">1</button>
                <button onClick={()=>{handleclick("-")}} className="operators">-</button>
            </div>
            <div className="row" >
                <button onClick={()=>{handleclick("0")}} className="numbers">0</button>
                <button  onClick={()=>{calculate()}} className="fun-keys">=</button>
                <button onClick={()=>{handleclear()}} className="fun-keys">C</button>
                <button onClick={()=>{handleclick("+")}} className="operators">+</button>
            </div>
        </div>
    )

}
export default Keypad;