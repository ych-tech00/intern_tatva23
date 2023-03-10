import React from "react";
//functional component

// const Title = ({title,descr}) => {
//         //console.log(props)
//         return(
//         <>
//             <div>
//                 {/* <h1>1{title}</h1>
//                 <h1>2{descr}</h1> */}
                
//             </div>
//         </>
//         ); 
//     }
function Title({t1}){
    return(
        <>
        <div>
            <p>
                id is {t1.id}. 
            </p>
            <p>
                Title is {t1.title} 
            </p>
            <p>
                & desciption is {t1.descr}
            </p>
            {/* task 6  */}
        </div>
        </>
    );
}


//react props-fun arg in js & attr in html
//const Title=()=><h1>TITLE</h1>
//for single return statement,can exclude (); else include it aftr return 
export default Title