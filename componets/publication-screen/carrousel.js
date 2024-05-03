import Carousel from 'react-native-snap-carousel';
import datos from "../../data/publication-screen/datos-publication-ejemplo"
import { render } from 'react-native';
import { View } from 'react-native';

export default function Carrousel() {

    return(
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={datos}
              sliderWidth={300}
              itemWidth={300}
              renderItem={_renderItem}
              onSnapToItem = { index => this.setState({activeIndex:index}) } />
        </View>
    );
}

function _renderItem({item,index}){
    return (
      <View style={{
          backgroundColor:'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25, }}>
          <Image style={{width: "100%", height: "100%", resizeMode: "center"}} source={{ uri: item.img }} />
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.image}</Text>
      </View>

    )
}