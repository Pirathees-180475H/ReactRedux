import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default function PaginationComponent({paginationFilter,totalPages}) {

    const pageNumbers=[];

    let pageCount=1;

    while(pageCount<=totalPages){
       pageNumbers.push(pageCount)
        pageCount=pageCount+1;
    }

  return (
    <Pagination aria-label="Page navigation example">
    <PaginationItem>
      <PaginationLink previous href="#" />
    </PaginationItem>
    {pageNumbers.map(Index=>{
        return(
        <PaginationItem>
        <PaginationLink href="#" onClick={()=>paginationFilter(Index)}>
             {Index}
        </PaginationLink>
        </PaginationItem>
        )
    })}
    <PaginationItem>
      <PaginationLink next href="#" />
    </PaginationItem>
  </Pagination>
  )
}


