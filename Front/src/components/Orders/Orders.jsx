import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Orders() {
  return <>
    {/* orders history */}
    <div className="orders-history">
        {/* table with orders data */}
        <Table  hover className='text-center'>
            <thead>
                <tr >
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total </th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'><Link to={'orderdetails'} className='text-white'>view Details</Link></Button></td>
                </tr>
                <tr>
                <td>2</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
                <tr>
                <td>3</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
                <tr>
                <td>4</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
                <tr>
                <td>5</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
                <tr>
                <td>6</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
                <tr>
                <td>7</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
                <tr>
                <td>8</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
                <tr>
                <td>9</td>
                <td>Fub 05,2021</td>
                <td>Complated</td>
                <td>$575</td>
                <td><Button className='main-bg border-0'>view Details</Button></td>
                </tr>
            </tbody>
        </Table>
    </div>
  </>
}

export default Orders