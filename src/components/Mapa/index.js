import React, { useState,useEffect } from 'react';
import {PermissionsAndroid, Platform,Text, Image, TouchableOpacity, View} from 'react-native'
import openMap from 'react-native-open-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Titulo from '../Titulo'
import styles from './style'
import Idoso from '../../../database/Idoso';
import asyncStorage from "../../../services/asyncStorage";

function Mapa ({navigation, route}){ 

    const [enderecoAtual, setEnderecoAtual] = useState('')
    const [user, setUser] = useState('');

    const callLocation = () => {
        if(Platform.OS === 'ios') {
          getLocation();
        } else {
          const requestLocationPermission = async () => {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: "Permissão de Acesso à Localização",
                message: "Este aplicativo precisa acessar sua localização.",
                buttonNeutral: "Pergunte-me depois",
                buttonNegative: "Cancelar",
                buttonPositive: "OK"
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              getLocation();
            } else {
              alert('Permissão de Localização negada');
            }
          };
          requestLocationPermission();
        }
      }
      
    const getLocation = () => {
        Geolocation.getCurrentPosition(
          (position) => {
            getAddressFromCoordinates(position.coords.latitude,position.coords.longitude)
          },
          (error) => alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        const watchID = Geolocation.watchPosition((position) => {
            getAddressFromCoordinates(position.coords.latitude,position.coords.longitude )
        });
    }

    function getAddressFromCoordinates(lat, long) {
        return new Promise((resolve) => {
          const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${lat}%2C${long}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=p2UvqqDjlWE54e94ZAgPzyTC5DddCkm7BhdyduUbt_0`
          fetch(url)
            .then(res => res.json())
            .then((resJson) => {

                if (resJson
                    && resJson.Response
                    && resJson.Response.View
                    && resJson.Response.View[0]
                    && resJson.Response.View[0].Result
                    && resJson.Response.View[0].Result[0]) 
                {
                setEnderecoAtual(resJson.Response.View[0].Result[0].Location.Address.Label)
                let obj = {
                  endereco: resJson.Response.View[0].Result[0].Location.Address.Label
                }
                asyncStorage.storeData("LocalizacaoIdoso", JSON.stringify(obj))

                resolve(resJson.Response.View[0].Result[0].Location.Address.Label)
              } else {

                resolve()
              }
            })
            .catch((e) => {
              console.log('Error in getAddressFromCoordinates', e)
              resolve()
            })
        })
      }

    function abrirMapa() {
      let endereco = "R. "+ user.Rua + ", " + user.Numero +" - "+ user.Bairro +", "+ user.Cidade +" - "+ user.Estado + ", " + user.Cep; 
      openMap({ start: enderecoAtual, end: endereco })
    }

    useEffect(() => {

        let isMounted = true;    

        if (isMounted){
            const unsubscribe = navigation.addListener('focus', () => {
                callLocation()
                Idoso.findByUserCuidadorCpf(route.params.Cpf).then(result => {
                  console.info(result)
                  setUser(result)
                })
            })

            return unsubscribe
        }
    }, [navigation]);      

    return (
      <>
      <Titulo titulo="Mapa"></Titulo>
      <View style={styles.containerDois}>
        <TouchableOpacity onPress={abrirMapa} style={styles.btnLocalizacao}>
            <Image source={require("../../img/localizacao.png")} style={styles.image}></Image>
            <Text style={styles.text}>Voltar para Casa</Text>
        </TouchableOpacity>
      </View>
      </>
    )
}

export default Mapa