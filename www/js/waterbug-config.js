// widths and padding
var canvasWidth = 1000; // this will be the exported width of the image
var elementPadding = 40; // padding around the logo and credit text

// logo configuration
// the name of the logo object should match the value of the corresponding radio button in the HTML.
var logos = {
    'Sideways': {
        whitePath: '../img/WisContext-logo-1c-white-HOR.png', // path to white logo
        blackPath: '../img/WisContext-logo-1c-black-HOR.png', // path to black logo
        w: 200, // width of logo
        h: 37, // height of logo
        display: 'Horizontal'
    },
    'Stacked': {
        whitePath: '../img/WisContext-logo-1c-white-stacked.png', // path to white logo
        blackPath: '../img/WisContext-logo-1c-black-stacked.png', // path to black logo
        w: 150, // width of logo
        h: 77, // height of logo
        display: 'Stacked'
    }

};

// logo opacity for colors
var whiteLogoAlpha = '0.8';
var blackLogoAlpha = '0.6';

// type
var fontWeight = 'normal'; // font weight for credit
var fontSize = '14pt'; // font size for credit
var fontFace = "Roboto Condensed"; // font family for credit
var fontShadow = 'rgba(0,0,0,0.7)'; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = 'WisContext';
var freelanceString = 'for ' + orgName;

var copyrightOptions = {
    'internal': {
        showPhotographer: true, // show the photographer input box
        showSource: false, // show the source input box
        photographerRequired: false, // require a photographer
        sourceRequired: false, // require a source
        source: orgName, // How the source should appear on the image, e.g. 'NPR'
        display: orgName, // How the option will appear in the dropdown menu
    },
    'Public Domain/Unsplash': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'CC0 1.0',
        display: 'Public Domain'
    },
    'CC BY 3.0': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'CC BY 3.0',
        display: 'CC BY 3.0'
    },
    'CC BY-NC 2.0': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'CC BY-NC 2.0',
        display: 'CC BY-NC 2.0'
    },
    'ap': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'AP',
        display: 'AP'
    },
    'thirdParty': {
        showPhotographer: true,
        showSource: true,
        photographerRequired: false,
        sourceRequired: true,
        source: '',
        display: 'Third Party/Courtesy'
    }
}

// app load defaults
var currentCrop = 'twitter'; // default crop size
var currentLogo = 'Stacked'; // default logo slug
var currentLogoColor = 'white'; // default logo color
var currentTextColor = 'white'; // default text color
var defaultImage = '../img/test-kitten.jpg'; // path to image to load as test image
var defaultLogo = logos[currentLogo]['whitePath'] // path to default logo
