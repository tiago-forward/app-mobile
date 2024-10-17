import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

import { useNavigation } from '@react-navigation/native';

import AntDesign from '@expo/vector-icons/AntDesign';

import FolderContainer from "./components/FolderContainer";

export default function Home() {
    const navigation = useNavigation();
    const [folders, setFolders] = useState([]); // Estado para as pastas principais

    const createFolder = (folderName) => {
        setFolders([...folders, folderName]); // Adiciona uma nova pasta
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>Bem vindo Empresa X</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput placeholder="Localizar pasta" style={styles.searchInput} />
                <TouchableOpacity style={styles.searchButton}>
                    <Text>
                        <AntDesign name="search1" size={24} color="black" />
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.createButton}
                onPress={() => createFolder("Nova Pasta")}
            >
                <Text>
                    Nova Pasta
                </Text>
                <AntDesign name="addfolder" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.fileCategories}>
                {folders.map((folder, index) => (
                    <FolderContainer
                        key={index}
                        title={folder}
                        onFolderPress={() => navigation.navigate('FolderContent', { folderName: folder })}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 40,
    },
    header: {
        marginBottom: 20,
        marginTop: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        height: 50,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderColor: '#89898a',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
    },
    searchButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#89898a',
        borderRadius: 5,
    },
    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c7cd',
        gap: 10,
        marginBottom: 14,
        padding: 6,
        marginTop: 14,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
    fileCategories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryCard: {
        width: '48%', // Ocupa quase metade da linha
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        gap: 10,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
    },
});
