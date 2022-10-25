import React,{useEffect} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Viewstudent() {
    const params =useParams();
    const searchParams =useSearchParams()
        useEffect(() => {
        //  console.log(searchParams.get('status'))
          
        }, []);
        
    
    return (
        <div class="container">
            <div className='row'>
                <h1>Id:{params.rollnumber}</h1>
               
                <div className='col-lg-6'>
                 Student Name :{params.department}
                </div>
                <div className='col-lg-6'>
                 Student Name : {params.dob}
                </div>
                <div className='col-lg-6'>
                 Student Name : {params.gender}
                </div>
                <div className='col-lg-6'>
                 Student Name :{params.phone}
                </div>
                <div className='col-lg-6'>
                 Student Name : {params.country}
                </div>
                <div className='col-lg-6'>
                 Student Name : {params.state}
                </div>
                <div className='col-lg-6'>
                 Student Name :{params.city}
                </div>
                
                
            </div>
        </div>
    )
}

export default Viewstudent