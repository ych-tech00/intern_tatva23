import React from "react";
//functional component

const Title = ({title,descr}) => {
        //console.log(props)
        return(
        <>
            <div>
                <h1>1{title}</h1>
                <h1>2{descr}</h1>
            </div>
        </>
        ); 
    }


//react props-fun arg in js & attr in html
//const Title=()=><h1>TITLE</h1>
//for single return statement,can exclude (); else include it aftr return 
export default Title