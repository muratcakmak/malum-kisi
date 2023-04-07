// Constants
const MALUM_KISI_DESCRIPTOR = {
  0: -0.0398639477789402,
  1: 0.12085884064435959,
  2: -0.015746133401989937,
  3: -0.016072042286396027,
  4: 0.0065946211107075214,
  5: -0.030904771760106087,
  6: -0.001763965468853712,
  7: -0.16378819942474365,
  8: 0.13580426573753357,
  9: -0.060861002653837204,
  10: 0.20547792315483093,
  11: -0.022609639912843704,
  12: -0.2156091183423996,
  13: -0.1495584398508072,
  14: 0.11644665896892548,
  15: 0.09593237191438675,
  16: -0.17043231427669525,
  17: -0.1328149437904358,
  18: -0.13423171639442444,
  19: -0.08640549331903458,
  20: -0.03951847180724144,
  21: -0.06444860994815826,
  22: -0.022464510053396225,
  23: -0.053389910608530045,
  24: -0.1364050656557083,
  25: -0.32662326097488403,
  26: -0.09769876301288605,
  27: -0.059037212282419205,
  28: 0.12437405437231064,
  29: -0.041741807013750076,
  30: 0.07892882078886032,
  31: -0.012934388592839241,
  32: -0.23851653933525085,
  33: -0.05544574186205864,
  34: 0.03987445309758186,
  35: 0.05025648698210716,
  36: 0.007075237110257149,
  37: 0.014484327286481857,
  38: 0.12266027927398682,
  39: 0.0013700303388759494,
  40: -0.13532577455043793,
  41: 0.02485569193959236,
  42: 0.020456966012716293,
  43: 0.19159598648548126,
  44: 0.19339928030967712,
  45: 0.0911027118563652,
  46: 0.05587539076805115,
  47: -0.10590974241495132,
  48: 0.07719465345144272,
  49: -0.21043021976947784,
  50: 0.0371892936527729,
  51: 0.12406256049871445,
  52: 0.1013416051864624,
  53: 0.07932691276073456,
  54: 0.09392154216766357,
  55: -0.1524137258529663,
  56: 0.03725919872522354,
  57: 0.09564361721277237,
  58: -0.22038927674293518,
  59: 0.05245140939950943,
  60: 0.0812409371137619,
  61: -0.06392327696084976,
  62: -0.04052455723285675,
  63: 0.019341999664902687,
  64: 0.14234691858291626,
  65: 0.028271885588765144,
  66: -0.05880795791745186,
  67: -0.10409535467624664,
  68: 0.16965295374393463,
  69: -0.16615760326385498,
  70: 0.019627384841442108,
  71: 0.015361504629254341,
  72: -0.00879038218408823,
  73: -0.20438796281814575,
  74: -0.31525561213493347,
  75: 0.06847921013832092,
  76: 0.33903029561042786,
  77: 0.1818854808807373,
  78: -0.164072185754776,
  79: 0.05457679554820061,
  80: -0.06055210158228874,
  81: -0.017949363216757774,
  82: 0.0931565910577774,
  83: -0.006716650910675526,
  84: -0.054298676550388336,
  85: -0.06586388498544693,
  86: -0.06993749737739563,
  87: 0.030424315482378006,
  88: 0.19627724587917328,
  89: -0.03074805997312069,
  90: 0.08523369580507278,
  91: 0.19011782109737396,
  92: -0.05939503386616707,
  93: -0.014614006504416466,
  94: -0.04181763157248497,
  95: 0.017829041928052902,
  96: -0.1071980819106102,
  97: 0.025407904759049416,
  98: -0.042063917964696884,
  99: -0.03264586254954338,
  100: 0.04507289081811905,
  101: -0.0806124359369278,
  102: 0.08070928603410721,
  103: 0.06884051859378815,
  104: -0.23513877391815186,
  105: 0.18186865746974945,
  106: 0.012744852341711521,
  107: -0.04998461529612541,
  108: -0.0009866938926279545,
  109: 0.0011523341527208686,
  110: 0.026501469314098358,
  111: -0.014070061035454273,
  112: 0.1340743601322174,
  113: -0.29452210664749146,
  114: 0.263619989156723,
  115: 0.2613908350467682,
  116: -0.0638330727815628,
  117: 0.15243086218833923,
  118: 0.001405675895512104,
  119: 0.08280821144580841,
  120: 0.0017876643687486649,
  121: -0.03020891360938549,
  122: -0.12417318671941757,
  123: -0.10735180974006653,
  124: -0.08655606955289841,
  125: -0.035721518099308014,
  126: -0.028982236981391907,
  127: 0.02443951554596424
};

