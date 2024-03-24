<template>
  <div class="info" :class="{ 'alert': temperature > temperatureThreshold || humidity > humidityThreshold }">
    <b-card no-body class="overflow-hidden">
      <b-card-body title="智能预警系统" class="text-center">
        <b-card-text>
          <br />
          <b-row>
            <b-col cols="6">
              <b-card-text>
                <b-icon-thermometer-half></b-icon-thermometer-half> 温度: {{ temperature }} °C
              </b-card-text>
              <b-card-text>
                <b-icon-droplet-fill></b-icon-droplet-fill> 湿度: {{ humidity }} %
              </b-card-text>
            </b-col>
            <b-col cols="6">
              <b-card-text>
                <b-icon-gear-fill></b-icon-gear-fill> PH值: {{ phValue }}
              </b-card-text>
              <b-card-text>
                <b-icon-sun-fill></b-icon-sun-fill> 光照强度: {{ lightIntensity }} lux
              </b-card-text>
            </b-col>
          </b-row>
          <br />
          <b-button @click="setAlert" variant="primary">设置预警阈值</b-button>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: 25,
      humidity: 60,
      phValue: 7.2,
      lightIntensity: 500,
      temperatureThreshold: 30,
      humidityThreshold: 70
    };
  },
  methods: {
    setAlert() {
      let temperatureThreshold = prompt("请输入温度阈值：", this.temperatureThreshold);
      if (temperatureThreshold !== null) {
        this.temperatureThreshold = parseFloat(temperatureThreshold);
      }

      let humidityThreshold = prompt("请输入湿度阈值：", this.humidityThreshold);
      if (humidityThreshold !== null) {
        this.humidityThreshold = parseFloat(humidityThreshold);
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.temperature += Math.random() * 2 - 1; // +/- 1
      this.humidity += Math.random() * 2 - 1; // +/- 1
      this.phValue = Math.random() * 3 + 6; // 6-9
      this.lightIntensity = Math.random() * 500 + 500; // 500-1000
    }, 5000); // 5秒更新一次
  }
};
</script>

<style scoped>
.info {
  margin: 0 auto;
  width: 70%;
  transition: background-color 0.5s;
}

.alert {
  background-color: red; /* 设置预警状态下的背景颜色 */
}
</style>
