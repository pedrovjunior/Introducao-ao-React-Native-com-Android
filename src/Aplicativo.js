import React from 'react';
import {View, Image, Text,StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/102238084?v=4';

const urlToMyGithub = 'https://github.com/pedrovjunior'

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo link');
            await Linking.canOpenURL(urlToMyGithub);
        }
    };

    return( 
        //SafeAreaView protege seu componente de sair para uma área que ele não tenha acesso

        <SafeAreaView style={style.container}>
            {/*StatusBar Altera o status da navbar */}
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image 
                    accessibilitylabel="Foto do Pedro sorrindo tirada de lado"
                    style={style.avatar}
                    source={{uri: imageProfileGithub}}
                />
                <Text
                    accessibilitylabel='Nome: Pedro Valadares Júnior'
                    style={[style.defaultText, style.name]}>Pedro Valadares
                </Text>
                <Text 
                    accessibilitylabel='nickname: Pedro Junior' 
                    style={[style.defaultText, style.nickname]}>PedroJunior
                </Text>
                <Text 
                    accessibilitylabel='Descricao: Estudante de Big Data | Aluno Transforma Tec | Embaixador do DIO Campus Expert @pvj.valadares' style={[style.defaultText, style.description]}> Estudante de Big Data | Aluno Transforma Tec | Embaixador do DIO Campus Expert @pvj.valadares
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
})