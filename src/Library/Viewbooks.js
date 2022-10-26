import React,{useEffect} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Viewbooks() {
    const params =useParams();
    const searchParams =useSearchParams()
        useEffect(() => {
        //  console.log(searchParams.get('status'))
          
        }, []);
        
    
    return (
        <div class="container">
            <div className='row'>
                <h1>ISBN:{params.isbn}</h1>
               
                <div className='col-lg-6'>
                 Book Name :{params.title}
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Viewbooks