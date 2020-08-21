import React from 'react'
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  StyleProp,
  TextInput,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { langSearchPPPC } from '../../../assets/languages/langSearchPPPC';
import PPPCSectionHeader2 from './PPPCSectionHeader2';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './index';


const { width: WIDTH, height } = Dimensions.get('window')


export default class PPPCSectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: false,
      nameTitle: '',
      firstname: '',
      lastname: ''
    }
  }


  render() {
    return (
      <View style={styles.CONTAINER}>
        {this.state.enable == false ?
          <View>
            <TouchableOpacity style={styles.TouchableClose} >
              <View style={styles.SECTION_CONTENT}>
                <Image source={images.required} style={styles.SECTION_IMAGE} />
                <View style={styles.SECTION_TEXT}>
                  <Text style={styles.TEXT} >
                    {`${this.props.name}`}
                    {this.props.required ?
                      <Text style={{ color: colors.google }}>{'*'}</Text>
                      : <Text style={{ color: colors.google }}>{'^'}</Text>
                    }
                  </Text>
                </View>
                <TouchableOpacity onPress={() => this.setState({ enable: !this.state.enable })} testID="open">
                  <Icon name={'chevron-down'} style={styles.ICON} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <PPPCSectionHeader2 />
          </View>
          :
          <View style={styles.CONTAINER}>
            <TouchableOpacity style={styles.TouchableOpen}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'gray', }}>
                <Image source={images.required} style={styles.SECTION_IMAGE_OPEN} />
                <View style={{ top: '-32%', left: 15 }}>
                  <Text style={styles.TEXT} testID={'text'}>
                    {`${this.props.name}`}
                    {this.props.required ?
                      <Text style={{ color: colors.google }}>{'*'}</Text>
                      : <Text style={{ color: colors.google }}>{'^'}</Text>}
                  </Text>
                </View>

                <View style={{ top: '-20%', right: '30%' }}>
                  <Text style={styles.TEXT}>
                    {`${langSearchPPPC.th.SalutationEmpty}`}
                    <Text style={{ color: colors.google }}>{'*'}</Text>
                  </Text>
                  <TextInput
                    style={styles.SECTION_TEXTINPUT}
                    value={this.state.nameTitle}
                    onChangeText={(nameTitle) => this.setState({ nameTitle })}
                    testID={'nameTitle'}
                  />
                </View>

                <View style={{ top: '0%', right: '145%' }}>
                  <View style={{ flexDirection: 'row', top: wp('-7%') }}>
                    <Text style={styles.TEXT}>
                      {`${langSearchPPPC.th.username}`}
                      <Text style={{ color: colors.google }}>{'*'}</Text>
                    </Text>
                    <Text style={[styles.TEXT, { left: wp('33%') }]}>
                      {`${langSearchPPPC.th.lastname}`}
                      <Text style={{ color: colors.google }}>{'*'}</Text>
                    </Text>
                  </View>
                </View>

                <View style={styles.SPACE_INPUT}>
                  <TextInput
                    style={[styles.BOX_BETWEEN]}
                    value={this.state.firstname}
                    onChangeText={(firstname) => this.setState({ firstname })}
                    testID={'firstname'}
                  />
                  <TextInput
                    style={[styles.BOX_BETWEEN, { left: '10%', width: wp('50%') }]}
                    value={this.state.lastname}
                    onChangeText={(lastname) => this.setState({ lastname })}
                    testID={'lastname'}
                  />
                </View>

                <TouchableOpacity onPress={() => this.setState({ enable: !this.state.enable })} testID="close">
                  <Icon name={'chevron-up'} style={{ left: wp('-65%'), top: '-42%' }} />
                </TouchableOpacity>

              </View>
            </TouchableOpacity>
            <PPPCSectionHeader2 />
          </View>
        }
      </View>

    )
  }
}
