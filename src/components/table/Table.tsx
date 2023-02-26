import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/store';

const TableBoard = () => {
    const data = useSelector((state: any) => state.productState);
    const dispatch: any = useDispatch();
    return (
        <Table responsive striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Freshness</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Comment</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product: any, i: any) => (
                    <tr key={i}>
                        <td className='w-10'>{i + 1}</td>
                        <td className='w-10'>{product.productName}</td>
                        <td className='w-10'>{product.category}</td>
                        <td className='w-10'>{product.freshness}</td>
                        <td className='w-25'>{product.description}</td>
                        <td className='w-10'>{product.price}$</td>
                        <td className='w-25'>{product.comment}</td>
                        <td className='w-10'>{product.date}</td>
                        <td className='w-20'>
                            <Button size="sm" variant="outline-primary" className='me-2 p-0 px-1'><i className="fa fa-pencil"></i></Button>
                            <Button onClick={() => dispatch(actionCreators.deleteProduct(product.id))} size="sm" variant="outline-danger" className='me-2 p-0 px-1'><i className="fa fa-trash"></i></Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableBoard