const  ItemInCard= ({type, amount}) => {
    let imgpath;

    if (type ==='Carbs') {
        imgpath = "./images/wheat.png"
    }
    if (type == 'Protein') {
        imgpath = "./images/fish.png"
    }
    if (type == 'Fat') {
        imgpath = "./images/fat.png"
    }


    return (
      <div className="catItem">
        <div>
            <img className="catIcon" src={imgpath}/>
        </div>

        <div className="catTypeNAmount">
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