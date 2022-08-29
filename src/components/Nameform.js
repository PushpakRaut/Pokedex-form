import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@material-ui/core/Slider";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import Orderform from "./Orderform";
import Modal from "./Modal";

function Nameform() {
  const [imageIndex, setImageIndex] = useState(2);
  const [itemNumber, setItemNumber] = useState(0);
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState(0);
  const [list, setList] = useState([]);
  const [isList, setIsList] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [pokeName, setPokeName] = useState("");
  const [firstImg, setFirstImg] = useState("../images/balbsaur.png");
  const [secImg, setSecImg] = useState("../images/charmander.png");
  const [thirdImg, setThirdImg] = useState("../images/squirtle.png");
  const [triggerModal, setTriggerModal] = useState(false);
  const [km, setKm] = useState(0);
  const [fullName, setFullName] = useState("");
  const [codeName, setCodeName] = useState("");
  const [img, setImg] = useState("")

  const updateKm = (e, val) => {
    setKm(val);
  };

  useEffect(() => {
    if (pokeName === "Kanto") {
      setFirstImg("../images/balbsaur.png");
      setSecImg("../images/charmander.png");
      setThirdImg("../images/squirtle.png");
    }

    if (pokeName === "Jhoto") {
      setFirstImg("../images/cyndaquil.png");
      setSecImg("../images/chikorita.png");
      setThirdImg("../images/totodile.png");
    }
    if (pokeName === "Hoenn") {
      setFirstImg("../images/treecko.png");
      setSecImg("../images/torchic.png");
      setThirdImg("../images/mudkip.png");
    }
  }, [pokeName]);

  useEffect(() => {
    if (isList && itemName) {
      const newItem = {
        id: new Date().getTime().toString(),
        count: itemNumber,
        name: itemName,
        price: cost,
      };
      setList([...list, newItem]);
      setTotalPrice(totalPrice + cost);
      setIsList(false);
    }
  }, [isList]);

  const removeItem = (id, price) => {
    setList(list.filter((item) => item.id !== id));
    setTotalPrice(totalPrice - price);
  };

  useEffect(()=>{
    if(imageIndex === 1){
      setImg(firstImg)
    }
    if(imageIndex === 2){
      setImg(secImg)
    }
    if(imageIndex === 3){
      setImg(thirdImg)
    }
  },[imageIndex])

  return (
    <section className="nameform">
      <form className="form">
        <h1 className="heading">Fill This Form</h1>
        <p className="heading-para">
          We'll use this info to dominate the poke world! Muhahahahah
        </p>
        <div className="input-field">
          <TextField
            fullWidth
            id="filled fullWidth"
            label="Full Name"
            variant="filled"
            color="error"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <TextField
            fullWidth
            id="filled fullWidth"
            label="Code Name"
            variant="filled"
            color="error"
            onChange={(e) => setCodeName(e.target.value)}
          />
        </div>
        <div className="slide">
          <Slider
            defaultValue={80}
            aria-labelledby="discrete-slider-always"
            step={10}
            max={100}
            value={km}
            onChange={updateKm}
            valueLabelDisplay="on"
            color="secondary"
          />
          <p className="slider-para">
            How far is your nearest pokemon center? (In KMs)
          </p>
        </div>
        <div className="select-item">
          <FormControl fullWidth variant="filled" color="error">
            <InputLabel id="demo-simple-select-label">
              What's your starting region?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pokeName}
            >
              <MenuItem value={"Kanto"} onClick={() => setPokeName("Kanto")}>
                Kanto
              </MenuItem>
              <MenuItem value={"Jhoto"} onClick={() => setPokeName("Jhoto")}>
                Jhoto
              </MenuItem>
              <MenuItem value={"Hoenn"} onClick={() => setPokeName("Hoenn")}>
                Hoenn
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select-pokemon">
          <p className="poke-para">Choose your starter pokemon</p>
          <div className="image-select">
            <div
              className={
                imageIndex === 1
                  ? "image-container selected-image"
                  : "image-container"
              }
              onClick={() => setImageIndex(1)}
            >
              <img src={firstImg} />
            </div>
            <div
              className={
                imageIndex === 2
                  ? "image-container selected-image"
                  : "image-container"
              }
              onClick={() => setImageIndex(2)}
            >
              <img src={secImg} />
            </div>
            <div
              className={
                imageIndex === 3
                  ? "image-container selected-image"
                  : "image-container"
              }
              onClick={() => setImageIndex(3)}
            >
              <img src={thirdImg} />
            </div>
          </div>
        </div>
        <div className="pack-names">
          <p className="pack-para">What do you want to pack?</p>
          <div>
            <Fab
              color="error"
              size="medium"
              aria-label="add"
              onClick={() => setShowModal(true)}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
        <div className="packs">
          {list.length > 0 && (
            <React.Fragment>
              {list.map((item) => {
                const { id, count, name, price } = item;
                return (
                  <div className="packs-info" key={id}>
                    <span>{count}</span>
                    <span>{name}</span>
                    <CancelIcon
                      fontSize="14px"
                      onClick={() => removeItem(id, price)}
                    />
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </div>
        <div className="total-cost">
          <p className="cost-para">Total Cost</p>
          <p className="cost">${totalPrice}</p>
        </div>
        <div className="journey-btn">
          <Button
            variant="contained"
            color="error"
            onClick={() => setTriggerModal(true)}
          >
            START MY JOURNEY
          </Button>
        </div>
      </form>
      <Orderform
        trigger={showModal}
        setTrigger={setShowModal}
        setShowModal={setShowModal}
        setItemNumber={setItemNumber}
        setItemName={setItemName}
        setCost={setCost}
        setIsList={setIsList}
      />
      <Modal
        modalTrigger={triggerModal}
        setModalTrigger={setTriggerModal}
        list={list}
        km={km}
        pokeName={pokeName}
        fullName={fullName}
        codeName={codeName}
        img={img}
        totalPrice={totalPrice}
        setList={setList}
        setFullName={setFullName}
        setCodeName={setCodeName}
        setPokeName={setPokeName}
        setTotalPrice={setTotalPrice}
        setKm={setKm}
      />
    </section>
  );
}

export default Nameform;
