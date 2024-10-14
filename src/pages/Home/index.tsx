import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
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

            <View style={styles.fileCategories}>
                <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#9298a4' }]}>
                    <View>
                        <AntDesign name="folderopen" size={24} color="black" />
                    </View>
                    <Text style={styles.categoryTitle}>Empresa 1</Text>
                    <Text>10 relatórios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#9298a4' }]}>
                    <View>
                        <AntDesign name="folderopen" size={24} color="black" />
                    </View>
                    <Text style={styles.categoryTitle}>Empresa 2</Text>
                    <Text>25 relatórios</Text>
                </TouchableOpacity>
            </View>

            {/* Barra de Navegação Inferior */}
            {/* <View style={styles.navigationBar}>
                <Text>🏠 Home</Text>
                <Text>📁 My Files</Text>
                <Text>⬆️ Upload</Text>
                <Text>🔔 Notifications</Text>
                <Text>👤 Profile</Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c6cad2',
        marginTop: 40,
    },
    header: {
        marginBottom: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        height: 50,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderColor: '#9298a4',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
    },
    searchButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#9298a4',
        borderRadius: 5,
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
