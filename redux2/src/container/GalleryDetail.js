import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectedGallery, clearselectedGallery} from '../actions';
import { bindActionCreators } from 'redux';
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
class GalleryDetails extends Component {
    constructor(){
        super();
        this.state={
            title:'Full Gallery View'
        }
    }

    componentDidMount(){
        this.props.selectedGallery(this.props.match.params.id)
    }
    
    renderGallery = ({selected}) => {
        var gallery = [];
        if(selected){
            gallery = selected[0];
            return(
                <div>
                    <h3>{this.state.title}</h3>
                    <Slider {...settings}>
                        {gallery.images.map((item, index) =>{
                            return(
                                <div key={index} className="slide-item">
                                    <div className="image"
                                    style={{
                                        background:`url(/images/galleries/${item.img})`
                                    }}>
                                    </div>
                                    <div className="description">
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            )

        }
    }
    render(){
        return(
            <div className="slide-item-wrap">
                {this.renderGallery(this.props.gallery)}
            </div>
        )
    }
    componentWillUnmount(){
        this.props.clearselectedGallery();
    }
}

function mapStateToProps(state){
    return{
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedGallery, clearselectedGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryDetails);