import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export function IntroScreen({ children }: PropsWithChildren) {
  return (
    <View style={styles.background}>
      <View style={styles.content}>
        <View style={styles.card}>
          <ScrollView
            style={styles.cardBody}
            contentContainerStyle={styles.cardContent}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export const introStyles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 'auto',
  },
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f4f8f4',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    padding: 24,
    borderRadius: 25,
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardBody: {
    flex: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
});
