var libCssList = [
    "semantic-ui/dist/semantic.css"
];

var basePath = "lib/";
var libCssListLength = libCssList.length;

for (var fileIndex = 0; fileIndex < libCssListLength; fileIndex++) {
    libCssList[fileIndex] = basePath + libCssList[fileIndex];
}

module.exports = libCssList;
