import {config} from '@gluestack-ui/config';
import {Button, ButtonText, GluestackUIProvider} from '@gluestack-ui/themed';
import {View} from 'react-native';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View className="flex p-5">
        <Button size="sm" action="positive" variant="solid">
          <ButtonText>Submit</ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>
  );
}
