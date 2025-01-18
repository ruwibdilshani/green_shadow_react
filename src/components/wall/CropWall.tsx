import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";

const CropWall = () => {
    return(
        <>
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Crop Management"}/>
                <CardSet cardType={"crop"} cardSet={[]} />
            </div>
        </>
    )
}

export default CropWall