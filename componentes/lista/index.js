import { FlatList, TouchableOpacity, Text } from "react-native";

const List = (props) => {
    const { itemList, onHandlerModal } = props

    return (
        <FlatList
            data={itemList}
            renderItem={(data) => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={StyleSheet.item}>
                    <Text style={{ textDecoderationLine: data.item.completed ? 'line-through' : null }}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
        />
    );
};

export default List;