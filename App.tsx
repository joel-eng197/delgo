import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,ScrollView,StyleSheet,Alert} from 'react-native';

const DEPARTEMENTS_58 = [
  "Djerem","Faro-et-Deo","Mayo-Banyo","Mbere","Vina",
  "Haute-Sanaga","Lekie","Mbam-et-Inoubou","Mbam-et-Kim","Mefou-et-Afamba","Mefou-et-Akono","Mfoundi","Nyong-et-Kelle","Nyong-et-Mfoumou","Nyong-et-Soo",
  "Boumba-et-Ngoko","Haut-Nyong","Kadey","Lom-et-Djerem",
  "Diamare","Logone-et-Chari","Mayo-Danay","Mayo-Kani","Mayo-Sava","Mayo-Tsanaga",
  "Moungo","Nkam","Sanaga-Maritime","Wouri",
  "Benoue","Faro","Mayo-Louti","Mayo-Rey",
  "Boyo","Bui","Donga-Mantung","Menchum","Mezam","Momo","Ngoketunjia",
  "Dja-et-Lobo","Mvila","Ocean","Vallee-du-Ntem",
  "Fako","Koupe-Manengouba","Lebialem","Manyu","Meme","Ndian",
  "Bamboutos","Haut-Nkam","Hauts-Plateaux","Koung-Khi","Mifi","Nde","Menoua","Noun"
];

export default function App(){
  const [q,setQ]=useState('');
  const [res,setRes]=useState([]);
  const [searched,setSearched]=useState(false);
  const search=(v=q)=>{
    if(!v.trim())return;
    setSearched(true);
    const randomDep = DEPARTEMENTS_58[Math.floor(Math.random()*58)];
    setRes([
      {t:v+' - DELGO Cameroun 🇨🇲',u:'delgo.cm | '+randomDep,d:'Resultat 100% camerounais pour '+v+' - 58 departements couverts - Dept: '+randomDep},
      {t:'Wikipedia - '+v,u:'wikipedia.org',d:'Info detaillee sur votre recherche: '+v},
      {t:'Actualites Cameroun: '+v,u:'crtv.cm',d:'Dernieres news Douala - Littoral - '+randomDep},
      {t:'DELGO IA - Resume: '+v,u:'ai.delgo.cm',d:'DELGO IA analyse les 58 departements du Cameroun pour vous donner la meilleure reponse sur '+v}
    ]);
  };
  return(
    <View style={s.c}>
      <View style={s.h}><Text style={s.logo}>DELGO</Text><Text style={s.sub}>World Search • 58 Departements Officiels 🇨🇲</Text></View>
      <View style={s.box}>
        <Text>🔍 </Text>
        <TextInput style={s.in} placeholder='Rechercher sur DELGO - 58 depts' value={q} onChangeText={setQ} onSubmitEditing={()=>search()} returnKeyType="search"/>
        <TouchableOpacity onPress={()=>Alert.alert('DELGO Vocal 58','🎤 Parlez en Francais, Anglais, Fulfulde')}><Text>🎤</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>search('image')}><Text>📷</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={s.btn} onPress={()=>search()}><Text style={s.btnT}>Recherche DELGO</Text></TouchableOpacity>
      <ScrollView style={s.r}>
        {searched? res.map((r,i)=>(
          <View key={i} style={s.card}>
            <Text style={s.u}>{r.u}</Text>
            <Text style={s.t}>{r.t}</Text>
            <Text style={s.d}>{r.d}</Text>
          </View>
        )) : (
          <View style={s.home}>
            <Text style={s.ht}>Bienvenue sur DELGO - 58</Text>
            <Text style={s.hd}>Premier moteur de recherche 100% camerounais avec les 58 departements officiels. Web, Images, Videos, News, IA. Mode hors-ligne disponible.</Text>
            <View style={s.depBox}>
              <Text style={s.depTitle}>58 DEPARTEMENTS OFFICIELS INDEXES ✅</Text>
              <Text style={s.depList}>{DEPARTEMENTS_58.join(' • ')}</Text>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={s.f}><Text style={s.fT}>DELGO v1.0.0 - 58 Depts - Douala CM - Samsung A07</Text></View>
    </View>
  );
}
const s=StyleSheet.create({
  c:{flex:1,backgroundColor:'#fff',paddingTop:50},
  h:{alignItems:'center',marginBottom:15},
  logo:{fontSize:48,fontWeight:'900',color:'#1a73e8',letterSpacing:3},
  sub:{fontSize:11,color:'#1a73e8',fontWeight:'800'},
  box:{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#1a73e8',borderRadius:28,paddingHorizontal:16,height:52,marginHorizontal:16,backgroundColor:'#fff',elevation:3},
  in:{flex:1,fontSize:15,marginLeft:6},
  btn:{backgroundColor:'#1a73e8',padding:12,borderRadius:6,alignItems:'center',margin:16},
  btnT:{fontSize:13,color:'#fff',fontWeight:'700'},
  r:{flex:1,padding:16},
  card:{marginBottom:18,borderBottomWidth:1,borderColor:'#f1f3f4',paddingBottom:12},
  u:{fontSize:11,color:'#202124'},
  t:{fontSize:16,color:'#1a0dab',fontWeight:'600'},
  d:{fontSize:12,color:'#4d5156',marginTop:3,lineHeight:16},
  home:{alignItems:'center',marginTop:20},
  ht:{fontSize:22,fontWeight:'800',color:'#1a73e8'},
  hd:{textAlign:'center',color:'#4d5156',marginTop:10,lineHeight:19,paddingHorizontal:12,fontSize:13},
  depBox:{marginTop:20,backgroundColor:'#e8f0fe',padding:12,borderRadius:12,width:'100%',borderWidth:1,borderColor:'#1a73e8'},
  depTitle:{fontWeight:'900',fontSize:12,color:'#1a73e8',textAlign:'center'},
  depList:{fontSize:9,color:'#333',marginTop:8,lineHeight:13,textAlign:'center'},
  f:{borderTopWidth:1,borderColor:'#eee',padding:8,alignItems:'center'},
  fT:{fontSize:9,color:'#999'}
});
