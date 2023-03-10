import React from 'react'
import Title from './Title'

function List() {
    const arr_1=[{
        id:113,
        title: 'Heading 1',
        descr:'this is the desciption of my list first object'
    }]
            
const arr_List= arr_1.map(t1=> <Title t1={t1}/>)

  return (
    <div>
        {
            <h2>{arr_List}</h2>
            // array mappping !!
        }
    </div>
  )
}

export default List