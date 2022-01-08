import $ from 'jquery'
import './jquery.svg3dtagcloud'

class Box extends React.Component {
componentDidMount() {
    const settings ={

   
    }
  this.$el = $(this.el);
  this.$el.svg3DTagCloud(settings)
}
  
render() {
  return (
    <div id="tagcloud" ref={el => this.el = el}></div>
    );
}