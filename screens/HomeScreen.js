import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TouchableWithoutFeedback, Animated,Image,Alert} from 'react-native'
import * as firebase from 'firebase'


export default class HomeScreen extends React.Component {
    state ={
        email:"",
        displayName:""

    }
    componentDidMount(){
        const {email,displayName}=firebase.auth().currentUser;
        this.setState({email,displayName});
    }
    signOutUser=()=>{
        firebase.auth().signOut();
    }



    render() {
        return(
        <View style={styles.container}>
            <Text>Hi{this.state.email}!</Text>
            <TouchableOpacity style={{marginTop:32}}onPress={this.signOutUser}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
        )

    }
    toggleOpen = () => {


    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white'

            }}>

                <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: '#F2F2F2',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10


                }}>

                    <TouchableWithoutFeedback onPress={this.toggleOpen}>
                        <View style={[styles.button, styles.actionBtn]}>

                            <Image style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                                source={{ uri: 'file:///Users/vijaykumar/Downloads/navigation%203/Ellipse.png' }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{

                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'http://pixsector.com/cache/afb480a4/aveb8d3f1fac7a77e24f0.png' }}

                                onPress={()=>{Alert.alert("")}}
                            >

                            </Image>

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            onPress={() => { Alert.alert("click") }}
                        >
                            <Image
                                style={{  width: 30, height: 30 }}
                                source={{ uri: 'http://pixsector.com/cache/8acaf779/av379cb1a1c35cdcfee50.png' }}
                                onPress={() => { Alert.alert("click") }}
                            />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center' }}>wallet </Text>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'space-between',marginStart:85,
                        }}>

                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Image
                                    source={{ uri: 'http://pixsector.com/cache/a1dd5a90/av895b2bd52a42e99ee3c.png' }}
                                    onPress={() => { Alert.alert("click") }}
                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                       
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Menu </Text>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Image
                                    source={{ uri: 'http://pixsector.com/cache/94bed8d5/av3cbfdc7ee86dab9a41d.png' }}

                                    style={{ marginHorizontal: 16, width: 40, height: 35 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                     
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Profile </Text>
                           
                        </View>

                    {/* </View> */}
                </View>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});