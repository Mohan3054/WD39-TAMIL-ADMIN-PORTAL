import React from 'react'

function Editbooks() {
    return (
        <div >
            <form  >

                <table  border="2" align="center" cellpadding="5" cellspacing="5">
                    <tr>
                        <td> Enter ISBN :</td>
                        <td> <input type="text" className="form-control" name="isbn" size="48" /> </td>
                    </tr>
                    <tr>
                        <td> Enter Title :</td>
                        <td> <input type="text"className="form-control" name="title" size="48" /> </td>
                    </tr>
                    <tr>
                        <td> Enter Author :</td>
                        <td> <input type="text"className="form-control" name="author" size="48" /> </td>
                    </tr>
                    <tr>
                        <td> Enter Edition :</td>
                        <td> <input type="text"className="form-control" name="edition" size="48" /> </td>
                    </tr>
                    <tr>
                        <td> Enter Publication: </td>
                        <td> <input type="text"className="form-control" name="publication" size="48" /> </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            {/* <input  value="submit" /> */}
                            <button className='btn btn-primary m-2'>Submit</button>
                            <button type="reset" className='btn btn-warning m-2'>Reset</button>
                            {/* <input type="reset" value="Reset" /> */}
                        </td>

                    </tr>
                </table>
            </form>

        </div>
    )
}

export default Editbooks