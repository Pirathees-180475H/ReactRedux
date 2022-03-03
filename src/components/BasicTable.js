import React,{useState} from 'react'
import { Container,Button } from 'reactstrap';
import DonorDeleteAlert from './DonorDeleteAlert';
import PaginationComponent from './Pagination';


function BasicTable({Data,clms,pageS}) {
    const [tableData,setTableData]= useState(Data);

    const [tableTitles,setTitles]= useState(clms);

    const [filteredData,setFilteredData]=useState(Data);

    const [pageSize,setPageSize]= useState(pageS);

    const [currentPage,setCurrentPage]= useState(0);


    let tableRow=0;
    let totalPages=Math.floor(tableData.length/pageSize);


    const deleteHandler=(id)=>{
        //TODO:: Needs To Call Delete Api
        let newList= filteredData.filter(data=>{
            return(
                data["id"]!==id
            )
        })
        setTableData(newList)
    }

    const paginationFilter=(pageNo)=>{
        let pageStartDoc=(pageNo-1)*pageSize;
        let pageEndDoc=pageNo*pageSize;
        let filterData=[]
        for(let i=pageStartDoc;i<=pageEndDoc;i++){
            filterData.push(tableData[i])
        }
        setFilteredData(filterData)
    }

  return (
      <React.Fragment>
          
    <div className='container'>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          {tableTitles.map(clm=>{
            return <td key={clm}>{clm}</td>
          })}
        </tr>
      </thead>
      <tbody>
      
      
      {filteredData.map(data=>{
          tableRow=tableRow+1;
          return(<tr key={tableRow}>
            <th scope="row">{tableRow}</th>

            {tableTitles.map(title=>{
                return(
                    <td key={title}>{data[title]}</td>
                )
            })}
             <DonorDeleteAlert DeleteHandler={deleteHandler} id={data["id"]} key={data["id"]}></DonorDeleteAlert>
             <Button color='primary'active size='sm'>EDIT</Button>
            </tr>
          )
      })}
  </tbody>

</table>
<PaginationComponent paginationFilter={paginationFilter} totalPages={totalPages}></PaginationComponent>
</div>
</React.Fragment>

  )
}

export default BasicTable