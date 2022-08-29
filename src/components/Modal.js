import React from "react";
import Button from "@mui/material/Button";

function Modal({
  modalTrigger,
  setModalTrigger,
  list,
  km,
  pokeName,
  fullName,
  codeName,
  img,
  totalPrice,
  setList,
  setFullName,
  setCodeName,
  setPokeName,
  setTotalPrice,
  setKm,
}) {

    const handleSubmit = () =>{
        setModalTrigger(false)
        setList([])
        setFullName("")
        setCodeName("")
        setPokeName("")
        setTotalPrice(0)
        setPokeName(0)
        setKm(0)
    }
  return modalTrigger ? (
    <section className="order-form">
      <form className="form-order">
        <h1 className="heading">Your Data</h1>
        <p className="poke-para">Full Name: {fullName}</p>
        <p className="poke-para">CodeName: {codeName}</p>
        <p className="poke-para">Nearest pokemon center? (In KMs): {km}</p>
        <p className="poke-para">Your starting region: {pokeName}</p>
        <p className="poke-para">Your starter Pokemon:</p>
        <div className="image-container">
          <img src={img} />
        </div>
        <p className="poke-para">Packs: </p>
        <div className="packs">
          {list.map((item) => {
            const { id, count, name } = item;
            return (
              <div className="packs-info" key={id}>
                <span>{count}</span>
                <span>{name}</span>
              </div>
            );
          })}
        </div>
        <div className="total-cost">
          <p className="cost-para">Total Cost</p>
          <p className="cost">${totalPrice}</p>
        </div>
        <div className="journey-btn">
          <Button
            variant="contained"
            color="error"
            onClick={handleSubmit}
          >
            Done
          </Button>
        </div>
      </form>
    </section>
  ) : (
    ""
  );
}

export default Modal;
