import React, { useEffect, useState } from 'react';
import Fooddata from './FoodData';
import "./style.css";
import Form from 'react-bootstrap/Form';
import Cards from './Cards';
import Set from './set'

const Search = () => {
    const [fdata, setFdata] = useState(Fooddata);
    const [copydata, setCopyData] = useState([]);
    const [toggle, setToggle] = useState(false);
    console.log("toggle", toggle);
    const changeData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });
            setCopyData(storedata);
        }
    }

    const changeCuisine = (e) => {
        console.log("changeCuisine", e);
            let tempCopyData = [...fdata];
            console.log("tempCopyData", tempCopyData);
            let storedata = tempCopyData.filter((ele, k) => {
                console.log("ele", ele.cuisine, ele.cuisine.toLowerCase().includes(e));
                return ele.cuisine.toLowerCase().includes(e.toLowerCase());
            });
            console.log("storedata", storedata);
            setCopyData(storedata);
    }

    const changeRating = (e) => {
        console.log("copydata", copydata);
        let tempCopyData = [...copydata];
        let storedata = toggle ? tempCopyData.sort((a, b) => a.rating - b.rating) : tempCopyData.sort((a, b) => b.rating - a.rating);
        // let storedata = tempCopyData.reverse();
        console.log("storedata", storedata);
        setCopyData(storedata);
    }
    
    useEffect(() => {
        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return(
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" style={{width:"140px"}} alt="" />
                <h2 className='mt-3'>Search Filter</h2>
            </div>
            <Form className="d-flex justify-content-center align-items-center mt-3">
                <Form.Group className="mx-2 col-lg-4" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text"
                     onChange={(e) => changeData(e.target.value)}
                    placeholder="Search for Restaurants" />
                </Form.Group>
                <button type="submit" className="btn-red">Submit</button>
            </Form>
            <div className='container d-flex'>
                <button className='rating'
                onClick={() => {setToggle(!toggle); changeRating(toggle)}}>Rating High to Low</button>
                {/* onClick={() => {changeRating()}}>Rating High to Low</button> */}
                <Form.Select aria-label="Open this select menu"
                onChange={(e) => changeCuisine(e.target.value)}>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                    <option value="North Indian">North Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Italian">Italian</option>
                </Form.Select>
            </div>
            <section class="iteam_section mt-4 container">
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                {
                    (copydata && copydata.length > 0 ? <Cards data={copydata} /> : <Set sdata={fdata}/>)
                }
                    {/* {toggle ? (copydata && copydata.length > 0 ? <Cards data={copydata} /> : <Set sdata={fdata}/>) : (copydata && copydata.length > 0 ? <Cards data={copydata} /> : <Set sdata={fdata}/>)} */}
                </div>
            </section>
        </>
    );
}
export default Search;