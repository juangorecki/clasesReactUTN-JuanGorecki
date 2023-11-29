import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../css/home.css';

const HomePage = (props) =>{

const settings ={
    arrows: false,
    infite:true,
    speed:1000,
    autoplaySpeed: 3000,
    fade:true,
    autoplay:true
};

    return(
    <div className="galeria">
        <Slider {...settings}>
        <img src="/img/img01.jpg" alt="imagen 01" />
        <img src="/img/img02.jpg" alt="imagen 02" />
        <img src="/img/img03.jpg" alt="imagen 03" />
        <img src="/img/img04.jpg" alt="imagen 04" />
        <img src="/img/img05.jpg" alt="imagen 05" />
        </Slider>




    </div>
    )
}

export default HomePage;
