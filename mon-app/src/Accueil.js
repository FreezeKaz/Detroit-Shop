import {InputGroup, FormControl, Row, Col} from 'react-bootstrap'
import React, {Component} from 'react';
import Navbar from './component/Navbar';
import MyCarousel from './component/Carousel';
import Presentation from './component/Presentation';
import Cards from './component/Cards';
import Articles from './component/Articles';
import ParticleBackground from './component/ParticleBackground';
import Filter from './component/Filter';
import MyFooter from './component/Footer';


class Accueil extends Component {

  constructor(props){
    super(props)
    this.state={
      search:"",
      articles:[],
      filter:""
    }
    this.changeFilter = this.changeFilter.bind(this)
  }
  async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    const response = await fetch('http://localhost:1337/api/articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({articles:articles})
  }

  handleChange(e){
    e.preventDefault()
    let name = e.target.name
    this.setState({ 
      [name]: e.target.value
    })
  }
  
  changeFilter(myFilter){
    this.setState({
      filter:myFilter
    })
  }
  
  render () {
    let articlesShow = this.state.articles.data
    if (this.state.search !== ""){articlesShow = articlesShow.filter(article=>article.attributes.name.toLowerCase().includes(this.state.search.toLowerCase()))}
    if (this.state.filter !== ""){articlesShow = articlesShow.filter(article=>article.attributes.categorie.data.attributes.type === this.state.filter)}

    return(

      <>
        <ParticleBackground type="normal" />
        <Navbar/>
        <MyCarousel/>
        <Presentation/>
        <Cards/>
        <Row>
          <Col >
          <InputGroup className="mb-3 text-center">
              <InputGroup.Text id="inputGroup">Research</InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup"
                  value = {this.state.search}
                  name = "search"
                  onChange= {(e) => this.handleChange(e)}
                />
              </InputGroup>
            </Col>
          <Col><Filter filter={this.state.filter} changeFilter={this.changeFilter}/></Col>
        </Row>

        <div className="row justify-content-between pt-5" >
          {articlesShow && articlesShow.map((articles,i)=><Articles  cart={this.props.cart} addToCart={this.props.addToCart} article={articles} key={i} />)}
        </div>
        <MyFooter/>
      </>
    ) 
  }
}
export default Accueil;
