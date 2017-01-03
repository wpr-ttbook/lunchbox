// widths and padding
var canvasWidth = 1000; // this will be the exported width of the image
var elementPadding = 40; // padding around the logo and credit text

// logo configuration
// the name of the logo object should match the value of the corresponding radio button in the HTML.
var logos = {
    'TTBOOK': {
        whitePath: '../img/TTBOOK_color_reverse.svg', // path to white logo
        blackPath: '../img/TTBOOK-black.png', // path to black logo
        w: 400, // width of logo
        h: 122, // height of logo
        display: 'TTBOOK'
    },
    'tree': {
        whitePath: '../img/TTBOOK-tree.png', // path to white logo
        blackPath: '../img/TTBOOK-tree.png', // path to black logo
        w: 102,
        h: 102,
        display: 'Tree Only'
    }

};

// logo opacity for colors
var whiteLogoAlpha = '0.8';
var blackLogoAlpha = '0.6';

// type
var fontWeight = 'normal'; // font weight for credit
var fontSize = '14pt'; // font size for credit
var fontFace = "Droid Serif"; // font family for credit
var fontShadow = 'rgba(0,0,0,0.7)'; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = 'TTBOOK';
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
var currentLogo = 'TTBOOK'; // default logo slug
var currentLogoColor = 'white'; // default logo color
var currentTextColor = 'white'; // default text color
var defaultImage = '../img/test-kitten.jpg'; // path to image to load as test image
var defaultLogo = logos[currentLogo]['whitePath'] // path to default logo
