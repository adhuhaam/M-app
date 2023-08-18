
import React from 'react'
import { Block,theme, Text, galioConfig } from "galio-framework";
import { StyleSheet } from 'react-native'
import { Language } from '../constants';
import config from './../config'

export default function EarningBox(props) {
    const cardContainer = [styles.card, styles.shadow];
    return (
        <Block row={true} card flex style={cardContainer}>
             <Block flex space="between" style={styles.cardDescription}>
             <Text h7 bold center style={styles.cardTitle} color={props.color} >{props.title.toUpperCase()}</Text>
             <Block flex space="between" row style={{paddingHorizontal:50}} >
                <Block>
                    <Text bold>{props.earnings.orders} {Language.orders}</Text>
                </Block>
                <Block>
                    <Text bold>{props.earnings.earning.toFixed(2)} {config.currencySign}</Text>
                </Block>
             </Block>
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
   
    card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE,
        borderWidth: 0,
        minHeight: 100,
        marginBottom: 16,
        marginHorizontal:10
      },
      cardTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6,
        paddingVertical:10

      },
      cardDescription: {
        padding: theme.SIZES.BASE / 2
      },
      shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
      }
})