import React from 'react'
import EmpDetails from './EmpDetails';

const ExcelJsonData = () => {

    const ExcelExportData = 
    [
        {
            "name": " ",
            "email": " ",
            "username": " ",
            "password": " ",
            "phone": " ",
            "designation": " ",
            "department": " ",
            "dateofjoining": " ",
            "roles": " ",
            "currentCTC": " ",
            "panCard": " ",
            "aadharCard": " ",
            "address": " ",
            "dateofbirth": " ",
            "bankDetail": " ",

        }
    ]
  return (
    <div className='App'>
       <EmpDetails excelData={ExcelExportData} fileName={"Excel Export"}/>
    </div>
  )
}

export default ExcelJsonData