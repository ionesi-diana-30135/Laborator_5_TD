var app = new Vue({
  el: "#baseband-encoder",
  data: {
    bits: [],
    encodedBits: [],
    encodedNrzBits: [],
    encodedNrzMBits:[],
    encodedNrzSBits:[],
    encodedManchesterBits: [],
    encodedBiphaseMarkBits:[],
    encodedBiphaseSpaceBits:[],
    encodedRZBits:[],
    status: "",
    numberOfBits: 12,
    validateBit: validateBit,
  },
  created: function () {
    this.bits = getBitstream(this.numberOfBits);
  },
  methods: {
    encode: function () {
      this.encodedBits = getManchesterLevelEncoding(this.bits);
      this.encodedNrzBits = getNRZ(this.bits);
      this.encodedNrzMBits = getNRZM(this.bits);
      this.encodedNrzSBits = getNRZS(this.bits);
      this.encodedManchesterBits=getManchester(this.bits);
      this.encodedBiphaseMarkBits=getBiphaseMark(this.bits);
      this.encodedBiphaseSpaceBits=getBiphaseSpace(this.bits);
      this.encodedRZBits=getRZ(this.bits);
    },
  },
});
