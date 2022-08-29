import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@material-ui/core/Slider";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
function Orderform({ setItemNumber, setItemName, setCost, setIsList, trigger, setTrigger }) {
    const [item, setItem] = useState('')
    const [range, setRange] = useState(2)
    const [bag, setBag] = useState(true)

    const updateValue = (e, val) => {
      setRange(val)
    }
    let cost = 0
    if(item === "Poke Ball") {
      cost = range * 5
    }
    if(item === "Great Ball") {
      cost = range * 10
    }
    if(item === "Super Potion") {
      cost = range * 10
    }
    if(item === "Hyper Potion") {
      cost = range * 20
    }
    if(bag){
      cost = cost + 2
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // setShowModal(false)
      setItem('')
      setRange(2)
      setItemNumber(range)
      setItemName(item)
      setCost(cost)
      setIsList(true)
      setTrigger(false)
    }
    
    return (trigger) ? (
    <section className="order-form">
      <form className="form-order">
        <h1 className="heading">Place Your Order</h1>
        <p className="heading-para">
          We'll use this info to pack your order! Muhahahahahaha
        </p>
        <div>
          <FormControl fullWidth variant="filled" color="error">
            <InputLabel id="demo-simple-select-label">Choose Item</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={item}
              label="Age"
            >
              <MenuItem value={'Poke Ball'}  onClick={()=>setItem('Poke Ball')}>Poke Ball</MenuItem>
              <MenuItem value={'Great Ball'}  onClick={()=>setItem('Great Ball')}>Great Ball</MenuItem>
              <MenuItem value={'Super Potion'}  onClick={()=>setItem('Super Potion')}>Super Potion</MenuItem>
              <MenuItem value={'Hyper Potion'}  onClick={()=>setItem('Hyper Potion')}>Hyper Potion</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="slide">
          <Slider
            defaultValue={2}
            aria-labelledby="discrete-slider-always"
            step={1}
            max={10}
            value={range}
            valueLabelDisplay="on"
            color="secondary"
            onChange={updateValue}
          />
          <p className="slider-para-order">Select Quantity</p>
        </div>
        <div className="bag-toggle">
          <p className="bag-para">I need a bag for that!</p>
          <div>
            <Switch defaultChecked color="error" onClick={()=>setBag(!bag)}/>
          </div>
        </div>
        <div className="total-cost">
          <p className="cost-para">Cost</p>
          <p className="cost">${cost}</p>
        </div>
        <div className="journey-btn">
          <Button variant="contained" color="error" onClick={handleSubmit}>
            ADD TO CART
          </Button>
        </div>
      </form>
    </section>
  ) : ""
}

export default Orderform;
