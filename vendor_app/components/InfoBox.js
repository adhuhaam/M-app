
import React from 'react'
import { Block,theme, Text } from "galio-framework";
import { StyleSheet } from 'react-native'

export default function InfoBox(props) {
    const cardContainer = [styles.card, styles.shadow];
    if (props.hide) {
      return null;
    }
  
    return (
        <Block row={true} card flex style={cardContainer}>
             <Block flex space="between" style={styles.cardDescription}>
              <Text bold style={styles.cardTitle}>{props.title}</Text>
                {props.children}
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
   
    card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE,
        borderWidth: 0,
        minHeight: 114,
        marginBottom: 16
      },
      cardTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6
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