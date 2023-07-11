const Form = ({colorName, changeColor}) => {
    return(
        <form className="addColor" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="Form"></label>
            <input 
                type="text"
                required
                id="addColor"
                placeholder="Add color name"
                value={colorName}
                onChange={(e)=>changeColor(e.target.value)} 
                style= {{background:`${colorName}`}}
            />
        </form>
    )
}
export default Form;