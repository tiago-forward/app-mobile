import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button
} from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

interface FolderProps {
    title: string
    onFolderPress?: () => void
    onOptionsPress?: () => void
};

const Stack = createStackNavigator();

export default function FolderContainer({ title, onFolderPress, onOptionsPress }: FolderProps) {

    // function FolderContent({ navigation }) {
    //     return (
    //         <View>
    //             <Button title="Open SubFolder" onPress={() => navigation.navigate('SubFolder')} />
    //         </View>
    //     );
    // }

    // function SubFolder() {
    //     return (
    //         <View>
    //             <Text>SubFolder Content</Text>
    //         </View>
    //     );
    // }

    return (
        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#c4c7cd' }]} onPress={onFolderPress}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <AntDesign name="folderopen" size={24} color="black" />
                    <Text style={styles.categoryTitle}>{title}</Text>
                </View>

                <TouchableOpacity onPress={onOptionsPress} style={{ padding: 8, paddingRight: 12, paddingLeft: 12 }}>
                    <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text>2 pastas</Text>
            <Text>8 relatórios</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryCard: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 14,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
