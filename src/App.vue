<template>
<CalculatorMain/>
</template>

<script>
import CalculatorMain from './main/CalculatorMain'
export default {
  components:{
    CalculatorMain
  }
};
</script>
<style>
@font-face {
  font-family: RobotoMono;
  src: url('./fonts/RobotoMono-Thin.ttf');
}
*{
  font-family: 'RobotoMono','monospace';
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background:linear-gradient(to right, rgb(84, 51, 255), rgb(32, 189, 255), rgb(165, 254, 203));
}
</style>
