import { expect, element, by, waitFor, device} from 'detox';


describe('Login with SM ID', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  test('case 1 Login ', async () => {
    await device.reloadReactNative();
    await element(by.id('username')).typeText('Sm01');
    await element(by.id('password')).typeText('123456');

    await element(by.id('Login')).tap();
  });

  test('case 2 Home ', async () => {
    await expect(element(by.id('header'))).toBeVisible();

    await element(by.id('Profile')).tap();
  });

  test('case 3 Profile', async() => {
    await element(by.id('search')).typeText('สมชาย');

    await element(by.id('search')).clearText();

    await element(by.text('Tap Me!'));

    await element(by.id('addPP')).tap();

  });

  test('case 4 Add PP', async() => {
    await element(by.id('open')).tap();
    
    await element(by.id('nameTitle')).typeText('นาย');
    await element(by.id('firstname')).typeText('ธเนศพล');
    await element(by.id('lastname')).typeText('กาญจนสันติกุล');
  });
});
