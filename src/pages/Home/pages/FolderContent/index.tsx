import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FolderContainer from "../../components/FolderContainer";

import { useNavigation } from '@react-navigation/native';

function FolderContent({ route }) {
    const { folderName } = route.params; // Nome da pasta que foi clicada
    const [subFolders, setSubFolders] = useState([]); // Estado para armazenar as subpastas
    const [newFolderName, setNewFolderName] = useState(''); // Nome da nova subpasta
    const navigation = useNavigation();

    // Função para criar uma nova subpasta com descrição
    const handleCreateNewFolder = () => {
        if (newFolderName.trim()) {
            // Adiciona nova subpasta com descrição
            setSubFolders([...subFolders, { name: newFolderName }]);
            setNewFolderName(''); // Limpa o campo de nome
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={styles.folderRoutes}>
                <Ionicons name="arrow-redo-sharp" size={24} color="white" />
                <AntDesign name="folderopen" size={24} color="white" />
                <Text style={{ fontSize: 20, color: 'white' }}>{folderName}</Text>
            </View>

            {/* Input para nome da subpasta*/}
            <TextInput
                style={{ padding: 10 }}
                placeholder="Nome da nova pasta"
                value={newFolderName}
                onChangeText={setNewFolderName}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.createButton}
                    onPress={handleCreateNewFolder}  // // Lógica para criar nova subpasta com descrição
                >
                    <Text>
                        Nova Pasta
                    </Text>
                    <AntDesign name="addfolder" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.createButton}
                    onPress={() => {/* lógica de criação */ }}
                >
                    <Text>
                        Nova Relatório
                    </Text>
                    <Fontisto name="file-1" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {subFolders.map((subFolder, index) => (
                <View key={index} style={styles.subFolderContainer}>
                    <FolderContainer
                        title={subFolder.name}
                        onFolderPress={() => navigation.navigate('FolderContent', { folderName: subFolder.name })}
                    />
                </View>
            ))}
        </View>
    );
}

export default FolderContent;

const styles = StyleSheet.create({
    folderRoutes: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#89898a',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 8,
    },
    createButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c7cd',
        gap: 10,
        padding: 6,
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
});

