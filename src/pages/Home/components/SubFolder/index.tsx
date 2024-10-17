import React from "react";
import { View, Text, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

function SubFolder({ route }) {
    const { folderName } = route.params;
    const navigation = useNavigation();

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Conteúdo da Subpasta: {folderName}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default SubFolder;