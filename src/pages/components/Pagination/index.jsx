import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <>
        <ul className=''>
            {pageNumbers.map(number => (
                <li key={number} className=''>
                    <a onClick={ () => paginate(number)}
                    href='#'
                    className=''>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        </>
    );
};

export default Pagination;