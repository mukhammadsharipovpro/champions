import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import ChampionsHeader from '../components/ChampionsHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <ChampionsHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'La Liga',
          '05.03 20:45',
          'Real Madrid \n' + 'Barcelona',
        )}
        {renderBroadcast(
          'Bundesliga',
          '10.03 19:00',
          'Bayern Munich \n' + 'Schalke 04',
        )}
        {renderBroadcast(
          'NBA',
          '15.03 22:30',
          'Los Angeles Lakers \n' + 'Golden State Warriors',
        )}
        {renderBroadcast(
          'NHL',
          '20.03 18:45',
          'Montreal Canadiens \n' + 'Toronto Maple Leafs',
        )}
        {renderBroadcast(
          'MLB',
          '25.03 17:00',
          'New York Yankees \n' + 'Boston Red Sox',
        )}
        {renderBroadcast(
          'NFL',
          '28.03 20:30',
          'Kansas City Chiefs \n' + 'Las Vegas Raiders',
        )}
        {renderBroadcast(
          'Tennis',
          '30.03 18:00',
          'Novak Djokovic \n' + 'Rafael Nadal',
        )}
        {renderBroadcast('Cricket', '03.03 16:30', 'Australia \n' + 'India')}
        {renderBroadcast('Rugby', '08.03 20:00', 'England \n' + 'France')}
        {renderBroadcast(
          'Formula 1',
          '13.03 16:00',
          'Australian Grand Prix \n' + 'Race Day',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
