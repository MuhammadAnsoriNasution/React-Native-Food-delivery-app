import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import sourceImage from '../assets/images';
import CardCategory from '../components/cards/CardCategory';
import CardProduct from '../components/cards/CardProduct';
import InputSearch from '../components/form/InputSearch';
import ListHorizontal from '../components/list/ListHorizontal';
import { cocolate, danger, danger100, secondary, secondary100, white } from '../utils/colors';
import { NavigationProp } from '@react-navigation/native';
import routes from '../routers/routes';

export default function HomeScreen({ navigation }: { navigation: NavigationProp<any, any> }) {
    const datacategory = [
        { category: 'Pizzas', image: sourceImage.pizza, },
        { category: 'Burger', image: sourceImage.burger, },
        { category: 'Sandwich', image: sourceImage.sandwich, },
        { category: 'Desayuno', image: sourceImage.desayuno, },
        { category: 'Brochets', image: sourceImage.brochette, },
        { category: 'Pizzas', image: sourceImage.pizza, },
        { category: 'Burger', image: sourceImage.burger, },
        { category: 'Sandwich', image: sourceImage.sandwich, },
        { category: 'Desayuno', image: sourceImage.desayuno, },
        { category: 'Brochets', image: sourceImage.brochette, },
    ]

    const dataProduct = [
        { name: 'Pizzas', image: sourceImage.pizza, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 50, from: 90 },
        { name: 'Burger', image: sourceImage.burger, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 25, from: 0 },
        { name: 'Sandwich', image: sourceImage.sandwich, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 30, from: 90 },
        { name: 'Desayuno', image: sourceImage.desayuno, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 21, from: 0 },
        { name: 'Brochets', image: sourceImage.brochette, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 25, from: 90 },
        { name: 'Pizzas', image: sourceImage.pizza, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 12, from: 90 },
        { name: 'Burger', image: sourceImage.burger, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 32, from: 0 },
        { name: 'Sandwich', image: sourceImage.sandwich, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 42, from: 90 },
        { name: 'Desayuno', image: sourceImage.desayuno, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 33, from: 0 },
        { name: 'Brochets', image: sourceImage.brochette, body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nemo exercitationem debitis, non ut quos unde voluptatum magnam reiciendis vel. Facilis cupiditate est aspernatur officiis vitae, nihil aliquid perspiciatis quis!', price: 50, from: 90 },
    ]
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.halo}>Hey There!</Text>
            <Text style={styles.title}>Find your meal now</Text>
            <InputSearch />
            <ListHorizontal
                label='Categories'
                onPressSeeAll={() => console.log('halo')}
                data={datacategory}
                renderItem={({ item, index }) => {
                    let color = index == 0 ? secondary100 : secondary
                    let bgColor = index == 0 ? danger100 : white
                    return <CardCategory item={item} color={color} bgColor={bgColor} />
                }}
                onPress={() => console.log('a')}
                top={30}
            />

            <ListHorizontal
                label='Meals for you'
                onPressSeeAll={() => console.log('halo')}
                data={dataProduct}
                renderItem={({ item, index }) => {
                    return <CardProduct name={item.name} body={item.body} image={item.image} price={item.price} pricefrom={item.from} onPress={() => navigation.navigate(routes.detail.name, { data: item })} />
                }}
                onPress={() => console.log('a')}
                top={30}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingHorizontal: 10,
        paddingTop: 20
    },
    halo: {
        fontWeight: 'bold',
        fontSize: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: cocolate,
        marginBottom: 20
    },
    scrollView: {
        flexGrow: 0,
        marginTop: 10,
        marginHorizontal: -10,
    }
})
