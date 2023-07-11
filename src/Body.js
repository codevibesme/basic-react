const Body = ({colorName}) =>{
    return (
        <div style= {{background: colorName}}  className='box'>
            <p className="para"> {colorName.length?colorName:'Empty Value'} </p>
        </div>
    );
}

export default Body;