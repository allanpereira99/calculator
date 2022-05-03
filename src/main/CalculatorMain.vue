<template>
  <div class="calculator">
    <DisplayCalculator :value="displayValue" />
    <ButtonCalculator @onClick="clearMemory" label="AC" triple operation />
    <ButtonCalculator @onClick="setOperation" label="/" operation />
    <ButtonCalculator @onClick="setNumber" label="7" />
    <ButtonCalculator @onClick="setNumber" label="8" />
    <ButtonCalculator @onClick="setNumber" label="9" />
    <ButtonCalculator @onClick="setOperation" label="*" operation />
    <ButtonCalculator @onClick="setNumber" label="4" />
    <ButtonCalculator @onClick="setNumber" label="5" />
    <ButtonCalculator @onClick="setNumber" label="6" />
    <ButtonCalculator @onClick="setOperation" label="-" operation />
    <ButtonCalculator @onClick="setNumber" label="1" />
    <ButtonCalculator @onClick="setNumber" label="2" />
    <ButtonCalculator @onClick="setNumber" label="3" />
    <ButtonCalculator @onClick="setOperation" label="+" operation />
    <ButtonCalculator @onClick="setNumber" label="0" double />
    <ButtonCalculator @onClick="setNumber" label="." />
    <ButtonCalculator @onClick="setOperation" label="=" operation />
  </div>
</template>

<script>
import DisplayCalculator from "../components/DisplayCalculator";
import ButtonCalculator from "../components/ButtonCalculator";
export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  components: { DisplayCalculator, ButtonCalculator },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;
        switch (currentOperation) {
          case "+":
            this.values[0] = this.values[0] + this.values[1];
            this.values[1] = 0;
            break;
          case "-":
            this.values[0] = this.values[0] - this.values[1];
            this.values[1] = 0;
            break;
          case "/":
            this.values[0] = this.values[0] / this.values[1];
            this.values[1] = 0;
            break;
          case "*":
            this.values[0] = this.values[0] * this.values[1];
            this.values[1] = 0;
            break;
        }
        (this.displayValue = this.values[0]),
          (this.operation = equals ? null : operation),
          (this.current = equals ? 0 : 1),
          (this.clearDisplay = !equals);
      }
    },
    setNumber(number) {
      if (number === "." && this.displayValue.includes(".")) {
        return;
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + number;
      this.displayValue = displayValue;
      this.clearDisplay = false;
      if (number != ".") {
        const i = this.current;
        const newvalue = parseFloat(displayValue);
        this.values[i] = newvalue;
      }
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>