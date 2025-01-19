import backImg from '../../assets/home.jpg'
import '../../css/components/Home.css'

const Home = () => {
    return (
        <div className="p-0 bg-transparent w-100 " id="home-page">
            <div className="dashboard-header d-flex justify-content-between">
                <div className={'p-4'}>
                    <h1>Hi , Ruwi</h1>
                    <p>Welcome Factory system</p>
                </div>

            </div>

            <div id = 'backImg'>
                <img src={backImg}/>
            </div>

        </div>

    );
}

export default Home;