

const  ItemInCard= ({type, amount}) => {
    return (
      <div className="catItem">
        <div>

        </div>
        <div>
            <p className="catItemTypeText">
                {type}
            </p>
            <p className="catItemAmountText">
                {amount} g
            </p>

        </div>

      </div>
    );
  }
   
  export default ItemInCard;