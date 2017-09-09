import MenuList from './index/MenuList'
import CarouselList from './index/Carousel'

export default class extends React.Component {
    render() {
        return (
            <div>
                <MenuList/>
                <CarouselList/>
            </div>
        )
    }
}
