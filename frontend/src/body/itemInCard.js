const  ItemInCard= ({type, amount}) => {
    let imgpath;
    let isFatIcon = false;

    if (type ==='Carbs') {
        imgpath = "./images/wheat.png"
    }
    if (type == 'Protein') {
        imgpath = "./images/fish.png"
    }
    if (type == 'Fat') {
        imgpath = "./images/fat.png"
        isFatIcon = true;
    }

    type = type.toUpperCase();

    return (
      <div className="catItem">
        <div>
            <img className={isFatIcon ? "catIcon fatIcon" : "catIcon"} src={imgpath}/>
        </div>

        <div className="catTypeNAmount">
            <p className="catItemTypeText">
                {type}
            </p>
            <p className="catItemAmountText">
                {amount}g
            </p>
        </div>
      </div>
    );
  }
   
  export default ItemInCard;