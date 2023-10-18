import React from 'react'
import { BsArrowDown, BsArrowUp, BsSearch } from 'react-icons/bs';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Chart } from "react-google-charts";
import card1 from './111.png';
import card2 from './112.png';
import card3 from './113.png';
import card4 from './114.png';
import product1 from './1.jpg';
import graph from './11.png';

/*#8884d8 */

function Home() {
    const data2 = [
        ["Task", "Hours"],
        ["Work", 1],
        ["Eat", 3],
        ["Health", 2]
    ];

    const options2 = {
        title: "Customers",
        subtitle: "Customers that buy products",
        legend: "none",
        pieHole: '0.6',
        is3D: false,
        pieSliceText: {
            color: 'black',
        },
        slices: {
            0: { color: 'pink' },
            1: { color: '#5503b9' },
            2: { color: 'black' }
        }
    };
    return (

        <main className='main-container'>
            <div style={{ marginTop: '20px', marginRight: '0px' }}>
                <Stack className='cards' spacing={2} direction='row' >
                    <div></div>
                    <Card className='cards-container d-flex' elevation={0} sx={{ height: 130, width: 282 }}>
                        <CardMedia sx={{ height: 120, width: 120 }} image={card1} ></CardMedia>
                        {/* sx={{minWidth: 70 + 'vh'}} , height: 140, width: 280 */}
                        <CardContent sx={{ paddingLeft: '20px', paddingTop: '20px' }} >
                            <Typography gutterBottom variant="h9" component="div">Earning</Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: '18px' }} variant="body5" color="text.secondary">$198k</Typography>

                            <div className='d-flex'>
                                <Typography sx={{ color: 'green', fontWeight: '500', fontSize: '14px' }} variant="body2" color="text.secondary"><BsArrowUp style={{ color: 'green' }} />37.8%</Typography>
                                <Typography variant="body2" >this month</Typography>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='container d-flex' elevation={0} sx={{ height: 130, width: 282 }}>
                        <CardMedia sx={{ height: 120, width: 120 }} image={card2} ></CardMedia>
                        {/* sx={{minWidth: 70 + 'vh'}}  */}
                        <CardContent sx={{ paddingLeft: '20px', paddingTop: '20px' }} >
                            <Typography gutterBottom variant="h9" component="div">Orders</Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: '18px' }} variant="body5" color="text.secondary">$2.4k</Typography>

                            <div className='d-flex'>
                                <Typography sx={{ color: 'red', fontWeight: '500', fontSize: '14px' }} variant="body2" color="text.secondary"><BsArrowDown style={{ color: 'red' }} />2%</Typography>
                                <Typography variant="body2" >this month</Typography>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='container d-flex' elevation={0} sx={{ height: 130, width: 282 }}>
                        <CardMedia sx={{ height: 120, width: 120 }} image={card3} ></CardMedia>
                        {/* sx={{minWidth: 70 + 'vh'}}  */}
                        <CardContent sx={{ paddingLeft: '20px', paddingTop: '20px' }} >
                            <Typography gutterBottom variant="h9" component="div">Balance</Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: '18px' }} variant="body5" color="text.secondary">$2.4k</Typography>

                            <div className='d-flex'>
                                <Typography sx={{ color: 'red', fontWeight: '500', fontSize: '14px' }} variant="body2" color="text.secondary"><BsArrowDown style={{ color: 'red' }} />2%</Typography>
                                <Typography variant="body2" >this month</Typography>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='container d-flex' elevation={0} sx={{ height: 130, width: 282 }}>
                        <CardMedia sx={{ height: 120, width: 120 }} image={card4} ></CardMedia>
                        {/* sx={{minWidth: 70 + 'vh'}}  */}
                        <CardContent sx={{ paddingLeft: '20px', paddingTop: '20px' }} >
                            <Typography gutterBottom variant="h9" component="div">Total</Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: '18px' }} variant="body5" color="text.secondary">$89k</Typography>

                            <div className='d-flex'>
                                <Typography sx={{ color: 'green', fontWeight: '500', fontSize: '14px' }} variant="body2" color="text.secondary"><BsArrowUp style={{ color: 'green' }} />11%</Typography>
                                <Typography variant="body2" >this month</Typography>
                            </div>
                        </CardContent>
                    </Card>


                </Stack>
            </div>


            <Stack className='charts' spacing={4} direction='row'>
                <Card className='charts-container1' sx={{ width: 250 + "vh", height:370}} elevation={0} style={{ marginTop: '25px', marginLeft: '15px', borderRadius: '10px' }}>
                    <CardMedia image={graph} sx={{ height: 320, width: 770, marginLeft:'25px', marginTop:'25px', marginBottom:'20px' }}> </CardMedia>
                    <CardContent></CardContent>

                </Card>



                <Card className='charts-container2' sx={{ width: 100 + "vh", height:370}} elevation={0} style={{ marginTop: '25px', marginRight: '15px', borderRadius: '10px' }}>
                    <CardContent>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={data2}
                            options={options2}
                        />
                    </CardContent>
                </Card>
            </Stack>

            <div className='table-data'>
                <div className='order'>
                    <div className='head'>
                        <h5> Product Sell</h5>
                        <form className="d-flex">

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <BsSearch className='icon' />
                        </form>


                        <button className="btn btn-light btn-sm dropdown-toggle" type="button"
                            data-toggle="dropdown">Last 30 days
                        </button>
                    </div>
                    <table>
                        <thead style={{ color: 'rgb(138, 133, 133)' }}>
                            <tr>
                                <th>Product Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h2 style={{ fontSize: '17px', fontWeight: '550' }}>Abstract 3D</h2>
                                    <p style={{ color: 'rgb(138, 133, 133)' }}>bmnfvbjnfsdvmlkfd</p>

                                </td>
                                <td>32 in stock</td>
                                <td> $45.99</td>
                                <td>20</td>
                            </tr>

                            <tr>
                                <td>
                                    <img src="" alt="" />
                                    <h2 style={{ fontSize: '17px', fontWeight: '550' }}>Sarphens Illustration</h2>
                                    <p style={{ color: 'rgb(138, 133, 133)' }}>bmnfvbjnfsdvmlkfd</p>
                                </td>
                                <td>32 in stock</td>
                                <td> $45.99</td>
                                <td>20</td>
                            </tr>

                            <tr>
                                <td>
                                    <img src="" alt="" />
                                    <h2 style={{ fontSize: '17px', fontWeight: '550' }}>Inheritance 3D</h2>
                                    <p style={{ color: 'rgb(138, 133, 133)' }}>bmnfvbjnfsdvmlkfd</p>
                                </td>
                                <td>32 in stock</td>
                                <td> $45.99</td>
                                <td>20</td>
                            </tr>

                            <tr>
                                <td>
                                    <img src="" alt="" />
                                    <h2 style={{ fontSize: '17px', fontWeight: '550' }}>Polymer 3D</h2>
                                    <p style={{ color: 'rgb(138, 133, 133)' }}>bmnfvbjnfsdvmlkfd</p>
                                </td>
                                <td>32 in stock</td>
                                <td> $45.99</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    )
}
export default Home;