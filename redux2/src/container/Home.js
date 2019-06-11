import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews, latestGallery } from '../actions';
import { bindActionCreators } from 'redux';

import LatestNews from '../component/home/latest';
import OtherNews from '../component/home/article';
import Gallery from '../component/home/gallery';

class Home extends Component {

    componentDidMount() {
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
    }
    
    render(){
        return(
            <div>
                <LatestNews latestnw ={this.props.article.latest}/>
                <OtherNews others={this.props.article.other}/>
                <Gallery gallerynw={this.props.gallery.gallerydata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(">>>",state)
    return{
        article: state.articles,
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, otherNews, latestGallery}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps )(Home);