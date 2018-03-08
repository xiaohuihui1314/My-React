import {Carousel} from 'antd';
import {connect} from  'react-redux';
import {get_Ad_List}  from '../../redux/actions/home';
function SampleNextArrow (props) {
    const {onClick} = props;
    return (
        <div className="nextArrow" onClick={onClick}>1111</div>
    );
}
function SamplePrevArrow (props) {
    const {onClick} = props;
    return (
        <div className="prevArrow" onClick={onClick}>222222222222</div>
    );
}
class CarouselList extends React.Component {
    constructor (props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next () {
        this.slider.next()
    }
    previous () {
        this.slider.prev()
    }
    componentWillMount () {
        this.props.dispatch(get_Ad_List('5a44f95efed2770afc573e29'));
    }
    render () {
        const settings = {
            autoplay: true,//是否自动播放
            adaptiveHeight: true,//高度自适应
            autoplaySpeed: 3800,//播放时间间隔
            pauseOnHover: true,//鼠标放上是否停止播放
            dots: true,
            infinite: true,
            arrows: true, //  箭头
            height:600,
            slidesToShow: 1,//一屏显示多少列
            slidesToScroll: 1,//每次播放多少列
            nextArrow: <SampleNextArrow />, //  自定义箭头
            prevArrow: <SamplePrevArrow /> //  自定义箭头
            /*  beforeChange: function (currentSlide, nextSlide) {
             console.log("beforeChange:" + currentSlide, nextSlide);
             },
             afterChange: function (currentSlide) {
             console.log("afterChange:" + currentSlide);
             }*/
        };
        console.log(this.props.ad);
        var $file = 'http://localhost:3000/images/';
        let imgArray = this.props.ad || [];
        return (
            <div>
                {imgArray.length > 0 ? <Carousel ref={c => this.slider = c } {...settings} >
                    {imgArray.map(function(value, index) {
                        return (
                            <div key={index} style={{ "backgroundImage": "url(" + $file + value.url + ")" }}></div>
                        )
                    })}
                </Carousel> : ''}
                {/*<div style={{ textAlign: 'center' }}>*/}
                    {/*<button className='button' onClick={this.previous}>Previous</button>*/}
                    {/*<button className='button' onClick={this.next}>Next</button>*/}
                {/*</div>*/}
            </div>
        );
    }
}
// function mapStateToProps (state) {
//     const { loginFetch } = state;
//     return {
//         loginFetch
//     }
// }
const mapStateToProps = (state) => {
    const { adFetch } = state;
    return {
        ad: adFetch.ad,
    }
}
export default connect(mapStateToProps)(CarouselList);