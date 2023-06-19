import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { getAllowDocuments } from '../../utils';
import FlipCard from 'react-native-flip-card'
import { AllowListType } from '../../types';
import { style } from './styles';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import SVGAluno from '../../assets/aluno.png';
import LogoWhite from '../../assets/logoWhite.png';
import { LinearGradient } from 'expo-linear-gradient';

export const Home: React.FC = () => {

  const [allowList, setAllowList] = useState<AllowListType[]>([] as AllowListType[]);

  useEffect(() => {
    (async() => {
      setAllowList(await getAllowDocuments());
      console.log(allowList)
    })()
  }, []);


  return (
    <SafeAreaView style={style.container}>
      <View style={style.menu}>
        <IconEntypo name='menu' size={30} color='black' />
        <Image source={SVGAluno} style={style.logo} />
        <IconAntDesign name='bells' size={30} color='black' />
      </View>
      <View style={style.content}>
        <View style={style.card}>
        <FlipCard 
        style={{marginTop: 30}}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        {/* Face Side */}
        <LinearGradient
        style={style.linear}
        start={[1, 0]} end={[0, 1]}
        colors={['#ea530a', '#f18104', ]}
        >
        <View style={style.mainCard}>
          <Image source={LogoWhite} style={style.logoWhite} />
          <Text style={style.warningText}>ESTE CARTÃO É PESSOAL E INTRANSFERIVEL</Text>
        </View>
        </LinearGradient>
        {/* Back Side */}
        <LinearGradient
        style={{borderRadius: 8}}
        start={[1, 0]} end={[0, 1]}
        colors={['#ea530a', '#f18104', ]}
        >
        <View style={style.mainCard}>
          <Text style={style.warningText}>ESTE CARTÃO É PESSOAL E INTRANSFERIVEL</Text>
        </View>
        </LinearGradient>
    </FlipCard>
        </View>
      </View>
</SafeAreaView>
  );
}