var REPLACEMENT_IMAGES = [
  "https://i.ibb.co/X4CDKkZ/Screenshot-2023-04-07-at-12-15-48.png",
  "https://i.ibb.co/JmFx2gy/Screenshot-2023-04-07-at-12-15-31.png"
];

const REPLACEMENT_IMAGE =
  "https://2.bp.blogspot.com/-KTaLjeHK-8k/VxLjWllcY6I/AAAAAAAAgA4/089BdwV0GAAE1jArceDU8sHbdzUEitRcgCLcB/s1600/penguen_dergisi_kapagcc86c4b1_tayyipler_alemi.png";

(async () => {
  const modelUrl = (path) => chrome.runtime.getURL(path);

  await faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl("models"));
  await faceapi.nets.faceLandmark68Net.loadFromUri(modelUrl("models"));
  await faceapi.nets.faceRecognitionNet.loadFromUri(modelUrl("models"));

  const images = document.getElementsByTagName("img");
  const malumKisiDescriptor = new Float32Array(MALUM_KISI_DESCRIPTOR);

  const labeledMalumKisiDescriptor = new faceapi.LabeledFaceDescriptors(
    "Malum Kisi",
    [malumKisiDescriptor]
  );
  const faceMatcher = new faceapi.FaceMatcher(
    labeledMalumKisiDescriptor
  );

  for (const img of images) {
    chrome.runtime.sendMessage(
      { type: "fetchImage", url: img.src },
      async (response) => {
        const dataUrl = response.dataUrl;

        if (!dataUrl) return;

        faceapi.fetchImage(dataUrl).then(async (image) => {
          const detections = await faceapi
            .detectAllFaces(
              image,
              new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceDescriptors();

          if (detections.length === 0) return;

          detections.forEach((detection) => {

            if (detection.detection._score < 0.7) return;
            const bestMatch = faceMatcher.findBestMatch(
              malumKisiDescriptor,
              detections.map((d) => d.descriptor)
            );

            if (
              bestMatch.label !== "unknown" &&
              bestMatch.distance < 0.6
            ) {
              img.src =
                REPLACEMENT_IMAGES[Math.floor(Math.random() * 2)];
            }
          });
        });
      }
    );
  }
})();

window.onload = () => {
  const images = document.getElementsByTagName("img");
  const malumKisiRegex = /Erdo[ğg]an|Erdogan/i;
  const diplomaRegex = /diploma/i;

  for (const img of images) {
    const altText = img.getAttribute("alt");

    if (
      altText &&
      (malumKisiRegex.test(altText) || diplomaRegex.test(altText))
    ) {
      // Do something if the alt text matches the regular expression
      img.src = REPLACEMENT_IMAGE;
    }
  }
};

window.addEventListener("load", function () {
  const images = document.getElementsByTagName("img");
  const malumKisiRegex = /Erdo[ğg]an|Erdogan/i;
  const diplomaRegex = /diploma/i;

  for (const img of images) {
    const altText = img.getAttribute("alt");

    if (
      altText &&
      (malumKisiRegex.test(altText) || diplomaRegex.test(altText))
    ) {
      // Do something if the alt text matches the regular expression
      img.src = REPLACEMENT_IMAGES[Math.floor(Math.random() * 2)];
    }
  }
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const addedNodes = mutation.addedNodes;
    addedNodes.forEach((node) => {
      if (node.length === 0) return;
      if (node.querySelectorAll === undefined) return;
      const images = node.querySelectorAll("img[data-src]");
      images.forEach((image) => {
        const dataUrl = image.getAttribute("data-src");
        chrome.runtime.sendMessage(
          { type: "fetchImage", url: dataUrl },
          (response) => {
            image.setAttribute("src", response.dataUrl);
            image.removeAttribute("data-src");
            img.src = REPLACEMENT_IMAGE;
          }
        );
      });
    });
  });
});

observer.observe(document, { childList: true, subtree: true });
