import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";

const EquWall = () => {
    const dataHeaders = [ "equipment Id" , "Name" , "equipment Type" , "status"]
    return(
        <>
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Equipment Management"} />
                <Table headersData={dataHeaders} bodyData={[]} />
            </div>
        </>
    )
}

export default EquWall