import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";

const CropDataWall = () => {
    return(
        <>
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Log Management"}/>
                <CardSet cardType={"log"} cardSet={[]} />
            </div>
        </>
    )
}

export default CropDataWall