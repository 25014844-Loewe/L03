import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
          <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"red"}
                 poster={require("./img/doctor-sleep.jpg")}/>

          <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"red"}
                 poster={require("./img/midway.jpg")}/>

          <Movie title={"Spiderman"} year={2010} icon_name={"hand-spock"} icon_color={"blue"}
                 poster={{uri: 'https://tse2.mm.bing.net/th/id/OIP.SENxbMuazOd-hOCPNJi5rgHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'}} />
        </ScrollView>
    );
  }
}

export default AllMovies;
